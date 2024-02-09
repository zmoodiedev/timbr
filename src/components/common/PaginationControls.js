import React from 'react';
import ReactPaginate from 'react-paginate';
import '../../styles/pagination.css';

const PaginationControls = ({ pageCount, onPageChange }) => {
    return (
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={onPageChange}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
        />
    );
};

export default PaginationControls;