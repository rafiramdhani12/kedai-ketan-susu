import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";

export const InsideModel = forwardRef((props, ref) => {
  const { scene } = useGLTF("/assets/inside/scene.gltf");
  return <primitive object={scene} ref={ref} {...props} />;
});

InsideModel.displayName = "Model";
