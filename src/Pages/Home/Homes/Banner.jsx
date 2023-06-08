
import banner from '../../../assets/healthy-eating-ingredients-1296x728-header.webp'

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 py-8 lg:py-16">
      <div className="lg:w-1/2">
        <img className="w-full md:h-[400px]" src={banner} alt="Weight Loss" />
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Weight Loss</h2>
        <p className="text-lg lg:text-xl mb-6">
          Weight loss is a journey towards achieving a healthier body and lifestyle. It involves making sustainable changes to your diet, increasing physical activity, and adopting healthier habits. By maintaining a calorie deficit, your body starts utilizing stored fat as an energy source, resulting in weight loss.
        </p>
        <p className="text-lg lg:text-xl mb-6">
          Along with shedding pounds, weight loss offers numerous benefits, including improved cardiovascular health, reduced risk of chronic diseases, increased energy levels, and enhanced self-confidence. Its important to approach weight loss in a balanced and holistic manner, focusing on both physical and mental well-being.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          See More
        </button>
      </div>
    </div>
  );
};

export default Banner;

