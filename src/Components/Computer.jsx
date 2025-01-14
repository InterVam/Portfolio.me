import { Bounds, OrbitControls , Center } from "@react-three/drei";
import { Computer3D } from "./Computer3D";

const Computer = () => {
  return (
    <>
   
    <Bounds fit clip margin={1}> 
    <ambientLight intensity={3} />
    
    <OrbitControls enableZoom={false} />
    <Center>
   <Computer3D/>
   </Center>
   </Bounds>
   
    </>
  );
}

export default Computer;