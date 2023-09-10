import { Mercancia } from "./Mercancia";

export interface IResponse {
  error: string;
  message: string;
  data: Mercancia[];
}
