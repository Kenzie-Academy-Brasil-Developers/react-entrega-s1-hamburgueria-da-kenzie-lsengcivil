import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    min-height: 18%;

    background-color: var(--color-gray-0);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media screen and (min-width: 650px) {
        min-height: 14%;
        
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        div {
            margin-left: 5rem;
        }

        form {
            margin-right: 5rem;
        }

    }
`;

export default Container;