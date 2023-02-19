import type { AvueFormColumn, AvueFormGroup } from "@smallwei/avue";

export type ResourceElement = AvueFormColumn & AvueFormGroup;

export interface History {
  type: string;
  timestamp: number;
  active: string;
  list: ResourceElement[];
}
