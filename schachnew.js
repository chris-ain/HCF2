const objects=[],selects=[],spheres=[];export var id;export var scene;export var expModel;export function chessScene(e){const t=document.getElementById("chess");var o=new THREE.WebGLRenderer({alpha:!0,antialiase:!0,canvas:t});o.setSize(window.innerWidth,window.innerHeight),(scene=new THREE.Scene).fog=new THREE.FogExp2(592137,.15,100);let n=0;const i=()=>n++,a="https://uploads-ssl.webflow.com/612d2c01db57a270ec502b3f/617481136662332a5d3e39bb_gregzaal-venicedawn-1.jpg",s=(new THREE.TextureLoader).load(a,i),r=(new THREE.TextureLoader).load(a,i);s.mapping=THREE.EquirectangularReflectionMapping,r.mapping=THREE.EquirectangularRefractionMapping,scene.environment=s;var c=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.z=5,c.position.y=1.8;var l=new THREE.AmbientLight(16250871,.1);scene.add(l);var p=new THREE.DirectionalLight(251131895);p.position.set(1,1,3).normalize(),scene.add(p),p.shadow.camera=new THREE.OrthographicCamera(100,100,100,100,.1,.1),p.castShadow=!0;var d=new THREE.SpotLight(16250871,3);d.position.set(-1,-1,-1).normalize(),scene.add(d);const m=new GLTFLoader;let h,w,E;const u=new THREE.Group;m.load("https://raw.githubusercontent.com/chris-ain/handlefinal/main/chess_board21.glb",function(e){e.scene.traverse(function(e){e instanceof THREE.Mesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.side=THREE.DoubleSide,selects.push(e),objects.push(e))}),w=e.scene,expModel=e.scene,u.scale.set(.31,.31,.31),u.position.set(0,.65,0),u.add(w),scene.add(u),(h=new THREE.AnimationMixer(w)).timeScale=1;var t=h.clipAction(e.animations[1]);(E=e.animations).forEach(e=>{h.clipAction(e).play()}),E.paused=!0,T(h,t,e.animations[1]),w=e.scene,expModel=e.scene,w.position.set(0,0,0),u.scale.set(.31,.31,.31),u.position.set(0,0,0),u.add(w),scene.add(u),(h=new THREE.AnimationMixer(w)).timeScale=1;t=h.clipAction(e.animations[1]);(E=e.animations).forEach(e=>{h.clipAction(e).play()}),E.paused=!0,T(h,t,e.animations[1]),(h=new THREE.AnimationMixer(w)).timeScale=1;t=h.clipAction(e.animations[1]);(E=e.animations).forEach(e=>{h.clipAction(e).play()}),E.paused=!0,T(h,t,e.animations[1])}),o.setClearColor(0,0),o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),o.toneMappingExposure=1,o.shadowMap.enabled=!0,window.addEventListener("resize",function(){let e=window.innerWidth,t=window.innerHeight;c.aspect=e/t,c.updateProjectionMatrix();o.getPixelRatio()});var g=new THREE.Clock;function T(e,t,o){let n={get time(){return e.time},set time(t){E.forEach(t=>{e.clipAction(t).paused=!1}),e.setTime(t),E.forEach(t=>{e.clipAction(t).paused=!0})}};gsap.timeline({scrollTrigger:{trigger:".smooth-scroll",scroller:".smooth-scroll",start:"top 10",end:"bottom",scrub:!0,ease:Power2.easeInOut,onUpdate:function(){c.updateProjectionMatrix()}}}).to(n,{time:o.duration,repeat:0}),gsap.timeline({scrollTrigger:{trigger:".smooth-scroll",scroller:".smooth-scroll",start:"top top",end:"bottom",scrub:!0,ease:Power3.easeInOut,onUpdate:function(){c.updateProjectionMatrix()}}}).to(w.rotation,{x:Math.PI/5,y:Math.PI,z:-Math.PI/5}),gsap.timeline({scrollTrigger:{trigger:".smooth-scroll",scroller:".smooth-scroll",start:"top top",end:"bottom",scrub:!0,ease:Power3.easeInOut,onUpdate:function(){c.updateProjectionMatrix()}}}).to(w.position,{x:2,y:-2})}!function e(){id=requestAnimationFrame(e),o.render(scene,c);const t=1e-4*Date.now();var n=g.getDelta();c.lookAt(u.position),null!=h&&h.update(n),u&&(u.rotation.y+=.001);for(let e=0,o=spheres.length;e<o;e++){const o=spheres[e];o.position.x=5*Math.cos(t+e),o.position.y=5*Math.sin(t+1.1*e)}}()}
