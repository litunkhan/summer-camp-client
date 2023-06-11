
import {Link, Outlet} from 'react-router-dom'
import useAdmin from './Hook/useAdmin';
import useInstructor from './Hook/useInstactor';
const Dashboard = () => {
    // const Admin = false
    // const instactor = true
    const [admin] = useAdmin()
    const [instactor] = useInstructor()
    return (
        <>
           {
           
                <>
                {admin&&(
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
                {
                    !admin && !instactor&&(
                        <div className='flex gap-4'>
                        <Link to={'selectedclass'}>
                             Selected-class
                        </Link>
                        <Link to={'enrollclass'}>
                             Enroll-Class
                        </Link>
                        <Link to={'payment'}>
                             Payment
                        </Link>
                        <Link to={'paymenthistory'}>
                             Payment-history
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