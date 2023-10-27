<script lang='ts' use>
  import { onMount, onDestroy, setContext } from 'svelte'
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'

  let map: L.Map | undefined
  let mapElement: HTMLDivElement
  export let bounds: L.LatLngBoundsExpression | undefined = undefined
  export let view: L.LatLngExpression | undefined = undefined
  export let zoom: number | undefined = undefined

  onMount(()=>{

    if (!bounds && (!view || !zoom)) {
      throw new Error('Must set Either bounds or view and zoom')
    }
    map = L.map(mapElement)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)
  })

  onDestroy(()=>{
    map?.remove()
    map = undefined
  })
  setContext('map',{
    getMap: () => map
  
  })

  $: if(map) {
    if(bounds) {
      map.fitBounds(bounds)
    } else if(view && zoom) {
      map.setView(view, zoom)
    }
  }

</script>

<div class="w-full h-full" bind:this={mapElement}>
  <slot/>
</div>