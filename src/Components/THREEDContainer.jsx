import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";

 const THREEDContainer=()=> {
  return (
   <Canvas camera={{ position: [-200, 100, 200] ,fov: 90}} >
      <Computer />
    </Canvas>
  );
}
export default THREEDContainer;