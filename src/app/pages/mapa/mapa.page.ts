import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'mapa.page.html',
  styleUrls: ['mapa.page.scss']
})
export class Tab3Page implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit() {

  }

  ngAfterViewInit() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZmFybGV5LWFicnV6emkiLCJhIjoiY2p5ZzFuaDMyMDMwYjNoc2JnNjVieWhlbCJ9.llMKv2uKn_IgkD1MIThCjA';
    
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-46.633309, -23.55052],
      zoom: 15,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });

    map.on('load', function() {
      map.resize();
    });
    
    //   map.on('load', function() {

    //     map.resize();
    //     // Insert the layer beneath any symbol layer.
    //     const layers = map.getStyle().layers;
         
    //     let labelLayerId;
    //       for (let i = 0; i < layers.length; i++) {
    //       if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
    //       labelLayerId = layers[i].id;
    //       break;
    //     }
    //   }
         
    //     map.addLayer({
    //       'id': '3d-buildings',
    //       'source': 'composite',
    //       'source-layer': 'building',
    //       'filter': ['==', 'extrude', 'true'],
    //       'type': 'fill-extrusion',
    //       'minzoom': 15,
    //       'paint': {
    //       'fill-extrusion-color': '#aaa',
          
    //       // use an 'interpolate' expression to add a smooth transition effect to the
    //       // buildings as the user zooms in
    //       'fill-extrusion-height': [
    //       'interpolate', ['linear'], ['zoom'],
    //       15, 0,
    //       15.05, ['get', 'height']
    //       ],
    //       'fill-extrusion-base': [
    //       "interpolate", ['linear'], ['zoom'],
    //       15, 0,
    //       15.05, ['get', 'min_height']
    //       ],
    //       'fill-extrusion-opacity': .6
    //       }
    //       }, labelLayerId);
    // });
  }
}
