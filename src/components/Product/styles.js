import styled from "styled-components";

const Container = styled.div`
    min-width: 14rem;
    height: 15rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem;

    border: solid 2px var(--color-gray-20);
    border-radius: 0.5rem;
    transition: 300ms;

    div {
        width: 100%;
        
        display: flex;
    }

    .containerImg {
        background-color: var(--color-gray-0);
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        
        img {
            height: 100%;
            transition: 500ms;
        }
    }

    .containerInfo {
        width: 90%;
        height: 60%;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;

        .name {
            font-weight: 700;
            font-size: 1.125rem;
            color: var(--color-gray-100);
        }
        
        .category {
            font-weight: 400;
            font-size: 0.75rem;
            color: var(--color-gray-50);
        }

        .price {
            font-weight: 600;
            font-size: 0.75rem;
            color: var(--color-primary);
        }

        button {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 0.5rem;
            background-color: var(--color-primary);
            font-weight: 600;
            color: var(--color-gray-0);
            transition: 300ms;

            :hover {
                background-color: var(--color-primary-50);
            }
        }
    }

    :hover {
        box-shadow: 0 0 10px 5px var(--color-gray-20);

        img {
            transform: scale(1.1);
        }
    }
`;

export default Container;