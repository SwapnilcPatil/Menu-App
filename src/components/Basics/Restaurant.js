import React, {useState} from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./menuCard";
import Navbar from "./Navbar";

const uniqueList = [...new Set(
    Menu.map((curElem) => {
        return curElem.category;
    })
),
"All",
];
console.log('🧑', uniqueList)
const Restaurant = () => {
    const [menuData,setMenuData] = useState(Menu)
    const [menuList,setMenuList] = useState(uniqueList)

    const filterItem = (category) => {
        
        if (category === "All" ) {
            setMenuData(Menu)
            return;  
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList)
    };
  return (
    <>
    <Navbar filterItemProp={filterItem} menuListProp={menuList} />

    <MenuCard menuProp={menuData} />
    </>
  );
};

export default Restaurant;
