import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import { getUsersList, handlelogin } from '../redux/UserListSlice'



const UserList = () => {
  const { users } = useSelector((state) => state.users.users)
  const dispatch = useDispatch()
  const [userList, setUserList] = useState({
    data: []
  })
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  console.log(postsPerPage);


  useEffect(() => {
    dispatch(getUsersList())
  }, [currentPage, postsPerPage])

  useEffect(() => {
    if (users) {
      setUserList({ ...userList, data: users });
      dispatch(handlelogin(false))
    } else {
      dispatch(handlelogin(true))
    }
  }, [users]);



  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = userList.data && userList.data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleChangeSelect = (e) => {
    const value = e.target.value
    setPostsPerPage(value)

  }

  return (
    <div className="container">
      <div className="select">
        <div class="input-group mb-3 w-25">
          <select class="custom-select" id="inputGroupSelect01" onChange={handleChangeSelect}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
      <div className="row m-2">
        {currentPosts ? currentPosts.map((items, key) => (
          <Card key={key} items={items} />
        )) : <h1>NO users Found</h1>}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={userList.data.length}
        paginate={paginate}
      />


    </div>
  )
}

export default UserList