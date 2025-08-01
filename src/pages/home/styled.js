import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
    `,
    Heading: styled.h1`
        margin-bottom: 30px;
    `,
    Main: styled.div`
        width: 100%;
        max-width: 1440px;
    `,
    LastUpdated: styled.div`
        margin-bottom: 30px;
    `,
    SearchProjectWrapper: styled.div`
        position: relative;
        height: 50px;
        border: 1px solid #333;
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 30px;

        input {
            width: 100%;
            height: 100%;
            padding-left: 50px;
            padding-right: 50px;
            border: none;
            outline: none;
            background-color: inherit;
            color: #aaa;
        }

        .searchIconWrapper,
        .clearIconWrapper {
            /* border: 1px solid #111; */
            /* background-color: #fff; */
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
                color: #fff;

                &.clear {
                    color: orangered;
                }
            }
        }

        .searchIconWrapper {
            left: 0;
        }

        .clearIconWrapper {
            right: 0;
            cursor: pointer;
        }
    `,
    ProjectList: styled.ol`
        /* border: 1px solid #f00; */
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        margin-left: 30px;

        li {
            color: #666;

            a {
                color: #333;
                text-decoration: none;

                &:hover {
                    color: #fff;
                }
            }
        }
    `,
};
