import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Styled = {
    BgWrapper: styled.div`
        position: fixed;
        inset: 0;
        z-index: -1;
        background: radial-gradient(circle at top right, #1e2940 0, #0f0f0f 38%, #090909 100%);
    `,
    Wrapper: styled.div`
        position: relative;
        min-height: 100vh;
    `,
    Header: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        min-height: 72px;
        padding: 0 5vw;
        border-bottom: 1px solid #252b36;
        background: rgba(8, 10, 14, 0.9);
        backdrop-filter: blur(12px);
    `,
    SiteName: styled(NavLink)`
        display: inline-flex;
        align-items: center;
        gap: 0.7rem;
        color: #fff;
        text-decoration: none;

        img { width: 40px; height: 40px; padding: 0.3rem; border: 1px solid #34435b; border-radius: 10px; object-fit: contain; background: #111a29; }
        span { display: grid; gap: 0.1rem; }
        strong { font-size: 1rem; }
        small { color: #8792a5; font-size: 0.7rem; }
    `,
    NavlinksMenuWrapper: styled.div`display: flex; align-items: center; gap: 0.75rem;`,
    NavLinksWrapper: styled.nav`
        display: flex;
        align-items: center;
        gap: 0.2rem;
        a { padding: 0.55rem 0.75rem; border: 1px solid transparent; border-radius: 8px; color: #8792a5; text-decoration: none; transition: color 180ms ease, border-color 180ms ease, box-shadow 180ms ease; }
        a.active, a:hover { color: #fff; border-color: #34435b; box-shadow: 0 0 14px rgba(111, 166, 255, 0.15); }
        @media (max-width: 620px) { display: none; }
    `,
    MenuWrapper: styled.button`
        display: grid;
        width: 42px;
        height: 38px;
        place-items: center;
        border: 1px solid #34435b;
        border-radius: 8px;
        color: #fff;
        background: #111a29;
        cursor: pointer;
        transition: border-color 180ms ease, box-shadow 180ms ease;
        &:hover { border-color: #94b9ff; box-shadow: 0 0 16px rgba(111, 166, 255, 0.18); }
    `,
    LastUpdateGoBackWrapper: styled.div`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        max-width: 1440px;
        margin: 0 auto;
        padding: 90px 5vw 1rem;
        color: #758197;
        font-size: 0.8rem;
        .goBack { margin-left: auto; }
    `,
    RoutesWrapper: styled.div`
        position: relative;
        max-width: 1440px;
        min-height: calc(100vh - 180px);
        margin: auto;
        padding: 0 5vw 3rem;
    `,
    DisplayMenuWrapper: styled.aside`
        position: fixed;
        top: 72px;
        right: 0;
        z-index: 9998;
        width: min(340px, 92vw);
        height: calc(100vh - 72px);
        border-left: 1px solid #34435b;
        background: rgba(9, 13, 20, 0.98);
        box-shadow: -16px 0 36px rgba(0, 0, 0, 0.25);
        .menuInner { height: 100%; overflow-y: auto; padding: 0.65rem; }
        ul { margin: 0; padding: 0; list-style: none; }
        a { display: block; padding: 0.62rem 0.75rem; border: 1px solid transparent; border-radius: 8px; color: #9da8ba; text-decoration: none; transition: color 180ms ease, border-color 180ms ease, box-shadow 180ms ease; }
        a.active, a:hover { color: #fff; border-color: #34435b; box-shadow: 0 0 15px rgba(111, 166, 255, 0.15); }
    `,
    Footer: styled.footer`
        display: grid;
        grid-template-columns: minmax(220px, 1fr) auto;
        gap: 2rem;
        padding: 2.5rem 5vw 1.2rem;
        border-top: 1px solid #252b36;
        background: rgba(8, 10, 14, 0.75);
        .footerTitle { display: inline-flex; align-items: center; gap: 0.5rem; color: #fff; font-weight: 700; }
        .footerTitle svg { color: #94b9ff; }
        .footerIntro p { max-width: 340px; margin: 0.6rem 0 0; color: #7f8a9e; line-height: 1.6; }
        .footerGroups { display: flex; gap: 2rem; }
        .footerLabel { display: block; margin-bottom: 0.65rem; color: #7f8a9e; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
        .footerSocialLinks { display: flex; flex-wrap: wrap; gap: 0.45rem; max-width: 250px; }
        .footerSocialLinks a { display: grid; width: 34px; height: 34px; place-items: center; border: 1px solid #34435b; border-radius: 8px; color: #b7c1d1; transition: color 180ms ease, border-color 180ms ease, box-shadow 180ms ease; }
        .footerSocialLinks a:hover { color: #fff; border-color: #94b9ff; box-shadow: 0 0 15px rgba(111, 166, 255, 0.16); }
        .footerBottom { grid-column: 1 / -1; display: flex; justify-content: space-between; gap: 1rem; padding-top: 1rem; border-top: 1px solid #252b36; color: #758197; font-size: 0.8rem; }
        .footerBottom a { color: #fff; font-weight: 700; }
        @media (max-width: 700px) { grid-template-columns: 1fr; padding-inline: 1rem; .footerGroups { flex-wrap: wrap; gap: 1.25rem; } .footerBottom { flex-direction: column; } }
    `,
};