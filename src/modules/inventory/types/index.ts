export interface Inventory {
  inventoryId: string;
  lista: string;
  calleYNumero: string;

  acreedor: string | null;
  alrededores: string | null;
  calificacion: string | null;
  cesion: string | null;
  colonia: string | null;
  construccion: number | null;
  contingencia: string | null;
  cp: number | null;
  deudor: string | null;
  direccionOriginal: string | null;
  estacionamientos: number | null;
  estado: string | null;
  estadoDeVivienda: string | null;
  estadoProcesal: string | null;
  etapa: string | null;
  etapaProcesal: string | null;
  expediente: string | null;
  fichasUrls: string | null;
  folioOriginal: string;
  fotosUrls: string | null;
  googleMaps: string | null;
  jurisdiccion: string | null;
  juzgado: string | null;
  latitud: string | null;
  longitud: string | null;
  municipio: string | null;
  primerPago: number | null;
  recamaras: number | null;
  sanitarios: number | null;
  segundoPago: number | null;
  terreno: number | null;
  tipoPropiedad: string | null;
  total: number | null;
  ultimaActualizacion: string | null;
  valorAproximado: number | null;

  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
}
