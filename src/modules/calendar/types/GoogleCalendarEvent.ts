export interface GoogleCalendarEvent {
  summary: string; // Título del evento
  location?: string; // Ubicación del evento (opcional)
  description?: string; // Descripción del evento (opcional)
  start: EventDateTime;
  end: EventDateTime;
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
  description: string;
  creator: EventCreator;
  organizer: EventCreator;
  start: EventDateTime;
  end: EventDateTime;
  iCalUID: string;
  sequence: number;
  reminders: { useDefault: boolean };
  eventType: string;
}

export interface EventDateTime {
  dateTime: Date | string;
  timeZone: string;
}

export interface EventCreator {
  email: string;
  self?: boolean;
}

export interface EventReminder {
  method: string;
  minutes: number;
}
