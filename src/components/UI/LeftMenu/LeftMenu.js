import { useRef } from "react"
import classes from "../../../styling/UI/LeftMenu/LeftMenu.module.css"
import activeCLasses from "../../../styling/UI/LeftMenu/activeClass.css"
import logoImage from '../../../images/shopping-cart.png'
import { NavLink } from "react-router-dom"



const LeftMenu = ()=>{

const activeIndicatorRef = useRef("")

    const adjustIndicator = (link)=>{
       switch (link) {
        case 'hotLeads' :
        activeIndicatorRef.current.style.top = '5px'
            break;
        case 'market' :
            activeIndicatorRef.current.style.top = '80px'
                break;   
        case 'messages' :
            activeIndicatorRef.current.style.top = '150px'
                break; 
        case 'bookmark' :
            activeIndicatorRef.current.style.top = '210px'
                break;        
        default:
            break;
       }
    }

    return(
        <div className={classes.LeftMenu}>
            <nav className={classes.leftNav}>

                <div className={classes.logoContaner}> <img src={logoImage} /> </div>

                <ul className="leftNavUl">
                    <span className={classes.activeIndicator} ref={activeIndicatorRef}></span>

                    <NavLink to={'/home'} onClick={()=>adjustIndicator('hotLeads')}>  <li> <i class="fi fi-rs-flame"></i> </li> </NavLink>

                    <NavLink to={'/'} onClick={()=>adjustIndicator('market')}><li> <i class="fi fi-rr-apps"></i></li></NavLink>

                    <NavLink to={'/'} onClick={()=>adjustIndicator('messages')}><li><i class="fi fi-rr-comment"></i></li></NavLink>

                    <NavLink to={'/'} onClick={()=>adjustIndicator('bookmark')}><li> <i class="fi fi-rr-bell"></i> </li></NavLink>
   
                </ul>

            </nav>
            <div className={classes.settingBtn}>
                <NavLink to={"/"}><i class="fi fi-rs-filter"></i></NavLink>
            </div>
        </div>    
    )
}

export default LeftMenu