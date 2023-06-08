
import {Link, Outlet} from 'react-router-dom'
const Dashboard = () => {
    const Admin = false
    const instactor = true
    return (
        <>
           {
           
                <>
                {Admin&&(
                    <div className='flex gap-4'>
                    <Link to={'alluser'}>
                         manage-users
                    </Link>
                    <Link to={'classes'}>
                         manage-classes
                    </Link>
                </div>
                )}
                {
                    instactor&&(
                        <div className='flex gap-4'>
                    <Link to={'addclass'}>
                         Add class
                    </Link>
                    <Link to={'myclass'}>
                         my class
                    </Link>
                </div>
                    )
                }
                <Outlet></Outlet>
                </>
            
           }
        </>
    );
};

export default Dashboard;