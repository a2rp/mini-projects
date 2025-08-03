import styled from "styled-components";

export const Wrapper = styled.div`
    /* border: 1px solid #f00; */
    max-width: 1440px;
    margin: auto;
    padding: 50px;

    .heading {
        text-align: center;
    }

    .subheading {
        margin-top: 50px;
        margin-bottom: 5px;
        text-decoration: underline;
    }

    .animation {
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        height: 500px;
        overflow: hidden;
    }

    @media (width<500px) {
        padding: 15px;
    }
`;

export const AnimationNameWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 30px;

    .name {
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 5px 15px;
        flex: 1 1 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        &.active {
            background-color: #333;
        }

        &:hover {
            background-color: #222;
        }
    }
`;
