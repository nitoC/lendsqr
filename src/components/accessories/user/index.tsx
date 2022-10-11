import React, { useEffect } from "react";

interface user{
    organisation:string,
    username:string,
    email:string,
    number:number,
    date:string,
    status:string
}

function Users({users}) {
    const {organisation,username,email,number,date,status}:user =users
    useEffect(() => {
      console.log(date,username)
    }, [date,username])
    
  return (
    <>
        <tr className="user-table__wrapper">
          <td>
          <div className="user-table__data">
            <span className="user-table-data__text">{organisation}</span>
          </div>
          </td>
          <td>
          <div className="user-table__data">
            <span className="user-table-data__text">{username}</span>
          </div>
          </td>
          <td>
          <div className="user-table__data">
            <span className="user-table-data__text">{email}</span>
          </div>
          </td>
          <td>
          <div className="user-table__data">
            <span className="user-table-data__text">{number}</span>
          </div>
          </td>
          <td>
          <div className="user-table__data">
            <span className="user-table-data__text">{date}</span>
          </div>
          </td>
          <td>
          <div className={`user-table__data user-table__data--${status}`}>
            <span className="user-table-data__text user-table-data--rounded">{status}</span>
          </div>
          </td>
          <td>
          <div className="user-table__data">
            <span className="table-header-icon__wrapper">
              <img
                src="assets/icons/more_verti.svg"
                alt="table icon"
                className="table-data-icon__image"
              />
            </span>
          </div>
          </td>
        </tr>
      </>
  );
}

export default Users;
