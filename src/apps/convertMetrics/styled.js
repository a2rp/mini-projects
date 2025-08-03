import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    /* height: 100vh; */
    overflow: auto;
`;

export const Heading = styled.h1`
    text-align: center;
`;

export const UpdateInfo = styled.b`
    display: inline-block;
    height: 20px;
    line-height: 20px;
    border: 2px solid #00f;
    color: #00f;
    padding: 0 20px;
`;

export const MetricList = styled.div`
    border: 1px solid #333;
    /* position: absolute;
    left: 20px;
    top: 60px;
    width: 200px;
    height: calc(100% - 100px);
    border-radius: 5px;
    padding: 10px;
    overflow: auto; */
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px;
    padding: 15px;
`;

export const MetricName = styled.div`
    padding: 0 15px;
    border-radius: 3px;
    border: 1px solid #333;
    background-color: ${({ $active }) => ($active ? "#333" : "transparent")};
    color: #aaa;
    cursor: pointer;
    margin: 2px;
    font-weight: bolder;

    &:hover {
        background-color: #333;
        color: #aaa;
    }
`;

export const MetricUnitContainer = styled.div`
    /* position: absolute;
    left: 260px;
    top: 60px;
    width: calc(100% - 300px);
    height: calc(100% - 100px);
    background-color: #eee;
    padding: 10px;
    overflow: auto;
    border-radius: 5px; */
`;
