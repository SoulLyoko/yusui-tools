import type { AvueFormColumn, AvueFormGroup } from "@smallwei/avue";

export type ResourceElement = AvueFormColumn & AvueFormGroup & { path?: string };

export interface Resource {
  type?: string;
  component?: string;
  label?: string;
  icon?: string;
  group?: string;
  settings?: AvueFormColumn[];
  [x: string]: any;
}

export interface History {
  type: string;
  timestamp: number;
  active: ResourceElement;
  list: ResourceElement[];
}
