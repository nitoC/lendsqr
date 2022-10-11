import React from 'react';

interface type{
    type:string
    label:string
}
function Input({label,type}:type) {
    return ( 
        <div className="filter-container">
             <div className="modal__label">
               {label}
            </div>
            <div className="filter-input__wrapper">
                <input type={type} className="filter__input"  placeholder=''/>
            </div>
        </div>
     );
}

export default Input;