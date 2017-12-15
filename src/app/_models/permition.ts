import {Grasp} from "./grasp";
import {Patient} from "./patient";

export class Permition{
  id: number;
  isUnlocked: boolean;
  grasp: Grasp = new Grasp();
  patient: Patient = new Patient();
}
