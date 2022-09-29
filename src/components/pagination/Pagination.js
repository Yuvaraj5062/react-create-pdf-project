import React from "react";
import './Pagination.css';

const Pagination = ({ userDataPerPage, totalUsers, paginate, currentPage }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalUsers / userDataPerPage); i++) {
    pageNumber.push(i);
  }

//   const paginate = (currentPage) => {
//     if(currentPage <= 0){
//         return 1;
//     }
//     return currentPage-1;
//   }
//console.log(pageNumber);

  return (
    <div className="pagination">
        <div className="prev_btn" onClick={() => {paginate(currentPage-1)}}>
            <p>Prev</p>
        </div>
        {pageNumber.map((number) => (
            <div key={number} className="pagination_box" onClick={()=>{paginate(number)}}>
                <p>{number}</p>
            </div>
        ))}
        <div className="next_btn" onClick={() => {paginate(currentPage+1)}}>
            <p>Next</p>
        </div>
    </div>
  );
};

export default Pagination;
