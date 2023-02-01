import HeaderCard from "./HeaderCard"

import {AiFillGithub, AiOutlineLinkedin} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
const Home = () => {
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-evenly",
            alignItems:"center"
        }}>
        <HeaderCard/>
        <div style={{
            marginTop:"2rem",
            width:"100%",
            position:"relative",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            // alignItems:"center"
        }}>
            <a target="_blank" href="https://github.com/ManuBeni">
                <AiFillGithub size={70}/>
            </a>  
            
            <a target="_blank" href="https://www.linkedin.com/in/manuel--benitez/">
                <AiOutlineLinkedin size={70}/>
            </a> 
            
            <a target="_blank" href="mailto:manubeni0498@gmail.com">
                <SiGmail size={70}/>
            </a> 
        </div>
        
        </div>
    )
}

export default Home
