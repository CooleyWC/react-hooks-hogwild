import React from "react";

function FilterHogs({isShowingJustGreasies, onHandleGreasyChange, onHandleDropdownChange}){


    function handleDropdown(e){
        onHandleDropdownChange(e.target.value)
    }

    return (
        <div>
            <label>
                Show Just The Greasies
                <input 
                type="checkbox" 
                checked={isShowingJustGreasies}
                onChange={onHandleGreasyChange}
                />
            </label>
            <br></br>
            <label>
                Sort the Hogs
                <select onChange={handleDropdown}>
                    <option value='select'>--Select</option>
                    <option value="name">Name</option>
                    <option value='weight'>Weight</option>
                </select>

            </label>
        </div>
    )
}

export default FilterHogs