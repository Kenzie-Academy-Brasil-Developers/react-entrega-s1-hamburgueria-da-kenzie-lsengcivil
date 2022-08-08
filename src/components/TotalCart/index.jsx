import Container from "./styles";

function TotalCart ({currentSale, setCurrentSale}) {
    const prices = currentSale.map(({price}) => price);
    const total = prices.reduce((previuosPrice, currentPrice) => 
        previuosPrice + currentPrice, 0    
    );
    const strTotal = String(total.toFixed(2));
    
    return (
        <Container>
            <div>
                <h2 className="total" >Total</h2>
                <h2 className="price" >
                    R$ {
                        strTotal.includes('.') ?
                        strTotal.replace('.', ',') 
                        : 
                        `${strTotal},00`
                    }
                </h2>
            </div>

            <button onClick={() => setCurrentSale([])} >Remover Todos</button>
        </Container>
    )
}

export default TotalCart;