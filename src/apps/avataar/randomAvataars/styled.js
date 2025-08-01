import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        margin-top: 15px;

        .heading {
            font-weight: 900;
            text-align: center;
        }

        .imageContainer {
            margin-top: 15px;
            width: 250px;
            height: 250px;
            // border: 1px solid #f00;
            position: relative;

            .copyIcon {
                position: absolute;
                right: 0;
                top: 0;
                width: 20px;
                height: 20px;
                // border-radius: 50%;
                padding: 3px;

                &:hover {
                    box-shadow: 0 0 5px 1px orangered;
                }
            }
        }

        .stylesContainer {
            margin-top: 30px;
            max-width: 250px;
        }

        .buttonsContainer {
            max-width: 250px;
            margin-top: 15px;
            display: flex;
            gap: 15px;
        }
    `,
};
