import './Javascript.css';
import { Link } from 'react-router-dom';

function Javascript(){
    return(
        <>
        <h1>Javacript</h1>
        <Link to='/Service' className='btn btn-dark'>See All Projects</Link>
        </>
    )
}
export default Javascript;