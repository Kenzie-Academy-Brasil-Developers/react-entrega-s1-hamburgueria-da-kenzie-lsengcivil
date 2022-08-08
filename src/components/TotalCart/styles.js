import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        width: 90%;
        display: flex;
        justify-content: space-between;
    }

    .total {
        color: var(--color-gray-100);
        font-size: 1.25rem;
    }
    
    .price {
        color: var(--color-gray-50);
        font-size: 1.25rem;
    }

    button {
        width: 90%;
        max-width: 25rem;
        background-color: var(--color-gray-20);

        padding: 1rem 0;
        border: none;
        border-radius: 0.5rem;

        color: var(--color-gray-50);
        font-size: 1rem;
        font-weight: 600;
    }
`;

export default Container;