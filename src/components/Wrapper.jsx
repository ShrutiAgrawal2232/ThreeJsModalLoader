import "../styles/wrapper.css";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";

function Wrapper() {
  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [soul, setSoul] = useState("#ffffff");

  return (
    <div className="wrapper">
      <div className="card">
        <div className="product-canvas">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight />
              <spotLight
                intensity={0.9}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <Model
                customColors={{ mesh: mesh, stripes: stripes, soul: soul }}
              />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
              />
            </Suspense>
          </Canvas>
        </div>
        <h2>Color chooser</h2>
        <div className="colors">
          <div>
            <input
              type="color"
              id="mesh"
              name="mesh"
              value={mesh}
              onChange={(e) => setMesh(e.target.value)}
            />
            <label for="mesh">Main</label>
          </div>

          <div>
            <input
              type="color"
              id="stripes"
              name="stripes"
              value={stripes}
              onChange={(e) => setStripes(e.target.value)}
            />
            <label for="stripes">Stripes</label>
          </div>
          <div>
            <input
              type="color"
              id="soul"
              name="soul"
              value={soul}
              onChange={(e) => setSoul(e.target.value)}
            />
            <label for="soul">Soul</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
