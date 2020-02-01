import { Currencies } from "../constants/Currencies";
import { ExchangeType } from '../constants/Exchange';

export interface Option {
  name: Currencies;
  balance: number;
  type: ExchangeType;
}
