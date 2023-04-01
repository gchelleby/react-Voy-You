import { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import MapForm from './MapForm';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-96.883003);
    const [lat] = useState(38.013222);
    const [zoom] = useState(3);
    const [API_KEY] = useState(process.env.REACT_APP_MAPTILER_API_KEY);

    useEffect(() => {
        if (map.current) return;
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
        // const marker = new maplibregl.Marker({ color: "#FF0000" })
        // .setLngLat([139.7525, 35.6846])
        // .addTo(map.current);
    });
    return (
        <div className='map-page-container'>
            <div className="map-wrap map-body map-code">
                <div ref={mapContainer} className="map" />
            </div>
            <MapForm />
        </div>
    )
}