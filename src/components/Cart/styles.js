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

    @media screen and (min-width: 882px) {
        width: 30%;
        height: 60%;
        margin-top: 1rem;
        border-radius: 0.5rem;
    }
`;

export const Title = styled.div`
    width: 100%;
    min-height: 3rem;

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
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    color: var(--color-gray-100);

    gap: 0.5rem;
    overflow-y: auto;

    .emptyCart {
        width: 100%;
        height: 100%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            font-size: 1.25rem;
        }
    
        h3 {
            font-size: 1rem;
            color: var(--color-gray-50);
        }
    }

`;

export default Container;