import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;

        .main {
            width: 100%;
            max-width: 1440px;
            padding: 30px;

            .heading {
                font-size: 20px;
                font-weight: bolder;
            }

            .randomAvataarContainer {
                display: flex;
                justify-content: center;
            }
        }
    `,
};
