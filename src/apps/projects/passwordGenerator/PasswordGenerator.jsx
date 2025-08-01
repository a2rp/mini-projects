import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RefreshIcon from "@mui/icons-material/Refresh";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

const PasswordGenerator = () => {
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordLength, setPasswordLength] = useState(32);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [newPassword, setNewPassword] = useState(Math.random() * 9999);

    useEffect(() => {
        let characters = "";
        if (uppercase === true) {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (lowercase === true) {
            characters += "abcdefghijklmnopqrstuvwxyz";
        }
        if (symbols === true) {
            characters += "!@#$%^&*()<>,.?/[]{}-=_+|/";
        }
        if (numbers === true) {
            characters += "0123456789";
        }
        const newPassword = [];
        for (let i = 0; i < passwordLength; ++i) {
            const min = 0;
            const max = characters.length - 1;
            const randomCharacter = characters[Math.floor(Math.random() * (max - min + 1)) + min];
            newPassword.push(randomCharacter);
        }
        const newFormedPassword = newPassword.join("").substring(0, passwordLength);
        setPasswordValue(newFormedPassword);
    }, [uppercase, lowercase, symbols, numbers, passwordLength, newPassword]);

    const copyToClipboard = () => {
        if (passwordValue.trim().length === 0) {
            return toast.error("Password not formed. Nothing to copy");
        }
        copy(passwordValue);
        toast.success(`You have copied "${passwordValue}"`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.heading}>Password generator</div>
            <div className={styles.passwordControls}>
                <div className={styles.passwordLengthContainer}>
                    <input
                        type="range" min="6" max="50"
                        value={passwordLength}
                        className={`${styles.passwordLengthSlider} passwordLength`}
                        onChange={event => setPasswordLength(event.target.value)}
                    />
                    <pre
                        className={styles.passwordLengthInfo}
                    >
                        {passwordLength < 10
                            ? "0" + passwordLength
                            : passwordLength}
                    </pre>
                </div>
                <div className={styles.checkboxContainer}>
                    <div className={styles.uppercaseContainer}>
                        <input
                            type="checkbox"
                            checked={uppercase}
                            value={uppercase}
                            onChange={() => setUppercase(uppercase => !uppercase)}
                        />
                        <div className={styles.uppercaseText}>Uppercase</div>
                    </div>
                    <div className={styles.lowercaseContainer}>
                        <input
                            type="checkbox"
                            checked={lowercase}
                            value={lowercase}
                            onChange={() => setLowercase(lowercase => !lowercase)}
                        />
                        <div className={styles.lowercaseText}>Lowercase</div>
                    </div>
                    <div className={styles.symbolsContainer}>
                        <input
                            type="checkbox"
                            checked={symbols}
                            value={symbols}
                            onChange={() => setSymbols(symbols => !symbols)}
                        />
                        <div className={styles.symbolsText}>Symbols</div>
                    </div>
                    <div className={styles.numbersContainer}>
                        <input
                            type="checkbox"
                            checked={numbers}
                            value={numbers}
                            onChange={() => setNumbers(numbers => !numbers)}
                        />
                        <div className={styles.numbersText}>Numbers</div>
                    </div>
                </div>
            </div>

            <div className={styles.passwordOutputContainer}>
                <div className={styles.passwordInfoCopyRefresh}>
                    <div className={styles.passwordCopyRefresh}>
                        <Tooltip
                            className={styles.copyIconTooltip}
                            title="Copy password"
                            placement="top"
                            onClick={copyToClipboard}
                        >
                            <IconButton>
                                <ContentCopyIcon className={styles.copyIcon} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip
                            className={styles.refreshIconTooltip}
                            title="Refresh password"
                            placement="top"
                            onClick={() => setNewPassword(Math.random() * 9999)}
                        >
                            <IconButton>
                                <RefreshIcon className={styles.refreshIcon} />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <div className={styles.displayPassword}>
                    {passwordValue}
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator

