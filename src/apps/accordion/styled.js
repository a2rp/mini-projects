import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        padding: 30px;

        .main {
            width: 100%;
            max-width: 1400px;

            .titleBackWrapper {
                display: flex;
                gap: 15px;

                .title {
                    font-size: 32px;
                    font-weight: 900;
                }
            }

            .enableMultiToggleContainer {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: 3px;
            }

            .qnaListContainer {
                margin-top: 30px;

                .questionContainer {
                    border: 1px solid #000;
                    background-color: #111;
                    padding: 0 15px;
                    font-weight: bold;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: 2px;
                    cursor: pointer;

                    &:hover {
                        background-color: #222;
                    }

                    .plusSign {
                        font-size: 20px;
                        font-weight: 900;
                    }
                }
                .answerContainer {
                    /* border: 1px solid #f00; */
                    /* padding: 15px; */

                    .answer {
                        border: 1px solid #aaa;
                        background-color: #111;
                        margin: 5px 15px;
                        padding: 5px 15px;
                        transition: height 0.2s ease;
                        overflow: auto;
                    }
                }
            }
        }
    `,
};
