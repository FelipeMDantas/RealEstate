import { Marker, Popup } from "react-leaflet";
import "./pin.scss";

function Pin({ item }) {
  const position = [51.505, -0.09];

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

export default Pin;
