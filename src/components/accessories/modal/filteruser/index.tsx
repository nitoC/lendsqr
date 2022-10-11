import React from 'react';
import DropdownInput from './dropdown.tsx';
import Input from './input.tsx';


function FilterModal() {
    return (  
        <div className="filter-modal">
            <div className="filter-modal__wrapper">
            <DropdownInput label="Organisation" placeholder="Select" icon="arrowdown"/>
            <Input type="text" label="Username"/>
            <Input type="email" label="Email"/>
            <DropdownInput label="Date" placeholder="Date" icon="calender"/>
            <Input type="text" label="Phone Number"/>
            <DropdownInput label="Status" placeholder="Select" icon="arrowdown"/>
            <div className="filter__btns">
                <button className="filter-btn filter-btn--reset">
                    Reset
                </button>
                <button className="filter-btn filter-btn--filter">
                    Filter
                </button>
            </div>
            </div>
        </div>
    );
}

export default FilterModal;