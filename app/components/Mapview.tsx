"use client"
import React, { useEffect, useRef, useMemo, useState } from 'react'
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { Dropdown } from 'antd';

import { Select, Spin } from 'antd';
import type { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';

export interface DebounceSelectProps<ValueType = any>
    extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
    fetchOptions: (search: string) => Promise<ValueType[]>;
    debounceTimeout?: number;
}

function DebounceSelect<
    ValueType extends { key?: string; label: React.ReactNode; value: string | number } = any,
>({ fetchOptions, debounceTimeout = 800, ...props }: DebounceSelectProps<ValueType>) {
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState<ValueType[]>([]);
    const fetchRef = useRef(0);

    const debounceFetcher = useMemo(() => {
        const loadOptions = (value: string) => {
            fetchRef.current += 1;
            const fetchId = fetchRef.current;
            setOptions([]);
            setFetching(true);

            fetchOptions(value).then((newOptions) => {
                if (fetchId !== fetchRef.current) {
                    // for fetch callback order
                    return;
                }

                setOptions(newOptions);
                setFetching(false);
            });
        };

        return debounce(loadOptions, debounceTimeout);
    }, [fetchOptions, debounceTimeout]);

    return (
        <Select
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
            options={options}
        />
    );
}

// Usage of DebounceSelect
interface UserValue {
    label: string;
    value: string;
}

async function fetchUserList(username: string): Promise<UserValue[]> {
    console.log('fetching user', username);

    return fetch('https://randomuser.me/api/?results=5')
        .then((response) => response.json())
        .then((body) =>
            body.results.map(
                (user: { name: { first: string; last: string }; login: { username: string } }) => ({
                    label: `${user.name.first} ${user.name.last}`,
                    value: user.login.username,
                }),
            ),
        );
}

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
export default function Mapview() {
    const mapContainer = useRef<any>(null);
    const map = useRef<mapboxgl.Map | any>(null);
    const [value, setValue] = useState<UserValue[]>([]);

    useEffect(() => {

        mapboxgl.accessToken = "pk.eyJ1IjoiY29kZWtyYWNrZXI2OSIsImEiOiJjbGJqN3pna3kwa2d3M3BvOXV2M2FsYnFkIn0.XPTeei5lsQGHVgvLPShm9Q";

        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [15.4542, 18.7322], // center map on Chad
            zoom: 1.8
        });

        // const geojson = {
        //     type: 'Feature',
        //     features: markers.map((marker) => ({
        //         properties: {
        //             city: marker.city,
        //             country: marker.country,
        //             iconSize: [30, 42],
        //         },
        //         geometry: {
        //             type: 'Point',
        //             coordinates: {
        //                 lat: marker.latCoord,
        //                 lng: marker.longCoord
        //             }
        //         }
        //     }))
        // };

        // map.current.on('load', () => {
        //     geojson.features.forEach((marker) => {
        //         // create a DOM element for the marker
        //         const markerIcon = document.createElement('div');
        //         markerIcon.className = 'location-marker';
        //         markerIcon.style.backgroundImage = 'url(/location-marker.png)';
        //         markerIcon.style.width = marker.properties.iconSize[0] + 'px';
        //         markerIcon.style.height = marker.properties.iconSize[1] + 'px';

        //         new mapboxgl.Marker(markerIcon)
        //             .setLngLat(marker.geometry.coordinates) // add marker to map
        //             .setPopup( // add pop out to map
        //                 new mapboxgl.Popup({ offset: 25 }).setHTML(
        //                     `<p>${marker.properties.city}, ${marker.properties.country}</p>`
        //                 )
        //             )
        //             .addTo(map.current);
        //     });
        // });

        // disable map zoom when scrolling
        map.current.scrollZoom.disable();

        // Add zoom and rotation controls to the map
        map.current.addControl(new mapboxgl.NavigationControl());

    }, []);

    return (
       
            <div className='flex justify-center px-4 md:px-0'>
                <div className='grid grid-cols-1  w-screen outline outline-1 outline-gray-300 p-4 max-w-7xl divide-y divide-gray-300'>
                    <div className='p-4 flex items-center space-x-2'>
                        <div className='w-72'>
                            <DebounceSelect
                                mode="multiple"
                                value={value}
                                placeholder="Enter Location"
                                fetchOptions={fetchUserList}
                                onChange={(newValue) => {
                                    setValue(newValue as UserValue[]);
                                }}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <Select
                            defaultValue="5 mi"
                            style={{ width: 120 }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: '5 mi',
                                    label: '5 mi',
                                },
                                {
                                    value: '10 mi',
                                    label: '10 mi',
                                },
                                {
                                    value: '25 mi',
                                    label: '25 mi',
                                },
                                {
                                    value: '50 mi',
                                    label: '50 mi',
                                },
                                {
                                    value: '100 mi',
                                    label: '100 mi',
                                },
                            ]}
                        />
                    </div>

                    <div className='flex justify-center '>
                        <div className='w-full grid grid-col-1 md:grid-cols-2 max-w-7xl divide-x divide-gray-300'>
                            <div className='space-y-6 py-10 text-center'>
                                <div className='text-center'>No locations found near you, <br />
                                    but we'd love to change that.</div>

                                <div>Get notified when we add a location nearby</div>

                                <div className='flex items-center w-full '>
                                    <input type="text" placeholder="Enter your email address" className='outline outline-1 mx-4  px-2 py-2 w-7/12' />
                                    <button className='py-2 px-4 w-5/12 text-center bg-blue-300 mx-2'>Notify me</button>
                                </div>

                                <button className='text-blue-700'>Show all results?</button>
                            </div>
                            <div className='w-full h-[400px]' ref={mapContainer} />

                        </div>
                    </div>
                </div>
            </div>
        
    )
}
