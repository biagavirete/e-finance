import axios from "axios";

const currencyApi = axios.create({
  baseURL: 'https://v2.api.forex/infos/currency'
})

const currencyListApi = axios.create({
  baseURL: 'https://v2.api.forex/infos'
})

const CurrencyService = {
  listCurrencies: () => currencyListApi.get('/currencies.json'),
  getCurrency: (currency: any) => currencyApi.get(`/${currency}.json?lang=pt`)
}

export default CurrencyService;
