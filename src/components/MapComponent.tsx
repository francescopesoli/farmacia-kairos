import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";

interface MapProps {
    address: string;
}

const MapComponent: React.FC<MapProps> = ({ address }) => {
    const position: LatLngTuple = [41.9028, 12.4964]; // Esempio su Roma, sostituisci con le coordinate reali

    return (
        <MapContainer center={position} zoom={15} className="h-64 w-full rounded-lg">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
                <Popup>{address}</Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;