import { Mercancia } from "./Mercancia";

export interface IResponsee {
  error: string;
  message: string;
  data: Mercancia;
}
