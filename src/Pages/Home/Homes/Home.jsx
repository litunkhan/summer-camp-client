
import Banner from './Banner';
import HomeInstractor from './HomeInstractor';
import Slider from './Slider'
const Home = () => {
    return (
        <div>
           
          <div className='my-12'>
          <Slider></Slider>
          </div>
           <Banner></Banner>
           <HomeInstractor></HomeInstractor>
        </div>
    );
};

export default Home;