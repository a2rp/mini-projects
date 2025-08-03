import styled from "styled-components";

export const Container = styled.div`
    /* border: 1px solid #fff; */
    position: relative;
    border-radius: 5px;
    /* height: calc(100% - 4px); */
    /* overflow: auto; */
    /* margin: auto; */
    padding: 15px;
`;

export const Row = styled.div`
    margin: 4px 0;
    display: flex;
    gap: 15px;
    align-items: center;

    span {
        /* border: 1px solid #f00; */
        width: 100px;
    }
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
