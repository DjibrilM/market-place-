 import classes from "../../../styling/pages/Home/HomeProductContainer.module.css"
 import HomeSearchBar from "../HomeSearchBar/HomeSearchBar"
 import HomeCategories from "../HomeCategories/HomeCategories"

const HommeProductComponent = ()=>{
    return (
        <section className={classes.mainContainer}>
          <HomeSearchBar />
          <HomeCategories />
        </section>
    )
}


export default HommeProductComponent