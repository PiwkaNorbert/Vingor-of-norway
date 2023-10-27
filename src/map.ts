export function setMap(
  mapElement: HTMLElement,
  location: { latitude: number; longitude: number },
  { latitude, longitude, zoom, markerMarkup = "" }: MapOptions
) {
  console.log("mapElement", mapElement);

  (async () => {
    const {
      icon: leafletIcon,
      map: leafletMap,
      marker: leafletMarker,
      tileLayer,
    } = await import("leaflet");

    console.log("leafletIcon", leafletIcon);

    const markerIcon = leafletIcon({
      iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
      shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    });

    const map = leafletMap(mapElement).setView([latitude, longitude], zoom);

    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    if (markerMarkup !== "") {
      leafletMarker([latitude, longitude], { icon: markerIcon })
        .bindPopup(markerMarkup)
        .addTo(map);
    } else {
      leafletMarker([latitude, longitude], { icon: markerIcon }).addTo(map);
    }
  })();
}

export type MapOptions = {
  latitude: number;
  longitude: number;
  zoom: number;
  markerMarkup?: string;
};
