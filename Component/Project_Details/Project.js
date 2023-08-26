import './Project.css'
import { Link } from 'react-router-dom';

function Project(){
    return(
        <>
        
        <h1>hello i am from project</h1>
        <Link to='/Service' className='btn btn-dark'>SHOW DETAILS</Link>
        </>
    )
}
export default Project;