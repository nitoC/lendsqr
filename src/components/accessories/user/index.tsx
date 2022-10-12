import React, { useEffect } from "react";
import { useState } from "react";
import Moreverti from "../modal/moreverti/index.tsx";

interface user{
    organisation:string,
    username:string,
    email:string,
    numbers:number,
    date:string,
    status:string
}

function Users({users}) {

    const {organisation,username,email,numbers,date,status}:user =users
    const [show, setshow] = useState(-10);
    const toggleShow = ()=>{
      if(show===-10) setshow(4)
      if(show===4) setshow(-10)
    }
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
            <span className="user-table-data__text">{numbers}</span>
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
            <span onClick={toggleShow} className="table-header-icon__wrapper">
              <img
                src="assets/icons/more_verti.svg"
                alt="table icon"
                className="table-data-icon__image"
              />
            </span>
          </div>
          </td>
            <Moreverti zindex={show}/>
        </tr>
      </>
  );
}

export default Users;
