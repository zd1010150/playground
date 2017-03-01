import {
  MeshLambertMaterial, Mesh, MeshBasicMaterial, PlaneGeometry, CylinderGeometry, DoubleSide,
} from 'three';

class Coordinates {
  constructor(scene) {
    this.scene = scene;
  }
  drawGrid(params = {}) {
    const size = params.size !== undefined ? params.size : 100;
    const scale = params.scale !== undefined ? params.scale : 0.1;
    const orientation = params.orientation !== undefined ? params.orientation : 'x';
    const grid = new Mesh(
      new PlaneGeometry(size, size, size * scale, size * scale),
      new MeshBasicMaterial({ color: 0x555555, wireframe: true }),
    );
    // Yes, these are poorly labeled! It would be a mess to fix.
    // What's really going on here:
    // "x" means "rotate 90 degrees around x", etc.
    // So "x" really means "show a grid with a normal of Y"
    //    "y" means "show a grid with a normal of X"
    //    "z" means (logically enough) "show a grid with a normal of Z"
    if (orientation === 'x') {
      grid.rotation.x = -Math.PI / 2;
    } else if (orientation === 'y') {
      grid.rotation.y = -Math.PI / 2;
    } else if (orientation === 'z') {
      grid.rotation.z = -Math.PI / 2;
    }

    this.scene.add(grid);
  }
  drawGround(params = {}) {
    const size = params.size !== undefined ? params.size : 100;
    const color = params.color !== undefined ? params.color : 0xFFFFFF;
    const ground = new Mesh(
      new PlaneGeometry(size, size),
      // When we use a ground plane we use directional lights, so illuminating
      // just the corners is sufficient.
      // Use MeshPhongMaterial if you want to capture per-pixel lighting:
      // new MeshPhongMaterial({ color: color, specular: 0x000000,
      new MeshLambertMaterial({ color,
        // polygonOffset moves the plane back from the eye a bit, so that the lines on top of
        // the grid do not have z-fighting with the grid:
        // Factor == 1 moves it back relative to the slope (more on-edge means move back farther)
        // Units == 4 is a fixed amount to move back, and 4 is usually a good value
        polygonOffset: true,
        polygonOffsetFactor: 1.0,
        polygonOffsetUnits: 4.0,
      }));
    ground.rotation.x = -Math.PI / 2;
    this.scene.add(ground);
  }
  drawAxes(params = {}) {
    // x = red, y = green, z = blue  (RGB = xyz)
    const axisRadius = params.axisRadius !== undefined ? params.axisRadius : 0.04;
    const axisLength = params.axisLength !== undefined ? params.axisLength : 11;
    const axisTess = params.axisTess !== undefined ? params.axisTess : 48;
    const axisOrientation = params.axisOrientation !== undefined ? params.axisOrientation : 'x';

    const axisMaterial = new MeshLambertMaterial({ color: 0x000000, side: DoubleSide });
    const axis = new Mesh(
      new CylinderGeometry(axisRadius, axisRadius, axisLength, axisTess, 1, true),
      axisMaterial,
    );
    if (axisOrientation === 'x') {
      axis.rotation.z = -Math.PI / 2;
      axis.position.x = (axisLength / 2) - 1;
    } else if (axisOrientation === 'y') {
      axis.position.y = (axisLength / 2) - 1;
    }

    this.scene.add(axis);

    const arrow = new Mesh(
      new CylinderGeometry(0, 4 * axisRadius, 8 * axisRadius, axisTess, 1, true),
      axisMaterial,
    );
    if (axisOrientation === 'x') {
      arrow.rotation.z = -Math.PI / 2;
      arrow.position.x = (axisLength - 1) + ((axisRadius * 4) / 2);
    } else if (axisOrientation === 'y') {
      arrow.position.y = (axisLength - 1) + ((axisRadius * 4) / 2);
    }

    this.scene.add(arrow);
  }
  drawAllAxes(params = {}) {
    const axisRadius = params.axisRadius !== undefined ? params.axisRadius : 0.04;
    const axisLength = params.axisLength !== undefined ? params.axisLength : 11;
    const axisTess = params.axisTess !== undefined ? params.axisTess : 48;

    const axisXMaterial = new MeshLambertMaterial({ color: 0xFF0000 });
    const axisYMaterial = new MeshLambertMaterial({ color: 0x00FF00 });
    const axisZMaterial = new MeshLambertMaterial({ color: 0x0000FF });
    axisXMaterial.side = DoubleSide;
    axisYMaterial.side = DoubleSide;
    axisZMaterial.side = DoubleSide;
    const axisX = new Mesh(
      new CylinderGeometry(axisRadius, axisRadius, axisLength, axisTess, 1, true),
      axisXMaterial,
    );
    const axisY = new Mesh(
      new CylinderGeometry(axisRadius, axisRadius, axisLength, axisTess, 1, true),
      axisYMaterial,
    );
    const axisZ = new Mesh(
      new CylinderGeometry(axisRadius, axisRadius, axisLength, axisTess, 1, true),
      axisZMaterial,
    );
    axisX.rotation.z = -Math.PI / 2;
    axisX.position.x = (axisLength / 2) - 1;

    axisY.position.y = (axisLength / 2) - 1;

    axisZ.rotation.y = -Math.PI / 2;
    axisZ.rotation.z = -Math.PI / 2;
    axisZ.position.z = (axisLength / 2) - 1;

    this.scene.add(axisX);
    this.scene.add(axisY);
    this.scene.add(axisZ);

    const arrowX = new Mesh(
      new CylinderGeometry(0, 4 * axisRadius, 4 * axisRadius, axisTess, 1, true),
      axisXMaterial,
    );
    const arrowY = new Mesh(
      new CylinderGeometry(0, 4 * axisRadius, 4 * axisRadius, axisTess, 1, true),
      axisYMaterial,
    );
    const arrowZ = new Mesh(
      new CylinderGeometry(0, 4 * axisRadius, 4 * axisRadius, axisTess, 1, true),
      axisZMaterial,
    );
    arrowX.rotation.z = -Math.PI / 2;
    arrowX.position.x = (axisLength - 1) + ((axisRadius * 4) / 2);

    arrowY.position.y = (axisLength - 1) + ((axisRadius * 4) / 2);

    arrowZ.rotation.z = -Math.PI / 2;
    arrowZ.rotation.y = -Math.PI / 2;
    arrowZ.position.z = (axisLength - 1) + ((axisRadius * 4) / 2);

    this.scene.add(arrowX);
    this.scene.add(arrowY);
    this.scene.add(arrowZ);
  }

}

export default Coordinates;
