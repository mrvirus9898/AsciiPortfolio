import { useRef } from 'react';

import moon from './artimages/moon.jsx';
import village from './artimages/village.jsx';
import asciibanner from './artimages/Asciiworldbanner';
import welcometo from './artimages/welcometo';
import star from './artimages/star';

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
        >
          
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.3}
          speed={0.1}
          factor={4}
        >
          {village()}
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{ start: 0.8, end: 3.5 }}
        style={{ textAlign: 'center' }}
        >
          {star()}
          {moon()}
        </ParallaxLayer>
        

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
        >
          {star()}
          {welcometo()}
          {asciibanner()} 
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.25}
          speed={0.025}
        >
        
        </ParallaxLayer>

                                                                                                          
                                                                                                  

        <ParallaxLayer
          offset={3}
          speed={2}
        >
         
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
