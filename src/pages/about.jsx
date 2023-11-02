import React from 'react';
import './about.css'
import Map from '../images/trainmap.png'

const About = () => {
  return (
    <div>
      <div className='heading'>
        <h1>Welcome!</h1>
      </div>
      <div className='paragraph'>
        <p>In this website, you will come across all the stations including the platforms and services across the Sydney Trains Network without Sydney as well as other transport modes at some stations with interchanges and connections. Note that this covers the entirety of Sydney and does not include the outer Surbaban stations.</p>
        <br/>
        <p>This app will update based on any changes on the train lines, stations or stopping patterns of each service. However this will not cover any delays or hiccups, which I will warn is uncommon across the network and is increasingly infuriating.</p>
        <br/>
        <p>My motivation behind this app is from my interests in playing around with the Tripview Application and I am keen on developing more projects as I go as well as exploring new techniques to enhance the formatting of my sites. But for now, hopefully you find this interesting and helpful next time you are looking to make any transits.</p>
        <br/>
        <img src={Map} className='train-map' alt='map'/>

      </div>
    </div>
  );
};

export default About