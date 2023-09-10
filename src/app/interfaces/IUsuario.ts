export interface IUsuario {
  id?: number;
  nombre: string;
  edad: number;
  fechaIngreso: Date;
  cargo: {
    id: number;
  };
}
