import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../styles/search.css';

function Search() {
    return (
        <div id='campSearch'>
                <form id="search">
                    <input type="search" id="query" name="q" placeholder="Search..." />
                    <button class="search-btn"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
        </div>
    );
};

export default Search;