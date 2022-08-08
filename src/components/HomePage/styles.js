import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;

    .main {
        width: 100%;
        height: 82%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (min-width: 650px) {

        .main {
            height: 86%;
        }
    }

    @media screen and (min-width: 882px) {
        .main {
            flex-direction: row;
            justify-content: space-evenly;
            align-items: flex-start;
        }
    }
`;

export default Container;