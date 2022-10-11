import React from 'react';
function Card() {
    return ( 
        <div className="stat-card-wrapper">
            <div className="stat-card__data">
                <div className="stat-card-icon__rounded stat-card-icon__rounded--pinky">
                    <img src="assets/icons/user_card.svg" alt="card icon" className="stat-card__icon" />
                </div>
                <div className="stat-card__text">
                    USERS
                </div>
                <div className="stat-card__count">
                    2,143
                </div>
            </div>
            <div className="stat-card__data">
                <div className="stat-card-icon__rounded stat-card-icon__rounded--purple ">
                    <img src="assets/icons/active_card.svg" alt="card icon" className="stat-card__icon" />
                </div>
                <div className="stat-card__text">
                    ACTIVE USERS
                </div>
                <div className="stat-card__count">
                    2,143
                </div>
            </div>
            <div className="stat-card__data">
                <div className="stat-card-icon__rounded stat-card-icon__rounded--orange">
                    <img src="assets/icons/user_loan_card.svg" alt="card icon" className="stat-card__icon" />
                </div>
                <div className="stat-card__text">
                    USERS WITH LOANS
                </div>
                <div className="stat-card__count">
                    12,143
                </div>
            </div>
            <div className="stat-card__data">
                <div className="stat-card-icon__rounded stat-card-icon__rounded--red">
                    <img src="assets/icons/user_saving_card.svg" alt="card icon" className="stat-card__icon" />
                </div>
                <div className="stat-card__text">
                    USERS WITH SAVINGS
                </div>
                <div className="stat-card__count">
                    122,143
                </div>
            </div>
        </div>
     );
}

export default Card;