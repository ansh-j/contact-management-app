import React from 'react'
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useQuery } from 'react-query'
import { Icon } from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'


const Map = () => {

    const getData = async () => {

        // Fetching Country Specific data of cases
        // Return an array of objects
        const res = await fetch('https://disease.sh/v3/covid-19/countries');
        return res.json();
    }

    const { data: fetchData, isLoading } = useQuery({
        queryFn: () => getData(),
        queryKey: ["CountryData"]
    });
    
    

    return (

        <MapContainer className='h-full w-full ' center={[20, 77]} zoom={4} scrollWheelZoom={true}>

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            <MarkerClusterGroup
            chunkdedLoading
            // iconCreateFunction={createCustomClustorIcon}
            >
                {!isLoading &&

                    fetchData?.map((item: any) => (
                        <Marker key={item.country} position={[item.countryInfo.lat, item.countryInfo.long]}
                            icon={new Icon({ iconUrl: item.countryInfo.flag, iconSize: [20, 20] })}
                        >
                            <Popup>
                                {item.country} <br />
                                Active Cases: {item.active} <br />
                                Reacovered Cases: {item.recovered} <br />
                                Deaths: {item.deaths}
                            </Popup>
                        </Marker>
                    ))
                }
            </MarkerClusterGroup>
        </MapContainer>

    )
}

export default Map