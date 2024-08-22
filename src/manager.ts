import { Employee } from "./employee";

export interface Manager extends Employee {
   division: string;
}