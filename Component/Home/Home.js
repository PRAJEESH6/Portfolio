import './Home.css'
import {Link} from "react-router-dom";
import React from "react";
import pic from '../imgs/pic.png.png';

 
function Home(){
    return(
        <>
        <div className='container-fluid'>
          <div className='row'>

            <div className='col-5'>
               <div id='full'>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" height={650} width={650} id='blob'>
  <path fill="#FA4D56"  d="M49.2,-24.9C63.2,-4.1,73.7,22.2,64.9,40.7C56.1,59.2,28,69.8,-0.3,69.9C-28.6,70.1,-57.1,59.8,-69.4,39.3C-81.7,18.8,-77.7,-11.9,-63.5,-32.9C-49.2,-53.8,-24.6,-65.1,-3.5,-63.1C17.6,-61,35.2,-45.8,49.2,-24.9Z" transform="translate(100 100)" />
</svg>
<img src={pic} id='profile'></img>
                    </div>
                    </div>

{/* **************************** */}

                    <div className='col-7'>
                         <div id='name'>PRAJEESH...</div>
                     <h1 className='p-5' id='head'>WEB DEVELOPER..</h1>
                    <p id='got' className='p-3 '>I am a skilled and enthusiastic web developer with a strong passion for creating dynamic and visually appealing websites. I'm doing many projects in front-end and back-end development, I have honed my technical skills and gained extensive knowledge in various programming languages, frameworks, and tools. My ability to translate design concepts into fully functional websites, coupled with my attention to detail and commitment to clean code, ensures that I deliver high-quality results.</p>
                   <p>I thrive on challenges and enjoy working on diverse projects that push the boundaries of creativity. Whether it's building a website for a startup or redesigning an established brand's online presence, I'm always excited to take on new projects and collaborate with forward-thinking clients.</p>
                    <Link to='/talk' className='btn btn-warning mx-3' id='btn1'>'Let's Talk</Link>

                    <Link to='/project' className='btn btn-danger' id='btn_2'>My Work</Link>
</div>

{/* **************************** */}
                
</div>
            
            </div>
        </>
    )
}

export default Home;