import React, { useState } from "react";

const TemperatureConverter = () => {
    const [temperature, setTemperature] = useState({
        celsius: "",
        fahrenheit: "",
        kelvin: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        const val = parseFloat(value);

        if (isNaN(val)) {
            setTemperature({ celsius: "", fahrenheit: "", kelvin: "" });
            return;
        }

        if (id === "celsius") {
            setTemperature({
                celsius: value,
                fahrenheit: ((val * 9) / 5 + 32).toFixed(2),
                kelvin: (val + 273.15).toFixed(2),
            });
        } else if (id === "fahrenheit") {
            setTemperature({
                celsius: (((val - 32) * 5) / 9).toFixed(2),
                fahrenheit: value,
                kelvin: (((val - 32) * 5) / 9 + 273.15).toFixed(2),
            });
        } else if (id === "kelvin") {
            setTemperature({
                celsius: (val - 273.15).toFixed(2),
                fahrenheit: (((val - 273.15) * 9) / 5 + 32).toFixed(2),
                kelvin: value,
            });
        }
    };

    return (
        <Wrapper>
            <Heading>Temperature Converter</Heading>
            <FieldGroup>
                <Input
                    type="number"
                    id="celsius"
                    value={temperature.celsius}
                    onChange={handleChange}
                />
                <Label htmlFor="celsius">Celsius</Label>
            </FieldGroup>
            <FieldGroup>
                <Input
                    type="number"
                    id="fahrenheit"
                    value={temperature.fahrenheit}
                    onChange={handleChange}
                />
                <Label htmlFor="fahrenheit">Fahrenheit</Label>
            </FieldGroup>
            <FieldGroup>
                <Input
                    type="number"
                    id="kelvin"
                    value={temperature.kelvin}
                    onChange={handleChange}
                />
                <Label htmlFor="kelvin">Kelvin</Label>
            </FieldGroup>
        </Wrapper>
    );
};

export default TemperatureConverter;

import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
    border-radius: 5px;
    padding: 15px;
`;

export const Heading = styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center;
`;

export const FieldGroup = styled.div`
    /* display: flex;
    margin-bottom: 16px; */

     margin: 4px 0;
    display: flex;
    gap: 15px;
    align-items: center;

    span {
        /* border: 1px solid #f00; */
        width: 100px;
    }
`;

export const Label = styled.label`
    font-size: 14px;
    margin-bottom: 4px;
`;

export const Input = styled.input`
    /* height: 32px;
    font-size: 14px;
    font-family: Consolas, monospace;
    padding-left: 10px; */

     font-size: 12px;
    font-family: Consolas, monospace;
    height: 40px;
    width: 100%;
    max-width: 300px;
    margin: 2px;
    padding-left: 10px;
    border: none;
    outline: none;
    border: 1px solid #333;
    background-color: transparent;
    color: #aaa;
`;
