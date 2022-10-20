import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/planet-earth.glb");
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Planet"
          position={[0.03, 0.07, -0.04]}
          rotation={[Math.PI / 2, 0, -0.27]}
          scale={[12, 12, 12]}
        >
          <group name="Bushes" position={[-59.56, 45.9, -11.47]}>
            <mesh
              name="Bushes_1"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_1.geometry}
              material={materials["World ap.521"]}
              position={[-41.31, -32.46, -18.97]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              name="Bushes_10"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_10.geometry}
              material={materials["World ap.512"]}
              position={[-30.32, 15.49, 4.64]}
              rotation={[-2.19, 0, 0]}
            />
            <mesh
              name="Bushes_11"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_11.geometry}
              material={materials["World ap.511"]}
              position={[-6.6, 40.7, 13.02]}
              rotation={[-2.98, 0, 0]}
            />
            <mesh
              name="Bushes_12"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_12.geometry}
              material={materials["World ap.510"]}
              position={[-32.16, 12.2, 11.09]}
              rotation={[-2.19, 0, 0]}
            />
            <mesh
              name="Bushes_13"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_13.geometry}
              material={materials["World ap.509"]}
              position={[4.31, 45.97, 9.97]}
              rotation={[-2.19, 0, 0]}
            />
            <mesh
              name="Bushes_14"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_14.geometry}
              material={materials["World ap.508"]}
              position={[34.67, 59.76, 42.06]}
              rotation={[-2.39, 0, 0]}
            />
            <mesh
              name="Bushes_15"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_15.geometry}
              material={materials["World ap.507"]}
              position={[57.87, 63.82, 16.27]}
              rotation={[3.13, 0, 0]}
            />
            <mesh
              name="Bushes_16"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_16.geometry}
              material={materials["World ap.506"]}
              position={[72.38, 58.94, 10.63]}
              rotation={[3.14, 0, 0]}
            />
            <mesh
              name="Bushes_17"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_17.geometry}
              material={materials["World ap.505"]}
              position={[118.94, 37.3, -5.98]}
              rotation={[3.14, 0, 0]}
            />
            <mesh
              name="Bushes_18"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_18.geometry}
              material={materials["World ap.504"]}
              position={[24.98, 55.42, 51.04]}
              rotation={[3.07, 0, 0]}
            />
            <mesh
              name="Bushes_19"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_19.geometry}
              material={materials["World ap.503"]}
              position={[23.11, 36.4, 77.11]}
              rotation={[-2.75, 0, 0]}
            />
            <mesh
              name="Bushes_2"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_2.geometry}
              material={materials["World ap.520"]}
              position={[-41.31, -39.94, -18.51]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              name="Bushes_20"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_20.geometry}
              material={materials["World ap.502"]}
              position={[105.68, 47.23, 2.08]}
              rotation={[-1.48, 0, 0]}
            />
            <mesh
              name="Bushes_21"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_21.geometry}
              material={materials["World ap.523"]}
              position={[-35.77, 1.94, -3.31]}
              rotation={[-2.19, 0, 0]}
            />
            <mesh
              name="Bushes_22"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_22.geometry}
              material={materials["World ap.524"]}
              position={[127.07, 27.12, -15.44]}
              rotation={[3.14, 0, 0]}
            />
            <mesh
              name="Bushes_23"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_23.geometry}
              material={materials["World ap.525"]}
              position={[-13.92, 34.19, 25.78]}
              rotation={[-1.99, 0, 0]}
            />
            <mesh
              name="Bushes_2_2"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_2_2.geometry}
              material={materials["World ap.522"]}
              position={[-41.31, -29.01, -20.25]}
              rotation={[-2.19, 0, 0]}
            />
            <mesh
              name="Bushes_3"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_3.geometry}
              material={materials["World ap.519"]}
              position={[-38.39, -31.39, -24.85]}
              rotation={[-2.19, 0, 0]}
            />
            <mesh
              name="Bushes_4"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_4.geometry}
              material={materials["World ap.518"]}
              position={[-38.57, -51.09, -23.62]}
              rotation={[2.49, 0, 0]}
            />
            <mesh
              name="Bushes_5"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_5.geometry}
              material={materials["World ap.517"]}
              position={[-37.28, -61.26, -19.51]}
              rotation={[-2.7, 0, 0]}
            />
            <mesh
              name="Bushes_6"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_6.geometry}
              material={materials["World ap.516"]}
              position={[-30.88, -77.79, -24.71]}
              rotation={[-2.87, 0, 0]}
            />
            <mesh
              name="Bushes_7"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_7.geometry}
              material={materials["World ap.515"]}
              position={[-37.32, -73.79, -15.13]}
              rotation={[-2.87, 0, 0]}
            />
            <mesh
              name="Bushes_8"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_8.geometry}
              material={materials["World ap.514"]}
              position={[-36.13, -54.14, -25.13]}
              rotation={[-0.89, 0, 0]}
            />
            <mesh
              name="Bushes_9"
              castShadow
              receiveShadow
              geometry={nodes.Bushes_9.geometry}
              material={materials["World ap.513"]}
              position={[-33.69, -8.8, -26.31]}
              rotation={[-2.19, 0, 0]}
            />
          </group>
          <group name="Camping" position={[0.24, 13.39, -16.17]}>
            <mesh
              name="Camping_1"
              castShadow
              receiveShadow
              geometry={nodes.Camping_1.geometry}
              material={materials["World ap"]}
              position={[64.23, 65.36, -4.21]}
              rotation={[1.33, -0.67, 1.51]}
            />
            <mesh
              name="Camping_2"
              castShadow
              receiveShadow
              geometry={nodes.Camping_2.geometry}
              material={materials["World ap"]}
              position={[-61.38, 77.24, 13.26]}
              rotation={[1.49, 0.84, -1.84]}
            />
            <mesh
              name="Camping_2_2"
              castShadow
              receiveShadow
              geometry={nodes.Camping_2_2.geometry}
              material={materials["World ap"]}
              position={[-86.52, 44.47, -13.52]}
              rotation={[1.2, 0.7, -1.83]}
            />
            <mesh
              name="Camping_3"
              castShadow
              receiveShadow
              geometry={nodes.Camping_3.geometry}
              material={materials["World ap"]}
              position={[76.89, -73.44, -2.12]}
              rotation={[-1.06, -0.87, -0.07]}
            />
            <mesh
              name="Camping_4"
              castShadow
              receiveShadow
              geometry={nodes.Camping_4.geometry}
              material={materials["World ap"]}
              position={[6.78, -113.63, 6.59]}
              rotation={[-1.46, -0.15, -0.51]}
            />
          </group>
          <group name="City" position={[-25.9, 1.93, 21.97]}>
            <group
              name="Australia_city"
              position={[64.4, 68.19, 55.14]}
              rotation={[0.75, -0.43, -1.6]}
            >
              <mesh
                name="House_7_18_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_5.geometry}
                material={materials["World ap"]}
                position={[-0.66, -0.6, -0.18]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_19_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_4.geometry}
                material={materials["World ap"]}
                position={[-0.95, -2.76, -1.29]}
                rotation={[-0.08, 1.39, -1.3]}
              />
              <mesh
                name="House_7_1_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_6.geometry}
                material={materials["World ap"]}
                position={[-0.27, -3.42, 1.36]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_26_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_4.geometry}
                material={materials["World ap"]}
                position={[-0.88, -0.84, -2.88]}
                rotation={[0.51, 1.2, -1.64]}
              />
              <mesh
                name="House_7_5_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_8.geometry}
                material={materials["World ap"]}
                position={[0.62, -2.11, -4.45]}
                rotation={[1.2, 1.26, -2.35]}
              />
              <mesh
                name="House_7_9_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_9_5.geometry}
                material={materials["World ap"]}
                position={[-0.7, -1.32, 1.83]}
                rotation={[1.2, 1.26, -2.35]}
              />
            </group>
            <group
              name="Australia_city_2"
              position={[99, 43.49, 43.63]}
              rotation={[0.75, -0.43, -2.28]}
            >
              <mesh
                name="House_7_10_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_8.geometry}
                material={materials["World ap"]}
                position={[-0.7, -1.32, 1.83]}
                rotation={[1.2, 1.26, -2.35]}
              />
              <mesh
                name="House_7_15_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_4.geometry}
                material={materials["World ap"]}
                position={[-0.52, 0.86, 2.35]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_18_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_6.geometry}
                material={materials["World ap"]}
                position={[-0.66, -0.6, -0.18]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_19_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_5.geometry}
                material={materials["World ap"]}
                position={[-0.51, -2.76, -1.21]}
                rotation={[-0.08, 1.39, -1.3]}
              />
              <mesh
                name="House_7_1_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_7.geometry}
                material={materials["World ap"]}
                position={[-0.27, -3.42, 1.36]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_26_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_5.geometry}
                material={materials["World ap"]}
                position={[0.91, -1.19, -2.27]}
                rotation={[0.51, 1.2, -1.64]}
              />
              <mesh
                name="House_7_3_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_9.geometry}
                material={materials["World ap"]}
                position={[-1.15, -2.08, 3.65]}
                rotation={[1.2, 1.26, -2.35]}
              />
              <mesh
                name="House_7_4_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_9.geometry}
                material={materials["World ap"]}
                position={[-0.91, 0.43, 4.5]}
                rotation={[1.2, 1.26, -2.12]}
              />
              <mesh
                name="House_7_5_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_9.geometry}
                material={materials["World ap"]}
                position={[-0.18, -5.1, -0.85]}
                rotation={[1.2, 1.26, -2.35]}
              />
            </group>
            <group
              name="Australia_city_3"
              position={[64.55, 47.98, 71.37]}
              rotation={[1.23, -0.7, -1.41]}
            >
              <mesh
                name="House_7_11_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_11_5.geometry}
                material={materials["World ap"]}
                position={[-0.7, -1.32, 1.83]}
                rotation={[1.2, 1.26, -2.35]}
              />
              <mesh
                name="House_7_13_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_4.geometry}
                material={materials["World ap"]}
                position={[-0.02, 2.89, 3.32]}
                rotation={[1.2, 1.26, -2.35]}
              />
              <mesh
                name="House_7_15_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_5.geometry}
                material={materials["World ap"]}
                position={[-0.52, 0.86, 2.35]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_17_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_5.geometry}
                material={materials["World ap"]}
                position={[0.07, 2.09, 0.49]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_18_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_7.geometry}
                material={materials["World ap"]}
                position={[-0.66, -0.6, -0.18]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_19_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_6.geometry}
                material={materials["World ap"]}
                position={[-0.51, -2.76, -1.21]}
                rotation={[-0.08, 1.39, -1.3]}
              />
              <mesh
                name="House_7_1_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_8.geometry}
                material={materials["World ap"]}
                position={[-0.27, -3.42, 1.36]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_26_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_6.geometry}
                material={materials["World ap"]}
                position={[0.91, -1.19, -2.27]}
                rotation={[0.51, 1.2, -1.64]}
              />
              <mesh
                name="House_7_3_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_10.geometry}
                material={materials["World ap"]}
                position={[-1.15, -2.08, 3.65]}
                rotation={[1.2, 1.26, -2.35]}
              />
              <mesh
                name="House_7_4_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_10.geometry}
                material={materials["World ap"]}
                position={[-0.91, 0.43, 4.5]}
                rotation={[1.2, 1.26, -2.12]}
              />
              <mesh
                name="House_7_5_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_10.geometry}
                material={materials["World ap"]}
                position={[0.62, -2.11, -4.45]}
                rotation={[1.2, 1.26, -2.35]}
              />
            </group>
            <group
              name="Brazilia"
              position={[-9.83, -66.82, 60.82]}
              rotation={[-2.61, 0.42, 0.51]}
            >
              <mesh
                name="House_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7.geometry}
                material={materials["World ap"]}
                position={[-0.41, -0.02, -1.06]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_10_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_2.geometry}
                material={materials["World ap"]}
                position={[-2.17, 6.89, 1.07]}
                rotation={[0.23, 0.02, 0.53]}
              />
              <mesh
                name="House_7_11_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_11_2.geometry}
                material={materials["World ap"]}
                position={[-3.33, 5.33, 0.73]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_1_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_2.geometry}
                material={materials["World ap"]}
                position={[-0.67, 8.05, 1.33]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_27_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_27_2.geometry}
                material={materials["World ap"]}
                position={[-2.69, 0.4, 0.23]}
                rotation={[0.12, 0.1, 0.67]}
              />
              <mesh
                name="House_7_29_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_29_2.geometry}
                material={materials["World ap"]}
                position={[0.09, 4.67, 1.52]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_2_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_2.geometry}
                material={materials["World ap"]}
                position={[2.6, 3.78, 0.14]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_31_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_31_2.geometry}
                material={materials["World ap"]}
                position={[-1.04, 3.14, 1.2]}
                rotation={[0.23, 0.02, 1.17]}
              />
              <mesh
                name="House_7_32_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_32_2.geometry}
                material={materials["World ap"]}
                position={[-2.1, 1.72, 0.89]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_3_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_2.geometry}
                material={materials["World ap"]}
                position={[1.24, 2.73, -0.1]}
                rotation={[0.23, 0.02, 0.53]}
              />
              <mesh
                name="House_7_4_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_2.geometry}
                material={materials["World ap"]}
                position={[0.18, 1.31, -0.4]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_5_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_2.geometry}
                material={materials["World ap"]}
                position={[-6.49, 4.32, 1.43]}
                rotation={[0.12, 0.1, 0.67]}
              />
              <mesh
                name="House_7_6_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_2.geometry}
                material={materials["World ap"]}
                position={[-3.43, 9.02, 2.85]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_7_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7_2.geometry}
                material={materials["World ap"]}
                position={[-4.68, 7.35, 2.49]}
                rotation={[0.23, 0.02, 1.17]}
              />
              <mesh
                name="House_7_8_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8_2.geometry}
                material={materials["World ap"]}
                position={[-5.84, 5.78, 2.16]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_9_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_9_2.geometry}
                material={materials["World ap"]}
                position={[-3.98, 3.87, 0.01]}
                rotation={[0.12, 0.1, 0.92]}
              />
            </group>
            <group
              name="Brazilia_1"
              position={[9.08, -96.25, 25.6]}
              rotation={[-2.01, -0.18, 0.29]}
            >
              <mesh
                name="House_7_1"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1.geometry}
                material={materials["World ap"]}
                position={[-0.67, 8.05, 1.33]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10.geometry}
                material={materials["World ap"]}
                position={[-2.17, 6.89, 1.07]}
                rotation={[0.23, 0.02, 0.53]}
              />
              <mesh
                name="House_7_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_11.geometry}
                material={materials["World ap"]}
                position={[-3.33, 5.33, 0.73]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2.geometry}
                material={materials["World ap"]}
                position={[2.6, 3.78, 0.14]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_27"
                castShadow
                receiveShadow
                geometry={nodes.House_7_27.geometry}
                material={materials["World ap"]}
                position={[-2.69, 0.4, 0.23]}
                rotation={[0.12, 0.1, 0.67]}
              />
              <mesh
                name="House_7_29"
                castShadow
                receiveShadow
                geometry={nodes.House_7_29.geometry}
                material={materials["World ap"]}
                position={[0.09, 4.67, 1.52]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3.geometry}
                material={materials["World ap"]}
                position={[1.24, 2.73, -0.1]}
                rotation={[0.23, 0.02, 0.53]}
              />
              <mesh
                name="House_7_31"
                castShadow
                receiveShadow
                geometry={nodes.House_7_31.geometry}
                material={materials["World ap"]}
                position={[-1.04, 3.14, 1.2]}
                rotation={[0.23, 0.02, 1.17]}
              />
              <mesh
                name="House_7_32"
                castShadow
                receiveShadow
                geometry={nodes.House_7_32.geometry}
                material={materials["World ap"]}
                position={[-2.1, 1.72, 0.89]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4.geometry}
                material={materials["World ap"]}
                position={[0.18, 1.31, -0.4]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5.geometry}
                material={materials["World ap"]}
                position={[-6.49, 4.32, 1.43]}
                rotation={[0.12, 0.1, 0.67]}
              />
              <mesh
                name="House_7_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6.geometry}
                material={materials["World ap"]}
                position={[-2.36, 8.71, 2.65]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7.geometry}
                material={materials["World ap"]}
                position={[-4.68, 7.35, 2.49]}
                rotation={[0.23, 0.02, 1.17]}
              />
              <mesh
                name="House_7_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8.geometry}
                material={materials["World ap"]}
                position={[-5.84, 5.78, 2.16]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_9.geometry}
                material={materials["World ap"]}
                position={[-3.98, 3.87, 0.01]}
                rotation={[0.12, 0.1, 0.92]}
              />
            </group>
            <group
              name="Cairo"
              position={[-85.05, -6.09, -7.99]}
              rotation={[-3, 1.52, 1.26]}
            >
              <mesh
                name="House_7_10_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_5.geometry}
                material={materials["World ap"]}
                position={[-0.77, 7.39, 2.36]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_11_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_11_4.geometry}
                material={materials["World ap"]}
                position={[-1.76, 11.41, 3.3]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_12_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_12_3.geometry}
                material={materials["World ap"]}
                position={[-10.04, 7.29, 2.36]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13.geometry}
                material={materials["World ap"]}
                position={[-10.03, 0.95, 0.99]}
                rotation={[0.12, 0.1, 0.45]}
              />
              <mesh
                name="House_7_14_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_14_2.geometry}
                material={materials["World ap"]}
                position={[-7.29, -0.05, 0.59]}
                rotation={[0.12, 0.1, 1.19]}
              />
              <mesh
                name="House_7_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15.geometry}
                material={materials["World ap"]}
                position={[-8.48, 3, 1.09]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_16"
                castShadow
                receiveShadow
                geometry={nodes.House_7_16.geometry}
                material={materials["World ap"]}
                position={[-5.49, -2.24, 0.14]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_17_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_2.geometry}
                material={materials["World ap"]}
                position={[-10.71, 4.64, 2.36]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_18_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_2.geometry}
                material={materials["World ap"]}
                position={[-7.93, 6.18, 1.44]}
                rotation={[0.12, 0.1, 0.09]}
              />
              <mesh
                name="House_7_19_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_2.geometry}
                material={materials["World ap"]}
                position={[-7.43, 9.01, 1.74]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_1_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_4.geometry}
                material={materials["World ap"]}
                position={[-1.35, 5.67, -0.55]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_20_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_20_2.geometry}
                material={materials["World ap"]}
                position={[-28.31, 9.72, 6.83]}
                rotation={[0.34, 0.34, 1.16]}
              />
              <mesh
                name="House_7_21_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_21_2.geometry}
                material={materials["World ap"]}
                position={[9.78, -0.12, 0.24]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_22_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_22_2.geometry}
                material={materials["World ap"]}
                position={[11.72, -1.76, -0.1]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_23_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_23_2.geometry}
                material={materials["World ap"]}
                position={[-2.45, 3.31, 0.11]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_24_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_24_2.geometry}
                material={materials["World ap"]}
                position={[-29.75, 5.87, 6.36]}
                rotation={[0.18, 0.4, 1.22]}
              />
              <mesh
                name="House_7_25_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_25_2.geometry}
                material={materials["World ap"]}
                position={[-4.78, 12.49, 2.96]}
                rotation={[0.15, 0.17, 0.48]}
              />
              <mesh
                name="House_7_26_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_2.geometry}
                material={materials["World ap"]}
                position={[-8.77, 9.86, 3.65]}
                rotation={[0.36, 0.15, 0.85]}
              />
              <mesh
                name="House_7_27_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_27_5.geometry}
                material={materials["World ap"]}
                position={[-3.84, 0.57, 0.33]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_2_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_7.geometry}
                material={materials["World ap"]}
                position={[-26.59, 9.18, 5.99]}
                rotation={[0.34, 0.34, 1.16]}
              />
              <mesh
                name="House_7_3_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_7.geometry}
                material={materials["World ap"]}
                position={[-3.79, 8.2, 1]}
                rotation={[0.23, 0.02, 1.28]}
              />
              <mesh
                name="House_7_4_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_7.geometry}
                material={materials["World ap"]}
                position={[-5.12, 4.81, 1.15]}
                rotation={[0.13, 0.19, 0.88]}
              />
              <mesh
                name="House_7_5_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_5.geometry}
                material={materials["World ap"]}
                position={[11.47, 1.79, 0.68]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_5_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_6.geometry}
                material={materials["World ap"]}
                position={[-27.92, 11.56, 6.44]}
                rotation={[0.34, 0.34, 1.16]}
              />
              <mesh
                name="House_7_6_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_4.geometry}
                material={materials["World ap"]}
                position={[-26.2, 11.02, 5.6]}
                rotation={[0.34, 0.34, 1.16]}
              />
              <mesh
                name="House_7_7_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7_3.geometry}
                material={materials["World ap"]}
                position={[-5.71, 1.98, 1.22]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_8_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8_4.geometry}
                material={materials["World ap"]}
                position={[-29.15, 7.68, 6.42]}
                rotation={[0.18, 0.4, 1.22]}
              />
              <mesh
                name="House_7_9_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_9_4.geometry}
                material={materials["World ap"]}
                position={[0.06, 9.4, 3.52]}
                rotation={[0.23, 0.02, 0.91]}
              />
            </group>
            <group
              name="Chili"
              position={[26.93, -63.74, 68.05]}
              rotation={[-2.81, -0.35, 0]}
            >
              <mesh
                name="House_7_27_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_27_3.geometry}
                material={materials["World ap"]}
                position={[-3.84, 0.57, 0.33]}
                rotation={[0.12, 0.1, 0.67]}
              />
              <mesh
                name="House_7_29_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_29_3.geometry}
                material={materials["World ap"]}
                position={[0.12, 6.67, 2.18]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_2_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_3.geometry}
                material={materials["World ap"]}
                position={[3.72, 5.4, 0.2]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_2_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_4.geometry}
                material={materials["World ap"]}
                position={[-0.58, -0.02, -1.52]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_31_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_31_3.geometry}
                material={materials["World ap"]}
                position={[-1.49, 4.49, 1.71]}
                rotation={[0.23, 0.02, 1.17]}
              />
              <mesh
                name="House_7_32_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_32_3.geometry}
                material={materials["World ap"]}
                position={[-3, 2.46, 1.27]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_3_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_3.geometry}
                material={materials["World ap"]}
                position={[1.77, 3.9, -0.14]}
                rotation={[0.23, 0.02, 0.53]}
              />
              <mesh
                name="House_7_4_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_3.geometry}
                material={materials["World ap"]}
                position={[0.26, 1.87, -0.58]}
                rotation={[0.23, 0.02, 0.94]}
              />
            </group>
            <group
              name="City_2"
              position={[-75.22, 40.44, -33.8]}
              rotation={[1.54, 1.08, 2.1]}
            >
              <mesh
                name="House_7_10_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_10.geometry}
                material={materials["World ap"]}
                position={[6.9, 3.84, 1.51]}
                rotation={[0.23, 0.02, 0.64]}
              />
              <mesh
                name="House_7_11_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_11_7.geometry}
                material={materials["World ap"]}
                position={[9.64, -3.32, 0.53]}
                rotation={[0.19, -0.07, 0.9]}
              />
              <mesh
                name="House_7_12_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_12_8.geometry}
                material={materials["World ap"]}
                position={[0.38, -6.62, 0.8]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_13_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_14.geometry}
                material={materials["World ap"]}
                position={[-7.58, -2.28, 1.02]}
                rotation={[0.09, 0.2, 1.24]}
              />
              <mesh
                name="House_7_14_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_14_6.geometry}
                material={materials["World ap"]}
                position={[-2.27, -6.52, 0.98]}
                rotation={[0.05, 0.28, 0.89]}
              />
              <mesh
                name="House_7_15_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_15.geometry}
                material={materials["World ap"]}
                position={[-9.47, -1.7, 1.43]}
                rotation={[0.09, 0.2, 1.57]}
              />
              <mesh
                name="House_7_16_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_16_5.geometry}
                material={materials["World ap"]}
                position={[-11.37, -1.67, 1.98]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_17_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_14.geometry}
                material={materials["World ap"]}
                position={[-4.7, -1.37, 0.67]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_18_17"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_17.geometry}
                material={materials["World ap"]}
                position={[-8, 13.34, 5.15]}
                rotation={[0.07, 0.03, 1.61]}
              />
              <mesh
                name="House_7_19_16"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_16.geometry}
                material={materials["World ap"]}
                position={[-9.84, 15.13, 5.26]}
                rotation={[0.19, 0.03, 1.63]}
              />
              <mesh
                name="House_7_1_17"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_17.geometry}
                material={materials["World ap"]}
                position={[8.65, 10.06, 1.74]}
                rotation={[0.41, -0.12, 0.92]}
              />
              <mesh
                name="House_7_20_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_20_5.geometry}
                material={materials["World ap"]}
                position={[-22.08, 7.69, 5.21]}
                rotation={[0.29, 0.18, 0.96]}
              />
              <mesh
                name="House_7_20_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_20_6.geometry}
                material={materials["World ap"]}
                position={[-8.1, 14.99, 5.26]}
                rotation={[0.19, 0.03, 1.6]}
              />
              <mesh
                name="House_7_21_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_21_4.geometry}
                material={materials["World ap"]}
                position={[10.85, 7.43, 1.68]}
                rotation={[0.35, -0.19, 0.88]}
              />
              <mesh
                name="House_7_22_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_22_3.geometry}
                material={materials["World ap"]}
                position={[-3.32, -8.66, 1.6]}
                rotation={[0.06, 0.06, 0.86]}
              />
              <mesh
                name="House_7_23_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_23_4.geometry}
                material={materials["World ap"]}
                position={[-0.63, -8.66, -0.85]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_24_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_24_4.geometry}
                material={materials["World ap"]}
                position={[5.4, 12.15, 3.33]}
                rotation={[0.47, 0.04, 0.92]}
              />
              <mesh
                name="House_7_27_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_27_8.geometry}
                material={materials["World ap"]}
                position={[-23.32, 5.62, 5.13]}
                rotation={[0.19, 0.25, 0.98]}
              />
              <mesh
                name="House_7_29_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_29_5.geometry}
                material={materials["World ap"]}
                position={[12.3, 5.45, 0.5]}
                rotation={[0.52, -0.19, 0.97]}
              />
              <mesh
                name="House_7_2_16"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_16.geometry}
                material={materials["World ap"]}
                position={[6.19, 7.18, 0.56]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_30"
                castShadow
                receiveShadow
                geometry={nodes.House_7_30.geometry}
                material={materials["World ap"]}
                position={[16.9, 3.18, 0.83]}
                rotation={[0.55, -0.37, 0.91]}
              />
              <mesh
                name="House_7_31_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_31_6.geometry}
                material={materials["World ap"]}
                position={[10.59, 2.77, 0.94]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_32_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_32_6.geometry}
                material={materials["World ap"]}
                position={[-23.98, 9.24, 5.89]}
                rotation={[0.3, 0.18, 0.99]}
              />
              <mesh
                name="House_7_3_18"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_18.geometry}
                material={materials["World ap"]}
                position={[9.32, 5.68, 0.38]}
                rotation={[0.23, 0.02, 0.6]}
              />
              <mesh
                name="House_7_4_18"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_18.geometry}
                material={materials["World ap"]}
                position={[8.36, -0.28, -0.67]}
                rotation={[0.11, 0.1, 1.33]}
              />
              <mesh
                name="House_7_5_16"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_16.geometry}
                material={materials["World ap"]}
                position={[13.19, 1.07, -0.57]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_6_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_11.geometry}
                material={materials["World ap"]}
                position={[4.03, 10.41, 2.96]}
                rotation={[0.23, 0.02, 0.81]}
              />
              <mesh
                name="House_7_7_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7_10.geometry}
                material={materials["World ap"]}
                position={[13.93, 3.32, 0.05]}
                rotation={[0.44, -0.21, 1.06]}
              />
              <mesh
                name="House_7_8_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8_11.geometry}
                material={materials["World ap"]}
                position={[-3.84, -11.12, 1.26]}
                rotation={[0.09, 0.2, 0.92]}
              />
              <mesh
                name="House_7_9_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_9_7.geometry}
                material={materials["World ap"]}
                position={[12.45, -2.16, 0.96]}
                rotation={[0.19, -0.07, 0.9]}
              />
            </group>
            <group
              name="Deli"
              position={[-10.27, 94.67, 29.4]}
              rotation={[0.03, 0.63, 2.32]}
            >
              <mesh
                name="House_7_13_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_12.geometry}
                material={materials["World ap"]}
                position={[-1.15, 5.6, 3]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_15_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_13.geometry}
                material={materials["World ap"]}
                position={[-1.34, 1.79, 5.74]}
                rotation={[0.16, 1.4, -1.53]}
              />
              <mesh
                name="House_7_17_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_12.geometry}
                material={materials["World ap"]}
                position={[0.74, 3.37, -0.09]}
                rotation={[-0.24, 1.38, -1.14]}
              />
              <mesh
                name="House_7_18_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_14.geometry}
                material={materials["World ap"]}
                position={[-1.06, -0.97, -1.29]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_18_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_15.geometry}
                material={materials["World ap"]}
                position={[-1.6, -2.03, 1.85]}
                rotation={[0.73, 1.34, -1.9]}
              />
              <mesh
                name="House_7_19_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_13.geometry}
                material={materials["World ap"]}
                position={[-0.82, -4.41, -1.94]}
                rotation={[-0.08, 1.39, -1.3]}
              />
              <mesh
                name="House_7_1_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_15.geometry}
                material={materials["World ap"]}
                position={[-1.62, -5.1, 1.03]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_26_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_13.geometry}
                material={materials["World ap"]}
                position={[0.32, -1.02, -5.88]}
                rotation={[0.62, 1.43, -1.75]}
              />
              <mesh
                name="House_7_2_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_15.geometry}
                material={materials["World ap"]}
                position={[-2.87, -3.09, 4.42]}
                rotation={[0.48, 1.35, -1.65]}
              />
              <mesh
                name="House_7_3_17"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_17.geometry}
                material={materials["World ap"]}
                position={[-1.88, 6.23, 5.4]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_4_17"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_17.geometry}
                material={materials["World ap"]}
                position={[-0.41, 3.61, -4.92]}
                rotation={[0.62, 1.43, -1.75]}
              />
            </group>
            <group
              name="Deli_1"
              position={[-18.48, 100.98, -12.16]}
              rotation={[-0.31, 0.36, 2.27]}
            >
              <mesh
                name="House_7_13_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_11.geometry}
                material={materials["World ap"]}
                position={[-1.15, 5.6, 3]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_15_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_12.geometry}
                material={materials["World ap"]}
                position={[-1.34, 1.79, 5.74]}
                rotation={[0.16, 1.4, -1.53]}
              />
              <mesh
                name="House_7_17_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_10.geometry}
                material={materials["World ap"]}
                position={[0.74, 3.37, -0.09]}
                rotation={[-0.24, 1.38, -1.14]}
              />
              <mesh
                name="House_7_17_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_11.geometry}
                material={materials["World ap"]}
                position={[-1.6, -2.03, 1.85]}
                rotation={[0.73, 1.34, -1.9]}
              />
              <mesh
                name="House_7_18_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_13.geometry}
                material={materials["World ap"]}
                position={[-1.06, -0.97, -1.29]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_19_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_12.geometry}
                material={materials["World ap"]}
                position={[-0.82, -4.41, -1.94]}
                rotation={[-0.08, 1.39, -1.3]}
              />
              <mesh
                name="House_7_1_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_14.geometry}
                material={materials["World ap"]}
                position={[-1.62, -5.1, 1.03]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_26_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_12.geometry}
                material={materials["World ap"]}
                position={[0.32, -1.02, -5.88]}
                rotation={[0.62, 1.43, -1.75]}
              />
              <mesh
                name="House_7_2_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_14.geometry}
                material={materials["World ap"]}
                position={[-2.87, -3.09, 4.42]}
                rotation={[0.48, 1.35, -1.65]}
              />
              <mesh
                name="House_7_3_16"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_16.geometry}
                material={materials["World ap"]}
                position={[-1.88, 6.23, 5.4]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_4_16"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_16.geometry}
                material={materials["World ap"]}
                position={[-0.41, 3.61, -4.92]}
                rotation={[0.62, 1.43, -1.75]}
              />
            </group>
            <group
              name="Hongkong"
              position={[42.91, 106.08, 2.6]}
              rotation={[0.01, 0.36, 1.62]}
            >
              <mesh
                name="House_7_13_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_10.geometry}
                material={materials["World ap"]}
                position={[-1.15, 5.6, 3]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_15_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_11.geometry}
                material={materials["World ap"]}
                position={[-1.34, 1.79, 5.74]}
                rotation={[0.16, 1.4, -1.53]}
              />
              <mesh
                name="House_7_16_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_16_4.geometry}
                material={materials["World ap"]}
                position={[-1.6, -2.03, 1.85]}
                rotation={[0.73, 1.34, -1.9]}
              />
              <mesh
                name="House_7_17_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_9.geometry}
                material={materials["World ap"]}
                position={[0.74, 3.37, -0.09]}
                rotation={[-0.24, 1.38, -1.14]}
              />
              <mesh
                name="House_7_18_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_12.geometry}
                material={materials["World ap"]}
                position={[-1.06, -0.97, -1.29]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_19_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_11.geometry}
                material={materials["World ap"]}
                position={[-0.82, -4.41, -1.94]}
                rotation={[-0.08, 1.39, -1.3]}
              />
              <mesh
                name="House_7_1_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_13.geometry}
                material={materials["World ap"]}
                position={[-1.62, -5.1, 1.03]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_26_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_11.geometry}
                material={materials["World ap"]}
                position={[0.32, -1.02, -5.88]}
                rotation={[0.62, 1.43, -1.75]}
              />
              <mesh
                name="House_7_2_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_13.geometry}
                material={materials["World ap"]}
                position={[-2.87, -3.09, 4.42]}
                rotation={[0.48, 1.35, -1.65]}
              />
              <mesh
                name="House_7_3_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_15.geometry}
                material={materials["World ap"]}
                position={[-1.88, 6.23, 5.4]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_4_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_15.geometry}
                material={materials["World ap"]}
                position={[-0.41, 3.61, -4.92]}
                rotation={[0.62, 1.43, -1.75]}
              />
              <mesh
                name="House_7_5_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_15.geometry}
                material={materials["World ap"]}
                position={[-2.59, -8.62, 0.15]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_6_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_10.geometry}
                material={materials["World ap"]}
                position={[-1.18, -8, -4.04]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_7_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7_9.geometry}
                material={materials["World ap"]}
                position={[0.74, 8.31, 0.99]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_8_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8_10.geometry}
                material={materials["World ap"]}
                position={[-3.56, -8.56, 5.01]}
                rotation={[0.16, 1.34, -1.64]}
              />
            </group>
            <group
              name="Hongkong_1"
              position={[59.44, 101.97, -39.92]}
              rotation={[-2.92, -0.27, -1.49]}
            >
              <mesh
                name="House_7_13_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_9.geometry}
                material={materials["World ap"]}
                position={[-1.15, 5.6, 3]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_15_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_10.geometry}
                material={materials["World ap"]}
                position={[-1.6, -2.03, 1.85]}
                rotation={[0.73, 1.34, -1.9]}
              />
              <mesh
                name="House_7_15_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_9.geometry}
                material={materials["World ap"]}
                position={[-1.34, 1.79, 5.74]}
                rotation={[0.16, 1.4, -1.53]}
              />
              <mesh
                name="House_7_17_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_8.geometry}
                material={materials["World ap"]}
                position={[0.74, 3.37, -0.09]}
                rotation={[-0.24, 1.38, -1.14]}
              />
              <mesh
                name="House_7_18_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_11.geometry}
                material={materials["World ap"]}
                position={[-1.06, -0.97, -1.29]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_19_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_10.geometry}
                material={materials["World ap"]}
                position={[-0.82, -4.41, -1.94]}
                rotation={[-0.08, 1.39, -1.3]}
              />
              <mesh
                name="House_7_1_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_12.geometry}
                material={materials["World ap"]}
                position={[-1.62, -5.1, 1.03]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_26_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_10.geometry}
                material={materials["World ap"]}
                position={[0.32, -1.02, -5.88]}
                rotation={[0.62, 1.43, -1.75]}
              />
              <mesh
                name="House_7_2_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_12.geometry}
                material={materials["World ap"]}
                position={[-2.87, -3.09, 4.42]}
                rotation={[0.48, 1.35, -1.65]}
              />
              <mesh
                name="House_7_3_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_14.geometry}
                material={materials["World ap"]}
                position={[-1.88, 6.23, 5.4]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_4_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_14.geometry}
                material={materials["World ap"]}
                position={[-0.41, 3.61, -4.92]}
                rotation={[0.62, 1.43, -1.75]}
              />
              <mesh
                name="House_7_5_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_14.geometry}
                material={materials["World ap"]}
                position={[-2.59, -8.62, 0.15]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_6_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_9.geometry}
                material={materials["World ap"]}
                position={[-1.18, -8, -4.04]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_7_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7_8.geometry}
                material={materials["World ap"]}
                position={[0.74, 8.31, 0.99]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_8_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8_9.geometry}
                material={materials["World ap"]}
                position={[-3.56, -8.56, 5.01]}
                rotation={[0.16, 1.34, -1.64]}
              />
            </group>
            <group
              name="Istanbul"
              position={[-77.37, 16.86, -46.76]}
              rotation={[0, 0, 0.15]}
            >
              <mesh
                name="House_7_13_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_13.geometry}
                material={materials["World ap"]}
                position={[0.16, 3.19, 1.97]}
                rotation={[1.2, 1.26, -2.35]}
              />
              <mesh
                name="House_7_15_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_14.geometry}
                material={materials["World ap"]}
                position={[-0.52, 0.86, 1.73]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_17_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_13.geometry}
                material={materials["World ap"]}
                position={[0.07, 2.09, -0.13]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_18_16"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_16.geometry}
                material={materials["World ap"]}
                position={[-0.66, -0.6, -0.8]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_19_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_14.geometry}
                material={materials["World ap"]}
                position={[-0.51, -2.76, -1.21]}
                rotation={[-0.08, 1.39, -1.3]}
              />
              <mesh
                name="House_7_19_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_15.geometry}
                material={materials["World ap"]}
                position={[-0.7, -1.32, 1.21]}
                rotation={[1.2, 1.26, -2.35]}
              />
              <mesh
                name="House_7_1_16"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_16.geometry}
                material={materials["World ap"]}
                position={[-0.27, -3.42, 0.73]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_26_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_14.geometry}
                material={materials["World ap"]}
                position={[0.91, -1.19, -2.58]}
                rotation={[0.51, 1.2, -1.64]}
              />
            </group>
            <group
              name="Mexica"
              position={[88.46, -81.16, -3.66]}
              rotation={[-1.78, -0.8, 0.11]}
            >
              <mesh
                name="House_7_10_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_12.geometry}
                material={materials["World ap"]}
                position={[2.37, 8.31, 2.51]}
                rotation={[0.23, 0.02, 0.64]}
              />
              <mesh
                name="House_7_12_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_12_10.geometry}
                material={materials["World ap"]}
                position={[-6.33, -2.86, 0.72]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_14_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_14_8.geometry}
                material={materials["World ap"]}
                position={[-5.74, -0.37, 0.4]}
                rotation={[-0.03, 0.07, 0.89]}
              />
              <mesh
                name="House_7_22_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_22_4.geometry}
                material={materials["World ap"]}
                position={[-0.58, -0.02, -1.52]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_27_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_27_10.geometry}
                material={materials["World ap"]}
                position={[-3.84, 0.57, 0.33]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_29_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_29_6.geometry}
                material={materials["World ap"]}
                position={[0.12, 6.67, 2.18]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_2_18"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_18.geometry}
                material={materials["World ap"]}
                position={[5.17, 5.89, 0.29]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_30_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_30_2.geometry}
                material={materials["World ap"]}
                position={[-1.47, 8.75, 2.69]}
                rotation={[0.23, 0.02, 0.84]}
              />
              <mesh
                name="House_7_31_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_31_8.geometry}
                material={materials["World ap"]}
                position={[-1.49, 4.49, 1.71]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_32_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_32_8.geometry}
                material={materials["World ap"]}
                position={[-3, 2.46, 1.27]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_3_20"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_20.geometry}
                material={materials["World ap"]}
                position={[1.77, 3.9, -0.14]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_4_20"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_20.geometry}
                material={materials["World ap"]}
                position={[0.26, 1.87, -0.58]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_6_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_13.geometry}
                material={materials["World ap"]}
                position={[4.03, 10.41, 2.96]}
                rotation={[0.23, 0.02, 0.81]}
              />
              <mesh
                name="House_7_7_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7_11.geometry}
                material={materials["World ap"]}
                position={[2.13, 11.83, 3.32]}
                rotation={[0.23, 0.02, 1.04]}
              />
            </group>
            <group
              name="Mexica_1"
              position={[63.77, -94.39, -37.79]}
              rotation={[-1.26, -0.61, 1.78]}
            >
              <mesh
                name="House_7_10_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_13.geometry}
                material={materials["World ap"]}
                position={[2.37, 8.31, 2.51]}
                rotation={[0.23, 0.02, 0.64]}
              />
              <mesh
                name="House_7_12_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_12_11.geometry}
                material={materials["World ap"]}
                position={[-6.33, -2.86, 0.72]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_14_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_14_9.geometry}
                material={materials["World ap"]}
                position={[-5.74, -0.37, 0.4]}
                rotation={[-0.03, 0.07, 0.89]}
              />
              <mesh
                name="House_7_23_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_23_6.geometry}
                material={materials["World ap"]}
                position={[-0.58, -0.02, -1.52]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_27_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_27_11.geometry}
                material={materials["World ap"]}
                position={[-3.84, 0.57, 0.33]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_29_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_29_7.geometry}
                material={materials["World ap"]}
                position={[0.12, 6.67, 2.18]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_2_19"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_19.geometry}
                material={materials["World ap"]}
                position={[5.17, 5.89, 0.29]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_30_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_30_3.geometry}
                material={materials["World ap"]}
                position={[-1.47, 8.75, 2.69]}
                rotation={[0.23, 0.02, 0.84]}
              />
              <mesh
                name="House_7_31_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_31_9.geometry}
                material={materials["World ap"]}
                position={[-1.49, 4.49, 1.71]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_32_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_32_9.geometry}
                material={materials["World ap"]}
                position={[-3, 2.46, 1.27]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_3_21"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_21.geometry}
                material={materials["World ap"]}
                position={[1.77, 3.9, -0.14]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_4_21"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_21.geometry}
                material={materials["World ap"]}
                position={[0.26, 1.87, -0.58]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_6_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_14.geometry}
                material={materials["World ap"]}
                position={[4.03, 10.41, 2.96]}
                rotation={[0.23, 0.02, 0.81]}
              />
              <mesh
                name="House_7_7_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7_12.geometry}
                material={materials["World ap"]}
                position={[2.13, 11.83, 3.32]}
                rotation={[0.23, 0.02, 1.04]}
              />
            </group>
            <group
              name="Milano"
              position={[-76.71, -0.48, -48.34]}
              rotation={[0.51, 0.18, 0]}
            >
              <mesh
                name="House_7_28_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_28_2.geometry}
                material={materials["World ap"]}
                position={[-1.92, -6.93, 4.93]}
                rotation={[-0.37, 1.03, -1.63]}
              />
              <mesh
                name="House_7_33_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_33_2.geometry}
                material={materials["World ap"]}
                position={[-0.92, -6.65, 2.72]}
                rotation={[-0.42, 1.05, -1.52]}
              />
              <mesh
                name="House_7_35_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_35_2.geometry}
                material={materials["World ap"]}
                position={[-1.94, -5.42, 3.3]}
                rotation={[-0.25, 1.02, -1.73]}
              />
              <mesh
                name="House_7_36_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_36_2.geometry}
                material={materials["World ap"]}
                position={[-2.16, -3.6, 3.2]}
                rotation={[-0.25, 1.02, -1.73]}
              />
              <mesh
                name="House_7_37_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_37_2.geometry}
                material={materials["World ap"]}
                position={[-0.1, -6.07, 0.77]}
                rotation={[-0.58, 1.04, -1.72]}
              />
              <mesh
                name="House_7_5_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_7.geometry}
                material={materials["World ap"]}
                position={[-0.87, -4.03, 1.36]}
                rotation={[-0.42, 1.05, -1.14]}
              />
              <mesh
                name="House_7_7_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7_5.geometry}
                material={materials["World ap"]}
                position={[-1, -5.26, 2.05]}
                rotation={[-0.35, 0.98, -1.72]}
              />
            </group>
            <group
              name="Milano_1"
              position={[-77.15, -1.53, -40.03]}
              rotation={[0.51, 0.45, 0]}
            >
              <mesh
                name="House_7_28"
                castShadow
                receiveShadow
                geometry={nodes.House_7_28.geometry}
                material={materials["World ap"]}
                position={[-2.89, -5.43, 1.59]}
                rotation={[-0.37, 1.03, -1.63]}
              />
              <mesh
                name="House_7_33"
                castShadow
                receiveShadow
                geometry={nodes.House_7_33.geometry}
                material={materials["World ap"]}
                position={[-2.14, -6.65, 2.12]}
                rotation={[-0.21, 1.21, -2.2]}
              />
              <mesh
                name="House_7_35"
                castShadow
                receiveShadow
                geometry={nodes.House_7_35.geometry}
                material={materials["World ap"]}
                position={[-1.94, -5.42, 3.3]}
                rotation={[-0.09, 1.29, -1.88]}
              />
              <mesh
                name="House_7_36"
                castShadow
                receiveShadow
                geometry={nodes.House_7_36.geometry}
                material={materials["World ap"]}
                position={[-1.87, -3.97, 2.6]}
                rotation={[-0.25, 1.02, -1.73]}
              />
              <mesh
                name="House_7_37"
                castShadow
                receiveShadow
                geometry={nodes.House_7_37.geometry}
                material={materials["World ap"]}
                position={[-1.16, -5.76, 0.87]}
                rotation={[-0.58, 1.04, -1.38]}
              />
              <mesh
                name="House_7_5_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_3.geometry}
                material={materials["World ap"]}
                position={[-1.66, -7, 1.1]}
                rotation={[-0.22, 1.05, -1.69]}
              />
            </group>
            <group
              name="Moscow"
              position={[-68.07, 25.2, -67.45]}
              rotation={[0.65, 0.98, 2.95]}
            >
              <mesh
                name="House_7_10_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_11.geometry}
                material={materials["World ap"]}
                position={[3.34, 7.05, 2.2]}
                rotation={[0.23, 0.02, 0.64]}
              />
              <mesh
                name="House_7_11_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_11_8.geometry}
                material={materials["World ap"]}
                position={[9.06, -2.86, 0.58]}
                rotation={[0.19, -0.07, 0.9]}
              />
              <mesh
                name="House_7_12_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_12_9.geometry}
                material={materials["World ap"]}
                position={[-3.24, -3.89, 0.29]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_13_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_15.geometry}
                material={materials["World ap"]}
                position={[-13.82, 6.16, 4.26]}
                rotation={[0.12, 0.1, 1.12]}
              />
              <mesh
                name="House_7_14_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_14_7.geometry}
                material={materials["World ap"]}
                position={[-0.29, -3.99, -1.07]}
                rotation={[0.32, 0.05, 0.84]}
              />
              <mesh
                name="House_7_15_16"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_16.geometry}
                material={materials["World ap"]}
                position={[-11.98, -0.2, 2.11]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_16_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_16_6.geometry}
                material={materials["World ap"]}
                position={[-12.25, 1.99, 3.16]}
                rotation={[0.12, 0.1, 1.06]}
              />
              <mesh
                name="House_7_17_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_15.geometry}
                material={materials["World ap"]}
                position={[-10.69, 4.04, 3.27]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_18_18"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_18.geometry}
                material={materials["World ap"]}
                position={[-9.26, 5.99, 3.14]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_19_17"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_17.geometry}
                material={materials["World ap"]}
                position={[-7.66, 8.04, 3.47]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_1_18"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_18.geometry}
                material={materials["World ap"]}
                position={[7.16, 8.09, 2.08]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_20_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_20_7.geometry}
                material={materials["World ap"]}
                position={[-11.2, 7.77, 4.58]}
                rotation={[0.36, 0.15, 0.85]}
              />
              <mesh
                name="House_7_21_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_21_5.geometry}
                material={materials["World ap"]}
                position={[9.7, 6.12, 1.38]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_21_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_21_6.geometry}
                material={materials["World ap"]}
                position={[-16.6, 0.2, 2.56]}
                rotation={[0.22, 0.02, 0.91]}
              />
              <mesh
                name="House_7_23_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_23_5.geometry}
                material={materials["World ap"]}
                position={[7.21, -4.98, -0.92]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_24_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_24_5.geometry}
                material={materials["World ap"]}
                position={[9.76, 8.88, 2.49]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_25_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_25_5.geometry}
                material={materials["World ap"]}
                position={[-6.22, 10.03, 4.56]}
                rotation={[0.15, 0.17, 0.9]}
              />
              <mesh
                name="House_7_26_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_15.geometry}
                material={materials["World ap"]}
                position={[-10.69, 10.27, 5.71]}
                rotation={[0.36, 0.15, 1.15]}
              />
              <mesh
                name="House_7_27_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_27_9.geometry}
                material={materials["World ap"]}
                position={[-16.92, 2.98, 3.89]}
                rotation={[0.3, -0.04, 0.91]}
              />
              <mesh
                name="House_7_28_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_28_3.geometry}
                material={materials["World ap"]}
                position={[-7.14, 5.49, 3.07]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_2_17"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_17.geometry}
                material={materials["World ap"]}
                position={[5.77, 6.36, 2.68]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_31_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_31_7.geometry}
                material={materials["World ap"]}
                position={[11.4, 2.33, 0.96]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_32_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_32_7.geometry}
                material={materials["World ap"]}
                position={[-13.76, 4.51, 4.86]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_33_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_33_3.geometry}
                material={materials["World ap"]}
                position={[4.76, 5.08, 2.4]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_34"
                castShadow
                receiveShadow
                geometry={nodes.House_7_34.geometry}
                material={materials["World ap"]}
                position={[0.22, 6.37, 2.96]}
                rotation={[0.23, 0.09, 0.9]}
              />
              <mesh
                name="House_7_35_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_35_3.geometry}
                material={materials["World ap"]}
                position={[-1.08, 4.73, 2.7]}
                rotation={[0.23, 0.09, 0.9]}
              />
              <mesh
                name="House_7_3_19"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_19.geometry}
                material={materials["World ap"]}
                position={[7.88, 4.33, -0.13]}
                rotation={[0.23, 0.02, 0.6]}
              />
              <mesh
                name="House_7_4_19"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_19.geometry}
                material={materials["World ap"]}
                position={[5.23, -7.34, -0.35]}
                rotation={[0.11, 0.1, 1.33]}
              />
              <mesh
                name="House_7_5_17"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_17.geometry}
                material={materials["World ap"]}
                position={[12.86, 0.37, 1.08]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_6_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_12.geometry}
                material={materials["World ap"]}
                position={[5.07, 9.22, 2.66]}
                rotation={[0.23, 0.02, 0.81]}
              />
              <mesh
                name="House_7_8_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8_12.geometry}
                material={materials["World ap"]}
                position={[2.41, -5.72, -1.25]}
                rotation={[0.23, 0.09, 0.9]}
              />
              <mesh
                name="House_7_9_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_9_8.geometry}
                material={materials["World ap"]}
                position={[10.74, -0.8, 1.1]}
                rotation={[0.19, -0.07, 0.9]}
              />
            </group>
            <group
              name="Moscow_2"
              position={[-6.07, -101.04, -24]}
              rotation={[-1.75, 0.26, 0.05]}
            >
              <mesh
                name="House_4_2"
                castShadow
                receiveShadow
                geometry={nodes.House_4_2.geometry}
                material={materials["World ap"]}
                position={[-5.22, 4.5, 3.33]}
                rotation={[0.27, 0.08, -2.2]}
              />
              <mesh
                name="House_7_10_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_15.geometry}
                material={materials["World ap"]}
                position={[2.37, 8.31, 2.51]}
                rotation={[0.23, 0.02, 0.64]}
              />
              <mesh
                name="House_7_11_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_11_10.geometry}
                material={materials["World ap"]}
                position={[-1.76, 11.41, 3.3]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_12_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_12_13.geometry}
                material={materials["World ap"]}
                position={[-6.33, -2.86, 0.72]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_13_17"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_17.geometry}
                material={materials["World ap"]}
                position={[-10.03, 0.95, 0.99]}
                rotation={[0.12, 0.1, 1.12]}
              />
              <mesh
                name="House_7_14_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_14_11.geometry}
                material={materials["World ap"]}
                position={[-5.74, -0.37, 0.4]}
                rotation={[-0.03, 0.07, 0.89]}
              />
              <mesh
                name="House_7_15_18"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_18.geometry}
                material={materials["World ap"]}
                position={[-8.48, 3, 1.09]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_16_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_16_8.geometry}
                material={materials["World ap"]}
                position={[-12.27, 2.63, 1.42]}
                rotation={[0.12, 0.1, 1.06]}
              />
              <mesh
                name="House_7_17_17"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_17.geometry}
                material={materials["World ap"]}
                position={[-10.72, 4.68, 1.52]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_18_20"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_20.geometry}
                material={materials["World ap"]}
                position={[-8.98, 6.96, 1.64]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_19_19"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_19.geometry}
                material={materials["World ap"]}
                position={[-7.43, 9.01, 1.74]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_1_20"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_20.geometry}
                material={materials["World ap"]}
                position={[7.15, 8.4, 0.82]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_20_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_20_9.geometry}
                material={materials["World ap"]}
                position={[-11.85, 7.9, 3.43]}
                rotation={[0.36, 0.15, 0.85]}
              />
              <mesh
                name="House_7_21_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_21_8.geometry}
                material={materials["World ap"]}
                position={[9.78, -0.12, 0.24]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_22_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_22_6.geometry}
                material={materials["World ap"]}
                position={[11.72, -1.76, -0.1]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_23_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_23_8.geometry}
                material={materials["World ap"]}
                position={[8.16, -5.8, -1.02]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_25_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_25_7.geometry}
                material={materials["World ap"]}
                position={[-2.38, -3.14, -2.05]}
                rotation={[0.15, 0.17, 0.9]}
              />
              <mesh
                name="House_7_25_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_25_8.geometry}
                material={materials["World ap"]}
                position={[-4.78, 12.49, 2.96]}
                rotation={[0.15, 0.17, 0.9]}
              />
              <mesh
                name="House_7_26_17"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_17.geometry}
                material={materials["World ap"]}
                position={[-9.57, 10.48, 4.02]}
                rotation={[0.36, 0.15, 1.15]}
              />
              <mesh
                name="House_7_27_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_27_13.geometry}
                material={materials["World ap"]}
                position={[-3.84, 0.57, 0.33]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_28_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_28_5.geometry}
                material={materials["World ap"]}
                position={[1.42, -6.28, -3.34]}
                rotation={[0.23, 0.09, 0.9]}
              />
              <mesh
                name="House_7_29_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_29_9.geometry}
                material={materials["World ap"]}
                position={[0.12, 6.67, 2.18]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_2_21"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_21.geometry}
                material={materials["World ap"]}
                position={[4.9, 5.55, 0.21]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_30_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_30_5.geometry}
                material={materials["World ap"]}
                position={[-1.47, 8.75, 2.69]}
                rotation={[0.23, 0.02, 0.84]}
              />
              <mesh
                name="House_7_31_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_31_11.geometry}
                material={materials["World ap"]}
                position={[-1.49, 4.49, 1.71]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_32_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_32_11.geometry}
                material={materials["World ap"]}
                position={[-3, 2.46, 1.27]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_3_23"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_23.geometry}
                material={materials["World ap"]}
                position={[7.71, 3.45, -0.32]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_4_23"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_23.geometry}
                material={materials["World ap"]}
                position={[5.57, -8.76, -2.67]}
                rotation={[0.11, 0.1, 1.33]}
              />
              <mesh
                name="House_7_5_19"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_19.geometry}
                material={materials["World ap"]}
                position={[11.47, 1.79, 0.68]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_6_16"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_16.geometry}
                material={materials["World ap"]}
                position={[4.03, 10.41, 2.96]}
                rotation={[0.23, 0.02, 0.81]}
              />
              <mesh
                name="House_7_7_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7_14.geometry}
                material={materials["World ap"]}
                position={[2.13, 11.83, 3.32]}
                rotation={[0.23, 0.02, 1.04]}
              />
              <mesh
                name="House_7_8_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8_14.geometry}
                material={materials["World ap"]}
                position={[4.5, -2.4, -2.71]}
                rotation={[0.23, 0.09, 0.9]}
              />
              <mesh
                name="House_7_9_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_9_10.geometry}
                material={materials["World ap"]}
                position={[-0.11, 13.5, 3.75]}
                rotation={[0.23, 0.02, 0.91]}
              />
            </group>
            <group
              name="NY"
              position={[-6.07, -101.04, -24]}
              rotation={[-1.75, 0.26, 0.05]}
            >
              <mesh
                name="House_4"
                castShadow
                receiveShadow
                geometry={nodes.House_4.geometry}
                material={materials["World ap"]}
                position={[-5.22, 4.5, 3.33]}
                rotation={[0.27, 0.08, -2.2]}
              />
              <mesh
                name="House_7_10_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_14.geometry}
                material={materials["World ap"]}
                position={[2.37, 8.31, 2.51]}
                rotation={[0.23, 0.02, 0.64]}
              />
              <mesh
                name="House_7_11_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_11_9.geometry}
                material={materials["World ap"]}
                position={[-1.76, 11.41, 3.3]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_12_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_12_12.geometry}
                material={materials["World ap"]}
                position={[-6.33, -2.86, 0.72]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_13_16"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_16.geometry}
                material={materials["World ap"]}
                position={[-10.03, 0.95, 0.99]}
                rotation={[0.12, 0.1, 1.12]}
              />
              <mesh
                name="House_7_14_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_14_10.geometry}
                material={materials["World ap"]}
                position={[-5.74, -0.37, 0.4]}
                rotation={[-0.03, 0.07, 0.89]}
              />
              <mesh
                name="House_7_15_17"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_17.geometry}
                material={materials["World ap"]}
                position={[-8.48, 3, 1.09]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_16_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_16_7.geometry}
                material={materials["World ap"]}
                position={[-12.27, 2.63, 1.42]}
                rotation={[0.12, 0.1, 1.06]}
              />
              <mesh
                name="House_7_17_16"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_16.geometry}
                material={materials["World ap"]}
                position={[-10.72, 4.68, 1.52]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_18_19"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_19.geometry}
                material={materials["World ap"]}
                position={[-8.98, 6.96, 1.64]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_19_18"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_18.geometry}
                material={materials["World ap"]}
                position={[-7.43, 9.01, 1.74]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_1_19"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_19.geometry}
                material={materials["World ap"]}
                position={[7.15, 8.4, 0.82]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_20_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_20_8.geometry}
                material={materials["World ap"]}
                position={[-11.85, 7.9, 3.43]}
                rotation={[0.36, 0.15, 0.85]}
              />
              <mesh
                name="House_7_21_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_21_7.geometry}
                material={materials["World ap"]}
                position={[9.78, -0.12, 0.24]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_22_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_22_5.geometry}
                material={materials["World ap"]}
                position={[11.72, -1.76, -0.1]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_23_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_23_7.geometry}
                material={materials["World ap"]}
                position={[8.16, -5.8, -1.02]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_24_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_24_6.geometry}
                material={materials["World ap"]}
                position={[-2.38, -3.14, -2.05]}
                rotation={[0.15, 0.17, 0.9]}
              />
              <mesh
                name="House_7_25_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_25_6.geometry}
                material={materials["World ap"]}
                position={[-4.78, 12.49, 2.96]}
                rotation={[0.15, 0.17, 0.9]}
              />
              <mesh
                name="House_7_26_16"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_16.geometry}
                material={materials["World ap"]}
                position={[-9.57, 10.48, 4.02]}
                rotation={[0.36, 0.15, 1.15]}
              />
              <mesh
                name="House_7_27_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_27_12.geometry}
                material={materials["World ap"]}
                position={[-3.84, 0.57, 0.33]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_28_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_28_4.geometry}
                material={materials["World ap"]}
                position={[1.42, -6.28, -3.34]}
                rotation={[0.23, 0.09, 0.9]}
              />
              <mesh
                name="House_7_29_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_29_8.geometry}
                material={materials["World ap"]}
                position={[0.12, 6.67, 2.18]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_2_20"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_20.geometry}
                material={materials["World ap"]}
                position={[4.9, 5.55, 0.21]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_30_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_30_4.geometry}
                material={materials["World ap"]}
                position={[-1.47, 8.75, 2.69]}
                rotation={[0.23, 0.02, 0.84]}
              />
              <mesh
                name="House_7_31_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_31_10.geometry}
                material={materials["World ap"]}
                position={[-1.49, 4.49, 1.71]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_32_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_32_10.geometry}
                material={materials["World ap"]}
                position={[-3, 2.46, 1.27]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_3_22"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_22.geometry}
                material={materials["World ap"]}
                position={[7.71, 3.45, -0.32]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_4_22"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_22.geometry}
                material={materials["World ap"]}
                position={[5.57, -8.76, -2.67]}
                rotation={[0.11, 0.1, 1.33]}
              />
              <mesh
                name="House_7_5_18"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_18.geometry}
                material={materials["World ap"]}
                position={[11.47, 1.79, 0.68]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_6_15"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_15.geometry}
                material={materials["World ap"]}
                position={[4.03, 10.41, 2.96]}
                rotation={[0.23, 0.02, 0.81]}
              />
              <mesh
                name="House_7_7_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7_13.geometry}
                material={materials["World ap"]}
                position={[2.13, 11.83, 3.32]}
                rotation={[0.23, 0.02, 1.04]}
              />
              <mesh
                name="House_7_8_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8_13.geometry}
                material={materials["World ap"]}
                position={[4.5, -2.4, -2.71]}
                rotation={[0.23, 0.09, 0.9]}
              />
              <mesh
                name="House_7_9_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_9_9.geometry}
                material={materials["World ap"]}
                position={[-0.11, 13.5, 3.75]}
                rotation={[0.23, 0.02, 0.91]}
              />
            </group>
            <group
              name="Paris"
              position={[-70.65, -26.9, -56.6]}
              rotation={[-0.46, 1.13, -2.35]}
            >
              <mesh
                name="House_7_10_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_7.geometry}
                material={materials["World ap"]}
                position={[3.07, 8.82, 2.61]}
                rotation={[0.23, 0.02, 0.64]}
              />
              <mesh
                name="House_7_12_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_12_5.geometry}
                material={materials["World ap"]}
                position={[-4.87, -3, 1.53]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_13_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_3.geometry}
                material={materials["World ap"]}
                position={[-0.82, -2.77, 0.36]}
                rotation={[0.05, -0.09, 1.17]}
              />
              <mesh
                name="House_7_14_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_14_4.geometry}
                material={materials["World ap"]}
                position={[-3.46, -5.06, 0.49]}
                rotation={[0.32, 0.05, 0.84]}
              />
              <mesh
                name="House_7_15_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_3.geometry}
                material={materials["World ap"]}
                position={[0.62, -0.65, 0.59]}
                rotation={[0.05, -0.09, 0.98]}
              />
              <mesh
                name="House_7_17_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_4.geometry}
                material={materials["World ap"]}
                position={[-1.38, 0.81, 0.45]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_18_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_4.geometry}
                material={materials["World ap"]}
                position={[-3.72, 2.79, 0.92]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_19_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_3.geometry}
                material={materials["World ap"]}
                position={[-7.51, -2.48, 1.27]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_1_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_5.geometry}
                material={materials["World ap"]}
                position={[13.14, 9.95, 2.19]}
                rotation={[0.32, -0.1, 0.92]}
              />
              <mesh
                name="House_7_20_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_20_3.geometry}
                material={materials["World ap"]}
                position={[0.28, 2.01, 1.15]}
                rotation={[0.09, -0.15, 0.85]}
              />
              <mesh
                name="House_7_21_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_21_3.geometry}
                material={materials["World ap"]}
                position={[10.82, 7.3, 2.4]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_24_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_24_3.geometry}
                material={materials["World ap"]}
                position={[5.4, 12.15, 3.33]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_25_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_25_3.geometry}
                material={materials["World ap"]}
                position={[2.5, 11.78, 2.2]}
                rotation={[0.38, -0.01, 0.88]}
              />
              <mesh
                name="House_7_26_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_3.geometry}
                material={materials["World ap"]}
                position={[10.79, 13.97, 4.56]}
                rotation={[0.37, -0.04, 1.17]}
              />
              <mesh
                name="House_7_27_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_27_7.geometry}
                material={materials["World ap"]}
                position={[-7.47, 0.48, 0.32]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_2_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_8.geometry}
                material={materials["World ap"]}
                position={[5.83, 8.77, 0.93]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_31_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_31_5.geometry}
                material={materials["World ap"]}
                position={[10.88, 4.53, 2.11]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_32_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_32_5.geometry}
                material={materials["World ap"]}
                position={[-6.42, 2.71, 1.06]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_39"
                castShadow
                receiveShadow
                geometry={nodes.House_7_39.geometry}
                material={materials["World ap"]}
                position={[-4.87, 0.74, 0.57]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_40"
                castShadow
                receiveShadow
                geometry={nodes.House_7_40.geometry}
                material={materials["World ap"]}
                position={[-5.83, -1.27, 1.84]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_41"
                castShadow
                receiveShadow
                geometry={nodes.House_7_41.geometry}
                material={materials["World ap"]}
                position={[-1.8, 3.88, 1.97]}
                rotation={[0.14, -0.02, 0.91]}
              />
              <mesh
                name="House_7_6_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_6.geometry}
                material={materials["World ap"]}
                position={[4.39, 10.21, 2.23]}
                rotation={[0.23, 0.02, 0.81]}
              />
              <mesh
                name="House_7_8_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8_5.geometry}
                material={materials["World ap"]}
                position={[-5.37, -5.4, 0.54]}
                rotation={[0.14, -0.02, 0.91]}
              />
              <mesh
                name="House_7_8_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8_6.geometry}
                material={materials["World ap"]}
                position={[13.12, 13.01, 4.29]}
                rotation={[0.37, -0.04, 1.17]}
              />
            </group>
            <group
              name="Pekin"
              position={[80.18, 85.65, -53.44]}
              rotation={[-0.11, 0.45, 0.92]}
            >
              <mesh
                name="House_7_13_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_8.geometry}
                material={materials["World ap"]}
                position={[-1.37, 6.72, 3.61]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_14_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_14_5.geometry}
                material={materials["World ap"]}
                position={[-1.92, -2.44, 2.22]}
                rotation={[0.73, 1.34, -1.9]}
              />
              <mesh
                name="House_7_15_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_8.geometry}
                material={materials["World ap"]}
                position={[-1.61, 2.14, 6.88]}
                rotation={[0.16, 1.4, -1.53]}
              />
              <mesh
                name="House_7_17_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_7.geometry}
                material={materials["World ap"]}
                position={[0.88, 4.04, -0.11]}
                rotation={[-0.24, 1.38, -1.14]}
              />
              <mesh
                name="House_7_18_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_10.geometry}
                material={materials["World ap"]}
                position={[-1.28, -1.16, -1.54]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_19_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_9.geometry}
                material={materials["World ap"]}
                position={[-0.98, -5.3, -2.32]}
                rotation={[-0.08, 1.39, -1.3]}
              />
              <mesh
                name="House_7_1_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_11.geometry}
                material={materials["World ap"]}
                position={[-1.95, -6.12, 1.24]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_26_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_9.geometry}
                material={materials["World ap"]}
                position={[0.38, -1.23, -7.06]}
                rotation={[0.62, 1.43, -1.75]}
              />
              <mesh
                name="House_7_2_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_11.geometry}
                material={materials["World ap"]}
                position={[-3.44, -3.71, 5.3]}
                rotation={[0.48, 1.35, -1.65]}
              />
              <mesh
                name="House_7_3_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_13.geometry}
                material={materials["World ap"]}
                position={[-2.26, 7.48, 6.48]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_4_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_13.geometry}
                material={materials["World ap"]}
                position={[-0.5, 4.34, -5.91]}
                rotation={[0.62, 1.43, -1.75]}
              />
              <mesh
                name="House_7_5_13"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_13.geometry}
                material={materials["World ap"]}
                position={[-3.11, -10.35, 0.18]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_6_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_8.geometry}
                material={materials["World ap"]}
                position={[-1.41, -9.6, -4.85]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_7_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7_7.geometry}
                material={materials["World ap"]}
                position={[0.89, 9.97, 1.19]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_8_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8_8.geometry}
                material={materials["World ap"]}
                position={[-4.27, -10.27, 6.02]}
                rotation={[0.16, 1.34, -1.64]}
              />
            </group>
            <group
              name="PEru"
              position={[39.98, -84.22, 45.17]}
              rotation={[-2.45, -0.52, 0.12]}
            >
              <mesh
                name="House_7_10_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_3.geometry}
                material={materials["World ap"]}
                position={[2.37, 8.31, 2.51]}
                rotation={[0.23, 0.02, 0.64]}
              />
              <mesh
                name="House_7_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_12.geometry}
                material={materials["World ap"]}
                position={[-6.33, -2.86, 0.72]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_14"
                castShadow
                receiveShadow
                geometry={nodes.House_7_14.geometry}
                material={materials["World ap"]}
                position={[-5.74, -0.37, 0.4]}
                rotation={[-0.03, 0.07, 0.89]}
              />
              <mesh
                name="House_7_27_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_27_4.geometry}
                material={materials["World ap"]}
                position={[-3.84, 0.57, 0.33]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_29_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_29_4.geometry}
                material={materials["World ap"]}
                position={[0.12, 6.67, 2.18]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_2_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_5.geometry}
                material={materials["World ap"]}
                position={[5.17, 5.89, 0.29]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_31_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_31_4.geometry}
                material={materials["World ap"]}
                position={[-1.49, 4.49, 1.71]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_32_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_32_4.geometry}
                material={materials["World ap"]}
                position={[-3, 2.46, 1.27]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_3_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_4.geometry}
                material={materials["World ap"]}
                position={[-0.58, -0.02, -1.52]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_3_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_5.geometry}
                material={materials["World ap"]}
                position={[1.77, 3.9, -0.14]}
                rotation={[0.23, 0.02, 0.94]}
              />
              <mesh
                name="House_7_4_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_4.geometry}
                material={materials["World ap"]}
                position={[0.26, 1.87, -0.58]}
                rotation={[0.23, 0.02, 0.94]}
              />
            </group>
            <group
              name="Sydney"
              position={[86.72, 30.79, 62.49]}
              rotation={[1.01, -0.71, -1.9]}
            >
              <mesh
                name="House_7_12_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_12_6.geometry}
                material={materials["World ap"]}
                position={[-0.7, -1.32, 1.83]}
                rotation={[1.2, 1.26, -2.35]}
              />
              <mesh
                name="House_7_13_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_5.geometry}
                material={materials["World ap"]}
                position={[-0.02, 2.89, 3.32]}
                rotation={[1.2, 1.26, -2.35]}
              />
              <mesh
                name="House_7_15_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_6.geometry}
                material={materials["World ap"]}
                position={[-0.52, 0.86, 2.35]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_16_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_16_3.geometry}
                material={materials["World ap"]}
                position={[0.59, 3.96, 0.87]}
                rotation={[1.2, 1.26, -2.41]}
              />
              <mesh
                name="House_7_17_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_6.geometry}
                material={materials["World ap"]}
                position={[0.07, 2.09, 0.49]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_18_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_8.geometry}
                material={materials["World ap"]}
                position={[-0.66, -0.6, -0.18]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_19_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_7.geometry}
                material={materials["World ap"]}
                position={[-0.51, -2.76, -1.21]}
                rotation={[-0.08, 1.39, -1.3]}
              />
              <mesh
                name="House_7_1_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_9.geometry}
                material={materials["World ap"]}
                position={[-0.27, -3.42, 1.36]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_20_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_20_4.geometry}
                material={materials["World ap"]}
                position={[-0.5, 0.8, -2.84]}
                rotation={[0.51, 1.2, -1.94]}
              />
              <mesh
                name="House_7_25_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_25_4.geometry}
                material={materials["World ap"]}
                position={[-0.98, 2.68, -1.84]}
                rotation={[1.07, 1.19, -2.45]}
              />
              <mesh
                name="House_7_26_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_7.geometry}
                material={materials["World ap"]}
                position={[0.91, -1.19, -2.27]}
                rotation={[0.51, 1.2, -1.64]}
              />
              <mesh
                name="House_7_2_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_9.geometry}
                material={materials["World ap"]}
                position={[0.66, 4.69, -1.11]}
                rotation={[1.07, 1.19, -2.45]}
              />
              <mesh
                name="House_7_3_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_11.geometry}
                material={materials["World ap"]}
                position={[-1.15, -2.08, 3.65]}
                rotation={[1.2, 1.26, -2.35]}
              />
              <mesh
                name="House_7_4_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_11.geometry}
                material={materials["World ap"]}
                position={[-0.91, 0.43, 4.5]}
                rotation={[1.2, 1.26, -2.12]}
              />
              <mesh
                name="House_7_5_11"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_11.geometry}
                material={materials["World ap"]}
                position={[0.62, -2.11, -4.45]}
                rotation={[1.2, 1.26, -2.35]}
              />
            </group>
            <group
              name="Tokyo"
              position={[102.35, 25.55, -78.26]}
              rotation={[1.56, 1, -0.46]}
            >
              <mesh
                name="House_7_10_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_9.geometry}
                material={materials["World ap"]}
                position={[1.21, 1.26, 1.48]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_11_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_11_6.geometry}
                material={materials["World ap"]}
                position={[-0.63, -6.41, -1.29]}
                rotation={[0.55, 1.25, -1.67]}
              />
              <mesh
                name="House_7_12_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_12_7.geometry}
                material={materials["World ap"]}
                position={[-1.29, -7.37, -1.98]}
                rotation={[0.55, 1.25, -1.67]}
              />
              <mesh
                name="House_7_13_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_6.geometry}
                material={materials["World ap"]}
                position={[0.8, 3.49, 2.29]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_13_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_7.geometry}
                material={materials["World ap"]}
                position={[-1.39, -1.46, 1.69]}
                rotation={[0.73, 1.34, -1.9]}
              />
              <mesh
                name="House_7_15_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_7.geometry}
                material={materials["World ap"]}
                position={[-1.05, 1.07, 3.44]}
                rotation={[0.16, 1.4, -1.53]}
              />
              <mesh
                name="House_7_18_9"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_9.geometry}
                material={materials["World ap"]}
                position={[0.8, -0.85, 0.16]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_19_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19_8.geometry}
                material={materials["World ap"]}
                position={[-1.21, -3.29, 2.05]}
                rotation={[-0.08, 1.39, -1.3]}
              />
              <mesh
                name="House_7_1_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_10.geometry}
                material={materials["World ap"]}
                position={[-1.27, -3.06, 0.62]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_26_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26_8.geometry}
                material={materials["World ap"]}
                position={[-0.24, -2.54, -0.75]}
                rotation={[0.62, 1.43, -1.75]}
              />
              <mesh
                name="House_7_2_10"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_10.geometry}
                material={materials["World ap"]}
                position={[-1.71, -2.01, 3.01]}
                rotation={[0.73, 1.34, -1.9]}
              />
              <mesh
                name="House_7_3_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_12.geometry}
                material={materials["World ap"]}
                position={[-0.56, 3.85, 3.4]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_4_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_12.geometry}
                material={materials["World ap"]}
                position={[-0.32, 2.17, -2.95]}
                rotation={[0.62, 1.43, -1.75]}
              />
              <mesh
                name="House_7_5_12"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_12.geometry}
                material={materials["World ap"]}
                position={[-1.05, -4.68, 0.31]}
                rotation={[1.2, 1.26, -2.55]}
              />
              <mesh
                name="House_7_6_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_7.geometry}
                material={materials["World ap"]}
                position={[0.05, -4.31, -2.21]}
                rotation={[0.46, 1.39, -1.83]}
              />
              <mesh
                name="House_7_7_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7_6.geometry}
                material={materials["World ap"]}
                position={[2.23, 5.12, 1.07]}
                rotation={[-0.27, 1.28, -0.93]}
              />
              <mesh
                name="House_7_8_7"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8_7.geometry}
                material={materials["World ap"]}
                position={[-2.46, -5.01, 1.69]}
                rotation={[0.16, 1.34, -1.64]}
              />
              <mesh
                name="House_7_9_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_9_6.geometry}
                material={materials["World ap"]}
                position={[-1.71, 3.35, 4.2]}
                rotation={[-0.27, 1.28, -0.93]}
              />
            </group>
            <group
              name="Tunissia"
              position={[-85.05, -32.19, -13.22]}
              rotation={[-3, 1.52, 1.26]}
            >
              <mesh
                name="House_7_10_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_4.geometry}
                material={materials["World ap"]}
                position={[-0.77, 7.39, 2.36]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_11_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_11_3.geometry}
                material={materials["World ap"]}
                position={[-1.76, 11.41, 3.3]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_12_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_12_2.geometry}
                material={materials["World ap"]}
                position={[-10.04, 7.29, 2.36]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_17"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17.geometry}
                material={materials["World ap"]}
                position={[-10.71, 4.64, 2.36]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_18"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18.geometry}
                material={materials["World ap"]}
                position={[-7.93, 6.18, 1.44]}
                rotation={[0.12, 0.1, 0.09]}
              />
              <mesh
                name="House_7_19"
                castShadow
                receiveShadow
                geometry={nodes.House_7_19.geometry}
                material={materials["World ap"]}
                position={[-7.43, 9.01, 1.74]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_1_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_1_3.geometry}
                material={materials["World ap"]}
                position={[-1.35, 5.67, -0.55]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_20"
                castShadow
                receiveShadow
                geometry={nodes.House_7_20.geometry}
                material={materials["World ap"]}
                position={[-26.38, 6.11, 4.15]}
                rotation={[0.28, 0.19, 1.58]}
              />
              <mesh
                name="House_7_21"
                castShadow
                receiveShadow
                geometry={nodes.House_7_21.geometry}
                material={materials["World ap"]}
                position={[13.05, 11.93, 9.82]}
                rotation={[0.47, -0.46, 1.22]}
              />
              <mesh
                name="House_7_22"
                castShadow
                receiveShadow
                geometry={nodes.House_7_22.geometry}
                material={materials["World ap"]}
                position={[14.88, 10.13, 9.77]}
                rotation={[0.47, -0.46, 0.63]}
              />
              <mesh
                name="House_7_23"
                castShadow
                receiveShadow
                geometry={nodes.House_7_23.geometry}
                material={materials["World ap"]}
                position={[-2.45, 3.31, 0.11]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_24"
                castShadow
                receiveShadow
                geometry={nodes.House_7_24.geometry}
                material={materials["World ap"]}
                position={[-28.66, 5.28, 4.14]}
                rotation={[0.36, 0.17, 1.15]}
              />
              <mesh
                name="House_7_25"
                castShadow
                receiveShadow
                geometry={nodes.House_7_25.geometry}
                material={materials["World ap"]}
                position={[-4.78, 12.49, 2.96]}
                rotation={[0.15, 0.17, 0.48]}
              />
              <mesh
                name="House_7_26"
                castShadow
                receiveShadow
                geometry={nodes.House_7_26.geometry}
                material={materials["World ap"]}
                position={[-9.57, 10.48, 4.02]}
                rotation={[0.36, 0.15, 0.85]}
              />
              <mesh
                name="House_7_2_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_2_6.geometry}
                material={materials["World ap"]}
                position={[-24.33, 6.1, 4.28]}
                rotation={[0.28, 0.19, 1.58]}
              />
              <mesh
                name="House_7_3_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_6.geometry}
                material={materials["World ap"]}
                position={[-3.79, 8.2, 1]}
                rotation={[0.23, 0.02, 1.28]}
              />
              <mesh
                name="House_7_4_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_5.geometry}
                material={materials["World ap"]}
                position={[-5.12, 4.81, 1.15]}
                rotation={[0.13, 0.19, 0.88]}
              />
              <mesh
                name="House_7_4_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_6.geometry}
                material={materials["World ap"]}
                position={[-27.15, 7.64, 5.13]}
                rotation={[0.28, 0.19, 1.58]}
              />
              <mesh
                name="House_7_5_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_5_4.geometry}
                material={materials["World ap"]}
                position={[14.53, 13.38, 11.38]}
                rotation={[0.47, -0.46, 0.88]}
              />
              <mesh
                name="House_7_6_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_3.geometry}
                material={materials["World ap"]}
                position={[-24.29, 7.7, 5.04]}
                rotation={[0.28, 0.19, 1.58]}
              />
              <mesh
                name="House_7_8_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_8_3.geometry}
                material={materials["World ap"]}
                position={[-29.15, 7.68, 6.42]}
                rotation={[0.18, 0.4, 1.22]}
              />
              <mesh
                name="House_7_9_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_9_3.geometry}
                material={materials["World ap"]}
                position={[0.06, 9.4, 3.52]}
                rotation={[0.23, 0.02, 0.91]}
              />
            </group>
            <group
              name="UAR"
              position={[-47.98, -19.71, 61.72]}
              rotation={[3, 0.49, 0.79]}
            >
              <mesh
                name="House_7_10_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_10_6.geometry}
                material={materials["World ap"]}
                position={[-2.52, 5.43, 2.03]}
                rotation={[0.23, 0.02, 0.91]}
              />
              <mesh
                name="House_7_12_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_12_4.geometry}
                material={materials["World ap"]}
                position={[-10.04, 7.29, 2.36]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_13_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_13_2.geometry}
                material={materials["World ap"]}
                position={[-10.03, 0.95, 0.99]}
                rotation={[0.12, 0.1, 0.45]}
              />
              <mesh
                name="House_7_14_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_14_3.geometry}
                material={materials["World ap"]}
                position={[-7.29, -0.05, 0.59]}
                rotation={[0.12, 0.1, 1.19]}
              />
              <mesh
                name="House_7_15_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_15_2.geometry}
                material={materials["World ap"]}
                position={[-8.48, 3, 1.09]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_16_2"
                castShadow
                receiveShadow
                geometry={nodes.House_7_16_2.geometry}
                material={materials["World ap"]}
                position={[-5.49, -2.24, 0.14]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_17_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_17_3.geometry}
                material={materials["World ap"]}
                position={[-10.71, 4.64, 2.36]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_18_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_18_3.geometry}
                material={materials["World ap"]}
                position={[-7.93, 6.18, 1.44]}
                rotation={[0.12, 0.1, 0.09]}
              />
              <mesh
                name="House_7_23_3"
                castShadow
                receiveShadow
                geometry={nodes.House_7_23_3.geometry}
                material={materials["World ap"]}
                position={[-2.45, 3.31, 0.11]}
                rotation={[0.18, -0.05, 0.86]}
              />
              <mesh
                name="House_7_27_6"
                castShadow
                receiveShadow
                geometry={nodes.House_7_27_6.geometry}
                material={materials["World ap"]}
                position={[-3.84, 0.57, 0.33]}
                rotation={[0.12, 0.1, 0.92]}
              />
              <mesh
                name="House_7_3_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_3_8.geometry}
                material={materials["World ap"]}
                position={[-3.79, 8.2, 1]}
                rotation={[0.23, 0.02, 1.28]}
              />
              <mesh
                name="House_7_4_8"
                castShadow
                receiveShadow
                geometry={nodes.House_7_4_8.geometry}
                material={materials["World ap"]}
                position={[-5.12, 4.81, 1.15]}
                rotation={[0.13, 0.19, 0.88]}
              />
              <mesh
                name="House_7_6_5"
                castShadow
                receiveShadow
                geometry={nodes.House_7_6_5.geometry}
                material={materials["World ap"]}
                position={[-8.71, -1.55, 0.85]}
                rotation={[-0.12, 0.01, 0.89]}
              />
              <mesh
                name="House_7_7_4"
                castShadow
                receiveShadow
                geometry={nodes.House_7_7_4.geometry}
                material={materials["World ap"]}
                position={[-5.71, 1.98, 1.22]}
                rotation={[0.23, 0.02, 0.91]}
              />
            </group>
          </group>
          <group name="Firtrees" position={[-31.1, 65.19, -52.69]}>
            <mesh
              name="Firtree"
              castShadow
              receiveShadow
              geometry={nodes.Firtree.geometry}
              material={materials["World ap"]}
              position={[81.77, -10.24, -12.72]}
              rotation={[0.58, -0.49, 0.64]}
            />
            <mesh
              name="Firtree_1"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_1.geometry}
              material={materials["World ap"]}
              position={[49.08, 17.34, 1.04]}
              rotation={[0.71, -0.16, 0.83]}
            />
            <mesh
              name="Firtree_10"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_10.geometry}
              material={materials["World ap"]}
              position={[55.57, 25.55, 11.04]}
              rotation={[1.01, -0.06, -1.63]}
            />
            <mesh
              name="Firtree_100"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_100.geometry}
              material={materials["World ap"]}
              position={[68.64, -147.79, 13.15]}
              rotation={[-0.62, -0.35, -0.05]}
            />
            <mesh
              name="Firtree_101"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_101.geometry}
              material={materials["World ap"]}
              position={[93.15, -137.77, 31.16]}
              rotation={[-1.27, -0.65, -1.2]}
            />
            <mesh
              name="Firtree_102"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_102.geometry}
              material={materials["World ap"]}
              position={[96.3, -137.66, 42.75]}
              rotation={[-1.42, -0.76, -1.33]}
            />
            <mesh
              name="Firtree_103"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_103.geometry}
              material={materials["World ap"]}
              position={[89.76, -141.95, 35.76]}
              rotation={[-1.51, -0.63, -1.49]}
            />
            <mesh
              name="Firtree_104"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_104.geometry}
              material={materials["World ap"]}
              position={[88.03, -141.59, 47.93]}
              rotation={[-1.57, -0.83, -1.37]}
            />
            <mesh
              name="Firtree_105"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_105.geometry}
              material={materials["World ap"]}
              position={[32.48, -162.03, 49.24]}
              rotation={[-1.59, 0.17, 3.02]}
            />
            <mesh
              name="Firtree_106"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_106.geometry}
              material={materials["World ap"]}
              position={[32.32, -153.21, 9.78]}
              rotation={[-1.24, 0.06, -3.03]}
            />
            <mesh
              name="Firtree_107"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_107.geometry}
              material={materials["World ap"]}
              position={[89.63, -124.84, 10.73]}
              rotation={[-0.76, -0.52, -0.56]}
            />
            <mesh
              name="Firtree_108"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_108.geometry}
              material={materials["World ap"]}
              position={[107.22, -108.01, 9.91]}
              rotation={[-0.94, -0.99, -0.72]}
            />
            <mesh
              name="Firtree_109"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_109.geometry}
              material={materials["World ap"]}
              position={[105.98, -112.5, 17.17]}
              rotation={[-0.9, -0.96, -0.65]}
            />
            <mesh
              name="Firtree_11"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_11.geometry}
              material={materials["World ap"]}
              position={[18.44, 8.04, -13.86]}
              rotation={[0.84, 0.07, 0.84]}
            />
            <mesh
              name="Firtree_110"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_110.geometry}
              material={materials["World ap"]}
              position={[101.09, -109.53, 2.74]}
              rotation={[-0.84, -0.67, -0.55]}
            />
            <mesh
              name="Firtree_111"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_111.geometry}
              material={materials["World ap"]}
              position={[107.12, -117.83, 26.45]}
              rotation={[-1.05, -0.96, -1.77]}
            />
            <mesh
              name="Firtree_112"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_112.geometry}
              material={materials["World ap"]}
              position={[47.47, -144.51, 1.34]}
              rotation={[-1.14, -0.2, 1.82]}
            />
            <mesh
              name="Firtree_113"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_113.geometry}
              material={materials["World ap"]}
              position={[103, -120.06, 18.18]}
              rotation={[-0.97, -0.63, -0.89]}
            />
            <mesh
              name="Firtree_114"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_114.geometry}
              material={materials["World ap"]}
              position={[95.74, -127.95, 15.94]}
              rotation={[-0.97, -0.63, -1.71]}
            />
            <mesh
              name="Firtree_115"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_115.geometry}
              material={materials["World ap"]}
              position={[99.89, -127.72, 23.26]}
              rotation={[-0.77, -0.71, -1.47]}
            />
            <mesh
              name="Firtree_116"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_116.geometry}
              material={materials["World ap"]}
              position={[-27.63, -142.42, 20.93]}
              rotation={[-1.37, 0.61, -1.99]}
            />
            <mesh
              name="Firtree_117"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_117.geometry}
              material={materials["World ap"]}
              position={[-20.01, -149.08, 23.67]}
              rotation={[-1.14, 0.4, -2.12]}
            />
            <mesh
              name="Firtree_118"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_118.geometry}
              material={materials["World ap"]}
              position={[29.99, -160.44, 37.55]}
              rotation={[-1.62, 0.16, 1.86]}
            />
            <mesh
              name="Firtree_119"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_119.geometry}
              material={materials["World ap"]}
              position={[19.47, -155.91, 19.14]}
              rotation={[-1.45, 0.26, -1.17]}
            />
            <mesh
              name="Firtree_12"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_12.geometry}
              material={materials["World ap"]}
              position={[35, 12.13, -9.99]}
              rotation={[0.84, 0.07, 0.84]}
            />
            <mesh
              name="Firtree_120"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_120.geometry}
              material={materials["World ap"]}
              position={[23.48, -156.74, 17.29]}
              rotation={[-1.31, 0.14, -0.68]}
            />
            <mesh
              name="Firtree_121"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_121.geometry}
              material={materials["World ap"]}
              position={[-1.97, -156.84, 33.77]}
              rotation={[-1.45, 0.26, -0.65]}
            />
            <mesh
              name="Firtree_122"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_122.geometry}
              material={materials["World ap"]}
              position={[-4.78, -154.54, 25.41]}
              rotation={[-0.87, 0.28, -0.89]}
            />
            <mesh
              name="Firtree_123"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_123.geometry}
              material={materials["World ap"]}
              position={[8.06, -151.6, 16.64]}
              rotation={[-1.45, 0.26, -1.99]}
            />
            <mesh
              name="Firtree_124"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_124.geometry}
              material={materials["World ap"]}
              position={[91.04, -136.01, 19.61]}
              rotation={[-0.7, -0.59, -0.36]}
            />
            <mesh
              name="Firtree_125"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_125.geometry}
              material={materials["World ap"]}
              position={[85.13, -132.53, 11.9]}
              rotation={[-0.73, -0.53, -0.63]}
            />
            <mesh
              name="Firtree_126"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_126.geometry}
              material={materials["World ap"]}
              position={[105.41, -125.95, 28.96]}
              rotation={[-0.73, -0.72, -1.43]}
            />
            <mesh
              name="Firtree_127"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_127.geometry}
              material={materials["World ap"]}
              position={[39.82, -150.33, 5.96]}
              rotation={[-1.11, -0.15, -1.95]}
            />
            <mesh
              name="Firtree_128"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_128.geometry}
              material={materials["World ap"]}
              position={[47.72, -149.66, 7.83]}
              rotation={[-1.3, -0.22, 1.76]}
            />
            <mesh
              name="Firtree_129"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_129.geometry}
              material={materials["World ap"]}
              position={[14.13, -158.94, 27.2]}
              rotation={[-1.48, 0.05, -1.98]}
            />
            <mesh
              name="Firtree_13"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_13.geometry}
              material={materials["World ap"]}
              position={[0.09, 11.87, -10.47]}
              rotation={[0.68, 0.36, -1.63]}
            />
            <mesh
              name="Firtree_130"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_130.geometry}
              material={materials["World ap"]}
              position={[24.46, -155.6, 10.97]}
              rotation={[-1.48, 0.05, -1.98]}
            />
            <mesh
              name="Firtree_131"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_131.geometry}
              material={materials["World ap"]}
              position={[19.47, -161.26, 50.91]}
              rotation={[-1.68, 0.12, 1.85]}
            />
            <mesh
              name="Firtree_132"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_132.geometry}
              material={materials["World ap"]}
              position={[19.86, -158.21, 38.59]}
              rotation={[-1.62, 0.16, 1.86]}
            />
            <mesh
              name="Firtree_133"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_133.geometry}
              material={materials["World ap"]}
              position={[24.79, -160.56, 28.54]}
              rotation={[-1.48, 0.2, -1.98]}
            />
            <mesh
              name="Firtree_134"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_134.geometry}
              material={materials["World ap"]}
              position={[-5.5, -156.92, 40.82]}
              rotation={[-1.38, 0.41, -2.01]}
            />
            <mesh
              name="Firtree_135"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_135.geometry}
              material={materials["World ap"]}
              position={[-17.42, -152.15, 31.28]}
              rotation={[-1.43, 0.59, -2.05]}
            />
            <mesh
              name="Firtree_136"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_136.geometry}
              material={materials["World ap"]}
              position={[21.09, -148.06, 2.5]}
              rotation={[-0.85, -0.15, -1.87]}
            />
            <mesh
              name="Firtree_137"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_137.geometry}
              material={materials["World ap"]}
              position={[14.87, -147.07, 4.09]}
              rotation={[-0.9, 0.36, -2.09]}
            />
            <mesh
              name="Firtree_138"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_138.geometry}
              material={materials["World ap"]}
              position={[4.81, -154.88, 27.29]}
              rotation={[-1.45, 0.26, -1.99]}
            />
            <mesh
              name="Firtree_139"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_139.geometry}
              material={materials["World ap"]}
              position={[15.67, -151.62, 10.95]}
              rotation={[-1.06, 0.07, -2.05]}
            />
            <mesh
              name="Firtree_14"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_14.geometry}
              material={materials["World ap"]}
              position={[8.41, 7.08, -15.37]}
              rotation={[0.71, 0.32, 0.89]}
            />
            <mesh
              name="Firtree_140"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_140.geometry}
              material={materials["World ap"]}
              position={[9.4, -156.82, 36.74]}
              rotation={[-1.43, 0.31, -2]}
            />
            <mesh
              name="Firtree_141"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_141.geometry}
              material={materials["World ap"]}
              position={[25.5, -149.91, 7.87]}
              rotation={[-1.16, -0.07, -0.69]}
            />
            <mesh
              name="Firtree_142"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_142.geometry}
              material={materials["World ap"]}
              position={[31.09, -149.3, 4.08]}
              rotation={[-1.02, -0.09, -0.69]}
            />
            <mesh
              name="Firtree_143"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_143.geometry}
              material={materials["World ap"]}
              position={[19.32, -144.08, -3.53]}
              rotation={[-0.75, 0.19, -1.87]}
            />
            <mesh
              name="Firtree_144"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_144.geometry}
              material={materials["World ap"]}
              position={[29.29, -143.1, -4.57]}
              rotation={[-0.87, 0.09, -0.69]}
            />
            <mesh
              name="Firtree_145"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_145.geometry}
              material={materials["World ap"]}
              position={[40.04, -141.41, -4.25]}
              rotation={[-0.9, -0.4, -0.63]}
            />
            <mesh
              name="Firtree_146"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_146.geometry}
              material={materials["World ap"]}
              position={[53.46, -138.09, -1.51]}
              rotation={[-0.53, -0.21, -0.66]}
            />
            <mesh
              name="Firtree_147"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_147.geometry}
              material={materials["World ap"]}
              position={[35.63, -137.72, -7.72]}
              rotation={[-0.47, -0.01, -0.53]}
            />
            <mesh
              name="Firtree_148"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_148.geometry}
              material={materials["World ap"]}
              position={[-8.69, -154.04, 31.28]}
              rotation={[-1.35, 0.25, -2.11]}
            />
            <mesh
              name="Firtree_149"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_149.geometry}
              material={materials["World ap"]}
              position={[74.1, -142.62, 4.5]}
              rotation={[-0.91, -0.33, -0.79]}
            />
            <mesh
              name="Firtree_15"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_15.geometry}
              material={materials["World ap"]}
              position={[-29.06, 15.77, 21.21]}
              rotation={[0.78, 0.69, 1.01]}
            />
            <mesh
              name="Firtree_150"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_150.geometry}
              material={materials["World ap"]}
              position={[81.94, -124.82, 0.04]}
              rotation={[-0.91, -0.33, -0.79]}
            />
            <mesh
              name="Firtree_151"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_151.geometry}
              material={materials["World ap"]}
              position={[88.86, -122.05, 1.82]}
              rotation={[-0.75, -0.46, -0.73]}
            />
            <mesh
              name="Firtree_152"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_152.geometry}
              material={materials["World ap"]}
              position={[87.97, -116.5, -4.23]}
              rotation={[-0.75, -0.46, -0.73]}
            />
            <mesh
              name="Firtree_153"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_153.geometry}
              material={materials["World ap"]}
              position={[91.87, -115.82, -0.26]}
              rotation={[-0.94, -0.63, -0.83]}
            />
            <mesh
              name="Firtree_154"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_154.geometry}
              material={materials["World ap"]}
              position={[111.09, -105.47, 16.22]}
              rotation={[-0.37, -1.03, -0.36]}
            />
            <mesh
              name="Firtree_155"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_155.geometry}
              material={materials["World ap"]}
              position={[113.33, -98.53, 15.36]}
              rotation={[-0.37, -1.03, -0.36]}
            />
            <mesh
              name="Firtree_156"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_156.geometry}
              material={materials["World ap"]}
              position={[113.74, -109.1, 28.51]}
              rotation={[-0.88, -0.83, -0.78]}
            />
            <mesh
              name="Firtree_157"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_157.geometry}
              material={materials["World ap"]}
              position={[119.16, -98.68, 25.48]}
              rotation={[-0.92, -1.03, -0.89]}
            />
            <mesh
              name="Firtree_158"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_158.geometry}
              material={materials["World ap"]}
              position={[118.91, -105.32, 33.63]}
              rotation={[-0.92, -1.03, -0.89]}
            />
            <mesh
              name="Firtree_159"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_159.geometry}
              material={materials["World ap"]}
              position={[121.23, -95.87, 29.26]}
              rotation={[-0.46, -1.19, -0.47]}
            />
            <mesh
              name="Firtree_16"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_16.geometry}
              material={materials["World ap"]}
              position={[-13.86, 8.64, -1.86]}
              rotation={[0.64, 0.54, 1.89]}
            />
            <mesh
              name="Firtree_160"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_160.geometry}
              material={materials["World ap"]}
              position={[73.64, -145.32, 9.39]}
              rotation={[-0.91, -0.33, -0.79]}
            />
            <mesh
              name="Firtree_161"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_161.geometry}
              material={materials["World ap"]}
              position={[69.49, -144.33, 5.86]}
              rotation={[-0.91, -0.33, -0.79]}
            />
            <mesh
              name="Firtree_162"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_162.geometry}
              material={materials["World ap"]}
              position={[77.42, -135.51, 7.26]}
              rotation={[-0.86, -0.67, -0.8]}
            />
            <mesh
              name="Firtree_163"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_163.geometry}
              material={materials["World ap"]}
              position={[101.74, -131.25, 35.23]}
              rotation={[-1.3, -0.79, -1.27]}
            />
            <mesh
              name="Firtree_164"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_164.geometry}
              material={materials["World ap"]}
              position={[112.9, -114.9, 32.66]}
              rotation={[-1.26, -0.89, -1.23]}
            />
            <mesh
              name="Firtree_165"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_165.geometry}
              material={materials["World ap"]}
              position={[120.95, -99.13, 33.97]}
              rotation={[-0.89, -1.22, -0.91]}
            />
            <mesh
              name="Firtree_166"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_166.geometry}
              material={materials["World ap"]}
              position={[115.84, -107.73, 20.95]}
              rotation={[-0.62, -1.11, -0.66]}
            />
            <mesh
              name="Firtree_167"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_167.geometry}
              material={materials["World ap"]}
              position={[117.99, -93.71, 21.84]}
              rotation={[-0.37, -1.03, -0.36]}
            />
            <mesh
              name="Firtree_168"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_168.geometry}
              material={materials["World ap"]}
              position={[97.62, -135.38, 30.84]}
              rotation={[-1.01, -0.73, -0.87]}
            />
            <mesh
              name="Firtree_169"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_169.geometry}
              material={materials["World ap"]}
              position={[87.75, -140.37, 22.29]}
              rotation={[-1.2, -0.7, -1.79]}
            />
            <mesh
              name="Firtree_17"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_17.geometry}
              material={materials["World ap"]}
              position={[-17.22, 14.96, 5.26]}
              rotation={[0.66, 0.61, 2.14]}
            />
            <mesh
              name="Firtree_170"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_170.geometry}
              material={materials["World ap"]}
              position={[84.18, -137, 17.53]}
              rotation={[-1.16, -0.53, -1.77]}
            />
            <mesh
              name="Firtree_171"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_171.geometry}
              material={materials["World ap"]}
              position={[9.94, -144.77, -0.44]}
              rotation={[-0.75, 0.19, -1.87]}
            />
            <mesh
              name="Firtree_172"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_172.geometry}
              material={materials["World ap"]}
              position={[12.32, -139.3, -6.15]}
              rotation={[-0.75, 0.19, -1.87]}
            />
            <mesh
              name="Firtree_173"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_173.geometry}
              material={materials["World ap"]}
              position={[20.1, -138.6, -8.85]}
              rotation={[-0.75, 0.19, -1.87]}
            />
            <mesh
              name="Firtree_174"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_174.geometry}
              material={materials["World ap"]}
              position={[7.97, -133.94, -10.01]}
              rotation={[-0.75, 0.19, -1.87]}
            />
            <mesh
              name="Firtree_175"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_175.geometry}
              material={materials["World ap"]}
              position={[-22.97, -147.12, 27.75]}
              rotation={[-1.37, 0.61, -1.99]}
            />
            <mesh
              name="Firtree_176"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_176.geometry}
              material={materials["World ap"]}
              position={[-48.23, -3.82, 21.85]}
              rotation={[1.19, 0.78, 0.4]}
            />
            <mesh
              name="Firtree_177"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_177.geometry}
              material={materials["World ap"]}
              position={[-49.09, -11.11, 11.3]}
              rotation={[1.19, 0.78, 0.4]}
            />
            <mesh
              name="Firtree_178"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_178.geometry}
              material={materials["World ap"]}
              position={[-35.33, 12.22, 32.76]}
              rotation={[1.2, 0.73, 0.64]}
            />
            <mesh
              name="Firtree_179"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_179.geometry}
              material={materials["World ap"]}
              position={[-31.3, 14.65, 28.55]}
              rotation={[1.19, 0.78, 0.4]}
            />
            <mesh
              name="Firtree_18"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_18.geometry}
              material={materials["World ap"]}
              position={[41.8, 2.87, -17.81]}
              rotation={[0.75, -0.11, 0.84]}
            />
            <mesh
              name="Firtree_180"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_180.geometry}
              material={materials["World ap"]}
              position={[92.25, -1.42, 11.26]}
              rotation={[0.45, -0.78, -0.32]}
            />
            <mesh
              name="Firtree_181"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_181.geometry}
              material={materials["World ap"]}
              position={[55.57, 25.55, 22.37]}
              rotation={[1.21, -0.24, -1.49]}
            />
            <mesh
              name="Firtree_182"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_182.geometry}
              material={materials["World ap"]}
              position={[30.1, 31.71, 18.16]}
              rotation={[1.21, -0.24, -1.49]}
            />
            <mesh
              name="Firtree_183"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_183.geometry}
              material={materials["World ap"]}
              position={[15.51, 36.77, 12.72]}
              rotation={[1.2, -0.12, -1.49]}
            />
            <mesh
              name="Firtree_184"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_184.geometry}
              material={materials["World ap"]}
              position={[100.35, -1.42, 11.26]}
              rotation={[0.45, -0.78, -0.32]}
            />
            <mesh
              name="Firtree_185"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_185.geometry}
              material={materials["World ap"]}
              position={[-25.34, 20.33, 16.84]}
              rotation={[0.98, 0.75, 1.9]}
            />
            <mesh
              name="Firtree_186"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_186.geometry}
              material={materials["World ap"]}
              position={[-60.25, -79.72, 10.27]}
              rotation={[-0.82, 1.13, -2.41]}
            />
            <mesh
              name="Firtree_187"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_187.geometry}
              material={materials["World ap"]}
              position={[78.33, -149.93, 30.98]}
              rotation={[-1.51, -0.63, -1.49]}
            />
            <mesh
              name="Firtree_188"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_188.geometry}
              material={materials["World ap"]}
              position={[58.25, -158.69, 28.06]}
              rotation={[-1.51, -0.63, -1.49]}
            />
            <mesh
              name="Firtree_189"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_189.geometry}
              material={materials["World ap"]}
              position={[75.76, -152.49, 41.56]}
              rotation={[-1.51, -0.63, -1.49]}
            />
            <mesh
              name="Firtree_19"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_19.geometry}
              material={materials["World ap"]}
              position={[53, 2.14, -16.73]}
              rotation={[0.75, -0.11, 2.17]}
            />
            <mesh
              name="Firtree_190"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_190.geometry}
              material={materials["World ap"]}
              position={[50.34, -163.53, 40.63]}
              rotation={[-1.62, 0.16, 1.86]}
            />
            <mesh
              name="Firtree_191"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_191.geometry}
              material={materials["World ap"]}
              position={[87.25, -0.98, 6.03]}
              rotation={[0.45, -0.78, -0.32]}
            />
            <mesh
              name="Firtree_192"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_192.geometry}
              material={materials["World ap"]}
              position={[91.89, -5.81, 5.22]}
              rotation={[0.45, -0.78, -0.32]}
            />
            <mesh
              name="Firtree_2"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_2.geometry}
              material={materials["World ap"]}
              position={[30.5, -0.09, -18.25]}
              rotation={[0.75, -0.11, 0.84]}
            />
            <mesh
              name="Firtree_20"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_20.geometry}
              material={materials["World ap"]}
              position={[54.38, 11.91, -7.34]}
              rotation={[0.75, -0.11, 2.17]}
            />
            <mesh
              name="Firtree_21"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_21.geometry}
              material={materials["World ap"]}
              position={[22.88, 4.38, -17.57]}
              rotation={[0.65, 0.03, 2.17]}
            />
            <mesh
              name="Firtree_22"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_22.geometry}
              material={materials["World ap"]}
              position={[29.08, 9.47, -14.07]}
              rotation={[0.75, -0.11, 1.66]}
            />
            <mesh
              name="Firtree_23"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_23.geometry}
              material={materials["World ap"]}
              position={[25.17, 20.84, 3.4]}
              rotation={[0.94, -0.07, -1.62]}
            />
            <mesh
              name="Firtree_24"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_24.geometry}
              material={materials["World ap"]}
              position={[69, -3.88, -14.94]}
              rotation={[0.46, -0.2, 0.77]}
            />
            <mesh
              name="Firtree_25"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_25.geometry}
              material={materials["World ap"]}
              position={[75.15, -10.88, -15.56]}
              rotation={[0.56, -0.43, 0.82]}
            />
            <mesh
              name="Firtree_26"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_26.geometry}
              material={materials["World ap"]}
              position={[-26.46, 13.48, 13.78]}
              rotation={[0.8, 0.66, 0.98]}
            />
            <mesh
              name="Firtree_27"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_27.geometry}
              material={materials["World ap"]}
              position={[-25.26, 9.15, 6.77]}
              rotation={[0.89, 0.51, 0.82]}
            />
            <mesh
              name="Firtree_28"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_28.geometry}
              material={materials["World ap"]}
              position={[-32.26, 5.27, 14.87]}
              rotation={[0.88, 0.65, 1.65]}
            />
            <mesh
              name="Firtree_29"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_29.geometry}
              material={materials["World ap"]}
              position={[-1.4, 1.04, -13.11]}
              rotation={[0.75, 0.36, -1.63]}
            />
            <mesh
              name="Firtree_3"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_3.geometry}
              material={materials["World ap"]}
              position={[46.08, 7.4, -8.93]}
              rotation={[0.75, -0.11, 0.84]}
            />
            <mesh
              name="Firtree_30"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_30.geometry}
              material={materials["World ap"]}
              position={[-34.07, 8.94, 23.04]}
              rotation={[1.2, 0.73, 0.64]}
            />
            <mesh
              name="Firtree_31"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_31.geometry}
              material={materials["World ap"]}
              position={[-40.85, -8.02, 4.78]}
              rotation={[0.82, 0.6, 1.94]}
            />
            <mesh
              name="Firtree_32"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_32.geometry}
              material={materials["World ap"]}
              position={[-38.43, 1.09, 17.1]}
              rotation={[1.12, 0.79, 1.69]}
            />
            <mesh
              name="Firtree_33"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_33.geometry}
              material={materials["World ap"]}
              position={[-43.78, -4.37, 13.1]}
              rotation={[1.17, 0.8, 1.61]}
            />
            <mesh
              name="Firtree_34"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_34.geometry}
              material={materials["World ap"]}
              position={[-23.02, 2.21, 2.18]}
              rotation={[0.66, 0.52, 1.97]}
            />
            <mesh
              name="Firtree_35"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_35.geometry}
              material={materials["World ap"]}
              position={[10.25, 16.18, -11.14]}
              rotation={[0.61, 0.13, -0.17]}
            />
            <mesh
              name="Firtree_36"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_36.geometry}
              material={materials["World ap"]}
              position={[26.46, 29.17, 12.03]}
              rotation={[0.91, -0.08, -0.46]}
            />
            <mesh
              name="Firtree_37"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_37.geometry}
              material={materials["World ap"]}
              position={[-54.15, -16.86, 13.54]}
              rotation={[0.38, 1.02, 2.48]}
            />
            <mesh
              name="Firtree_38"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_38.geometry}
              material={materials["World ap"]}
              position={[-51.65, -23.49, 3.49]}
              rotation={[0.51, 0.82, 2.21]}
            />
            <mesh
              name="Firtree_39"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_39.geometry}
              material={materials["World ap"]}
              position={[-58.73, -25.94, 10.84]}
              rotation={[0.31, 0.9, 2.46]}
            />
            <mesh
              name="Firtree_4"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_4.geometry}
              material={materials["World ap"]}
              position={[61.73, 6.88, -7.85]}
              rotation={[0.59, -0.28, 0.8]}
            />
            <mesh
              name="Firtree_40"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_40.geometry}
              material={materials["World ap"]}
              position={[-51.97, -30.39, 1.96]}
              rotation={[0.27, 0.74, 2.53]}
            />
            <mesh
              name="Firtree_41"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_41.geometry}
              material={materials["World ap"]}
              position={[-65.79, -56.83, 15.22]}
              rotation={[-0.08, 1.25, 3.01]}
            />
            <mesh
              name="Firtree_42"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_42.geometry}
              material={materials["World ap"]}
              position={[-55.56, -27.66, 5.23]}
              rotation={[0.38, 1.02, 2.38]}
            />
            <mesh
              name="Firtree_43"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_43.geometry}
              material={materials["World ap"]}
              position={[-54.57, -18.99, 8.73]}
              rotation={[0.64, 0.63, 1.85]}
            />
            <mesh
              name="Firtree_44"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_44.geometry}
              material={materials["World ap"]}
              position={[-33.65, 1.7, 2.7]}
              rotation={[0.64, 0.63, 1.85]}
            />
            <mesh
              name="Firtree_45"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_45.geometry}
              material={materials["World ap"]}
              position={[-6.21, 13.9, -6.04]}
              rotation={[0.6, 0.58, -0.27]}
            />
            <mesh
              name="Firtree_46"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_46.geometry}
              material={materials["World ap"]}
              position={[-57.99, -61.58, 5.65]}
              rotation={[0.12, 0.8, 2.7]}
            />
            <mesh
              name="Firtree_47"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_47.geometry}
              material={materials["World ap"]}
              position={[-35.47, -0.67, 9.39]}
              rotation={[0.89, 0.51, 1.64]}
            />
            <mesh
              name="Firtree_48"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_48.geometry}
              material={materials["World ap"]}
              position={[-60.73, -68.5, 7.65]}
              rotation={[0.12, 0.8, 2.7]}
            />
            <mesh
              name="Firtree_49"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_49.geometry}
              material={materials["World ap"]}
              position={[60.69, 19.53, 5.39]}
              rotation={[0.71, -0.16, 0.83]}
            />
            <mesh
              name="Firtree_5"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_5.geometry}
              material={materials["World ap"]}
              position={[71.71, 10.57, -0.04]}
              rotation={[0.56, -0.43, 0.82]}
            />
            <mesh
              name="Firtree_50"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_50.geometry}
              material={materials["World ap"]}
              position={[33.77, 24.3, 12.72]}
              rotation={[1, -0.4, 0.91]}
            />
            <mesh
              name="Firtree_51"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_51.geometry}
              material={materials["World ap"]}
              position={[-12.09, 19.81, 3.42]}
              rotation={[0.52, 0.65, 0.86]}
            />
            <mesh
              name="Firtree_52"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_52.geometry}
              material={materials["World ap"]}
              position={[-6.36, 2.58, -8.76]}
              rotation={[0.63, 0.55, 0.67]}
            />
            <mesh
              name="Firtree_53"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_53.geometry}
              material={materials["World ap"]}
              position={[-45.76, -18.1, 2.96]}
              rotation={[0.59, 0.44, 0.76]}
            />
            <mesh
              name="Firtree_54"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_54.geometry}
              material={materials["World ap"]}
              position={[-60.97, -62.25, 11.37]}
              rotation={[0.11, 1.05, 1.49]}
            />
            <mesh
              name="Firtree_55"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_55.geometry}
              material={materials["World ap"]}
              position={[-61.92, -72.12, 13.63]}
              rotation={[-0.29, 1.25, 1.95]}
            />
            <mesh
              name="Firtree_56"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_56.geometry}
              material={materials["World ap"]}
              position={[-59.43, -74.92, 8.99]}
              rotation={[0.04, 1.02, 1.61]}
            />
            <mesh
              name="Firtree_57"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_57.geometry}
              material={materials["World ap"]}
              position={[-60.61, -76.72, 11.06]}
              rotation={[-0.82, 1.13, -2.41]}
            />
            <mesh
              name="Firtree_58"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_58.geometry}
              material={materials["World ap"]}
              position={[-63.26, -66.68, 12.84]}
              rotation={[0.29, 1.11, 2.72]}
            />
            <mesh
              name="Firtree_59"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_59.geometry}
              material={materials["World ap"]}
              position={[-61.48, -76.24, 17.68]}
              rotation={[-0.58, 1.19, -2.57]}
            />
            <mesh
              name="Firtree_6"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_6.geometry}
              material={materials["World ap"]}
              position={[77.85, -3.43, -10.09]}
              rotation={[0.62, -0.43, 0.75]}
            />
            <mesh
              name="Firtree_60"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_60.geometry}
              material={materials["World ap"]}
              position={[-61.84, -81.68, 12.85]}
              rotation={[-0.86, 1.15, -2.37]}
            />
            <mesh
              name="Firtree_61"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_61.geometry}
              material={materials["World ap"]}
              position={[43.94, 25.17, 8.05]}
              rotation={[1.12, -0.08, -0.46]}
            />
            <mesh
              name="Firtree_62"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_62.geometry}
              material={materials["World ap"]}
              position={[68.44, 19.36, 2.33]}
              rotation={[0.58, -0.4, -0.25]}
            />
            <mesh
              name="Firtree_63"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_63.geometry}
              material={materials["World ap"]}
              position={[83.67, 4.75, 0.55]}
              rotation={[0.58, -0.4, -0.25]}
            />
            <mesh
              name="Firtree_64"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_64.geometry}
              material={materials["World ap"]}
              position={[84.08, -9.69, -6.41]}
              rotation={[0.65, -0.58, -0.11]}
            />
            <mesh
              name="Firtree_65"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_65.geometry}
              material={materials["World ap"]}
              position={[59.05, -1.03, -15.54]}
              rotation={[0.56, -0.43, 0.82]}
            />
            <mesh
              name="Firtree_66"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_66.geometry}
              material={materials["World ap"]}
              position={[15.23, 1.7, -20.6]}
              rotation={[0.61, 0.17, 0.77]}
            />
            <mesh
              name="Firtree_67"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_67.geometry}
              material={materials["World ap"]}
              position={[19.25, 10.38, -1.46]}
              rotation={[0.76, 0.13, 0.98]}
            />
            <mesh
              name="Firtree_68"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_68.geometry}
              material={materials["World ap"]}
              position={[-18.89, 16.97, 11.39]}
              rotation={[0.98, 0.75, 1.9]}
            />
            <mesh
              name="Firtree_69"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_69.geometry}
              material={materials["World ap"]}
              position={[-6.61, 9.17, -9.28]}
              rotation={[0.68, 0.36, -1.63]}
            />
            <mesh
              name="Firtree_7"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_7.geometry}
              material={materials["World ap"]}
              position={[59.97, 15.62, -3.21]}
              rotation={[0.64, -0.24, 0.81]}
            />
            <mesh
              name="Firtree_70"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_70.geometry}
              material={materials["World ap"]}
              position={[-65.87, -70.71, 20.97]}
              rotation={[-0.82, 1.13, -2.41]}
            />
            <mesh
              name="Firtree_71"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_71.geometry}
              material={materials["World ap"]}
              position={[-61.21, -56.38, 9.56]}
              rotation={[0.12, 0.8, 2.7]}
            />
            <mesh
              name="Firtree_72"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_72.geometry}
              material={materials["World ap"]}
              position={[-66.63, -63.47, 18.3]}
              rotation={[-0.06, 1.16, 2.99]}
            />
            <mesh
              name="Firtree_73"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_73.geometry}
              material={materials["World ap"]}
              position={[-57.86, -53.97, 4.48]}
              rotation={[-0.04, 0.88, 2.97]}
            />
            <mesh
              name="Firtree_74"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_74.geometry}
              material={materials["World ap"]}
              position={[-62.99, -53.6, 14.82]}
              rotation={[-0.06, 1.12, 2.99]}
            />
            <mesh
              name="Firtree_75"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_75.geometry}
              material={materials["World ap"]}
              position={[-69.89, -53.97, 20.42]}
              rotation={[-0.25, 1.04, -1.89]}
            />
            <mesh
              name="Firtree_76"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_76.geometry}
              material={materials["World ap"]}
              position={[3.91, -0.77, -16.99]}
              rotation={[0.66, 0.29, -1.57]}
            />
            <mesh
              name="Firtree_77"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_77.geometry}
              material={materials["World ap"]}
              position={[21.46, -1.57, -22.04]}
              rotation={[0.53, 0.03, 2.17]}
            />
            <mesh
              name="Firtree_78"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_78.geometry}
              material={materials["World ap"]}
              position={[10.21, -2.78, -19.58]}
              rotation={[0.61, 0.24, 0.28]}
            />
            <mesh
              name="Firtree_79"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_79.geometry}
              material={materials["World ap"]}
              position={[40.1, 14.43, -4.01]}
              rotation={[0.6, -0.13, 0.53]}
            />
            <mesh
              name="Firtree_8"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_8.geometry}
              material={materials["World ap"]}
              position={[25.41, 14.05, -9.85]}
              rotation={[0.79, -0.07, 0.84]}
            />
            <mesh
              name="Firtree_80"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_80.geometry}
              material={materials["World ap"]}
              position={[77.95, -19, -14.51]}
              rotation={[0.44, -0.53, 0.22]}
            />
            <mesh
              name="Firtree_81"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_81.geometry}
              material={materials["World ap"]}
              position={[72.02, 4.81, -6.63]}
              rotation={[0.6, -0.32, 0.05]}
            />
            <mesh
              name="Firtree_82"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_82.geometry}
              material={materials["World ap"]}
              position={[64.53, 10.91, -1.82]}
              rotation={[0.78, -0.32, 0.05]}
            />
            <mesh
              name="Firtree_83"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_83.geometry}
              material={materials["World ap"]}
              position={[52.53, 7.31, -10.78]}
              rotation={[0.59, -0.28, 0.8]}
            />
            <mesh
              name="Firtree_84"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_84.geometry}
              material={materials["World ap"]}
              position={[67.86, 0.03, -10.31]}
              rotation={[0.59, -0.28, 0.8]}
            />
            <mesh
              name="Firtree_85"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_85.geometry}
              material={materials["World ap"]}
              position={[69.72, -9.31, -17.67]}
              rotation={[0.29, -0.07, 0.66]}
            />
            <mesh
              name="Firtree_86"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_86.geometry}
              material={materials["World ap"]}
              position={[66.17, 25.68, 10.25]}
              rotation={[0.83, -0.35, -1.96]}
            />
            <mesh
              name="Firtree_87"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_87.geometry}
              material={materials["World ap"]}
              position={[-16.4, 21.85, 6.13]}
              rotation={[0.99, 0.77, 1.86]}
            />
            <mesh
              name="Firtree_88"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_88.geometry}
              material={materials["World ap"]}
              position={[-18.44, 25.56, 10.74]}
              rotation={[0.99, 0.77, 1.86]}
            />
            <mesh
              name="Firtree_89"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_89.geometry}
              material={materials["World ap"]}
              position={[-56.81, -49.67, 5.84]}
              rotation={[0.12, 0.8, 2.7]}
            />
            <mesh
              name="Firtree_9"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_9.geometry}
              material={materials["World ap"]}
              position={[32.65, 17.22, -0.61]}
              rotation={[0.94, -0.07, -1.62]}
            />
            <mesh
              name="Firtree_90"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_90.geometry}
              material={materials["World ap"]}
              position={[-47.03, -26.86, -1.51]}
              rotation={[0.12, 0.8, 2.7]}
            />
            <mesh
              name="Firtree_91"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_91.geometry}
              material={materials["World ap"]}
              position={[-51.27, -8.26, 18.84]}
              rotation={[1.19, 0.78, 0.4]}
            />
            <mesh
              name="Firtree_92"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_92.geometry}
              material={materials["World ap"]}
              position={[-56.29, -33.98, 4]}
              rotation={[0.38, 1.02, 2.38]}
            />
            <mesh
              name="Firtree_93"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_93.geometry}
              material={materials["World ap"]}
              position={[60.1, -142.32, 2.38]}
              rotation={[-0.65, -0.48, -0.26]}
            />
            <mesh
              name="Firtree_94"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_94.geometry}
              material={materials["World ap"]}
              position={[100.81, -115.34, 11.14]}
              rotation={[-0.97, -0.63, -0.89]}
            />
            <mesh
              name="Firtree_95"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_95.geometry}
              material={materials["World ap"]}
              position={[57.73, -148.83, 5.76]}
              rotation={[-0.65, -0.48, -0.26]}
            />
            <mesh
              name="Firtree_96"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_96.geometry}
              material={materials["World ap"]}
              position={[58.51, -147.99, 13.82]}
              rotation={[-1.16, -0.36, 3.09]}
            />
            <mesh
              name="Firtree_97"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_97.geometry}
              material={materials["World ap"]}
              position={[96.41, -119.21, 6.79]}
              rotation={[-0.67, -0.6, -0.64]}
            />
            <mesh
              name="Firtree_98"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_98.geometry}
              material={materials["World ap"]}
              position={[85.58, -146.63, 43.14]}
              rotation={[-1.49, -0.41, -1.75]}
            />
            <mesh
              name="Firtree_99"
              castShadow
              receiveShadow
              geometry={nodes.Firtree_99.geometry}
              material={materials["World ap"]}
              position={[96.56, -136.96, 36.08]}
              rotation={[-1.3, -0.79, -1.27]}
            />
          </group>
          <group
            name="Palms"
            position={[-68.62, 82.82, 15.93]}
            rotation={[2.1, 0.5, 1.38]}
          >
            <group
              name="Africa"
              position={[68.89, 73.37, 49.11]}
              rotation={[0.26, -0.67, 0.01]}
            >
              <mesh
                name="Palm_10_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_10_3.geometry}
                material={materials["World ap"]}
                position={[-21.32, 22.37, 46.56]}
                rotation={[1.05, 0.85, -0.29]}
              />
              <mesh
                name="Palm_11_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_11_3.geometry}
                material={materials["World ap"]}
                position={[3.38, 21.43, 18.13]}
                rotation={[1.23, -0.09, -0.32]}
              />
              <mesh
                name="Palm_12_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_12_3.geometry}
                material={materials["World ap"]}
                position={[9.39, 22.77, 21.96]}
                rotation={[1.23, -0.09, -1.58]}
              />
              <mesh
                name="Palm_13_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_13_3.geometry}
                material={materials["World ap"]}
                position={[20.16, 26.2, 34.32]}
                rotation={[0.58, -0.44, -0.44]}
              />
              <mesh
                name="Palm_14_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_14_3.geometry}
                material={materials["World ap"]}
                position={[27.71, 27.28, 40.3]}
                rotation={[0.58, -0.44, -0.44]}
              />
              <mesh
                name="Palm_15_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_15_3.geometry}
                material={materials["World ap"]}
                position={[17.09, 18.71, 26.67]}
                rotation={[0.91, -0.8, -0.47]}
              />
              <mesh
                name="Palm_16_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_16_3.geometry}
                material={materials["World ap"]}
                position={[9.83, 25.46, 30.64]}
                rotation={[1.15, -0.33, -0.34]}
              />
              <mesh
                name="Palm_17_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_17_3.geometry}
                material={materials["World ap"]}
                position={[15.03, 19.78, 22.07]}
                rotation={[0.82, -0.2, -0.42]}
              />
              <mesh
                name="Palm_18_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_18_3.geometry}
                material={materials["World ap"]}
                position={[6.95, 17, 16.77]}
                rotation={[0.82, -0.2, -0.42]}
              />
              <mesh
                name="Palm_19_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_19_3.geometry}
                material={materials["World ap"]}
                position={[12.76, 12.63, 5.63]}
                rotation={[0.82, -0.2, -0.42]}
              />
              <mesh
                name="Palm_1_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_1_3.geometry}
                material={materials["World ap"]}
                position={[11.41, -7.46, -14.61]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_20_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_20_3.geometry}
                material={materials["World ap"]}
                position={[17.89, 13.31, 8.13]}
                rotation={[1.25, -0.36, -0.31]}
              />
              <mesh
                name="Palm_21_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_21_3.geometry}
                material={materials["World ap"]}
                position={[-24.41, 5.81, 15.37]}
                rotation={[1.32, 0.75, -0.37]}
              />
              <mesh
                name="Palm_22_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_22_3.geometry}
                material={materials["World ap"]}
                position={[-31.92, -2.5, 11.2]}
                rotation={[0.6, 0.81, 0.15]}
              />
              <mesh
                name="Palm_23_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_23_3.geometry}
                material={materials["World ap"]}
                position={[-33.19, 0.21, 17.17]}
                rotation={[0.6, 0.81, 0.15]}
              />
              <mesh
                name="Palm_24_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_24_3.geometry}
                material={materials["World ap"]}
                position={[-37.94, -4.58, 15.28]}
                rotation={[0.6, 0.81, -0.92]}
              />
              <mesh
                name="Palm_25_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_25_3.geometry}
                material={materials["World ap"]}
                position={[20.42, 27.91, 36.77]}
                rotation={[1.09, -0.58, -0.18]}
              />
              <mesh
                name="Palm_26_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_26_3.geometry}
                material={materials["World ap"]}
                position={[18.13, 3.44, 0.72]}
                rotation={[0.93, -0.75, 0.54]}
              />
              <mesh
                name="Palm_27_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_27_3.geometry}
                material={materials["World ap"]}
                position={[19.67, 11.83, 16.21]}
                rotation={[1.25, -0.36, -0.31]}
              />
              <mesh
                name="Palm_28_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_28_3.geometry}
                material={materials["World ap"]}
                position={[28.17, -9.24, -5.95]}
                rotation={[1.01, -0.86, 0.94]}
              />
              <mesh
                name="Palm_29_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_29_3.geometry}
                material={materials["World ap"]}
                position={[18.34, -0.34, -9.53]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_2_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_2_4.geometry}
                material={materials["World ap"]}
                position={[23.43, -0.6, -3.57]}
                rotation={[0.4, -0.28, 0.69]}
              />
              <mesh
                name="Palm_30_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_30_3.geometry}
                material={materials["World ap"]}
                position={[6.66, -16.76, -9.32]}
                rotation={[0.2, 0.48, -0.11]}
              />
              <mesh
                name="Palm_31_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_31_2.geometry}
                material={materials["World ap"]}
                position={[10.22, -18.66, -15.03]}
                rotation={[-0.49, 0.8, 0.42]}
              />
              <mesh
                name="Palm_32_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_32_2.geometry}
                material={materials["World ap"]}
                position={[-13.49, 25.12, 47.26]}
                rotation={[0.9, 0.36, -0.21]}
              />
              <mesh
                name="Palm_33_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_33_2.geometry}
                material={materials["World ap"]}
                position={[-17.55, 23.96, 49.11]}
                rotation={[1.68, 0.48, -0.43]}
              />
              <mesh
                name="Palm_34_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_34_2.geometry}
                material={materials["World ap"]}
                position={[-19.74, -0.58, 5.87]}
                rotation={[0.52, 0.92, -0.08]}
              />
              <mesh
                name="Palm_35_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_35_2.geometry}
                material={materials["World ap"]}
                position={[-13.45, 24.64, 53.09]}
                rotation={[1.51, 0.16, -0.14]}
              />
              <mesh
                name="Palm_36_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_36_2.geometry}
                material={materials["World ap"]}
                position={[-20.51, 24.23, 49.63]}
                rotation={[1.62, 0.74, -0.19]}
              />
              <mesh
                name="Palm_37_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_37_2.geometry}
                material={materials["World ap"]}
                position={[-3.36, 28.29, 51.92]}
                rotation={[2, 0.17, -0.72]}
              />
              <mesh
                name="Palm_38_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_38_2.geometry}
                material={materials["World ap"]}
                position={[-23.26, 21.37, 43.92]}
                rotation={[1.03, 0.69, -0.28]}
              />
              <mesh
                name="Palm_39_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_39_2.geometry}
                material={materials["World ap"]}
                position={[-40.85, 1.14, 39.29]}
                rotation={[1.03, 0.69, -0.28]}
              />
              <mesh
                name="Palm_3_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_3_3.geometry}
                material={materials["World ap"]}
                position={[15.01, 6.9, 0.26]}
                rotation={[0.61, -0.15, 0.39]}
              />
              <mesh
                name="Palm_3_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_3_4.geometry}
                material={materials["World ap"]}
                position={[-14.08, -0.89, -0.25]}
                rotation={[0.24, 0.37, 0.11]}
              />
              <mesh
                name="Palm_40_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_40_2.geometry}
                material={materials["World ap"]}
                position={[-35.7, 11.31, 38.14]}
                rotation={[1.03, 0.69, -0.28]}
              />
              <mesh
                name="Palm_41_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_41_2.geometry}
                material={materials["World ap"]}
                position={[-42.85, -1, 35.96]}
                rotation={[0.77, 0.91, -0.11]}
              />
              <mesh
                name="Palm_42_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_42_2.geometry}
                material={materials["World ap"]}
                position={[-39.49, -1.78, 19.19]}
                rotation={[0.6, 0.81, -0.92]}
              />
              <mesh
                name="Palm_43_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_43_2.geometry}
                material={materials["World ap"]}
                position={[-42.86, -2.5, 23]}
                rotation={[0.78, 0.89, -1.05]}
              />
              <mesh
                name="Palm_44_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_44_2.geometry}
                material={materials["World ap"]}
                position={[-47.57, -6.66, 27.07]}
                rotation={[0.78, 0.89, -1.05]}
              />
              <mesh
                name="Palm_45_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_45_2.geometry}
                material={materials["World ap"]}
                position={[-49, -11.96, 24.28]}
                rotation={[0.78, 0.89, -0.25]}
              />
              <mesh
                name="Palm_46_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_46_2.geometry}
                material={materials["World ap"]}
                position={[4.56, 29.69, 48.51]}
                rotation={[1.26, -0.01, -0.32]}
              />
              <mesh
                name="Palm_47_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_47_2.geometry}
                material={materials["World ap"]}
                position={[5.54, 30.16, 51.83]}
                rotation={[1.58, -0.19, -0.3]}
              />
              <mesh
                name="Palm_48_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_48_2.geometry}
                material={materials["World ap"]}
                position={[-43.37, -1.41, 32.08]}
                rotation={[0.77, 0.91, -0.11]}
              />
              <mesh
                name="Palm_49_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_49_2.geometry}
                material={materials["World ap"]}
                position={[-42.65, -2.77, 29.47]}
                rotation={[0.76, 0.91, -0.3]}
              />
              <mesh
                name="Palm_4_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_4_3.geometry}
                material={materials["World ap"]}
                position={[-15.94, 3.36, 7.85]}
                rotation={[1.01, 0.76, -0.27]}
              />
              <mesh
                name="Palm_50_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_50_2.geometry}
                material={materials["World ap"]}
                position={[-0.93, 15.13, 12.05]}
                rotation={[0.89, 0.34, -0.2]}
              />
              <mesh
                name="Palm_51_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_51_2.geometry}
                material={materials["World ap"]}
                position={[4.74, 21.9, 16]}
                rotation={[0.89, 0.34, -0.2]}
              />
              <mesh
                name="Palm_52_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_52_2.geometry}
                material={materials["World ap"]}
                position={[-15.6, -2.2, 2.14]}
                rotation={[0.89, 0.34, -0.2]}
              />
              <mesh
                name="Palm_53_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_53_2.geometry}
                material={materials["World ap"]}
                position={[-8.65, -5.18, -11.32]}
                rotation={[0.94, 0.53, -0.23]}
              />
              <mesh
                name="Palm_54_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_54_2.geometry}
                material={materials["World ap"]}
                position={[1.47, 20.88, 15.56]}
                rotation={[1.15, 0.51, -0.23]}
              />
              <mesh
                name="Palm_55_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_55_2.geometry}
                material={materials["World ap"]}
                position={[9.27, 25.49, 27]}
                rotation={[1.15, 0.51, -0.23]}
              />
              <mesh
                name="Palm_56_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_56_2.geometry}
                material={materials["World ap"]}
                position={[8.67, 22.7, 23.21]}
                rotation={[1.15, 0.51, -0.23]}
              />
              <mesh
                name="Palm_57_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_57_2.geometry}
                material={materials["World ap"]}
                position={[-7.07, -4.42, -5.71]}
                rotation={[0.15, 0.78, 0.17]}
              />
              <mesh
                name="Palm_5_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_5_3.geometry}
                material={materials["World ap"]}
                position={[-10.07, 6.41, 9.26]}
                rotation={[1.14, 0.55, -0.23]}
              />
              <mesh
                name="Palm_6_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_6_3.geometry}
                material={materials["World ap"]}
                position={[-18.36, -1.23, 3.4]}
                rotation={[0.48, 0.5, -0.06]}
              />
              <mesh
                name="Palm_7_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_7_3.geometry}
                material={materials["World ap"]}
                position={[3.94, 17.17, 12.13]}
                rotation={[0.89, 0.34, -0.2]}
              />
              <mesh
                name="Palm_80_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_80_2.geometry}
                material={materials["World ap"]}
                position={[6.68, -5.44, -5.45]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_81_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_81_3.geometry}
                material={materials["World ap"]}
                position={[-7.51, -3.03, -2.06]}
                rotation={[0.69, 0.56, -0.12]}
              />
              <mesh
                name="Palm_82_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_82_3.geometry}
                material={materials["World ap"]}
                position={[-2.09, 6.81, 1.41]}
                rotation={[0.69, 0.56, -0.12]}
              />
              <mesh
                name="Palm_83_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_83_2.geometry}
                material={materials["World ap"]}
                position={[10.33, 0.38, -4.53]}
                rotation={[0.61, -0.15, -0.1]}
              />
              <mesh
                name="Palm_85_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_85_2.geometry}
                material={materials["World ap"]}
                position={[1.9, -12.53, -7.88]}
                rotation={[0.53, 0.44, -0.1]}
              />
              <mesh
                name="Palm_86_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_86_3.geometry}
                material={materials["World ap"]}
                position={[8.57, 5.79, -0.2]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_87_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_87_3.geometry}
                material={materials["World ap"]}
                position={[-4.39, 9.09, 8.33]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_88_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_88_2.geometry}
                material={materials["World ap"]}
                position={[3.83, 11.71, 5.27]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_89_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_89_3.geometry}
                material={materials["World ap"]}
                position={[-10.33, 4.11, 2.8]}
                rotation={[0.91, 0.36, -0.14]}
              />
              <mesh
                name="Palm_8_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_8_3.geometry}
                material={materials["World ap"]}
                position={[-26.69, 0.7, 9.89]}
                rotation={[1.32, 0.75, -0.37]}
              />
              <mesh
                name="Palm_90_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_90_3.geometry}
                material={materials["World ap"]}
                position={[3.18, -0.35, -5.68]}
                rotation={[0.91, 0.36, -0.14]}
              />
              <mesh
                name="Palm_91_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_91_3.geometry}
                material={materials["World ap"]}
                position={[-5.18, -4.42, -6.53]}
                rotation={[0.58, 0.12, 0.44]}
              />
              <mesh
                name="Palm_9_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_9_3.geometry}
                material={materials["World ap"]}
                position={[-3.81, 12.33, 11.07]}
                rotation={[0.89, 0.34, -0.2]}
              />
            </group>
            <group
              name="America"
              position={[121.64, 40.46, 118.25]}
              rotation={[0.68, -0.89, -0.51]}
            >
              <mesh
                name="Palm_10_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_10_2.geometry}
                material={materials["World ap"]}
                position={[1.09, 32.77, 62.86]}
                rotation={[1.52, 0.11, -0.41]}
              />
              <mesh
                name="Palm_11_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_11_2.geometry}
                material={materials["World ap"]}
                position={[1.17, 16.92, 21.54]}
                rotation={[1.23, -0.09, -0.32]}
              />
              <mesh
                name="Palm_12_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_12_2.geometry}
                material={materials["World ap"]}
                position={[9.47, 17.04, 22.85]}
                rotation={[1.23, -0.09, -0.32]}
              />
              <mesh
                name="Palm_13_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_13_2.geometry}
                material={materials["World ap"]}
                position={[20.58, 19.69, 35.5]}
                rotation={[0.58, -0.44, -0.44]}
              />
              <mesh
                name="Palm_14_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_14_2.geometry}
                material={materials["World ap"]}
                position={[28.47, 20.35, 41.66]}
                rotation={[0.58, -0.44, -0.44]}
              />
              <mesh
                name="Palm_15_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_15_2.geometry}
                material={materials["World ap"]}
                position={[18.66, 18.26, 23.68]}
                rotation={[0.91, -0.8, -0.47]}
              />
              <mesh
                name="Palm_16_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_16_2.geometry}
                material={materials["World ap"]}
                position={[9.83, 25.46, 30.64]}
                rotation={[1.15, -0.33, -0.34]}
              />
              <mesh
                name="Palm_17_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_17_2.geometry}
                material={materials["World ap"]}
                position={[15.11, 14.06, 22.96]}
                rotation={[0.82, -0.2, -0.42]}
              />
              <mesh
                name="Palm_18_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_18_2.geometry}
                material={materials["World ap"]}
                position={[8.44, 10.88, 14.96]}
                rotation={[0.82, -0.2, -0.42]}
              />
              <mesh
                name="Palm_19_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_19_2.geometry}
                material={materials["World ap"]}
                position={[14.6, 5.34, 7.67]}
                rotation={[0.82, -0.2, -0.42]}
              />
              <mesh
                name="Palm_1_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_1_2.geometry}
                material={materials["World ap"]}
                position={[15.13, -16.44, -8.07]}
                rotation={[0.21, -0.1, 0.65]}
              />
              <mesh
                name="Palm_20_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_20_2.geometry}
                material={materials["World ap"]}
                position={[19.1, -0.7, 3.92]}
                rotation={[1.25, -0.36, -0.31]}
              />
              <mesh
                name="Palm_21_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_21_2.geometry}
                material={materials["World ap"]}
                position={[-4.9, -7.44, -8.22]}
                rotation={[0.76, 0.52, -0.38]}
              />
              <mesh
                name="Palm_22_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_22_2.geometry}
                material={materials["World ap"]}
                position={[-13.85, -15.36, -8.66]}
                rotation={[0.16, 0.63, -0.04]}
              />
              <mesh
                name="Palm_23_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_23_2.geometry}
                material={materials["World ap"]}
                position={[-14.8, -9.69, -5.25]}
                rotation={[0.16, 0.63, -0.04]}
              />
              <mesh
                name="Palm_24_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_24_2.geometry}
                material={materials["World ap"]}
                position={[-37.94, -4.58, 15.28]}
                rotation={[0.6, 0.81, -0.92]}
              />
              <mesh
                name="Palm_25_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_25_2.geometry}
                material={materials["World ap"]}
                position={[20.85, 21.4, 37.95]}
                rotation={[1.09, -0.58, -0.18]}
              />
              <mesh
                name="Palm_26_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_26_2.geometry}
                material={materials["World ap"]}
                position={[18.25, -4.72, 1.99]}
                rotation={[0.93, -0.75, 0.54]}
              />
              <mesh
                name="Palm_27_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_27_2.geometry}
                material={materials["World ap"]}
                position={[19.67, 11.83, 16.21]}
                rotation={[1.25, -0.36, -0.31]}
              />
              <mesh
                name="Palm_28_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_28_2.geometry}
                material={materials["World ap"]}
                position={[-1.08, -28.79, -16.33]}
                rotation={[-0.33, 0.11, 0.35]}
              />
              <mesh
                name="Palm_29_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_29_2.geometry}
                material={materials["World ap"]}
                position={[10.77, -19.68, -13.64]}
                rotation={[0.15, -0.01, -0.1]}
              />
              <mesh
                name="Palm_2_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_2_2.geometry}
                material={materials["World ap"]}
                position={[15.13, -1.26, 1.52]}
                rotation={[0.61, -0.15, 0.39]}
              />
              <mesh
                name="Palm_2_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_2_3.geometry}
                material={materials["World ap"]}
                position={[18.58, -12.3, -4.65]}
                rotation={[0.4, -0.28, 0.69]}
              />
              <mesh
                name="Palm_30_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_30_2.geometry}
                material={materials["World ap"]}
                position={[6.66, -16.76, -9.32]}
                rotation={[0.2, 0.48, -0.11]}
              />
              <mesh
                name="Palm_31"
                castShadow
                receiveShadow
                geometry={nodes.Palm_31.geometry}
                material={materials["World ap"]}
                position={[7.09, -24.83, -15.76]}
                rotation={[0.06, 0.29, 0.01]}
              />
              <mesh
                name="Palm_32"
                castShadow
                receiveShadow
                geometry={nodes.Palm_32.geometry}
                material={materials["World ap"]}
                position={[-2.73, 30.19, 56.84]}
                rotation={[1.2, -0.11, -0.39]}
              />
              <mesh
                name="Palm_33"
                castShadow
                receiveShadow
                geometry={nodes.Palm_33.geometry}
                material={materials["World ap"]}
                position={[-9.88, 31.04, 52.08]}
                rotation={[1.29, 0.28, -0.41]}
              />
              <mesh
                name="Palm_34"
                castShadow
                receiveShadow
                geometry={nodes.Palm_34.geometry}
                material={materials["World ap"]}
                position={[-19.74, -0.58, 5.87]}
                rotation={[0.52, 0.92, -0.08]}
              />
              <mesh
                name="Palm_35"
                castShadow
                receiveShadow
                geometry={nodes.Palm_35.geometry}
                material={materials["World ap"]}
                position={[-5.33, 31.26, 53.11]}
                rotation={[1.51, 0.16, -0.14]}
              />
              <mesh
                name="Palm_36"
                castShadow
                receiveShadow
                geometry={nodes.Palm_36.geometry}
                material={materials["World ap"]}
                position={[-16.15, 32.22, 57.59]}
                rotation={[1.03, 0.09, -0.48]}
              />
              <mesh
                name="Palm_37"
                castShadow
                receiveShadow
                geometry={nodes.Palm_37.geometry}
                material={materials["World ap"]}
                position={[-16.05, 29.53, 55.34]}
                rotation={[0.31, 0.54, -0.78]}
              />
              <mesh
                name="Palm_38"
                castShadow
                receiveShadow
                geometry={nodes.Palm_38.geometry}
                material={materials["World ap"]}
                position={[-21.64, 29.25, 54.54]}
                rotation={[0.6, 0.24, -0.89]}
              />
              <mesh
                name="Palm_39"
                castShadow
                receiveShadow
                geometry={nodes.Palm_39.geometry}
                material={materials["World ap"]}
                position={[31.58, 24.81, 90.81]}
                rotation={[1.43, 0.07, -0.41]}
              />
              <mesh
                name="Palm_3_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_3_2.geometry}
                material={materials["World ap"]}
                position={[-13.72, -1.12, 0.67]}
                rotation={[0.24, 0.37, 0.11]}
              />
              <mesh
                name="Palm_40"
                castShadow
                receiveShadow
                geometry={nodes.Palm_40.geometry}
                material={materials["World ap"]}
                position={[36.71, 26.56, 91.51]}
                rotation={[1.43, 0.07, -0.41]}
              />
              <mesh
                name="Palm_41"
                castShadow
                receiveShadow
                geometry={nodes.Palm_41.geometry}
                material={materials["World ap"]}
                position={[31.17, 26.2, 87.97]}
                rotation={[1.29, 0.32, -0.4]}
              />
              <mesh
                name="Palm_42"
                castShadow
                receiveShadow
                geometry={nodes.Palm_42.geometry}
                material={materials["World ap"]}
                position={[-2, -24.98, -15.85]}
                rotation={[0.06, 0.29, 0.01]}
              />
              <mesh
                name="Palm_43"
                castShadow
                receiveShadow
                geometry={nodes.Palm_43.geometry}
                material={materials["World ap"]}
                position={[-4.92, -21.9, -11.27]}
                rotation={[0.06, 0.29, 0.01]}
              />
              <mesh
                name="Palm_44"
                castShadow
                receiveShadow
                geometry={nodes.Palm_44.geometry}
                material={materials["World ap"]}
                position={[0.96, -19.03, -13.48]}
                rotation={[0.01, -0.18, 0.35]}
              />
              <mesh
                name="Palm_45"
                castShadow
                receiveShadow
                geometry={nodes.Palm_45.geometry}
                material={materials["World ap"]}
                position={[10.66, -26.03, -16.24]}
                rotation={[0.05, -0.18, 0.37]}
              />
              <mesh
                name="Palm_46"
                castShadow
                receiveShadow
                geometry={nodes.Palm_46.geometry}
                material={materials["World ap"]}
                position={[3.2, -21.14, -13.69]}
                rotation={[-0.39, 0.28, 0.57]}
              />
              <mesh
                name="Palm_47"
                castShadow
                receiveShadow
                geometry={nodes.Palm_47.geometry}
                material={materials["World ap"]}
                position={[6.85, -30.22, -14.77]}
                rotation={[-0.33, 0.11, 0.35]}
              />
              <mesh
                name="Palm_48"
                castShadow
                receiveShadow
                geometry={nodes.Palm_48.geometry}
                material={materials["World ap"]}
                position={[6.85, 23.16, 36.91]}
                rotation={[1.52, -0.14, -0.33]}
              />
              <mesh
                name="Palm_49"
                castShadow
                receiveShadow
                geometry={nodes.Palm_49.geometry}
                material={materials["World ap"]}
                position={[15.97, 24.78, 46.53]}
                rotation={[1.63, -0.14, -0.05]}
              />
              <mesh
                name="Palm_4_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_4_2.geometry}
                material={materials["World ap"]}
                position={[-15.94, 3.36, 7.85]}
                rotation={[1.01, 0.76, -0.27]}
              />
              <mesh
                name="Palm_50"
                castShadow
                receiveShadow
                geometry={nodes.Palm_50.geometry}
                material={materials["World ap"]}
                position={[14.38, 23.52, 38.59]}
                rotation={[1.52, 0.06, -0.07]}
              />
              <mesh
                name="Palm_51"
                castShadow
                receiveShadow
                geometry={nodes.Palm_51.geometry}
                material={materials["World ap"]}
                position={[15.89, 21.9, 32.79]}
                rotation={[1.52, 0.06, -0.07]}
              />
              <mesh
                name="Palm_52"
                castShadow
                receiveShadow
                geometry={nodes.Palm_52.geometry}
                material={materials["World ap"]}
                position={[2.09, 22.27, 29.38]}
                rotation={[1.32, 0.05, -0.31]}
              />
              <mesh
                name="Palm_53"
                castShadow
                receiveShadow
                geometry={nodes.Palm_53.geometry}
                material={materials["World ap"]}
                position={[-6.08, 22.21, 29.79]}
                rotation={[1.33, -0.04, 0.56]}
              />
              <mesh
                name="Palm_54"
                castShadow
                receiveShadow
                geometry={nodes.Palm_54.geometry}
                material={materials["World ap"]}
                position={[1.22, 23.25, 35.82]}
                rotation={[1.33, -0.04, 0.56]}
              />
              <mesh
                name="Palm_55"
                castShadow
                receiveShadow
                geometry={nodes.Palm_55.geometry}
                material={materials["World ap"]}
                position={[-10.06, 12.41, 19.6]}
                rotation={[0.82, -0.2, -0.42]}
              />
              <mesh
                name="Palm_56"
                castShadow
                receiveShadow
                geometry={nodes.Palm_56.geometry}
                material={materials["World ap"]}
                position={[30.28, 21.12, 42.5]}
                rotation={[1.15, -0.2, -0.29]}
              />
              <mesh
                name="Palm_57"
                castShadow
                receiveShadow
                geometry={nodes.Palm_57.geometry}
                material={materials["World ap"]}
                position={[-7.98, 31.92, 58.25]}
                rotation={[1.54, 0.06, -0.82]}
              />
              <mesh
                name="Palm_58"
                castShadow
                receiveShadow
                geometry={nodes.Palm_58.geometry}
                material={materials["World ap"]}
                position={[42.36, 22.15, 84.15]}
                rotation={[1.61, -0.07, -0.39]}
              />
              <mesh
                name="Palm_59"
                castShadow
                receiveShadow
                geometry={nodes.Palm_59.geometry}
                material={materials["World ap"]}
                position={[39.86, 20.97, 78.61]}
                rotation={[1.28, -0.28, -0.43]}
              />
              <mesh
                name="Palm_5_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_5_2.geometry}
                material={materials["World ap"]}
                position={[-9.99, 0.69, 10.14]}
                rotation={[0.89, 0.34, -0.2]}
              />
              <mesh
                name="Palm_60"
                castShadow
                receiveShadow
                geometry={nodes.Palm_60.geometry}
                material={materials["World ap"]}
                position={[34.94, 23.46, 80.08]}
                rotation={[1.64, -0.12, -0.79]}
              />
              <mesh
                name="Palm_61"
                castShadow
                receiveShadow
                geometry={nodes.Palm_61.geometry}
                material={materials["World ap"]}
                position={[57.99, 12.01, 88.43]}
                rotation={[1.97, -0.59, -0.18]}
              />
              <mesh
                name="Palm_62"
                castShadow
                receiveShadow
                geometry={nodes.Palm_62.geometry}
                material={materials["World ap"]}
                position={[58.58, 10.1, 94.41]}
                rotation={[2.06, -0.67, -0.11]}
              />
              <mesh
                name="Palm_63"
                castShadow
                receiveShadow
                geometry={nodes.Palm_63.geometry}
                material={materials["World ap"]}
                position={[59.77, 6.97, 89.69]}
                rotation={[2.42, -0.87, 0.18]}
              />
              <mesh
                name="Palm_64"
                castShadow
                receiveShadow
                geometry={nodes.Palm_64.geometry}
                material={materials["World ap"]}
                position={[60.03, 7.69, 87.34]}
                rotation={[1.53, -1.09, -0.82]}
              />
              <mesh
                name="Palm_65"
                castShadow
                receiveShadow
                geometry={nodes.Palm_65.geometry}
                material={materials["World ap"]}
                position={[58.57, 11.76, 78.12]}
                rotation={[1.19, -1.1, -0.72]}
              />
              <mesh
                name="Palm_66"
                castShadow
                receiveShadow
                geometry={nodes.Palm_66.geometry}
                material={materials["World ap"]}
                position={[57.21, 11.84, 84.55]}
                rotation={[1.19, -1.1, -0.72]}
              />
              <mesh
                name="Palm_67"
                castShadow
                receiveShadow
                geometry={nodes.Palm_67.geometry}
                material={materials["World ap"]}
                position={[56.92, 17.16, 80.37]}
                rotation={[1.62, -0.75, -0.08]}
              />
              <mesh
                name="Palm_68"
                castShadow
                receiveShadow
                geometry={nodes.Palm_68.geometry}
                material={materials["World ap"]}
                position={[10.78, 2.32, 3.3]}
                rotation={[0.82, -0.2, -0.42]}
              />
              <mesh
                name="Palm_69"
                castShadow
                receiveShadow
                geometry={nodes.Palm_69.geometry}
                material={materials["World ap"]}
                position={[5.83, 9.31, 9.37]}
                rotation={[0.82, -0.2, -0.42]}
              />
              <mesh
                name="Palm_6_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_6_2.geometry}
                material={materials["World ap"]}
                position={[-18.36, -1.23, 3.4]}
                rotation={[0.48, 0.5, -0.06]}
              />
              <mesh
                name="Palm_70"
                castShadow
                receiveShadow
                geometry={nodes.Palm_70.geometry}
                material={materials["World ap"]}
                position={[-1, -3.06, -0.09]}
                rotation={[0.82, -0.2, -0.42]}
              />
              <mesh
                name="Palm_71"
                castShadow
                receiveShadow
                geometry={nodes.Palm_71.geometry}
                material={materials["World ap"]}
                position={[14.54, 8.87, 17.29]}
                rotation={[0.82, -0.2, -0.42]}
              />
              <mesh
                name="Palm_72"
                castShadow
                receiveShadow
                geometry={nodes.Palm_72.geometry}
                material={materials["World ap"]}
                position={[12.31, 17.49, 25.91]}
                rotation={[0.82, -0.2, -0.42]}
              />
              <mesh
                name="Palm_73"
                castShadow
                receiveShadow
                geometry={nodes.Palm_73.geometry}
                material={materials["World ap"]}
                position={[18.57, 21.78, 32.36]}
                rotation={[0.82, -0.2, -0.42]}
              />
              <mesh
                name="Palm_74"
                castShadow
                receiveShadow
                geometry={nodes.Palm_74.geometry}
                material={materials["World ap"]}
                position={[23.75, 0.25, 12.2]}
                rotation={[1.2, -0.25, -0.28]}
              />
              <mesh
                name="Palm_75"
                castShadow
                receiveShadow
                geometry={nodes.Palm_75.geometry}
                material={materials["World ap"]}
                position={[25.34, -1.19, 6.49]}
                rotation={[0.97, -0.49, -0.35]}
              />
              <mesh
                name="Palm_76"
                castShadow
                receiveShadow
                geometry={nodes.Palm_76.geometry}
                material={materials["World ap"]}
                position={[22.95, 8.11, 17.72]}
                rotation={[0.97, -0.49, -0.35]}
              />
              <mesh
                name="Palm_77"
                castShadow
                receiveShadow
                geometry={nodes.Palm_77.geometry}
                material={materials["World ap"]}
                position={[29.07, 15.54, 34.3]}
                rotation={[0.97, -0.49, -0.35]}
              />
              <mesh
                name="Palm_78"
                castShadow
                receiveShadow
                geometry={nodes.Palm_78.geometry}
                material={materials["World ap"]}
                position={[29.64, 12.36, 30.22]}
                rotation={[0.97, -0.49, -0.35]}
              />
              <mesh
                name="Palm_79"
                castShadow
                receiveShadow
                geometry={nodes.Palm_79.geometry}
                material={materials["World ap"]}
                position={[19.9, 6.53, 12.73]}
                rotation={[0.97, -0.49, -0.35]}
              />
              <mesh
                name="Palm_7_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_7_2.geometry}
                material={materials["World ap"]}
                position={[4.02, 11.45, 13.01]}
                rotation={[0.89, 0.34, -0.2]}
              />
              <mesh
                name="Palm_80"
                castShadow
                receiveShadow
                geometry={nodes.Palm_80.geometry}
                material={materials["World ap"]}
                position={[6.74, -9.38, -4.84]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_81_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_81_2.geometry}
                material={materials["World ap"]}
                position={[-7.51, -3.03, -2.06]}
                rotation={[0.69, 0.56, -0.12]}
              />
              <mesh
                name="Palm_82_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_82_2.geometry}
                material={materials["World ap"]}
                position={[-2, 0.7, 2.35]}
                rotation={[0.69, 0.56, -0.12]}
              />
              <mesh
                name="Palm_83"
                castShadow
                receiveShadow
                geometry={nodes.Palm_83.geometry}
                material={materials["World ap"]}
                position={[10.41, -4.94, -3.71]}
                rotation={[0.61, -0.15, -0.1]}
              />
              <mesh
                name="Palm_84"
                castShadow
                receiveShadow
                geometry={nodes.Palm_84.geometry}
                material={materials["World ap"]}
                position={[9.41, -10.5, -11.59]}
                rotation={[0.21, -0.1, -0.15]}
              />
              <mesh
                name="Palm_85"
                castShadow
                receiveShadow
                geometry={nodes.Palm_85.geometry}
                material={materials["World ap"]}
                position={[4.64, -12.14, -9.13]}
                rotation={[0.53, 0.44, -0.1]}
              />
              <mesh
                name="Palm_86_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_86_2.geometry}
                material={materials["World ap"]}
                position={[9.17, -1.26, -0.09]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_87_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_87_2.geometry}
                material={materials["World ap"]}
                position={[-4.39, 9.09, 8.33]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_88"
                castShadow
                receiveShadow
                geometry={nodes.Palm_88.geometry}
                material={materials["World ap"]}
                position={[3.94, 3.61, 6.53]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_89_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_89_2.geometry}
                material={materials["World ap"]}
                position={[-11.47, 3.02, 2.45]}
                rotation={[0.91, 0.36, -0.14]}
              />
              <mesh
                name="Palm_8_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_8_2.geometry}
                material={materials["World ap"]}
                position={[-10.94, -9.3, -3.48]}
                rotation={[0.76, 0.52, -0.38]}
              />
              <mesh
                name="Palm_90_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_90_2.geometry}
                material={materials["World ap"]}
                position={[0.86, -7.12, -3.88]}
                rotation={[0.48, 0.17, -0.3]}
              />
              <mesh
                name="Palm_91_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_91_2.geometry}
                material={materials["World ap"]}
                position={[-5.18, -4.42, -6.53]}
                rotation={[0.58, 0.12, 0.44]}
              />
              <mesh
                name="Palm_92"
                castShadow
                receiveShadow
                geometry={nodes.Palm_92.geometry}
                material={materials["World ap"]}
                position={[28.35, 1.38, 13.13]}
                rotation={[0.97, -0.49, -0.35]}
              />
              <mesh
                name="Palm_93"
                castShadow
                receiveShadow
                geometry={nodes.Palm_93.geometry}
                material={materials["World ap"]}
                position={[30.5, -22.16, -7.62]}
                rotation={[0.97, -0.49, -0.35]}
              />
              <mesh
                name="Palm_94"
                castShadow
                receiveShadow
                geometry={nodes.Palm_94.geometry}
                material={materials["World ap"]}
                position={[31.78, -11.29, 3.43]}
                rotation={[0.97, -0.49, -0.35]}
              />
              <mesh
                name="Palm_95"
                castShadow
                receiveShadow
                geometry={nodes.Palm_95.geometry}
                material={materials["World ap"]}
                position={[29.07, -12.05, 3.5]}
                rotation={[0.89, 0.02, 1.03]}
              />
              <mesh
                name="Palm_96"
                castShadow
                receiveShadow
                geometry={nodes.Palm_96.geometry}
                material={materials["World ap"]}
                position={[16.82, -8.7, -0.35]}
                rotation={[0.89, 0.02, 1.03]}
              />
              <mesh
                name="Palm_97"
                castShadow
                receiveShadow
                geometry={nodes.Palm_97.geometry}
                material={materials["World ap"]}
                position={[21.61, -20.23, -9.52]}
                rotation={[0.4, -0.28, 0.69]}
              />
              <mesh
                name="Palm_98"
                castShadow
                receiveShadow
                geometry={nodes.Palm_98.geometry}
                material={materials["World ap"]}
                position={[10.82, -33.15, -15.81]}
                rotation={[0.4, -0.28, 0.69]}
              />
              <mesh
                name="Palm_99"
                castShadow
                receiveShadow
                geometry={nodes.Palm_99.geometry}
                material={materials["World ap"]}
                position={[-13.65, 12.21, 18.63]}
                rotation={[1.43, 0.48, -0.37]}
              />
              <mesh
                name="Palm_9_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_9_2.geometry}
                material={materials["World ap"]}
                position={[-3.77, 9.62, 11.49]}
                rotation={[0.89, 0.34, -0.2]}
              />
            </group>
            <group name="Asia" position={[6.96, -47.91, 32.15]}>
              <mesh
                name="Palm_100"
                castShadow
                receiveShadow
                geometry={nodes.Palm_100.geometry}
                material={materials["World ap"]}
                position={[-6.14, 123.21, 32.21]}
                rotation={[0.43, 0.75, -0.08]}
              />
              <mesh
                name="Palm_101"
                castShadow
                receiveShadow
                geometry={nodes.Palm_101.geometry}
                material={materials["World ap"]}
                position={[-8.04, 125.27, 37.37]}
                rotation={[1.3, -0.6, -0.25]}
              />
              <mesh
                name="Palm_102"
                castShadow
                receiveShadow
                geometry={nodes.Palm_102.geometry}
                material={materials["World ap"]}
                position={[-8.88, 125.11, 37.33]}
                rotation={[1.44, -0.01, -0.21]}
              />
              <mesh
                name="Palm_103"
                castShadow
                receiveShadow
                geometry={nodes.Palm_103.geometry}
                material={materials["World ap"]}
                position={[-7.19, 125.18, 44.55]}
                rotation={[1.3, -0.6, -0.25]}
              />
              <mesh
                name="Palm_104"
                castShadow
                receiveShadow
                geometry={nodes.Palm_104.geometry}
                material={materials["World ap"]}
                position={[-7.67, 125.73, 45.68]}
                rotation={[1.44, -0.01, -0.21]}
              />
              <mesh
                name="Palm_105"
                castShadow
                receiveShadow
                geometry={nodes.Palm_105.geometry}
                material={materials["World ap"]}
                position={[-2.09, 122.07, 29.58]}
                rotation={[1.32, 0.4, -0.44]}
              />
              <mesh
                name="Palm_106"
                castShadow
                receiveShadow
                geometry={nodes.Palm_106.geometry}
                material={materials["World ap"]}
                position={[-2.56, 124.41, 31.17]}
                rotation={[1.69, 0.21, -0.55]}
              />
              <mesh
                name="Palm_107"
                castShadow
                receiveShadow
                geometry={nodes.Palm_107.geometry}
                material={materials["World ap"]}
                position={[-8.85, 124.91, 35.69]}
                rotation={[1.15, 0.47, 0.07]}
              />
              <mesh
                name="Palm_108"
                castShadow
                receiveShadow
                geometry={nodes.Palm_108.geometry}
                material={materials["World ap"]}
                position={[-13.92, 121.37, 32.88]}
                rotation={[1.15, 0.47, 0.07]}
              />
              <mesh
                name="Palm_109"
                castShadow
                receiveShadow
                geometry={nodes.Palm_109.geometry}
                material={materials["World ap"]}
                position={[44.86, 15.81, -34.66]}
                rotation={[-0.63, -0.29, 0.02]}
              />
              <mesh
                name="Palm_10_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_10_4.geometry}
                material={materials["World ap"]}
                position={[-22.48, 10.47, -24.86]}
                rotation={[-0.7, 0.44, 0.25]}
              />
              <mesh
                name="Palm_110"
                castShadow
                receiveShadow
                geometry={nodes.Palm_110.geometry}
                material={materials["World ap"]}
                position={[38.25, 18.88, -36.83]}
                rotation={[-0.23, -0.26, 0.13]}
              />
              <mesh
                name="Palm_111"
                castShadow
                receiveShadow
                geometry={nodes.Palm_111.geometry}
                material={materials["World ap"]}
                position={[25.39, 19.94, -38.36]}
                rotation={[-0.03, 0.13, 0.1]}
              />
              <mesh
                name="Palm_112"
                castShadow
                receiveShadow
                geometry={nodes.Palm_112.geometry}
                material={materials["World ap"]}
                position={[32.61, 18.2, -36.51]}
                rotation={[-0.28, 0.1, 0.12]}
              />
              <mesh
                name="Palm_113"
                castShadow
                receiveShadow
                geometry={nodes.Palm_113.geometry}
                material={materials["World ap"]}
                position={[37.33, 7.65, -36.14]}
                rotation={[-0.63, -0.29, 0.02]}
              />
              <mesh
                name="Palm_114"
                castShadow
                receiveShadow
                geometry={nodes.Palm_114.geometry}
                material={materials["World ap"]}
                position={[29.43, 5.41, -37.44]}
                rotation={[-0.63, -0.29, 0.02]}
              />
              <mesh
                name="Palm_115"
                castShadow
                receiveShadow
                geometry={nodes.Palm_115.geometry}
                material={materials["World ap"]}
                position={[21.25, 3.26, -36.35]}
                rotation={[-0.63, -0.29, 0.02]}
              />
              <mesh
                name="Palm_116"
                castShadow
                receiveShadow
                geometry={nodes.Palm_116.geometry}
                material={materials["World ap"]}
                position={[11.3, 16.64, -39.96]}
                rotation={[-0.41, 0.36, -0.29]}
              />
              <mesh
                name="Palm_117"
                castShadow
                receiveShadow
                geometry={nodes.Palm_117.geometry}
                material={materials["World ap"]}
                position={[13.26, 19.18, -39.68]}
                rotation={[0, -0.18, 0.1]}
              />
              <mesh
                name="Palm_11_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_11_4.geometry}
                material={materials["World ap"]}
                position={[-15.51, 31.82, -27.99]}
                rotation={[-0.41, 0.68, 0.36]}
              />
              <mesh
                name="Palm_12_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_12_4.geometry}
                material={materials["World ap"]}
                position={[-12.2, 5, -24.81]}
                rotation={[-0.73, 0.53, 0.26]}
              />
              <mesh
                name="Palm_13_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_13_4.geometry}
                material={materials["World ap"]}
                position={[-0.3, -48.35, 3.75]}
                rotation={[-1.14, 0.31, 0.39]}
              />
              <mesh
                name="Palm_14_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_14_4.geometry}
                material={materials["World ap"]}
                position={[-0.54, -53.93, 10.49]}
                rotation={[-1.51, 0.14, 0.47]}
              />
              <mesh
                name="Palm_15_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_15_4.geometry}
                material={materials["World ap"]}
                position={[-12.21, -44.5, 8.02]}
                rotation={[-1.24, 0.37, 0.38]}
              />
              <mesh
                name="Palm_16_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_16_4.geometry}
                material={materials["World ap"]}
                position={[-0.63, -39.28, 2.18]}
                rotation={[-1.24, 0.37, 0.38]}
              />
              <mesh
                name="Palm_17_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_17_4.geometry}
                material={materials["World ap"]}
                position={[12.99, -62, 24.82]}
                rotation={[-1.57, 0.23, 0.48]}
              />
              <mesh
                name="Palm_18_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_18_4.geometry}
                material={materials["World ap"]}
                position={[19.74, -57.38, 24.24]}
                rotation={[-0.96, 0.1, 0.29]}
              />
              <mesh
                name="Palm_19_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_19_4.geometry}
                material={materials["World ap"]}
                position={[15.82, -61.47, 32.12]}
                rotation={[-1.71, 0.18, 0.28]}
              />
              <mesh
                name="Palm_1_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_1_4.geometry}
                material={materials["World ap"]}
                position={[-6.96, 35.61, -33.67]}
                rotation={[-0.25, -0.12, 0.13]}
              />
              <mesh
                name="Palm_20_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_20_4.geometry}
                material={materials["World ap"]}
                position={[-9.94, -49.99, 21.07]}
                rotation={[-1.24, 0.37, 0.38]}
              />
              <mesh
                name="Palm_21_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_21_4.geometry}
                material={materials["World ap"]}
                position={[56.8, 94.76, -12.26]}
                rotation={[0.87, 0.7, -2.68]}
              />
              <mesh
                name="Palm_22_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_22_4.geometry}
                material={materials["World ap"]}
                position={[12.51, -18.38, -22.47]}
                rotation={[-0.85, 0.4, 0.31]}
              />
              <mesh
                name="Palm_23_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_23_4.geometry}
                material={materials["World ap"]}
                position={[0.97, -28.53, -19.17]}
                rotation={[-0.79, 0.28, 0.2]}
              />
              <mesh
                name="Palm_24_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_24_4.geometry}
                material={materials["World ap"]}
                position={[-2.8, -16.7, -16.91]}
                rotation={[-0.53, 0.44, -0.31]}
              />
              <mesh
                name="Palm_25_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_25_4.geometry}
                material={materials["World ap"]}
                position={[-6.63, -25.11, -10.66]}
                rotation={[-0.69, 0.48, -0.24]}
              />
              <mesh
                name="Palm_27_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_27_4.geometry}
                material={materials["World ap"]}
                position={[-12.31, 56.29, -27.76]}
                rotation={[0.28, 0.86, -0.64]}
              />
              <mesh
                name="Palm_28_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_28_4.geometry}
                material={materials["World ap"]}
                position={[1.92, 70.39, -29.82]}
                rotation={[0.37, 0.16, -0.82]}
              />
              <mesh
                name="Palm_29_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_29_4.geometry}
                material={materials["World ap"]}
                position={[-8.31, 68.83, -27.07]}
                rotation={[0.69, 0.56, -0.91]}
              />
              <mesh
                name="Palm_2_5"
                castShadow
                receiveShadow
                geometry={nodes.Palm_2_5.geometry}
                material={materials["World ap"]}
                position={[-12.47, 42, -28.34]}
                rotation={[0.13, 0.62, 0.06]}
              />
              <mesh
                name="Palm_30_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_30_4.geometry}
                material={materials["World ap"]}
                position={[1.07, 81.17, -24.54]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_31_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_31_3.geometry}
                material={materials["World ap"]}
                position={[-11.23, 84.41, -22.14]}
                rotation={[0.69, 0.56, -0.12]}
              />
              <mesh
                name="Palm_32_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_32_3.geometry}
                material={materials["World ap"]}
                position={[-18.41, -13.05, -20.15]}
                rotation={[-0.28, 0.36, -0.41]}
              />
              <mesh
                name="Palm_33_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_33_3.geometry}
                material={materials["World ap"]}
                position={[-11.31, -56.66, 29.97]}
                rotation={[-1.38, 0.53, 0.11]}
              />
              <mesh
                name="Palm_34_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_34_3.geometry}
                material={materials["World ap"]}
                position={[-2.82, -56.4, 22.62]}
                rotation={[-1.38, 0.53, 0.11]}
              />
              <mesh
                name="Palm_35_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_35_3.geometry}
                material={materials["World ap"]}
                position={[66.35, 81.93, -16.06]}
                rotation={[0.58, -0.41, -0.11]}
              />
              <mesh
                name="Palm_36_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_36_3.geometry}
                material={materials["World ap"]}
                position={[64.32, 85.82, -14.95]}
                rotation={[0.21, 0.21, -0.4]}
              />
              <mesh
                name="Palm_37_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_37_3.geometry}
                material={materials["World ap"]}
                position={[66.31, 89.26, -15.02]}
                rotation={[0.81, -0.06, -0.44]}
              />
              <mesh
                name="Palm_38_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_38_3.geometry}
                material={materials["World ap"]}
                position={[61.91, 90.39, -14.24]}
                rotation={[0.81, -0.06, -1.88]}
              />
              <mesh
                name="Palm_39_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_39_3.geometry}
                material={materials["World ap"]}
                position={[62.55, 93.74, -11.84]}
                rotation={[1.25, -0.19, -1.82]}
              />
              <mesh
                name="Palm_3_5"
                castShadow
                receiveShadow
                geometry={nodes.Palm_3_5.geometry}
                material={materials["World ap"]}
                position={[-2.4, 59.91, -31.93]}
                rotation={[0.4, 0.43, -0.76]}
              />
              <mesh
                name="Palm_40_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_40_3.geometry}
                material={materials["World ap"]}
                position={[57.6, 94.04, -13.93]}
                rotation={[1.25, -0.19, -2.79]}
              />
              <mesh
                name="Palm_41_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_41_3.geometry}
                material={materials["World ap"]}
                position={[-3.62, 91.38, -16.9]}
                rotation={[0.69, 0.56, -0.12]}
              />
              <mesh
                name="Palm_42_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_42_3.geometry}
                material={materials["World ap"]}
                position={[3.51, 89.14, -18.62]}
                rotation={[0.61, -0.15, -0.1]}
              />
              <mesh
                name="Palm_43_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_43_3.geometry}
                material={materials["World ap"]}
                position={[4.95, 77.69, -25.82]}
                rotation={[0.61, -0.15, -0.1]}
              />
              <mesh
                name="Palm_44_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_44_3.geometry}
                material={materials["World ap"]}
                position={[-5.27, 76.29, -27.15]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_45_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_45_3.geometry}
                material={materials["World ap"]}
                position={[2.08, 94.42, -14.92]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_46_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_46_3.geometry}
                material={materials["World ap"]}
                position={[-8.11, 96.53, -11.75]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_47_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_47_3.geometry}
                material={materials["World ap"]}
                position={[-0.42, 101.36, -9.39]}
                rotation={[0.64, 0.13, -0.1]}
              />
              <mesh
                name="Palm_48_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_48_3.geometry}
                material={materials["World ap"]}
                position={[-8.56, 62.86, -29.52]}
                rotation={[0.3, 0.37, 0.09]}
              />
              <mesh
                name="Palm_49_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_49_3.geometry}
                material={materials["World ap"]}
                position={[-13.49, 88.25, -16.26]}
                rotation={[0.91, 0.36, -0.14]}
              />
              <mesh
                name="Palm_4_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_4_4.geometry}
                material={materials["World ap"]}
                position={[-6.96, 47.91, -31]}
              />
              <mesh
                name="Palm_4_5"
                castShadow
                receiveShadow
                geometry={nodes.Palm_4_5.geometry}
                material={materials["World ap"]}
                position={[4.96, 18.2, -38.01]}
                rotation={[-0.41, 0.36, -0.29]}
              />
              <mesh
                name="Palm_50_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_50_3.geometry}
                material={materials["World ap"]}
                position={[-2.95, 86.58, -24.93]}
                rotation={[0.91, 0.36, -0.14]}
              />
              <mesh
                name="Palm_51_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_51_3.geometry}
                material={materials["World ap"]}
                position={[-11.17, 82.09, -28.5]}
                rotation={[0.91, 0.36, -0.14]}
              />
              <mesh
                name="Palm_52_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_52_3.geometry}
                material={materials["World ap"]}
                position={[-7.6, -32.18, -9.91]}
                rotation={[-1.24, 0.37, 0.38]}
              />
              <mesh
                name="Palm_53_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_53_3.geometry}
                material={materials["World ap"]}
                position={[-17.81, -27.9, -10.09]}
                rotation={[-1.24, 0.37, 0.38]}
              />
              <mesh
                name="Palm_54_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_54_3.geometry}
                material={materials["World ap"]}
                position={[-11.72, -38.75, -0.59]}
                rotation={[-1.24, 0.37, 0.38]}
              />
              <mesh
                name="Palm_55_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_55_3.geometry}
                material={materials["World ap"]}
                position={[-13.49, -59.24, 40.07]}
                rotation={[-1.24, 0.37, 0.38]}
              />
              <mesh
                name="Palm_59_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_59_2.geometry}
                material={materials["World ap"]}
                position={[-11.76, -63.36, 43.64]}
                rotation={[-1.69, 0.26, 0.81]}
              />
              <mesh
                name="Palm_5_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_5_4.geometry}
                material={materials["World ap"]}
                position={[-10.37, 29.78, -35.92]}
                rotation={[-0.36, 0.51, -0.32]}
              />
              <mesh
                name="Palm_62_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_62_2.geometry}
                material={materials["World ap"]}
                position={[-7.15, -58.58, 30.92]}
                rotation={[-1.42, -0.09, 0.42]}
              />
              <mesh
                name="Palm_63_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_63_2.geometry}
                material={materials["World ap"]}
                position={[-8.88, -58.84, 35.78]}
                rotation={[-1.61, 0.26, 0.45]}
              />
              <mesh
                name="Palm_65_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_65_2.geometry}
                material={materials["World ap"]}
                position={[3.65, -57.14, 17.16]}
                rotation={[-1.53, -0.03, 0.46]}
              />
              <mesh
                name="Palm_66_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_66_2.geometry}
                material={materials["World ap"]}
                position={[5.36, -51.73, 6.74]}
                rotation={[-1.06, -0.28, 0.34]}
              />
              <mesh
                name="Palm_67_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_67_2.geometry}
                material={materials["World ap"]}
                position={[3.72, -44.84, -0.92]}
                rotation={[-1.06, -0.28, 0.34]}
              />
              <mesh
                name="Palm_68_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_68_2.geometry}
                material={materials["World ap"]}
                position={[14.46, -13.68, -30.21]}
                rotation={[-0.85, 0.4, 0.31]}
              />
              <mesh
                name="Palm_69_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_69_2.geometry}
                material={materials["World ap"]}
                position={[13.29, -28.14, -21.49]}
                rotation={[-0.62, 0.13, 0.27]}
              />
              <mesh
                name="Palm_6_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_6_4.geometry}
                material={materials["World ap"]}
                position={[16.58, 2.77, -37.18]}
                rotation={[-0.63, -0.07, 0.02]}
              />
              <mesh
                name="Palm_70_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_70_2.geometry}
                material={materials["World ap"]}
                position={[8.95, -4.11, -33.66]}
                rotation={[-0.55, -0.15, 0.27]}
              />
              <mesh
                name="Palm_78_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_78_2.geometry}
                material={materials["World ap"]}
                position={[22.4, -68.19, 38.59]}
                rotation={[-1.48, 0.13, 0.3]}
              />
              <mesh
                name="Palm_79_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_79_2.geometry}
                material={materials["World ap"]}
                position={[26.24, -67.24, 34.23]}
                rotation={[-1.35, -0.28, 0.31]}
              />
              <mesh
                name="Palm_7_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_7_4.geometry}
                material={materials["World ap"]}
                position={[-0.29, 2.32, -29.92]}
                rotation={[-0.26, 0.49, 0.05]}
              />
              <mesh
                name="Palm_82_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_82_4.geometry}
                material={materials["World ap"]}
                position={[-13.35, -49.14, 15.75]}
                rotation={[-1.2, 0.37, 0.32]}
              />
              <mesh
                name="Palm_83_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_83_3.geometry}
                material={materials["World ap"]}
                position={[-16.47, -39.92, 7.12]}
                rotation={[-1.2, 0.37, 0.32]}
              />
              <mesh
                name="Palm_84_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_84_2.geometry}
                material={materials["World ap"]}
                position={[-6.14, -49.28, 7.92]}
                rotation={[-1.2, 0.37, 0.32]}
              />
              <mesh
                name="Palm_85_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_85_3.geometry}
                material={materials["World ap"]}
                position={[-16.18, -57.1, 34.7]}
                rotation={[-1.2, 0.37, 0.32]}
              />
              <mesh
                name="Palm_89_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_89_4.geometry}
                material={materials["World ap"]}
                position={[26.2, -62.36, 27]}
                rotation={[-1.14, 0.3, 0.15]}
              />
              <mesh
                name="Palm_8_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_8_4.geometry}
                material={materials["World ap"]}
                position={[7.44, -8.64, -32.8]}
                rotation={[-0.7, 0.44, 0.25]}
              />
              <mesh
                name="Palm_90_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_90_4.geometry}
                material={materials["World ap"]}
                position={[23.02, -62.09, 28.57]}
                rotation={[-1.71, 0.18, 0.28]}
              />
              <mesh
                name="Palm_91_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_91_4.geometry}
                material={materials["World ap"]}
                position={[41.93, -64.12, 39.28]}
                rotation={[-1.48, 0.13, 0.3]}
              />
              <mesh
                name="Palm_92_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_92_2.geometry}
                material={materials["World ap"]}
                position={[46.45, -65.7, 43.01]}
                rotation={[-1.53, -0.41, 0.53]}
              />
              <mesh
                name="Palm_93_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_93_2.geometry}
                material={materials["World ap"]}
                position={[42.95, -66.69, 42.42]}
                rotation={[-1.99, -0.07, 0.3]}
              />
              <mesh
                name="Palm_94_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_94_2.geometry}
                material={materials["World ap"]}
                position={[-14.09, 115.96, 25.68]}
                rotation={[0.98, 0.09, -0.14]}
              />
              <mesh
                name="Palm_95_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_95_2.geometry}
                material={materials["World ap"]}
                position={[-5.65, 123.65, 31.65]}
                rotation={[0.38, 0.15, -0.06]}
              />
              <mesh
                name="Palm_96_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_96_2.geometry}
                material={materials["World ap"]}
                position={[-9.15, 121.5, 42.91]}
                rotation={[1.26, 0.05, -0.15]}
              />
              <mesh
                name="Palm_97_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_97_2.geometry}
                material={materials["World ap"]}
                position={[-13.76, 119.68, 28.38]}
                rotation={[1.26, 0.05, -0.15]}
              />
              <mesh
                name="Palm_98_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_98_2.geometry}
                material={materials["World ap"]}
                position={[-1.95, 127.94, 53.49]}
                rotation={[1.58, -0.01, -0.16]}
              />
              <mesh
                name="Palm_99_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_99_2.geometry}
                material={materials["World ap"]}
                position={[2.88, 131.09, 57.25]}
                rotation={[1.58, -0.01, -0.16]}
              />
              <mesh
                name="Palm_9_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_9_4.geometry}
                material={materials["World ap"]}
                position={[-0.01, -3.81, -27.17]}
                rotation={[-0.7, 0.44, 0.25]}
              />
            </group>
            <group
              name="Australia"
              position={[72.22, -105.13, 60.74]}
              rotation={[-2.39, 0, -0.13]}
            >
              <mesh
                name="Palm"
                castShadow
                receiveShadow
                geometry={nodes.Palm.geometry}
                material={materials["World ap"]}
                position={[4.06, -4.7, -8.2]}
                rotation={[0.44, -0.18, 0.29]}
              />
              <mesh
                name="Palm_1"
                castShadow
                receiveShadow
                geometry={nodes.Palm_1.geometry}
                material={materials["World ap"]}
                position={[35.19, -8.62, 19.61]}
                rotation={[1.52, -0.91, -3.09]}
              />
              <mesh
                name="Palm_10"
                castShadow
                receiveShadow
                geometry={nodes.Palm_10.geometry}
                material={materials["World ap"]}
                position={[34.25, -8.73, 31.27]}
                rotation={[1.88, -0.79, -2.79]}
              />
              <mesh
                name="Palm_11"
                castShadow
                receiveShadow
                geometry={nodes.Palm_11.geometry}
                material={materials["World ap"]}
                position={[11.38, 4.91, 34.49]}
                rotation={[2.04, -0.19, -2.25]}
              />
              <mesh
                name="Palm_12"
                castShadow
                receiveShadow
                geometry={nodes.Palm_12.geometry}
                material={materials["World ap"]}
                position={[8.79, 4, 37.35]}
                rotation={[2.4, -0.27, -2.19]}
              />
              <mesh
                name="Palm_13"
                castShadow
                receiveShadow
                geometry={nodes.Palm_13.geometry}
                material={materials["World ap"]}
                position={[20.71, -1.13, 36.98]}
                rotation={[1.66, -0.55, -2.4]}
              />
              <mesh
                name="Palm_14"
                castShadow
                receiveShadow
                geometry={nodes.Palm_14.geometry}
                material={materials["World ap"]}
                position={[16.71, 2.07, 37.35]}
                rotation={[1.9, -0.21, -2.62]}
              />
              <mesh
                name="Palm_15"
                castShadow
                receiveShadow
                geometry={nodes.Palm_15.geometry}
                material={materials["World ap"]}
                position={[15.22, 3.64, 32.1]}
                rotation={[1.64, -0.38, -1.9]}
              />
              <mesh
                name="Palm_16"
                castShadow
                receiveShadow
                geometry={nodes.Palm_16.geometry}
                material={materials["World ap"]}
                position={[20.26, 1.91, 31.57]}
                rotation={[2.04, -0.53, -2.14]}
              />
              <mesh
                name="Palm_17"
                castShadow
                receiveShadow
                geometry={nodes.Palm_17.geometry}
                material={materials["World ap"]}
                position={[27.49, -12.77, -4.41]}
                rotation={[0.69, -0.72, 2.56]}
              />
              <mesh
                name="Palm_18"
                castShadow
                receiveShadow
                geometry={nodes.Palm_18.geometry}
                material={materials["World ap"]}
                position={[21.85, -10.79, -7.21]}
                rotation={[0.9, -0.58, 2.43]}
              />
              <mesh
                name="Palm_19"
                castShadow
                receiveShadow
                geometry={nodes.Palm_19.geometry}
                material={materials["World ap"]}
                position={[18.87, -11.37, -8.59]}
                rotation={[0.44, -0.18, 0.29]}
              />
              <mesh
                name="Palm_2"
                castShadow
                receiveShadow
                geometry={nodes.Palm_2.geometry}
                material={materials["World ap"]}
                position={[35.81, -10.87, 23.71]}
                rotation={[1.98, -1.2, -2.72]}
              />
              <mesh
                name="Palm_20"
                castShadow
                receiveShadow
                geometry={nodes.Palm_20.geometry}
                material={materials["World ap"]}
                position={[4.18, -7.13, -13.04]}
                rotation={[0.17, -0.28, 0.23]}
              />
              <mesh
                name="Palm_21"
                castShadow
                receiveShadow
                geometry={nodes.Palm_21.geometry}
                material={materials["World ap"]}
                position={[6.29, -9.68, -11.9]}
                rotation={[0.17, -0.28, 0.23]}
              />
              <mesh
                name="Palm_22"
                castShadow
                receiveShadow
                geometry={nodes.Palm_22.geometry}
                material={materials["World ap"]}
                position={[-6.87, 7.54, 11.55]}
                rotation={[0.97, -0.36, -0.02]}
              />
              <mesh
                name="Palm_23"
                castShadow
                receiveShadow
                geometry={nodes.Palm_23.geometry}
                material={materials["World ap"]}
                position={[-7.19, 6.73, 15.18]}
                rotation={[1.57, -0.02, -0.01]}
              />
              <mesh
                name="Palm_24"
                castShadow
                receiveShadow
                geometry={nodes.Palm_24.geometry}
                material={materials["World ap"]}
                position={[-4.24, 7.45, 19.8]}
                rotation={[1.57, -0.02, -0.01]}
              />
              <mesh
                name="Palm_25"
                castShadow
                receiveShadow
                geometry={nodes.Palm_25.geometry}
                material={materials["World ap"]}
                position={[-7.28, 7.97, 25.44]}
                rotation={[1.57, 0.26, -0.01]}
              />
              <mesh
                name="Palm_26"
                castShadow
                receiveShadow
                geometry={nodes.Palm_26.geometry}
                material={materials["World ap"]}
                position={[-5.35, 7.76, 30.4]}
                rotation={[1.56, -0.28, -0.01]}
              />
              <mesh
                name="Palm_27"
                castShadow
                receiveShadow
                geometry={nodes.Palm_27.geometry}
                material={materials["World ap"]}
                position={[-6.1, 8.93, 24]}
                rotation={[1.56, -0.28, -0.01]}
              />
              <mesh
                name="Palm_28"
                castShadow
                receiveShadow
                geometry={nodes.Palm_28.geometry}
                material={materials["World ap"]}
                position={[-1.62, 2.81, 5.98]}
                rotation={[1.1, -0.07, 0.78]}
              />
              <mesh
                name="Palm_29"
                castShadow
                receiveShadow
                geometry={nodes.Palm_29.geometry}
                material={materials["World ap"]}
                position={[22.1, -7.33, -1.23]}
                rotation={[1.19, -0.22, 2.55]}
              />
              <mesh
                name="Palm_3"
                castShadow
                receiveShadow
                geometry={nodes.Palm_3.geometry}
                material={materials["World ap"]}
                position={[-8.74, 0.74, -5.33]}
                rotation={[0.46, 0.13, 0.26]}
              />
              <mesh
                name="Palm_30"
                castShadow
                receiveShadow
                geometry={nodes.Palm_30.geometry}
                material={materials["World ap"]}
                position={[26.34, -8.23, 0.57]}
                rotation={[1.36, -0.33, 2.59]}
              />
              <mesh
                name="Palm_4"
                castShadow
                receiveShadow
                geometry={nodes.Palm_4.geometry}
                material={materials["World ap"]}
                position={[35.62, -13.87, 8.67]}
                rotation={[1.5, -0.89, -3.12]}
              />
              <mesh
                name="Palm_5"
                castShadow
                receiveShadow
                geometry={nodes.Palm_5.geometry}
                material={materials["World ap"]}
                position={[23.69, -11.11, -1.41]}
                rotation={[0.9, -0.58, 2.43]}
              />
              <mesh
                name="Palm_6"
                castShadow
                receiveShadow
                geometry={nodes.Palm_6.geometry}
                material={materials["World ap"]}
                position={[36.18, -12.8, 15.81]}
                rotation={[0.99, -0.69, -3.02]}
              />
              <mesh
                name="Palm_7"
                castShadow
                receiveShadow
                geometry={nodes.Palm_7.geometry}
                material={materials["World ap"]}
                position={[37.86, -16.43, 12.26]}
                rotation={[0.97, -1.08, 2.84]}
              />
              <mesh
                name="Palm_8"
                castShadow
                receiveShadow
                geometry={nodes.Palm_8.geometry}
                material={materials["World ap"]}
                position={[36.21, -8.83, 27.71]}
                rotation={[1.53, -0.69, -2.62]}
              />
              <mesh
                name="Palm_81"
                castShadow
                receiveShadow
                geometry={nodes.Palm_81.geometry}
                material={materials["World ap"]}
                position={[-1.87, 0, -4.94]}
                rotation={[0.67, -0.03, 0.29]}
              />
              <mesh
                name="Palm_82"
                castShadow
                receiveShadow
                geometry={nodes.Palm_82.geometry}
                material={materials["World ap"]}
                position={[-3.2, -4.07, -6.92]}
                rotation={[0.43, 0.24, 0.29]}
              />
              <mesh
                name="Palm_86"
                castShadow
                receiveShadow
                geometry={nodes.Palm_86.geometry}
                material={materials["World ap"]}
                position={[-8.89, 4.01, 4.87]}
                rotation={[1.16, 0.09, 0.28]}
              />
              <mesh
                name="Palm_87"
                castShadow
                receiveShadow
                geometry={nodes.Palm_87.geometry}
                material={materials["World ap"]}
                position={[-11.1, 5.15, 10.18]}
                rotation={[1.22, -0.11, 0.01]}
              />
              <mesh
                name="Palm_89"
                castShadow
                receiveShadow
                geometry={nodes.Palm_89.geometry}
                material={materials["World ap"]}
                position={[-6.53, 1.42, -1.91]}
                rotation={[1.1, -0.07, 0.78]}
              />
              <mesh
                name="Palm_9"
                castShadow
                receiveShadow
                geometry={nodes.Palm_9.geometry}
                material={materials["World ap"]}
                position={[39.65, -13.61, 17.87]}
                rotation={[1.87, -1.1, -2.84]}
              />
              <mesh
                name="Palm_90"
                castShadow
                receiveShadow
                geometry={nodes.Palm_90.geometry}
                material={materials["World ap"]}
                position={[-11.1, 3.17, 0.26]}
                rotation={[0.86, 0.24, 0.38]}
              />
              <mesh
                name="Palm_91"
                castShadow
                receiveShadow
                geometry={nodes.Palm_91.geometry}
                material={materials["World ap"]}
                position={[-0.99, -6.13, -10.27]}
                rotation={[0.71, -0.25, 0.76]}
              />
            </group>
          </group>
          <group
            name="Places"
            position={[-77.23, -84.95, -29.04]}
            rotation={[0, 0, -Math.PI]}
          >
            <mesh
              name="Eiffel_tower"
              castShadow
              receiveShadow
              geometry={nodes.Eiffel_tower.geometry}
              material={materials["World ap.990"]}
              position={[14.24, -64.29, -6.24]}
              rotation={[0.69, -0.99, 0.6]}
            />
            <mesh
              name="Statue"
              castShadow
              receiveShadow
              geometry={nodes.Statue.geometry}
              material={materials["World ap.992"]}
              position={[-40.63, 5.59, 40.56]}
              rotation={[1.48, -0.41, -0.02]}
            />
            <mesh
              name="Moscow_3"
              castShadow
              receiveShadow
              geometry={nodes.Moscow_3.geometry}
              material={materials["World ap"]}
              position={[19.14, -111.33, -13.03]}
              rotation={[-0.13, -0.8, -0.93]}
            />
            <mesh
              name="Pyramid"
              castShadow
              receiveShadow
              geometry={nodes.Pyramid.geometry}
              material={materials["World ap"]}
              position={[37.78, -67.85, 43.28]}
              rotation={[1.17, -1.54, 1.52]}
            />
            <mesh
              name="Pyramid_1"
              castShadow
              receiveShadow
              geometry={nodes.Pyramid_1.geometry}
              material={materials["World ap"]}
              position={[35.11, -61.54, 54.17]}
              rotation={[2.18, -1.42, 2.06]}
            />
          </group>
          <group name="pLANET" position={[-3.15, 3.6, 7.2]}>
            <mesh
              name="Sphere"
              castShadow
              receiveShadow
              geometry={nodes.Sphere.geometry}
              material={materials["World ap"]}
              position={[-0.96, 0.57, -9.25]}
              rotation={[0.06, 0.1, -0.01]}
            >
              <group
                name="water"
                position={[0, 0, 9.32]}
                rotation={[-0.06, -0.1, 0]}
              >
                <mesh
                  name="water_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.water_2.geometry}
                  material={materials.Water}
                />
              </group>
              <mesh
                name="Africa_Green"
                castShadow
                receiveShadow
                geometry={nodes.Africa_Green.geometry}
                material={materials["World ap"]}
              />
              <mesh
                name="America_White"
                castShadow
                receiveShadow
                geometry={nodes.America_White.geometry}
                material={materials["World ap"]}
                position={[0, 0, 9.32]}
                rotation={[-0.06, -0.1, 0]}
              />
              <mesh
                name="America_White_1"
                castShadow
                receiveShadow
                geometry={nodes.America_White_1.geometry}
                material={materials.Material}
                position={[0, 0, 9.32]}
                rotation={[-0.06, -0.1, 0]}
              />
              <mesh
                name="Continents"
                castShadow
                receiveShadow
                geometry={nodes.Continents.geometry}
                material={materials["World ap"]}
                position={[0, 0, 9.32]}
                rotation={[-0.06, -0.1, 0]}
              />
              <mesh
                name="Sphere_1"
                castShadow
                receiveShadow
                geometry={nodes.Sphere_1.geometry}
                material={materials["World ap"]}
                position={[1.41, 0.01, 9.47]}
                rotation={[-0.06, -0.1, 0]}
              />
              <mesh
                name="Sphere_2"
                castShadow
                receiveShadow
                geometry={nodes.Sphere_2.geometry}
                material={materials["World ap"]}
                position={[1.41, 0.01, 9.47]}
                rotation={[-0.06, -0.1, 0]}
              />
              <mesh
                name="Sphere_3"
                castShadow
                receiveShadow
                geometry={nodes.Sphere_3.geometry}
                material={materials["World ap"]}
                position={[0, 0, 9.32]}
                rotation={[-0.06, -0.1, 0]}
              />
            </mesh>
          </group>
          <group name="Ships" position={[-9.84, -1.38, 9.08]}>
            <mesh
              name="Containers_Ship"
              castShadow
              receiveShadow
              geometry={nodes.Containers_Ship.geometry}
              material={materials["World ap"]}
              position={[67.62, -6.79, -83.42]}
              rotation={[-0.24, -0.86, 1.7]}
            />
            <mesh
              name="Containers_Ship_1"
              castShadow
              receiveShadow
              geometry={nodes.Containers_Ship_1.geometry}
              material={materials["World ap"]}
              position={[-55.64, -69.33, 33.26]}
              rotation={[-2.02, 0.61, 1.15]}
            />
            <mesh
              name="Containers_Ship_2"
              castShadow
              receiveShadow
              geometry={nodes.Containers_Ship_2.geometry}
              material={materials["World ap"]}
              position={[72.58, -16.17, 74.96]}
              rotation={[-2.86, -0.67, 2.59]}
            />
            <mesh
              name="Containers_Ship_3"
              castShadow
              receiveShadow
              geometry={nodes.Containers_Ship_3.geometry}
              material={materials["World ap"]}
              position={[-70.11, -42.03, -52.52]}
              rotation={[-0.79, 0.8, -0.6]}
            />
            <mesh
              name="Containers_Ship_4"
              castShadow
              receiveShadow
              geometry={nodes.Containers_Ship_4.geometry}
              material={materials["World ap"]}
              position={[-43.44, 40.48, 80.68]}
              rotation={[2.53, 0.42, 2.25]}
            />
            <mesh
              name="Containers_Ship_5"
              castShadow
              receiveShadow
              geometry={nodes.Containers_Ship_5.geometry}
              material={materials["World ap"]}
              position={[-82.22, 36.17, 38.99]}
              rotation={[2.51, 1.15, -0.3]}
            />
            <mesh
              name="Ship"
              castShadow
              receiveShadow
              geometry={nodes.Ship.geometry}
              material={materials["World ap"]}
              position={[-1.2, 76.33, 69.27]}
              rotation={[2.31, 0.07, 1.55]}
            />
            <mesh
              name="Ship_1"
              castShadow
              receiveShadow
              geometry={nodes.Ship_1.geometry}
              material={materials["World ap"]}
              position={[52.31, -72.01, 48.86]}
              rotation={[-2.19, -0.57, 0.73]}
            />
            <mesh
              name="Ship_2"
              castShadow
              receiveShadow
              geometry={nodes.Ship_2.geometry}
              material={materials["World ap"]}
              position={[58.67, 24.12, -85.82]}
              rotation={[0.09, -0.6, -1.98]}
            />
            <mesh
              name="Ship_5"
              castShadow
              receiveShadow
              geometry={nodes.Ship_5.geometry}
              material={materials["World ap"]}
              position={[106.07, 28.39, -1.94]}
              rotation={[1.29, -1.29, -0.85]}
            />
            <mesh
              name="Ship_6"
              castShadow
              receiveShadow
              geometry={nodes.Ship_6.geometry}
              material={materials["World ap"]}
              position={[78.75, 10.27, -71.64]}
              rotation={[0.03, -0.88, 1.68]}
            />
            <mesh
              name="Yacht"
              castShadow
              receiveShadow
              geometry={nodes.Yacht.geometry}
              material={materials["World ap"]}
              position={[-90.89, 19.27, 23.38]}
              rotation={[-2.82, 1.34, -1.51]}
            />
            <mesh
              name="Yacht_1"
              castShadow
              receiveShadow
              geometry={nodes.Yacht_1.geometry}
              material={materials["World ap"]}
              position={[-45.92, -83, 2.88]}
              rotation={[-1.62, 0.45, -2.75]}
            />
            <mesh
              name="Yacht_2"
              castShadow
              receiveShadow
              geometry={nodes.Yacht_2.geometry}
              material={materials["World ap"]}
              position={[-46.58, 54.3, -76.94]}
              rotation={[0.64, 0.68, 1.04]}
            />
          </group>
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials["World ap"]}
            position={[-1.39, 8.5, 7.63]}
            rotation={[1.88, 0, 0]}
          />
          <mesh
            name="Plane_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials["World ap"]}
            position={[-3.9, 2.73, -1.73]}
            rotation={[1.19, 0.47, 1.87]}
          />
          <mesh
            name="Plane_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane_2.geometry}
            material={materials["World ap"]}
            position={[-3.9, 2.73, -1.73]}
            rotation={[2.88, -1.27, -Math.PI]}
          />
          <mesh
            name="Plane_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane_3.geometry}
            material={materials["World ap"]}
            position={[0.39, 3.83, 9.94]}
            rotation={[0.7, -1.09, Math.PI]}
            scale={[1.01, 1, 1]}
          />
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials["World ap"]}
            position={[-29.14, -96.51, -3.87]}
            rotation={[-1.48, 0.31, 0.9]}
          />
        </group>
        <mesh
          name="Clouds_1"
          castShadow
          receiveShadow
          geometry={nodes.Clouds_1.geometry}
          material={materials["World ap.1"]}
          position={[0.02, 0.43, -0.05]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Clouds_2"
          castShadow
          receiveShadow
          geometry={nodes.Clouds_2.geometry}
          material={materials["World ap.1"]}
          position={[0.02, 0.17, -0.05]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/planet-earth.glb");