import {
  MeshLambertMaterial, Mesh, Object3D,
  CubeGeometry, CylinderGeometry, SphereGeometry,
} from 'three';

class Bird {
  constructor() {
    this.createSupport();
    this.createBody();
    this.createHead();
    this.bodyhead = new Object3D();
    this.bodyhead.add(this.body);
    this.bodyhead.add(this.head);
    this.body.position.y = -360;
    this.head.position.y = -360;
    this.bodyhead.position.y = 360;
    this.angle = 0;
    this.pace = 1;
    this.bodyhead.rotation.z = (30 * Math.PI) / 180;
  }
  render(scene) {
    scene.add(this.support);
    scene.add(this.bodyhead);
  }
  swing() {
    this.angle += this.pace;
    if (this.angle > 45) {
      this.pace = -1;
    }
    if (this.angle < -45) {
      this.pace = 1;
    }
    this.bodyhead.rotation.z = (this.angle * Math.PI) / 180;
  }
  createSupport() {
    const cubeMaterial = new MeshLambertMaterial({ color: 0xF07020 });
    this.support = new Object3D();

    const base = new Mesh(
      new CubeGeometry(20 + 64 + 110, 4, 2 * 77),
      cubeMaterial,
    );
    base.position.x = -45;
    base.position.y = 4 / 2;
    this.support.add(base);

    const lFoot = new Mesh(
      new CubeGeometry(20 + 64 + 110, 52, 6),
      cubeMaterial,
    );
    lFoot.position.x = -45;
    lFoot.position.z = -77;
    lFoot.position.y = 52 / 2;
    this.support.add(lFoot);

    const rFoot = new Mesh(
      new CubeGeometry(20 + 64 + 110, 52, 6),
      cubeMaterial,
    );
    rFoot.position.x = -45;
    rFoot.position.z = 77;
    rFoot.position.y = 52 / 2;
    this.support.add(rFoot);

    const lLeg = new Mesh(
      new CubeGeometry(64, 334, 6),
      cubeMaterial,
    );
    lLeg.position.z = -77;
    lLeg.position.y = (52 + 334) / 2;
    this.support.add(lLeg);

    const rLeg = new Mesh(
      new CubeGeometry(64, 334, 6),
      cubeMaterial,
    );
    rLeg.position.z = 77;
    rLeg.position.y = (52 + 334) / 2;
    this.support.add(rLeg);
  }
  createBody() {
    const sphereMaterial = new MeshLambertMaterial({ color: 0xA00000 });
    const cylinderMaterial = new MeshLambertMaterial({ color: 0x0000D0 });
    this.body = new Object3D();

    const sphere = new Mesh(
      new SphereGeometry(116 / 2, 32, 16),
      sphereMaterial,
    );
    sphere.position.y = 160;
    this.body.add(sphere);

    const cylinder = new Mesh(
      new CylinderGeometry(24, 24, 390, 32),
      cylinderMaterial,
    );
    cylinder.position.y = 160 + (390 / 2);
    this.body.add(cylinder);
  }
  createHead() {
    const sphereMaterial = new MeshLambertMaterial({ color: 0xA00000 });
    const cylinderMaterial = new MeshLambertMaterial({ color: 0x0000D0 });
    this.head = new Object3D();

    const head = new Mesh(
      new SphereGeometry(104 / 2, 32, 16),
      sphereMaterial,
    );
    head.position.y = 160 + 390;
    this.head.add(head);

    const hatCap = new Mesh(
      new CylinderGeometry(142 / 2, 142 / 2, 10, 32),
      cylinderMaterial,
    );
    hatCap.position.y = 160 + 390 + 40 + (10 / 2);
    this.head.add(hatCap);

    const hat = new Mesh(
      new CylinderGeometry(80 / 2, 80 / 2, 70, 32),
      cylinderMaterial,
    );
    hat.position.y = 160 + 390 + 40 + 10 + (70 / 2);
    this.head.add(hat);
  }
}

export default Bird;
