export interface IMercancia {
  id?: number;
  nombre: string;
  cantidad: number;
  fechaIngreso: Date;
  persona: {
    id: number;
  };
}
