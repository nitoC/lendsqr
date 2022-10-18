import React from "react";
function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-bar__dropdown">
        <div className="side-bar__btn">
        <span className="dashboard__span">
                <img
                  src="assets/icons/switch_organisation.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__header-text">Switch Organisation</span>
              <span className="dashboard-icon__container">
                <img
                  src="assets/icons/arrowdown.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
        </div>
      </div>
      <div className="side-bar__dashboard">
        <div className="side-bar__header">
        <span className="dashboard-icon__container">
                <img
                  src="assets/icons/dashboard.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Dashboard</span>
        </div>
        <div className="dashboard__container">
          <div className="dashboard__link-wrap">
          <div className="dashboard__header">CUSTOMERS</div>
            <div className="dashboard__link">
           <span className="dashboard-icon__container">
                <img
                  src="assets/icons/users.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Users</span>
            </div>
            <div className="dashboard__link">
           <span className="dashboard-icon__container">
                <img
                  src="assets/icons/guarantors.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Guarantors</span>
            </div>
            <div className="dashboard__link">
           <span className="dashboard-icon__container">
                <img
                  src="assets/icons/loans.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Loans</span>
            </div>
            <div className="dashboard__link">
           <span className="dashboard-icon__container">
                <img
                  src="assets/icons/decision_models.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Decision Models</span>
            </div>
            <div className="dashboard__link">
           <span className="dashboard-icon__container">
                <img
                  src="assets/icons/savings.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Savings</span>
            </div>
            <div className="dashboard__link">
           <span className="dashboard-icon__container">
                <img
                  src="assets/icons/loan_products.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Loan Requests</span>
            </div>
            <div className="dashboard__link">
           <span className="dashboard-icon__container">
                <img
                  src="assets/icons/whitelist.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Whitelist</span>
            </div>
            <div className="dashboard__link">
           <span className="dashboard-icon__container">
                <img
                  src="assets/icons/karma.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Karma</span>
            </div>
          </div>
          <div className="dashboard__link-wrap">
          <div className="dashboard__header">BUSINESSES</div>
            <div className="dashboard__link">
             <span className="dashboard-icon__container">
                <img
                  src="assets/icons/preferences.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Organisation</span>
            </div>
            <div className="dashboard__link">
             <span className="dashboard-icon__container">
                <img
                  src="assets/icons/loan_products.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Loan Products</span>
            </div>
            <div className="dashboard__link">
             <span className="dashboard-icon__container">
                <img
                  src="assets/icons/savings_products.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Savings Products</span>
            </div>
            <div className="dashboard__link">
             <span className="dashboard-icon__container">
                <img
                  src="assets/icons/fees.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Fees and Charges</span>
            </div>
            <div className="dashboard__link">
             <span className="dashboard-icon__container">
                <img
                  src="assets/icons/transactions.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Transactions</span>
            </div>
            <div className="dashboard__link">
             <span className="dashboard-icon__container">
                <img
                  src="assets/icons/preferences.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Services</span>
            </div>
            <div className="dashboard__link">
             <span className="dashboard-icon__container">
                <img
                  src="assets/icons/service_account.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Service Accounts</span>
            </div>
            <div className="dashboard__link">
             <span className="dashboard-icon__container">
                <img
                  src="assets/icons/settlements.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Settlements</span>
            </div>
            <div className="dashboard__link">
             <span className="dashboard-icon__container">
                <img
                  src="assets/icons/reports.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Reports</span>
            </div>
          </div>
          <div className="dashboard__link-wrap">
          <div className="dashboard__header">SETTINGS</div>
            <div className="dashboard__link">
             <span className="dashboard-icon__container">
                <img
                  src="assets/icons/preferences.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Preferences</span>
            </div>
            <div className="dashboard__link">
             <span className="dashboard-icon__container">
                <img
                  src="assets/icons/fees.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Fees and Pricing</span>
            </div>
            <div className="dashboard__link">
             <span className="dashboard-icon__container">
                <img
                  src="assets/icons/audit.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text">Audit Logs</span>
            </div>
            <div className="dashboard__link">
             <span className="dashboard-icon__container">
                <img
                  src="assets/icons/logout.svg"
                  alt=""
                  className="dashboard__icon"
                />
              </span>
              <span className="dashboard__text"></span>
            </div>
            <div className="dashboard__logout-text">
              <div className="dashboard__text">
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
