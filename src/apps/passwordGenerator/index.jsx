// PasswordGenerator.jsx
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

const Container = styled.div`
    /* border: 1px solid #f00; */
    position: relative;
    /* height: 100%; */
    /* overflow: auto; */
`;

const Heading = styled.h1`
    text-align: center;
    margin: 30px;
`;

const Fieldset = styled.fieldset`
    margin-bottom: 20px;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    padding: 15px;

    legend {
        padding: 5px;;
    }

    span {
        display: flex;
        gap: 5px;
    }
`;

const GenerateButton = styled.button`
    padding: 15px 30px;
    width: 100%;
    border: 0;
    font: inherit;
    text-align: center;
    border-radius: 3px;
    background-color: #123456;
    color: #fff;
    cursor: pointer;
`;

const GeneratedPassword = styled.button`
    width: 100%;
    min-height: 60px;
    padding: 8px 16px;
    border: 0;
    border-radius: 4px;
    line-height: 1.3;
    text-align: center;
    background-color: #333;
    color: #fff;
    font: inherit;
    font-size: clamp(16px, 4vw, 32px);
    overflow-wrap: anywhere;
    margin: 10px 0;
    cursor: pointer;
    position: relative;
    transition: all 0.2s;

    &:hover {
        background-color: #444;
    }

    &::after {
        content: "Click to copy";
        position: absolute;
        bottom: -50%;
        left: 0;
        right: 0;
        font-size: 12px;
        color: #aaa;
        opacity: 0;
        transition: opacity 0.2s;
    }

    &:hover::after {
        opacity: 1;
    }
`;

const CopiedNotification = styled.div`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    z-index: 1000;
    animation: fadeInOut 2s ease-in-out;

    @keyframes fadeInOut {
        0% { opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { opacity: 0; }
    }
`;

const PasswordGenerator = () => {
    const [length, setLength] = useState(16);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const getSecureIndex = (maxExclusive) => {
        const range = 0x100000000;
        const limit = range - (range % maxExclusive);
        const values = new Uint32Array(1);
        let value;
        do {
            window.crypto.getRandomValues(values);
            value = values[0];
        } while (value >= limit);
        return value % maxExclusive;
    };

    const handleGenerate = () => {
        const characterSets = [];
        if (includeLower) characterSets.push("abcdefghijklmnopqrstuvwxyz");
        if (includeUpper) characterSets.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        if (includeNumbers) characterSets.push("1234567890");
        if (includeSymbols) characterSets.push("~!@#$%^&*()_");

        if (characterSets.length === 0) {
            setError("Select at least one character type.");
            setPassword("");
            return;
        }
        if (!window.crypto?.getRandomValues) {
            setError("Secure random generation is unavailable in this browser.");
            setPassword("");
            return;
        }

        const allCharacters = characterSets.join("");
        const generatedCharacters = characterSets.map(
            (characterSet) => characterSet[getSecureIndex(characterSet.length)]
        );
        while (generatedCharacters.length < length) {
            generatedCharacters.push(allCharacters[getSecureIndex(allCharacters.length)]);
        }
        for (let index = generatedCharacters.length - 1; index > 0; index -= 1) {
            const swapIndex = getSecureIndex(index + 1);
            [generatedCharacters[index], generatedCharacters[swapIndex]] =
                [generatedCharacters[swapIndex], generatedCharacters[index]];
        }

        setPassword(generatedCharacters.join(""));
        setError("");
    };

    const handleCopyPassword = async () => {
        if (!password) return;

        try {
            await navigator.clipboard.writeText(password);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
            toast.success("Copied");
        } catch {
            setError("Unable to copy the password. Check clipboard permissions.");
            toast.error("Unable to copy password");
        }
    };

    return (
        <>
            <Container>
                <Heading>Password Generator</Heading>

                <Fieldset>
                    <legend>Select password length</legend>
                    {[...Array(21)].map((_, i) => {
                        const val = i + 12;
                        return (
                            <span key={val}>
                                <input
                                    type="radio"
                                    id={"password-length-" + val}
                                    name="length"
                                    value={val}
                                    checked={length === val}
                                    onChange={() => setLength(val)}
                                />
                                <label htmlFor={"password-length-" + val}>{val}</label>
                            </span>
                        );
                    })}
                </Fieldset>

                <Fieldset>
                    <legend>Characters to include</legend>
                    <span>
                        <input
                            type="checkbox"
                            id="include-lower"
                            checked={includeLower}
                            onChange={() => setIncludeLower(!includeLower)}
                        />
                        <label htmlFor="include-lower">a to z</label>
                    </span>
                    <span>
                        <input
                            type="checkbox"
                            id="include-upper"
                            checked={includeUpper}
                            onChange={() => setIncludeUpper(!includeUpper)}
                        />
                        <label htmlFor="include-upper">A to Z</label>
                    </span>
                    <span>
                        <input
                            type="checkbox"
                            id="include-numbers"
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers(!includeNumbers)}
                        />
                        <label htmlFor="include-numbers">0 to 9</label>
                    </span>
                    <span>
                        <input
                            type="checkbox"
                            id="include-symbols"
                            checked={includeSymbols}
                            onChange={() => setIncludeSymbols(!includeSymbols)}
                        />
                        <label htmlFor="include-symbols">~!@#$%^&*()_</label>
                    </span>
                </Fieldset>

                <GenerateButton type="button" onClick={handleGenerate}>
                    Click here to generate password
                </GenerateButton>

                {error && <p role="alert" style={{ color: "#f88", textAlign: "center" }}>{error}</p>}

                {password.length > 0 && (
                    <GeneratedPassword
                        as="button"
                        type="button"
                        onClick={handleCopyPassword}
                        aria-label="Copy generated password"
                    >
                        {password}
                    </GeneratedPassword>
                )}

                {copied && <CopiedNotification>Password copied to clipboard!</CopiedNotification>}
            </Container>

            <ToastContainer position="bottom-right" autoClose={2000} />
        </>
    );
};

export default PasswordGenerator;