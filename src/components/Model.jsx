import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";

export const Model = forwardRef((props, ref) => {
  const { scene } = useGLTF("/assets/outside/scene.gltf");
  return <primitive object={scene} ref={ref} {...props} />;
});

Model.displayName = "Model";
