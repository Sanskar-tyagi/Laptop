import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Laptop(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/scene-transformed.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="6d6965dc67f44df6825442cb313dc479fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="My_Laptop" position={[0, -43.72, -37.63]}>
                  <group name="Screen" position={[-20.32, 117.4, -31.4]}>
                    <mesh
                      name="Screen_Laptop_MA_0"
                      geometry={nodes.Screen_Laptop_MA_0.geometry}
                      material={materials.Laptop_MA}
                    />
                  </group>
                  <group name="Base" position={[0, 116.88, -18.7]}>
                    <mesh
                      name="Base_Laptop_MA_0"
                      geometry={nodes.Base_Laptop_MA_0.geometry}
                      material={materials.Laptop_MA}
                    />
                  </group>
                </group>
                <group
                  name="Wall"
                  position={[-91.44, 0, -91.44]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.63, 1, 0.14]}
                >
                  <mesh
                    name="Wall_Wall_MA_0"
                    geometry={nodes.Wall_Wall_MA_0.geometry}
                    material={materials.Wall_MA}
                  />
                </group>
                <group
                  name="Floor"
                  position={[0, 0, -2.54]}
                  scale={[0.63, 1, 0.14]}
                >
                  <mesh
                    name="Floor_Floor_MA_0"
                    geometry={nodes.Floor_Floor_MA_0.geometry}
                    material={materials.Floor_MA}
                  />
                </group>
                <group name="Desk" position={[0, 36.19, -52.03]}>
                  <mesh
                    name="Desk_Desk_MA_0"
                    geometry={nodes.Desk_Desk_MA_0.geometry}
                    material={materials.Desk_MA}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene-transformed.glb");
