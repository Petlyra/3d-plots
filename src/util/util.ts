import * as THREE from "three";

export const initScene = (): THREE.Scene => {
    return new THREE.Scene();
}

export const initCamera = (scene: THREE.Scene): THREE.OrthographicCamera => {
    const aspect = window.innerWidth / window.innerHeight;
    const d = 2;
    const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, 1, 1000);
    camera.position.set(4, 3, 3);
    camera.lookAt(scene.position);
    return camera;
}

export const initRenderer = (): THREE.WebGLRenderer => {
    const renderer = new THREE.WebGLRenderer({antialias: false});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    return renderer;
}

export const initScreen = (scene: THREE.Scene): THREE.Mesh => {
    const screen = new THREE.Mesh(
        new THREE.PlaneGeometry(.31, .25, .85),
        new THREE.MeshStandardMaterial({emissive: 0x141A35})
    );
    screen.position.set(1.8, .84, 1.32);
    scene.add(screen);
    return screen;
}

export const loadObject = (scene: THREE.Scene) => {
    const loader = new THREE.ObjectLoader();
    loader.load(
        "https://aperesso.github.io/low_poly_room/room.json",
        (object) => {
            object.receiveShadow = true;
            object.castShadow = true;
            scene.add(object);
        }
    );
}

