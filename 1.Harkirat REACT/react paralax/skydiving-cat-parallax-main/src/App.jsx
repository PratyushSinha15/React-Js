import { useRef } from 'react';
import moon from './moon.png';
import land from './land.png';
import cat from './cat.gif';
import guy from './guy.gif';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}    // offset is the position of the layer
          speed={1}     // speed is the speed of the layer moving
          factor={2}    // factor is the size of the layer and its factor is the number of pages it will take up like it will take up 2 pages
          style={{      // style is the style of the layer
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}      
          speed={1}
          factor={4}   
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Taaren zameeen pe!!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
