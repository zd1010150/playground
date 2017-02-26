import {
  Scene, PerspectiveCamera, WebGLRenderer, MeshBasicMaterial, Mesh, TorusGeometry,
} from 'three';

const scene = new Scene();
const renderer = new WebGLRenderer({
  canvas: document.getElementById('canvas'),
});
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(1, 1, 10);
scene.add(camera);

const geometry = new TorusGeometry(3, 1, 12, 18);
const material = new MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
const torus = new Mesh(geometry, material);
scene.add(torus);


const render = () => {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

render();
