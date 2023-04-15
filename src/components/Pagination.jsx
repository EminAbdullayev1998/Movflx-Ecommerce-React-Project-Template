import React from "react";

const Pagination = ({ totalPosts, postPerPage, paginate }) => {
  const postNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    postNumbers.push(i);
  }



  return (
    <nav >
      <ul className="pagination">

        {postNumbers.map((number,index) => (
          
            <button id='pagbutton' key={index} onClick={() => paginate(number)} >
              {number}
            </button>
          
        ))}

      </ul>
    </nav>
  );
};

export default Pagination;