import{r as P,w as S,V as y,b as _,c as E,_ as M,u as h,a as b,ab as C,i as w}from"./react-three-fiber.esm-BcJ7ils1.js";import{r as e}from"./ssg-client-CTSCcih9.js";const I=()=>parseInt(P.replace(/\D+/g,"")),N=I();class V extends S{constructor(){super({uniforms:{depth:{value:null},opacity:{value:1},attenuation:{value:2.5},anglePower:{value:12},spotPosition:{value:new y(0,0,0)},lightColor:{value:new _("white")},cameraNear:{value:0},cameraFar:{value:1},resolution:{value:new E(0,0)}},transparent:!0,depthWrite:!1,vertexShader:`
        varying vec3 vNormal;
        varying float vViewZ;
        varying float vIntensity;
        uniform vec3 spotPosition;
        uniform float attenuation;

        #include <common>
        #include <logdepthbuf_pars_vertex>

        void main() {
          // compute intensity
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPosition = modelMatrix * vec4(position, 1);
          vec4 viewPosition = viewMatrix * worldPosition;
          vViewZ = viewPosition.z;

          vIntensity = 1.0 - saturate(distance(worldPosition.xyz, spotPosition) / attenuation);

          gl_Position = projectionMatrix * viewPosition;

          #include <logdepthbuf_vertex>
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        varying float vViewZ;
        varying float vIntensity;

        uniform vec3 lightColor;
        uniform float anglePower;
        uniform sampler2D depth;
        uniform vec2 resolution;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float opacity;

        #include <packing>
        #include <logdepthbuf_pars_fragment>

        float readDepth(sampler2D depthSampler, vec2 uv) {
          float fragCoordZ = texture(depthSampler, uv).r;

          // https://github.com/mrdoob/three.js/issues/23072
          #ifdef USE_LOGDEPTHBUF
            float viewZ = 1.0 - exp2(fragCoordZ * log(cameraFar + 1.0) / log(2.0));
          #else
            float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar);
          #endif

          return viewZ;
        }

        void main() {
          #include <logdepthbuf_fragment>

          vec3 normal = vec3(vNormal.x, vNormal.y, abs(vNormal.z));
          float angleIntensity = pow(dot(normal, vec3(0, 0, 1)), anglePower);
          float intensity = vIntensity * angleIntensity;

          // fades when z is close to sampled depth, meaning the cone is intersecting existing geometry
          bool isSoft = resolution[0] > 0.0 && resolution[1] > 0.0;
          if (isSoft) {
            vec2 uv = gl_FragCoord.xy / resolution;
            intensity *= smoothstep(0.0, 1.0, vViewZ - readDepth(depth, uv));
          }

          gl_FragColor = vec4(lightColor, intensity * opacity);

          #include <tonemapping_fragment>
          #include <${N>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}}function Z({opacity:u=1,radiusTop:a,radiusBottom:r,depthBuffer:c,color:m="white",distance:n=5,angle:v=.15,attenuation:g=5,anglePower:d=5}){const i=e.useRef(null),l=h(t=>t.size),s=h(t=>t.camera),f=h(t=>t.viewport.dpr),[p]=e.useState(()=>new V),[o]=e.useState(()=>new y);a=a===void 0?.1:a,r=r===void 0?v*7:r,b(()=>{p.uniforms.spotPosition.value.copy(i.current.getWorldPosition(o)),i.current.lookAt(i.current.parent.target.getWorldPosition(o))});const x=e.useMemo(()=>{const t=new C(a,r,n,128,64,!0);return t.applyMatrix4(new w().makeTranslation(0,-n/2,0)),t.applyMatrix4(new w().makeRotationX(-Math.PI/2)),t},[n,a,r]);return e.createElement(e.Fragment,null,e.createElement("mesh",{ref:i,geometry:x,raycast:()=>null},e.createElement("primitive",{object:p,attach:"material","uniforms-opacity-value":u,"uniforms-lightColor-value":m,"uniforms-attenuation-value":g,"uniforms-anglePower-value":d,"uniforms-depth-value":c,"uniforms-cameraNear-value":s.near,"uniforms-cameraFar-value":s.far,"uniforms-resolution-value":c?[l.width*f,l.height*f]:[0,0]})))}const D=e.forwardRef(({opacity:u=1,radiusTop:a,radiusBottom:r,depthBuffer:c,color:m="white",distance:n=5,angle:v=.15,attenuation:g=5,anglePower:d=5,volumetric:i=!0,debug:l=!1,children:s,...f},p)=>{const o=e.useRef(null);return e.useImperativeHandle(p,()=>o.current,[]),e.createElement("group",null,l&&o.current&&e.createElement("spotLightHelper",{args:[o.current]}),e.createElement("spotLight",M({ref:o,angle:v,color:m,distance:n,castShadow:!0},f),i&&e.createElement(Z,{debug:l,opacity:u,radiusTop:a,radiusBottom:r,depthBuffer:c,color:m,distance:n,angle:v,attenuation:g,anglePower:d})),s&&e.cloneElement(s,{spotlightRef:o,debug:l}))});export{D as S};
