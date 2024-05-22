import styles from "./component.module.css";
import { Suspense } from "react";
import { LazySvg } from "./lazySvg";

interface ExchangeRateBlockProps {
    currency: string
    rate: string
}

export const ExchangeRateBlock: React.FC<ExchangeRateBlockProps> = ({ currency, rate }) => {
    return (
        <div className={styles.exchange_rate_wrapper}>
            <div className={styles.header_wrapper}>
                {/* <Suspense fallback={<>Loading...</>}>
                    <LazySvg name={currency} />
                </Suspense> */}
                <span className={styles.currency}>{currency}</span>
            </div>
            <span className={styles.rate}>{rate} EUR</span>
        </div>

    )
}