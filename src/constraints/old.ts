import * as THREE from "three";
import {useEffect} from "react";
// const getMaterials = (textures: THREE.Texture[]): THREE.MeshBasicMaterial[] => {
//     return textures.map(texture => new THREE.MeshBasicMaterial({map: texture}))
// }

// const geometry = new THREE.BoxGeometry(5, 3, 0.3);
// const geometrySecond = new THREE.BoxGeometry(5, 3, 0.3);

// const textures = [
//     useLoader(TextureLoader, TEXTURES_PATH + "grey.jpg"),       // right
//     useLoader(TextureLoader, TEXTURES_PATH + "grey.jpg"),       // left
//     useLoader(TextureLoader, TEXTURES_PATH + "grey.jpg"),       // top
//     useLoader(TextureLoader, TEXTURES_PATH + "grey.jpg"),       // bottom
//     useLoader(TextureLoader, TEXTURES_PATH + "texture.jpg"),    //front
//     useLoader(TextureLoader, TEXTURES_PATH + "grey.jpg")        // back
// ];
// const materials = getMaterials(textures);
//
// const cube = new THREE.Mesh(geometry, materials);
// cube.position.set(2.3, 0, -3);
//
// const wall = new THREE.Mesh(geometrySecond, materials);
// wall.position.set(-0.3, 0, -3);
// wall.rotation.set(0, Math.PI / 2, 0);
//
// const animate = () => {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// };
//
// useEffect(() => {
//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//         document.removeEventListener("keydown", handleKeyDown);
//     }
// })
//
// useEffect(() => {
//     document.addEventListener("wheel", handleScroll);
//     return () => {
//         document.removeEventListener("wheel", handleScroll);
//     }
// })
//
// const handleScroll = (e: WheelEvent) => {
//     if (e.deltaY > 0) {
//         cube.rotation.x += ROTATION_STEP;
//         wall.rotation.x += ROTATION_STEP;
//     }
//     if (e.deltaY < 0) {
//         cube.rotation.x -= ROTATION_STEP;
//         wall.rotation.x -= ROTATION_STEP;
//     }
// }
//
// const handleKeyDown = (e: KeyboardEvent) => {
//     if (e.key === "a") {
//         cube.rotation.y += ROTATION_STEP;
//         wall.rotation.y += ROTATION_STEP;
//     }
//     if (e.key === "d") {
//         cube.rotation.y -= ROTATION_STEP;
//         wall.rotation.y -= ROTATION_STEP;
//     }
//     if (e.key === "w") {
//         cube.rotation.z += ROTATION_STEP;
//         wall.rotation.z += ROTATION_STEP;
//     }
//     if (e.key === "s") {
//         cube.rotation.z -= ROTATION_STEP;
//         wall.rotation.z -= ROTATION_STEP;
//     }
// }
// useEffect(() => {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
//     scene.add(cube);
//     scene.add(wall);
//     camera.position.z = 5;
//     animate();
// }, []);