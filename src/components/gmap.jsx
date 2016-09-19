import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../scss/main.scss';
import React from 'react';


export default class GMap extends React.Component { 

  componentDidMount() {
    let vancouver = {lat: 49.265605, lng: -123.067946};
    let map = new google.maps.Map(document.getElementById('map'), {
      center: vancouver,
      zoom: 10
    });

    let e7 = 10000000;

    // let heatdata = this.props.lochistory.map(function (loc){      
    //   return {location: new google.maps.LatLng(loc.latitudeE7/e7,loc.longitudeE7/e7), weight: 10}
    // });

    let bikeheatdata = this.props.lochistory.filter( (loc) => {
          if (loc.activitys!==undefined && loc.activitys[0].activities[0].type === "onBicycle")
            return true;
          else
            return false;
    }).map(function (loc){      
      // return new google.maps.LatLng(loc.latitudeE7/e7,loc.longitudeE7/e7);
      return {location: new google.maps.LatLng(loc.latitudeE7/e7,loc.longitudeE7/e7), weight: 10}
    });

    let walkheatdata = this.props.lochistory.filter( (loc) => {
          if (loc.activitys!==undefined && 
          (loc.activitys[0].activities[0].type === "walking" || loc.activitys[0].activities[0].type === "onFoot"))
            return true;
          else
            return false;
    }).map(function (loc){      
      // return new google.maps.LatLng(loc.latitudeE7/e7,loc.longitudeE7/e7);
      return {location: new google.maps.LatLng(loc.latitudeE7/e7,loc.longitudeE7/e7), weight: 10}
    });

    var walkgradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 0.2)',
          'rgba(0, 255, 255, 0.4)',
          'rgba(0, 255, 255, 0.6)',
          'rgba(0, 255, 255, 0.8)',
          'rgba(0, 255, 255, 1)'
        ];        

    let bikeheatmap = new google.maps.visualization.HeatmapLayer({
      data: bikeheatdata,
      center: "vancouver",
      radius: 3,
      dissipating: true,
      maxIntensity: 4,
      map: map,
    });
    
    let walkheatmap = new google.maps.visualization.HeatmapLayer({
      data: walkheatdata,
      center: "vancouver",
      radius: 3,
      dissipating: true,
      maxIntensity: 4,
      map: map,
      gradient: walkgradient
    });

    // bikeheatmap.setMap(map);

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
    console.log(this.props.lochistory[5].activitys[0].activities[0]);
    return (
      
      <div id="map" className={styles.gmap}>
    
      </div>
    )
  }
}
