import React from 'react'
import './central.css'
import Station from '../images/central.jpg'

function Central() {
  return (
    <div>
    <div className='title'>
      <h1>Central Station</h1>
    </div>
    <div className='introduction'>
      <p>This is considered to be the 🧡 Heart 🧡 of the network, so if there are issues across Central or anywhere across the City and general CBD areas, you know there ought to be problems!!</p>
      <p>Altogether in this bustling station and interchange, there are a total of 22 operational platforms as of 2023.</p>

      <img src={Station} className='central-img' alt='img'/>

      <p>Platforms 1 - 12 host the outer surbaban services that travel to the Blue Mountains and Further West, the Central Coast and further North to Newcastle onwards, the South Coast and further South to Wollongong onwards, and the Southern Highlands and further South-West towards Goulburn and Canberra.</p>
    </div>
    <div className='formers'>
      <p>Platforms 13 - 15 used to host the intercity services but have been decommissioned to accomodate for the Sydney Metro Line project expansion. It is likely that platform 15 will no longer exist for the foreseeable future.</p>
    </div>
    <div className='suburban'>
      <p>Platforms 16 primarily host services towards the North Shore as part of the T1 and T9 lines, sometimes there are Central Coast services during the afternoon and evening peak that travels through the important stations of the line.</p>
      <p>Platform 17 serves the City Circle services stopping at Town Hall before ending at Museum where it will operate as a T3 or T8 service. Platforms 20 and 21 host the City Services but in the other direction before operating as a T2 or T3 service.</p>
      <p>Platform 18 serves the T1 Western Line towards Blacktown, Penrith or Richmond and the T9 Northern Line towards Strathfield before travelling North towards Epping and Hornsby.</p>
      <p>Platform 19 serves the T2 Inner-West Line and the South-West Line towards Leppington, as well as T3 Liverpool services only on weekdays.</p>
      <p>Platform 22 primarily serves the T3 Bankstown Line towards Bankstown, as stated in the name and turning towards Lidcombe or continuing West towards Liverpool during weekends.</p>
      <p>Platform 23 primarily serves the T8 Airport and South Line towards Sydney's Domestic and International Aiport terminals before further South-West towards Revesby, Campbelltown and Macarthur.</p>
      <p>Platforms 24 and 25 are allocated to serve the T4 Eastern Suburbs and Illawarra Line, where the former travels towards the Eastern Suburbs towards Bondi Junction and the latter travelling south towards Hurstville, Cronulla and Waterfall. Some South Coast intercity services travel through these platforms.</p>
    </div>
    </div>
  )
}

export default Central