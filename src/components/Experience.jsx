import { OrbitControls } from "@react-three/drei";
import { Pizza } from "./Pizzaanim";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <Pizza />
    </>
  );
};
