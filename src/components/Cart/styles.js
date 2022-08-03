import styled from "styled-components";

const Container = styled.div`
    width: 95%;
    height: 45%;

    background-color: var(--color-gray-0);

    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    overflow: hidden;

    font-weight: 700;
    color: var(--color-gray-0);

    @media screen and (min-width: 781px) {
        width: 40%;
        min-height: 50%;
        max-height: 90%;
        margin-top: 1rem;
        border-radius: 0.5rem;
    }
`;

export const Title = styled.div`
    width: 100%;
    height: 25%;

    background-color: var(--color-primary);

    display: flex;
    align-items: center;

    padding-left: 1rem;

    h2 {
        font-size: 1.25rem;
    }
`;

export const List = styled.div`
    width: 100%;
    height: 75%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--color-gray-100);

    gap: 0.5rem;

    h2 {
        font-size: 1.25rem;
    }

    h3 {
        font-size: 1rem;
        color: var(--color-gray-50);
    }


`;

export default Container;