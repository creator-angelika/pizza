import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={2} damping={0.1}>
      <OrbitControls />.
      <Experience />
      <Scroll>
        
      </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
