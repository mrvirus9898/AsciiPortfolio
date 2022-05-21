import { useRef } from 'react';

import starbkg from './artimages/starsbackground.jpg';

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
import nicholasgbennett from './artimages/nicholasgbennett';
import scrolldown from './artimages/scrolldown';
import downarrow from './artimages/downarrow';
import portfolio from './artimages/portfolio';
import hardwork from './artimages/hardwork';
import HardScience from './artimages/HardScience';
import software from './artimages/software';
import Softskills from './artimages/Softskills';
import creativity from './artimages/creativity';
import versatility from './artimages/versatility';
import isdrawnfrom from './artimages/isdrawnfrom';
import hsphysicsblock from './artimages/hsphysicsblock';
import hsenvyblock from './artimages/hsenvyblock';
import hschemblock from './artimages/hschemblock';

import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

  return (
    <div className="App">
    <Parallax pages={5} ref={ref}>
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
          <div class="skillcontainer">
          {portfolio()}
          {nicholasgbennett()} 
          {scrolldown()}
          {downarrow()}
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer
        sticky={{ start: 0.8, end: 3.5 }}  
        factor={2}     
        >
          {moon()}
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1.2}
        >
        <div class = "rocketcontainer">
          {rocketship()}
          {blankthincloud()}
        </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.1}
          speed={0.25}
        >
        <div class = "bannercontainer">
          <div class = "skillcontainer">
                {creativity()}
                {isdrawnfrom()}
                {versatility()}
          </div>
          <div class = "skillcontainer">
              {HardScience()}
              {software()}
              {hardwork()}
              {Softskills()}
          </div>
          <div class = "skillcontainer">
            {blankthincloud()}
          </div>
        </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.005}
          factor={3}
        >
          {HardScience()}
          {hsenvyblock()}
          <div class = "rocketcontainer">
            {hsphysicsblock()}
            {hschemblock()}
          </div>
        </ParallaxLayer>       
                                                                                  
      </Parallax>

      
    </div>
  )
}

export default App
