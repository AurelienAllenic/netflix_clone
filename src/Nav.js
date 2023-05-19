import "./Nav.css"
import React, {useState, useEffect } from "react"

function Nav() {
    const [show, handleShow] = useState(false)

    const transitionNavBar = ()=> {
        if(window.scrollY > 100){
            handleShow(true);
        } else{
            handleShow(false);
        }
    }
    useEffect(()=> {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_contents">
            <img className='nav_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <img className='nav_avatar'src='https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png' alt='' />
        </div>
    </div>
  )
}

export default Nav