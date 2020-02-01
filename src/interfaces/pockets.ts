import { Currencies } from "../constants/Currencies";

export type Pocket = {
  [k in Currencies]: number;
};

export interface PocketsInterface {
  dict: Pocket;
  exchangeFrom: Currencies;
  exchangeTo: Currencies;
  exchangeAmount?: number | undefined;
  exchangedAmount?: number | undefined;
}
