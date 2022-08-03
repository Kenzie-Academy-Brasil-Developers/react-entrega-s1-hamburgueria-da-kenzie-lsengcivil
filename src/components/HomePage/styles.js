import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;

    .main {
        width: 100%;
        height: 82%;
    }

    @media screen and (min-width: 650px) {

        .main {
            height: 86%;
        }
    }
`;

export default Container;