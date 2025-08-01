import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";

const RandomQuotes = () => {
    const quotesRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [quotes, setQuotes] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const options = {
                method: "GET",
                url: "https://api.adviceslip.com/advice"
            };
            setIsLoading(true);
            setTimeout(async () => {
                const response = await axios(options);
                const quote = response.data.slip.advice;
                setQuotes([...quotes, quote]);
                setIsLoading(false);
                quotesRef.current.scrollTop = quotesRef.current.offsetHeight
                    + quotesRef.current.clientHeight;
            }, 1000 * 2);
            setTimeout(() => {
            }, 1000);
        } catch (error) {
            setIsLoading(false);
            console.error(error, "error");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.heading}>Random Quotes</div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <Button
                        type="submit"
                        variant="contained"
                        className={styles.fetchQuoteButton}
                        disabled={isLoading}
                    >
                        {isLoading
                            ? <CircularProgress />
                            : "Fetch quote"}
                    </Button>
                </form>

                <div ref={quotesRef} className={styles.quotes}>
                    <ol>
                        {quotes.map((item, index) => (
                            <li key={index} style={{ marginBottom: "15px" }}>{item}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default RandomQuotes

