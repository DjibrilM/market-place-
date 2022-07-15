import { NavLink } from "react-router-dom"
import classes from "../../../styling/pages/Home/HomeCategories.module.css"

const HomeCategories = ()=>{
    return (
    <div className={classes.categories}>
        <h3>Categories</h3>
        <div className={classes.CategoriesContainer}>
           <NavLink to={'/home'} >All</NavLink>
           <NavLink to={'women'} > <i class="fi fi-rr-screen"></i> <span>Elctronic</span> </NavLink>
           <NavLink to={'women'} > <i class="fi fi-rr-child-head"></i> <span>children</span> </NavLink>
           <NavLink to={'women'} > <i class="fi fi-rs-home"></i> <span>Houses</span> </NavLink>
           <NavLink to={'women'} > <i class="fi fi-rs-paw"></i><span>Animal</span> </NavLink>
           <NavLink to={'women'} > <i class="fi fi-rs-microphone-alt"></i><span>Music</span> </NavLink>
           <NavLink to={'women'} > <i class="fi fi-rr-shopping-bag-add"></i><span>Other</span> </NavLink>
        </div>
    </div>
    )
}

export default HomeCategories 
