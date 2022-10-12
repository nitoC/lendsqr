import React from 'react';

function Moreverti({zindex, detail, page, handleDetails}) {
    return ( 
        <div style={{zIndex:zindex}} className="more-wrapper">
            <div onClick={()=> handleDetails(detail)} className="more__item">
                <div className="more-icon__wrapper">
                    <img src="assets/icons/view.svg" alt="" className="more__icon" />
                </div>
                <div className="more__text">
                    View Details
                </div>
            </div>
            <div className="more__item">
                <div className="more-icon__wrapper">
                    <img src="assets/icons/blacklist.svg" alt="" className="more__icon" />
                </div>
                <div className="more__text">
                    Blacklist User
                </div>
            </div>
            <div className="more__item">
                <div className="more-icon__wrapper">
                    <img src="assets/icons/activate.svg" alt="" className="more__icon" />
                </div>
                <div className="more__text">
                    Activate User
                </div>
            </div>
        </div>
     );
}

export default Moreverti;