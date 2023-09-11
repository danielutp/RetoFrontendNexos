import { Mercancia } from "./Mercancia";
import { Usuario } from "./Usuario";

export interface IResponseU {
  error: string;
  message: string;
  data: Usuario[];
}
