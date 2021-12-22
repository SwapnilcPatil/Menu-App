import React from 'react'

const Navbar = ({filterItemProp, menuListProp} ) => {
    return (
        <>
         <nav className="navbar">
        <div className="btn-group">
            {menuListProp.map((curElem) => {
                return(
                    <button className="btn-group__item" onClick={() => filterItemProp(curElem)}>{curElem}</button> 
                )
            })}
        </div>
    </nav>   
        </>
    )
}

export default Navbar
