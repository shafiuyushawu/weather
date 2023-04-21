import { useSelector } from 'react-redux';
import { TbTemperatureCelsius, TbCloudSnow } from 'react-icons/tb';
import { WiHumidity } from 'react-icons/wi';
import { BsFillCloudLightningRainFill } from 'react-icons/bs';
import { IoArrowBackCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const WeatherDetails = () => {
  const {
    icon, text, maxtemp, mintemp, avgtemp, avghumidity, rain, snow,
  } = useSelector((state) => state.weather);

  return (
    <section className="bg-[#4b7bec] h-screen">
      <div className="px-3 bg-gradient-to-tl from-green-900 to-blue-700 h-52 w-full  relative">
        <img src={icon} alt="icon" className="w-32 " />
        <div className="">
          <h2 className="text-white font-bold text-4xl text-right ">{text}</h2>
        </div>
      </div>
      <ul className="py-5 text-white ">
        <li className="flex justify-between items-center  p-4 text-xl ">
          <span>Maximum Temperature:</span>
          <span className="font-bold flex">
            {maxtemp}
            {' '}
            <TbTemperatureCelsius className="text-xl ml-1" />
            {' '}
          </span>
        </li>
        <li className="flex justify-between p-4  items-center text-xl bg-gradient-to-bl from-[#6c70c5] to-blue-700">
          <span>Minumum Temperature:</span>
          <span className="text-white font-bold flex">
            {mintemp}
            {' '}
            <TbTemperatureCelsius className="text-xl" />
            {' '}
          </span>
        </li>
        <li className="flex justify-between p-4  items-center text-xl">
          <span>Average Temperature:</span>
          <span className="text-white font-bold flex">
            {avgtemp}
            {' '}
            <TbTemperatureCelsius className="text-xl" />
            {' '}
          </span>
        </li>
        <li className="flex justify-between p-4  items-center text-xl bg-gradient-to-bl from-[#6c70c5] to-blue-700">
          <span>Average Humidity:</span>
          <span className="text-white font-bold flex">
            {avghumidity}
            {' '}
            <WiHumidity className="text-xl" />
            {' '}
          </span>
        </li>
        <li className="flex justify-between p-4 items-center text-xl ">
          <span>Daily Chance of Rain:</span>
          <span className="text-white font-bold flex">
            {rain}
            {' '}
            <BsFillCloudLightningRainFill className="text-xl" />
            {' '}
          </span>
        </li>
        <li className="flex justify-between p-4  items-center   text-xl bg-gradient-to-bl from-[#6c70c5] to-blue-700">
          <span>Daily Chance of Snow:</span>
          <span className="text-white font-bold flex">
            {snow}
            {' '}
            <TbCloudSnow className="text-xl" />
            {' '}
          </span>
        </li>
      </ul>

      <Link
        to="/"
        className="btn btn-ghost normal-case flex justify-center text-xl p-2 text-white"
      >
        <IoArrowBackCircle className="inline text-2xl mr-4" />
        Back
      </Link>
    </section>
  );
};
export default WeatherDetails;
