import React from "react"
function FilterComponent(props)
{
    return(
        <>
            <input type ="checkbox" name="check" onChange={props.handleFilter}></input>
            <label htmlFor = "check">hide completed</label> 
        </>
    )
}
export default FilterComponent