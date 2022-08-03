import styled from "styled-components";

const Search = styled.form`
    input {
        width: 17rem;
        padding: 0.75rem;

        border: solid 1px var(--color-gray-50);
        border-radius: 0.5rem;

        font-size: 1rem;
    }

    button {
        padding: 0.7rem;

        border: none;
        border-radius: 0.5rem;

        background-color: var(--color-primary);
        
        color: var(--color-gray-0);
        font-weight: 500;
    }
`;

export default Search;