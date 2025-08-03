import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bgImage from "./assets/bg.jpg";
import bg from "./assets/bg.webp";

export const Styled = {
    BgWrapper: styled.div`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;

        /* border: 1px solid #f00; */
        /* background-image: url(${bg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat; */
        /* background: radial-gradient(#111, #000); */
        background-color: rgb(15, 15, 15);
    `,
    Wrapper: styled.div`
        /* border: 1px solid #f00;
        min-height: 100vh;
        background-image: url(${bg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat; */
    `,
    Header: styled.div`
        border-bottom: 1px solid #222;
        /* box-shadow: 0 1px 15px 1px rgba(255, 255, 255, 0.2); */
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 60px;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        z-index: 9999;
    `,
    SiteName: styled(NavLink)`
        font-size: 20px;
        color: #fff;
        text-decoration: none;
    `,
    NavlinksMenuWrapper: styled.div`
        display: flex;
        align-items: center;
    `,
    NavLinksWrapper: styled.nav`
        /* border: 1px solid #f00; */

        @media (width<500px) {
            display: none;
        }

        a {
            color: #666;
            text-decoration: none;
            padding: 5px 15px;
            font-family: "Antonio";

            &.active {
                color: #fff;
            }

            &:hover {
                /* text-decoration: underline; */
                color: #fff;
            }
        }
    `,
    MenuWrapper: styled.div`
        /* border: 1px solid #f00; */
        border-radius: 6px;
        width: 40px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #111;
        cursor: pointer;

        &:hover {
            background-color: #222;
        }

        .icon {
        }
    `,

    LastUpdateGoBackWrapper: styled.div`
        /* border: 1px solid #f00; */
        position: relative;
        /* margin: 60px auto; */
        margin: auto;
        margin-top: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        gap: 50px;
        flex-wrap: wrap;
        max-width: 1440px;

        .lastUpdated {
        }

        .goBack {
        }
    `,

    RoutesWrapper: styled.div`
        /* border: 1px solid #f00; */
        margin: auto;
        position: relative;
        min-height: 100vh;
        max-width: 1440px;
        padding: 0 50px;
        font-family: Arial, Helvetica, sans-serif;

        @media (width<900px) {
            padding: 0 15px;
        }
    `,
    DisplayMenuWrapper: styled.div`
        position: fixed;
        top: 60px;
        right: 0;
        width: 300px;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        animation: animateDisplayMenu 0.2s ease forwards;
        @keyframes animateDisplayMenu {
            0% {
                opacity: 0;
                transform: translateX(300px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .menuInner {
            border-left: 1px solid #333;
            overflow: hidden;
            overflow-y: auto;
            height: calc(100% - 60px);
            /* font-family: "Antonio"; */

            ul {
                li {
                    a {
                        display: flex;
                        align-items: center;
                        text-decoration: none;
                        padding-left: 15px;
                        height: 40px;
                        font-family: "Antonio";
                        color: #aaa;
                        &:hover {
                            background-color: #111;
                        }
                    }
                }
            }
        }
    `,
    Footer: styled.footer`
        border-top: 1px solid #222;
        background-color: rgba(0, 0, 0, 0.6);
        position: relative;
        min-height: 50px;
        padding: 30px;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;

        @media (width<700px) {
            justify-content: center;
        }

        @media (width<500px) {
            padding: 15px;
        }

        .col {
            a {
                color: #aaa;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    `,
};
