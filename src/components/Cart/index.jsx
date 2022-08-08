import CardProduct from "../CardProduct";
import TotalCart from "../TotalCart";
import Container, { List, Title } from "./styles";

function Cart ({currentSale, RemoveProduct, setCurrentSale}) {

    return (
        <Container>
            <Title>
                <h2>Carrinho de compras</h2>
            </Title>
            <List>
                {
                    currentSale.length > 0 ?
                    currentSale.map((product, index) => 
                        <CardProduct 
                            key={index} 
                            product={product}
                            RemoveProduct={RemoveProduct}
                        />
                    )
                    :
                    <div className="emptyCart">
                        <h2>Sua sacola está vazia</h2>
                        <h3>Adicione itens</h3>
                    </div>
                }
                {
                    currentSale.length > 0 ?
                    <TotalCart 
                    currentSale={currentSale}
                    setCurrentSale={setCurrentSale}
                    />
                    : ''
                }
            </List>
        </Container>
    )
}

export default Cart;