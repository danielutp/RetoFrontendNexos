export interface IMercancia {
  id?: number;
  nombre: string;
  cantidad: number;
  fechaIngreso: Date;
  fechaActualizacion: string;
  persona: {
    id: number;
  };
}
