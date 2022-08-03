import Header from '../Header'
import ProductsList from '../ProductList';
import Cart from '../Cart';

import Container from "./styles";

function HomePage () {
    return (
        <Container>
            <Header/>
            <div className='main' >
                <ProductsList/>
                <Cart/>
            </div>
        </Container>
    )
}

export default HomePage;