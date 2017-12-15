import {Midia} from "./midia";
import {Object} from "./object";

export class Exercise {
  id: number;
  title: string;
  description: string;
  midia: Midia = new Midia();
  objects: Object[];
}
