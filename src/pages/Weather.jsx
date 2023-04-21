import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoSearch } from 'react-icons/go';
import Loading from '../components/Loading';
import CurrentCondtion from '../components/CurrentCondtion';
import { fetchWeatherCondtions } from '../redux/weather/weatherSlice';
import backImg from '../assets/AverageTmpMapRussiaDec.png';
import DailyForecast from '../components/DailyForecast';

const Weather = () => {
  const [submit, setSubmit] = useState('');
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const {
    location, forecast, isLoading, error,
  } = useSelector(
    (state) => state.weather,
  );
  useEffect(() => {
    if (search) {
      dispatch(fetchWeatherCondtions(search));
    } else {
      dispatch(fetchWeatherCondtions('Accra'));
    }
  }, [dispatch, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submit !== 0) {
      setSearch(submit);
      setSubmit('');
    }
  };

  if (isLoading) {
    return (
      <div className="flex  bg-[#4b7bec] justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="h-screen bg-[#4b7bec]">
      <section>
        <div className="bg-gradient-to-tl from-green-900 to-blue-700 h-52 w-full  relative">
          <img
            src={backImg}
            alt="back"
            className="w-full h-full object-cover absolute mix-blend-overlay opacity-40"
          />
          <CurrentCondtion />
        </div>
        <div className="bg-gradient-to-tr from-blue-800 to-[#6c70c5] flex flex-col justify-between items-center md:flex-row">
          <form onSubmit={handleSubmit} className="flex flex-row w-full">
            <input
              type="text"
              placeholder="Search by Country | City"
              value={submit}
              onChange={(e) => setSubmit(e.target.value)}
              className="input bg-[#4b7bec] border-none opacity-80 input-sm md:input-xl w-full text-[15px] text-white rounded-r-none placeholder:text-[15px] placeholder:text-white"
            />
            <button
              type="submit"
              id="submit"
              className="btn border-none  rounded-l-none btn-sm bg-gradient-to-tr from-blue-800 to-[#6c70c5]"
            >
              <GoSearch className="text-white font-extrabold text-2xl " />
              .
            </button>
          </form>
        </div>
      </section>
      <section className="" />
      <section className="text-white">
        <h1 className="text-xl bg-gradient-to-tr from-blue-800 to-[#6c70c5] text-white flex justify-center items-center">
          <ul className="flex gap-4 justify-center text-[16px]">
            <li className="text-white  text-right md:text-2XL">
              {location && location.region && <p>{location.region}</p>}
            </li>
            |
            <li className="text-white text-[16px] md:text-2xl">
              {location && location.country && <p>{location.country}</p>}
            </li>
            |
            <li className="text-white align-bottom text-[16px] md:text-2xl">
              {location && location.continent && <p>{location.continent}</p>}
            </li>
          </ul>
        </h1>
        <ul className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-2 p-2 bg-[#4b7bec]
        [&>*:nth-child(2)]:bg-gradient-to-bl [&>*:nth-child(2)]:from-[#6c70c5] [&>*:nth-child(2)]:to-blue-700
        [&>*:nth-child(3)]:bg-gradient-to-bl [&>*:nth-child(3)]:from-[#6c70c5] [&>*:nth-child(3)]:to-blue-700
        [&>*:nth-child(6)]:bg-gradient-to-bl [&>*:nth-child(6)]:from-[#6c70c5] [&>*:nth-child(6)]:to-blue-700
        [&>*:nth-child(7)]:bg-gradient-to-bl [&>*:nth-child(7)]:from-[#6c70c5] [&>*:nth-child(7)]:to-blue-700
        [&>*:nth-child(10)]:bg-gradient-to-bl [&>*:nth-child(10)]:from-[#6c70c5] [&>*:nth-child(10)]:to-blue-700
        "
        >
          {forecast
            && forecast.map((fcast) => (
              <DailyForecast key={fcast.id} fcast={fcast} />
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Weather;
