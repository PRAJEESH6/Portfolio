import './Angular.css';
import { Link } from 'react-router-dom';

function Angular(){
    return(
        <>
        <h1>Angular</h1>
        <Link to='/Service' className='btn btn-dark'>See All Projects</Link>
        </>
    )
}
export default Angular;