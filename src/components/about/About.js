import React from 'react'
import './About.css'
import reactlogo from '../../assets/REactjslogo.png'
import js from '../../assets/jslogo.png'
import html from '../../assets/HTMLlogo.png'
import css from '../../assets/CSSlogo.png'
import python from '../../assets/pythonlogo.png'
import django from '../../assets/djangologo.png'
import mysql from '../../assets/mysqllogo.png'
import mangodb from '../../assets/mongodblogo.png'
function About(){
  return (
    <div className='About' id='About'>
        <h1 className='wido'>What I do</h1>
        <span className='Aboutpara'>As a proficient web developer, I specialize in transforming conceptual ideas into fully functional and aesthetically pleasing websites. My skill set encompasses a wide range of technologies and tools, allowing me to craft innovative and responsive web solutions that align with the unique visions and requirements of my clients.</span>
        <span className='hskills'>Hard<span className='skills'>SkillS</span></span>
        <div className="skillList">
            <div className="skillListItem">
            <h3 className="skillName">Python</h3>
                <div className="skillrate">
                
                <div  className='Hexagon'></div>
                <div  className='Hexagon' style={{left:'30px',}}></div>
                <div  className='Hexagon' style={{left:'60px',}}></div>
                <div  className='Hexagon' style={{left:'90px',}}></div>
                <div  className='Hexagon HexagonLight' style={{left:'120px',}}></div>
                
                </div>
            </div>
            <div className="skillListItem">
              <h3 className="skillName">React.js</h3>
                <div className="skillrate">
                
                <div  className='Hexagon'></div>
                <div  className='Hexagon' style={{left:'30px',}}></div>
                <div  className='Hexagon' style={{left:'60px',}}></div>
                <div  className='Hexagon HexagonLight' style={{left:'90px',}}></div>
                <div  className='Hexagon  HexagonLight' style={{left:'120px',}}></div>
                
                </div>
            </div>
            <div className="skillListItem">
            <h3 className="skillName">HTML</h3>
                <div className="skillrate">
                
                <div  className='Hexagon'></div>
                <div  className='Hexagon' style={{left:'30px',}}></div>
                <div  className='Hexagon' style={{left:'60px',}}></div>
                <div  className='Hexagon' style={{left:'90px'}}></div>
                <div  className='Hexagon HexagonLight' style={{left:'120px',}}></div>
                
                </div>
            </div>
            <div className="skillListItem">
              <h3 className="skillName">CSS</h3>
                <div className="skillrate">
                
                <div  className='Hexagon'></div>
                <div  className='Hexagon' style={{left:'30px',  }}></div>
                <div  className='Hexagon' style={{left:'60px',  }}></div>
                <div  className='Hexagon HexagonLight' style={{left:'90px',  }}></div>
                <div  className='Hexagon HexagonLight' style={{left:'120px',}}></div>                
                </div>
            </div>
            <div className="skillListItem">
              <h3 className="skillName">SQL</h3>
                <div className="skillrate">
                
                <div  className='Hexagon'></div>
                <div  className='Hexagon' style={{left:'30px',}}></div>
                <div  className='Hexagon' style={{left:'60px',}}></div>
                <div  className='Hexagon HexagonLight' style={{left:'90px',}}></div>
                <div  className='Hexagon HexagonLight' style={{left:'120px',}}></div>
                
                </div>
            </div>
            
            <div className="skillListItem">
              <h3 className="skillName">Django</h3>
                <div className="skillrate">
                
                <div  className='Hexagon'></div>
                <div  className='Hexagon' style={{left:'30px',}}></div>
                <div  className='Hexagon' style={{left:'60px',}}></div>
                <div  className='Hexagon HexagonLight' style={{left:'90px',}}></div>
                <div  className='Hexagon HexagonLight' style={{left:'120px',}}></div>
                
                </div>
            </div>
            
        </div>
        <div className="whatiuse">
          <h1 className='whatiusetitle'> What I Use</h1>
          <div className="techstack">
          <div className="frontend">
            <h2 className="techtitle">
              Front<span className='hco'>End</span>
            </h2>
            <div className="techstackimg">
            <img src={html} alt="Html" className="techimg" />
              <img src={css} alt="css" className="techimg" />
              <img src={js} alt="js" className="techimg" />
              <img src={reactlogo} alt="reactjs" className="techimg" />
            </div>

          </div>
          <div className="backend">
            <h2 className="techtitle">
              Back<span className='hco'>End</span>
            </h2>
            <div className="techstackimg">
              <img src={python} alt="python" className="techimg" />
              <img src={django} alt="django" className="techimg" />

            </div>
          </div>
          <div className="db">
            <h2 className="techtitle">
              Data<span className='hco'>Base</span>
            </h2>
            <div className="techstackimg">
              <img src={mysql} alt="mysql" className="techimg" />
              <img src={mangodb} alt="mangodb" className="techimg" />
              
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default About;
