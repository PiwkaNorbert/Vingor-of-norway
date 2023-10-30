export function setMap(
  mapElement: HTMLElement,
  { latitude, longitude, zoom, markerMarkup = "" }: MapOptions
) {
  (async () => {
    const {
      map: leafletMap,
      marker: leafletMarker,
      tileLayer,
    } = await import("leaflet");

    const map = leafletMap(mapElement).setView([latitude, longitude], zoom);

    tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    if (markerMarkup !== "") {
      leafletMarker([latitude, longitude]).bindPopup(markerMarkup).addTo(map);
    } else {
      leafletMarker([latitude, longitude]).addTo(map);
    }
  })();
}

export type MapOptions = {
  latitude: number;
  longitude: number;
  zoom: number;
  markerMarkup?: string;
};
