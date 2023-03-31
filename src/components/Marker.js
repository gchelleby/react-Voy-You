

export default function Marker() {
    new maplibregl.Marker({ color: "#FF0000" })
        .setLngLat([139.7525, 35.6846])
        .addTo(map.current);
}