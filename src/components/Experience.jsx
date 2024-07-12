import { OrbitControls } from "@react-three/drei";
import { Pizza } from "./Pizza";
import { Pizzapan } from "./Pizzapan";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1.2} />
      {/* <Pizza position={[0, -1.6, 0]}/> */}
      
      <Pizzapan position={[0, -0.8, 0]} rotation={[0, -0.8, 0]}/>
      <OrbitControls 
        maxPolarAngle={Math.PI / 2}  // Limit vertical rotation to 90 degrees (45 up and 45 down)
        minPolarAngle={Math.PI / 12}  // No need to limit downward rotation further
        maxAzimuthAngle={30*(Math.PI / 180)} // Limit horizontal rotation to 60 degrees to the right
        minAzimuthAngle={0} // Limit horizontal rotation to 30 degrees to the left
        enableZoom={false} // Disable zoom
      />
    </>
  );
};

export default Experience