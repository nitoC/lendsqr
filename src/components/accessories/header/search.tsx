import React from 'react';
function Search() {
    return ( 
        <div className="search__container">
            <input type="text" placeholder='Search for anything' className="search__input" />
            <button className="search__btn">
                <img src="/assets/icons/search_icon.svg"  alt="search_Icon" className="search_icon" />
            </button>
        </div>
     );
}

export default Search;