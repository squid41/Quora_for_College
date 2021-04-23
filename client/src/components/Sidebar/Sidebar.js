import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { FaBars,FaHome, FaBell, FaHandPointDown,FaPlusCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import RefractPost from '../RefractPost.js'
function Sidebar() {
   
    
    return (
        <Aside>
            <div className="main">

                <div className="major-domains">
                    <div className="hell glow">
                    <h2>Major Domains <FaHandPointDown/></h2>
                    <hr/>
                    </div>
                    <div>
                <Link to={{pathname:'/RefractPost',search:'Web Devlopment',key:'Web Devlopment'
                }}>
                <button type='button' className='btn glow-on-hover '  value="Web Devlopment">Web Devlopment</button></Link>
                </div>
                <div>
                               <Link to={{pathname:'/RefractPost',aboutprops:'App Devlopment' ,search:'App Devlopment'
                }}>
                <button type='button' className='btn glow-on-hover'value="App Devlopment" >App Devlopment</button>
                </Link>
                </div>
                <div>
                        <Link to={{pathname:'/RefractPost',aboutprops:'Compeptetive Proramming'
                }}>
                 <button type='button' className='btn glow-on-hover 'value="Competetive Programming ">Competetive Programming </button></Link>
                </div>
                  <div>
                                       <Link to={{pathname:'/RefractPost',aboutprops:'Data Science'
                }}>
                <button type='button' className='btn glow-on-hover 'value="Data Science">Data Science</button></Link></div>
                <div>
                                     <Link to={{pathname:'/RefractPost',aboutprops:'Programming Languages'
                }}>
                <button type='button' className='btn glow-on-hover'value="Programming Languages">Programming Languages</button></Link>
                </div>
                <div>
                                    <Link to={{pathname:'/RefractPost',aboutprops:'Devlopment Tools'
                }}>
                 <button type='button' className='btn glow-on-hover 'value="Development Tools">Development Tools</button></Link>
                </div>
                 
                

                {/* <div className='btn1' >
            
                    <Link to='/Modall' className="link">
                    <FaPlusCircle/>
                    <p> Add new domains</p>
                    </Link>
                </div> */}

                </div>
                <div className="major-domains">
                    <div className="hell glow">
                    <h2>ROADMAPS<FaHandPointDown/></h2>
                    <hr/>
                    </div>
                    <div>
                                         <Link to={{pathname:'/RefractPost',aboutprops:'1st Year'
                }}>
                <button type='button' className='btn glow-on-hover 'value="1st Year">1st Year</button></Link></div>
                <div>
                                     <Link to={{pathname:'/RefractPost',aboutprops:'2nd Year'
                }}>
                <button type='button' className='btn glow-on-hover'value="2nd Year">2nd Year</button></Link>
                </div>
                 {/* <div className='btn1' >
                  <Link to='/Modall' className="link">
                    <FaPlusCircle/>
                    <p> Add new roadmaps</p>
                    </Link>
                </div> */}
               </div>
            </div>
        </Aside>
    )
}
const Aside = styled.section`

.main{
position:sticky;
background:#04213d

;
//margin-top:3rem;

margin-left: -2rem;;
width:15vw;
height:100vh;
display:flex;
flex-direction:column;
border-radius:1rem;
}

 display:flex;
 flex-direction:column;
button {
    width:90%;
    display: block;
    margin-top: 1.25em ;
        margin-bottom: 1.25em ;
 margin-left: 1.25em ;
        margin-right: 1.25em ;

    padding: 0.25rem 0;
    text-transform: capitalize;
    background: #7bdcb5
;
    border-radius: 0.5rem;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
border-radius:1rem;
//margin:auto;
     border:none;
     cursor:pointer;
 }
 
 .glow-on-hover {
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
    
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
.hell{
    color :white;
    // display:flex;
    // justify-content:center;
    // align-items:center;
    text-align:center;
}
.hell:hover{
    color:#7bdcb5;

    cursor:none;}
    

}
.btn1{
    color:#008b02;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:1.2rem;
}
.link{
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:white;
}

;
    

  
`
export default Sidebar
