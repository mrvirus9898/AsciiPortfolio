import { useRef } from 'react';

import starbkg from './artimages/starsbackground.jpg';

import * as THREE from 'three';

import moon from './artimages/moon.jsx';
import village from './artimages/village.jsx';
import asciibanner from './artimages/Asciiworldbanner';
import welcometo from './artimages/welcometo';
import byNGB from './artimages/byNGB';
import rocketship from './artimages/rocketship';
import star from './artimages/star';
import cloud from './artimages/cloud';
import thincloud from './artimages/thincloud';
import blankthincloud from './artimages/blankthincloud';
import dragon from './artimages/dragon';

import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

  return (
    <div className="App">
    <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${starbkg})`,
            backgroundSize: 'cover'
          }}
        >
          
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
        >
          {welcometo()}
          {asciibanner()} 
          {byNGB()}
        </ParallaxLayer>
        
        <ParallaxLayer
        sticky={{ start: 0.8, end: 3.5 }}  
        factor={2}     
        >
          {moon()}
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.25}
          speed={0.025}
        >
          <div class = "rocketcontainer">
            {cloud()}
            {rocketship()}
          </div>
          <div class = "bannercontainer">
            <div class = "cloudcontainer">
              {blankthincloud()}
              {thincloud()}
              {thincloud()}
            </div>
            <div class = "cloudcontainer">
              {thincloud()}
              {blankthincloud()}
              {thincloud()}
            </div>
            <div class = "cloudcontainer">
              {blankthincloud()}
              {blankthincloud()}
              {blankthincloud()}
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.05}
          factor={4}
        >
          {blankthincloud()}
          {blankthincloud()}
          {star()}
          <div class = "bannercontainer">
          {village()}
          {dragon()}
          </div>
        </ParallaxLayer>                                                                                         
      </Parallax>

      
    </div>
  )
}

export default App
