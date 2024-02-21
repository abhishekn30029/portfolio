import React from 'react'
import './Intro.css'
import bg from '../../assets/bg.png'
import { Link } from 'react-scroll';
import hireme from '../../assets/hireme.png'
function Intro(){
  return (
    <section className='Intro' id="Intro">
        <div className="content">
            <span className="hello">Hello,<br/></span>
            <span className="title">I'm <span className='Name'>Abhishek N</span><br/> Web developer</span>
            <p className="para">As a proficient web developer,<br/>I specialize in transforming conceptual ideas into <br/>fully functional and aesthetically pleasing websites.</p>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='hbtn'><img src={hireme} alt="" className="himg" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="bg" className="bg" />
      
    </section>
  )
}

export default Intro;