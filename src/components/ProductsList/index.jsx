import Container from "./styles";
import api from '../../services/api.js'

function ProductsList () {

    api.get().then(response => console.log(response.data))

    return (
        <Container>

        </Container>
    )
}

export default ProductsList;