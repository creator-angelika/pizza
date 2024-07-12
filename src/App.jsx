import { useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import VaraText from "./components/VaraText";
import Experience from "./components/Experience";


function App() {
  const [showVara1, setShowVara1] = useState(false);
  const [showVara2, setShowVara2] = useState(false);

  useEffect(() => {
    // Delayed appearance of the first VaraText div
    const timer1 = setTimeout(() => {
      setShowVara1(true);
    }, 0);

    // Delayed appearance of the second VaraText div
    const timer2 = setTimeout(() => {
      setShowVara2(true);
    }, 5000); // Adjust delay between the two divs here

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="app-container">
      <Canvas shadows camera={{ position: [9, 4, 2], fov: 40 }}>
        <ScrollControls pages={0} damping={0.1}>
          <Scroll>
            <Experience />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <div className="overlay-content">
        {showVara1 && (
          <VaraText id="vara-container-1" text="It's not just<br>a pizza" yPosition={10} delay={0} />
        )}
      </div>
      <div className="overlay-content-t">
        {showVara2 && (
          <VaraText id="vara-container-2" text="It's a slice<br>of heaven" yPosition={100} delay={0} />
        )}
      </div>
    </div>
  );
}

export default App;
