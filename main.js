
import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitsControls.js';

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.01, 30 );
camera.position.z = 2;

const orbit_controls = new OrbitControls(camera, renderer.domElement)



const ambient = new THREE.HemisphereLight( 0xffffff, 0x999999, 3 );
scene.add( ambient );

const axisX = new THREE.Vector3(1, 0, 0);
const axisY = new THREE.Vector3(0, 1, 0);
const axisXY = new THREE.Vector3(1, 1, 0).normalize();
const axisZ = new THREE.Vector3(0, 0, 1);



const material = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, wireframe: false } ); 

const torusGeometry = new THREE.TorusGeometry( 0.075, 0.025, 64, 128 ); 
const torus = new THREE.Mesh( torusGeometry, material );

torus.scale.z *= 0.5
scene.add( torus );

const coneGeometry = new THREE.ConeGeometry(0.9515, 4, 128, 4);
coneGeometry.rotateZ(-0.00);
coneGeometry.translate(0, 2, 0);
coneGeometry.scale(0.036, 0.036, 0.036)
coneGeometry.translate(0, 0.15, 0);

const sphereGeometry = new THREE.SphereGeometry(0.95, 128, 128);
sphereGeometry.scale(0.036, 0.01, 0.036)
sphereGeometry.translate(0, 0.1495, 0);


const g = new THREE.Group()
const g0 = new THREE.Group()
const g1 = new THREE.Group()
const g2 = new THREE.Group()
const g3 = new THREE.Group()
const g4 = new THREE.Group()
const g5 = new THREE.Group()

scene.add(g)
g.add(g0);
g.add(g1);
g.add(g2);
g.add(g3);
g.add(g4);
g.add(g5);


const cone00 = new THREE.Mesh(coneGeometry, material);
const cone01 = new THREE.Mesh(coneGeometry, material);
const cone10 = new THREE.Mesh(coneGeometry, material);
const cone11 = new THREE.Mesh(coneGeometry, material);
const cone20 = new THREE.Mesh(coneGeometry, material);
const cone21 = new THREE.Mesh(coneGeometry, material);
const cone30 = new THREE.Mesh(coneGeometry, material);
const cone31 = new THREE.Mesh(coneGeometry, material);
const cone40 = new THREE.Mesh(coneGeometry, material);
const cone41 = new THREE.Mesh(coneGeometry, material);
const cone50 = new THREE.Mesh(coneGeometry, material);
const cone51 = new THREE.Mesh(coneGeometry, material);


cone00.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, Math.PI));
cone10.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, Math.PI));
cone20.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, Math.PI));
cone30.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, Math.PI));
cone40.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, Math.PI));
cone50.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, Math.PI));

g0.add(cone00, cone01);
g1.add(cone10, cone11);
g2.add(cone20, cone21);
g3.add(cone30, cone31);
g4.add(cone40, cone41);
g5.add(cone50, cone51);

const sphere00 = new THREE.Mesh(sphereGeometry, material);
const sphere01 = new THREE.Mesh(sphereGeometry, material);
const sphere10 = new THREE.Mesh(sphereGeometry, material);
const sphere11 = new THREE.Mesh(sphereGeometry, material);
const sphere20 = new THREE.Mesh(sphereGeometry, material);
const sphere21 = new THREE.Mesh(sphereGeometry, material);
const sphere30 = new THREE.Mesh(sphereGeometry, material);
const sphere31 = new THREE.Mesh(sphereGeometry, material);
const sphere40 = new THREE.Mesh(sphereGeometry, material);
const sphere41 = new THREE.Mesh(sphereGeometry, material);
const sphere50 = new THREE.Mesh(sphereGeometry, material);
const sphere51 = new THREE.Mesh(sphereGeometry, material);

sphere00.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, Math.PI));
sphere10.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, Math.PI));
sphere20.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, Math.PI));
sphere30.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, Math.PI));
sphere40.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, Math.PI));
sphere50.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, Math.PI));

g0.add(sphere00, sphere01);
g1.add(sphere10, sphere11);
g2.add(sphere20, sphere21);
g3.add(sphere30, sphere31);
g4.add(sphere40, sphere41);
g5.add(sphere50, sphere51);


g0.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, -1*Math.PI / 6));
g1.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, 0*Math.PI / 6));
g2.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, 1*Math.PI/6));
g3.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, 2*Math.PI/6.));
g4.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, 3*Math.PI/6.));
g5.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, 4*Math.PI/6));


const scaleFactor = 1.25
let scale = scaleFactor;
g1.scale.multiplyScalar(scale);
scale *= scaleFactor;
g2.scale.multiplyScalar(scale);
scale *= scaleFactor;
g3.scale.multiplyScalar(scale);
scale *= scaleFactor;
g4.scale.multiplyScalar(scale);
scale *= scaleFactor;
g5.scale.multiplyScalar(scale);
g0.scale.z *= 0.5
g1.scale.z *= 0.5
g2.scale.z *= 0.5
g3.scale.z *= 0.5
g4.scale.z *= 0.5
g5.scale.z *= 0.5


window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});



const keyHeld = {};
const defaultKeyDown = function(event){
	keyHeld[event.code] = true;
};

const defaultKeyUp = function(event){
	console.log(event.which, event.code, event.charCode);
	switch(event.code) {
		case "Escape": 
			break;
		case "Space":
			break;
		case "Delete":
			break;
		case "KeyA":
			break;
		case "KeyC":
			break;
		case "KeyE":
			break;
		case "KeyF":
			break
		case "KeyL":
			break;
		case "Numpad0":
			break;
		case "ArrowRight":
			break;
	};

	keyHeld[event.code] = false;
}


let frameCount = 0;
function update (t)
{
    g.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisXY, 0.2* Math.PI / 100))
    g0.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisXY, -0.3* Math.PI / 100))
    g1.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisXY, -0.3* Math.PI / 100))
    g2.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisXY, -0.3* Math.PI / 100))
    g3.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisXY, -0.3* Math.PI / 100))
    g4.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisXY, -0.3* Math.PI / 100))
    g5.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisXY, -0.3* Math.PI / 100))
}

function render()
{
	renderer.render(scene, camera);
}

function mainloop(t)
{
    update(t);
    render();
	requestAnimationFrame(mainloop);
}

mainloop(0);