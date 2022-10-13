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

function Mobileusers({detail, page,handleDetails,data}) {
    console.log(data,'more verti')
    const {organisation,username,email,numbers,date,status}:user =detail
    const [show, setshow] = useState(-10);
    const toggleShow = ()=>{
      if(show===-10) setshow(4)
      if(show===4) setshow(-10)
    }
  return (
    <>
        <tr className="m-user-table__wrapper">
          <td>
          <div className="user-table__data">
            <span className="user-table-data__text">{username}</span>
          </div>
          </td>
          <td>
          <div className={`user-table__data user-table__data--${status}`}>
            <span className="user-table-data__text user-table-data--rounded">{status}</span>
          </div>
          </td>
          <td>
          <div onClick={()=>{
            toggleShow()
            }} className="user-table__data">
            <span  className="table-header-icon__wrapper">
              <img
                src="assets/icons/more_verti.svg"
                alt="table icon"
                className="table-data-icon__image"
              />
            </span>
          </div>
          </td>
            <Moreverti handleDetails={handleDetails} detail={data} page={page} zindex={show}/>
        </tr>
      </>
  );
}

export default Mobileusers;
