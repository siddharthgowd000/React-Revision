import { useState } from "react";
import { useEffect } from "react";

const exchangeRates = {
    "usd": { "inr": 83.25, "eur": 0.92, "gbp": 0.79 },
    "inr": { "usd": 0.012, "eur": 0.011, "gbp": 0.0095 },
    "eur": { "usd": 1.09, "inr": 88.5, "gbp": 0.86 },
    "gbp": { "usd": 1.27, "inr": 103.5, "eur": 1.16 }
};
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        // const response = fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // .then((response) => response.json())
        // .then((jsonData) => setData(jsonData[currency]))
        // .catch((err) => console.log(err))
        setData(exchangeRates[currency])
        
    }, [currency])
    console.log(data, "out")
    return data
}

export default useCurrencyInfo