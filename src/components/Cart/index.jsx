import Container, { List, Title } from "./styles";

function Cart () {
    return (
        <Container>
            <Title>
                <h2>Carrinho de compras</h2>
            </Title>
            <List>
                <h2>Sua sacola está vazia</h2>
                <h3>Adicione itens</h3>
            </List>
        </Container>
    )
}

export default Cart;