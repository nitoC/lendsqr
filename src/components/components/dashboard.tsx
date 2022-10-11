
import React, { useEffect, useState } from 'react';
import Card from '../accessories/card/index.tsx';
import Users from '../accessories/user/index.tsx';

function Dashboard() {
    const [data,usedata] = useState({
        organisation:"distributed",
        username:"adedeji",
        // eslint-disable-next-line no-octal
        number:1032672139,
        status:"blacklisted",
        email:"daren2track@gmail.com",
        date:"24th october 2021"
    })
    
    
    return ( 
        <div className="dashboard-container">
             
       <div className='user'>
            <div className="user__header">
                Users
            </div>
            <div className="user__stat-card">
                <Card/>
            </div>
          <div className='user-table'>
          <table className="user-display__table">
            <tr>
               <th className="user-table__header">
                <div className="table-header-text__wrapper">
                 <span className="table-header-text">ORGANISATION</span>
                 <span className="table-header-icon__wrapper">
                    <img src="assets/icons/table_header_icon.svg" alt="table icon" className="table-header-icon__image" />
                 </span>
                </div>
               </th>
               <th className="user-table__header">
               <div className="table-header-text__wrapper">
               <span className="table-header-text">USERNAME</span>
                 <span className="table-header-icon__wrapper">
                    <img src="assets/icons/table_header_icon.svg" alt="table icon" className="table-header-icon__image" />
                 </span>
                  </div>
               </th>
            
               <th className="user-table__header">
               <div className="table-header-text__wrapper">
               <span className="table-header-text">EMAIL</span>
                 <span className="table-header-icon__wrapper">
                    <img src="assets/icons/table_header_icon.svg" alt="table icon" className="table-header-icon__image" />
                 </span> 
                  </div>
               </th>

            
               <th className="user-table__header">
               <div className="table-header-text__wrapper">
               <span className="table-header-text">PHONE NUMBER</span>
                 <span className="table-header-icon__wrapper">
                    <img src="assets/icons/table_header_icon.svg" alt="table icon" className="table-header-icon__image" />
                 </span>
                  </div>
               </th>

            
               <th className="user-table__header">
               <div className="table-header-text__wrapper">
               <span className="table-header-text">DATE JOINED</span>
                 <span className="table-header-icon__wrapper">
                    <img src="assets/icons/table_header_icon.svg" alt="table icon" className="table-header-icon__image" />
                 </span>  
                  </div>
               </th>
               <th colSpan={2} className="user-table__header">
               <div className="table-header-text__wrapper">
               <span className="table-header-text">STATUS</span>
                 <span className="table-header-icon__wrapper">
                    <img src="assets/icons/table_header_icon.svg" alt="table icon" className="table-header-icon__image" />
                 </span>  
                  </div>
               </th>
               </tr>
            <Users users={data}/>
            <Users users={data}/>
          </table>
           </div>
           <div className="dashboard-footer">
            <div className="filter">
              <div className="filter__txt">
                showing
              </div>
              <div className="filter__btn">
                100
                <span className="filter-icon__container">
                <img
                  src="assets/icons/arrowdown.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              </div>
              <div className="filter__txt">
                out of 100
              </div>
            </div>
            <div className="dashboard__pagination">
              1  2  3 ... 4  5
            </div>
           </div>
        </div> 
        </div>
     );
}

export default Dashboard;