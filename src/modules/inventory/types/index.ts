export interface Inventory {
  inventoryId: string;
  lista: string;
  folioOriginal: string;

  // ? Direccion
  calleYNumero: string;
  colonia: string | null;
  estado: string | null;
  municipio: string | null;
  cp: number | null;
  googleMaps: string | null;

  acreedor: string | null;
  alrededores: string | null;
  calificacion: string | null;
  cesion: string | null;
  construccion: number | null;
  contingencia: string | null;
  deudor: string | null;
  direccionOriginal: string | null;
  estacionamientos: number | null;
  estadoDeVivienda: string | null;
  estadoProcesal: string | null;
  etapa: string | null;
  etapaProcesal: string | null;
  expediente: string | null;
  fichasUrls: string | null;
  fotosUrls: string | null;
  jurisdiccion: string | null;
  juzgado: string | null;
  latitud: string | null;
  longitud: string | null;
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

export interface InventoryAddress {
  calleYNumero: string;
  colonia: string | null;
  estado: string | null;
  municipio: string | null;
  cp: number | null;
  googleMaps: string | null;
}
