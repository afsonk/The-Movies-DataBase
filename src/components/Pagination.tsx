import React from "react";
import ReactPaginate from 'react-paginate';


type Props = {
    onPageChange: ({selected: selectedPage}: {selected: number}) => void,
    totalPages: number | undefined
}

function Pagination({ onPageChange, totalPages }: Props) {
    return (
        <ReactPaginate
            onPageChange={onPageChange}
            pageCount={totalPages!}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            previousLabel='<'
            nextLabel='>'
            containerClassName='pagination'
            pageClassName='pagination__page'
        />
    );
}

export default Pagination