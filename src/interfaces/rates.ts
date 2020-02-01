import { Currencies } from "../constants/Currencies";

export interface RatesDTO {
  rates: {
    [key in Currencies]: number;
  };
  base: string;
  date: string;
}
