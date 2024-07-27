import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City, Location } from '../../types';
import { URL_MARKER_ACTIVE, URL_MARKER_DEFAULT } from '../../const';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';

type MapProps = {
  city: City;
  points: {
    location: Location;
    id: string;
  }[];
  selectedPoint: {
    location: Location | undefined;
    id: string | undefined;
  };
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const activeCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({city, points, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? activeCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return (
    <div className="cities__right-section">
      <section ref={mapRef} className="cities__map map"></section>
    </div>
  );
}

export default Map;
