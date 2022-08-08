import styled from "styled-components";

const Container = styled.div`

    width: 90%;
    min-height: 5rem;
    margin: 0.5rem 0;

    display: flex;
    justify-content: space-between;

    .image {
        min-width: 5rem;
        height: 5rem;
        background-color: var(--color-gray-20);
        border-radius: 0.5rem;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding-left: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        
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
    }

    .remove {
        width: fit-content;
        text-align: right;
        padding-top: 0.5rem;
        color: var(--color-gray-50);
        cursor: pointer;
        transition: 500ms;
        padding-left: 0.5rem;
        
        :hover {
            color: var(--color-negative); 
        }
    }
`;

export default Container;