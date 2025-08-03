import styled from "styled-components";

export const Container = styled.div`
    font-family: "Courier New", Courier, monospace;
    color: #fff;
    background: #111;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
`;

export const Heading = styled.h1`
    margin: 15px;
    text-align: center;
`;

export const ClockBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 30px;
`;

export const TimeLabelWrapper = styled.div`
    border: 1px solid #fff;
    border-radius: 5px;
    text-align: center;
    padding: 15px;
`;

export const TimeDisplay = styled.div`
    font-size: 60px;
    font-weight: bold;
    width: 120px;
    text-align: center;
    margin: 10px;
`;

export const Label = styled.div`
    text-align: center;
    font-size: 14px;
    color: #0ff;
`;

export const DateBox = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    font-size: 16px;
    color: #ccc;
`;

export const AlarmBox = styled.div`
    background: #333;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;

    label {
        display: flex;
        gap: 15px;
        align-items: center;
    }

    button {
        padding: 5px 12px;
        font-size: 14px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background: #444;
        color: #fff;
    }
`;

export const Select = styled.select`
    font-size: 16px;
    margin: 0 5px;
    padding: 5px;
    border-radius: 5px;
`;

export const AlarmMsg = styled.div`
    margin-top: 10px;
    font-size: 14px;
    color: #ff0;
`;

export const DropdownTimeWapper = styled.div`
    display: flex;
    gap: 15px;
`;
