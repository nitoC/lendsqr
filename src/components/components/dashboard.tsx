import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Card from "../accessories/card/index.tsx";
import Users from "../accessories/user/index.tsx";

function Dashboard({ users }) {
  const [data, setdata] = useState([]);
  let arr = users;
  //pagination
  const value = useRef(0);
  const endvalue = useRef(9);
  let num = 9;
  const [pagination, setpagination] = useState({
    multiple: 1,
    btncount: Math.ceil(arr.length / num),
    end: endvalue.current,
    start: value.current,
  });
  const [pages, setpages] = useState(
    arr.slice(pagination.start, pagination.end)
  );
  //this function gives functionality to the pagination buttons
  const pagin = (type: any) => {
    if (type === "prev" && pagination.start > 0) {
      value.current = value.current - num;
      console.log(value.current);
      setpagination({
        ...pagination,
        end: pagination.end - 9,
        start: value.current,
        multiple: pagination.multiple - 1,
      });
    }
    if (type === "next" && pagination.end < 0) {
      value.current = pagination.end;
      console.log(pagination.start);
      setpagination({
        ...pagination,
        start: value.current,
        end: pagination.end + 9,
        multiple: pagination.multiple + 1,
      });
    }

    if (typeof type == "number") {
      value.current = type * num - num;
      console.log(pagination.start);
      setpagination({
        ...pagination,
        start: value.current,
        end: type * num,
        multiple: type>=pagination.btncount-1?pagination.multiple:type,
      });
    }
  };
  //pagination
  useEffect(() => {
    let data = pages.map((a, b) => {
      return {
        organisation: a.orgName,
        username: a.userName,
        // eslint-disable-next-line no-octal
        numbers: a.phoneNumber,
        status: "blacklisted",
        email: a.email,
        date: new Date(a.createdAt).toUTCString,
      };
    });
    setpages(arr.slice(pagination.start, pagination.end));
    setdata(data);
  }, [arr, pages, pagination.end, pagination.start]);

  console.log(pages, " gg ");

  return (
    <div className="dashboard-container">
      <div className="user">
        <div className="user__header">Users</div>
        <div className="user__stat-card">
          <Card />
        </div>
        <div className="user-table">
          <table className="user-display__table">
            <tr>
              <th className="user-table__header">
                <div className="table-header-text__wrapper">
                  <span className="table-header-text">ORGANISATION</span>
                  <span className="table-header-icon__wrapper">
                    <img
                      src="assets/icons/table_header_icon.svg"
                      alt="table icon"
                      className="table-header-icon__image"
                    />
                  </span>
                </div>
              </th>
              <th className="user-table__header">
                <div className="table-header-text__wrapper">
                  <span className="table-header-text">USERNAME</span>
                  <span className="table-header-icon__wrapper">
                    <img
                      src="assets/icons/table_header_icon.svg"
                      alt="table icon"
                      className="table-header-icon__image"
                    />
                  </span>
                </div>
              </th>

              <th className="user-table__header">
                <div className="table-header-text__wrapper">
                  <span className="table-header-text">EMAIL</span>
                  <span className="table-header-icon__wrapper">
                    <img
                      src="assets/icons/table_header_icon.svg"
                      alt="table icon"
                      className="table-header-icon__image"
                    />
                  </span>
                </div>
              </th>

              <th className="user-table__header">
                <div className="table-header-text__wrapper">
                  <span className="table-header-text">PHONE NUMBER</span>
                  <span className="table-header-icon__wrapper">
                    <img
                      src="assets/icons/table_header_icon.svg"
                      alt="table icon"
                      className="table-header-icon__image"
                    />
                  </span>
                </div>
              </th>

              <th className="user-table__header">
                <div className="table-header-text__wrapper">
                  <span className="table-header-text">DATE JOINED</span>
                  <span className="table-header-icon__wrapper">
                    <img
                      src="assets/icons/table_header_icon.svg"
                      alt="table icon"
                      className="table-header-icon__image"
                    />
                  </span>
                </div>
              </th>
              <th colSpan={2} className="user-table__header">
                <div className="table-header-text__wrapper">
                  <span className="table-header-text">STATUS</span>
                  <span className="table-header-icon__wrapper">
                    <img
                      src="assets/icons/table_header_icon.svg"
                      alt="table icon"
                      className="table-header-icon__image"
                    />
                  </span>
                </div>
              </th>
            </tr>
            {data.map((a, b) => {
              console.log(a, "here", b, "  index");
              return <Users key={b} users={a} />;
            })}
          </table>
        </div>
        <div className="dashboard-footer">
          <div className="filter">
            <div className="filter__txt">showing</div>
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
            <div className="filter__txt">out of 100</div>
          </div>
          <div className="dashboard__pagination">
            <span className="page-btn" onClick={() => pagin("prev")}>
              <img
                src="assets/icons/prevbtn.svg"
                alt=""
                className="pagin__btn"
              />
            </span>
            <span
              className="page-btn"
              onClick={() => pagin(pagination.multiple)}
            >
              {pagination.multiple}
            </span>
            <span
              className="page-btn"
              onClick={() => pagin(pagination.multiple + 1)}
            >
              {pagination.multiple + 1}
            </span>
            ... <span onClick={() => pagin(pagination.btncount-1)} className="page-btn">{pagination.btncount - 1}</span>
            <span onClick={() => pagin(pagination.btncount)} className="page-btn">{pagination.btncount}</span>
            <span className="page-btn" onClick={() => pagin("next")}>
              <img
                src="assets/icons/nextbtn.svg"
                alt=""
                className="pagin__btn"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
