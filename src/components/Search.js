

const Search = () => {
    
    const handleClick = (evt) => {
        evt.stopPropagation()
        alert('No se encontro lo que buscabas')
    }
    
    return (
        <div >
            <input onClick={handleClick} />
        </div>
    );
}

export default Search;