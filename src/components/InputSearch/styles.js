import styled from "styled-components";

const Search = styled.form`
    background-color: white;
    border: solid 2px var(--color-gray-20);
    border-radius: 0.5rem;
    padding: 0.25rem;

    :focus-within {
        border: solid 2px var(--color-gray-100);
    }
    
    input {
        width: 11rem;
        padding: 0.75rem;
        background-color: white;
        
        border: none;
        font-size: 1rem;
    }

    button {
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;

        background-color: var(--color-primary);
        
        color: var(--color-gray-0);
        font-weight: 500;
    }
`;

export default Search;