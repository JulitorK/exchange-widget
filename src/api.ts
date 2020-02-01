import { Currencies } from "./constants/Currencies";
import axios from "axios";
import { RatesDTO } from "./interfaces/rates";

const Api = {
  getRate: (base: Currencies) =>
    axios.get<RatesDTO>(`https://api.exchangeratesapi.io/latest?base=${base}`)
};

export default Api;
