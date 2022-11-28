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
    const [recordsPerPage,setRecordsPerPage] = useState(10);


  useEffect(() => {
    dispatch(getUsersList())
  }, [currentPage, recordsPerPage])

  useEffect(() => {
    if (users) {
      setUserList({ ...userList, data: users });
      dispatch(handlelogin(false))
    } else {
      dispatch(handlelogin(true))
    }
  }, [users]);


  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = userList.data.slice(indexOfFirstRecord,
    indexOfLastRecord);
  const nPages = Math.ceil(userList.data.length / recordsPerPage)


  const handleChangeSelect = (e) => {
    const value = e.target.value
    setRecordsPerPage(value)
  }

  return (
    <div className="container">
      <div className="select">
        <div className="input-group mb-3 w-25">
          <select className="custom-select" id="inputGroupSelect01" onChange={handleChangeSelect}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
      <div className="row m-2">
        {currentRecords ? currentRecords.map((items, key) => (
          <Card key={key} items={items} />
        )) : <h1>NO users Found</h1>}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} 
        />
    </div>
  )
}

export default UserList