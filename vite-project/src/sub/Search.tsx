

function setSearchQuery(value: any){
    
}
function Search() {
    return (
        <div>
            <input

                type="search"

                name="search-form"

                id="search-form"

                className="search-input"

                onChange={(e) => setSearchQuery(e.target.value)}

                placeholder="Search user"

            />
           
        </div>
    )
}
export default Search