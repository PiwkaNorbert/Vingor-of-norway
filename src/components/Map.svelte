<script lang="ts">
  import { setMap } from '../map';

 
  export let zoom: number = 14;
  export let markerMarkup: string = "<a class='pointer-events-auto' href='https://www.google.com/maps/place/Rosenholm+Campus/@59.8220147,10.7849662,17z/data=!3m1!4b1!4m6!3m5!1s0x464168f3e4c3a051:0xcb35b099b7df25c9!8m2!3d59.8220147!4d10.7875411!16s%2Fg%2F11f2wzmh9t?entry=ttu' target='_blank' rel='noopener noreferrer'>Google Maps</a>  ";

  const location = { latitude: 59.821977, longitude: 10.7872191 };
  const { latitude, longitude } = location;
  

  
</script>

<figure class="shadow-xl" use:setMap={{ latitude, longitude, zoom, markerMarkup }}  />

<style>
  figure {
    width: 100%;
    min-height: 30rem;
    margin-bottom: 1rem;
    pointer-events: none;
    z-index: 0;
  }
</style>