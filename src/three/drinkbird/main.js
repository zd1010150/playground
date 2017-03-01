import {
  WebGLRenderer, Scene, PerspectiveCamera, AmbientLight, DirectionalLight,
} from 'three';
import OrbitControls from './OrbitControls';
import Coordinates from './Coordinates';
import Bird from './Bird';

const renderer = new WebGLRenderer({ antialias: true });
renderer.setClearColor(0xAAAAAA, 1.0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new Scene();
const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(-100, 100, 600);
scene.add(camera);

const cameraControls = new OrbitControls(camera, renderer.domElement);
cameraControls.target.set(0, 0, 0);

const bird = new Bird();

const fillScene = () => {
  const coordinates = new Coordinates(scene);
  coordinates.drawAllAxes({
    axisLength: 300,
    axisRadius: 2,
    axisTess: 50,
  });

  const ambientLight = new AmbientLight(0x222222);
  scene.add(ambientLight);

  const light = new DirectionalLight(0xFFFFFF, 1.0);
  light.position.set(200, 400, 500);
  scene.add(light);

  bird.render(scene);
};

const animate = () => {
  requestAnimationFrame(animate);
  bird.swing();
  renderer.render(scene, camera);
};
try {
  fillScene();
  animate();
} catch (err) {
  console.log('', err);
}
