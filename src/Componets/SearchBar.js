function SearchBar({updateSearchText}){

    return (
        <div className="searchbar">
                <label> search</label>
            <input
            type="text"
            id="search"
            placeholder=""
            onChange={updateSearchText}
            />
        </div>
    )
}

export default SearchBar