import React, { useState } from "react";
import JsonData from "../../data/MOCK_DATA.json";
import UserDataCard from "./UserDataCard";
import Pagination from "./Pagination";
import "./UserInfo.css";

const UserInfo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userDataPerPage, setUsetDataPerPage] = useState(5);

  const indexOfLastUser = currentPage * userDataPerPage;
  const indexOfFirstUSer = indexOfLastUser - userDataPerPage;
  const currentUserData = JsonData.slice(indexOfFirstUSer, indexOfLastUser);

  const paginate = (pageNumber) => {
    let totalPages = Math.ceil(JsonData.length / userDataPerPage)+1;
    // console.log(totalPages);
    if(pageNumber === 0) {
      setCurrentPage(1);
    } else if(pageNumber === totalPages) {
      setCurrentPage(totalPages-1);
    } else {
      setCurrentPage(pageNumber);
    }       
  };

  // console.log(currentPage);

  return (
    <>
      <h2 className="userinfo">User Information</h2>
      <UserDataCard currentUserData={currentUserData} />
      <Pagination
        userDataPerPage={userDataPerPage}
        totalUsers={JsonData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default UserInfo;
