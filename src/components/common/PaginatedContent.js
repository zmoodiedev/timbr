import React, { useState } from 'react';
import PaginationControls from './PaginationControls';

const PaginatedContent = ({ items, itemsPerPage, renderContent }) => {
    const [pageNumber, setPageNumber] = useState(0);

    const pagesVisited = pageNumber * itemsPerPage;
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const displayedItems = items.slice(pagesVisited, pagesVisited + itemsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            {renderContent(displayedItems)}
            <PaginationControls pageCount={pageCount} onPageChange={changePage} />
        </div>
    );
};

export default PaginatedContent;