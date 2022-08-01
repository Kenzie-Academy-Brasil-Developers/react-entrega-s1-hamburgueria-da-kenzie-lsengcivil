import Header from "../Header";
import ProductsList from "../ProductsList";
import Cart from "../Cart";

import Container from "./styles";

function HomePage () {
    return (
        <Container>
            <Header/>
            <ProductsList/>
            <Cart/>
        </Container>
    )
}

export default HomePage;