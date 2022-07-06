import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
    const { search, setSearch, isError } = useGlobalContext();
    // const emptySearchBar = (e) => {
    //     setSearch("");
    //     e.preventDefault();
    // };
    return (
        <>
            <section className="search-section">
                <h2>Search your fav movie</h2>
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <input
                            type="text"
                            // onClick={emptySearchBar}
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                    </div>
                </form>
                <div className="card-error">
                    <p>{isError.show && isError.msg}</p>
                </div>
            </section>
        </>
    );
};

export default Search;
