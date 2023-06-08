
import {Link, Outlet} from 'react-router-dom'
const Dashboard = () => {
    const Admin = true 
    return (
        <>
           {
            Admin&&(
                <>
                <div className='flex gap-4'>
                    <Link to={'alluser'}>
                         manage-users
                    </Link>
                    <Link to={'classes'}>
                         manage-classes
                    </Link>
                </div>
                <Outlet></Outlet>
                </>
            )
           }
        </>
    );
};

export default Dashboard;