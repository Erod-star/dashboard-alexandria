export interface GoogleCalendarEvent {
  summary: string; // Título del evento
  location?: string; // Ubicación del evento (opcional)
  description?: string; // Descripción del evento (opcional)
  start: {
    dateTime: string | undefined; // Fecha y hora de inicio en formato ISO (Ej. "2024-10-01T10:00:00-07:00")
    timeZone: string; // Zona horaria
  };
  end: {
    dateTime: string | undefined; // Fecha y hora de fin en formato ISO
    timeZone: string; // Zona horaria
  };
  attendees?: Array<{ email: string }>; // Lista de asistentes (opcional)
  reminders?: {
    useDefault: boolean;
    overrides?: Array<{ method: string; minutes: number }>;
  };
}
export interface EventItem {
  kind: string;
  etag: string;
  id: string;
  status: string;
  htmlLink: string;
  created: Date;
  updated: Date;
  summary: string;
  creator: EventCreator;
  organizer: EventCreator;
  start: {
    dateTime: Date;
    timeZone: string;
  };
  end: {
    dateTime: Date;
    timeZone: string;
  };
  iCalUID: string;
  sequence: number;
  reminders: { useDefault: boolean };
  eventType: string;
}

export interface EventCreator {
  email: string;
  self: boolean;
}

export interface EventReminder {
  method: string;
  minutes: number;
}
