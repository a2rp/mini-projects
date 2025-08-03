import React, { useState } from "react";
import { Container, Input, Row } from "./styled";


const PressureConverter = () => {
    const [values, setValues] = useState({
        bar: "",
        pascal: "",
        poundpersquareinch: "",
        standardatmosphere: "",
        torr: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        const v = parseFloat(value);
        if (isNaN(v)) {
            setValues((prev) => ({ ...prev, [id]: value }));
            return;
        }

        switch (id) {
            case "bar":
                setValues({
                    bar: value,
                    pascal: v * 100000,
                    poundpersquareinch: v * 14.5038,
                    standardatmosphere: v * 0.986923,
                    torr: v * 750.062,
                });
                break;
            case "pascal":
                setValues({
                    bar: v * 1e-5,
                    pascal: value,
                    poundpersquareinch: v * 0.000145038,
                    standardatmosphere: v * 9.8692e-6,
                    torr: v * 0.00750062,
                });
                break;
            case "poundpersquareinch":
                setValues({
                    bar: v * 0.0689476,
                    pascal: v * 6894.76,
                    poundpersquareinch: value,
                    standardatmosphere: v * 0.068046,
                    torr: v * 51.7149,
                });
                break;
            case "standardatmosphere":
                setValues({
                    bar: v * 1.01325,
                    pascal: v * 101325,
                    poundpersquareinch: v * 14.6959,
                    standardatmosphere: value,
                    torr: v * 760,
                });
                break;
            case "torr":
                setValues({
                    bar: v * 0.00133322,
                    pascal: v * 133.322,
                    poundpersquareinch: v * 0.0193368,
                    standardatmosphere: v * 0.00131579,
                    torr: value,
                });
                break;
            default:
                break;
        }
    };

    return (
        <Container>
            Enter value in any of the input boxes below:
            <br />
            <Row>
                <Input
                    id="bar"
                    className="pressure"
                    value={values.bar}
                    onChange={handleChange}
                />
                <span id="bar_span">{values.bar}</span>
                <label>Bar</label>
            </Row>
            <Row>
                <Input
                    id="pascal"
                    className="pressure"
                    value={values.pascal}
                    onChange={handleChange}
                />
                <span id="pascal_span">{values.pascal}</span>
                <label>Pascal</label>
            </Row>
            <Row>
                <Input
                    id="poundpersquareinch"
                    className="pressure"
                    value={values.poundpersquareinch}
                    onChange={handleChange}
                />
                <span id="poundpersquareinch_span">
                    {values.poundpersquareinch}
                </span>
                <label>Pound per square inch</label>
            </Row>
            <Row>
                <Input
                    id="standardatmosphere"
                    className="pressure"
                    value={values.standardatmosphere}
                    onChange={handleChange}
                />
                <span id="standardatmosphere_span">
                    {values.standardatmosphere}
                </span>
                <label>Standard atmosphere</label>
            </Row>
            <Row>
                <Input
                    id="torr"
                    className="pressure"
                    value={values.torr}
                    onChange={handleChange}
                />
                <span id="torr_span">{values.torr}</span>
                <label>Torr</label>
            </Row>
        </Container>
    );
};

export default PressureConverter;

