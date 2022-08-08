import Logo from "../Logo";
import InputSearch from "../InputSearch";

import Container from "./styles";

function Header ({showProducts}) {
    return (
        <Container>
            <Logo/>
            <InputSearch
                showProducts={showProducts}
            />
        </Container>
    )
}

export default Header;