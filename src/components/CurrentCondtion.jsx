import { useSelector } from 'react-redux';
import { WiDegrees, WiHumidity } from 'react-icons/wi';
import { GiWindTurbine } from 'react-icons/gi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiFillCloud } from 'react-icons/ai';

const CurrentCondtion = () => {
  const { conditions, forecast } = useSelector((state) => state.weather);
  return (
    <div className="text-white p-3">
      <h1 className="text-center text-xl mb-3 flex justify-center items-center">
        Current Conditions
        <AiFillCloud className="inline text-white font-bold ml-2" />
      </h1>
      <div className="flex flex-col">
        <h2 className="text-center flex just text-white">
          <span className="">Last Updated:</span>
          <span className="font-bold">
            {conditions && conditions.last_updated && (
              <p>
                {conditions.last_updated}
              </p>
            )}
          </span>
        </h2>
        <div className="flex justify-between gap-5">
          <ul className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-4">
            <li className="flex">
              Temperature:
              {' '}
              <span>
                {conditions && conditions.temp_c && <p>{conditions.temp_c}</p>}
              </span>
              <WiDegrees className="text-2xl text-white" />
            </li>

            <li className="flex">
              Humidity:
              {' '}
              {conditions && conditions.humidity && (
                <p>{conditions.humidity}</p>
              )}
              <WiHumidity />
            </li>
            <li className="flex">
              Cloud:
              {' '}
              {conditions && conditions.cloud && <p>{conditions.cloud}</p>}
              <HiOutlineLocationMarker />
            </li>
            <li className="flex">
              Wind:
              {' '}
              {conditions && conditions.wind_mph && (
                <p>{conditions.wind_mph}</p>
              )}

              mph
              <GiWindTurbine />
            </li>
          </ul>
          <div className="flex flex-col justify-center items-center">
            {conditions && conditions.icon && (
              <img src={conditions.icon} alt="icon" />
            )}
            <span>
              {conditions && conditions.text && <p>{conditions.text}</p>}
            </span>
            <hr />
            <span className="flex flex-col text-center">
              <span>Predicts</span>
              <span>
                {forecast && forecast.length}
                Days Ahead
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentCondtion;
