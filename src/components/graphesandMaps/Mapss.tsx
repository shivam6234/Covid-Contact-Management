import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CovidData } from '../types/CovidData';

const fetchCovidData = async (): Promise<CovidData[]> => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Mapss: React.FC = () => {
  const { data, error, isLoading } = useQuery<CovidData[], Error>({
    queryKey: ['covidData'],
    queryFn: fetchCovidData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      {/* Large Screen */}
      <div className='w-full lg:flex md:hidden hidden  flex-col bg-yellow-100 items-center' style={{height:"70vh"}}>
        <div>
          <h1 className="text-3xl underline font-bold mb-3">Covid Map</h1>
        </div>
        <div className='mt-4' style={{ width: "80%", height: "100%" }}>
          <MapContainer center={[2, 0]} zoom={3} className='' style={{ height: "100%" }}>
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
              attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
            />
            {data?.map((country) => {
              const { countryInfo, country: countryName, active, recovered, deaths } = country;
              if (!countryInfo || !countryInfo.lat || !countryInfo.long) return null;
              return (
                <Marker
                  key={countryInfo._id}
                  position={[countryInfo.lat, countryInfo.long]}
                  icon={L.divIcon({
                    html: `<img src="${countryInfo.flag}" alt="${countryName}" style="width: 32px; height: 20px; border-radius: 3px;" />`,
                    iconSize: [32, 20],
                    iconAnchor: [16, 10],
                  })}
                >
                  <Popup>
                    <div>
                      <h2 className='text-center'>{countryName}</h2>
                      <img src={countryInfo.flag} alt={`${countryName}`} className="w-16 h-auto mx-auto my-2" />
                      <h2 className='text-center text-red-600'>Active Cases: {active}</h2>
                      <h2 className='text-center text-green-600'>Recovered: {recovered}</h2>
                      <h2 className='text-center text-red-600'>Deaths: {deaths}</h2>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </div>
      {/* Medium Screen */}
      <div className='w-full  lg:hidden md:flex hidden  items-center flex-col bg-yellow-100'style={{height:"71vh"}}>
        <div>
          <h1 className="text-3xl underline font-bold mb-3">Covid Map</h1>
        </div>
        <div className='mt-10' style={{ width: "80%", height: "100%" }}>
          <MapContainer center={[2, 0]} zoom={3} className='' style={{ height: "100%" }}>
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
              attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
            />
            {data?.map((country) => {
              const { countryInfo, country: countryName, active, recovered, deaths } = country;
              if (!countryInfo || !countryInfo.lat || !countryInfo.long) return null;
              return (
                <Marker
                  key={countryInfo._id}
                  position={[countryInfo.lat, countryInfo.long]}
                  icon={L.divIcon({
                    html: `<img src="${countryInfo.flag}" alt="${countryName}" style="width: 32px; height: 20px; border-radius: 3px;" />`,
                    iconSize: [32, 20],
                    iconAnchor: [16, 10],
                  })}
                >
                  <Popup>
                    <div>
                      <h2 className='text-center'>{countryName}</h2>
                      <img src={countryInfo.flag} alt={`${countryName}`} className="w-16 h-auto mb-2 mx-auto" />
                      <h2 className='text-center text-red-600'>Active Cases: {active}</h2>
                      <h2 className='text-center text-green-600'>Recovered: {recovered}</h2>
                      <h2 className='text-center text-red-600'>Deaths: {deaths}</h2>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </div>
      {/* Small Screen */}
      <div className='w-full  lg:hidden md:hidden flex flex-col bg-yellow-100' style={{height:"80vh"}}>
        <div>
          <h1 className="text-2xl underline font-bold mb-3 text-center">Covid Map</h1>
        </div>
        <div className='px-3' style={{ width: "100%", height: "90%" }}>
          <MapContainer center={[2, 0]} zoom={3} className='' style={{ height: "100%" }}>
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
              attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
            />
            {data?.map((country) => {
              const { countryInfo, country: countryName, active, recovered, deaths } = country;
              if (!countryInfo || !countryInfo.lat || !countryInfo.long) return null;
              return (
                <Marker
                  key={countryInfo._id}
                  position={[countryInfo.lat, countryInfo.long]}
                  icon={L.divIcon({
                    html: `<img src="${countryInfo.flag}" alt="${countryName}" style="width: 25px; height: 15px; border-radius: 1px;" />`,
                    iconSize: [25, 15],
                    iconAnchor: [12.5, 7.5],
                  })}
                >
                  <Popup>
                    <div className="w-50">
                      <h2 className='text-center'>{countryName}</h2>
                      <img src={countryInfo.flag} alt={`${countryName}`} className="w-8 mb-1 mx-auto" />
                      <h2 className='text-center text-red-600'>Active Cases: {active}</h2>
                      <h2 className='text-center text-green-600'>Recovered: {recovered}</h2>
                      <h2 className='text-center text-red-600'>Deaths: {deaths}</h2>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default Mapss;
