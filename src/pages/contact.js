import React, { useEffect } from "react"
import { Link } from 'gatsby' 

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {

  
  var scriptText = `function initMap () {

    console.log('initMap() has been called')

    // the location of Uluru
    var coordinates = {
      lat: 41.4299,
      lng: -81.3911
    }

    // the map, centered at uluru
    var map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: coordinates,
        gestureHandling: 'none',
        zoomControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ]
      }
    )

    // the marker, positioned at uluru
    var marker = new google.maps.Marker({
      position: coordinates,
      map: map
    })

  }`

  const idInit = "initMap"
  const idLib = "googleMaps"
  const idRedraw = "redraw"

  const appendMapFunction = () => {
    const initFunction = document.createElement('script')
    initFunction.id = idInit
    initFunction.text = scriptText
    document.body.appendChild(initFunction)
  }

  const importGoogleMaps = () => {
    const googleMaps = document.createElement('script')
    googleMaps.id = idLib
    googleMaps.defer = true
    googleMaps.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}&callback=initMap`
    document.body.appendChild(googleMaps)
  }

  const redrawMap = () => {
    const redrawScript = document.getElementById(idRedraw)
    if(redrawScript){
      redrawScript.parentNode.removeChild(redrawScript)
    }
    const drawMap = document.createElement('script')
    drawMap.text = "initMap()"
    drawMap.id = idRedraw
    document.body.appendChild(drawMap)
  }

  useEffect( () => {

    const mapsScript = document.getElementById(idLib)
    
    // provide map init function if not already inserted
    if(!document.getElementById(idInit)){
      appendMapFunction()
    }

    if(mapsScript){
      
      // google maps already imported, so if we get here then the component has rerendered and the callback built into the library import will not draw the map so redraw it
      redrawMap()

    } else {

      // google maps has not already been imported. import google maps
      importGoogleMaps()

    }

  })
  
  return (

    <Layout>
      <SEO title="Contact" />
      {/* <h1 className="has-text-white">Contact page</h1> */}
      {/* <h2 className="has-text-white">Location</h2> */}

      <div className="container">
        <div 
          className="has-text-white columns" 
          style={{
            minHeight: 200,
            backgroundColor: "#2f3e46"
          }}
        >

          {/* CONTACT INFO */}
          <div className="column" style={{margin: "1em"}}>
            <h1>Book Now</h1>
            <p style={{margin: 0}}>Chagrin Falls, Ohio 44022</p>
            <p style={{margin: 0}}><Link className="has-text-white" to="mailto:rdw7795@gmail.com">rdw7795@gmail.com</Link></p>
            <p style={{margin: 0}}>(440) 667-9617</p>
          </div>

          {/* HOURS */}
          <div className="column" style={{margin: "1em"}}>
            <h1>Hours</h1>
            <p style={{margin: 0}}>Tues-Thurs: 11am - 4pm</p>
            <p style={{margin: 0}}>Sat: 10am - 5pm</p>
            <p style={{margin: 0}}>Sun: 10am - 5pm</p>
          </div>

        </div>

        <div className="columns" style={{marginBottom: "1em"}}>

          {/* 09.01.20: MAP DIV */}
          <div id="map" style={{height: 400, width: "100%"}}></div>

        </div>

      </div>

    </Layout>

  )

}

export default Contact