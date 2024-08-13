import { useEffect, useRef } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import useMap from '../../hooks/use-map';
import { URL_MARKER_ACTIVE, URL_MARKER_DEFAULT } from '../../const';
import { City, Location } from '../../types';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: {
    location: Location;
    id: string;
  }[];
  selectedPointId: string | null;
  classNamePrefix: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const activeCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({
  city,
  points,
  selectedPointId,
  classNamePrefix,
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map && city) {
      map.flyTo(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPointId !== null && point.id === selectedPointId
              ? activeCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPointId]);

  return (
    <section ref={mapRef} className={`${classNamePrefix}__map map`}></section>
  );
}

export default Map;
