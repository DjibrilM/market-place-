
import clesses from "../../../styling/pages/Home/home.module.css"
import HomeDetailMenu from "../../InnerComponents/HomeDetailMenu/HomeDetailMenu"
import HommeProductComponent from "../../InnerComponents/homeProductContainer/homeProductContainer"
import LeftMenu from "../../UI/LeftMenu/LeftMenu"



const Home = ()=>{
    return(
     <main className={clesses.Home} >
         <LeftMenu />
         <HommeProductComponent />
         <HomeDetailMenu />
    </main>
    )
}

export default Home