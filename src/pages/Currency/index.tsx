import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as CurrencyActions from '../../store/ducks/currency/actions';

function Currency() {
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CurrencyActions.loadCurrenciesListRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const responseCurrency = useSelector((state: any) => state.currency.currenciesList);
  const currencyArray = Object.values(responseCurrency);

  const selectCurrency = (param: any) => {
    setSelectedCurrency(param);
    console.log('selected currency', selectedCurrency)
    if (selectedCurrency !== '') {
      try {
        dispatch(CurrencyActions.loadCurrencyRequest(selectedCurrency))
      } catch (e) {
        console.log(e)
      }
    }
  }

  const currencyData = useSelector((state: any) => state.currency.data)
  console.log('currency data', currencyData)
  const currencyDataArray: any = Object.values(currencyData)

  return (
    <>
      <div className="countries">
        <h1>Moedas</h1>
        {currencyArray !== undefined && currencyArray.map((currency: any) => (
          <ul>
            <li key={currency.country_code}>
              <h3 onClick={() => selectCurrency(currency.currency_code)} >{currency.name}</h3>
              <p><strong>{currency.currency_code}</strong> - {currency.symbol}</p>
            </li>
          </ul>
        ))}
      </div>

      {/* <div className="selected-country-info">
        {selectedCurrency !== undefined ? (
          <>
            <h1>Você escolheu: {currencyDataArray[0].country_name} ({currencyDataArray[0].country_code})</h1>
            <p><strong>{currencyDataArray[0].currency_code} - {currencyDataArray[0].symbol}</strong></p>
          </>
        ) : null}
      </div> */}
    </>
  )
}

export default Currency;