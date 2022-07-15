import { NavLink } from "react-router-dom"
import classes from "../../../styling/pages/Home/HomeDetailMenu.module.css"
import svgImg from "../../../images/undraw_no_data_re_kwbl.svg"


const HomeDetailMenu = ()=>{
    return (
    <div className={classes.DetailMenu}>
        <h3>Details</h3>
        <div className={classes.noSelectedItem}>
           <img src={svgImg} />
           <h2>No Product Selected Yet!</h2>
        </div>
        
    </div>
    )
}

export default HomeDetailMenu 
