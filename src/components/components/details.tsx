import React from "react";

function Details({ details, page }) {
  console.log(details,"ingor");
  
  return (
    <div className="user-details">
      <div className="user-details__wrapper">
        <div onClick={() => page("dashboard")} className="user-back">
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
                src={details.profile.avatar}
                alt="avatar"
                className="details__avatar"
              />
            </div>
            <div className="details__identification">
              <div className="details__name">
               {`${details.profile.firstName} ${details.profile.lastName}`}
              </div>
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
              <div className="details__amount">&#8358;200,000.00</div>
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
              <div className="details__moreverti">
                <img src="assets/icons/more_verti.svg" alt="" className="details-moreverti__btn" />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="details__wrapper">
          <div className="personal__wrapper">
            <div className="personal__header">Personal Information</div>
            <div className="personal__details">
              <div className="personal__subdata">
                <div className="personal__subheader">
                  FULL NAME
                </div>
                <div className="personal__text">
                {`${details.profile.firstName}  ${details.profile.lastName}`}
                </div>
              </div>
              <div className="personal__name">
                <div className="personal__subheader">
                  PHONE NUMBER
                </div>
                <div className="personal__text">
                  {details.phoneNumber}
                </div>
              </div>
              <div className="personal__name">
                <div className="personal__subheader">
                  EMAIL ADDRESS
                </div>
                <div className="personal__text">
                  {details.email}
                </div>
              </div>
              <div className="personal__name">
                <div className="personal__subheader">
                  BVN
                </div>
                <div className="personal__text">
                  {details.profile.bvn}
                </div>
              </div>
              <div className="personal__name">
                <div className="personal__subheader">
                  GENDER
                </div>
                <div className="personal__text">
                  {details.profile.gender}
                </div>
              </div>
              <div className="personal__name">
                <div className="personal__subheader">
                  MARITAL STATUS
                </div>
                <div className="personal__text">
                  Single
                </div>
              </div>
              <div className="personal__name">
                <div className="personal__subheader">
                  CHILDREN
                </div>
                <div className="personal__text">
                   3
                </div>
              </div>
              <div className="personal__name">
                <div className="personal__subheader">
                  TYPE OF RESIDENCE
                </div>
                <div className="personal__text">Parents Apartment</div>
              </div>
          
            </div>
          </div>
          <div className="personal__wrapper">
            <div className="personal__header">Education and Employment</div>
            <div className="personal__details">
              <div className="personal__subdata">
                <div className="personal__subheader">LEVEL OF EDUCATION</div>
                <div className="personal__text">{details.education.level}</div>
              </div>
              <div className="personal__subdata">
                <div className="personal__subheader">EMPLOYMENT STATUS</div>
                <div className="personal__text">{details.education.employmentStatus}</div>
              </div>
              <div className="personal__subdata">
                <div className="personal__subheader">SECTOR OF EMPLOYMENT</div>
                <div className="personal__text">{details.education.sector}</div>
              </div>
              <div className="personal__subdata">
                <div className="personal__subheader">DURATION OF EMPLOYMENT</div>
                <div className="personal__text">{details.education.duration}</div>
              </div>
              <div className="personal__subdata">
                <div className="personal__subheader">OFFICE EMAIL</div>
                <div className="personal__text">{details.education.officeEmail}</div>
              </div>
              <div className="personal__subdata">
                <div className="personal__subheader">MONTHLY INCOME</div>
                <div className="personal__text">{details.education.monthlyIncome[0]} - {details.education.monthlyIncome[0]}</div>
              </div>
              <div className="personal__subdata">
                <div className="personal__subheader">LOAN REPAYMENT</div>
                <div className="personal__text">{details.education.loanRepayment}</div>
              </div>
            </div>
          </div>
          <div className="personal__wrapper">
            <div className="personal__header">Socials</div>
            <div className="personal__details">
              <div className="personal__subdata">
                <div className="personal__subheader">TWITTER</div>
                <div className="personal__text">{details.socials.twitter}</div>
              </div>
              <div className="personal__subdata">
                <div className="personal__subheader">FACEBOOK</div>
                <div className="personal__text">{details.socials.facebook}</div>
              </div>
              <div className="personal__subdata">
                <div className="personal__subheader">INSTAGRAM</div>
                <div className="personal__text">{details.socials.instagram}</div>
              </div>
            </div>
          </div>
          <div className="personal__wrapper">
            <div className="personal__header">Guarantor</div>
            <div className="personal__details">
            <div className="personal__subdata">
                <div className="personal__subheader">FULL NAME</div>
                <div className="personal__text">{details.guarantor.firstName + "  "+details.guarantor.lastName}</div>
              </div>
            <div className="personal__subdata">
                <div className="personal__subheader">PHONE NUMBER</div>
                <div className="personal__text">{details.guarantor.phoneNumber}</div>
              </div>
            <div className="personal__subdata">
                <div className="personal__subheader"> EMAIL ADDRESS</div>
                <div className="personal__text">{details.guarantor.address}</div>
              </div>
            <div className="personal__subdata">
                <div className="personal__subheader">RELATIONSHIP</div>
                <div className="personal__text">sibling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
