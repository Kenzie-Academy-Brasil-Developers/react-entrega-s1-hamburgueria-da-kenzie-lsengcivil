import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 45%;

    margin-top: 1rem;
    padding: 1rem;

    display: flex;
    justify-content: start;
    align-items: center;

    overflow-x: auto;
    gap: 1rem;

    .loading {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            font-weight: 600;
            color: var(--color-gray-100);
        }
    }

    @media screen and (min-width: 882px) {
        width: 60%;
        height: fit-content;
        overflow-x: visible;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 1rem 0;
        padding: 0;
    }
`;

export default Container;