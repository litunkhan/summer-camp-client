
import {Link, Outlet} from 'react-router-dom'
import useAdmin from './Hook/useAdmin';
import useInstructor from './Hook/useInstactor';
import { Fade } from 'react-awesome-reveal';

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
                   <Fade cascade damping={0.1}>
                      <div className='flex gap-4'>
                    <Link to={'alluser'}>
                         manage-users
                    </Link>
                    <Link to={'classes'}>
                         manage-classes
                    </Link>
                </div>
                   </Fade>
                )}
                {
                    instactor&&(
                         <Fade cascade damping={0.1}>
                        <div className='flex gap-4'>
                    <Link to={'addclass'}>
                         Add class
                    </Link>
                    <Link to={'myclass'}>
                         my class
                    </Link>
                       </div>
                       </Fade>
                    )
                }
                {
                    !admin && !instactor&&(
                         <Fade cascade damping={0.1}>
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
                    </Fade>
                    )
                }
                <Outlet></Outlet>
                </>
            
           }
        </>
    );
};

export default Dashboard;