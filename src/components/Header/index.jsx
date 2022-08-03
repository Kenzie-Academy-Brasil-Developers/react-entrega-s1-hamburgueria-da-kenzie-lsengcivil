import Logo from "../Logo";
import InputSearch from "../InputSearch";

import Container from "./styles";

function Header () {
    return (
        <Container>
            <Logo/>
            <InputSearch/>
        </Container>
    )
}

export default Header;