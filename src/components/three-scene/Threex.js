import React from "react";
import space from "../../assets/img/space.png";
import TWEEN from "@tweenjs/tween.js";


window.THREE = require("three");
require("three/examples/js/objects/Lensflare");
let THREE = window.THREE;

class Threex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animateScene: false
    };
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    let geometry = new THREE.SphereGeometry(5, 50, 50);
    let material = new THREE.MeshBasicMaterial();
    this.sphere = new THREE.Mesh(geometry, material);

    material.map = THREE.ImageUtils.loadTexture(space);
    this.sphere.material.map.wrapS = THREE.RepeatWrapping;
    this.sphere.material.map.wrapT = THREE.RepeatWrapping;
    this.sphere.material.map.repeat.set(10, 10);

    this.sphere.material.side = THREE.DoubleSide;


    this.scene.add(this.sphere);


    this.camera.position.z = 10;


    this.animate();
  }

  componentDidMount() {
    window.addEventListener("click", (e) => {
      let cameraZPos = { z: 3 };
      let tween = new TWEEN.Tween(cameraZPos).to({
        z: -2
      }, 300).onUpdate((t) => {
        this.camera.position.z = cameraZPos.z;
      }); // duration of tweening is 0.5 second

      tween.start();


      this.setState({
        animateScene: !this.state.animateScene,
        clickX: e.clientX,
        clickY: e.clientY
      }, () => {
        setTimeout(() => {
          this.setState({
            animateScene: !this.state.animateScene
          });
        }, 1000);
      });
    });

  }

  animate = (time) => {
    requestAnimationFrame(this.animate);
    TWEEN.update(time);
    //rotate planet and spacesphere
    if (this.state.animateScene) {
      this.animateSceneMethod();
    }
    this.sphere.rotation.y += 0.001;
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return <div className="App"><h1>Easy</h1></div>;
  }
}

export default Threex;
