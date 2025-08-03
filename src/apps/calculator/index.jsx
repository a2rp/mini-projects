import React, { useEffect, useRef, useState } from "react";
import * as math from "mathjs";
import { Styled } from "./styled";
import { FaBackspace } from "react-icons/fa";
import { MdClear } from "react-icons/md";

const Calculator = () => {
    const [expression, setExpression] = useState("");
    const [screenVal, setScreenVal] = useState("");
    const [customVariables, setCustomVariables] = useState({});
    const [mode, setMode] = useState("rad");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function handleChange(e) {
        setExpression(e.target.value);
    }

    function handleClick(input) {
        setExpression((prev) => prev + input);
    }

    function calculate() {
        try {
            const allVariables = {
                ...customVariables,
                pi: Math.PI,
                e: Math.E,
                fact: math.factorial,
                sin: mode === "rad" ? Math.sin : math.sin,
                cos: mode === "rad" ? Math.cos : math.cos,
                tan: mode === "rad" ? Math.tan : math.tan,
                asin: mode === "rad" ? Math.asin : math.asin,
                acos: mode === "rad" ? Math.acos : math.acos,
                atan: mode === "rad" ? Math.atan : math.atan,
            };
            const result = math.evaluate(expression, allVariables);
            setScreenVal(typeof result === "number" && !isNaN(result)
                ? Number(result).toFixed(4)
                : "Error: Invalid expression"
            );
        } catch {
            setScreenVal("Error: Invalid expression");
        }
    }

    function clearScreen() {
        setExpression("");
        setScreenVal("");
        inputRef.current.focus();
    }

    function backspace() {
        setExpression((prev) => prev.slice(0, -1));
    }

    return (
        <>
            <Styled.Wrapper>
                <Styled.CalcBody>
                    <Styled.Title>Scientific Calculator</Styled.Title>
                    <Styled.InputSection>
                        <Styled.InputWrapper>
                            <Styled.Input
                                ref={inputRef}
                                type="text"
                                value={expression}
                                onChange={handleChange}
                                placeholder="write here or press buttons below..."
                            />
                            {expression.length > 0 &&
                                <Styled.ClearWrapper>
                                    <MdClear
                                        size={20}
                                        onClick={clearScreen}
                                    />
                                </Styled.ClearWrapper>
                            }
                        </Styled.InputWrapper>
                        <Styled.Output>
                            {screenVal.length > 0 ? screenVal : "Output: Nothing to display"}
                        </Styled.Output>
                    </Styled.InputSection>

                    <Styled.ButtonSection>
                        <Styled.NumericPad>
                            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].map((val) => (
                                <Styled.Button key={val} onClick={() => handleClick(val)}>
                                    {val}
                                </Styled.Button>
                            ))}
                        </Styled.NumericPad>

                        <Styled.Operators>
                            {[
                                "+", "-", "*", "/", "^", "sqrt(", "sin(", "cos(", "tan(", "cbrt(",
                                "asin(", "acos(", "atan(", "(", ")",
                            ].map((op) => (
                                <Styled.Button key={op} onClick={() => handleClick(op)}>
                                    {op}
                                </Styled.Button>
                            ))}
                            <Styled.Button onClick={() => handleClick("pi")}>Pi</Styled.Button>
                            <Styled.Button onClick={() => handleClick("fact(")}>Factorial</Styled.Button>
                        </Styled.Operators>

                        <Styled.ControlButtons>
                            <Styled.ClearButton
                                onClick={clearScreen}
                            >C</Styled.ClearButton>
                            <Styled.EqualsButton
                                onClick={calculate}
                            >=</Styled.EqualsButton>
                            <Styled.BackspaceButton
                                onClick={backspace}
                            ><FaBackspace /></Styled.BackspaceButton>
                        </Styled.ControlButtons>

                    </Styled.ButtonSection>
                </Styled.CalcBody>
            </Styled.Wrapper >
        </>
    );
}

export default Calculator;
