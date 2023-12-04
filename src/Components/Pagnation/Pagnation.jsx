import React from 'react'
import ReactPaginate from 'react-paginate';
export default function Pagnation({getPage,pageCount}) {
    const handlePageClick=(data)=>{
        getPage(data.selected+1)
      
    }
  return (
    <div className='py-2'>
        <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        renderOnZeroPageCount={null}
        containerClassName={'pagination  p-3 justify-content-center '}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
    /></div>
  )
}
