import React from 'react';

const Pagination = (props) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <p onClick={() => props.paginate(number)} className='page-link'>
                {number}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

export default Pagination;