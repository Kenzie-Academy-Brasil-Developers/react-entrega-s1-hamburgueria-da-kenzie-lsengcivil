import Search from "./styles";

function InputSearch ({showProducts}) {
    return (
        <Search onSubmit={showProducts}>
            <input 
                type="text"
                placeholder="Digitar pesquisa"
            />
            <button type="submit">Pesquisar</button>
        </Search>
    )
}

export default InputSearch;