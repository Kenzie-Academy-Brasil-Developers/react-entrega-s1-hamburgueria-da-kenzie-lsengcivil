import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 18%;

    background-color: var(--color-gray-20);

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    @media screen and (min-width: 650px) {
        height: 14%;
        
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