import React, { useState } from "react";

const units = [
    { name: "Nanosecond", key: "nanosecond", toSec: 1e-9 },
    { name: "Microsecond", key: "microsecond", toSec: 1e-6 },
    { name: "Millisecond", key: "millisecond", toSec: 1e-3 },
    { name: "Second", key: "second", toSec: 1 },
    { name: "Minute", key: "minute", toSec: 60 },
    { name: "Hour", key: "hour", toSec: 3600 },
    { name: "Day", key: "day", toSec: 86400 },
    { name: "Week", key: "week", toSec: 604800 },
    { name: "Month", key: "month", toSec: 2.628e6 },
    { name: "Calendar Year", key: "calendaryear", toSec: 3.154e7 },
    { name: "Decade", key: "decade", toSec: 3.154e8 },
    { name: "Century", key: "century", toSec: 3.154e9 },
];

const TimeConverter = () => {
    const [values, setValues] = useState(
        units.reduce((acc, unit) => ({ ...acc, [unit.key]: 0 }), {})
    );

    const handleChange = (e, fromUnit) => {
        const inputVal = parseFloat(e.target.value);
        if (isNaN(inputVal)) return;

        const fromSec = inputVal * fromUnit.toSec;

        const updatedValues = {};
        units.forEach((unit) => {
            updatedValues[unit.key] = fromSec / unit.toSec;
        });

        setValues(updatedValues);
    };

    return (
        <Wrapper>
            <Title>Time Converter</Title>
            {units.map((unit) => (
                <InputRow key={unit.key}>
                    <Input
                        type="number"
                        id={unit.key}
                        value={values[unit.key]}
                        onChange={(e) => handleChange(e, unit)}
                    />
                    <Label htmlFor={unit.key}>{unit.name}</Label>
                </InputRow>
            ))}
        </Wrapper>
    );
};

export default TimeConverter;

import styled from "styled-components";

export const Wrapper = styled.div`
 position: relative;
    border-radius: 5px;
    padding: 15px;
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

export const InputRow = styled.div`
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
    flex: 1;
    margin-right: 12px;
    line-height: 25px;
`;

export const Input = styled.input`
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
