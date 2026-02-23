import { useRef } from "react";
import { MapView } from "@/components/Map";

const offices = [
  {
    name: "India HQ",
    position: { lat: 23.0225, lng: 72.5714 }, // Ahmedabad
  },
  {
    name: "USA Office",
    position: { lat: 26.1224, lng: -80.1373 }, // Fort Lauderdale
  },
  {
    name: "Hong Kong",
    position: { lat: 22.3193, lng: 114.1694 }, // Ngau Tau Kok
  },
  {
    name: "Australia",
    position: { lat: -33.8688, lng: 151.2093 }, // Sydney
  },
];

export default function FooterMap() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // Add markers for each office
    offices.forEach((office) => {
      new google.maps.marker.AdvancedMarkerElement({
        map,
        position: office.position,
        title: office.name,
      });
    });

    // Fit bounds to show all markers
    const bounds = new google.maps.LatLngBounds();
    offices.forEach((office) => bounds.extend(office.position));
    map.fitBounds(bounds);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-white/10 h-[180px] w-full mt-4">
      <MapView
        className="w-full h-full"
        initialCenter={{ lat: 20, lng: 0 }}
        initialZoom={1}
        onMapReady={handleMapReady}
      />
    </div>
  );
}
