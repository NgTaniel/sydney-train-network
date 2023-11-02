import React from 'react'
import './citycircle.css'

function CityCircle() {
  return (
    <>
      <div className='title-city'>
        <h1>The City Circle</h1>
      </div>
      <div className='intro-header'>
        <div className='introduction-city'>
          <p>Here are the stations that serves the City Circle of Sydney, mainly focusing on areas of the CBD and perhaps an essential area of the train network, especially during the morning and evening peak where there can be up to a million commuters taking and alighting services across the City stations.</p>
          <br/>
          <p>The train lines that serve the City Cirle are primarily the T2, T3 and T8 lines, exempting any trackwork diversions.</p>
        </div>
      </div>
      <div className='stations'>
        <div className='town-hall'>
          <h2>TOWN HALL</h2>
          {/* <br/> */}
          <p>Platform 1: Primarily serves the T2 Line to Leppington, Parramatta or Homebush daily and on weekdays the T3 Liverpool services</p>
          <p>Platform 2: Primarily serves the T1 Western Lines to Penrith, Emu Plains, Richmond or Blacktown and the T9 Northern Line to Hornsby and Epping via Strathfield</p>
          <p>Platform 3: Serves the North Shore section of the T1 line to Hornsby, Chatwood, Gordon or Berowra. Some Central Coast services to Gosford and Wyong serve during the afternoon and evening peak</p>
          <p>Platform 4: Primarily Serves the T4 Illawarra Line to Hurstville, Sutherland, Cronulla or Waterfall. Some South Coast services are timetabled for Wollongong, Kiama or Port Kembla</p>
          <p>Platform 5: Serves the Eastern Suburbs of the T4 Line to Bondi Junction</p>
          <p>Platform 6: Primarily serves the T3 Bankstown and T8 Airport Lines via the City Circle, where the T3 departs for Bankstown, Lidcombe or Liverpool (during weekends) and the T8 departs for the Sydney Airport Terminals, Revesby and Campbelltown</p>
          <br/>

          <div className='light-rail-th'>
            <h3>LIGHT RAIL CONNECTIONS</h3>
            {/* <br/> */}
            <p>Inbound L2 and L3 services to Circular Quay</p>
            <p>Outbound L2 services to Randwick and L3 services to Juniors Kingsford</p>
          </div>
          <br/>

          <div className='bus-th'>
            <h3>BUS CONNECTIONS</h3>
            <h4>STAND A (QVB Queen Victoria Building)</h4>
            <h4>STAND B (QVB)</h4>
          </div>

        </div>
        <h2>WYNYARD</h2>
        <br/>
        <p></p>
        <br/>
        <h2>CIRCULAR QUAY</h2>
        <br/>
        <p></p>
        <br/>
        <h2>ST JAMES</h2>
        <br/>
        <p></p>
        <br/>
        <h2>MUSEUM</h2>
        <br/>
        <p></p>
        <br/>
      </div>
    </>
  )
}

export default CityCircle