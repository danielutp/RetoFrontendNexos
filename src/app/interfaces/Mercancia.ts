import { Usuario } from './Usuario';

export interface Mercancia {
  id?: number;
  nombre: string;
  cantidad: number;
  fechaIngreso: Date;
  fechaActualizacion: string;
  usuario: Usuario;
}
