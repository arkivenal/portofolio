"use client";

import {useRef, useEffect} from "react";
import * as THREE from "three";

const Background = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const gridPoints = useRef<THREE.Mesh[]>([]);
  const trackerRef = useRef<HTMLDivElement | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let group: THREE.Group;
    const cursorTrailPoints: {position: THREE.Vector3; time: number}[] = [];
    let cursorLine: THREE.Line | null = null;
    let animationFrameId: number;

    const fov = 75;
    let w = window.innerWidth;
    let h = window.innerHeight;
    const near = 0.1;
    const far = 1000;

    const gridSize = 2;
    const gridExtend = 100;

    function init(){
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(fov, w / h, near, far);
      camera.position.set(0, 0, 50);
      cameraRef.current = camera;

      renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setSize(w, h);
      renderer.setClearColor("#FAFAFA", 1);
      rendererRef.current = renderer;

      group = new THREE.Group();
      scene.add(group);

      if(mountRef.current){
        mountRef.current.appendChild(renderer.domElement);
      };

      for(let x = -gridExtend; x <= gridExtend; x += gridSize){
        for(let y = -gridExtend; y <= gridExtend; y += gridSize){
          const geometry = new THREE.BoxGeometry(0.15, 0.1, 0.15);
          const material = new THREE.MeshBasicMaterial();
          const point = new THREE.Mesh(geometry, material);
          point.position.set(x, y, 0);
          group.add(point);
          gridPoints.current.push(point);
        }
      };

      const trailGeometry = new THREE.BufferGeometry();
      const trailMaterial = new THREE.LineBasicMaterial({ color: "#145CFD", transparent: true, opacity: 1 });

      const maxPoints = 100;
      const positions = new Float32Array(maxPoints * 3);
      trailGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      cursorLine = new THREE.Line(trailGeometry, trailMaterial);
      scene.add(cursorLine);
    }

    function animate(){
      animationFrameId = requestAnimationFrame(animate);

      const now = Date.now() / 1000;
      const amplitude = 5;
      const wavelength = 15;
      const speed = 2;

      gridPoints.current.forEach((point) => {
        const x = point.position.x;
        const y = point.position.y;

        const wave = amplitude * Math.sin((x + y) / wavelength - speed * now);
        point.position.z = wave;

        const normalized = (wave + amplitude) / (2 * amplitude);
        const setColor = 0.3 + 0.6 * normalized;

        (point.material as THREE.MeshBasicMaterial).color.setRGB(setColor, setColor, setColor);
      });

      group.rotation.z += 0.005;

      while(cursorTrailPoints.length > 0 && now - cursorTrailPoints[0].time > 0.5){
        cursorTrailPoints.shift();
      }

      if(cursorLine){
        const positions = cursorLine.geometry.attributes.position.array as Float32Array;
        const count = cursorTrailPoints.length;

        for(let i = 0; i < count; i++){
          positions[i * 3] = cursorTrailPoints[i].position.x;
          positions[i * 3 + 1] = cursorTrailPoints[i].position.y;
          positions[i * 3 + 2] = cursorTrailPoints[i].position.z;
        }

        for(let i = count; i < positions.length / 3; i++){
          positions[i * 3] = 0;
          positions[i * 3 + 1] = 0;
          positions[i * 3 + 2] = 0;
        }

        cursorLine.geometry.setDrawRange(0, count);
        cursorLine.geometry.attributes.position.needsUpdate = true;
      }
      renderer.render(scene, camera);
    }

    function onResize(){
      w = window.innerWidth;
      h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    function onMouseMove(event: MouseEvent) {
      if (!rendererRef.current || !cameraRef.current) {
        return;
      }

      const renderer = rendererRef.current;
      const camera = cameraRef.current;

      const viewport = renderer.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - viewport.left) / viewport.width) * 2 - 1,
        -((event.clientY - viewport.top) / viewport.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const intersection = new THREE.Vector3();
      raycaster.ray.intersectPlane(planeZ, intersection);

      if (trackerRef.current) {
        const coords = trackerRef.current.querySelector("#coords");
        if (coords) {
          (coords as HTMLElement).innerText = `(${intersection.x.toFixed(2)}, ${intersection.y.toFixed(2)})`;
        }
      }

      cursorTrailPoints.push({ position: intersection.clone(), time: Date.now() / 1000 });
    }

    init();
    animate();

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);

    return() => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);

      cancelAnimationFrame(animationFrameId);
      gridPoints.current.forEach((point) => {
        point.geometry.dispose();
        (point.material as THREE.MeshBasicMaterial).dispose();
        scene.remove(point);
      });
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      gridPoints.current = [];
    };
  }, []);

  return(
    <>
      <div ref={mountRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
    <div ref={trackerRef} className="hidden md:flex fixed w-full bottom-0 left-0 px-4 flex justify-between items-center text-xl md:text-2xl z-50 pointer-events-none text-center">
      <span className="text-gray-900">SCALE</span>
      <span id="coords" className="text-blue-600 text-xl md:text-2xl"></span>
    </div>
    </>
  );
};

export default Background;