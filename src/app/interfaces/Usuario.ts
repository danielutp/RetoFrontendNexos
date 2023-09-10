import { Cargo } from './Cargo';

export interface Usuario {
  id?: number;
  nombre: string;
  edad: number;
  fechaIngreso: Date;
  cargo: Cargo;
}
