'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import kmd from "../../node_modules/cryptocurrency-icons/svg/color/kmd.svg"
import { ExchangeRateBlock } from "./components/exchangeRateBlock";

type ExchangeRateProps = {
  currency: string,
  rate: string
}

export default function Home() {
  const [exchangeRate, setExchangeRate] = useState<ExchangeRateProps[]>()
  const [loading, setLoading] = useState(true)

  const fetchExchangeRates = async () => {
    const response = await fetch(`https://api.coinbase.com/v2/exchange-rates?currency=EUR`)
    const data = await response.json()

    return data
  }


  useEffect(() => {
    fetchExchangeRates().then((response) => {
      const exchangeRateData = []
      for (const [key, value] of Object.entries(response.data.rates)) {
        exchangeRateData.push({ currency: key, rate: value as string })
      }
      setExchangeRate(exchangeRateData)
      setLoading(false)
    })
      .catch((error) => {
        setLoading(false)
      })

  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.exchange_rates_block_wrapper}>
        {loading ?
          (<span>Loading...</span>)
          : exchangeRate && exchangeRate.map(({ currency, rate }) => {
            return (
              <ExchangeRateBlock currency={currency} rate={rate} key={currency} />
            )
          })}
      </div>
    </div>

  )
}
