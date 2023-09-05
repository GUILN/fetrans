import * as THREE from "three";

const cameraConfig = {
  fov: 75,
  aspect: 2,
  near: 0.1,
  far: 5,
};

const lightConfig = {
  color: 0xffffff,
  intensity: 1,
  position: {
    x: -1,
    y: 2,
    z: 4,
  },
};

export const simulationApp = () => {
  return {
    run: () => {
      const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
      const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
      const { fov, aspect, near, far } = cameraConfig;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

      camera.position.z = 2;

      const scene = new THREE.Scene();

      const boxGeometryDimensions = {
        boxWidth: 1,
        boxHeight: 1,
        boxDepth: 1,
      };

      const { boxWidth, boxHeight, boxDepth } = boxGeometryDimensions;
      const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
      const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });

      const cube = new THREE.Mesh(geometry, material);
      const { color, intensity, position } = lightConfig;

      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(position.x, position.y, position.z);

      scene.add(cube);
      scene.add(light);

      const render = (time: number) => {
        time *= 0.001;

        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
      };

      requestAnimationFrame(render);
    },
  };
};
