import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        border: 1px solid #333;
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    CalcBody: styled.div`
        /* background-color: #c5f5b7; */
        /* border: 1px solid #141414; */
        border-radius: 8px;
        /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
        width: 60vw;
        padding: 2vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,

    Title: styled.h1`
        /* color: #1fb334; */
        margin-bottom: 30px;
    `,

    InputSection: styled.div`
        /* border: 1px solid #f00; */
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,

    InputWrapper: styled.div`
        border: 1px solid #333;
        border-radius: 6px;
        width: 100%;
        height: 50px;
        position: relative;
        overflow: hidden;
    `,

    ClearWrapper: styled.div`
        /* border: 1px solid #fff; */
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `,

    Input: styled.input`
        outline: none;
        border: none;
        /* border: 1px solid #333; */
        background-color: transparent;
        width: 100%;
        height: 100%;
        padding: 0 50px 0 15px;
        font-size: 18px;
        border-radius: 4px;
        /* margin-bottom: 10px; */
        color: #aaa;
    `,

    Output: styled.div`
        /* border: 1px solid #f00; */
        width: 100%;
        font-weight: 900;
        margin: 15px 0;
        font-style: italic;
        color: orangered;
    `,

    ButtonSection: styled.div`
        width: 100%;
        /* display: flex;
        flex-direction: row;
        justify-content: space-between; */
    `,

    NumericPad: styled.div`
        /* display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px; */
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 30px;
    `,

    Operators: styled.div`
        /* display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px; */
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 30px;
    `,

    ControlButtons: styled.div`
        /* border: 1px solid #f00; */
        /* display: flex; */
        /* flex-direction: column; */
        /* align-items: center; */
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 30px;
    `,

    Button: styled.button`
        padding: 5px 10px;
        font-size: 16px;
        font-weight: 600;
        /* background-color: #b8bcb9; */
        background-color: transparent;
        color: #aaa;
        border: none;
        border: 1px solid #333;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        flex: 1 1 50px;

        &:hover {
            /* background-color: #1fb334; */
            background-color: #333;
        }
    `,

    EqualsButton: styled.button`
        /* background-color: #00f35e; */
        background: none;
        margin: 5px;
        padding: 5px 10px;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        border: none;
        border: 1px solid #00f35e;
        border-radius: 4px;
        cursor: pointer;
        flex: 1 1 50px;

        &:hover {
            /* background-color: #1fb334; */
            background-color: #333;
        }
    `,

    ClearButton: styled.button`
        /* background-color: #1f73b3; */
        margin: 5px;
        padding: 5px 10px;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        border: none;
        border: 1px solid #1f73b3;
        border-radius: 4px;
        background: none;
        cursor: pointer;
        flex: 1 1 50px;

        &:hover {
            /* background-color: #1fb334; */
            background-color: #333;
        }
    `,

    BackspaceButton: styled.button`
        /* background-color: #ff5733; */
        background: none;
        margin: 5px;
        padding: 5px 10px;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        border: none;
        border: 1px solid #ff5733;
        border-radius: 4px;
        cursor: pointer;
        flex: 1 1 50px;

        &:hover {
            /* background-color: #1fb334; */
            background-color: #333;
        }
    `,
};
