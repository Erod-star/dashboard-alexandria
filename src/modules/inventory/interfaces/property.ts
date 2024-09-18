export type Property = {
  id: string;
  photos: string[];
  name: string;
  totalSpace: number;
  totalBuildedSpace: number;
  dateOfRegistration: string;
  commercialValue: number;
  finishValue: number;
  category: PropertyCategory;
  type: PropertyType;
  availability: 'Disponible' | 'Apartada' | 'Vendida';
};

export type PropertyCategory =
  // ? Premium
  | 'Cobranza'
  | 'Juicio'
  | 'Sentencia'
  | 'Adjudicada'
  // ? Classic
  | 'Altaltium'
  | 'Preventa'
  | 'Consignación'
  | 'Banco';

export type PropertyType =
  | 'Casa'
  | 'Departamento'
  | 'Condominio'
  | 'Nave industrial'
  | 'Terreno'
  | 'Local'
  | 'Oficina';
