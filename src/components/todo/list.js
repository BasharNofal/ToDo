import React, { useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';
import { useContext } from 'react';
import { Sort } from '../../context/sort';
import { Pagination } from '../../context/pagination';
import PaginationEditor from './pagination'
import SortList from './sort';
import Button from 'react-bootstrap/Button'

function ToDoList(props) {
  const paginationContext = useContext(Pagination);
  const sortContext = useContext(Sort);
  let arrOfCurrentPosts = props.list;

  const indexOfLastCard = paginationContext.currentPageNumber * paginationContext.postsPerPage;
  const indexOfFirstCard = indexOfLastCard - paginationContext.postsPerPage;
  arrOfCurrentPosts = arrOfCurrentPosts.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = pageNumber => paginationContext.setPageNumber(pageNumber);

  const filter = () => {
    props.handleList(props.list.filter(item => !item.complete))
  }

  const sort = () => {
    if (sortContext.sortKey === 'Difficulty') {
      props.handleList(props.list.sort((a, b) => a.difficulty - b.difficulty));
    } else{
      props.getAllItems()
    }
  }

  useEffect(sort, [sortContext.sortKey]);
  // useEffect(filter, [sortContext.sortKey]);

  return (
    <>
      <div>
        <Button onClick={filter} variant="primary">Show Pending</Button>
        <SortList list={arrOfCurrentPosts} />
      </div>
      <div>
        <ul>
          {arrOfCurrentPosts.map(item => (
            <li className={`complete-${item.complete.toString()}`}
              key={item._id}>
              <Toast>
                <ToastHeader>
                  <span className={`rounded mr-2 mySpan`} onClick={() => props.handleComplete(item._id)} >{item.complete ? "Complete" : "Pending"}</span>
                  <span className="mr-auto" ><b>{item.assignee}</b></span>
                  <b className="closeBtn" onClick={() => props.handleDelete(item._id)}>X</b>
                </ToastHeader>
                <ToastBody>
                  <p> <b>{item.text}</b> </p>
                  <small>{`Difficulty: ${item.difficulty}`}</small>
                </ToastBody>
              </Toast>
            </li>
          ))}
        </ul>
      </div>
      <div id="pages" className='container mt-5'>
        <PaginationEditor
          postsPerPage={paginationContext.postsPerPage}
          totalPosts={props.list.length}
          paginate={paginate}
        />
      </div>
    </>
  );

}
export default ToDoList;
