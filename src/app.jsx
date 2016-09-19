import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './scss/main.scss';
import React from 'react';


export default class App extends React.Component { 

  componentDidMount() {
    let vancouver = {lat: 49.265605, lng: -123.067946};
    let map = new google.maps.Map(document.getElementById('map'), {
      center: vancouver,
      zoom: 10
    });

    let e7 = 10000000;

    let heatdata = this.props.lochistory.map(function (loc){      
      // return new google.maps.LatLng(loc.latitudeE7/e7,loc.longitudeE7/e7);
      // {location: new google.maps.LatLng(37.782, -122.443), weight: 2}
      return {location: new google.maps.LatLng(loc.latitudeE7/e7,loc.longitudeE7/e7), weight: 10}
    });

    let heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatdata,
      center: "vancouver",
      radius: 3,
      dissipating: true,
      maxIntensity: 4
    });
    
    heatmap.setMap(map);

    // let markers = this.props.lochistory.map(function (loc){
    //    var marker = new google.maps.Marker({
    //       position: new google.maps.LatLng(loc.latitudeE7/e7,loc.longitudeE7/e7),
    //       map: map,
    //       title: 'Hello World!'
    //   });
    // });

    console.log(">>> " + heatdata.length);
 
  }

  render() {        
    console.log(this.props.lochistory[0]);
    console.log(this.props.lochistory[1]);
    console.log(this.props.lochistory[2]);
    return (
      
      <div id="map" className={styles.gmap}>
    
      </div>
    )
  }
}
