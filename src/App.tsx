import React, {useRef, useState} from 'react';
import './App.css';
import {Canvas, useLoader, useThree} from "@react-three/fiber";
import * as THREE from "three";
import {OrbitControls, TransformControls, useCursor} from "@react-three/drei";
import {TextureLoader} from "three";
import {TEXTURES_PATH} from "./constraints/constrainst";
import {proxy, useSnapshot} from "valtio";

const modes = ['translate', 'rotate', 'scale'];
const state = proxy<{ current: string | null, mode: number }>({current: null, mode: 0});

type WallProps = JSX.IntrinsicElements['mesh'] & {
    width: number;
    height: number;
    depth: number;
    name: string;
}

const App = () => {
    return (
        <Canvas style={{backgroundColor: "black", height: "100vw"}}
                camera={{fov: 45, position: [0, 0, -4]}} dpr={window.devicePixelRatio}>
            <ambientLight/>
            <pointLight position={[2, 5, -2]}/>
            <group>
                <Wall position={[-1, 0, 0.475]} width={1} height={0.6} depth={0.05} name={"Wall1"}/>
                <Wall position={[-0.475, 0, 0]} width={0.05} height={0.6} depth={1} name={"Wall2"}/>
            </group>
            <Controls/>
        </Canvas>
    );
}

const Wall = (props: WallProps) => {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const snap = useSnapshot(state);

    // useFrame((state, delta) => (ref.current.rotation.y += 0.01))
    const textures = [
        useLoader(TextureLoader, TEXTURES_PATH + "grey.jpg"),       // right
        useLoader(TextureLoader, TEXTURES_PATH + "grey.jpg"),       // left
        useLoader(TextureLoader, TEXTURES_PATH + "grey.jpg"),       // top
        useLoader(TextureLoader, TEXTURES_PATH + "grey.jpg"),       // bottom
        useLoader(TextureLoader, TEXTURES_PATH + "texture.jpg"),    //front
        useLoader(TextureLoader, TEXTURES_PATH + "grey.jpg")        // back
    ];

    useCursor(hovered);

    return (
        <mesh
            {...props}
            ref={ref}
            onClick={(e) => {
                state.current = props.name;
            }}
            onPointerMissed={(e) =>
                e.type === "click" && (state.current = null)
            }
            onContextMenu={(e) => {
                if (snap.current === props.name) {
                    state.mode = (snap.mode + 1) % modes.length;
                }
            }}
            onPointerOver={(e) => {
                hover(true)
            }}
            onPointerOut={(e) => {
                hover(false)
            }}
            name={props.name}
            dispose={null}
        >
            <boxGeometry args={[props.width, props.height, props.depth]}/>
            {textures.map(texture => {
                return (
                    <meshBasicMaterial color={hovered ? 'orange' : 'gray'} map={texture}/>
                );
            })}
        </mesh>
    );
}

const Controls = () => {
    const snap = useSnapshot(state);
    const scene = useThree((state) => state.scene);
    return (
        <>
            {snap.current && <TransformControls object={scene.getObjectByName(snap.current)} mode={modes[snap.mode]} size={0.5} />}
            <OrbitControls makeDefault enableDamping={false} minPolarAngle={0} maxPolarAngle={Math.PI / 1.75}/>
        </>
    );
}


export default App;
