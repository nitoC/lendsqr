import React from 'react';
interface select{
    label:string,
    placeholder:string,
    icon:string
}
function DropdownInput({label, placeholder, icon}:select) {
    return ( 
        <div className="dropdown">
            <div className="modal__label">
               {label}
            </div>
            <div className="dropdown-input__wrapper">
                <input type="text" className="dropdown__input" placeholder={placeholder} />
                <span className="input-icon__wrapper">
                    <img src={`assets/icons/${icon}.svg`} alt="input icon" className="input__icon" />
                </span>
            </div>
        </div>
     );
}

export default DropdownInput;