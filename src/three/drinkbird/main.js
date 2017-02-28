import {
  WebGLRenderer, Scene, PerspectiveCamera,
} from 'three';

const scene = new Scene();

const renderer = new WebGLRenderer();
renderer.clear(0xAAAAAA, 1.0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
try {
  animate();
} catch (err) {
  console.log('', err);
}
