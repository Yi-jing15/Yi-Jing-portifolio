import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>  

      {/* 燈光設定 */}
      <ambientLight intensity={0.7} /> {/* 環境光*/}
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, 5, 5]} intensity={0.8} />

      {/* 球體 Mesh */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* 球的幾何形狀：二十面體 */}
        <icosahedronGeometry args={[1, 1]} />

        {/* 球的材質設定 */}
        <meshPhongMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={false} // 關閉 flatShading，球面更光滑
          metalness={0.8} 
          roughness={0.2} // 表面光滑
        />

        {/* 貼圖 Decal */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading={false} // 貼圖表面平滑
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
