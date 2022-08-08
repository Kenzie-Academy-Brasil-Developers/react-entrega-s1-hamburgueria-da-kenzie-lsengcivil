import { useEffect, useState } from 'react';
import api from '../../services/api';

import Header from '../Header'
import ProductsList from '../ProductList';
import Cart from '../Cart';

import Container from "./styles";

function HomePage () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentSale, setCurrentSale] = useState([]);

    function showProducts (e) {
        e.preventDefault()
    }

    function handleClick (index) {
        const list = products.find(({id})  => id === index);
        currentSale.includes(list) ?
        alert('Este produto já está no carrinho!')
        :
        setCurrentSale((oldCurrentSale) => [...oldCurrentSale, list])
    }

    function RemoveProduct (index) {
        setCurrentSale(() => {
            const list = currentSale
                .filter(({id}) => id !== index);
            return list;
        });
    }

    useEffect(() => {
        setLoading(true);

        api.get('products')
            .then(response => setProducts(response.data))
            .finally(() => {
                setLoading(false)
            })
    }, []);

    return (
        <Container>
            <Header
                showProducts={showProducts}
            />

            <div className='main' >
                <ProductsList 
                    products={products} 
                    loading={loading} 
                    handleClick={handleClick}
                />
                
                <Cart 
                    currentSale={currentSale}
                    RemoveProduct={RemoveProduct}
                    setCurrentSale={setCurrentSale}
                />
            </div>

        </Container>
    )
}

export default HomePage;