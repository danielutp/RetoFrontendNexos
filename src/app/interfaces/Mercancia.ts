import { Usuario } from './Usuario';
export interface Mercancia {
  id: number;
  nombre: string;
  cantidad: number;
  fechaIngreso: Date;
  usuario: Usuario;
}
