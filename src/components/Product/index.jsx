import Container from "./styles";

function Product ({id, img, name, category, price, handleClick}) {
    const strPrice = String(price);

    return (
        <Container>
            <div className="containerImg" >
                <img src={img} alt="" />
            </div>
            <div className="containerInfo" >
                <p className="name">{name}</p>
                <p className="category">{category}</p>
                <p className="price">
                    R$ {
                        strPrice.includes('.') ? 
                            strPrice.replace('.', ',') 
                            : 
                            `${strPrice},00`
                    }
                </p>
                <button onClick={() => handleClick(id)} >Adicionar</button>
            </div>
        </Container>
    )
}

export default Product;