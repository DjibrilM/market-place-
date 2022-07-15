 import classes from "../../../styling/pages/Home/HomeSearchBar.module.css"

const HomeSearchBar = ()=>{

    return (
        <div className={classes.searchContainer}>
            <i class="fi fi-rr-search"></i>
           <input type={'search'} placeholder="Search Product..."></input>
        </div>
    )
}

export default HomeSearchBar