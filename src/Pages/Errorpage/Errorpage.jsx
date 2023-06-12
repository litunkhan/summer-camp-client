
import { Link } from 'react-router-dom';
import notFound from './images.jpg'
const Errorpage = () => {
    return (
        <div>
        <h1>Page Not Found</h1>
        <img className='w-full' src={notFound} alt="404 Not Found" />
        <p>Oops! The page youre looking for does not exist.</p>
        <Link to="/">Go Back Home</Link>
      </div>
    );
};

export default Errorpage;