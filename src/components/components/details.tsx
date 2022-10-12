import React from "react";
import Personal from "../accessories/details/index.tsx";

function Details({details, page}) {
  return (
    <div className="user-details">
      <div className="user-details__wrapper">
        <div onClick={()=> page("dashboard")} className="user-back">
          <div className="user-back-icon__wrapper">
            <img
              src="assets/icons/arrowback.svg"
              alt=" back icon"
              className="user-back__icon"
            />
          </div>
          <div className="user-back__text">Back to Users</div>
        </div>
        <div className="details-header">
          <div className="user__header">Users</div>
          <div className="details-btn__wrapper">
            <button className="details-btn details--blacklist">
              Blacklist
            </button>
            <button className="details-btn details--activate">Activate</button>
          </div>
        </div>
        <div className="details-heading">
          <div className="details-heading__wrapper">
            <div className="details-avatar__wrapper">
              <img
                src="assets/icons/nullavatar.svg"
                alt="avatar"
                className="details__avatar"
              />
            </div>
            <div className="details__identification">
              <div className="details__name">Grace effiom</div>
              <div className="details__id">12345fghtyu</div>
            </div>
            <div className="details-tier">
              <div className="details-tier__text">Users Tier</div>
              <div className="details-tier-icon__wrapper">
                <img
                  src="assets/icons/star.svg"
                  alt=""
                  className="details-tier__icon"
                />
                <img
                  src="assets/icons/star.svg"
                  alt=""
                  className="details-tier__icon"
                />
                <img
                  src="assets/icons/star.svg"
                  alt=""
                  className="details-tier__icon"
                />
              </div>
            </div>
            <div className="details-loan">
              <div className="details__amount">200,000.00</div>
              <div className="details-account">
                <span className="details-account__number">0156822773</span>/
                <span className="details-account__bank">first bank</span>
              </div>
            </div>
          </div>
          <div className="details__navigation">
            <div className="details-nav__wrapper">
              <div className="details__link">General Details</div>
              <div className="details__link">Documents</div>
              <div className="details-other__links">
                <div className="details__link">bank Details</div>
                <div className="details__link">Loans</div>
                <div className="details__link">Savings</div>
                <div className="details__link">App and System</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Personal details={details}/>
    </div>
  );
}

export default Details;
