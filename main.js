
import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitsControls.js';

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.01, 300 );
camera.position.z = 2;

const orbit_controls = new OrbitControls(camera, renderer.domElement)



const ambient = new THREE.HemisphereLight( 0xffffff, 0x999999, 3 );
scene.add( ambient );

const axisX = new THREE.Vector3(1, 0, 0);
const axisY = new THREE.Vector3(0, 1, 0);
const axisXY = new THREE.Vector3(1, 1, 0).normalize();
const axisZ = new THREE.Vector3(0, 0, 1);

const radius = 1;
const alpha = Math.PI/10;
const beta = Math.PI/2 - alpha; 
const a = Math.sin(alpha) * radius;
const b = Math.cos(alpha) * radius;
const c = Math.tan(beta) * b;

const coneHeight = c ;
const coneWidth = b ;

const resolution = 128;

const material = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, wireframe: false } ); 

const torusGeometry = new THREE.TorusGeometry( 0.075, 0.025, resolution, resolution * 2 ); 
const torusGeometry2 = new THREE.TorusGeometry( 0.75, 0.25, resolution, resolution * 2 ); 
const torus = new THREE.Mesh( torusGeometry, material );

torus.scale.z *= 0.5
scene.add( torus );

const coneGeometry = new THREE.ConeGeometry(coneWidth, coneHeight, resolution * 2, 4);
coneGeometry.translate(0, coneHeight / 2 + a, 0);
coneGeometry.scale(0.036, 0.036, 0.036)
coneGeometry.translate(0, 0.145, 0); 

const sphereGeometry = new THREE.SphereGeometry(1, resolution * 2, resolution * 2);
sphereGeometry.scale(0.036, 0.036, 0.036)
sphereGeometry.translate(0, 0.145, 0);


const spiral = new THREE.Group();
scene.add(spiral);

const nbSpokes = 6;
const scaleFactor = 1.25
const halfTurn = new THREE.Quaternion().setFromAxisAngle(axisZ, Math.PI);
const quat = new THREE.Quaternion();

for(let i = 0; i < nbSpokes; ++i) {
	const spoke = new THREE.Group();
	spiral.add(spoke);

	const cone0 = new THREE.Mesh(coneGeometry, material);
	const cone1 = new THREE.Mesh(coneGeometry, material);
	const sphere0 = new THREE.Mesh(sphereGeometry, material);
	const sphere1 = new THREE.Mesh(sphereGeometry, material);

	cone0.applyQuaternion(halfTurn);
	sphere0.applyQuaternion(halfTurn);

	spoke.add(cone0, cone1, sphere0, sphere1);
	quat.setFromAxisAngle(axisZ, (i-1)*Math.PI / 5.5);
	spoke.applyQuaternion(quat);

	spoke.scale.multiplyScalar(Math.pow(scaleFactor, i));
	spoke.scale.z *= 0.5
	spoke.scale.y *= 1.2
}


window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

let play = true;

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
			play = !play;
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
		case "KeyW":
			material.wireframe = !material.wireframe;
			console.log(material.wireframe)
			break;
		case "Numpad0":
			break;
		case "ArrowRight":
			coneGeometry.translate(0, 0.01, 0);

			break;
		case "ArrowLeft":
			coneGeometry.translate(0, -0.01, 0);

			break;
	};

	keyHeld[event.code] = false;
}

window.addEventListener("keydown", defaultKeyDown);
window.addEventListener("keyup", defaultKeyUp);


let frameCount = 0;
function update (t)
{
	if(play){
	    spiral.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisXY, 0.2* Math.PI / 100))
	    // spiral.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axisZ, 0.1 * Math.PI / 100))
	}
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