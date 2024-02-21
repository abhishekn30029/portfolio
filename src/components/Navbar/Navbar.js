import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import download from '../../assets/download.png'
import menu from '../../assets/menu.png'
function Navbar() {
    let menuref=useRef()
    let burg=useRef()
    const [ShowMenu,setMenu]=useState(false);
    const onButtonClick = () => {
        const pdfUrl = "Abhinewresume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "AbhishekNResume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setMenu(false)
    };
    useEffect(()=>{
        let handler=(e)=>{
            if(!menuref.current.contains(e.target) && !burg.current.contains(e.target) ){
            setMenu(false)
        }
        };
        document.addEventListener("mousedown",handler)
        return()=>{
            document.removeEventListener("mousedown",handler);
        }
    });
  return (
    <nav className="Navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="DesktopMenu">
            <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500}className="DesktopMenuListItem">Home</Link>
            <Link activeClass='active' to='About' spy={true} smooth={true} offset={-100} duration={500}className="DesktopMenuListItem">About</Link>
            <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-100} duration={500}className="DesktopMenuListItem">Projects</Link>
        </div>
        <div className="NavButtons">
            <button className='Navcontactbtn' onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contact} alt="contact" className='DesktopMenuImg'/>
                Contact Me
                
            </button>
            <button className='NavResumebtn' onClick={onButtonClick}>
                <img src={download} alt="download" className='DesktopMenuImg'/>
                    Resume 
            </button>
        </div>
        <img src={menu} alt='hamburger' className='mobmenu'  onClick={()=>{setMenu(!ShowMenu)}} ref={burg}/>
        <div className="mobilenav" style={{display:ShowMenu?'flex':'none'}} ref={menuref}>
            <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500}className="ListItem" onClick={()=>{setMenu(false)}}>Home</Link>
            <Link activeClass='active' to='About' spy={true} smooth={true} offset={-100} duration={500}className="ListItem" onClick={()=>{setMenu(false)}}>About</Link>
            <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-100} duration={500}className="ListItem" onClick={()=>{setMenu(false)}}>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}className="ListItem" onClick={()=>{setMenu(false)}}>ContactMe</Link>
            <Link className="ListItem" onClick={onButtonClick} style={{display:'flex',alignItems:'center',marginLeft:'0'}}><img style={{margin:'0',marginRight:'10px'}}src={download} alt="download" className='DesktopMenuImg'/>Resume </Link>
            
        </div>
    </nav>
  )
}

export default Navbar
