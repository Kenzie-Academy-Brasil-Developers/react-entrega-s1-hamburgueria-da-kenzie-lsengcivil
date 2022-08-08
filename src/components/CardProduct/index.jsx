import Container from "./styles";

function CardProduct ({product, RemoveProduct}) {
    const {id, img, name, category, price} = product;
    const strPrice = String(price);
    return (
        <Container>
            <div className="image">
                <img src={img} alt={name} />
            </div>
            <div className="info">
                <p className="name">{name}</p>
                <p className="category" >{category}</p>
                <p className="price" >
                    R$ {
                        strPrice.includes('.') ? 
                            strPrice.replace('.', ',') 
                            : 
                            `${strPrice},00`
                    }
                </p>
            </div>
            <div className="remove" onClick={() => RemoveProduct(id)} >
                <span>Remover</span>
            </div>
        </Container>
    )
}

export default CardProduct;