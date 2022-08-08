import Product from "../Product";
import Container from "./styles";

function ProductsList ({products, loading, handleClick}) {
    return (
        <Container>
            {
                loading ? 
                <div className="loading" >
                    <span>Carregando...</span>
                </div>  
                :
                products.map(({id, img, name, category, price}) => 
                    <Product 
                        key={id}
                        id={id}
                        img={img}
                        name={name}
                        category={category}
                        price={price}
                        handleClick={handleClick}
                    />
                )
            }
        </Container>
    )
}

export default ProductsList;