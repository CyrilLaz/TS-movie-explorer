import { ChangeEvent } from "react";

export interface IFormValidator {
  name: string;
  validator: (e: ChangeEvent<HTMLInputElement>) => boolean;
  message: string;
}
