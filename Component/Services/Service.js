import './Service.css'
import { Link } from 'react-router-dom';

function Service(){
    return(
        <>

     <div className='container'>
        <div className='card' id='noniple'>
            <Link to='/Javascript'  className='card-title'>JAVASCRIPT</Link>
        </div>

        <div className='card' id='noniple'>
            <Link to='/React' className='card-title'>REACT</Link>
        </div>

        <div className='card' id='noniple'>
            <Link to='/Angular' className='card-title'>ANGULAR</Link>
        </div>

        <div className='card' id='noniple'>
            <Link to='/Php' className='card-title'>PHP & MYSQL</Link>
        </div>

        <div className='card' id='noniple'>
            <Link to='/Java' className='card-title'>JAVA</Link>
        </div>
     </div>









       <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <div className='card'>
                    <img className='card-img-top' src='' />
                    <div className='card-body'>
                        <div className='card-title'>tTITLE : BEACH ROOM</div>
                        <div className='list-group-item'>DESCRIPTION : BEACH ROOM is the amazing project in this worls</div>
                        <div className='card-title'>STACK : BEACH ROOM</div>
                        <Link to='/Project_details' className='btn btn-dark'>SHOW DETAILS</Link>
                    </div>
                </div>
            </div>
        </div>
       </div>
        </>
    )
}
export default Service;