import{r as De,g as Uv,j as Bn}from"./ssg-client-yjrRXNAq.js";function Fa(){return Fa=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Fa.apply(null,arguments)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fo="168",hs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nv=0,Nd=1,Ov=2,iS=3,Fv=0,Ju=1,ba=2,Ti=3,mr=0,Hn=1,Hi=2,pr=0,Ss=1,Od=2,Fd=3,zd=4,zv=5,Fr=100,Bv=101,kv=102,Hv=103,Vv=104,Gv=200,Wv=201,Xv=202,Yv=203,mu=204,gu=205,qv=206,Zv=207,jv=208,Jv=209,Kv=210,Qv=211,$v=212,e_=213,t_=214,n_=0,i_=1,r_=2,za=3,s_=4,o_=5,a_=6,l_=7,ol=0,c_=1,u_=2,Xi=0,h_=1,f_=2,d_=3,tp=4,p_=5,m_=6,g_=7,Bd="attached",v_="detached",Ku=300,gr=301,zr=302,Ba=303,ka=304,zo=306,Ha=1e3,vi=1001,Va=1002,vn=1003,np=1004,rS=1004,Eo=1005,sS=1005,on=1006,Ca=1007,oS=1007,Gi=1008,aS=1008,bi=1009,ip=1010,rp=1011,Lo=1012,Qu=1013,vr=1014,Zn=1015,Bo=1016,$u=1017,eh=1018,bs=1020,sp=35902,op=1021,ap=1022,Dn=1023,lp=1024,cp=1025,Ms=1026,Cs=1027,th=1028,al=1029,up=1030,nh=1031,lS=1032,ih=1033,Ra=33776,Pa=33777,Ia=33778,La=33779,vu=35840,_u=35841,yu=35842,xu=35843,Su=36196,Mu=37492,wu=37496,Eu=37808,Tu=37809,Au=37810,bu=37811,Cu=37812,Ru=37813,Pu=37814,Iu=37815,Lu=37816,Du=37817,Uu=37818,Nu=37819,Ou=37820,Fu=37821,Da=36492,zu=36494,Bu=36495,hp=36283,ku=36284,Hu=36285,Vu=36286,__=2200,y_=2201,x_=2202,Ga=2300,Gu=2301,fu=2302,gs=2400,vs=2401,Wa=2402,rh=2500,fp=2501,cS=0,uS=1,hS=2,S_=3200,M_=3201,fS=3202,dS=3203,kr=0,w_=1,ur="",gi="srgb",yr="srgb-linear",sh="display-p3",ll="display-p3-linear",Xa="linear",Bt="srgb",Ya="rec709",qa="p3",pS=0,ds=7680,mS=7681,gS=7682,vS=7683,_S=34055,yS=34056,xS=5386,SS=512,MS=513,wS=514,ES=515,TS=516,AS=517,bS=518,kd=519,E_=512,T_=513,A_=514,dp=515,b_=516,C_=517,R_=518,P_=519,Za=35044,CS=35048,RS=35040,PS=35045,IS=35049,LS=35041,DS=35046,US=35050,NS=35042,OS="100",Hd="300 es",Wi=2e3,ja=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,l=i.length;s<l;s++)i[s].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rg=1234567;const ws=Math.PI/180,Do=180/Math.PI;function si(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function Jt(r,e,t){return Math.max(e,Math.min(t,r))}function pp(r,e){return(r%e+e)%e}function FS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function zS(r,e,t){return r!==e?(t-r)/(e-r):0}function Ua(r,e,t){return(1-t)*r+t*e}function BS(r,e,t,n){return Ua(r,e,1-Math.exp(-t*n))}function kS(r,e=1){return e-Math.abs(pp(r,e*2)-e)}function HS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function VS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function GS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function WS(r,e){return r+Math.random()*(e-r)}function XS(r){return r*(.5-Math.random())}function YS(r){r!==void 0&&(Rg=r);let e=Rg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qS(r){return r*ws}function ZS(r){return r*Do}function jS(r){return(r&r-1)===0&&r!==0}function JS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function KS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function QS(r,e,t,n,i){const s=Math.cos,l=Math.sin,c=s(t/2),u=l(t/2),h=s((e+n)/2),f=l((e+n)/2),p=s((e-n)/2),m=l((e-n)/2),g=s((n-e)/2),y=l((n-e)/2);switch(i){case"XYX":r.set(c*f,u*p,u*m,c*h);break;case"YZY":r.set(u*m,c*f,u*p,c*h);break;case"ZXZ":r.set(u*p,u*m,c*f,c*h);break;case"XZX":r.set(c*f,u*y,u*g,c*h);break;case"YXY":r.set(u*g,c*f,u*y,c*h);break;case"ZYZ":r.set(u*y,u*g,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const I_={DEG2RAD:ws,RAD2DEG:Do,generateUUID:si,clamp:Jt,euclideanModulo:pp,mapLinear:FS,inverseLerp:zS,lerp:Ua,damp:BS,pingpong:kS,smoothstep:HS,smootherstep:VS,randInt:GS,randFloat:WS,randFloatSpread:XS,seededRandom:YS,degToRad:qS,radToDeg:ZS,isPowerOfTwo:jS,ceilPowerOfTwo:JS,floorPowerOfTwo:KS,setQuaternionFromProperEuler:QS,normalize:vt,denormalize:kn};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,l=this.y-e.y;return this.x=s*n-l*i+e.x,this.y=s*i+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,n,i,s,l,c,u,h){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,l,c,u,h)}set(e,t,n,i,s,l,c,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=l,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],c=n[3],u=n[6],h=n[1],f=n[4],p=n[7],m=n[2],g=n[5],y=n[8],S=i[0],x=i[3],_=i[6],E=i[1],w=i[4],A=i[7],U=i[2],C=i[5],L=i[8];return s[0]=l*S+c*E+u*U,s[3]=l*x+c*w+u*C,s[6]=l*_+c*A+u*L,s[1]=h*S+f*E+p*U,s[4]=h*x+f*w+p*C,s[7]=h*_+f*A+p*L,s[2]=m*S+g*E+y*U,s[5]=m*x+g*w+y*C,s[8]=m*_+g*A+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*l*f-t*c*h-n*s*f+n*c*u+i*s*h-i*l*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=f*l-c*h,m=c*u-f*s,g=h*s-l*u,y=t*p+n*m+i*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=p*S,e[1]=(i*h-f*n)*S,e[2]=(c*n-i*l)*S,e[3]=m*S,e[4]=(f*t-i*u)*S,e[5]=(i*s-c*t)*S,e[6]=g*S,e[7]=(n*u-h*t)*S,e[8]=(l*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,l,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*l+h*c)+l+e,-i*h,i*u,-i*(-h*l+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Of.makeScale(e,t)),this}rotate(e){return this.premultiply(Of.makeRotation(-e)),this}translate(e,t){return this.premultiply(Of.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Of=new gt;function L_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const $S={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function To(r,e){return new $S[r](e)}function Ja(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function D_(){const r=Ja("canvas");return r.style.display="block",r}const Pg={};function Po(r){r in Pg||(Pg[r]=!0,console.warn(r))}function eM(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ig=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lg=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ua={[yr]:{transfer:Xa,primaries:Ya,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[gi]:{transfer:Bt,primaries:Ya,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ll]:{transfer:Xa,primaries:qa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Lg),fromReference:r=>r.applyMatrix3(Ig)},[sh]:{transfer:Bt,primaries:qa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Lg),fromReference:r=>r.applyMatrix3(Ig).convertLinearToSRGB()}},tM=new Set([yr,ll]),Lt={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!tM.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ua[e].toReference,i=ua[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ua[r].primaries},getTransfer:function(r){return r===ur?Xa:ua[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(ua[e].luminanceCoefficients)}};function Io(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ff(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qs;class U_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=Ja("canvas")),Qs.width=e.width,Qs.height=e.height;const n=Qs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ja("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let l=0;l<s.length;l++)s[l]=Io(s[l]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Io(t[n]/255)*255):t[n]=Io(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nM=0;class _s{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let l=0,c=i.length;l<c;l++)i[l].isDataTexture?s.push(zf(i[l].image)):s.push(zf(i[l]))}else s=zf(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function zf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?U_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iM=0;class Yt extends Ri{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=vi,i=vi,s=on,l=Gi,c=Dn,u=bi,h=Yt.DEFAULT_ANISOTROPY,f=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=si(),this.name="",this.source=new _s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Ku;Yt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,i=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*i+l[12]*s,this.y=l[1]*t+l[5]*n+l[9]*i+l[13]*s,this.z=l[2]*t+l[6]*n+l[10]*i+l[14]*s,this.w=l[3]*t+l[7]*n+l[11]*i+l[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],p=u[8],m=u[1],g=u[5],y=u[9],S=u[2],x=u[6],_=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-S)<.01&&Math.abs(y-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+S)<.1&&Math.abs(y+x)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,A=(g+1)/2,U=(_+1)/2,C=(f+m)/4,L=(p+S)/4,z=(y+x)/4;return w>A&&w>U?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=C/n,s=L/n):A>U?A<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(A),n=C/i,s=z/i):U<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(U),n=L/s,i=z/s),this.set(n,i,s,t),this}let E=Math.sqrt((x-y)*(x-y)+(p-S)*(p-S)+(m-f)*(m-f));return Math.abs(E)<.001&&(E=1),this.x=(x-y)/E,this.y=(p-S)/E,this.z=(m-f)/E,this.w=Math.acos((h+g+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N_ extends Ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _s(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends N_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class oh extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rM extends Ci{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new oh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class mp extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sM extends Ci{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new mp(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Un{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,l,c){let u=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3];const m=s[l+0],g=s[l+1],y=s[l+2],S=s[l+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=g,e[t+2]=y,e[t+3]=S;return}if(p!==S||u!==m||h!==g||f!==y){let x=1-c;const _=u*m+h*g+f*y+p*S,E=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const U=Math.sqrt(w),C=Math.atan2(U,_*E);x=Math.sin(x*C)/U,c=Math.sin(c*C)/U}const A=c*E;if(u=u*x+m*A,h=h*x+g*A,f=f*x+y*A,p=p*x+S*A,x===1-c){const U=1/Math.sqrt(u*u+h*h+f*f+p*p);u*=U,h*=U,f*=U,p*=U}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,l){const c=n[i],u=n[i+1],h=n[i+2],f=n[i+3],p=s[l],m=s[l+1],g=s[l+2],y=s[l+3];return e[t]=c*y+f*p+u*g-h*m,e[t+1]=u*y+f*m+h*p-c*g,e[t+2]=h*y+f*g+c*m-u*p,e[t+3]=f*y-c*p-u*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,l=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),m=u(n/2),g=u(i/2),y=u(s/2);switch(l){case"XYZ":this._x=m*f*p+h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p-m*g*y;break;case"YXZ":this._x=m*f*p+h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p+m*g*y;break;case"ZXY":this._x=m*f*p-h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p-m*g*y;break;case"ZYX":this._x=m*f*p-h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p+m*g*y;break;case"YZX":this._x=m*f*p+h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p-m*g*y;break;case"XZY":this._x=m*f*p-h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],l=t[1],c=t[5],u=t[9],h=t[2],f=t[6],p=t[10],m=n+c+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-u)*g,this._y=(s-h)*g,this._z=(l-i)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(f-u)/g,this._x=.25*g,this._y=(i+l)/g,this._z=(s+h)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(s-h)/g,this._x=(i+l)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(l-i)/g,this._x=(s+h)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,l=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+l*c+i*h-s*u,this._y=i*f+l*u+s*c-n*h,this._z=s*f+l*h+n*u-i*c,this._w=l*f-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,l=this._w;let c=l*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=i,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const g=1-t;return this._w=g*l+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),f=Math.atan2(h,c),p=Math.sin((1-t)*f)/h,m=Math.sin(t*f)/h;return this._w=l*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,l=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*l,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*l,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,l=e.y,c=e.z,u=e.w,h=2*(l*i-c*n),f=2*(c*t-s*i),p=2*(s*n-l*t);return this.x=t+u*h+l*p-c*f,this.y=n+u*f+c*h-s*p,this.z=i+u*p+s*f-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,l=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*l-n*u,this.z=n*c-i*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bf.copy(this).projectOnVector(e),this.sub(Bf)}reflect(e){return this.sub(Bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bf=new D,Dg=new Un;class _n{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=s.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Mi):Mi.fromBufferAttribute(s,l),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pc.copy(n.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const i=e.children;for(let s=0,l=i.length;s<l;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),mc.subVectors(this.max,ha),$s.subVectors(e.a,ha),eo.subVectors(e.b,ha),to.subVectors(e.c,ha),Rr.subVectors(eo,$s),Pr.subVectors(to,eo),$r.subVectors($s,to);let t=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-$r.z,$r.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,$r.z,0,-$r.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-$r.y,$r.x,0];return!kf(t,$s,eo,to,mc)||(t=[1,0,0,0,1,0,0,0,1],!kf(t,$s,eo,to,mc))?!1:(gc.crossVectors(Rr,Pr),t=[gc.x,gc.y,gc.z],kf(t,$s,eo,to,mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nr=[new D,new D,new D,new D,new D,new D,new D,new D],Mi=new D,pc=new _n,$s=new D,eo=new D,to=new D,Rr=new D,Pr=new D,$r=new D,ha=new D,mc=new D,gc=new D,es=new D;function kf(r,e,t,n,i){for(let s=0,l=r.length-3;s<=l;s+=3){es.fromArray(r,s);const c=i.x*Math.abs(es.x)+i.y*Math.abs(es.y)+i.z*Math.abs(es.z),u=e.dot(es),h=t.dot(es),f=n.dot(es);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const oM=new _n,fa=new D,Hf=new D;class yn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,l=e.length;s<l;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const t=fa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Hf)),this.expandByPoint(fa.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ir=new D,Vf=new D,vc=new D,Ir=new D,Gf=new D,_c=new D,Wf=new D;class Ps{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Vf.copy(e).add(t).multiplyScalar(.5),vc.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(Vf);const s=e.distanceTo(t)*.5,l=-this.direction.dot(vc),c=Ir.dot(this.direction),u=-Ir.dot(vc),h=Ir.lengthSq(),f=Math.abs(1-l*l);let p,m,g,y;if(f>0)if(p=l*u-c,m=l*c-u,y=s*f,p>=0)if(m>=-y)if(m<=y){const S=1/f;p*=S,m*=S,g=p*(p+l*m+2*c)+m*(l*p+m+2*u)+h}else m=s,p=Math.max(0,-(l*m+c)),g=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(l*m+c)),g=-p*p+m*(m+2*u)+h;else m<=-y?(p=Math.max(0,-(-l*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h):m<=y?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(p=Math.max(0,-(l*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h);else m=l>0?-s:s,p=Math.max(0,-(l*m+c)),g=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Vf).addScaledVector(vc,m),g}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const n=ir.dot(this.direction),i=ir.dot(ir)-n*n,s=e.radius*e.radius;if(i>s)return null;const l=Math.sqrt(s-i),c=n-l,u=n+l;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,l,c,u;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),f>=0?(s=(e.min.y-m.y)*f,l=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,l=(e.min.y-m.y)*f),n>l||s>i||((s>n||isNaN(n))&&(n=s),(l<i||isNaN(i))&&(i=l),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,n,i,s){Gf.subVectors(t,e),_c.subVectors(n,e),Wf.crossVectors(Gf,_c);let l=this.direction.dot(Wf),c;if(l>0){if(i)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Ir.subVectors(this.origin,e);const u=c*this.direction.dot(_c.crossVectors(Ir,_c));if(u<0)return null;const h=c*this.direction.dot(Gf.cross(Ir));if(h<0||u+h>l)return null;const f=-c*Ir.dot(Wf);return f<0?null:this.at(f/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,i,s,l,c,u,h,f,p,m,g,y,S,x){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,l,c,u,h,f,p,m,g,y,S,x)}set(e,t,n,i,s,l,c,u,h,f,p,m,g,y,S,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=l,_[9]=c,_[13]=u,_[2]=h,_[6]=f,_[10]=p,_[14]=m,_[3]=g,_[7]=y,_[11]=S,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/no.setFromMatrixColumn(e,0).length(),s=1/no.setFromMatrixColumn(e,1).length(),l=1/no.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=l*f,g=l*p,y=c*f,S=c*p;t[0]=u*f,t[4]=-u*p,t[8]=h,t[1]=g+y*h,t[5]=m-S*h,t[9]=-c*u,t[2]=S-m*h,t[6]=y+g*h,t[10]=l*u}else if(e.order==="YXZ"){const m=u*f,g=u*p,y=h*f,S=h*p;t[0]=m+S*c,t[4]=y*c-g,t[8]=l*h,t[1]=l*p,t[5]=l*f,t[9]=-c,t[2]=g*c-y,t[6]=S+m*c,t[10]=l*u}else if(e.order==="ZXY"){const m=u*f,g=u*p,y=h*f,S=h*p;t[0]=m-S*c,t[4]=-l*p,t[8]=y+g*c,t[1]=g+y*c,t[5]=l*f,t[9]=S-m*c,t[2]=-l*h,t[6]=c,t[10]=l*u}else if(e.order==="ZYX"){const m=l*f,g=l*p,y=c*f,S=c*p;t[0]=u*f,t[4]=y*h-g,t[8]=m*h+S,t[1]=u*p,t[5]=S*h+m,t[9]=g*h-y,t[2]=-h,t[6]=c*u,t[10]=l*u}else if(e.order==="YZX"){const m=l*u,g=l*h,y=c*u,S=c*h;t[0]=u*f,t[4]=S-m*p,t[8]=y*p+g,t[1]=p,t[5]=l*f,t[9]=-c*f,t[2]=-h*f,t[6]=g*p+y,t[10]=m-S*p}else if(e.order==="XZY"){const m=l*u,g=l*h,y=c*u,S=c*h;t[0]=u*f,t[4]=-p,t[8]=h*f,t[1]=m*p+S,t[5]=l*f,t[9]=g*p-y,t[2]=y*p-g,t[6]=c*f,t[10]=S*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aM,e,lM)}lookAt(e,t,n){const i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Lr.crossVectors(n,ti),Lr.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Lr.crossVectors(n,ti)),Lr.normalize(),yc.crossVectors(ti,Lr),i[0]=Lr.x,i[4]=yc.x,i[8]=ti.x,i[1]=Lr.y,i[5]=yc.y,i[9]=ti.y,i[2]=Lr.z,i[6]=yc.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],c=n[4],u=n[8],h=n[12],f=n[1],p=n[5],m=n[9],g=n[13],y=n[2],S=n[6],x=n[10],_=n[14],E=n[3],w=n[7],A=n[11],U=n[15],C=i[0],L=i[4],z=i[8],R=i[12],b=i[1],O=i[5],q=i[9],Y=i[13],K=i[2],ae=i[6],Q=i[10],me=i[14],F=i[3],j=i[7],Z=i[11],re=i[15];return s[0]=l*C+c*b+u*K+h*F,s[4]=l*L+c*O+u*ae+h*j,s[8]=l*z+c*q+u*Q+h*Z,s[12]=l*R+c*Y+u*me+h*re,s[1]=f*C+p*b+m*K+g*F,s[5]=f*L+p*O+m*ae+g*j,s[9]=f*z+p*q+m*Q+g*Z,s[13]=f*R+p*Y+m*me+g*re,s[2]=y*C+S*b+x*K+_*F,s[6]=y*L+S*O+x*ae+_*j,s[10]=y*z+S*q+x*Q+_*Z,s[14]=y*R+S*Y+x*me+_*re,s[3]=E*C+w*b+A*K+U*F,s[7]=E*L+w*O+A*ae+U*j,s[11]=E*z+w*q+A*Q+U*Z,s[15]=E*R+w*Y+A*me+U*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],l=e[1],c=e[5],u=e[9],h=e[13],f=e[2],p=e[6],m=e[10],g=e[14],y=e[3],S=e[7],x=e[11],_=e[15];return y*(+s*u*p-i*h*p-s*c*m+n*h*m+i*c*g-n*u*g)+S*(+t*u*g-t*h*m+s*l*m-i*l*g+i*h*f-s*u*f)+x*(+t*h*p-t*c*g-s*l*p+n*l*g+s*c*f-n*h*f)+_*(-i*c*f-t*u*p+t*c*m+i*l*p-n*l*m+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=e[9],m=e[10],g=e[11],y=e[12],S=e[13],x=e[14],_=e[15],E=p*x*h-S*m*h+S*u*g-c*x*g-p*u*_+c*m*_,w=y*m*h-f*x*h-y*u*g+l*x*g+f*u*_-l*m*_,A=f*S*h-y*p*h+y*c*g-l*S*g-f*c*_+l*p*_,U=y*p*u-f*S*u-y*c*m+l*S*m+f*c*x-l*p*x,C=t*E+n*w+i*A+s*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=E*L,e[1]=(S*m*s-p*x*s-S*i*g+n*x*g+p*i*_-n*m*_)*L,e[2]=(c*x*s-S*u*s+S*i*h-n*x*h-c*i*_+n*u*_)*L,e[3]=(p*u*s-c*m*s-p*i*h+n*m*h+c*i*g-n*u*g)*L,e[4]=w*L,e[5]=(f*x*s-y*m*s+y*i*g-t*x*g-f*i*_+t*m*_)*L,e[6]=(y*u*s-l*x*s-y*i*h+t*x*h+l*i*_-t*u*_)*L,e[7]=(l*m*s-f*u*s+f*i*h-t*m*h-l*i*g+t*u*g)*L,e[8]=A*L,e[9]=(y*p*s-f*S*s-y*n*g+t*S*g+f*n*_-t*p*_)*L,e[10]=(l*S*s-y*c*s+y*n*h-t*S*h-l*n*_+t*c*_)*L,e[11]=(f*c*s-l*p*s-f*n*h+t*p*h+l*n*g-t*c*g)*L,e[12]=U*L,e[13]=(f*S*i-y*p*i+y*n*m-t*S*m-f*n*x+t*p*x)*L,e[14]=(y*c*i-l*S*i-y*n*u+t*S*u+l*n*x-t*c*x)*L,e[15]=(l*p*i-f*c*i+f*n*u-t*p*u-l*n*m+t*c*m)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,l=e.x,c=e.y,u=e.z,h=s*l,f=s*c;return this.set(h*l+n,h*c-i*u,h*u+i*c,0,h*c+i*u,f*c+n,f*u-i*l,0,h*u-i*c,f*u+i*l,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,l){return this.set(1,n,s,0,e,1,l,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,l=t._y,c=t._z,u=t._w,h=s+s,f=l+l,p=c+c,m=s*h,g=s*f,y=s*p,S=l*f,x=l*p,_=c*p,E=u*h,w=u*f,A=u*p,U=n.x,C=n.y,L=n.z;return i[0]=(1-(S+_))*U,i[1]=(g+A)*U,i[2]=(y-w)*U,i[3]=0,i[4]=(g-A)*C,i[5]=(1-(m+_))*C,i[6]=(x+E)*C,i[7]=0,i[8]=(y+w)*L,i[9]=(x-E)*L,i[10]=(1-(m+S))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=no.set(i[0],i[1],i[2]).length();const l=no.set(i[4],i[5],i[6]).length(),c=no.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],wi.copy(this);const h=1/s,f=1/l,p=1/c;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=f,wi.elements[5]*=f,wi.elements[6]*=f,wi.elements[8]*=p,wi.elements[9]*=p,wi.elements[10]*=p,t.setFromRotationMatrix(wi),n.x=s,n.y=l,n.z=c,this}makePerspective(e,t,n,i,s,l,c=Wi){const u=this.elements,h=2*s/(t-e),f=2*s/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i);let g,y;if(c===Wi)g=-(l+s)/(l-s),y=-2*l*s/(l-s);else if(c===ja)g=-l/(l-s),y=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,l,c=Wi){const u=this.elements,h=1/(t-e),f=1/(n-i),p=1/(l-s),m=(t+e)*h,g=(n+i)*f;let y,S;if(c===Wi)y=(l+s)*p,S=-2*p;else if(c===ja)y=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=S,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const no=new D,wi=new st,aM=new D(0,0,0),lM=new D(1,1,1),Lr=new D,yc=new D,ti=new D,Ug=new st,Ng=new Un;class oi{constructor(e=0,t=0,n=0,i=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],l=i[4],c=i[8],u=i[1],h=i[5],f=i[9],p=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ug,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ng.setFromEuler(this),this.setFromQuaternion(Ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Es{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cM=0;const Og=new D,io=new Un,rr=new st,xc=new D,da=new D,uM=new D,hM=new Un,Fg=new D(1,0,0),zg=new D(0,1,0),Bg=new D(0,0,1),kg={type:"added"},fM={type:"removed"},ro={type:"childadded",child:null},Xf={type:"childremoved",child:null};class bt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new D,t=new oi,n=new Un,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new gt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(Fg,e)}rotateY(e){return this.rotateOnAxis(zg,e)}rotateZ(e){return this.rotateOnAxis(Bg,e)}translateOnAxis(e,t){return Og.copy(e).applyQuaternion(this.quaternion),this.position.add(Og.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fg,e)}translateY(e){return this.translateOnAxis(zg,e)}translateZ(e){return this.translateOnAxis(Bg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xc.copy(e):xc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(da,xc,this.up):rr.lookAt(xc,da,this.up),this.quaternion.setFromRotationMatrix(rr),i&&(rr.extractRotation(i.matrixWorld),io.setFromRotationMatrix(rr),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kg),ro.child=e,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fM),Xf.child=e,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kg),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,uM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,hM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=l(e.geometries),u=l(e.materials),h=l(e.textures),f=l(e.images),p=l(e.shapes),m=l(e.skeletons),g=l(e.animations),y=l(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=i,n;function l(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new D(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new D,sr=new D,Yf=new D,or=new D,so=new D,oo=new D,Hg=new D,qf=new D,Zf=new D,jf=new D;class ii{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ei.subVectors(e,t),i.cross(Ei);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ei.subVectors(i,t),sr.subVectors(n,t),Yf.subVectors(e,t);const l=Ei.dot(Ei),c=Ei.dot(sr),u=Ei.dot(Yf),h=sr.dot(sr),f=sr.dot(Yf),p=l*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(h*u-c*f)*m,y=(l*f-c*u)*m;return s.set(1-g-y,y,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,n,i,s,l,c,u){return this.getBarycoord(e,t,n,i,or)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,or.x),u.addScaledVector(l,or.y),u.addScaledVector(c,or.z),u)}static isFrontFacing(e,t,n,i){return Ei.subVectors(n,t),sr.subVectors(e,t),Ei.cross(sr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ei.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ii.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let l,c;so.subVectors(i,n),oo.subVectors(s,n),qf.subVectors(e,n);const u=so.dot(qf),h=oo.dot(qf);if(u<=0&&h<=0)return t.copy(n);Zf.subVectors(e,i);const f=so.dot(Zf),p=oo.dot(Zf);if(f>=0&&p<=f)return t.copy(i);const m=u*p-f*h;if(m<=0&&u>=0&&f<=0)return l=u/(u-f),t.copy(n).addScaledVector(so,l);jf.subVectors(e,s);const g=so.dot(jf),y=oo.dot(jf);if(y>=0&&g<=y)return t.copy(s);const S=g*h-u*y;if(S<=0&&h>=0&&y<=0)return c=h/(h-y),t.copy(n).addScaledVector(oo,c);const x=f*y-g*p;if(x<=0&&p-f>=0&&g-y>=0)return Hg.subVectors(s,i),c=(p-f)/(p-f+(g-y)),t.copy(i).addScaledVector(Hg,c);const _=1/(x+S+m);return l=S*_,c=m*_,t.copy(n).addScaledVector(so,l).addScaledVector(oo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const O_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Jf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Lt.workingColorSpace){if(e=pp(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,l=2*n-s;this.r=Jf(l,s,e+1/3),this.g=Jf(l,s,e),this.b=Jf(l,s,e-1/3)}return Lt.toWorkingColorSpace(this,i),this}setStyle(e,t=gi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const l=i[1],c=i[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gi){const n=O_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}copyLinearToSRGB(e){return this.r=Ff(e.r),this.g=Ff(e.g),this.b=Ff(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Lt.fromWorkingColorSpace(In.copy(this),e),Math.round(Jt(In.r*255,0,255))*65536+Math.round(Jt(In.g*255,0,255))*256+Math.round(Jt(In.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(In.copy(this),t);const n=In.r,i=In.g,s=In.b,l=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const f=(c+l)/2;if(c===l)u=0,h=0;else{const p=l-c;switch(h=f<=.5?p/(l+c):p/(2-l-c),l){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=gi){Lt.fromWorkingColorSpace(In.copy(this),e);const t=In.r,n=In.g,i=In.b;return e!==gi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(Sc);const n=Ua(Dr.h,Sc.h,t),i=Ua(Dr.s,Sc.s,t),s=Ua(Dr.l,Sc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Be;Be.NAMES=O_;let dM=0;class Tn extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Ss,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mu&&(n.blendSrc=this.blendSrc),this.blendDst!==gu&&(n.blendDst=this.blendDst),this.blendEquation!==Fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}if(t){const s=i(e.textures),l=i(e.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hr extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hr=pM();function pM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),l=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,f=0;for(;!(h&8388608);)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[u]=h|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)l[u]=u<<23;l[31]=1199570944,l[32]=2147483648;for(let u=33;u<63;++u)l[u]=2147483648+(u-32<<23);l[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:l,offsetTable:c}}function qn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Jt(r,-65504,65504),hr.floatView[0]=r;const e=hr.uint32View[0],t=e>>23&511;return hr.baseTable[t]+((e&8388607)>>hr.shiftTable[t])}function Ta(r){const e=r>>10;return hr.uint32View[0]=hr.mantissaTable[hr.offsetTable[e]+(r&1023)]+hr.exponentTable[e],hr.floatView[0]}const mM={toHalfFloat:qn,fromHalfFloat:Ta},sn=new D,Mc=new le;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Po("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mc.fromBufferAttribute(this,t),Mc.applyMatrix3(e),this.setXY(t,Mc.x,Mc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}}class gM extends Ut{constructor(e,t,n){super(new Int8Array(e),t,n)}}class vM extends Ut{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class _M extends Ut{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class yM extends Ut{constructor(e,t,n){super(new Int16Array(e),t,n)}}class gp extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xM extends Ut{constructor(e,t,n){super(new Int32Array(e),t,n)}}class vp extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class SM extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Ta(this.array[e*this.itemSize]);return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=qn(t),this}getY(e){let t=Ta(this.array[e*this.itemSize+1]);return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=qn(t),this}getZ(e){let t=Ta(this.array[e*this.itemSize+2]);return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=qn(t),this}getW(e){let t=Ta(this.array[e*this.itemSize+3]);return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=qn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=qn(t),this.array[e+1]=qn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=qn(t),this.array[e+1]=qn(n),this.array[e+2]=qn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=qn(t),this.array[e+1]=qn(n),this.array[e+2]=qn(i),this.array[e+3]=qn(s),this}}class qe extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let MM=0;const mi=new st,Kf=new bt,ao=new D,ni=new _n,pa=new _n,gn=new D;class yt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L_(e)?vp:gp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new gt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,n){return mi.makeTranslation(e,t,n),this.applyMatrix4(mi),this}scale(e,t,n){return mi.makeScale(e,t,n),this.applyMatrix4(mi),this}lookAt(e){return Kf.lookAt(e),Kf.updateMatrix(),this.applyMatrix4(Kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const c=t[s];pa.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(ni.min,pa.min),ni.expandByPoint(gn),gn.addVectors(ni.max,pa.max),ni.expandByPoint(gn)):(ni.expandByPoint(pa.min),ni.expandByPoint(pa.max))}ni.getCenter(n);let i=0;for(let s=0,l=e.count;s<l;s++)gn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gn));if(t)for(let s=0,l=t.length;s<l;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)gn.fromBufferAttribute(c,h),u&&(ao.fromBufferAttribute(e,h),gn.add(ao)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],u=[];for(let z=0;z<n.count;z++)c[z]=new D,u[z]=new D;const h=new D,f=new D,p=new D,m=new le,g=new le,y=new le,S=new D,x=new D;function _(z,R,b){h.fromBufferAttribute(n,z),f.fromBufferAttribute(n,R),p.fromBufferAttribute(n,b),m.fromBufferAttribute(s,z),g.fromBufferAttribute(s,R),y.fromBufferAttribute(s,b),f.sub(h),p.sub(h),g.sub(m),y.sub(m);const O=1/(g.x*y.y-y.x*g.y);isFinite(O)&&(S.copy(f).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(O),x.copy(p).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(O),c[z].add(S),c[R].add(S),c[b].add(S),u[z].add(x),u[R].add(x),u[b].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let z=0,R=E.length;z<R;++z){const b=E[z],O=b.start,q=b.count;for(let Y=O,K=O+q;Y<K;Y+=3)_(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const w=new D,A=new D,U=new D,C=new D;function L(z){U.fromBufferAttribute(i,z),C.copy(U);const R=c[z];w.copy(R),w.sub(U.multiplyScalar(U.dot(R))).normalize(),A.crossVectors(C,R);const O=A.dot(u[z])<0?-1:1;l.setXYZW(z,w.x,w.y,w.z,O)}for(let z=0,R=E.length;z<R;++z){const b=E[z],O=b.start,q=b.count;for(let Y=O,K=O+q;Y<K;Y+=3)L(e.getX(Y+0)),L(e.getX(Y+1)),L(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new D,s=new D,l=new D,c=new D,u=new D,h=new D,f=new D,p=new D;if(e)for(let m=0,g=e.count;m<g;m+=3){const y=e.getX(m+0),S=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,y),s.fromBufferAttribute(t,S),l.fromBufferAttribute(t,x),f.subVectors(l,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),c.add(f),u.add(f),h.add(f),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),f.subVectors(l,s),p.subVectors(i,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,p=c.normalized,m=new h.constructor(u.length*f);let g=0,y=0;for(let S=0,x=u.length;S<x;S++){c.isInterleavedBufferAttribute?g=u[S]*c.data.stride+c.offset:g=u[S]*f;for(let _=0;_<f;_++)m[y++]=h[g++]}return new Ut(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const m=h[f],g=e(m,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,u=l.length;c<u;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];f.push(g.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,f=l.length;h<f;h++){const p=l[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vg=new st,ts=new Ps,wc=new yn,Gg=new D,lo=new D,co=new D,uo=new D,Qf=new D,Ec=new D,Tc=new le,Ac=new le,bc=new le,Wg=new D,Xg=new D,Yg=new D,Cc=new D,Rc=new D;class en extends bt{constructor(e=new yt,t=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){Ec.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],p=s[u];f!==0&&(Qf.fromBufferAttribute(p,e),l?Ec.addScaledVector(Qf,f):Ec.addScaledVector(Qf.sub(t),f))}t.add(Ec)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(s),ts.copy(e.ray).recast(e.near),!(wc.containsPoint(ts.origin)===!1&&(ts.intersectSphere(wc,Gg)===null||ts.origin.distanceToSquared(Gg)>(e.far-e.near)**2))&&(Vg.copy(s).invert(),ts.copy(e.ray).applyMatrix4(Vg),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let i;const s=this.geometry,l=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(l))for(let y=0,S=m.length;y<S;y++){const x=m[y],_=l[x.materialIndex],E=Math.max(x.start,g.start),w=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let A=E,U=w;A<U;A+=3){const C=c.getX(A),L=c.getX(A+1),z=c.getX(A+2);i=Pc(this,_,e,n,h,f,p,C,L,z),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let x=y,_=S;x<_;x+=3){const E=c.getX(x),w=c.getX(x+1),A=c.getX(x+2);i=Pc(this,l,e,n,h,f,p,E,w,A),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(l))for(let y=0,S=m.length;y<S;y++){const x=m[y],_=l[x.materialIndex],E=Math.max(x.start,g.start),w=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let A=E,U=w;A<U;A+=3){const C=A,L=A+1,z=A+2;i=Pc(this,_,e,n,h,f,p,C,L,z),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),S=Math.min(u.count,g.start+g.count);for(let x=y,_=S;x<_;x+=3){const E=x,w=x+1,A=x+2;i=Pc(this,l,e,n,h,f,p,E,w,A),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function wM(r,e,t,n,i,s,l,c){let u;if(e.side===Hn?u=n.intersectTriangle(l,s,i,!0,c):u=n.intersectTriangle(i,s,l,e.side===mr,c),u===null)return null;Rc.copy(c),Rc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Rc);return h<t.near||h>t.far?null:{distance:h,point:Rc.clone(),object:r}}function Pc(r,e,t,n,i,s,l,c,u,h){r.getVertexPosition(c,lo),r.getVertexPosition(u,co),r.getVertexPosition(h,uo);const f=wM(r,e,t,n,lo,co,uo,Cc);if(f){i&&(Tc.fromBufferAttribute(i,c),Ac.fromBufferAttribute(i,u),bc.fromBufferAttribute(i,h),f.uv=ii.getInterpolation(Cc,lo,co,uo,Tc,Ac,bc,new le)),s&&(Tc.fromBufferAttribute(s,c),Ac.fromBufferAttribute(s,u),bc.fromBufferAttribute(s,h),f.uv1=ii.getInterpolation(Cc,lo,co,uo,Tc,Ac,bc,new le)),l&&(Wg.fromBufferAttribute(l,c),Xg.fromBufferAttribute(l,u),Yg.fromBufferAttribute(l,h),f.normal=ii.getInterpolation(Cc,lo,co,uo,Wg,Xg,Yg,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const p={a:c,b:u,c:h,normal:new D,materialIndex:0};ii.getNormal(lo,co,uo,p.normal),f.face=p}return f}class Is extends yt{constructor(e=1,t=1,n=1,i=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:l};const c=this;i=Math.floor(i),s=Math.floor(s),l=Math.floor(l);const u=[],h=[],f=[],p=[];let m=0,g=0;y("z","y","x",-1,-1,n,t,e,l,s,0),y("z","y","x",1,-1,n,t,-e,l,s,1),y("x","z","y",1,1,e,n,t,i,l,2),y("x","z","y",1,-1,e,n,-t,i,l,3),y("x","y","z",1,-1,e,t,n,i,s,4),y("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(f,3)),this.setAttribute("uv",new qe(p,2));function y(S,x,_,E,w,A,U,C,L,z,R){const b=A/L,O=U/z,q=A/2,Y=U/2,K=C/2,ae=L+1,Q=z+1;let me=0,F=0;const j=new D;for(let Z=0;Z<Q;Z++){const re=Z*O-Y;for(let Se=0;Se<ae;Se++){const He=Se*b-q;j[S]=He*E,j[x]=re*w,j[_]=K,h.push(j.x,j.y,j.z),j[S]=0,j[x]=0,j[_]=C>0?1:-1,f.push(j.x,j.y,j.z),p.push(Se/L),p.push(1-Z/z),me+=1}}for(let Z=0;Z<z;Z++)for(let re=0;re<L;re++){const Se=m+re+ae*Z,He=m+re+ae*(Z+1),ie=m+(re+1)+ae*(Z+1),ve=m+(re+1)+ae*Z;u.push(Se,He,ve),u.push(He,ie,ve),F+=6}c.addGroup(g,F,R),g+=F,m+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zn(r){const e={};for(let t=0;t<r.length;t++){const n=Uo(r[t]);for(const i in n)e[i]=n[i]}return e}function EM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function F_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const Wu={clone:Uo,merge:zn};var TM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TM,this.fragmentShader=AM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=EM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?t.uniforms[i]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[i]={type:"m4",value:l.toArray()}:t.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cl extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new D,qg=new le,Zg=new le;class Kt extends cl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,qg,Zg),t.subVectors(Zg,qg)}setViewOffset(e,t,n,i,s,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,h=l.fullHeight;s+=l.offsetX*i/u,t-=l.offsetY*n/h,i*=l.width/u,n*=l.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ho=-90,fo=1;class z_ extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(ho,fo,e,t);i.layers=this.layers,this.add(i);const s=new Kt(ho,fo,e,t);s.layers=this.layers,this.add(s);const l=new Kt(ho,fo,e,t);l.layers=this.layers,this.add(l);const c=new Kt(ho,fo,e,t);c.layers=this.layers,this.add(c);const u=new Kt(ho,fo,e,t);u.layers=this.layers,this.add(u);const h=new Kt(ho,fo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,l,c,u]=t;for(const h of t)this.remove(h);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,l,c,u,h,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,l),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(p,m,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class ul extends Yt{constructor(e,t,n,i,s,l,c,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,n,i,s,l,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class B_ extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ul(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Is(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Uo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:pr});s.uniforms.tEquirect.value=t;const l=new en(i,s),c=t.minFilter;return t.minFilter===Gi&&(t.minFilter=on),new z_(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,i);e.setRenderTarget(s)}}const $f=new D,bM=new D,CM=new gt;class cr{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$f.subVectors(n,t).cross(bM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($f),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||CM.getNormalMatrix(e),i=this.coplanarPoint($f).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new yn,Ic=new D;class hl{constructor(e=new cr,t=new cr,n=new cr,i=new cr,s=new cr,l=new cr){this.planes=[e,t,n,i,s,l]}set(e,t,n,i,s,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi){const n=this.planes,i=e.elements,s=i[0],l=i[1],c=i[2],u=i[3],h=i[4],f=i[5],p=i[6],m=i[7],g=i[8],y=i[9],S=i[10],x=i[11],_=i[12],E=i[13],w=i[14],A=i[15];if(n[0].setComponents(u-s,m-h,x-g,A-_).normalize(),n[1].setComponents(u+s,m+h,x+g,A+_).normalize(),n[2].setComponents(u+l,m+f,x+y,A+E).normalize(),n[3].setComponents(u-l,m-f,x-y,A-E).normalize(),n[4].setComponents(u-c,m-p,x-S,A-w).normalize(),t===Wi)n[5].setComponents(u+c,m+p,x+S,A+w).normalize();else if(t===ja)n[5].setComponents(c,p,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ic.x=i.normal.x>0?e.max.x:e.min.x,Ic.y=i.normal.y>0?e.max.y:e.min.y,Ic.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function k_(){let r=null,e=!1,t=null,n=null;function i(s,l){t(s,l),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function RM(r){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,p=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const f=u.array,p=u._updateRange,m=u.updateRanges;if(r.bindBuffer(h,c),p.count===-1&&m.length===0&&r.bufferSubData(h,0,f),m.length!==0){for(let g=0,y=m.length;g<y;g++){const S=m[g];r.bufferSubData(h,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}u.clearUpdateRanges()}p.count!==-1&&(r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count),p.count=-1),u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function l(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:l}}class ko extends yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,l=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,f=u+1,p=e/c,m=t/u,g=[],y=[],S=[],x=[];for(let _=0;_<f;_++){const E=_*m-l;for(let w=0;w<h;w++){const A=w*p-s;y.push(A,-E,0),S.push(0,0,1),x.push(w/c),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let E=0;E<c;E++){const w=E+h*_,A=E+h*(_+1),U=E+1+h*(_+1),C=E+1+h*_;g.push(w,A,C),g.push(A,U,C)}this.setIndex(g),this.setAttribute("position",new qe(y,3)),this.setAttribute("normal",new qe(S,3)),this.setAttribute("uv",new qe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var PM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,BM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,GM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,e1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o1="gl_FragColor = linearToOutputTexel( gl_FragColor );",a1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,M1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,w1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,I1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,B1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_w=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ww=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ew=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ow=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ww=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:PM,alphahash_pars_fragment:IM,alphamap_fragment:LM,alphamap_pars_fragment:DM,alphatest_fragment:UM,alphatest_pars_fragment:NM,aomap_fragment:OM,aomap_pars_fragment:FM,batching_pars_vertex:zM,batching_vertex:BM,begin_vertex:kM,beginnormal_vertex:HM,bsdfs:VM,iridescence_fragment:GM,bumpmap_pars_fragment:WM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:YM,clipping_planes_pars_vertex:qM,clipping_planes_vertex:ZM,color_fragment:jM,color_pars_fragment:JM,color_pars_vertex:KM,color_vertex:QM,common:$M,cube_uv_reflection_fragment:e1,defaultnormal_vertex:t1,displacementmap_pars_vertex:n1,displacementmap_vertex:i1,emissivemap_fragment:r1,emissivemap_pars_fragment:s1,colorspace_fragment:o1,colorspace_pars_fragment:a1,envmap_fragment:l1,envmap_common_pars_fragment:c1,envmap_pars_fragment:u1,envmap_pars_vertex:h1,envmap_physical_pars_fragment:M1,envmap_vertex:f1,fog_vertex:d1,fog_pars_vertex:p1,fog_fragment:m1,fog_pars_fragment:g1,gradientmap_pars_fragment:v1,lightmap_pars_fragment:_1,lights_lambert_fragment:y1,lights_lambert_pars_fragment:x1,lights_pars_begin:S1,lights_toon_fragment:w1,lights_toon_pars_fragment:E1,lights_phong_fragment:T1,lights_phong_pars_fragment:A1,lights_physical_fragment:b1,lights_physical_pars_fragment:C1,lights_fragment_begin:R1,lights_fragment_maps:P1,lights_fragment_end:I1,logdepthbuf_fragment:L1,logdepthbuf_pars_fragment:D1,logdepthbuf_pars_vertex:U1,logdepthbuf_vertex:N1,map_fragment:O1,map_pars_fragment:F1,map_particle_fragment:z1,map_particle_pars_fragment:B1,metalnessmap_fragment:k1,metalnessmap_pars_fragment:H1,morphinstance_vertex:V1,morphcolor_vertex:G1,morphnormal_vertex:W1,morphtarget_pars_vertex:X1,morphtarget_vertex:Y1,normal_fragment_begin:q1,normal_fragment_maps:Z1,normal_pars_fragment:j1,normal_pars_vertex:J1,normal_vertex:K1,normalmap_pars_fragment:Q1,clearcoat_normal_fragment_begin:$1,clearcoat_normal_fragment_maps:ew,clearcoat_pars_fragment:tw,iridescence_pars_fragment:nw,opaque_fragment:iw,packing:rw,premultiplied_alpha_fragment:sw,project_vertex:ow,dithering_fragment:aw,dithering_pars_fragment:lw,roughnessmap_fragment:cw,roughnessmap_pars_fragment:uw,shadowmap_pars_fragment:hw,shadowmap_pars_vertex:fw,shadowmap_vertex:dw,shadowmask_pars_fragment:pw,skinbase_vertex:mw,skinning_pars_vertex:gw,skinning_vertex:vw,skinnormal_vertex:_w,specularmap_fragment:yw,specularmap_pars_fragment:xw,tonemapping_fragment:Sw,tonemapping_pars_fragment:Mw,transmission_fragment:ww,transmission_pars_fragment:Ew,uv_pars_fragment:Tw,uv_pars_vertex:Aw,uv_vertex:bw,worldpos_vertex:Cw,background_vert:Rw,background_frag:Pw,backgroundCube_vert:Iw,backgroundCube_frag:Lw,cube_vert:Dw,cube_frag:Uw,depth_vert:Nw,depth_frag:Ow,distanceRGBA_vert:Fw,distanceRGBA_frag:zw,equirect_vert:Bw,equirect_frag:kw,linedashed_vert:Hw,linedashed_frag:Vw,meshbasic_vert:Gw,meshbasic_frag:Ww,meshlambert_vert:Xw,meshlambert_frag:Yw,meshmatcap_vert:qw,meshmatcap_frag:Zw,meshnormal_vert:jw,meshnormal_frag:Jw,meshphong_vert:Kw,meshphong_frag:Qw,meshphysical_vert:$w,meshphysical_frag:eE,meshtoon_vert:tE,meshtoon_frag:nE,points_vert:iE,points_frag:rE,shadow_vert:sE,shadow_frag:oE,sprite_vert:aE,sprite_frag:lE},Ie={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ai={basic:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Be(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:zn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:zn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Be(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:zn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:zn([Ie.points,Ie.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:zn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:zn([Ie.common,Ie.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:zn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:zn([Ie.sprite,Ie.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:zn([Ie.common,Ie.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:zn([Ie.lights,Ie.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ai.physical={uniforms:zn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Lc={r:0,b:0,g:0},is=new oi,cE=new st;function uE(r,e,t,n,i,s,l){const c=new Be(0);let u=s===!0?0:1,h,f,p=null,m=0,g=null;function y(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function S(E){let w=!1;const A=y(E);A===null?_(c,u):A&&A.isColor&&(_(A,1),w=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(E,w){const A=y(w);A&&(A.isCubeTexture||A.mapping===zo)?(f===void 0&&(f=new en(new Is(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Uo(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),is.copy(w.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(cE.makeRotationFromEuler(is)),f.material.toneMapped=Lt.getTransfer(A.colorSpace)!==Bt,(p!==A||m!==A.version||g!==r.toneMapping)&&(f.material.needsUpdate=!0,p=A,m=A.version,g=r.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new en(new ko(2,2),new _i({name:"BackgroundMaterial",uniforms:Uo(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(A.colorSpace)!==Bt,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||m!==A.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,p=A,m=A.version,g=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function _(E,w){E.getRGB(Lc,F_(r)),n.buffers.color.setClear(Lc.r,Lc.g,Lc.b,w,l)}return{getClearColor:function(){return c},setClearColor:function(E,w=1){c.set(E),u=w,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(E){u=E,_(c,u)},render:S,addToRenderList:x}}function hE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,l=!1;function c(b,O,q,Y,K){let ae=!1;const Q=p(Y,q,O);s!==Q&&(s=Q,h(s.object)),ae=g(b,Y,q,K),ae&&y(b,Y,q,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(ae||l)&&(l=!1,A(b,O,q,Y),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function u(){return r.createVertexArray()}function h(b){return r.bindVertexArray(b)}function f(b){return r.deleteVertexArray(b)}function p(b,O,q){const Y=q.wireframe===!0;let K=n[b.id];K===void 0&&(K={},n[b.id]=K);let ae=K[O.id];ae===void 0&&(ae={},K[O.id]=ae);let Q=ae[Y];return Q===void 0&&(Q=m(u()),ae[Y]=Q),Q}function m(b){const O=[],q=[],Y=[];for(let K=0;K<t;K++)O[K]=0,q[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:Y,object:b,attributes:{},index:null}}function g(b,O,q,Y){const K=s.attributes,ae=O.attributes;let Q=0;const me=q.getAttributes();for(const F in me)if(me[F].location>=0){const Z=K[F];let re=ae[F];if(re===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;Q++}return s.attributesNum!==Q||s.index!==Y}function y(b,O,q,Y){const K={},ae=O.attributes;let Q=0;const me=q.getAttributes();for(const F in me)if(me[F].location>=0){let Z=ae[F];Z===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),K[F]=re,Q++}s.attributes=K,s.attributesNum=Q,s.index=Y}function S(){const b=s.newAttributes;for(let O=0,q=b.length;O<q;O++)b[O]=0}function x(b){_(b,0)}function _(b,O){const q=s.newAttributes,Y=s.enabledAttributes,K=s.attributeDivisors;q[b]=1,Y[b]===0&&(r.enableVertexAttribArray(b),Y[b]=1),K[b]!==O&&(r.vertexAttribDivisor(b,O),K[b]=O)}function E(){const b=s.newAttributes,O=s.enabledAttributes;for(let q=0,Y=O.length;q<Y;q++)O[q]!==b[q]&&(r.disableVertexAttribArray(q),O[q]=0)}function w(b,O,q,Y,K,ae,Q){Q===!0?r.vertexAttribIPointer(b,O,q,K,ae):r.vertexAttribPointer(b,O,q,Y,K,ae)}function A(b,O,q,Y){S();const K=Y.attributes,ae=q.getAttributes(),Q=O.defaultAttributeValues;for(const me in ae){const F=ae[me];if(F.location>=0){let j=K[me];if(j===void 0&&(me==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),me==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),j!==void 0){const Z=j.normalized,re=j.itemSize,Se=e.get(j);if(Se===void 0)continue;const He=Se.buffer,ie=Se.type,ve=Se.bytesPerElement,Ae=ie===r.INT||ie===r.UNSIGNED_INT||j.gpuType===Qu;if(j.isInterleavedBufferAttribute){const we=j.data,et=we.stride,ot=j.offset;if(we.isInstancedInterleavedBuffer){for(let tt=0;tt<F.locationSize;tt++)_(F.location+tt,we.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let tt=0;tt<F.locationSize;tt++)x(F.location+tt);r.bindBuffer(r.ARRAY_BUFFER,He);for(let tt=0;tt<F.locationSize;tt++)w(F.location+tt,re/F.locationSize,ie,Z,et*ve,(ot+re/F.locationSize*tt)*ve,Ae)}else{if(j.isInstancedBufferAttribute){for(let we=0;we<F.locationSize;we++)_(F.location+we,j.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let we=0;we<F.locationSize;we++)x(F.location+we);r.bindBuffer(r.ARRAY_BUFFER,He);for(let we=0;we<F.locationSize;we++)w(F.location+we,re/F.locationSize,ie,Z,re*ve,re/F.locationSize*we*ve,Ae)}}else if(Q!==void 0){const Z=Q[me];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(F.location,Z);break;case 3:r.vertexAttrib3fv(F.location,Z);break;case 4:r.vertexAttrib4fv(F.location,Z);break;default:r.vertexAttrib1fv(F.location,Z)}}}}E()}function U(){z();for(const b in n){const O=n[b];for(const q in O){const Y=O[q];for(const K in Y)f(Y[K].object),delete Y[K];delete O[q]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;const O=n[b.id];for(const q in O){const Y=O[q];for(const K in Y)f(Y[K].object),delete Y[K];delete O[q]}delete n[b.id]}function L(b){for(const O in n){const q=n[O];if(q[b.id]===void 0)continue;const Y=q[b.id];for(const K in Y)f(Y[K].object),delete Y[K];delete q[b.id]}}function z(){R(),l=!0,s!==i&&(s=i,h(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:z,resetDefaultState:R,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:x,disableUnusedAttributes:E}}function fE(r,e,t){let n;function i(h){n=h}function s(h,f){r.drawArrays(n,h,f),t.update(f,n,1)}function l(h,f,p){p!==0&&(r.drawArraysInstanced(n,h,f,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y];t.update(g,n,1)}function u(h,f,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<h.length;y++)l(h[y],f[y],m[y]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,f,0,m,0,p);let y=0;for(let S=0;S<p;S++)y+=f[S];for(let S=0;S<m.length;S++)t.update(y,n,m[S])}}this.setMode=i,this.render=s,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function dE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(C){return!(C!==Dn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(C){const L=C===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==bi&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Zn&&!L)}function u(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.logarithmicDepthBuffer===!0,m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,U=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:w,vertexTextures:A,maxSamples:U}}function pE(r){const e=this;let t=null,n=0,i=!1,s=!1;const l=new cr,c=new gt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||i;return i=m,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,g){const y=p.clippingPlanes,S=p.clipIntersection,x=p.clipShadows,_=r.get(p);if(!i||y===null||y.length===0||s&&!x)s?f(null):h();else{const E=s?0:n,w=E*4;let A=_.clippingState||null;u.value=A,A=f(y,m,w,g);for(let U=0;U!==w;++U)A[U]=t[U];_.clippingState=A,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,g,y){const S=p!==null?p.length:0;let x=null;if(S!==0){if(x=u.value,y!==!0||x===null){const _=g+S*4,E=m.matrixWorldInverse;c.getNormalMatrix(E),(x===null||x.length<_)&&(x=new Float32Array(_));for(let w=0,A=g;w!==S;++w,A+=4)l.copy(p[w]).applyMatrix4(E,c),l.normal.toArray(x,A),x[A+3]=l.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}function mE(r){let e=new WeakMap;function t(l,c){return c===Ba?l.mapping=gr:c===ka&&(l.mapping=zr),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===Ba||c===ka)if(e.has(l)){const u=e.get(l).texture;return t(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const h=new B_(u.height);return h.fromEquirectangularTexture(r,l),e.set(l,h),l.addEventListener("dispose",i),t(h.texture,l.mapping)}else return null}}return l}function i(l){const c=l.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class fr extends cl{constructor(e=-1,t=1,n=1,i=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,l=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,l=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,l,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ao=4,jg=[.125,.215,.35,.446,.526,.582],ms=20,ed=new fr,Jg=new Be;let td=null,nd=0,id=0,rd=!1;const ps=(1+Math.sqrt(5))/2,po=1/ps,Kg=[new D(-ps,po,0),new D(ps,po,0),new D(-po,0,ps),new D(po,0,ps),new D(0,ps,-po),new D(0,ps,po),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Bo,format:Dn,colorSpace:yr,depthBuffer:!1},i=Qg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qg(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gE(s)),this._blurMaterial=vE(s,e,t)}return i}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,ed)}_sceneToCubeUV(e,t,n,i){const c=new Kt(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(Jg),f.toneMapping=Xi,f.autoClear=!1;const g=new Hr({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),y=new en(new Is,g);let S=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,S=!0):(g.color.copy(Jg),S=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(c.up.set(0,u[_],0),c.lookAt(h[_],0,0)):E===1?(c.up.set(0,0,u[_]),c.lookAt(0,h[_],0)):(c.up.set(0,u[_],0),c.lookAt(0,0,h[_]));const w=this._cubeSize;Dc(i,E*w,_>2?w:0,w,w),f.setRenderTarget(i),S&&f.render(y,c),f.render(e,c)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gr||e.mapping===zr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const s=i?this._cubemapMaterial:this._equirectMaterial,l=new en(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Dc(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(l,ed)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const l=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Kg[(i-s-1)%Kg.length];this._blur(e,s-1,s,l,c)}t.autoClear=n}_blur(e,t,n,i,s){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,i,"latitudinal",s),this._halfBlur(l,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,l,c){const u=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new en(this._lodPlanes[i],h),m=h.uniforms,g=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ms-1),S=s/y,x=isFinite(s)?1+Math.floor(f*S):ms;x>ms&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ms}`);const _=[];let E=0;for(let L=0;L<ms;++L){const z=L/S,R=Math.exp(-z*z/2);_.push(R),L===0?E+=R:L<x&&(E+=2*R)}for(let L=0;L<_.length;L++)_[L]=_[L]/E;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=l==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:w}=this;m.dTheta.value=y,m.mipInt.value=w-n;const A=this._sizeLods[i],U=3*A*(i>w-Ao?i-w+Ao:0),C=4*(this._cubeSize-A);Dc(t,U,C,3*A,2*A),u.setRenderTarget(t),u.render(p,ed)}}function gE(r){const e=[],t=[],n=[];let i=r;const s=r-Ao+1+jg.length;for(let l=0;l<s;l++){const c=Math.pow(2,i);t.push(c);let u=1/c;l>r-Ao?u=jg[l-r+Ao-1]:l===0&&(u=0),n.push(u);const h=1/(c-2),f=-h,p=1+h,m=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,y=6,S=3,x=2,_=1,E=new Float32Array(S*y*g),w=new Float32Array(x*y*g),A=new Float32Array(_*y*g);for(let C=0;C<g;C++){const L=C%3*2/3-1,z=C>2?0:-1,R=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];E.set(R,S*y*C),w.set(m,x*y*C);const b=[C,C,C,C,C,C];A.set(b,_*y*C)}const U=new yt;U.setAttribute("position",new Ut(E,S)),U.setAttribute("uv",new Ut(w,x)),U.setAttribute("faceIndex",new Ut(A,_)),e.push(U),i>Ao&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qg(r,e,t){const n=new Ci(r,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function vE(r,e,t){const n=new Float32Array(ms),i=new D(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function $g(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function e0(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function _p(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _E(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===Ba||u===ka,f=u===gr||u===zr;if(h||f){let p=e.get(c);const m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new Vd(r)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const g=c.image;return h&&g&&g.height>0||f&&g&&i(g)?(t===null&&(t=new Vd(r)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",s),p.texture):null}}}return c}function i(c){let u=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function yE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Po("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xE(r,e,t,n){const i={},s=new WeakMap;function l(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const S=m.morphAttributes[y];for(let x=0,_=S.length;x<_;x++)e.remove(S[x])}m.removeEventListener("dispose",l),delete i[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return i[m.id]===!0||(m.addEventListener("dispose",l),i[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const y in m)e.update(m[y],r.ARRAY_BUFFER);const g=p.morphAttributes;for(const y in g){const S=g[y];for(let x=0,_=S.length;x<_;x++)e.update(S[x],r.ARRAY_BUFFER)}}function h(p){const m=[],g=p.index,y=p.attributes.position;let S=0;if(g!==null){const E=g.array;S=g.version;for(let w=0,A=E.length;w<A;w+=3){const U=E[w+0],C=E[w+1],L=E[w+2];m.push(U,C,C,L,L,U)}}else if(y!==void 0){const E=y.array;S=y.version;for(let w=0,A=E.length/3-1;w<A;w+=3){const U=w+0,C=w+1,L=w+2;m.push(U,C,C,L,L,U)}}else return;const x=new(L_(m)?vp:gp)(m,1);x.version=S;const _=s.get(p);_&&e.remove(_),s.set(p,x)}function f(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:f}}function SE(r,e,t){let n;function i(m){n=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function u(m,g){r.drawElements(n,g,s,m*l),t.update(g,n,1)}function h(m,g,y){y!==0&&(r.drawElementsInstanced(n,g,s,m*l,y),t.update(g,n,y))}function f(m,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,y);let x=0;for(let _=0;_<y;_++)x+=g[_];t.update(x,n,1)}function p(m,g,y,S){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<m.length;_++)h(m[_]/l,g[_],S[_]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,S,0,y);let _=0;for(let E=0;E<y;E++)_+=g[E];for(let E=0;E<S.length;E++)t.update(_,n,S[E])}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function ME(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,c){switch(t.calls++,l){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function wE(r,e,t){const n=new WeakMap,i=new Et;function s(l,c,u){const h=l.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let R=function(){L.dispose(),n.delete(c),c.removeEventListener("dispose",R)};m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let w=0;g===!0&&(w=1),y===!0&&(w=2),S===!0&&(w=3);let A=c.attributes.position.count*w,U=1;A>e.maxTextureSize&&(U=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*U*4*p),L=new oh(C,A,U,p);L.type=Zn,L.needsUpdate=!0;const z=w*4;for(let b=0;b<p;b++){const O=x[b],q=_[b],Y=E[b],K=A*U*4*b;for(let ae=0;ae<O.count;ae++){const Q=ae*z;g===!0&&(i.fromBufferAttribute(O,ae),C[K+Q+0]=i.x,C[K+Q+1]=i.y,C[K+Q+2]=i.z,C[K+Q+3]=0),y===!0&&(i.fromBufferAttribute(q,ae),C[K+Q+4]=i.x,C[K+Q+5]=i.y,C[K+Q+6]=i.z,C[K+Q+7]=0),S===!0&&(i.fromBufferAttribute(Y,ae),C[K+Q+8]=i.x,C[K+Q+9]=i.y,C[K+Q+10]=i.z,C[K+Q+11]=Y.itemSize===4?i.w:1)}}m={count:p,texture:L,size:new le(A,U)},n.set(c,m),c.addEventListener("dispose",R)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",l.morphTexture,t);else{let g=0;for(let S=0;S<h.length;S++)g+=h[S];const y=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function EE(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,p=e.get(u,f);if(i.get(p)!==h&&(e.update(p),i.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return p}function l(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:l}}class yp extends Yt{constructor(e,t,n,i,s,l,c,u,h,f=Ms){if(f!==Ms&&f!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ms&&(n=vr),n===void 0&&f===Cs&&(n=bs),super(null,i,s,l,c,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:vn,this.minFilter=u!==void 0?u:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const H_=new Yt,t0=new yp(1,1),V_=new oh,G_=new mp,W_=new ul,n0=[],i0=[],r0=new Float32Array(16),s0=new Float32Array(9),o0=new Float32Array(4);function Ho(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=n0[i];if(s===void 0&&(s=new Float32Array(i),n0[i]=s),e!==0){n.toArray(s,0);for(let l=1,c=0;l!==e;++l)c+=t,r[l].toArray(s,c)}return s}function ln(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function cn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ah(r,e){let t=i0[e];t===void 0&&(t=new Int32Array(e),i0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function TE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function AE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2fv(this.addr,e),cn(t,e)}}function bE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;r.uniform3fv(this.addr,e),cn(t,e)}}function CE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4fv(this.addr,e),cn(t,e)}}function RE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;o0.set(n),r.uniformMatrix2fv(this.addr,!1,o0),cn(t,n)}}function PE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;s0.set(n),r.uniformMatrix3fv(this.addr,!1,s0),cn(t,n)}}function IE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;r0.set(n),r.uniformMatrix4fv(this.addr,!1,r0),cn(t,n)}}function LE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function DE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2iv(this.addr,e),cn(t,e)}}function UE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3iv(this.addr,e),cn(t,e)}}function NE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4iv(this.addr,e),cn(t,e)}}function OE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function FE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2uiv(this.addr,e),cn(t,e)}}function zE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3uiv(this.addr,e),cn(t,e)}}function BE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4uiv(this.addr,e),cn(t,e)}}function kE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(t0.compareFunction=dp,s=t0):s=H_,t.setTexture2D(e||s,i)}function HE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||G_,i)}function VE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||W_,i)}function GE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||V_,i)}function WE(r){switch(r){case 5126:return TE;case 35664:return AE;case 35665:return bE;case 35666:return CE;case 35674:return RE;case 35675:return PE;case 35676:return IE;case 5124:case 35670:return LE;case 35667:case 35671:return DE;case 35668:case 35672:return UE;case 35669:case 35673:return NE;case 5125:return OE;case 36294:return FE;case 36295:return zE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return kE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return VE;case 36289:case 36303:case 36311:case 36292:return GE}}function XE(r,e){r.uniform1fv(this.addr,e)}function YE(r,e){const t=Ho(e,this.size,2);r.uniform2fv(this.addr,t)}function qE(r,e){const t=Ho(e,this.size,3);r.uniform3fv(this.addr,t)}function ZE(r,e){const t=Ho(e,this.size,4);r.uniform4fv(this.addr,t)}function jE(r,e){const t=Ho(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function JE(r,e){const t=Ho(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function KE(r,e){const t=Ho(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function QE(r,e){r.uniform1iv(this.addr,e)}function $E(r,e){r.uniform2iv(this.addr,e)}function eT(r,e){r.uniform3iv(this.addr,e)}function tT(r,e){r.uniform4iv(this.addr,e)}function nT(r,e){r.uniform1uiv(this.addr,e)}function iT(r,e){r.uniform2uiv(this.addr,e)}function rT(r,e){r.uniform3uiv(this.addr,e)}function sT(r,e){r.uniform4uiv(this.addr,e)}function oT(r,e,t){const n=this.cache,i=e.length,s=ah(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let l=0;l!==i;++l)t.setTexture2D(e[l]||H_,s[l])}function aT(r,e,t){const n=this.cache,i=e.length,s=ah(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let l=0;l!==i;++l)t.setTexture3D(e[l]||G_,s[l])}function lT(r,e,t){const n=this.cache,i=e.length,s=ah(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let l=0;l!==i;++l)t.setTextureCube(e[l]||W_,s[l])}function cT(r,e,t){const n=this.cache,i=e.length,s=ah(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let l=0;l!==i;++l)t.setTexture2DArray(e[l]||V_,s[l])}function uT(r){switch(r){case 5126:return XE;case 35664:return YE;case 35665:return qE;case 35666:return ZE;case 35674:return jE;case 35675:return JE;case 35676:return KE;case 5124:case 35670:return QE;case 35667:case 35671:return $E;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return rT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return aT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}class hT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=WE(t.type)}}class fT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uT(t.type)}}class dT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,l=i.length;s!==l;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function a0(r,e){r.seq.push(e),r.map[e.id]=e}function pT(r,e,t){const n=r.name,i=n.length;for(sd.lastIndex=0;;){const s=sd.exec(n),l=sd.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&l+2===i){a0(t,h===void 0?new hT(c,r,e):new fT(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new dT(c),a0(t,p)),t=p}}}class du{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),l=e.getUniformLocation(t,s.name);pT(s,l,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,l=t.length;s!==l;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const l=e[i];l.id in t&&n.push(l)}return n}}function l0(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const mT=37297;let gT=0;function vT(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let l=i;l<s;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}function _T(r){const e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(r);let n;switch(e===t?n="":e===qa&&t===Ya?n="LinearDisplayP3ToLinearSRGB":e===Ya&&t===qa&&(n="LinearSRGBToLinearDisplayP3"),r){case yr:case ll:return[n,"LinearTransferOETF"];case gi:case sh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function c0(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+vT(r.getShaderSource(e),l)}else return i}function yT(r,e){const t=_T(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xT(r,e){let t;switch(e){case h_:t="Linear";break;case f_:t="Reinhard";break;case d_:t="Cineon";break;case tp:t="ACESFilmic";break;case m_:t="AgX";break;case g_:t="Neutral";break;case p_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uc=new D;function ST(){Lt.getLuminanceCoefficients(Uc);const r=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function wT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ET(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),l=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[l]={type:s.type,location:r.getAttribLocation(e,l),locationSize:c}}return t}function Aa(r){return r!==""}function u0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(r){return r.replace(TT,bT)}const AT=new Map;function bT(r,e){let t=_t[e];if(t===void 0){const n=AT.get(e);if(n!==void 0)t=_t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gd(t)}const CT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(r){return r.replace(CT,RT)}function RT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function d0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ba?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function IT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gr:case zr:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function DT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ol:e="ENVMAP_BLENDING_MULTIPLY";break;case c_:e="ENVMAP_BLENDING_MIX";break;case u_:e="ENVMAP_BLENDING_ADD";break}return e}function UT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function NT(r,e,t,n){const i=r.getContext(),s=t.defines;let l=t.vertexShader,c=t.fragmentShader;const u=PT(t),h=IT(t),f=LT(t),p=DT(t),m=UT(t),g=MT(t),y=wT(s),S=i.createProgram();let x,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Aa).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Aa).join(`
`),_.length>0&&(_+=`
`)):(x=[d0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),_=[d0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Xi?xT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,yT("linearToOutputTexel",t.outputColorSpace),ST(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),l=Gd(l),l=u0(l,t),l=h0(l,t),c=Gd(c),c=u0(c,t),c=h0(c,t),l=f0(l),c=f0(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=E+x+l,A=E+_+c,U=l0(i,i.VERTEX_SHADER,w),C=l0(i,i.FRAGMENT_SHADER,A);i.attachShader(S,U),i.attachShader(S,C),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function L(O){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(S).trim(),Y=i.getShaderInfoLog(U).trim(),K=i.getShaderInfoLog(C).trim();let ae=!0,Q=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(ae=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,S,U,C);else{const me=c0(i,U,"vertex"),F=c0(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+q+`
`+me+`
`+F)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Y===""||K==="")&&(Q=!1);Q&&(O.diagnostics={runnable:ae,programLog:q,vertexShader:{log:Y,prefix:x},fragmentShader:{log:K,prefix:_}})}i.deleteShader(U),i.deleteShader(C),z=new du(i,S),R=ET(i,S)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(S,mT)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=U,this.fragmentShader=C,this}let OT=0;class FT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zT(e),t.set(e,n)),n}}class zT{constructor(e){this.id=OT++,this.code=e,this.usedTimes=0}}function BT(r,e,t,n,i,s,l){const c=new Es,u=new FT,h=new Set,f=[],p=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(R){return h.add(R),R===0?"uv":`uv${R}`}function x(R,b,O,q,Y){const K=q.fog,ae=Y.geometry,Q=R.isMeshStandardMaterial?q.environment:null,me=(R.isMeshStandardMaterial?t:e).get(R.envMap||Q),F=me&&me.mapping===zo?me.image.height:null,j=y[R.type];R.precision!==null&&(g=i.getMaxPrecision(R.precision),g!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",g,"instead."));const Z=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,re=Z!==void 0?Z.length:0;let Se=0;ae.morphAttributes.position!==void 0&&(Se=1),ae.morphAttributes.normal!==void 0&&(Se=2),ae.morphAttributes.color!==void 0&&(Se=3);let He,ie,ve,Ae;if(j){const St=Ai[j];He=St.vertexShader,ie=St.fragmentShader}else He=R.vertexShader,ie=R.fragmentShader,u.update(R),ve=u.getVertexShaderID(R),Ae=u.getFragmentShaderID(R);const we=r.getRenderTarget(),et=Y.isInstancedMesh===!0,ot=Y.isBatchedMesh===!0,tt=!!R.map,ct=!!R.matcap,N=!!me,ye=!!R.aoMap,xe=!!R.lightMap,Le=!!R.bumpMap,de=!!R.normalMap,Qe=!!R.displacementMap,Pe=!!R.emissiveMap,Ve=!!R.metalnessMap,k=!!R.roughnessMap,P=R.anisotropy>0,ee=R.clearcoat>0,pe=R.dispersion>0,he=R.iridescence>0,ge=R.sheen>0,je=R.transmission>0,Re=P&&!!R.anisotropyMap,ke=ee&&!!R.clearcoatMap,ft=ee&&!!R.clearcoatNormalMap,Me=ee&&!!R.clearcoatRoughnessMap,Oe=he&&!!R.iridescenceMap,wt=he&&!!R.iridescenceThicknessMap,at=ge&&!!R.sheenColorMap,Ge=ge&&!!R.sheenRoughnessMap,V=!!R.specularMap,ue=!!R.specularColorMap,Ne=!!R.specularIntensityMap,H=je&&!!R.transmissionMap,_e=je&&!!R.thicknessMap,ce=!!R.gradientMap,fe=!!R.alphaMap,be=R.alphaTest>0,it=!!R.alphaHash,dt=!!R.extensions;let Tt=Xi;R.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Tt=r.toneMapping);const Ht={shaderID:j,shaderType:R.type,shaderName:R.name,vertexShader:He,fragmentShader:ie,defines:R.defines,customVertexShaderID:ve,customFragmentShaderID:Ae,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:g,batching:ot,batchingColor:ot&&Y._colorsTexture!==null,instancing:et,instancingColor:et&&Y.instanceColor!==null,instancingMorph:et&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:we===null?r.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:yr,alphaToCoverage:!!R.alphaToCoverage,map:tt,matcap:ct,envMap:N,envMapMode:N&&me.mapping,envMapCubeUVHeight:F,aoMap:ye,lightMap:xe,bumpMap:Le,normalMap:de,displacementMap:m&&Qe,emissiveMap:Pe,normalMapObjectSpace:de&&R.normalMapType===w_,normalMapTangentSpace:de&&R.normalMapType===kr,metalnessMap:Ve,roughnessMap:k,anisotropy:P,anisotropyMap:Re,clearcoat:ee,clearcoatMap:ke,clearcoatNormalMap:ft,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:he,iridescenceMap:Oe,iridescenceThicknessMap:wt,sheen:ge,sheenColorMap:at,sheenRoughnessMap:Ge,specularMap:V,specularColorMap:ue,specularIntensityMap:Ne,transmission:je,transmissionMap:H,thicknessMap:_e,gradientMap:ce,opaque:R.transparent===!1&&R.blending===Ss&&R.alphaToCoverage===!1,alphaMap:fe,alphaTest:be,alphaHash:it,combine:R.combine,mapUv:tt&&S(R.map.channel),aoMapUv:ye&&S(R.aoMap.channel),lightMapUv:xe&&S(R.lightMap.channel),bumpMapUv:Le&&S(R.bumpMap.channel),normalMapUv:de&&S(R.normalMap.channel),displacementMapUv:Qe&&S(R.displacementMap.channel),emissiveMapUv:Pe&&S(R.emissiveMap.channel),metalnessMapUv:Ve&&S(R.metalnessMap.channel),roughnessMapUv:k&&S(R.roughnessMap.channel),anisotropyMapUv:Re&&S(R.anisotropyMap.channel),clearcoatMapUv:ke&&S(R.clearcoatMap.channel),clearcoatNormalMapUv:ft&&S(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&S(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&S(R.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&S(R.iridescenceThicknessMap.channel),sheenColorMapUv:at&&S(R.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&S(R.sheenRoughnessMap.channel),specularMapUv:V&&S(R.specularMap.channel),specularColorMapUv:ue&&S(R.specularColorMap.channel),specularIntensityMapUv:Ne&&S(R.specularIntensityMap.channel),transmissionMapUv:H&&S(R.transmissionMap.channel),thicknessMapUv:_e&&S(R.thicknessMap.channel),alphaMapUv:fe&&S(R.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(de||P),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ae.attributes.uv&&(tt||fe),fog:!!K,useFog:R.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:Y.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:Tt,decodeVideoTexture:tt&&R.map.isVideoTexture===!0&&Lt.getTransfer(R.map.colorSpace)===Bt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Hi,flipSided:R.side===Hn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:dt&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&R.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ht.vertexUv1s=h.has(1),Ht.vertexUv2s=h.has(2),Ht.vertexUv3s=h.has(3),h.clear(),Ht}function _(R){const b=[];if(R.shaderID?b.push(R.shaderID):(b.push(R.customVertexShaderID),b.push(R.customFragmentShaderID)),R.defines!==void 0)for(const O in R.defines)b.push(O),b.push(R.defines[O]);return R.isRawShaderMaterial===!1&&(E(b,R),w(b,R),b.push(r.outputColorSpace)),b.push(R.customProgramCacheKey),b.join()}function E(R,b){R.push(b.precision),R.push(b.outputColorSpace),R.push(b.envMapMode),R.push(b.envMapCubeUVHeight),R.push(b.mapUv),R.push(b.alphaMapUv),R.push(b.lightMapUv),R.push(b.aoMapUv),R.push(b.bumpMapUv),R.push(b.normalMapUv),R.push(b.displacementMapUv),R.push(b.emissiveMapUv),R.push(b.metalnessMapUv),R.push(b.roughnessMapUv),R.push(b.anisotropyMapUv),R.push(b.clearcoatMapUv),R.push(b.clearcoatNormalMapUv),R.push(b.clearcoatRoughnessMapUv),R.push(b.iridescenceMapUv),R.push(b.iridescenceThicknessMapUv),R.push(b.sheenColorMapUv),R.push(b.sheenRoughnessMapUv),R.push(b.specularMapUv),R.push(b.specularColorMapUv),R.push(b.specularIntensityMapUv),R.push(b.transmissionMapUv),R.push(b.thicknessMapUv),R.push(b.combine),R.push(b.fogExp2),R.push(b.sizeAttenuation),R.push(b.morphTargetsCount),R.push(b.morphAttributeCount),R.push(b.numDirLights),R.push(b.numPointLights),R.push(b.numSpotLights),R.push(b.numSpotLightMaps),R.push(b.numHemiLights),R.push(b.numRectAreaLights),R.push(b.numDirLightShadows),R.push(b.numPointLightShadows),R.push(b.numSpotLightShadows),R.push(b.numSpotLightShadowsWithMaps),R.push(b.numLightProbes),R.push(b.shadowMapType),R.push(b.toneMapping),R.push(b.numClippingPlanes),R.push(b.numClipIntersection),R.push(b.depthPacking)}function w(R,b){c.disableAll(),b.supportsVertexTextures&&c.enable(0),b.instancing&&c.enable(1),b.instancingColor&&c.enable(2),b.instancingMorph&&c.enable(3),b.matcap&&c.enable(4),b.envMap&&c.enable(5),b.normalMapObjectSpace&&c.enable(6),b.normalMapTangentSpace&&c.enable(7),b.clearcoat&&c.enable(8),b.iridescence&&c.enable(9),b.alphaTest&&c.enable(10),b.vertexColors&&c.enable(11),b.vertexAlphas&&c.enable(12),b.vertexUv1s&&c.enable(13),b.vertexUv2s&&c.enable(14),b.vertexUv3s&&c.enable(15),b.vertexTangents&&c.enable(16),b.anisotropy&&c.enable(17),b.alphaHash&&c.enable(18),b.batching&&c.enable(19),b.dispersion&&c.enable(20),b.batchingColor&&c.enable(21),R.push(c.mask),c.disableAll(),b.fog&&c.enable(0),b.useFog&&c.enable(1),b.flatShading&&c.enable(2),b.logarithmicDepthBuffer&&c.enable(3),b.skinning&&c.enable(4),b.morphTargets&&c.enable(5),b.morphNormals&&c.enable(6),b.morphColors&&c.enable(7),b.premultipliedAlpha&&c.enable(8),b.shadowMapEnabled&&c.enable(9),b.doubleSided&&c.enable(10),b.flipSided&&c.enable(11),b.useDepthPacking&&c.enable(12),b.dithering&&c.enable(13),b.transmission&&c.enable(14),b.sheen&&c.enable(15),b.opaque&&c.enable(16),b.pointsUvs&&c.enable(17),b.decodeVideoTexture&&c.enable(18),b.alphaToCoverage&&c.enable(19),R.push(c.mask)}function A(R){const b=y[R.type];let O;if(b){const q=Ai[b];O=Wu.clone(q.uniforms)}else O=R.uniforms;return O}function U(R,b){let O;for(let q=0,Y=f.length;q<Y;q++){const K=f[q];if(K.cacheKey===b){O=K,++O.usedTimes;break}}return O===void 0&&(O=new NT(r,b,R,s),f.push(O)),O}function C(R){if(--R.usedTimes===0){const b=f.indexOf(R);f[b]=f[f.length-1],f.pop(),R.destroy()}}function L(R){u.remove(R)}function z(){u.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:A,acquireProgram:U,releaseProgram:C,releaseShaderCache:L,programs:f,dispose:z}}function kT(){let r=new WeakMap;function e(l){return r.has(l)}function t(l){let c=r.get(l);return c===void 0&&(c={},r.set(l,c)),c}function n(l){r.delete(l)}function i(l,c,u){r.get(l)[c]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function HT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function p0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function m0(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function l(p,m,g,y,S,x){let _=r[e];return _===void 0?(_={id:p.id,object:p,geometry:m,material:g,groupOrder:y,renderOrder:p.renderOrder,z:S,group:x},r[e]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=g,_.groupOrder=y,_.renderOrder=p.renderOrder,_.z=S,_.group=x),e++,_}function c(p,m,g,y,S,x){const _=l(p,m,g,y,S,x);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function u(p,m,g,y,S,x){const _=l(p,m,g,y,S,x);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function h(p,m){t.length>1&&t.sort(p||HT),n.length>1&&n.sort(m||p0),i.length>1&&i.sort(m||p0)}function f(){for(let p=e,m=r.length;p<m;p++){const g=r[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:f,sort:h}}function VT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let l;return s===void 0?(l=new m0,r.set(n,[l])):i>=s.length?(l=new m0,s.push(l)):l=s[i],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function GT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Be};break;case"SpotLight":t={position:new D,direction:new D,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function WT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let XT=0;function YT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function qT(r){const e=new GT,t=WT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const i=new D,s=new st,l=new st;function c(h){let f=0,p=0,m=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let g=0,y=0,S=0,x=0,_=0,E=0,w=0,A=0,U=0,C=0,L=0;h.sort(YT);for(let R=0,b=h.length;R<b;R++){const O=h[R],q=O.color,Y=O.intensity,K=O.distance,ae=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=q.r*Y,p+=q.g*Y,m+=q.b*Y;else if(O.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(O.sh.coefficients[Q],Y);L++}else if(O.isDirectionalLight){const Q=e.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const me=O.shadow,F=t.get(O);F.shadowIntensity=me.intensity,F.shadowBias=me.bias,F.shadowNormalBias=me.normalBias,F.shadowRadius=me.radius,F.shadowMapSize=me.mapSize,n.directionalShadow[g]=F,n.directionalShadowMap[g]=ae,n.directionalShadowMatrix[g]=O.shadow.matrix,E++}n.directional[g]=Q,g++}else if(O.isSpotLight){const Q=e.get(O);Q.position.setFromMatrixPosition(O.matrixWorld),Q.color.copy(q).multiplyScalar(Y),Q.distance=K,Q.coneCos=Math.cos(O.angle),Q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Q.decay=O.decay,n.spot[S]=Q;const me=O.shadow;if(O.map&&(n.spotLightMap[U]=O.map,U++,me.updateMatrices(O),O.castShadow&&C++),n.spotLightMatrix[S]=me.matrix,O.castShadow){const F=t.get(O);F.shadowIntensity=me.intensity,F.shadowBias=me.bias,F.shadowNormalBias=me.normalBias,F.shadowRadius=me.radius,F.shadowMapSize=me.mapSize,n.spotShadow[S]=F,n.spotShadowMap[S]=ae,A++}S++}else if(O.isRectAreaLight){const Q=e.get(O);Q.color.copy(q).multiplyScalar(Y),Q.halfWidth.set(O.width*.5,0,0),Q.halfHeight.set(0,O.height*.5,0),n.rectArea[x]=Q,x++}else if(O.isPointLight){const Q=e.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity),Q.distance=O.distance,Q.decay=O.decay,O.castShadow){const me=O.shadow,F=t.get(O);F.shadowIntensity=me.intensity,F.shadowBias=me.bias,F.shadowNormalBias=me.normalBias,F.shadowRadius=me.radius,F.shadowMapSize=me.mapSize,F.shadowCameraNear=me.camera.near,F.shadowCameraFar=me.camera.far,n.pointShadow[y]=F,n.pointShadowMap[y]=ae,n.pointShadowMatrix[y]=O.shadow.matrix,w++}n.point[y]=Q,y++}else if(O.isHemisphereLight){const Q=e.get(O);Q.skyColor.copy(O.color).multiplyScalar(Y),Q.groundColor.copy(O.groundColor).multiplyScalar(Y),n.hemi[_]=Q,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const z=n.hash;(z.directionalLength!==g||z.pointLength!==y||z.spotLength!==S||z.rectAreaLength!==x||z.hemiLength!==_||z.numDirectionalShadows!==E||z.numPointShadows!==w||z.numSpotShadows!==A||z.numSpotMaps!==U||z.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=S,n.rectArea.length=x,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=A+U-C,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,z.directionalLength=g,z.pointLength=y,z.spotLength=S,z.rectAreaLength=x,z.hemiLength=_,z.numDirectionalShadows=E,z.numPointShadows=w,z.numSpotShadows=A,z.numSpotMaps=U,z.numLightProbes=L,n.version=XT++)}function u(h,f){let p=0,m=0,g=0,y=0,S=0;const x=f.matrixWorldInverse;for(let _=0,E=h.length;_<E;_++){const w=h[_];if(w.isDirectionalLight){const A=n.directional[p];A.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(x),p++}else if(w.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(x),g++}else if(w.isRectAreaLight){const A=n.rectArea[y];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(x),l.identity(),s.copy(w.matrixWorld),s.premultiply(x),l.extractRotation(s),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(l),A.halfHeight.applyMatrix4(l),y++}else if(w.isPointLight){const A=n.point[m];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(x),m++}else if(w.isHemisphereLight){const A=n.hemi[S];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(x),S++}}}return{setup:c,setupView:u,state:n}}function g0(r){const e=new qT(r),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function l(f){n.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:l}}function ZT(r){let e=new WeakMap;function t(i,s=0){const l=e.get(i);let c;return l===void 0?(c=new g0(r),e.set(i,[c])):s>=l.length?(c=new g0(r),l.push(c)):c=l[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class xp extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=S_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sp extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KT(r,e,t){let n=new hl;const i=new le,s=new le,l=new Et,c=new xp({depthPacking:M_}),u=new Sp,h={},f=t.maxTextureSize,p={[mr]:Hn,[Hn]:mr,[Hi]:Hi},m=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:jT,fragmentShader:JT}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const y=new yt;y.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new en(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let _=this.type;this.render=function(C,L,z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;const R=r.getRenderTarget(),b=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),q=r.state;q.setBlending(pr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Y=_!==Ti&&this.type===Ti,K=_===Ti&&this.type!==Ti;for(let ae=0,Q=C.length;ae<Q;ae++){const me=C[ae],F=me.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const j=F.getFrameExtents();if(i.multiply(j),s.copy(F.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/j.x),i.x=s.x*j.x,F.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/j.y),i.y=s.y*j.y,F.mapSize.y=s.y)),F.map===null||Y===!0||K===!0){const re=this.type!==Ti?{minFilter:vn,magFilter:vn}:{};F.map!==null&&F.map.dispose(),F.map=new Ci(i.x,i.y,re),F.map.texture.name=me.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const Z=F.getViewportCount();for(let re=0;re<Z;re++){const Se=F.getViewport(re);l.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),q.viewport(l),F.updateMatrices(me,re),n=F.getFrustum(),A(L,z,F.camera,me,this.type)}F.isPointLightShadow!==!0&&this.type===Ti&&E(F,z),F.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(R,b,O)};function E(C,L){const z=e.update(S);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ci(i.x,i.y)),m.uniforms.shadow_pass.value=C.map.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(L,null,z,m,S,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(L,null,z,g,S,null)}function w(C,L,z,R){let b=null;const O=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)b=O;else if(b=z.isPointLight===!0?u:c,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const q=b.uuid,Y=L.uuid;let K=h[q];K===void 0&&(K={},h[q]=K);let ae=K[Y];ae===void 0&&(ae=b.clone(),K[Y]=ae,L.addEventListener("dispose",U)),b=ae}if(b.visible=L.visible,b.wireframe=L.wireframe,R===Ti?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:p[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const q=r.properties.get(b);q.light=z}return b}function A(C,L,z,R,b){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Ti)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);const Y=e.update(C),K=C.material;if(Array.isArray(K)){const ae=Y.groups;for(let Q=0,me=ae.length;Q<me;Q++){const F=ae[Q],j=K[F.materialIndex];if(j&&j.visible){const Z=w(C,j,R,b);C.onBeforeShadow(r,C,L,z,Y,Z,F),r.renderBufferDirect(z,null,Y,Z,C,F),C.onAfterShadow(r,C,L,z,Y,Z,F)}}}else if(K.visible){const ae=w(C,K,R,b);C.onBeforeShadow(r,C,L,z,Y,ae,null),r.renderBufferDirect(z,null,Y,ae,C,null),C.onAfterShadow(r,C,L,z,Y,ae,null)}}const q=C.children;for(let Y=0,K=q.length;Y<K;Y++)A(q[Y],L,z,R,b)}function U(C){C.target.removeEventListener("dispose",U);for(const z in h){const R=h[z],b=C.target.uuid;b in R&&(R[b].dispose(),delete R[b])}}}function QT(r){function e(){let H=!1;const _e=new Et;let ce=null;const fe=new Et(0,0,0,0);return{setMask:function(be){ce!==be&&!H&&(r.colorMask(be,be,be,be),ce=be)},setLocked:function(be){H=be},setClear:function(be,it,dt,Tt,Ht){Ht===!0&&(be*=Tt,it*=Tt,dt*=Tt),_e.set(be,it,dt,Tt),fe.equals(_e)===!1&&(r.clearColor(be,it,dt,Tt),fe.copy(_e))},reset:function(){H=!1,ce=null,fe.set(-1,0,0,0)}}}function t(){let H=!1,_e=null,ce=null,fe=null;return{setTest:function(be){be?Ae(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(be){_e!==be&&!H&&(r.depthMask(be),_e=be)},setFunc:function(be){if(ce!==be){switch(be){case n_:r.depthFunc(r.NEVER);break;case i_:r.depthFunc(r.ALWAYS);break;case r_:r.depthFunc(r.LESS);break;case za:r.depthFunc(r.LEQUAL);break;case s_:r.depthFunc(r.EQUAL);break;case o_:r.depthFunc(r.GEQUAL);break;case a_:r.depthFunc(r.GREATER);break;case l_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=be}},setLocked:function(be){H=be},setClear:function(be){fe!==be&&(r.clearDepth(be),fe=be)},reset:function(){H=!1,_e=null,ce=null,fe=null}}}function n(){let H=!1,_e=null,ce=null,fe=null,be=null,it=null,dt=null,Tt=null,Ht=null;return{setTest:function(St){H||(St?Ae(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(St){_e!==St&&!H&&(r.stencilMask(St),_e=St)},setFunc:function(St,un,hn){(ce!==St||fe!==un||be!==hn)&&(r.stencilFunc(St,un,hn),ce=St,fe=un,be=hn)},setOp:function(St,un,hn){(it!==St||dt!==un||Tt!==hn)&&(r.stencilOp(St,un,hn),it=St,dt=un,Tt=hn)},setLocked:function(St){H=St},setClear:function(St){Ht!==St&&(r.clearStencil(St),Ht=St)},reset:function(){H=!1,_e=null,ce=null,fe=null,be=null,it=null,dt=null,Tt=null,Ht=null}}}const i=new e,s=new t,l=new n,c=new WeakMap,u=new WeakMap;let h={},f={},p=new WeakMap,m=[],g=null,y=!1,S=null,x=null,_=null,E=null,w=null,A=null,U=null,C=new Be(0,0,0),L=0,z=!1,R=null,b=null,O=null,q=null,Y=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,Q=0;const me=r.getParameter(r.VERSION);me.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(me)[1]),ae=Q>=1):me.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),ae=Q>=2);let F=null,j={};const Z=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),Se=new Et().fromArray(Z),He=new Et().fromArray(re);function ie(H,_e,ce,fe){const be=new Uint8Array(4),it=r.createTexture();r.bindTexture(H,it),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let dt=0;dt<ce;dt++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(_e,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(_e+dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return it}const ve={};ve[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),l.setClear(0),Ae(r.DEPTH_TEST),s.setFunc(za),Le(!1),de(Nd),Ae(r.CULL_FACE),ye(pr);function Ae(H){h[H]!==!0&&(r.enable(H),h[H]=!0)}function we(H){h[H]!==!1&&(r.disable(H),h[H]=!1)}function et(H,_e){return f[H]!==_e?(r.bindFramebuffer(H,_e),f[H]=_e,H===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=_e),H===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=_e),!0):!1}function ot(H,_e){let ce=m,fe=!1;if(H){ce=p.get(_e),ce===void 0&&(ce=[],p.set(_e,ce));const be=H.textures;if(ce.length!==be.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let it=0,dt=be.length;it<dt;it++)ce[it]=r.COLOR_ATTACHMENT0+it;ce.length=be.length,fe=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,fe=!0);fe&&r.drawBuffers(ce)}function tt(H){return g!==H?(r.useProgram(H),g=H,!0):!1}const ct={[Fr]:r.FUNC_ADD,[Bv]:r.FUNC_SUBTRACT,[kv]:r.FUNC_REVERSE_SUBTRACT};ct[Hv]=r.MIN,ct[Vv]=r.MAX;const N={[Gv]:r.ZERO,[Wv]:r.ONE,[Xv]:r.SRC_COLOR,[mu]:r.SRC_ALPHA,[Kv]:r.SRC_ALPHA_SATURATE,[jv]:r.DST_COLOR,[qv]:r.DST_ALPHA,[Yv]:r.ONE_MINUS_SRC_COLOR,[gu]:r.ONE_MINUS_SRC_ALPHA,[Jv]:r.ONE_MINUS_DST_COLOR,[Zv]:r.ONE_MINUS_DST_ALPHA,[Qv]:r.CONSTANT_COLOR,[$v]:r.ONE_MINUS_CONSTANT_COLOR,[e_]:r.CONSTANT_ALPHA,[t_]:r.ONE_MINUS_CONSTANT_ALPHA};function ye(H,_e,ce,fe,be,it,dt,Tt,Ht,St){if(H===pr){y===!0&&(we(r.BLEND),y=!1);return}if(y===!1&&(Ae(r.BLEND),y=!0),H!==zv){if(H!==S||St!==z){if((x!==Fr||w!==Fr)&&(r.blendEquation(r.FUNC_ADD),x=Fr,w=Fr),St)switch(H){case Ss:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Od:r.blendFunc(r.ONE,r.ONE);break;case Fd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case zd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ss:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Od:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Fd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case zd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,E=null,A=null,U=null,C.set(0,0,0),L=0,S=H,z=St}return}be=be||_e,it=it||ce,dt=dt||fe,(_e!==x||be!==w)&&(r.blendEquationSeparate(ct[_e],ct[be]),x=_e,w=be),(ce!==_||fe!==E||it!==A||dt!==U)&&(r.blendFuncSeparate(N[ce],N[fe],N[it],N[dt]),_=ce,E=fe,A=it,U=dt),(Tt.equals(C)===!1||Ht!==L)&&(r.blendColor(Tt.r,Tt.g,Tt.b,Ht),C.copy(Tt),L=Ht),S=H,z=!1}function xe(H,_e){H.side===Hi?we(r.CULL_FACE):Ae(r.CULL_FACE);let ce=H.side===Hn;_e&&(ce=!ce),Le(ce),H.blending===Ss&&H.transparent===!1?ye(pr):ye(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),i.setMask(H.colorWrite);const fe=H.stencilWrite;l.setTest(fe),fe&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Pe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ae(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function Le(H){R!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),R=H)}function de(H){H!==Nv?(Ae(r.CULL_FACE),H!==b&&(H===Nd?r.cullFace(r.BACK):H===Ov?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),b=H}function Qe(H){H!==O&&(ae&&r.lineWidth(H),O=H)}function Pe(H,_e,ce){H?(Ae(r.POLYGON_OFFSET_FILL),(q!==_e||Y!==ce)&&(r.polygonOffset(_e,ce),q=_e,Y=ce)):we(r.POLYGON_OFFSET_FILL)}function Ve(H){H?Ae(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function k(H){H===void 0&&(H=r.TEXTURE0+K-1),F!==H&&(r.activeTexture(H),F=H)}function P(H,_e,ce){ce===void 0&&(F===null?ce=r.TEXTURE0+K-1:ce=F);let fe=j[ce];fe===void 0&&(fe={type:void 0,texture:void 0},j[ce]=fe),(fe.type!==H||fe.texture!==_e)&&(F!==ce&&(r.activeTexture(ce),F=ce),r.bindTexture(H,_e||ve[H]),fe.type=H,fe.texture=_e)}function ee(){const H=j[F];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function pe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{r.compressedTexImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{r.texSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function je(){try{r.texSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{r.texStorage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{r.texStorage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{r.texImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function wt(){try{r.texImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(H){Se.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Se.copy(H))}function Ge(H){He.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),He.copy(H))}function V(H,_e){let ce=u.get(_e);ce===void 0&&(ce=new WeakMap,u.set(_e,ce));let fe=ce.get(H);fe===void 0&&(fe=r.getUniformBlockIndex(_e,H.name),ce.set(H,fe))}function ue(H,_e){const fe=u.get(_e).get(H);c.get(_e)!==fe&&(r.uniformBlockBinding(_e,fe,H.__bindingPointIndex),c.set(_e,fe))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},F=null,j={},f={},p=new WeakMap,m=[],g=null,y=!1,S=null,x=null,_=null,E=null,w=null,A=null,U=null,C=new Be(0,0,0),L=0,z=!1,R=null,b=null,O=null,q=null,Y=null,Se.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),l.reset()}return{buffers:{color:i,depth:s,stencil:l},enable:Ae,disable:we,bindFramebuffer:et,drawBuffers:ot,useProgram:tt,setBlending:ye,setMaterial:xe,setFlipSided:Le,setCullFace:de,setLineWidth:Qe,setPolygonOffset:Pe,setScissorTest:Ve,activeTexture:k,bindTexture:P,unbindTexture:ee,compressedTexImage2D:pe,compressedTexImage3D:he,texImage2D:Oe,texImage3D:wt,updateUBOMapping:V,uniformBlockBinding:ue,texStorage2D:ft,texStorage3D:Me,texSubImage2D:ge,texSubImage3D:je,compressedTexSubImage2D:Re,compressedTexSubImage3D:ke,scissor:at,viewport:Ge,reset:Ne}}function $T(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function eA(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function tA(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Wd(r,e,t,n){const i=nA(n);switch(t){case op:return r*e;case lp:return r*e;case cp:return r*e*2;case th:return r*e/i.components*i.byteLength;case al:return r*e/i.components*i.byteLength;case up:return r*e*2/i.components*i.byteLength;case nh:return r*e*2/i.components*i.byteLength;case ap:return r*e*3/i.components*i.byteLength;case Dn:return r*e*4/i.components*i.byteLength;case ih:return r*e*4/i.components*i.byteLength;case Ra:case Pa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ia:case La:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _u:case xu:return Math.max(r,16)*Math.max(e,8)/4;case vu:case yu:return Math.max(r,8)*Math.max(e,8)/2;case Su:case Mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Au:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case bu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Lu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Du:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Nu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Da:case zu:case Bu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case hp:case ku:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Hu:case Vu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nA(r){switch(r){case bi:case ip:return{byteLength:1,components:1};case Lo:case rp:case Bo:return{byteLength:2,components:1};case $u:case eh:return{byteLength:2,components:4};case vr:case Qu:case Zn:return{byteLength:4,components:1};case sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}const iA={contain:$T,cover:eA,fill:tA,getByteLength:Wd};function rA(r,e,t,n,i,s,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new le,f=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(k,P){return g?new OffscreenCanvas(k,P):Ja("canvas")}function S(k,P,ee){let pe=1;const he=Ve(k);if((he.width>ee||he.height>ee)&&(pe=ee/Math.max(he.width,he.height)),pe<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const ge=Math.floor(pe*he.width),je=Math.floor(pe*he.height);p===void 0&&(p=y(ge,je));const Re=P?y(ge,je):p;return Re.width=ge,Re.height=je,Re.getContext("2d").drawImage(k,0,0,ge,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ge+"x"+je+")."),Re}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),k;return k}function x(k){return k.generateMipmaps&&k.minFilter!==vn&&k.minFilter!==on}function _(k){r.generateMipmap(k)}function E(k,P,ee,pe,he=!1){if(k!==null){if(r[k]!==void 0)return r[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let ge=P;if(P===r.RED&&(ee===r.FLOAT&&(ge=r.R32F),ee===r.HALF_FLOAT&&(ge=r.R16F),ee===r.UNSIGNED_BYTE&&(ge=r.R8)),P===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ge=r.R8UI),ee===r.UNSIGNED_SHORT&&(ge=r.R16UI),ee===r.UNSIGNED_INT&&(ge=r.R32UI),ee===r.BYTE&&(ge=r.R8I),ee===r.SHORT&&(ge=r.R16I),ee===r.INT&&(ge=r.R32I)),P===r.RG&&(ee===r.FLOAT&&(ge=r.RG32F),ee===r.HALF_FLOAT&&(ge=r.RG16F),ee===r.UNSIGNED_BYTE&&(ge=r.RG8)),P===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ge=r.RG8UI),ee===r.UNSIGNED_SHORT&&(ge=r.RG16UI),ee===r.UNSIGNED_INT&&(ge=r.RG32UI),ee===r.BYTE&&(ge=r.RG8I),ee===r.SHORT&&(ge=r.RG16I),ee===r.INT&&(ge=r.RG32I)),P===r.RGB&&ee===r.UNSIGNED_INT_5_9_9_9_REV&&(ge=r.RGB9_E5),P===r.RGBA){const je=he?Xa:Lt.getTransfer(pe);ee===r.FLOAT&&(ge=r.RGBA32F),ee===r.HALF_FLOAT&&(ge=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(ge=je===Bt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(ge=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(ge=r.RGB5_A1)}return(ge===r.R16F||ge===r.R32F||ge===r.RG16F||ge===r.RG32F||ge===r.RGBA16F||ge===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function w(k,P){let ee;return k?P===null||P===vr||P===bs?ee=r.DEPTH24_STENCIL8:P===Zn?ee=r.DEPTH32F_STENCIL8:P===Lo&&(ee=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===vr||P===bs?ee=r.DEPTH_COMPONENT24:P===Zn?ee=r.DEPTH_COMPONENT32F:P===Lo&&(ee=r.DEPTH_COMPONENT16),ee}function A(k,P){return x(k)===!0||k.isFramebufferTexture&&k.minFilter!==vn&&k.minFilter!==on?Math.log2(Math.max(P.width,P.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?P.mipmaps.length:1}function U(k){const P=k.target;P.removeEventListener("dispose",U),L(P),P.isVideoTexture&&f.delete(P)}function C(k){const P=k.target;P.removeEventListener("dispose",C),R(P)}function L(k){const P=n.get(k);if(P.__webglInit===void 0)return;const ee=k.source,pe=m.get(ee);if(pe){const he=pe[P.__cacheKey];he.usedTimes--,he.usedTimes===0&&z(k),Object.keys(pe).length===0&&m.delete(ee)}n.remove(k)}function z(k){const P=n.get(k);r.deleteTexture(P.__webglTexture);const ee=k.source,pe=m.get(ee);delete pe[P.__cacheKey],l.memory.textures--}function R(k){const P=n.get(k);if(k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(P.__webglFramebuffer[pe]))for(let he=0;he<P.__webglFramebuffer[pe].length;he++)r.deleteFramebuffer(P.__webglFramebuffer[pe][he]);else r.deleteFramebuffer(P.__webglFramebuffer[pe]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[pe])}else{if(Array.isArray(P.__webglFramebuffer))for(let pe=0;pe<P.__webglFramebuffer.length;pe++)r.deleteFramebuffer(P.__webglFramebuffer[pe]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let pe=0;pe<P.__webglColorRenderbuffer.length;pe++)P.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[pe]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ee=k.textures;for(let pe=0,he=ee.length;pe<he;pe++){const ge=n.get(ee[pe]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),l.memory.textures--),n.remove(ee[pe])}n.remove(k)}let b=0;function O(){b=0}function q(){const k=b;return k>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+i.maxTextures),b+=1,k}function Y(k){const P=[];return P.push(k.wrapS),P.push(k.wrapT),P.push(k.wrapR||0),P.push(k.magFilter),P.push(k.minFilter),P.push(k.anisotropy),P.push(k.internalFormat),P.push(k.format),P.push(k.type),P.push(k.generateMipmaps),P.push(k.premultiplyAlpha),P.push(k.flipY),P.push(k.unpackAlignment),P.push(k.colorSpace),P.join()}function K(k,P){const ee=n.get(k);if(k.isVideoTexture&&Qe(k),k.isRenderTargetTexture===!1&&k.version>0&&ee.__version!==k.version){const pe=k.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(ee,k,P);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+P)}function ae(k,P){const ee=n.get(k);if(k.version>0&&ee.__version!==k.version){He(ee,k,P);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+P)}function Q(k,P){const ee=n.get(k);if(k.version>0&&ee.__version!==k.version){He(ee,k,P);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+P)}function me(k,P){const ee=n.get(k);if(k.version>0&&ee.__version!==k.version){ie(ee,k,P);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+P)}const F={[Ha]:r.REPEAT,[vi]:r.CLAMP_TO_EDGE,[Va]:r.MIRRORED_REPEAT},j={[vn]:r.NEAREST,[np]:r.NEAREST_MIPMAP_NEAREST,[Eo]:r.NEAREST_MIPMAP_LINEAR,[on]:r.LINEAR,[Ca]:r.LINEAR_MIPMAP_NEAREST,[Gi]:r.LINEAR_MIPMAP_LINEAR},Z={[E_]:r.NEVER,[P_]:r.ALWAYS,[T_]:r.LESS,[dp]:r.LEQUAL,[A_]:r.EQUAL,[R_]:r.GEQUAL,[b_]:r.GREATER,[C_]:r.NOTEQUAL};function re(k,P){if(P.type===Zn&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===on||P.magFilter===Ca||P.magFilter===Eo||P.magFilter===Gi||P.minFilter===on||P.minFilter===Ca||P.minFilter===Eo||P.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(k,r.TEXTURE_WRAP_S,F[P.wrapS]),r.texParameteri(k,r.TEXTURE_WRAP_T,F[P.wrapT]),(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)&&r.texParameteri(k,r.TEXTURE_WRAP_R,F[P.wrapR]),r.texParameteri(k,r.TEXTURE_MAG_FILTER,j[P.magFilter]),r.texParameteri(k,r.TEXTURE_MIN_FILTER,j[P.minFilter]),P.compareFunction&&(r.texParameteri(k,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(k,r.TEXTURE_COMPARE_FUNC,Z[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===vn||P.minFilter!==Eo&&P.minFilter!==Gi||P.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(k,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Se(k,P){let ee=!1;k.__webglInit===void 0&&(k.__webglInit=!0,P.addEventListener("dispose",U));const pe=P.source;let he=m.get(pe);he===void 0&&(he={},m.set(pe,he));const ge=Y(P);if(ge!==k.__cacheKey){he[ge]===void 0&&(he[ge]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,ee=!0),he[ge].usedTimes++;const je=he[k.__cacheKey];je!==void 0&&(he[k.__cacheKey].usedTimes--,je.usedTimes===0&&z(P)),k.__cacheKey=ge,k.__webglTexture=he[ge].texture}return ee}function He(k,P,ee){let pe=r.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),P.isData3DTexture&&(pe=r.TEXTURE_3D);const he=Se(k,P),ge=P.source;t.bindTexture(pe,k.__webglTexture,r.TEXTURE0+ee);const je=n.get(ge);if(ge.version!==je.__version||he===!0){t.activeTexture(r.TEXTURE0+ee);const Re=Lt.getPrimaries(Lt.workingColorSpace),ke=P.colorSpace===ur?null:Lt.getPrimaries(P.colorSpace),ft=P.colorSpace===ur||Re===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Me=S(P.image,!1,i.maxTextureSize);Me=Pe(P,Me);const Oe=s.convert(P.format,P.colorSpace),wt=s.convert(P.type);let at=E(P.internalFormat,Oe,wt,P.colorSpace,P.isVideoTexture);re(pe,P);let Ge;const V=P.mipmaps,ue=P.isVideoTexture!==!0,Ne=je.__version===void 0||he===!0,H=ge.dataReady,_e=A(P,Me);if(P.isDepthTexture)at=w(P.format===Cs,P.type),Ne&&(ue?t.texStorage2D(r.TEXTURE_2D,1,at,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,at,Me.width,Me.height,0,Oe,wt,null));else if(P.isDataTexture)if(V.length>0){ue&&Ne&&t.texStorage2D(r.TEXTURE_2D,_e,at,V[0].width,V[0].height);for(let ce=0,fe=V.length;ce<fe;ce++)Ge=V[ce],ue?H&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Ge.width,Ge.height,Oe,wt,Ge.data):t.texImage2D(r.TEXTURE_2D,ce,at,Ge.width,Ge.height,0,Oe,wt,Ge.data);P.generateMipmaps=!1}else ue?(Ne&&t.texStorage2D(r.TEXTURE_2D,_e,at,Me.width,Me.height),H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,wt,Me.data)):t.texImage2D(r.TEXTURE_2D,0,at,Me.width,Me.height,0,Oe,wt,Me.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ue&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,at,V[0].width,V[0].height,Me.depth);for(let ce=0,fe=V.length;ce<fe;ce++)if(Ge=V[ce],P.format!==Dn)if(Oe!==null)if(ue){if(H)if(P.layerUpdates.size>0){const be=Wd(Ge.width,Ge.height,P.format,P.type);for(const it of P.layerUpdates){const dt=Ge.data.subarray(it*be/Ge.data.BYTES_PER_ELEMENT,(it+1)*be/Ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,it,Ge.width,Ge.height,1,Oe,dt,0,0)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Ge.width,Ge.height,Me.depth,Oe,Ge.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,at,Ge.width,Ge.height,Me.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?H&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Ge.width,Ge.height,Me.depth,Oe,wt,Ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ce,at,Ge.width,Ge.height,Me.depth,0,Oe,wt,Ge.data)}else{ue&&Ne&&t.texStorage2D(r.TEXTURE_2D,_e,at,V[0].width,V[0].height);for(let ce=0,fe=V.length;ce<fe;ce++)Ge=V[ce],P.format!==Dn?Oe!==null?ue?H&&t.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,Ge.width,Ge.height,Oe,Ge.data):t.compressedTexImage2D(r.TEXTURE_2D,ce,at,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?H&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Ge.width,Ge.height,Oe,wt,Ge.data):t.texImage2D(r.TEXTURE_2D,ce,at,Ge.width,Ge.height,0,Oe,wt,Ge.data)}else if(P.isDataArrayTexture)if(ue){if(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,at,Me.width,Me.height,Me.depth),H)if(P.layerUpdates.size>0){const ce=Wd(Me.width,Me.height,P.format,P.type);for(const fe of P.layerUpdates){const be=Me.data.subarray(fe*ce/Me.data.BYTES_PER_ELEMENT,(fe+1)*ce/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,Oe,wt,be)}P.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,wt,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,at,Me.width,Me.height,Me.depth,0,Oe,wt,Me.data);else if(P.isData3DTexture)ue?(Ne&&t.texStorage3D(r.TEXTURE_3D,_e,at,Me.width,Me.height,Me.depth),H&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,wt,Me.data)):t.texImage3D(r.TEXTURE_3D,0,at,Me.width,Me.height,Me.depth,0,Oe,wt,Me.data);else if(P.isFramebufferTexture){if(Ne)if(ue)t.texStorage2D(r.TEXTURE_2D,_e,at,Me.width,Me.height);else{let ce=Me.width,fe=Me.height;for(let be=0;be<_e;be++)t.texImage2D(r.TEXTURE_2D,be,at,ce,fe,0,Oe,wt,null),ce>>=1,fe>>=1}}else if(V.length>0){if(ue&&Ne){const ce=Ve(V[0]);t.texStorage2D(r.TEXTURE_2D,_e,at,ce.width,ce.height)}for(let ce=0,fe=V.length;ce<fe;ce++)Ge=V[ce],ue?H&&t.texSubImage2D(r.TEXTURE_2D,ce,0,0,Oe,wt,Ge):t.texImage2D(r.TEXTURE_2D,ce,at,Oe,wt,Ge);P.generateMipmaps=!1}else if(ue){if(Ne){const ce=Ve(Me);t.texStorage2D(r.TEXTURE_2D,_e,at,ce.width,ce.height)}H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,wt,Me)}else t.texImage2D(r.TEXTURE_2D,0,at,Oe,wt,Me);x(P)&&_(pe),je.__version=ge.version,P.onUpdate&&P.onUpdate(P)}k.__version=P.version}function ie(k,P,ee){if(P.image.length!==6)return;const pe=Se(k,P),he=P.source;t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+ee);const ge=n.get(he);if(he.version!==ge.__version||pe===!0){t.activeTexture(r.TEXTURE0+ee);const je=Lt.getPrimaries(Lt.workingColorSpace),Re=P.colorSpace===ur?null:Lt.getPrimaries(P.colorSpace),ke=P.colorSpace===ur||je===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const ft=P.isCompressedTexture||P.image[0].isCompressedTexture,Me=P.image[0]&&P.image[0].isDataTexture,Oe=[];for(let fe=0;fe<6;fe++)!ft&&!Me?Oe[fe]=S(P.image[fe],!0,i.maxCubemapSize):Oe[fe]=Me?P.image[fe].image:P.image[fe],Oe[fe]=Pe(P,Oe[fe]);const wt=Oe[0],at=s.convert(P.format,P.colorSpace),Ge=s.convert(P.type),V=E(P.internalFormat,at,Ge,P.colorSpace),ue=P.isVideoTexture!==!0,Ne=ge.__version===void 0||pe===!0,H=he.dataReady;let _e=A(P,wt);re(r.TEXTURE_CUBE_MAP,P);let ce;if(ft){ue&&Ne&&t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,V,wt.width,wt.height);for(let fe=0;fe<6;fe++){ce=Oe[fe].mipmaps;for(let be=0;be<ce.length;be++){const it=ce[be];P.format!==Dn?at!==null?ue?H&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,it.width,it.height,at,it.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,V,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,it.width,it.height,at,Ge,it.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,V,it.width,it.height,0,at,Ge,it.data)}}}else{if(ce=P.mipmaps,ue&&Ne){ce.length>0&&_e++;const fe=Ve(Oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,V,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){ue?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe[fe].width,Oe[fe].height,at,Ge,Oe[fe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,V,Oe[fe].width,Oe[fe].height,0,at,Ge,Oe[fe].data);for(let be=0;be<ce.length;be++){const dt=ce[be].image[fe].image;ue?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,dt.width,dt.height,at,Ge,dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,V,dt.width,dt.height,0,at,Ge,dt.data)}}else{ue?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,at,Ge,Oe[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,V,at,Ge,Oe[fe]);for(let be=0;be<ce.length;be++){const it=ce[be];ue?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,at,Ge,it.image[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,V,at,Ge,it.image[fe])}}}x(P)&&_(r.TEXTURE_CUBE_MAP),ge.__version=he.version,P.onUpdate&&P.onUpdate(P)}k.__version=P.version}function ve(k,P,ee,pe,he,ge){const je=s.convert(ee.format,ee.colorSpace),Re=s.convert(ee.type),ke=E(ee.internalFormat,je,Re,ee.colorSpace);if(!n.get(P).__hasExternalTextures){const Me=Math.max(1,P.width>>ge),Oe=Math.max(1,P.height>>ge);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?t.texImage3D(he,ge,ke,Me,Oe,P.depth,0,je,Re,null):t.texImage2D(he,ge,ke,Me,Oe,0,je,Re,null)}t.bindFramebuffer(r.FRAMEBUFFER,k),de(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,he,n.get(ee).__webglTexture,0,Le(P)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,he,n.get(ee).__webglTexture,ge),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(k,P,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,k),P.depthBuffer){const pe=P.depthTexture,he=pe&&pe.isDepthTexture?pe.type:null,ge=w(P.stencilBuffer,he),je=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=Le(P);de(P)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,ge,P.width,P.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,ge,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,ge,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,je,r.RENDERBUFFER,k)}else{const pe=P.textures;for(let he=0;he<pe.length;he++){const ge=pe[he],je=s.convert(ge.format,ge.colorSpace),Re=s.convert(ge.type),ke=E(ge.internalFormat,je,Re,ge.colorSpace),ft=Le(P);ee&&de(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,ke,P.width,P.height):de(P)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,ke,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,ke,P.width,P.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(k,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,k),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),K(P.depthTexture,0);const pe=n.get(P.depthTexture).__webglTexture,he=Le(P);if(P.depthTexture.format===Ms)de(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,pe,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,pe,0);else if(P.depthTexture.format===Cs)de(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,pe,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function et(k){const P=n.get(k),ee=k.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==k.depthTexture){const pe=k.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),pe){const he=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,pe.removeEventListener("dispose",he)};pe.addEventListener("dispose",he),P.__depthDisposeCallback=he}P.__boundDepthTexture=pe}if(k.depthTexture&&!P.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");we(P.__webglFramebuffer,k)}else if(ee){P.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer[pe]),P.__webglDepthbuffer[pe]===void 0)P.__webglDepthbuffer[pe]=r.createRenderbuffer(),Ae(P.__webglDepthbuffer[pe],k,!1);else{const he=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=P.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,ge)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=r.createRenderbuffer(),Ae(P.__webglDepthbuffer,k,!1);else{const pe=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=P.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,he)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(k,P,ee){const pe=n.get(k);P!==void 0&&ve(pe.__webglFramebuffer,k,k.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&et(k)}function tt(k){const P=k.texture,ee=n.get(k),pe=n.get(P);k.addEventListener("dispose",C);const he=k.textures,ge=k.isWebGLCubeRenderTarget===!0,je=he.length>1;if(je||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=P.version,l.memory.textures++),ge){ee.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(P.mipmaps&&P.mipmaps.length>0){ee.__webglFramebuffer[Re]=[];for(let ke=0;ke<P.mipmaps.length;ke++)ee.__webglFramebuffer[Re][ke]=r.createFramebuffer()}else ee.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Re=0;Re<P.mipmaps.length;Re++)ee.__webglFramebuffer[Re]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(je)for(let Re=0,ke=he.length;Re<ke;Re++){const ft=n.get(he[Re]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),l.memory.textures++)}if(k.samples>0&&de(k)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Re=0;Re<he.length;Re++){const ke=he[Re];ee.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[Re]);const ft=s.convert(ke.format,ke.colorSpace),Me=s.convert(ke.type),Oe=E(ke.internalFormat,ft,Me,ke.colorSpace,k.isXRRenderTarget===!0),wt=Le(k);r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,Oe,k.width,k.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,ee.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),k.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Ae(ee.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ge){t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),re(r.TEXTURE_CUBE_MAP,P);for(let Re=0;Re<6;Re++)if(P.mipmaps&&P.mipmaps.length>0)for(let ke=0;ke<P.mipmaps.length;ke++)ve(ee.__webglFramebuffer[Re][ke],k,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ke);else ve(ee.__webglFramebuffer[Re],k,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(P)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Re=0,ke=he.length;Re<ke;Re++){const ft=he[Re],Me=n.get(ft);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),re(r.TEXTURE_2D,ft),ve(ee.__webglFramebuffer,k,ft,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),x(ft)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Re=r.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Re=k.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,pe.__webglTexture),re(Re,P),P.mipmaps&&P.mipmaps.length>0)for(let ke=0;ke<P.mipmaps.length;ke++)ve(ee.__webglFramebuffer[ke],k,P,r.COLOR_ATTACHMENT0,Re,ke);else ve(ee.__webglFramebuffer,k,P,r.COLOR_ATTACHMENT0,Re,0);x(P)&&_(Re),t.unbindTexture()}k.depthBuffer&&et(k)}function ct(k){const P=k.textures;for(let ee=0,pe=P.length;ee<pe;ee++){const he=P[ee];if(x(he)){const ge=k.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,je=n.get(he).__webglTexture;t.bindTexture(ge,je),_(ge),t.unbindTexture()}}}const N=[],ye=[];function xe(k){if(k.samples>0){if(de(k)===!1){const P=k.textures,ee=k.width,pe=k.height;let he=r.COLOR_BUFFER_BIT;const ge=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,je=n.get(k),Re=P.length>1;if(Re)for(let ke=0;ke<P.length;ke++)t.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let ke=0;ke<P.length;ke++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,je.__webglColorRenderbuffer[ke]);const ft=n.get(P[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ft,0)}r.blitFramebuffer(0,0,ee,pe,0,0,ee,pe,he,r.NEAREST),u===!0&&(N.length=0,ye.length=0,N.push(r.COLOR_ATTACHMENT0+ke),k.depthBuffer&&k.resolveDepthBuffer===!1&&(N.push(ge),ye.push(ge),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ye)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let ke=0;ke<P.length;ke++){t.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,je.__webglColorRenderbuffer[ke]);const ft=n.get(P[ke]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,ft,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&u){const P=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[P])}}}function Le(k){return Math.min(i.maxSamples,k.samples)}function de(k){const P=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Qe(k){const P=l.render.frame;f.get(k)!==P&&(f.set(k,P),k.update())}function Pe(k,P){const ee=k.colorSpace,pe=k.format,he=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||ee!==yr&&ee!==ur&&(Lt.getTransfer(ee)===Bt?(pe!==Dn||he!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),P}function Ve(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(h.width=k.naturalWidth||k.width,h.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(h.width=k.displayWidth,h.height=k.displayHeight):(h.width=k.width,h.height=k.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=ae,this.setTexture3D=Q,this.setTextureCube=me,this.rebindTextures=ot,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=de}function X_(r,e){function t(n,i=ur){let s;const l=Lt.getTransfer(i);if(n===bi)return r.UNSIGNED_BYTE;if(n===$u)return r.UNSIGNED_SHORT_4_4_4_4;if(n===eh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===sp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ip)return r.BYTE;if(n===rp)return r.SHORT;if(n===Lo)return r.UNSIGNED_SHORT;if(n===Qu)return r.INT;if(n===vr)return r.UNSIGNED_INT;if(n===Zn)return r.FLOAT;if(n===Bo)return r.HALF_FLOAT;if(n===op)return r.ALPHA;if(n===ap)return r.RGB;if(n===Dn)return r.RGBA;if(n===lp)return r.LUMINANCE;if(n===cp)return r.LUMINANCE_ALPHA;if(n===Ms)return r.DEPTH_COMPONENT;if(n===Cs)return r.DEPTH_STENCIL;if(n===th)return r.RED;if(n===al)return r.RED_INTEGER;if(n===up)return r.RG;if(n===nh)return r.RG_INTEGER;if(n===ih)return r.RGBA_INTEGER;if(n===Ra||n===Pa||n===Ia||n===La)if(l===Bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vu||n===_u||n===yu||n===xu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_u)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Su||n===Mu||n===wu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Su||n===Mu)return l===Bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eu||n===Tu||n===Au||n===bu||n===Cu||n===Ru||n===Pu||n===Iu||n===Lu||n===Du||n===Uu||n===Nu||n===Ou||n===Fu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Eu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Au)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ru)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Iu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Du)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ou)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fu)return l===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Da||n===zu||n===Bu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Da)return l===Bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hp||n===ku||n===Hu||n===Vu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Da)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ku)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Y_ extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bo extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sA={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,l=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const S of e.hand.values()){const x=t.getJointPose(S,n),_=this._getHandJoint(h,S);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=f.position.distanceTo(p.position),g=.02,y=.005;h.inputState.pinching&&m>g+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(sA)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const oA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Yt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:oA,fragmentShader:aA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new ko(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cA extends Ri{constructor(e,t){super();const n=this;let i=null,s=1,l=null,c="local-floor",u=1,h=null,f=null,p=null,m=null,g=null,y=null;const S=new lA,x=t.getContextAttributes();let _=null,E=null;const w=[],A=[],U=new le;let C=null;const L=new Kt;L.layers.enable(1),L.viewport=new Et;const z=new Kt;z.layers.enable(2),z.viewport=new Et;const R=[L,z],b=new Y_;b.layers.enable(1),b.layers.enable(2);let O=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ve=w[ie];return ve===void 0&&(ve=new od,w[ie]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ie){let ve=w[ie];return ve===void 0&&(ve=new od,w[ie]=ve),ve.getGripSpace()},this.getHand=function(ie){let ve=w[ie];return ve===void 0&&(ve=new od,w[ie]=ve),ve.getHandSpace()};function Y(ie){const ve=A.indexOf(ie.inputSource);if(ve===-1)return;const Ae=w[ve];Ae!==void 0&&(Ae.update(ie.inputSource,ie.frame,h||l),Ae.dispatchEvent({type:ie.type,data:ie.inputSource}))}function K(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",ae);for(let ie=0;ie<w.length;ie++){const ve=A[ie];ve!==null&&(A[ie]=null,w[ie].disconnect(ve))}O=null,q=null,S.reset(),e.setRenderTarget(_),g=null,m=null,p=null,i=null,E=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){c=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",K),i.addEventListener("inputsourceschange",ae),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),i.renderState.layers===void 0){const ve={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Ci(g.framebufferWidth,g.framebufferHeight,{format:Dn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ve=null,Ae=null,we=null;x.depth&&(we=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=x.stencil?Cs:Ms,Ae=x.stencil?bs:vr);const et={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};p=new XRWebGLBinding(i,t),m=p.createProjectionLayer(et),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new Ci(m.textureWidth,m.textureHeight,{format:Dn,type:bi,depthTexture:new yp(m.textureWidth,m.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,l=await i.requestReferenceSpace(c),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ae(ie){for(let ve=0;ve<ie.removed.length;ve++){const Ae=ie.removed[ve],we=A.indexOf(Ae);we>=0&&(A[we]=null,w[we].disconnect(Ae))}for(let ve=0;ve<ie.added.length;ve++){const Ae=ie.added[ve];let we=A.indexOf(Ae);if(we===-1){for(let ot=0;ot<w.length;ot++)if(ot>=A.length){A.push(Ae),we=ot;break}else if(A[ot]===null){A[ot]=Ae,we=ot;break}if(we===-1)break}const et=w[we];et&&et.connect(Ae)}}const Q=new D,me=new D;function F(ie,ve,Ae){Q.setFromMatrixPosition(ve.matrixWorld),me.setFromMatrixPosition(Ae.matrixWorld);const we=Q.distanceTo(me),et=ve.projectionMatrix.elements,ot=Ae.projectionMatrix.elements,tt=et[14]/(et[10]-1),ct=et[14]/(et[10]+1),N=(et[9]+1)/et[5],ye=(et[9]-1)/et[5],xe=(et[8]-1)/et[0],Le=(ot[8]+1)/ot[0],de=tt*xe,Qe=tt*Le,Pe=we/(-xe+Le),Ve=Pe*-xe;if(ve.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ve),ie.translateZ(Pe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),et[10]===-1)ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const k=tt+Pe,P=ct+Pe,ee=de-Ve,pe=Qe+(we-Ve),he=N*ct/P*k,ge=ye*ct/P*k;ie.projectionMatrix.makePerspective(ee,pe,he,ge,k,P),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function j(ie,ve){ve===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ve.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;let ve=ie.near,Ae=ie.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(Ae=S.depthFar)),b.near=z.near=L.near=ve,b.far=z.far=L.far=Ae,(O!==b.near||q!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),O=b.near,q=b.far);const we=ie.parent,et=b.cameras;j(b,we);for(let ot=0;ot<et.length;ot++)j(et[ot],we);et.length===2?F(b,L,z):b.projectionMatrix.copy(L.projectionMatrix),Z(ie,b,we)};function Z(ie,ve,Ae){Ae===null?ie.matrix.copy(ve.matrixWorld):(ie.matrix.copy(Ae.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ve.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Do*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(ie){u=ie,m!==null&&(m.fixedFoveation=ie),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(b)};let re=null;function Se(ie,ve){if(f=ve.getViewerPose(h||l),y=ve,f!==null){const Ae=f.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let we=!1;Ae.length!==b.cameras.length&&(b.cameras.length=0,we=!0);for(let ot=0;ot<Ae.length;ot++){const tt=Ae[ot];let ct=null;if(g!==null)ct=g.getViewport(tt);else{const ye=p.getViewSubImage(m,tt);ct=ye.viewport,ot===0&&(e.setRenderTargetTextures(E,ye.colorTexture,m.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(E))}let N=R[ot];N===void 0&&(N=new Kt,N.layers.enable(ot),N.viewport=new Et,R[ot]=N),N.matrix.fromArray(tt.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(tt.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(ct.x,ct.y,ct.width,ct.height),ot===0&&(b.matrix.copy(N.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),we===!0&&b.cameras.push(N)}const et=i.enabledFeatures;if(et&&et.includes("depth-sensing")){const ot=p.getDepthInformation(Ae[0]);ot&&ot.isValid&&ot.texture&&S.init(e,ot,i.renderState)}}for(let Ae=0;Ae<w.length;Ae++){const we=A[Ae],et=w[Ae];we!==null&&et!==void 0&&et.update(we,ve,h||l)}re&&re(ie,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),y=null}const He=new k_;He.setAnimationLoop(Se),this.setAnimationLoop=function(ie){re=ie},this.dispose=function(){}}}const rs=new oi,uA=new st;function hA(r,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,F_(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function i(x,_,E,w,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),p(x,_)):_.isMeshPhongMaterial?(s(x,_),f(x,_)):_.isMeshStandardMaterial?(s(x,_),m(x,_),_.isMeshPhysicalMaterial&&g(x,_,A)):_.isMeshMatcapMaterial?(s(x,_),y(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),S(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(l(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?u(x,_,E,w):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Hn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Hn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const E=e.get(_),w=E.envMap,A=E.envMapRotation;w&&(x.envMap.value=w,rs.copy(A),rs.x*=-1,rs.y*=-1,rs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),x.envMapRotation.value.setFromMatrix4(uA.makeRotationFromEuler(rs)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,E,w){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*E,x.scale.value=w*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function g(x,_,E){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Hn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,_){_.matcap&&(x.matcap.value=_.matcap)}function S(x,_){const E=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fA(r,e,t,n){let i={},s={},l=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,w){const A=w.program;n.uniformBlockBinding(E,A)}function h(E,w){let A=i[E.id];A===void 0&&(y(E),A=f(E),i[E.id]=A,E.addEventListener("dispose",x));const U=w.program;n.updateUBOMapping(E,U);const C=e.render.frame;s[E.id]!==C&&(m(E),s[E.id]=C)}function f(E){const w=p();E.__bindingPointIndex=w;const A=r.createBuffer(),U=E.__size,C=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,U,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,A),A}function p(){for(let E=0;E<c;E++)if(l.indexOf(E)===-1)return l.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const w=i[E.id],A=E.uniforms,U=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let C=0,L=A.length;C<L;C++){const z=Array.isArray(A[C])?A[C]:[A[C]];for(let R=0,b=z.length;R<b;R++){const O=z[R];if(g(O,C,R,U)===!0){const q=O.__offset,Y=Array.isArray(O.value)?O.value:[O.value];let K=0;for(let ae=0;ae<Y.length;ae++){const Q=Y[ae],me=S(Q);typeof Q=="number"||typeof Q=="boolean"?(O.__data[0]=Q,r.bufferSubData(r.UNIFORM_BUFFER,q+K,O.__data)):Q.isMatrix3?(O.__data[0]=Q.elements[0],O.__data[1]=Q.elements[1],O.__data[2]=Q.elements[2],O.__data[3]=0,O.__data[4]=Q.elements[3],O.__data[5]=Q.elements[4],O.__data[6]=Q.elements[5],O.__data[7]=0,O.__data[8]=Q.elements[6],O.__data[9]=Q.elements[7],O.__data[10]=Q.elements[8],O.__data[11]=0):(Q.toArray(O.__data,K),K+=me.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(E,w,A,U){const C=E.value,L=w+"_"+A;if(U[L]===void 0)return typeof C=="number"||typeof C=="boolean"?U[L]=C:U[L]=C.clone(),!0;{const z=U[L];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return U[L]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function y(E){const w=E.uniforms;let A=0;const U=16;for(let L=0,z=w.length;L<z;L++){const R=Array.isArray(w[L])?w[L]:[w[L]];for(let b=0,O=R.length;b<O;b++){const q=R[b],Y=Array.isArray(q.value)?q.value:[q.value];for(let K=0,ae=Y.length;K<ae;K++){const Q=Y[K],me=S(Q),F=A%U,j=F%me.boundary,Z=F+j;A+=j,Z!==0&&U-Z<me.storage&&(A+=U-Z),q.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=me.storage}}}const C=A%U;return C>0&&(A+=U-C),E.__size=A,E.__cache={},this}function S(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function x(E){const w=E.target;w.removeEventListener("dispose",x);const A=l.indexOf(w.__bindingPointIndex);l.splice(A,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(const E in i)r.deleteBuffer(i[E]);l=[],i={},s={}}return{bind:u,update:h,dispose:_}}class q_{constructor(e={}){const{canvas:t=D_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=l;const g=new Uint32Array(4),y=new Int32Array(4);let S=null,x=null;const _=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gi,this.toneMapping=Xi,this.toneMappingExposure=1;const w=this;let A=!1,U=0,C=0,L=null,z=-1,R=null;const b=new Et,O=new Et;let q=null;const Y=new Be(0);let K=0,ae=t.width,Q=t.height,me=1,F=null,j=null;const Z=new Et(0,0,ae,Q),re=new Et(0,0,ae,Q);let Se=!1;const He=new hl;let ie=!1,ve=!1;const Ae=new st,we=new D,et=new Et,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ct(){return L===null?me:1}let N=n;function ye(I,W){return t.getContext(I,W)}try{const I={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fo}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",be,!1),N===null){const W="webgl2";if(N=ye(W,I),N===null)throw ye(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let xe,Le,de,Qe,Pe,Ve,k,P,ee,pe,he,ge,je,Re,ke,ft,Me,Oe,wt,at,Ge,V,ue,Ne;function H(){xe=new yE(N),xe.init(),V=new X_(N,xe),Le=new dE(N,xe,e,V),de=new QT(N),Qe=new ME(N),Pe=new kT,Ve=new rA(N,xe,de,Pe,Le,V,Qe),k=new mE(w),P=new _E(w),ee=new RM(N),ue=new hE(N,ee),pe=new xE(N,ee,Qe,ue),he=new EE(N,pe,ee,Qe),wt=new wE(N,Le,Ve),ft=new pE(Pe),ge=new BT(w,k,P,xe,Le,ue,ft),je=new hA(w,Pe),Re=new VT,ke=new ZT(xe),Oe=new uE(w,k,P,de,he,m,u),Me=new KT(w,he,Le),Ne=new fA(N,Qe,Le,de),at=new fE(N,xe,Qe),Ge=new SE(N,xe,Qe),Qe.programs=ge.programs,w.capabilities=Le,w.extensions=xe,w.properties=Pe,w.renderLists=Re,w.shadowMap=Me,w.state=de,w.info=Qe}H();const _e=new cA(w,N);this.xr=_e,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const I=xe.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=xe.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(I){I!==void 0&&(me=I,this.setSize(ae,Q,!1))},this.getSize=function(I){return I.set(ae,Q)},this.setSize=function(I,W,te=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=I,Q=W,t.width=Math.floor(I*me),t.height=Math.floor(W*me),te===!0&&(t.style.width=I+"px",t.style.height=W+"px"),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(ae*me,Q*me).floor()},this.setDrawingBufferSize=function(I,W,te){ae=I,Q=W,me=te,t.width=Math.floor(I*te),t.height=Math.floor(W*te),this.setViewport(0,0,I,W)},this.getCurrentViewport=function(I){return I.copy(b)},this.getViewport=function(I){return I.copy(Z)},this.setViewport=function(I,W,te,ne){I.isVector4?Z.set(I.x,I.y,I.z,I.w):Z.set(I,W,te,ne),de.viewport(b.copy(Z).multiplyScalar(me).round())},this.getScissor=function(I){return I.copy(re)},this.setScissor=function(I,W,te,ne){I.isVector4?re.set(I.x,I.y,I.z,I.w):re.set(I,W,te,ne),de.scissor(O.copy(re).multiplyScalar(me).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(I){de.setScissorTest(Se=I)},this.setOpaqueSort=function(I){F=I},this.setTransparentSort=function(I){j=I},this.getClearColor=function(I){return I.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(I=!0,W=!0,te=!0){let ne=0;if(I){let J=!1;if(L!==null){const Te=L.texture.format;J=Te===ih||Te===nh||Te===al}if(J){const Te=L.texture.type,ze=Te===bi||Te===vr||Te===Lo||Te===bs||Te===$u||Te===eh,Ye=Oe.getClearColor(),We=Oe.getClearAlpha(),nt=Ye.r,lt=Ye.g,Ze=Ye.b;ze?(g[0]=nt,g[1]=lt,g[2]=Ze,g[3]=We,N.clearBufferuiv(N.COLOR,0,g)):(y[0]=nt,y[1]=lt,y[2]=Ze,y[3]=We,N.clearBufferiv(N.COLOR,0,y))}else ne|=N.COLOR_BUFFER_BIT}W&&(ne|=N.DEPTH_BUFFER_BIT),te&&(ne|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Re.dispose(),ke.dispose(),Pe.dispose(),k.dispose(),P.dispose(),he.dispose(),ue.dispose(),Ne.dispose(),ge.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",hn),_e.removeEventListener("sessionend",_l),ji.stop()};function ce(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const I=Qe.autoReset,W=Me.enabled,te=Me.autoUpdate,ne=Me.needsUpdate,J=Me.type;H(),Qe.autoReset=I,Me.enabled=W,Me.autoUpdate=te,Me.needsUpdate=ne,Me.type=J}function be(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function it(I){const W=I.target;W.removeEventListener("dispose",it),dt(W)}function dt(I){Tt(I),Pe.remove(I)}function Tt(I){const W=Pe.get(I).programs;W!==void 0&&(W.forEach(function(te){ge.releaseProgram(te)}),I.isShaderMaterial&&ge.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,te,ne,J,Te){W===null&&(W=ot);const ze=J.isMesh&&J.matrixWorld.determinant()<0,Ye=Ch(I,W,te,ne,J);de.setMaterial(ne,ze);let We=te.index,nt=1;if(ne.wireframe===!0){if(We=pe.getWireframeAttribute(te),We===void 0)return;nt=2}const lt=te.drawRange,Ze=te.attributes.position;let Ct=lt.start*nt,Ot=(lt.start+lt.count)*nt;Te!==null&&(Ct=Math.max(Ct,Te.start*nt),Ot=Math.min(Ot,(Te.start+Te.count)*nt)),We!==null?(Ct=Math.max(Ct,0),Ot=Math.min(Ot,We.count)):Ze!=null&&(Ct=Math.max(Ct,0),Ot=Math.min(Ot,Ze.count));const Dt=Ot-Ct;if(Dt<0||Dt===1/0)return;ue.setup(J,ne,Ye,te,We);let qt,$e=at;if(We!==null&&(qt=ee.get(We),$e=Ge,$e.setIndex(qt)),J.isMesh)ne.wireframe===!0?(de.setLineWidth(ne.wireframeLinewidth*ct()),$e.setMode(N.LINES)):$e.setMode(N.TRIANGLES);else if(J.isLine){let Ce=ne.linewidth;Ce===void 0&&(Ce=1),de.setLineWidth(Ce*ct()),J.isLineSegments?$e.setMode(N.LINES):J.isLineLoop?$e.setMode(N.LINE_LOOP):$e.setMode(N.LINE_STRIP)}else J.isPoints?$e.setMode(N.POINTS):J.isSprite&&$e.setMode(N.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)$e.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))$e.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Ce=J._multiDrawStarts,Ft=J._multiDrawCounts,ut=J._multiDrawCount,zt=We?ee.get(We).bytesPerElement:1,Gn=Pe.get(ne).currentProgram.getUniforms();for(let tn=0;tn<ut;tn++)Gn.setValue(N,"_gl_DrawID",tn),$e.render(Ce[tn]/zt,Ft[tn])}else if(J.isInstancedMesh)$e.renderInstances(Ct,Dt,J.count);else if(te.isInstancedBufferGeometry){const Ce=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ft=Math.min(te.instanceCount,Ce);$e.renderInstances(Ct,Dt,Ft)}else $e.render(Ct,Dt)};function Ht(I,W,te){I.transparent===!0&&I.side===Hi&&I.forceSinglePass===!1?(I.side=Hn,I.needsUpdate=!0,Fs(I,W,te),I.side=mr,I.needsUpdate=!0,Fs(I,W,te),I.side=Hi):Fs(I,W,te)}this.compile=function(I,W,te=null){te===null&&(te=I),x=ke.get(te),x.init(W),E.push(x),te.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),I!==te&&I.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const ne=new Set;return I.traverse(function(J){const Te=J.material;if(Te)if(Array.isArray(Te))for(let ze=0;ze<Te.length;ze++){const Ye=Te[ze];Ht(Ye,te,J),ne.add(Ye)}else Ht(Te,te,J),ne.add(Te)}),E.pop(),x=null,ne},this.compileAsync=function(I,W,te=null){const ne=this.compile(I,W,te);return new Promise(J=>{function Te(){if(ne.forEach(function(ze){Pe.get(ze).currentProgram.isReady()&&ne.delete(ze)}),ne.size===0){J(I);return}setTimeout(Te,10)}xe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let St=null;function un(I){St&&St(I)}function hn(){ji.stop()}function _l(){ji.start()}const ji=new k_;ji.setAnimationLoop(un),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(I){St=I,_e.setAnimationLoop(I),I===null?ji.stop():ji.start()},_e.addEventListener("sessionstart",hn),_e.addEventListener("sessionend",_l),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(W),W=_e.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,W,L),x=ke.get(I,E.length),x.init(W),E.push(x),Ae.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),He.setFromProjectionMatrix(Ae),ve=this.localClippingEnabled,ie=ft.init(this.clippingPlanes,ve),S=Re.get(I,_.length),S.init(),_.push(S),_e.enabled===!0&&_e.isPresenting===!0){const Te=w.xr.getDepthSensingMesh();Te!==null&&Go(Te,W,-1/0,w.sortObjects)}Go(I,W,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(F,j),tt=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,tt&&Oe.addToRenderList(S,I),this.info.render.frame++,ie===!0&&ft.beginShadows();const te=x.state.shadowsArray;Me.render(te,I,W),ie===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=S.opaque,J=S.transmissive;if(x.setupLights(),W.isArrayCamera){const Te=W.cameras;if(J.length>0)for(let ze=0,Ye=Te.length;ze<Ye;ze++){const We=Te[ze];Ns(ne,J,I,We)}tt&&Oe.render(I);for(let ze=0,Ye=Te.length;ze<Ye;ze++){const We=Te[ze];Wo(S,I,We,We.viewport)}}else J.length>0&&Ns(ne,J,I,W),tt&&Oe.render(I),Wo(S,I,W);L!==null&&(Ve.updateMultisampleRenderTarget(L),Ve.updateRenderTargetMipmap(L)),I.isScene===!0&&I.onAfterRender(w,I,W),ue.resetDefaultState(),z=-1,R=null,E.pop(),E.length>0?(x=E[E.length-1],ie===!0&&ft.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,_.pop(),_.length>0?S=_[_.length-1]:S=null};function Go(I,W,te,ne){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)te=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||He.intersectsSprite(I)){ne&&et.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Ae);const ze=he.update(I),Ye=I.material;Ye.visible&&S.push(I,ze,Ye,te,et.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||He.intersectsObject(I))){const ze=he.update(I),Ye=I.material;if(ne&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),et.copy(I.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),et.copy(ze.boundingSphere.center)),et.applyMatrix4(I.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ye)){const We=ze.groups;for(let nt=0,lt=We.length;nt<lt;nt++){const Ze=We[nt],Ct=Ye[Ze.materialIndex];Ct&&Ct.visible&&S.push(I,ze,Ct,te,et.z,Ze)}}else Ye.visible&&S.push(I,ze,Ye,te,et.z,null)}}const Te=I.children;for(let ze=0,Ye=Te.length;ze<Ye;ze++)Go(Te[ze],W,te,ne)}function Wo(I,W,te,ne){const J=I.opaque,Te=I.transmissive,ze=I.transparent;x.setupLightsView(te),ie===!0&&ft.setGlobalState(w.clippingPlanes,te),ne&&de.viewport(b.copy(ne)),J.length>0&&Os(J,W,te),Te.length>0&&Os(Te,W,te),ze.length>0&&Os(ze,W,te),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ns(I,W,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ne.id]===void 0&&(x.state.transmissionRenderTarget[ne.id]=new Ci(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Bo:bi,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Te=x.state.transmissionRenderTarget[ne.id],ze=ne.viewport||b;Te.setSize(ze.z,ze.w);const Ye=w.getRenderTarget();w.setRenderTarget(Te),w.getClearColor(Y),K=w.getClearAlpha(),K<1&&w.setClearColor(16777215,.5),w.clear(),tt&&Oe.render(te);const We=w.toneMapping;w.toneMapping=Xi;const nt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),x.setupLightsView(ne),ie===!0&&ft.setGlobalState(w.clippingPlanes,ne),Os(I,te,ne),Ve.updateMultisampleRenderTarget(Te),Ve.updateRenderTargetMipmap(Te),xe.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Ze=0,Ct=W.length;Ze<Ct;Ze++){const Ot=W[Ze],Dt=Ot.object,qt=Ot.geometry,$e=Ot.material,Ce=Ot.group;if($e.side===Hi&&Dt.layers.test(ne.layers)){const Ft=$e.side;$e.side=Hn,$e.needsUpdate=!0,xr(Dt,te,ne,qt,$e,Ce),$e.side=Ft,$e.needsUpdate=!0,lt=!0}}lt===!0&&(Ve.updateMultisampleRenderTarget(Te),Ve.updateRenderTargetMipmap(Te))}w.setRenderTarget(Ye),w.setClearColor(Y,K),nt!==void 0&&(ne.viewport=nt),w.toneMapping=We}function Os(I,W,te){const ne=W.isScene===!0?W.overrideMaterial:null;for(let J=0,Te=I.length;J<Te;J++){const ze=I[J],Ye=ze.object,We=ze.geometry,nt=ne===null?ze.material:ne,lt=ze.group;Ye.layers.test(te.layers)&&xr(Ye,W,te,We,nt,lt)}}function xr(I,W,te,ne,J,Te){I.onBeforeRender(w,W,te,ne,J,Te),I.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),J.onBeforeRender(w,W,te,ne,I,Te),J.transparent===!0&&J.side===Hi&&J.forceSinglePass===!1?(J.side=Hn,J.needsUpdate=!0,w.renderBufferDirect(te,W,ne,J,I,Te),J.side=mr,J.needsUpdate=!0,w.renderBufferDirect(te,W,ne,J,I,Te),J.side=Hi):w.renderBufferDirect(te,W,ne,J,I,Te),I.onAfterRender(w,W,te,ne,J,Te)}function Fs(I,W,te){W.isScene!==!0&&(W=ot);const ne=Pe.get(I),J=x.state.lights,Te=x.state.shadowsArray,ze=J.state.version,Ye=ge.getParameters(I,J.state,Te,W,te),We=ge.getProgramCacheKey(Ye);let nt=ne.programs;ne.environment=I.isMeshStandardMaterial?W.environment:null,ne.fog=W.fog,ne.envMap=(I.isMeshStandardMaterial?P:k).get(I.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,nt===void 0&&(I.addEventListener("dispose",it),nt=new Map,ne.programs=nt);let lt=nt.get(We);if(lt!==void 0){if(ne.currentProgram===lt&&ne.lightsStateVersion===ze)return xl(I,Ye),lt}else Ye.uniforms=ge.getUniforms(I),I.onBeforeCompile(Ye,w),lt=ge.acquireProgram(Ye,We),nt.set(We,lt),ne.uniforms=Ye.uniforms;const Ze=ne.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ze.clippingPlanes=ft.uniform),xl(I,Ye),ne.needsLights=Ph(I),ne.lightsStateVersion=ze,ne.needsLights&&(Ze.ambientLightColor.value=J.state.ambient,Ze.lightProbe.value=J.state.probe,Ze.directionalLights.value=J.state.directional,Ze.directionalLightShadows.value=J.state.directionalShadow,Ze.spotLights.value=J.state.spot,Ze.spotLightShadows.value=J.state.spotShadow,Ze.rectAreaLights.value=J.state.rectArea,Ze.ltc_1.value=J.state.rectAreaLTC1,Ze.ltc_2.value=J.state.rectAreaLTC2,Ze.pointLights.value=J.state.point,Ze.pointLightShadows.value=J.state.pointShadow,Ze.hemisphereLights.value=J.state.hemi,Ze.directionalShadowMap.value=J.state.directionalShadowMap,Ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ze.spotShadowMap.value=J.state.spotShadowMap,Ze.spotLightMatrix.value=J.state.spotLightMatrix,Ze.spotLightMap.value=J.state.spotLightMap,Ze.pointShadowMap.value=J.state.pointShadowMap,Ze.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.currentProgram=lt,ne.uniformsList=null,lt}function yl(I){if(I.uniformsList===null){const W=I.currentProgram.getUniforms();I.uniformsList=du.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function xl(I,W){const te=Pe.get(I);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function Ch(I,W,te,ne,J){W.isScene!==!0&&(W=ot),Ve.resetTextureUnits();const Te=W.fog,ze=ne.isMeshStandardMaterial?W.environment:null,Ye=L===null?w.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:yr,We=(ne.isMeshStandardMaterial?P:k).get(ne.envMap||ze),nt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,lt=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!te.morphAttributes.position,Ct=!!te.morphAttributes.normal,Ot=!!te.morphAttributes.color;let Dt=Xi;ne.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Dt=w.toneMapping);const qt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,$e=qt!==void 0?qt.length:0,Ce=Pe.get(ne),Ft=x.state.lights;if(ie===!0&&(ve===!0||I!==R)){const xn=I===R&&ne.id===z;ft.setState(ne,I,xn)}let ut=!1;ne.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ft.state.version||Ce.outputColorSpace!==Ye||J.isBatchedMesh&&Ce.batching===!1||!J.isBatchedMesh&&Ce.batching===!0||J.isBatchedMesh&&Ce.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ce.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ce.instancing===!1||!J.isInstancedMesh&&Ce.instancing===!0||J.isSkinnedMesh&&Ce.skinning===!1||!J.isSkinnedMesh&&Ce.skinning===!0||J.isInstancedMesh&&Ce.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ce.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ce.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ce.instancingMorph===!1&&J.morphTexture!==null||Ce.envMap!==We||ne.fog===!0&&Ce.fog!==Te||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ft.numPlanes||Ce.numIntersection!==ft.numIntersection)||Ce.vertexAlphas!==nt||Ce.vertexTangents!==lt||Ce.morphTargets!==Ze||Ce.morphNormals!==Ct||Ce.morphColors!==Ot||Ce.toneMapping!==Dt||Ce.morphTargetsCount!==$e)&&(ut=!0):(ut=!0,Ce.__version=ne.version);let zt=Ce.currentProgram;ut===!0&&(zt=Fs(ne,W,J));let Gn=!1,tn=!1,fn=!1;const Vt=zt.getUniforms(),yi=Ce.uniforms;if(de.useProgram(zt.program)&&(Gn=!0,tn=!0,fn=!0),ne.id!==z&&(z=ne.id,tn=!0),Gn||R!==I){Vt.setValue(N,"projectionMatrix",I.projectionMatrix),Vt.setValue(N,"viewMatrix",I.matrixWorldInverse);const xn=Vt.map.cameraPosition;xn!==void 0&&xn.setValue(N,we.setFromMatrixPosition(I.matrixWorld)),Le.logarithmicDepthBuffer&&Vt.setValue(N,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Vt.setValue(N,"isOrthographic",I.isOrthographicCamera===!0),R!==I&&(R=I,tn=!0,fn=!0)}if(J.isSkinnedMesh){Vt.setOptional(N,J,"bindMatrix"),Vt.setOptional(N,J,"bindMatrixInverse");const xn=J.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Vt.setValue(N,"boneTexture",xn.boneTexture,Ve))}J.isBatchedMesh&&(Vt.setOptional(N,J,"batchingTexture"),Vt.setValue(N,"batchingTexture",J._matricesTexture,Ve),Vt.setOptional(N,J,"batchingIdTexture"),Vt.setValue(N,"batchingIdTexture",J._indirectTexture,Ve),Vt.setOptional(N,J,"batchingColorTexture"),J._colorsTexture!==null&&Vt.setValue(N,"batchingColorTexture",J._colorsTexture,Ve));const zs=te.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0)&&wt.update(J,te,zt),(tn||Ce.receiveShadow!==J.receiveShadow)&&(Ce.receiveShadow=J.receiveShadow,Vt.setValue(N,"receiveShadow",J.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(yi.envMap.value=We,yi.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&W.environment!==null&&(yi.envMapIntensity.value=W.environmentIntensity),tn&&(Vt.setValue(N,"toneMappingExposure",w.toneMappingExposure),Ce.needsLights&&Rh(yi,fn),Te&&ne.fog===!0&&je.refreshFogUniforms(yi,Te),je.refreshMaterialUniforms(yi,ne,me,Q,x.state.transmissionRenderTarget[I.id]),du.upload(N,yl(Ce),yi,Ve)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(du.upload(N,yl(Ce),yi,Ve),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Vt.setValue(N,"center",J.center),Vt.setValue(N,"modelViewMatrix",J.modelViewMatrix),Vt.setValue(N,"normalMatrix",J.normalMatrix),Vt.setValue(N,"modelMatrix",J.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const xn=ne.uniformsGroups;for(let Bs=0,Jn=xn.length;Bs<Jn;Bs++){const Sl=xn[Bs];Ne.update(Sl,zt),Ne.bind(Sl,zt)}}return zt}function Rh(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function Ph(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,W,te){Pe.get(I.texture).__webglTexture=W,Pe.get(I.depthTexture).__webglTexture=te;const ne=Pe.get(I);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,W){const te=Pe.get(I);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(I,W=0,te=0){L=I,U=W,C=te;let ne=!0,J=null,Te=!1,ze=!1;if(I){const We=Pe.get(I);if(We.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(N.FRAMEBUFFER,null),ne=!1;else if(We.__webglFramebuffer===void 0)Ve.setupRenderTarget(I);else if(We.__hasExternalTextures)Ve.rebindTextures(I,Pe.get(I.texture).__webglTexture,Pe.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ze=I.depthTexture;if(We.__boundDepthTexture!==Ze){if(Ze!==null&&Pe.has(Ze)&&(I.width!==Ze.image.width||I.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(I)}}const nt=I.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(ze=!0);const lt=Pe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(lt[W])?J=lt[W][te]:J=lt[W],Te=!0):I.samples>0&&Ve.useMultisampledRTT(I)===!1?J=Pe.get(I).__webglMultisampledFramebuffer:Array.isArray(lt)?J=lt[te]:J=lt,b.copy(I.viewport),O.copy(I.scissor),q=I.scissorTest}else b.copy(Z).multiplyScalar(me).floor(),O.copy(re).multiplyScalar(me).floor(),q=Se;if(de.bindFramebuffer(N.FRAMEBUFFER,J)&&ne&&de.drawBuffers(I,J),de.viewport(b),de.scissor(O),de.setScissorTest(q),Te){const We=Pe.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,We.__webglTexture,te)}else if(ze){const We=Pe.get(I.texture),nt=W||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,We.__webglTexture,te||0,nt)}z=-1},this.readRenderTargetPixels=function(I,W,te,ne,J,Te,ze){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Pe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye){de.bindFramebuffer(N.FRAMEBUFFER,Ye);try{const We=I.texture,nt=We.format,lt=We.type;if(!Le.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-ne&&te>=0&&te<=I.height-J&&N.readPixels(W,te,ne,J,V.convert(nt),V.convert(lt),Te)}finally{const We=L!==null?Pe.get(L).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(I,W,te,ne,J,Te,ze){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Pe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye){de.bindFramebuffer(N.FRAMEBUFFER,Ye);try{const We=I.texture,nt=We.format,lt=We.type;if(!Le.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=I.width-ne&&te>=0&&te<=I.height-J){const Ze=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ze),N.bufferData(N.PIXEL_PACK_BUFFER,Te.byteLength,N.STREAM_READ),N.readPixels(W,te,ne,J,V.convert(nt),V.convert(lt),0),N.flush();const Ct=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await eM(N,Ct,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,Ze),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Te)}finally{N.deleteBuffer(Ze),N.deleteSync(Ct)}return Te}}finally{const We=L!==null?Pe.get(L).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(I,W=null,te=0){I.isTexture!==!0&&(Po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,I=arguments[1]);const ne=Math.pow(2,-te),J=Math.floor(I.image.width*ne),Te=Math.floor(I.image.height*ne),ze=W!==null?W.x:0,Ye=W!==null?W.y:0;Ve.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,te,0,0,ze,Ye,J,Te),de.unbindTexture()},this.copyTextureToTexture=function(I,W,te=null,ne=null,J=0){I.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,I=arguments[1],W=arguments[2],J=arguments[3]||0,te=null);let Te,ze,Ye,We,nt,lt;te!==null?(Te=te.max.x-te.min.x,ze=te.max.y-te.min.y,Ye=te.min.x,We=te.min.y):(Te=I.image.width,ze=I.image.height,Ye=0,We=0),ne!==null?(nt=ne.x,lt=ne.y):(nt=0,lt=0);const Ze=V.convert(W.format),Ct=V.convert(W.type);Ve.setTexture2D(W,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const Ot=N.getParameter(N.UNPACK_ROW_LENGTH),Dt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),qt=N.getParameter(N.UNPACK_SKIP_PIXELS),$e=N.getParameter(N.UNPACK_SKIP_ROWS),Ce=N.getParameter(N.UNPACK_SKIP_IMAGES),Ft=I.isCompressedTexture?I.mipmaps[J]:I.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ye),N.pixelStorei(N.UNPACK_SKIP_ROWS,We),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,J,nt,lt,Te,ze,Ze,Ct,Ft.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,J,nt,lt,Ft.width,Ft.height,Ze,Ft.data):N.texSubImage2D(N.TEXTURE_2D,J,nt,lt,Te,ze,Ze,Ct,Ft),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ot),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Dt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,qt),N.pixelStorei(N.UNPACK_SKIP_ROWS,$e),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ce),J===0&&W.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(I,W,te=null,ne=null,J=0){I.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,I=arguments[2],W=arguments[3],J=arguments[4]||0);let Te,ze,Ye,We,nt,lt,Ze,Ct,Ot;const Dt=I.isCompressedTexture?I.mipmaps[J]:I.image;te!==null?(Te=te.max.x-te.min.x,ze=te.max.y-te.min.y,Ye=te.max.z-te.min.z,We=te.min.x,nt=te.min.y,lt=te.min.z):(Te=Dt.width,ze=Dt.height,Ye=Dt.depth,We=0,nt=0,lt=0),ne!==null?(Ze=ne.x,Ct=ne.y,Ot=ne.z):(Ze=0,Ct=0,Ot=0);const qt=V.convert(W.format),$e=V.convert(W.type);let Ce;if(W.isData3DTexture)Ve.setTexture3D(W,0),Ce=N.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Ve.setTexture2DArray(W,0),Ce=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const Ft=N.getParameter(N.UNPACK_ROW_LENGTH),ut=N.getParameter(N.UNPACK_IMAGE_HEIGHT),zt=N.getParameter(N.UNPACK_SKIP_PIXELS),Gn=N.getParameter(N.UNPACK_SKIP_ROWS),tn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Dt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Dt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,We),N.pixelStorei(N.UNPACK_SKIP_ROWS,nt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,lt),I.isDataTexture||I.isData3DTexture?N.texSubImage3D(Ce,J,Ze,Ct,Ot,Te,ze,Ye,qt,$e,Dt.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,J,Ze,Ct,Ot,Te,ze,Ye,qt,Dt.data):N.texSubImage3D(Ce,J,Ze,Ct,Ot,Te,ze,Ye,qt,$e,Dt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ft),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Gn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,tn),J===0&&W.generateMipmaps&&N.generateMipmap(Ce),de.unbindTexture()},this.initRenderTarget=function(I){Pe.get(I).__webglFramebuffer===void 0&&Ve.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Ve.setTextureCube(I,0):I.isData3DTexture?Ve.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Ve.setTexture2DArray(I,0):Ve.setTexture2D(I,0),de.unbindTexture()},this.resetState=function(){U=0,C=0,L=null,de.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sh?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===ll?"display-p3":"srgb"}}class lh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new lh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ch{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new ch(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xu extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class uh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Po("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new D;class ri{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ri(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mp extends Tn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let mo;const ma=new D,go=new D,vo=new D,_o=new le,ga=new le,Z_=new st,Nc=new D,va=new D,Oc=new D,v0=new le,ad=new le,_0=new le;class j_ extends bt{constructor(e=new Mp){if(super(),this.isSprite=!0,this.type="Sprite",mo===void 0){mo=new yt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uh(t,5);mo.setIndex([0,1,2,0,2,3]),mo.setAttribute("position",new ri(n,3,0,!1)),mo.setAttribute("uv",new ri(n,2,3,!1))}this.geometry=mo,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),go.setFromMatrixScale(this.matrixWorld),Z_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&go.multiplyScalar(-vo.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const l=this.center;Fc(Nc.set(-.5,-.5,0),vo,l,go,i,s),Fc(va.set(.5,-.5,0),vo,l,go,i,s),Fc(Oc.set(.5,.5,0),vo,l,go,i,s),v0.set(0,0),ad.set(1,0),_0.set(1,1);let c=e.ray.intersectTriangle(Nc,va,Oc,!1,ma);if(c===null&&(Fc(va.set(-.5,.5,0),vo,l,go,i,s),ad.set(0,1),c=e.ray.intersectTriangle(Nc,Oc,va,!1,ma),c===null))return;const u=e.ray.origin.distanceTo(ma);u<e.near||u>e.far||t.push({distance:u,point:ma.clone(),uv:ii.getInterpolation(ma,Nc,va,Oc,v0,ad,_0,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Fc(r,e,t,n,i,s){_o.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ga.x=s*_o.x-i*_o.y,ga.y=i*_o.x+s*_o.y):ga.copy(_o),r.copy(e),r.x+=ga.x,r.y+=ga.y,r.applyMatrix4(Z_)}const zc=new D,y0=new D;class J_ extends bt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){zc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(zc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){zc.setFromMatrixPosition(e.matrixWorld),y0.setFromMatrixPosition(this.matrixWorld);const n=zc.distanceTo(y0)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let l=t[i].distance;if(t[i].object.visible&&(l-=l*t[i].hysteresis),n>=l)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const l=n[i];t.object.levels.push({object:l.object.uuid,distance:l.distance,hysteresis:l.hysteresis})}return t}}const x0=new D,S0=new Et,M0=new Et,dA=new D,w0=new st,Bc=new D,ld=new yn,E0=new st,cd=new Ps;class K_ extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bd,this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bc),this.boundingBox.expandByPoint(Bc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bc),this.boundingSphere.expandByPoint(Bc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ld.copy(this.boundingSphere),ld.applyMatrix4(i),e.ray.intersectsSphere(ld)!==!1&&(E0.copy(i).invert(),cd.copy(e.ray).applyMatrix4(E0),!(this.boundingBox!==null&&cd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,cd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===v_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;S0.fromBufferAttribute(i.attributes.skinIndex,e),M0.fromBufferAttribute(i.attributes.skinWeight,e),x0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const l=M0.getComponent(s);if(l!==0){const c=S0.getComponent(s);w0.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(dA.copy(x0).applyMatrix4(w0),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}class wp extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yi extends Yt{constructor(e=null,t=1,n=1,i,s,l,c,u,h=vn,f=vn,p,m){super(null,l,c,u,h,f,i,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const T0=new st,pA=new st;class hh{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,l=e.length;s<l;s++){const c=e[s]?e[s].matrixWorld:pA;T0.multiplyMatrices(c,t[s]),T0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new hh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yi(t,e,e,Dn,Zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let l=t[s];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),l=new wp),this.bones.push(l),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const l=t[i];e.bones.push(l.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class No extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yo=new st,A0=new st,kc=[],b0=new _n,mA=new st,_a=new en,ya=new yn;class Q_ extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new No(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yo),b0.copy(e.boundingBox).applyMatrix4(yo),this.boundingBox.union(b0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yo),ya.copy(e.boundingSphere).applyMatrix4(yo),this.boundingSphere.union(ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,l=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[l+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(n),e.ray.intersectsSphere(ya)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,yo),A0.multiplyMatrices(n,yo),_a.matrixWorld=A0,_a.raycast(e,kc);for(let l=0,c=kc.length;l<c;l++){const u=kc[l];u.instanceId=s,u.object=this,t.push(u)}kc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new No(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yi(new Float32Array(i*this.count),i,this.count,th,Zn));const s=this.morphTexture.source.data.data;let l=0;for(let h=0;h<n.length;h++)l+=n[h];const c=this.geometry.morphTargetsRelative?1:1-l,u=i*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function gA(r,e){return r.z-e.z}function vA(r,e){return e.z-r.z}class _A{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,s=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const l=i[this.index];s.push(l),this.index++,l.start=e.start,l.count=e.count,l.z=t,l.index=n}reset(){this.list.length=0,this.index=0}}const Nr=new st,ud=new st,yA=new st,xA=new Be(1,1,1),C0=new st,hd=new hl,Hc=new _n,ss=new yn,xa=new D,R0=new D,SA=new D,fd=new _A,Ln=new en,Vc=[];function MA(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let l=0;l<n;l++)e.setComponent(s+t,l,r.getComponent(s,l))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class $_ extends en{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new yt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Yi(t,e,e,Dn,Zn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Yi(t,e,e,al,vr);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Yi(t,e,e,Dn,Zn);n.colorSpace=Lt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const l=e.getAttribute(s),{array:c,itemSize:u,normalized:h}=l,f=new c.constructor(n*u),p=new Ut(f,u,h);t.setAttribute(s,p)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Ut(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Nr),this.getBoundingBoxAt(s,Hc).applyMatrix4(Nr),e.union(Hc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Nr),this.getBoundingSphereAt(s,ss).applyMatrix4(Nr),e.union(ss)}}addInstance(e){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:e});const t=this._drawInfo.length-1,n=this._matricesTexture,i=n.image.data;yA.toArray(i,t*16),n.needsUpdate=!0;const s=this._colorsTexture;return s&&(xA.toArray(s.image.data,t*4),s.needsUpdate=!0),t}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const l=this._reservedRanges,c=this._drawRanges,u=this._bounds;this._geometryCount!==0&&(s=l[l.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),f=h!==null;if(f&&(n===-1?i.indexCount=h.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const p=this._geometryCount;return this._geometryCount++,l.push(i),c.push({start:f?i.indexStart:i.vertexStart,count:-1}),u.push({boxInitialized:!1,box:new _n,sphereInitialized:!1,sphere:new yn}),this.setGeometryAt(p,e),p}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),l=t.getIndex(),c=this._reservedRanges[e];if(i&&l.count>c.indexCount||t.attributes.position.count>c.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.vertexCount;for(const g in n.attributes){const y=t.getAttribute(g),S=n.getAttribute(g);MA(y,S,u);const x=y.itemSize;for(let _=y.count,E=h;_<E;_++){const w=u+_;for(let A=0;A<x;A++)S.setComponent(w,A,0)}S.needsUpdate=!0,S.addUpdateRange(u*x,h*x)}if(i){const g=c.indexStart;for(let y=0;y<l.count;y++)s.setX(g+y,u+l.getX(y));for(let y=l.count,S=c.indexCount;y<S;y++)s.setX(g+y,u);s.needsUpdate=!0,s.addUpdateRange(g,c.indexCount)}const f=this._bounds[e];t.boundingBox!==null?(f.box.copy(t.boundingBox),f.boxInitialized=!0):f.boxInitialized=!1,t.boundingSphere!==null?(f.sphere.copy(t.boundingSphere),f.sphereInitialized=!0):f.sphereInitialized=!1;const p=this._drawRanges[e],m=t.getAttribute("position");return p.count=i?l.count:m.count,this._visibilityChanged=!0,e}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,s=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const l=s.index,c=s.attributes.position,u=this._drawRanges[e];for(let h=u.start,f=u.start+u.count;h<f;h++){let p=h;l&&(p=l.getX(p)),i.expandByPoint(xa.fromBufferAttribute(c,p))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,s=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,Hc),Hc.getCenter(i.center);const l=s.index,c=s.attributes.position,u=this._drawRanges[e];let h=0;for(let f=u.start,p=u.start+u.count;f<p;f++){let m=f;l&&(m=l.getX(m)),xa.fromBufferAttribute(c,m),h=Math.max(h,i.center.distanceToSquared(xa))}i.radius=Math.sqrt(h),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,s=this.matrixWorld,l=this.geometry;Ln.material=this.material,Ln.geometry.index=l.index,Ln.geometry.attributes=l.attributes,Ln.geometry.boundingBox===null&&(Ln.geometry.boundingBox=new _n),Ln.geometry.boundingSphere===null&&(Ln.geometry.boundingSphere=new yn);for(let c=0,u=n.length;c<u;c++){if(!n[c].visible||!n[c].active)continue;const h=n[c].geometryIndex,f=i[h];Ln.geometry.setDrawRange(f.start,f.count),this.getMatrixAt(c,Ln.matrixWorld).premultiply(s),this.getBoundingBoxAt(h,Ln.geometry.boundingBox),this.getBoundingSphereAt(h,Ln.geometry.boundingSphere),Ln.raycast(e,Vc);for(let p=0,m=Vc.length;p<m;p++){const g=Vc[p];g.object=this,g.batchId=c,t.push(g)}Vc.length=0}Ln.material=null,Ln.geometry.index=null,Ln.geometry.attributes={},Ln.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const l=i.getIndex(),c=l===null?1:l.array.BYTES_PER_ELEMENT,u=this._drawInfo,h=this._multiDrawStarts,f=this._multiDrawCounts,p=this._drawRanges,m=this.perObjectFrustumCulled,g=this._indirectTexture,y=g.image.data;m&&(C0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),hd.setFromProjectionMatrix(C0,e.coordinateSystem));let S=0;if(this.sortObjects){ud.copy(this.matrixWorld).invert(),xa.setFromMatrixPosition(n.matrixWorld).applyMatrix4(ud),R0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(ud);for(let E=0,w=u.length;E<w;E++)if(u[E].visible&&u[E].active){const A=u[E].geometryIndex;this.getMatrixAt(E,Nr),this.getBoundingSphereAt(A,ss).applyMatrix4(Nr);let U=!1;if(m&&(U=!hd.intersectsSphere(ss)),!U){const C=SA.subVectors(ss.center,xa).dot(R0);fd.push(p[A],C,E)}}const x=fd.list,_=this.customSort;_===null?x.sort(s.transparent?vA:gA):_.call(this,x,n);for(let E=0,w=x.length;E<w;E++){const A=x[E];h[S]=A.start*c,f[S]=A.count,y[S]=A.index,S++}fd.reset()}else for(let x=0,_=u.length;x<_;x++)if(u[x].visible&&u[x].active){const E=u[x].geometryIndex;let w=!1;if(m&&(this.getMatrixAt(x,Nr),this.getBoundingSphereAt(E,ss).applyMatrix4(Nr),w=!hd.intersectsSphere(ss)),!w){const A=p[E];h[S]=A.start*c,f[S]=A.count,y[S]=x,S++}}g.needsUpdate=!0,this._multiDrawCount=S,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,l){this.onBeforeRender(e,null,i,s,l)}}class Vn extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yu=new D,qu=new D,P0=new st,Sa=new Ps,Gc=new yn,dd=new D,I0=new D;let Br=class extends bt{constructor(e=new yt,t=new Vn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Yu.fromBufferAttribute(t,i-1),qu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yu.distanceTo(qu);e.setAttribute("lineDistance",new qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gc.copy(n.boundingSphere),Gc.applyMatrix4(i),Gc.radius+=s,e.ray.intersectsSphere(Gc)===!1)return;P0.copy(i).invert(),Sa.copy(e.ray).applyMatrix4(P0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,l.start),y=Math.min(f.count,l.start+l.count);for(let S=g,x=y-1;S<x;S+=h){const _=f.getX(S),E=f.getX(S+1),w=Wc(this,e,Sa,u,_,E);w&&t.push(w)}if(this.isLineLoop){const S=f.getX(y-1),x=f.getX(g),_=Wc(this,e,Sa,u,S,x);_&&t.push(_)}}else{const g=Math.max(0,l.start),y=Math.min(m.count,l.start+l.count);for(let S=g,x=y-1;S<x;S+=h){const _=Wc(this,e,Sa,u,S,S+1);_&&t.push(_)}if(this.isLineLoop){const S=Wc(this,e,Sa,u,y-1,g);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function Wc(r,e,t,n,i,s){const l=r.geometry.attributes.position;if(Yu.fromBufferAttribute(l,i),qu.fromBufferAttribute(l,s),t.distanceSqToSegment(Yu,qu,dd,I0)>n)return;dd.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(dd);if(!(u<e.near||u>e.far))return{distance:u,point:I0.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const L0=new D,D0=new D;class Zi extends Br{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)L0.fromBufferAttribute(t,i),D0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+L0.distanceTo(D0);e.setAttribute("lineDistance",new qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ey extends Br{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ep extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const U0=new st,Xd=new Ps,Xc=new yn,Yc=new D;class ty extends bt{constructor(e=new yt,t=new Ep){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xc.copy(n.boundingSphere),Xc.applyMatrix4(i),Xc.radius+=s,e.ray.intersectsSphere(Xc)===!1)return;U0.copy(i).invert(),Xd.copy(e.ray).applyMatrix4(U0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,l.start),g=Math.min(h.count,l.start+l.count);for(let y=m,S=g;y<S;y++){const x=h.getX(y);Yc.fromBufferAttribute(p,x),N0(Yc,x,u,i,e,t,this)}}else{const m=Math.max(0,l.start),g=Math.min(p.count,l.start+l.count);for(let y=m,S=g;y<S;y++)Yc.fromBufferAttribute(p,y),N0(Yc,y,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function N0(r,e,t,n,i,s,l){const c=Xd.distanceSqToPoint(r);if(c<t){const u=new D;Xd.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,object:l})}}class wA extends Yt{constructor(e,t,n,i,s,l,c,u,h){super(e,t,n,i,s,l,c,u,h),this.isVideoTexture=!0,this.minFilter=l!==void 0?l:on,this.magFilter=s!==void 0?s:on,this.generateMipmaps=!1;const f=this;function p(){f.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class EA extends Yt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=vn,this.minFilter=vn,this.generateMipmaps=!1,this.needsUpdate=!0}}class fh extends Yt{constructor(e,t,n,i,s,l,c,u,h,f,p,m){super(null,l,c,u,h,f,i,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class TA extends fh{constructor(e,t,n,i,s,l){super(e,t,n,s,l),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=vi,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AA extends fh{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,gr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class bA extends Yt{constructor(e,t,n,i,s,l,c,u,h){super(e,t,n,i,s,l,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let l;t?l=t:l=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-l,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===l)return i/(s-1);const f=n[i],m=n[i+1]-f,g=(l-f)/m;return(i+g)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const l=this.getPoint(i),c=this.getPoint(s),u=t||(l.isVector2?new le:new D);return u.copy(c).sub(l).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],s=[],l=[],c=new D,u=new st;for(let g=0;g<=e;g++){const y=g/e;i[g]=this.getTangentAt(y,new D)}s[0]=new D,l[0]=new D;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),l[0].crossVectors(i[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),l[g]=l[g-1].clone(),c.crossVectors(i[g-1],i[g]),c.length()>Number.EPSILON){c.normalize();const y=Math.acos(Jt(i[g-1].dot(i[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(c,y))}l[g].crossVectors(i[g],s[g])}if(t===!0){let g=Math.acos(Jt(s[0].dot(s[e]),-1,1));g/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(g=-g);for(let y=1;y<=e;y++)s[y].applyMatrix4(u.makeRotationAxis(i[y],g*y)),l[y].crossVectors(i[y],s[y])}return{tangents:i,normals:s,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dh extends Pi{constructor(e=0,t=0,n=1,i=1,s=0,l=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=l,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new le){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const l=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(l?s=0:s=i),this.aClockwise===!0&&!l&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,g=h-this.aY;u=m*f-g*p+this.aX,h=m*p+g*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ny extends dh{constructor(e,t,n,i,s,l){super(e,t,n,n,i,s,l),this.isArcCurve=!0,this.type="ArcCurve"}}function Tp(){let r=0,e=0,t=0,n=0;function i(s,l,c,u){r=s,e=c,t=-3*s+3*l-2*c-u,n=2*s-2*l+c+u}return{initCatmullRom:function(s,l,c,u,h){i(l,c,h*(c-s),h*(u-l))},initNonuniformCatmullRom:function(s,l,c,u,h,f,p){let m=(l-s)/h-(c-s)/(h+f)+(c-l)/f,g=(c-l)/f-(u-l)/(f+p)+(u-c)/p;m*=f,g*=f,i(l,c,m,g)},calc:function(s){const l=s*s,c=l*s;return r+e*s+t*l+n*c}}}const qc=new D,pd=new Tp,md=new Tp,gd=new Tp;class iy extends Pi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,s=i.length,l=(s-(this.closed?0:1))*e;let c=Math.floor(l),u=l-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,f;this.closed||c>0?h=i[(c-1)%s]:(qc.subVectors(i[0],i[1]).add(i[0]),h=qc);const p=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?f=i[(c+2)%s]:(qc.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=qc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(p),g),S=Math.pow(p.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(f),g);S<1e-4&&(S=1),y<1e-4&&(y=S),x<1e-4&&(x=S),pd.initNonuniformCatmullRom(h.x,p.x,m.x,f.x,y,S,x),md.initNonuniformCatmullRom(h.y,p.y,m.y,f.y,y,S,x),gd.initNonuniformCatmullRom(h.z,p.z,m.z,f.z,y,S,x)}else this.curveType==="catmullrom"&&(pd.initCatmullRom(h.x,p.x,m.x,f.x,this.tension),md.initCatmullRom(h.y,p.y,m.y,f.y,this.tension),gd.initCatmullRom(h.z,p.z,m.z,f.z,this.tension));return n.set(pd.calc(u),md.calc(u),gd.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function O0(r,e,t,n,i){const s=(n-e)*.5,l=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+l)*u+(-3*t+3*n-2*s-l)*c+s*r+t}function CA(r,e){const t=1-r;return t*t*e}function RA(r,e){return 2*(1-r)*r*e}function PA(r,e){return r*r*e}function Na(r,e,t,n){return CA(r,e)+RA(r,t)+PA(r,n)}function IA(r,e){const t=1-r;return t*t*t*e}function LA(r,e){const t=1-r;return 3*t*t*r*e}function DA(r,e){return 3*(1-r)*r*r*e}function UA(r,e){return r*r*r*e}function Oa(r,e,t,n,i){return IA(r,e)+LA(r,t)+DA(r,n)+UA(r,i)}class Ap extends Pi{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){const n=t,i=this.v0,s=this.v1,l=this.v2,c=this.v3;return n.set(Oa(e,i.x,s.x,l.x,c.x),Oa(e,i.y,s.y,l.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ry extends Pi{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,l=this.v2,c=this.v3;return n.set(Oa(e,i.x,s.x,l.x,c.x),Oa(e,i.y,s.y,l.y,c.y),Oa(e,i.z,s.z,l.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bp extends Pi{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sy extends Pi{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cp extends Pi{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,i=this.v0,s=this.v1,l=this.v2;return n.set(Na(e,i.x,s.x,l.x),Na(e,i.y,s.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rp extends Pi{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,l=this.v2;return n.set(Na(e,i.x,s.x,l.x),Na(e,i.y,s.y,l.y),Na(e,i.z,s.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pp extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,i=this.points,s=(i.length-1)*e,l=Math.floor(s),c=s-l,u=i[l===0?l:l-1],h=i[l],f=i[l>i.length-2?i.length-1:l+1],p=i[l>i.length-3?i.length-1:l+2];return n.set(O0(c,u.x,h.x,f.x,p.x),O0(c,u.y,h.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new le().fromArray(i))}return this}}var Zu=Object.freeze({__proto__:null,ArcCurve:ny,CatmullRomCurve3:iy,CubicBezierCurve:Ap,CubicBezierCurve3:ry,EllipseCurve:dh,LineCurve:bp,LineCurve3:sy,QuadraticBezierCurve:Cp,QuadraticBezierCurve3:Rp,SplineCurve:Pp});class oy extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const l=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-l/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const l=s[i],c=l.isEllipseCurve?e*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?e*l.points.length:e,u=l.getPoints(c);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Zu[i.type]().fromJSON(i))}return this}}class Ka extends oy{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new bp(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Cp(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,l){const c=new Ap(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Pp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,l),this}absarc(e,t,n,i,s,l){return this.absellipse(e,t,n,n,i,s,l),this}ellipse(e,t,n,i,s,l,c,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,s,l,c,u),this}absellipse(e,t,n,i,s,l,c,u){const h=new dh(e,t,n,i,s,l,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fl extends yt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Jt(i,0,Math.PI*2);const s=[],l=[],c=[],u=[],h=[],f=1/t,p=new D,m=new le,g=new D,y=new D,S=new D;let x=0,_=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-x,g.z=_*0,S.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case e.length-1:u.push(S.x,S.y,S.z);break;default:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-x,g.z=_*0,y.copy(g),g.x+=S.x,g.y+=S.y,g.z+=S.z,g.normalize(),u.push(g.x,g.y,g.z),S.copy(y)}for(let E=0;E<=t;E++){const w=n+E*f*i,A=Math.sin(w),U=Math.cos(w);for(let C=0;C<=e.length-1;C++){p.x=e[C].x*A,p.y=e[C].y,p.z=e[C].x*U,l.push(p.x,p.y,p.z),m.x=E/t,m.y=C/(e.length-1),c.push(m.x,m.y);const L=u[3*C+0]*A,z=u[3*C+1],R=u[3*C+0]*U;h.push(L,z,R)}}for(let E=0;E<t;E++)for(let w=0;w<e.length-1;w++){const A=w+E*e.length,U=A,C=A+e.length,L=A+e.length+1,z=A+1;s.push(U,C,z),s.push(L,z,C)}this.setIndex(s),this.setAttribute("position",new qe(l,3)),this.setAttribute("uv",new qe(c,2)),this.setAttribute("normal",new qe(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.points,e.segments,e.phiStart,e.phiLength)}}class ph extends fl{constructor(e=1,t=1,n=4,i=8){const s=new Ka;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new ph(e.radius,e.length,e.capSegments,e.radialSegments)}}class mh extends yt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],l=[],c=[],u=[],h=new D,f=new le;l.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),f.x=(l[m]/e+1)/2,f.y=(l[m+1]/e+1)/2,u.push(f.x,f.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vo extends yt{constructor(e=1,t=1,n=1,i=32,s=1,l=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:l,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],m=[],g=[];let y=0;const S=[],x=n/2;let _=0;E(),l===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(m,3)),this.setAttribute("uv",new qe(g,2));function E(){const A=new D,U=new D;let C=0;const L=(t-e)/n;for(let z=0;z<=s;z++){const R=[],b=z/s,O=b*(t-e)+e;for(let q=0;q<=i;q++){const Y=q/i,K=Y*u+c,ae=Math.sin(K),Q=Math.cos(K);U.x=O*ae,U.y=-b*n+x,U.z=O*Q,p.push(U.x,U.y,U.z),A.set(ae,L,Q).normalize(),m.push(A.x,A.y,A.z),g.push(Y,1-b),R.push(y++)}S.push(R)}for(let z=0;z<i;z++)for(let R=0;R<s;R++){const b=S[R][z],O=S[R+1][z],q=S[R+1][z+1],Y=S[R][z+1];f.push(b,O,Y),f.push(O,q,Y),C+=6}h.addGroup(_,C,0),_+=C}function w(A){const U=y,C=new le,L=new D;let z=0;const R=A===!0?e:t,b=A===!0?1:-1;for(let q=1;q<=i;q++)p.push(0,x*b,0),m.push(0,b,0),g.push(.5,.5),y++;const O=y;for(let q=0;q<=i;q++){const K=q/i*u+c,ae=Math.cos(K),Q=Math.sin(K);L.x=R*Q,L.y=x*b,L.z=R*ae,p.push(L.x,L.y,L.z),m.push(0,b,0),C.x=ae*.5+.5,C.y=Q*.5*b+.5,g.push(C.x,C.y),y++}for(let q=0;q<i;q++){const Y=U+q,K=O+q;A===!0?f.push(K,K+1,Y):f.push(K+1,K,Y),z+=3}h.addGroup(_,z,A===!0?1:2),_+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gh extends Vo{constructor(e=1,t=1,n=32,i=1,s=!1,l=0,c=Math.PI*2){super(0,e,t,n,i,s,l,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:l,thetaLength:c}}static fromJSON(e){return new gh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vr extends yt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],l=[];c(i),h(n),f(),this.setAttribute("position",new qe(s,3)),this.setAttribute("normal",new qe(s.slice(),3)),this.setAttribute("uv",new qe(l,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const w=new D,A=new D,U=new D;for(let C=0;C<t.length;C+=3)g(t[C+0],w),g(t[C+1],A),g(t[C+2],U),u(w,A,U,E)}function u(E,w,A,U){const C=U+1,L=[];for(let z=0;z<=C;z++){L[z]=[];const R=E.clone().lerp(A,z/C),b=w.clone().lerp(A,z/C),O=C-z;for(let q=0;q<=O;q++)q===0&&z===C?L[z][q]=R:L[z][q]=R.clone().lerp(b,q/O)}for(let z=0;z<C;z++)for(let R=0;R<2*(C-z)-1;R++){const b=Math.floor(R/2);R%2===0?(m(L[z][b+1]),m(L[z+1][b]),m(L[z][b])):(m(L[z][b+1]),m(L[z+1][b+1]),m(L[z+1][b]))}}function h(E){const w=new D;for(let A=0;A<s.length;A+=3)w.x=s[A+0],w.y=s[A+1],w.z=s[A+2],w.normalize().multiplyScalar(E),s[A+0]=w.x,s[A+1]=w.y,s[A+2]=w.z}function f(){const E=new D;for(let w=0;w<s.length;w+=3){E.x=s[w+0],E.y=s[w+1],E.z=s[w+2];const A=x(E)/2/Math.PI+.5,U=_(E)/Math.PI+.5;l.push(A,1-U)}y(),p()}function p(){for(let E=0;E<l.length;E+=6){const w=l[E+0],A=l[E+2],U=l[E+4],C=Math.max(w,A,U),L=Math.min(w,A,U);C>.9&&L<.1&&(w<.2&&(l[E+0]+=1),A<.2&&(l[E+2]+=1),U<.2&&(l[E+4]+=1))}}function m(E){s.push(E.x,E.y,E.z)}function g(E,w){const A=E*3;w.x=e[A+0],w.y=e[A+1],w.z=e[A+2]}function y(){const E=new D,w=new D,A=new D,U=new D,C=new le,L=new le,z=new le;for(let R=0,b=0;R<s.length;R+=9,b+=6){E.set(s[R+0],s[R+1],s[R+2]),w.set(s[R+3],s[R+4],s[R+5]),A.set(s[R+6],s[R+7],s[R+8]),C.set(l[b+0],l[b+1]),L.set(l[b+2],l[b+3]),z.set(l[b+4],l[b+5]),U.copy(E).add(w).add(A).divideScalar(3);const O=x(U);S(C,b+0,E,O),S(L,b+2,w,O),S(z,b+4,A,O)}}function S(E,w,A,U){U<0&&E.x===1&&(l[w]=E.x-1),A.x===0&&A.z===0&&(l[w]=U/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.vertices,e.indices,e.radius,e.details)}}class vh extends Vr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],l=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,l,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vh(e.radius,e.detail)}}const Zc=new D,jc=new D,vd=new D,Jc=new ii;class ay extends yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(ws*t),l=e.getIndex(),c=e.getAttribute("position"),u=l?l.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),m={},g=[];for(let y=0;y<u;y+=3){l?(h[0]=l.getX(y),h[1]=l.getX(y+1),h[2]=l.getX(y+2)):(h[0]=y,h[1]=y+1,h[2]=y+2);const{a:S,b:x,c:_}=Jc;if(S.fromBufferAttribute(c,h[0]),x.fromBufferAttribute(c,h[1]),_.fromBufferAttribute(c,h[2]),Jc.getNormal(vd),p[0]=`${Math.round(S.x*i)},${Math.round(S.y*i)},${Math.round(S.z*i)}`,p[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,p[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let E=0;E<3;E++){const w=(E+1)%3,A=p[E],U=p[w],C=Jc[f[E]],L=Jc[f[w]],z=`${A}_${U}`,R=`${U}_${A}`;R in m&&m[R]?(vd.dot(m[R].normal)<=s&&(g.push(C.x,C.y,C.z),g.push(L.x,L.y,L.z)),m[R]=null):z in m||(m[z]={index0:h[E],index1:h[w],normal:vd.clone()})}}for(const y in m)if(m[y]){const{index0:S,index1:x}=m[y];Zc.fromBufferAttribute(c,S),jc.fromBufferAttribute(c,x),g.push(Zc.x,Zc.y,Zc.z),g.push(jc.x,jc.y,jc.z)}this.setAttribute("position",new qe(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ts extends Ka{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ka().fromJSON(i))}return this}}const NA={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=ly(r,0,i,t,!0);const l=[];if(!s||s.next===s.prev)return l;let c,u,h,f,p,m,g;if(n&&(s=kA(r,e,s,t)),r.length>80*t){c=h=r[0],u=f=r[1];for(let y=t;y<i;y+=t)p=r[y],m=r[y+1],p<c&&(c=p),m<u&&(u=m),p>h&&(h=p),m>f&&(f=m);g=Math.max(h-c,f-u),g=g!==0?32767/g:0}return Qa(s,l,t,c,u,g,0),l}};function ly(r,e,t,n,i){let s,l;if(i===KA(r,e,t,n)>0)for(s=e;s<t;s+=n)l=F0(s,r[s],r[s+1],l);else for(s=t-n;s>=e;s-=n)l=F0(s,r[s],r[s+1],l);return l&&_h(l,l.next)&&(el(l),l=l.next),l}function Rs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(_h(t,t.next)||Xt(t.prev,t,t.next)===0)){if(el(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qa(r,e,t,n,i,s,l){if(!r)return;!l&&s&&XA(r,n,i,s);let c=r,u,h;for(;r.prev!==r.next;){if(u=r.prev,h=r.next,s?FA(r,n,i,s):OA(r)){e.push(u.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),el(r),r=h.next,c=h.next;continue}if(r=h,r===c){l?l===1?(r=zA(Rs(r),e,t),Qa(r,e,t,n,i,s,2)):l===2&&BA(r,e,t,n,i,s):Qa(Rs(r),e,t,n,i,s,1);break}}}function OA(r){const e=r.prev,t=r,n=r.next;if(Xt(e,t,n)>=0)return!1;const i=e.x,s=t.x,l=n.x,c=e.y,u=t.y,h=n.y,f=i<s?i<l?i:l:s<l?s:l,p=c<u?c<h?c:h:u<h?u:h,m=i>s?i>l?i:l:s>l?s:l,g=c>u?c>h?c:h:u>h?u:h;let y=n.next;for(;y!==e;){if(y.x>=f&&y.x<=m&&y.y>=p&&y.y<=g&&Co(i,c,s,u,l,h,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function FA(r,e,t,n){const i=r.prev,s=r,l=r.next;if(Xt(i,s,l)>=0)return!1;const c=i.x,u=s.x,h=l.x,f=i.y,p=s.y,m=l.y,g=c<u?c<h?c:h:u<h?u:h,y=f<p?f<m?f:m:p<m?p:m,S=c>u?c>h?c:h:u>h?u:h,x=f>p?f>m?f:m:p>m?p:m,_=Yd(g,y,e,t,n),E=Yd(S,x,e,t,n);let w=r.prevZ,A=r.nextZ;for(;w&&w.z>=_&&A&&A.z<=E;){if(w.x>=g&&w.x<=S&&w.y>=y&&w.y<=x&&w!==i&&w!==l&&Co(c,f,u,p,h,m,w.x,w.y)&&Xt(w.prev,w,w.next)>=0||(w=w.prevZ,A.x>=g&&A.x<=S&&A.y>=y&&A.y<=x&&A!==i&&A!==l&&Co(c,f,u,p,h,m,A.x,A.y)&&Xt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;w&&w.z>=_;){if(w.x>=g&&w.x<=S&&w.y>=y&&w.y<=x&&w!==i&&w!==l&&Co(c,f,u,p,h,m,w.x,w.y)&&Xt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;A&&A.z<=E;){if(A.x>=g&&A.x<=S&&A.y>=y&&A.y<=x&&A!==i&&A!==l&&Co(c,f,u,p,h,m,A.x,A.y)&&Xt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function zA(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!_h(i,s)&&cy(i,n,n.next,s)&&$a(i,s)&&$a(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),el(n),el(n.next),n=r=s),n=n.next}while(n!==r);return Rs(n)}function BA(r,e,t,n,i,s){let l=r;do{let c=l.next.next;for(;c!==l.prev;){if(l.i!==c.i&&ZA(l,c)){let u=uy(l,c);l=Rs(l,l.next),u=Rs(u,u.next),Qa(l,e,t,n,i,s,0),Qa(u,e,t,n,i,s,0);return}c=c.next}l=l.next}while(l!==r)}function kA(r,e,t,n){const i=[];let s,l,c,u,h;for(s=0,l=e.length;s<l;s++)c=e[s]*n,u=s<l-1?e[s+1]*n:r.length,h=ly(r,c,u,n,!1),h===h.next&&(h.steiner=!0),i.push(qA(h));for(i.sort(HA),s=0;s<i.length;s++)t=VA(i[s],t);return t}function HA(r,e){return r.x-e.x}function VA(r,e){const t=GA(r,e);if(!t)return e;const n=uy(t,r);return Rs(n,n.next),Rs(t,t.next)}function GA(r,e){let t=e,n=-1/0,i;const s=r.x,l=r.y;do{if(l<=t.y&&l>=t.next.y&&t.next.y!==t.y){const m=t.x+(l-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,i=t.x<t.next.x?t:t.next,m===s))return i}t=t.next}while(t!==e);if(!i)return null;const c=i,u=i.x,h=i.y;let f=1/0,p;t=i;do s>=t.x&&t.x>=u&&s!==t.x&&Co(l<h?s:n,l,u,h,l<h?n:s,l,t.x,t.y)&&(p=Math.abs(l-t.y)/(s-t.x),$a(t,r)&&(p<f||p===f&&(t.x>i.x||t.x===i.x&&WA(i,t)))&&(i=t,f=p)),t=t.next;while(t!==c);return i}function WA(r,e){return Xt(r.prev,r,e.prev)<0&&Xt(e.next,r,r.next)<0}function XA(r,e,t,n){let i=r;do i.z===0&&(i.z=Yd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,YA(i)}function YA(r){let e,t,n,i,s,l,c,u,h=1;do{for(t=r,r=null,s=null,l=0;t;){for(l++,n=t,c=0,e=0;e<h&&(c++,n=n.nextZ,!!n);e++);for(u=h;c>0||u>0&&n;)c!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,c--):(i=n,n=n.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,h*=2}while(l>1);return r}function Yd(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function qA(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Co(r,e,t,n,i,s,l,c){return(i-l)*(e-c)>=(r-l)*(s-c)&&(r-l)*(n-c)>=(t-l)*(e-c)&&(t-l)*(s-c)>=(i-l)*(n-c)}function ZA(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!jA(r,e)&&($a(r,e)&&$a(e,r)&&JA(r,e)&&(Xt(r.prev,r,e.prev)||Xt(r,e.prev,e))||_h(r,e)&&Xt(r.prev,r,r.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function _h(r,e){return r.x===e.x&&r.y===e.y}function cy(r,e,t,n){const i=Qc(Xt(r,e,t)),s=Qc(Xt(r,e,n)),l=Qc(Xt(t,n,r)),c=Qc(Xt(t,n,e));return!!(i!==s&&l!==c||i===0&&Kc(r,t,e)||s===0&&Kc(r,n,e)||l===0&&Kc(t,r,n)||c===0&&Kc(t,e,n))}function Kc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Qc(r){return r>0?1:r<0?-1:0}function jA(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&cy(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function $a(r,e){return Xt(r.prev,r,r.next)<0?Xt(r,e,r.next)>=0&&Xt(r,r.prev,e)>=0:Xt(r,e,r.prev)<0||Xt(r,r.next,e)<0}function JA(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function uy(r,e){const t=new qd(r.i,r.x,r.y),n=new qd(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function F0(r,e,t,n){const i=new qd(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function el(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function qd(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function KA(r,e,t,n){let i=0;for(let s=e,l=t-n;s<t;s+=n)i+=(r[l]-r[s])*(r[s+1]+r[l+1]),l=s;return i}class qi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return qi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];z0(e),B0(n,e);let l=e.length;t.forEach(z0);for(let u=0;u<t.length;u++)i.push(l),l+=t[u].length,B0(n,t[u]);const c=NA.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function z0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function B0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class yh extends yt{constructor(e=new Ts([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];l(h)}this.setAttribute("position",new qe(i,3)),this.setAttribute("uv",new qe(s,2)),this.computeVertexNormals();function l(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:g-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:QA;let w,A=!1,U,C,L,z;_&&(w=_.getSpacedPoints(f),A=!0,m=!1,U=_.computeFrenetFrames(f,!1),C=new D,L=new D,z=new D),m||(x=0,g=0,y=0,S=0);const R=c.extractPoints(h);let b=R.shape;const O=R.holes;if(!qi.isClockWise(b)){b=b.reverse();for(let N=0,ye=O.length;N<ye;N++){const xe=O[N];qi.isClockWise(xe)&&(O[N]=xe.reverse())}}const Y=qi.triangulateShape(b,O),K=b;for(let N=0,ye=O.length;N<ye;N++){const xe=O[N];b=b.concat(xe)}function ae(N,ye,xe){return ye||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(ye,xe)}const Q=b.length,me=Y.length;function F(N,ye,xe){let Le,de,Qe;const Pe=N.x-ye.x,Ve=N.y-ye.y,k=xe.x-N.x,P=xe.y-N.y,ee=Pe*Pe+Ve*Ve,pe=Pe*P-Ve*k;if(Math.abs(pe)>Number.EPSILON){const he=Math.sqrt(ee),ge=Math.sqrt(k*k+P*P),je=ye.x-Ve/he,Re=ye.y+Pe/he,ke=xe.x-P/ge,ft=xe.y+k/ge,Me=((ke-je)*P-(ft-Re)*k)/(Pe*P-Ve*k);Le=je+Pe*Me-N.x,de=Re+Ve*Me-N.y;const Oe=Le*Le+de*de;if(Oe<=2)return new le(Le,de);Qe=Math.sqrt(Oe/2)}else{let he=!1;Pe>Number.EPSILON?k>Number.EPSILON&&(he=!0):Pe<-Number.EPSILON?k<-Number.EPSILON&&(he=!0):Math.sign(Ve)===Math.sign(P)&&(he=!0),he?(Le=-Ve,de=Pe,Qe=Math.sqrt(ee)):(Le=Pe,de=Ve,Qe=Math.sqrt(ee/2))}return new le(Le/Qe,de/Qe)}const j=[];for(let N=0,ye=K.length,xe=ye-1,Le=N+1;N<ye;N++,xe++,Le++)xe===ye&&(xe=0),Le===ye&&(Le=0),j[N]=F(K[N],K[xe],K[Le]);const Z=[];let re,Se=j.concat();for(let N=0,ye=O.length;N<ye;N++){const xe=O[N];re=[];for(let Le=0,de=xe.length,Qe=de-1,Pe=Le+1;Le<de;Le++,Qe++,Pe++)Qe===de&&(Qe=0),Pe===de&&(Pe=0),re[Le]=F(xe[Le],xe[Qe],xe[Pe]);Z.push(re),Se=Se.concat(re)}for(let N=0;N<x;N++){const ye=N/x,xe=g*Math.cos(ye*Math.PI/2),Le=y*Math.sin(ye*Math.PI/2)+S;for(let de=0,Qe=K.length;de<Qe;de++){const Pe=ae(K[de],j[de],Le);we(Pe.x,Pe.y,-xe)}for(let de=0,Qe=O.length;de<Qe;de++){const Pe=O[de];re=Z[de];for(let Ve=0,k=Pe.length;Ve<k;Ve++){const P=ae(Pe[Ve],re[Ve],Le);we(P.x,P.y,-xe)}}}const He=y+S;for(let N=0;N<Q;N++){const ye=m?ae(b[N],Se[N],He):b[N];A?(L.copy(U.normals[0]).multiplyScalar(ye.x),C.copy(U.binormals[0]).multiplyScalar(ye.y),z.copy(w[0]).add(L).add(C),we(z.x,z.y,z.z)):we(ye.x,ye.y,0)}for(let N=1;N<=f;N++)for(let ye=0;ye<Q;ye++){const xe=m?ae(b[ye],Se[ye],He):b[ye];A?(L.copy(U.normals[N]).multiplyScalar(xe.x),C.copy(U.binormals[N]).multiplyScalar(xe.y),z.copy(w[N]).add(L).add(C),we(z.x,z.y,z.z)):we(xe.x,xe.y,p/f*N)}for(let N=x-1;N>=0;N--){const ye=N/x,xe=g*Math.cos(ye*Math.PI/2),Le=y*Math.sin(ye*Math.PI/2)+S;for(let de=0,Qe=K.length;de<Qe;de++){const Pe=ae(K[de],j[de],Le);we(Pe.x,Pe.y,p+xe)}for(let de=0,Qe=O.length;de<Qe;de++){const Pe=O[de];re=Z[de];for(let Ve=0,k=Pe.length;Ve<k;Ve++){const P=ae(Pe[Ve],re[Ve],Le);A?we(P.x,P.y+w[f-1].y,w[f-1].x+xe):we(P.x,P.y,p+xe)}}}ie(),ve();function ie(){const N=i.length/3;if(m){let ye=0,xe=Q*ye;for(let Le=0;Le<me;Le++){const de=Y[Le];et(de[2]+xe,de[1]+xe,de[0]+xe)}ye=f+x*2,xe=Q*ye;for(let Le=0;Le<me;Le++){const de=Y[Le];et(de[0]+xe,de[1]+xe,de[2]+xe)}}else{for(let ye=0;ye<me;ye++){const xe=Y[ye];et(xe[2],xe[1],xe[0])}for(let ye=0;ye<me;ye++){const xe=Y[ye];et(xe[0]+Q*f,xe[1]+Q*f,xe[2]+Q*f)}}n.addGroup(N,i.length/3-N,0)}function ve(){const N=i.length/3;let ye=0;Ae(K,ye),ye+=K.length;for(let xe=0,Le=O.length;xe<Le;xe++){const de=O[xe];Ae(de,ye),ye+=de.length}n.addGroup(N,i.length/3-N,1)}function Ae(N,ye){let xe=N.length;for(;--xe>=0;){const Le=xe;let de=xe-1;de<0&&(de=N.length-1);for(let Qe=0,Pe=f+x*2;Qe<Pe;Qe++){const Ve=Q*Qe,k=Q*(Qe+1),P=ye+Le+Ve,ee=ye+de+Ve,pe=ye+de+k,he=ye+Le+k;ot(P,ee,pe,he)}}}function we(N,ye,xe){u.push(N),u.push(ye),u.push(xe)}function et(N,ye,xe){tt(N),tt(ye),tt(xe);const Le=i.length/3,de=E.generateTopUV(n,i,Le-3,Le-2,Le-1);ct(de[0]),ct(de[1]),ct(de[2])}function ot(N,ye,xe,Le){tt(N),tt(ye),tt(Le),tt(ye),tt(xe),tt(Le);const de=i.length/3,Qe=E.generateSideWallUV(n,i,de-6,de-3,de-2,de-1);ct(Qe[0]),ct(Qe[1]),ct(Qe[3]),ct(Qe[1]),ct(Qe[2]),ct(Qe[3])}function tt(N){i.push(u[N*3+0]),i.push(u[N*3+1]),i.push(u[N*3+2])}function ct(N){s.push(N.x),s.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $A(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,l=e.shapes.length;s<l;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Zu[i.type]().fromJSON(i)),new yh(n,e.options)}}const QA={generateTopUV:function(r,e,t,n,i){const s=e[t*3],l=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],f=e[i*3+1];return[new le(s,l),new le(c,u),new le(h,f)]},generateSideWallUV:function(r,e,t,n,i,s){const l=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],p=e[n*3+2],m=e[i*3],g=e[i*3+1],y=e[i*3+2],S=e[s*3],x=e[s*3+1],_=e[s*3+2];return Math.abs(c-f)<Math.abs(l-h)?[new le(l,1-u),new le(h,1-p),new le(m,1-y),new le(S,1-_)]:[new le(c,1-u),new le(f,1-p),new le(g,1-y),new le(x,1-_)]}};function $A(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xh extends Vr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xh(e.radius,e.detail)}}class dl extends Vr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dl(e.radius,e.detail)}}class Sh extends yt{constructor(e=.5,t=1,n=32,i=1,s=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:l},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],f=[];let p=e;const m=(t-e)/i,g=new D,y=new le;for(let S=0;S<=i;S++){for(let x=0;x<=n;x++){const _=s+x/n*l;g.x=p*Math.cos(_),g.y=p*Math.sin(_),u.push(g.x,g.y,g.z),h.push(0,0,1),y.x=(g.x/t+1)/2,y.y=(g.y/t+1)/2,f.push(y.x,y.y)}p+=m}for(let S=0;S<i;S++){const x=S*(n+1);for(let _=0;_<n;_++){const E=_+x,w=E,A=E+n+1,U=E+n+2,C=E+1;c.push(w,A,C),c.push(A,U,C)}}this.setIndex(c),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Mh extends yt{constructor(e=new Ts([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],l=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(c,u,f),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new qe(i,3)),this.setAttribute("normal",new qe(s,3)),this.setAttribute("uv",new qe(l,2));function h(f){const p=i.length/3,m=f.extractPoints(t);let g=m.shape;const y=m.holes;qi.isClockWise(g)===!1&&(g=g.reverse());for(let x=0,_=y.length;x<_;x++){const E=y[x];qi.isClockWise(E)===!0&&(y[x]=E.reverse())}const S=qi.triangulateShape(g,y);for(let x=0,_=y.length;x<_;x++){const E=y[x];g=g.concat(E)}for(let x=0,_=g.length;x<_;x++){const E=g[x];i.push(E.x,E.y,0),s.push(0,0,1),l.push(E.x,E.y)}for(let x=0,_=S.length;x<_;x++){const E=S[x],w=E[0]+p,A=E[1]+p,U=E[2]+p;n.push(w,A,U),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return eb(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const l=t[e.shapes[i]];n.push(l)}return new Mh(n,e.curveSegments)}}function eb(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class pl extends yt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(l+c,Math.PI);let h=0;const f=[],p=new D,m=new D,g=[],y=[],S=[],x=[];for(let _=0;_<=n;_++){const E=[],w=_/n;let A=0;_===0&&l===0?A=.5/t:_===n&&u===Math.PI&&(A=-.5/t);for(let U=0;U<=t;U++){const C=U/t;p.x=-e*Math.cos(i+C*s)*Math.sin(l+w*c),p.y=e*Math.cos(l+w*c),p.z=e*Math.sin(i+C*s)*Math.sin(l+w*c),y.push(p.x,p.y,p.z),m.copy(p).normalize(),S.push(m.x,m.y,m.z),x.push(C+A,1-w),E.push(h++)}f.push(E)}for(let _=0;_<n;_++)for(let E=0;E<t;E++){const w=f[_][E+1],A=f[_][E],U=f[_+1][E],C=f[_+1][E+1];(_!==0||l>0)&&g.push(w,A,C),(_!==n-1||u<Math.PI)&&g.push(A,U,C)}this.setIndex(g),this.setAttribute("position",new qe(y,3)),this.setAttribute("normal",new qe(S,3)),this.setAttribute("uv",new qe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wh extends Vr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wh(e.radius,e.detail)}}class Eh extends yt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],h=[],f=new D,p=new D,m=new D;for(let g=0;g<=n;g++)for(let y=0;y<=i;y++){const S=y/i*s,x=g/n*Math.PI*2;p.x=(e+t*Math.cos(x))*Math.cos(S),p.y=(e+t*Math.cos(x))*Math.sin(S),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),h.push(y/i),h.push(g/n)}for(let g=1;g<=n;g++)for(let y=1;y<=i;y++){const S=(i+1)*g+y-1,x=(i+1)*(g-1)+y-1,_=(i+1)*(g-1)+y,E=(i+1)*g+y;l.push(S,x,E),l.push(x,_,E)}this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Th extends yt{constructor(e=1,t=.4,n=64,i=8,s=2,l=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:l},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],f=[],p=new D,m=new D,g=new D,y=new D,S=new D,x=new D,_=new D;for(let w=0;w<=n;++w){const A=w/n*s*Math.PI*2;E(A,s,l,e,g),E(A+.01,s,l,e,y),x.subVectors(y,g),_.addVectors(y,g),S.crossVectors(x,_),_.crossVectors(S,x),S.normalize(),_.normalize();for(let U=0;U<=i;++U){const C=U/i*Math.PI*2,L=-t*Math.cos(C),z=t*Math.sin(C);p.x=g.x+(L*_.x+z*S.x),p.y=g.y+(L*_.y+z*S.y),p.z=g.z+(L*_.z+z*S.z),u.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),h.push(m.x,m.y,m.z),f.push(w/n),f.push(U/i)}}for(let w=1;w<=n;w++)for(let A=1;A<=i;A++){const U=(i+1)*(w-1)+(A-1),C=(i+1)*w+(A-1),L=(i+1)*w+A,z=(i+1)*(w-1)+A;c.push(U,C,z),c.push(C,L,z)}this.setIndex(c),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(f,2));function E(w,A,U,C,L){const z=Math.cos(w),R=Math.sin(w),b=U/A*w,O=Math.cos(b);L.x=C*(2+O)*.5*z,L.y=C*(2+O)*R*.5,L.z=C*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Th(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ah extends yt{constructor(e=new Rp(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const l=e.computeFrenetFrames(t,s);this.tangents=l.tangents,this.normals=l.normals,this.binormals=l.binormals;const c=new D,u=new D,h=new le;let f=new D;const p=[],m=[],g=[],y=[];S(),this.setIndex(y),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(m,3)),this.setAttribute("uv",new qe(g,2));function S(){for(let w=0;w<t;w++)x(w);x(s===!1?t:0),E(),_()}function x(w){f=e.getPointAt(w/t,f);const A=l.normals[w],U=l.binormals[w];for(let C=0;C<=i;C++){const L=C/i*Math.PI*2,z=Math.sin(L),R=-Math.cos(L);u.x=R*A.x+z*U.x,u.y=R*A.y+z*U.y,u.z=R*A.z+z*U.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=f.x+n*u.x,c.y=f.y+n*u.y,c.z=f.z+n*u.z,p.push(c.x,c.y,c.z)}}function _(){for(let w=1;w<=t;w++)for(let A=1;A<=i;A++){const U=(i+1)*(w-1)+(A-1),C=(i+1)*w+(A-1),L=(i+1)*w+A,z=(i+1)*(w-1)+A;y.push(U,C,z),y.push(C,L,z)}}function E(){for(let w=0;w<=t;w++)for(let A=0;A<=i;A++)h.x=w/t,h.y=A/i,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ah(new Zu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ip extends yt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,s=new D;if(e.index!==null){const l=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,f=u.length;h<f;++h){const p=u[h],m=p.start,g=p.count;for(let y=m,S=m+g;y<S;y+=3)for(let x=0;x<3;x++){const _=c.getX(y+x),E=c.getX(y+(x+1)%3);i.fromBufferAttribute(l,_),s.fromBufferAttribute(l,E),k0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const l=e.attributes.position;for(let c=0,u=l.count/3;c<u;c++)for(let h=0;h<3;h++){const f=3*c+h,p=3*c+(h+1)%3;i.fromBufferAttribute(l,f),s.fromBufferAttribute(l,p),k0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new qe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function k0(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var H0=Object.freeze({__proto__:null,BoxGeometry:Is,CapsuleGeometry:ph,CircleGeometry:mh,ConeGeometry:gh,CylinderGeometry:Vo,DodecahedronGeometry:vh,EdgesGeometry:ay,ExtrudeGeometry:yh,IcosahedronGeometry:xh,LatheGeometry:fl,OctahedronGeometry:dl,PlaneGeometry:ko,PolyhedronGeometry:Vr,RingGeometry:Sh,ShapeGeometry:Mh,SphereGeometry:pl,TetrahedronGeometry:wh,TorusGeometry:Eh,TorusKnotGeometry:Th,TubeGeometry:Ah,WireframeGeometry:Ip});class hy extends Tn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class fy extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lp extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dy extends Lp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class py extends Tn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class my extends Tn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class gy extends Tn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class vy extends Tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _y extends Tn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Be(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yy extends Vn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ys(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function xy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Sy(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Zd(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,l=0;l!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[l++]=r[c+u]}return i}function Dp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let l=s[n];if(l!==void 0)if(Array.isArray(l))do l=s[n],l!==void 0&&(e.push(s.time),t.push.apply(t,l)),s=r[i++];while(s!==void 0);else if(l.toArray!==void 0)do l=s[n],l!==void 0&&(e.push(s.time),l.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do l=s[n],l!==void 0&&(e.push(s.time),t.push(l)),s=r[i++];while(s!==void 0)}function tb(r,e,t,n,i=30){const s=r.clone();s.name=e;const l=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],f=h.getValueSize(),p=[],m=[];for(let g=0;g<h.times.length;++g){const y=h.times[g]*i;if(!(y<t||y>=n)){p.push(h.times[g]);for(let S=0;S<f;++S)m.push(h.values[g*f+S])}}p.length!==0&&(h.times=ys(p,h.times.constructor),h.values=ys(m,h.values.constructor),l.push(h))}s.tracks=l;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function nb(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let l=0;l<i;++l){const c=t.tracks[l],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(_){return _.name===c.name&&_.ValueTypeName===u});if(h===void 0)continue;let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const y=c.times.length-1;let S;if(s<=c.times[0]){const _=f,E=p-f;S=c.values.slice(_,E)}else if(s>=c.times[y]){const _=y*p+f,E=_+p-f;S=c.values.slice(_,E)}else{const _=c.createInterpolant(),E=f,w=p-f;_.evaluate(s),S=_.resultBuffer.slice(E,w)}u==="quaternion"&&new Un().fromArray(S).normalize().conjugate().toArray(S);const x=h.times.length;for(let _=0;_<x;++_){const E=_*g+m;if(u==="quaternion")Un.multiplyQuaternionsFlat(h.values,E,S,0,h.values,E);else{const w=g-m*2;for(let A=0;A<w;++A)h.values[E+A]-=S[A]}}}return r.blendMode=fp,r}const ib={convertArray:ys,isTypedArray:xy,getKeyframeOrder:Sy,sortedArray:Zd,flattenJSON:Dp,subclip:tb,makeClipAdditive:nb};class ml{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let l;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}l=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}l=n,n=0;break n}break e}for(;n<l;){const c=n+l>>>1;e<t[c]?l=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let l=0;l!==i;++l)t[l]=n[s+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class My extends ml{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gs,endingEnd:gs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,l=e+1,c=i[s],u=i[l];if(c===void 0)switch(this.getSettings_().endingStart){case vs:s=e,c=2*t-n;break;case Wa:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case vs:l=e,u=2*n-t;break;case Wa:l=1,u=n+i[1]-i[0];break;default:l=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=l*f}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,y=(n-t)/(i-t),S=y*y,x=S*y,_=-m*x+2*m*S-m*y,E=(1+m)*x+(-1.5-2*m)*S+(-.5+m)*y+1,w=(-1-g)*x+(1.5+g)*S+.5*y,A=g*x-g*S;for(let U=0;U!==c;++U)s[U]=_*l[f+U]+E*l[h+U]+w*l[u+U]+A*l[p+U];return s}}class Up extends ml{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(i-t),p=1-f;for(let m=0;m!==c;++m)s[m]=l[h+m]*p+l[u+m]*f;return s}}class wy extends ml{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ii{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ys(t,this.TimeBufferType),this.values=ys(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ys(e.times,Array),values:ys(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Up(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new My(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ga:t=this.InterpolantFactoryMethodDiscrete;break;case Gu:t=this.InterpolantFactoryMethodLinear;break;case fu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ga;case this.InterpolantFactoryMethodLinear:return Gu;case this.InterpolantFactoryMethodSmooth:return fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,l=i-1;for(;s!==i&&n[s]<e;)++s;for(;l!==-1&&n[l]>t;)--l;if(++l,s!==0||l!==i){s>=l&&(l=Math.max(l,1),s=l-1);const c=this.getValueSize();this.times=n.slice(s,l),this.values=this.values.slice(s*c,l*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(l!==null&&l>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,l),e=!1;break}l=u}if(i!==void 0&&xy(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fu,s=e.length-1;let l=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)u=!0;else{const p=c*n,m=p-n,g=p+n;for(let y=0;y!==n;++y){const S=t[p+y];if(S!==t[m+y]||S!==t[g+y]){u=!0;break}}}if(u){if(c!==l){e[l]=e[c];const p=c*n,m=l*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++l}}if(s>0){e[l]=e[s];for(let c=s*n,u=l*n,h=0;h!==n;++h)t[u+h]=t[c+h];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Gu;class Ls extends Ii{constructor(e,t,n){super(e,t,n)}}Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Ga;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Np extends Ii{}Np.prototype.ValueTypeName="color";class tl extends Ii{}tl.prototype.ValueTypeName="number";class Ey extends ml{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)Un.slerpFlat(s,0,l,h-c,l,h,u);return s}}class gl extends Ii{InterpolantFactoryMethodLinear(e){return new Ey(this.times,this.values,this.getValueSize(),e)}}gl.prototype.ValueTypeName="quaternion";gl.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends Ii{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=Ga;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class nl extends Ii{}nl.prototype.ValueTypeName="vector";class il{constructor(e="",t=-1,n=[],i=rh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let l=0,c=n.length;l!==c;++l)t.push(sb(n[l]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,l=n.length;s!==l;++s)t.push(Ii.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,l=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=Sy(u);u=Zd(u,1,f),h=Zd(h,1,f),!i&&u[0]===0&&(u.push(s),h.push(h[0])),l.push(new tl(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const l=[];for(const c in i)l.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return l}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,g,y,S){if(g.length!==0){const x=[],_=[];Dp(g,x,_,y),x.length!==0&&S.push(new p(m,x,_))}},i=[],s=e.name||"default",l=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let y;for(y=0;y<m.length;y++)if(m[y].morphTargets)for(let S=0;S<m[y].morphTargets.length;S++)g[m[y].morphTargets[S]]=-1;for(const S in g){const x=[],_=[];for(let E=0;E!==m[y].morphTargets.length;++E){const w=m[y];x.push(w.time),_.push(w.morphTarget===S?1:0)}i.push(new tl(".morphTargetInfluence["+S+"]",x,_))}u=g.length*l}else{const g=".bones["+t[p].name+"]";n(nl,g+".position",m,"pos",i),n(gl,g+".quaternion",m,"rot",i),n(nl,g+".scale",m,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function rb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tl;case"vector":case"vector2":case"vector3":case"vector4":return nl;case"color":return Np;case"quaternion":return gl;case"bool":case"boolean":return Ls;case"string":return Ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function sb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rb(r.type);if(r.times===void 0){const t=[],n=[];Dp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const dr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Op{constructor(e,t,n){const i=this;let s=!1,l=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,l,c),s=!0},this.itemEnd=function(f){l++,i.onProgress!==void 0&&i.onProgress(f,l,c),l===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=h.length;p<m;p+=2){const g=h[p],y=h[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return y}return null}}}const Ty=new Op;class jn{constructor(e){this.manager=e!==void 0?e:Ty,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}jn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar={};class ob extends Error{constructor(e,t){super(e),this.response=t}}class _r extends jn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=dr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ar[e]!==void 0){ar[e].push({onLoad:t,onProgress:n,onError:i});return}ar[e]=[],ar[e].push({onLoad:t,onProgress:n,onError:i});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=ar[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=m?parseInt(m):0,y=g!==0;let S=0;const x=new ReadableStream({start(_){E();function E(){p.read().then(({done:w,value:A})=>{if(w)_.close();else{S+=A.byteLength;const U=new ProgressEvent("progress",{lengthComputable:y,loaded:S,total:g});for(let C=0,L=f.length;C<L;C++){const z=f[C];z.onProgress&&z.onProgress(U)}_.enqueue(A),E()}},w=>{_.error(w)})}}});return new Response(x)}else throw new ob(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(y=>g.decode(y))}}}).then(h=>{dr.add(e,h);const f=ar[e];delete ar[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onLoad&&g.onLoad(h)}}).catch(h=>{const f=ar[e];if(f===void 0)throw this.manager.itemError(e),h;delete ar[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ab extends jn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=new _r(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=il.parse(e[n]);t.push(i)}return t}}class lb extends jn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=[],c=new fh,u=new _r(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function f(p){u.load(e[p],function(m){const g=s.parse(m,!0);l[p]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(c.minFilter=on),c.image=l,c.format=g.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)f(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let y=0;y<g;y++){l[y]={mipmaps:[]};for(let S=0;S<m.mipmapCount;S++)l[y].mipmaps.push(m.mipmaps[y*m.mipmapCount+S]),l[y].format=m.format,l[y].width=m.width,l[y].height=m.height}c.image=l}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=on),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}class rl extends jn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=dr.get(e);if(l!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0),l;const c=Ja("img");function u(){f(),dr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class cb extends jn{constructor(e){super(e)}load(e,t,n,i){const s=new ul;s.colorSpace=gi;const l=new rl(this.manager);l.setCrossOrigin(this.crossOrigin),l.setPath(this.path);let c=0;function u(h){l.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class ub extends jn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=new Yi,c=new _r(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(f){if(i!==void 0)i(f);else{console.error(f);return}}h.image!==void 0?l.image=h.image:h.data!==void 0&&(l.image.width=h.width,l.image.height=h.height,l.image.data=h.data),l.wrapS=h.wrapS!==void 0?h.wrapS:vi,l.wrapT=h.wrapT!==void 0?h.wrapT:vi,l.magFilter=h.magFilter!==void 0?h.magFilter:on,l.minFilter=h.minFilter!==void 0?h.minFilter:on,l.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(l.colorSpace=h.colorSpace),h.flipY!==void 0&&(l.flipY=h.flipY),h.format!==void 0&&(l.format=h.format),h.type!==void 0&&(l.type=h.type),h.mipmaps!==void 0&&(l.mipmaps=h.mipmaps,l.minFilter=Gi),h.mipmapCount===1&&(l.minFilter=on),h.generateMipmaps!==void 0&&(l.generateMipmaps=h.generateMipmaps),l.needsUpdate=!0,t&&t(l,h)},n,i),l}}class hb extends jn{constructor(e){super(e)}load(e,t,n,i){const s=new Yt,l=new rl(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Gr extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ay extends Gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _d=new st,V0=new D,G0=new D;class Fp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hl,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;V0.setFromMatrixPosition(e.matrixWorld),t.position.copy(V0),G0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(G0),t.updateMatrixWorld(),_d.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_d)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fb extends Fp{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Do*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class by extends Gr{constructor(e,t,n=0,i=Math.PI/3,s=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=l,this.map=null,this.shadow=new fb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const W0=new st,Ma=new D,yd=new D;class db extends Fp{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ma.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ma),yd.copy(n.position),yd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(yd),n.updateMatrixWorld(),i.makeTranslation(-Ma.x,-Ma.y,-Ma.z),W0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(W0)}}class Cy extends Gr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new db}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class pb extends Fp{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ry extends Gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new pb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Py extends Gr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Iy extends Gr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Ly{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,l=this.coefficients;return t.copy(l[0]).multiplyScalar(.282095),t.addScaledVector(l[1],.488603*i),t.addScaledVector(l[2],.488603*s),t.addScaledVector(l[3],.488603*n),t.addScaledVector(l[4],1.092548*(n*i)),t.addScaledVector(l[5],1.092548*(i*s)),t.addScaledVector(l[6],.315392*(3*s*s-1)),t.addScaledVector(l[7],1.092548*(n*s)),t.addScaledVector(l[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,l=this.coefficients;return t.copy(l[0]).multiplyScalar(.886227),t.addScaledVector(l[1],2*.511664*i),t.addScaledVector(l[2],2*.511664*s),t.addScaledVector(l[3],2*.511664*n),t.addScaledVector(l[4],2*.429043*n*i),t.addScaledVector(l[5],2*.429043*i*s),t.addScaledVector(l[6],.743125*s*s-.247708),t.addScaledVector(l[7],2*.429043*n*s),t.addScaledVector(l[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Dy extends Gr{constructor(e=new Ly,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class bh extends jn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,l=new _r(s.manager);l.setPath(s.path),l.setRequestHeader(s.requestHeader),l.setWithCredentials(s.withCredentials),l.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=bh.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(i.uniforms[s]={},l.type){case"t":i.uniforms[s].value=n(l.value);break;case"c":i.uniforms[s].value=new Be().setHex(l.value);break;case"v2":i.uniforms[s].value=new le().fromArray(l.value);break;case"v3":i.uniforms[s].value=new D().fromArray(l.value);break;case"v4":i.uniforms[s].value=new Et().fromArray(l.value);break;case"m3":i.uniforms[s].value=new gt().fromArray(l.value);break;case"m4":i.uniforms[s].value=new st().fromArray(l.value);break;default:i.uniforms[s].value=l.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new le().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:hy,SpriteMaterial:Mp,RawShaderMaterial:fy,ShaderMaterial:_i,PointsMaterial:Ep,MeshPhysicalMaterial:dy,MeshStandardMaterial:Lp,MeshPhongMaterial:py,MeshToonMaterial:my,MeshNormalMaterial:gy,MeshLambertMaterial:vy,MeshDepthMaterial:xp,MeshDistanceMaterial:Sp,MeshBasicMaterial:Hr,MeshMatcapMaterial:_y,LineDashedMaterial:yy,LineBasicMaterial:Vn,Material:Tn};return new t[e]}}class jd{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class zp extends yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Uy extends jn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=new _r(s.manager);l.setPath(s.path),l.setRequestHeader(s.requestHeader),l.setWithCredentials(s.withCredentials),l.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(g,y){if(t[y]!==void 0)return t[y];const x=g.interleavedBuffers[y],_=s(g,x.buffer),E=To(x.type,_),w=new uh(E,x.stride);return w.uuid=x.uuid,t[y]=w,w}function s(g,y){if(n[y]!==void 0)return n[y];const x=g.arrayBuffers[y],_=new Uint32Array(x).buffer;return n[y]=_,_}const l=e.isInstancedBufferGeometry?new zp:new yt,c=e.data.index;if(c!==void 0){const g=To(c.type,c.array);l.setIndex(new Ut(g,1))}const u=e.data.attributes;for(const g in u){const y=u[g];let S;if(y.isInterleavedBufferAttribute){const x=i(e.data,y.data);S=new ri(x,y.itemSize,y.offset,y.normalized)}else{const x=To(y.type,y.array),_=y.isInstancedBufferAttribute?No:Ut;S=new _(x,y.itemSize,y.normalized)}y.name!==void 0&&(S.name=y.name),y.usage!==void 0&&S.setUsage(y.usage),l.setAttribute(g,S)}const h=e.data.morphAttributes;if(h)for(const g in h){const y=h[g],S=[];for(let x=0,_=y.length;x<_;x++){const E=y[x];let w;if(E.isInterleavedBufferAttribute){const A=i(e.data,E.data);w=new ri(A,E.itemSize,E.offset,E.normalized)}else{const A=To(E.type,E.array);w=new Ut(A,E.itemSize,E.normalized)}E.name!==void 0&&(w.name=E.name),S.push(w)}l.morphAttributes[g]=S}e.data.morphTargetsRelative&&(l.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let g=0,y=p.length;g!==y;++g){const S=p[g];l.addGroup(S.start,S.count,S.materialIndex)}const m=e.data.boundingSphere;if(m!==void 0){const g=new D;m.center!==void 0&&g.fromArray(m.center),l.boundingSphere=new yn(g,m.radius)}return e.name&&(l.name=e.name),e.userData&&(l.userData=e.userData),l}}class mb extends jn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=this.path===""?jd.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||l;const c=new _r(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){i!==void 0&&i(p),console.error("THREE:ObjectLoader: Can't parse "+e+".",p.message);return}const f=h.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?jd.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new _r(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const l=await s.loadAsync(e,t),c=JSON.parse(l),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),l=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,l),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),f=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,f),this.bindLightTargets(h),t!==void 0){let p=!1;for(const m in l)if(l[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),l=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,l),u=this.parseObject(e.object,i,c,l,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),this.bindLightTargets(u),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Ts().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,l=e.length;s<l;s++){const c=new hh().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Uy;for(let s=0,l=e.length;s<l;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in H0?c=H0[u.type].fromJSON(u,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new bh;s.setTextures(t);for(let l=0,c=e.length;l<c;l++){const u=e[l];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=il.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function l(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return l(f)}else return u.data?{data:To(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new Op(t);s=new rl(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,f=e.length;h<f;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const g=[];for(let y=0,S=m.length;y<S;y++){const x=m[y],_=c(x);_!==null&&(_ instanceof HTMLImageElement?g.push(_):g.push(new Yi(_.data,_.width,_.height)))}i[p.uuid]=new _s(g)}else{const g=c(p.url);i[p.uuid]=new _s(g)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return l.data?{data:To(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){i=new rl(this.manager),i.setCrossOrigin(this.crossOrigin);for(let l=0,c=e.length;l<c;l++){const u=e[l],h=u.url;if(Array.isArray(h)){const f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p],y=await s(g);y!==null&&(y instanceof HTMLImageElement?f.push(y):f.push(new Yi(y.data,y.width,y.height)))}n[u.uuid]=new _s(f)}else{const f=await s(u.url);n[u.uuid]=new _s(f)}}}return n}parseTextures(e,t){function n(s,l){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),l[s])}const i={};if(e!==void 0)for(let s=0,l=e.length;s<l;s++){const c=e[s];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let f;Array.isArray(h)?(f=new ul,h.length===6&&(f.needsUpdate=!0)):(h&&h.data?f=new Yi:f=new Yt,h&&(f.needsUpdate=!0)),f.source=u,f.uuid=c.uuid,c.name!==void 0&&(f.name=c.name),c.mapping!==void 0&&(f.mapping=n(c.mapping,gb)),c.channel!==void 0&&(f.channel=c.channel),c.offset!==void 0&&f.offset.fromArray(c.offset),c.repeat!==void 0&&f.repeat.fromArray(c.repeat),c.center!==void 0&&f.center.fromArray(c.center),c.rotation!==void 0&&(f.rotation=c.rotation),c.wrap!==void 0&&(f.wrapS=n(c.wrap[0],X0),f.wrapT=n(c.wrap[1],X0)),c.format!==void 0&&(f.format=c.format),c.internalFormat!==void 0&&(f.internalFormat=c.internalFormat),c.type!==void 0&&(f.type=c.type),c.colorSpace!==void 0&&(f.colorSpace=c.colorSpace),c.minFilter!==void 0&&(f.minFilter=n(c.minFilter,Y0)),c.magFilter!==void 0&&(f.magFilter=n(c.magFilter,Y0)),c.anisotropy!==void 0&&(f.anisotropy=c.anisotropy),c.flipY!==void 0&&(f.flipY=c.flipY),c.generateMipmaps!==void 0&&(f.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(f.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(f.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(f.compareFunction=c.compareFunction),c.userData!==void 0&&(f.userData=c.userData),i[c.uuid]=f}return i}parseObject(e,t,n,i,s){let l;function c(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let y=0,S=m.length;y<S;y++){const x=m[y];n[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),g.push(n[x])}return g}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",m),i[m]}let f,p;switch(e.type){case"Scene":l=new Xu,e.background!==void 0&&(Number.isInteger(e.background)?l.background=new Be(e.background):l.background=h(e.background)),e.environment!==void 0&&(l.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?l.fog=new ch(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(l.fog=new lh(e.fog.color,e.fog.density)),e.fog.name!==""&&(l.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(l.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(l.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&l.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(l.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&l.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":l=new Kt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(l.focus=e.focus),e.zoom!==void 0&&(l.zoom=e.zoom),e.filmGauge!==void 0&&(l.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(l.filmOffset=e.filmOffset),e.view!==void 0&&(l.view=Object.assign({},e.view));break;case"OrthographicCamera":l=new fr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(l.zoom=e.zoom),e.view!==void 0&&(l.view=Object.assign({},e.view));break;case"AmbientLight":l=new Py(e.color,e.intensity);break;case"DirectionalLight":l=new Ry(e.color,e.intensity),l.target=e.target||"";break;case"PointLight":l=new Cy(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":l=new Iy(e.color,e.intensity,e.width,e.height);break;case"SpotLight":l=new by(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),l.target=e.target||"";break;case"HemisphereLight":l=new Ay(e.color,e.groundColor,e.intensity);break;case"LightProbe":l=new Dy().fromJSON(e);break;case"SkinnedMesh":f=c(e.geometry),p=u(e.material),l=new K_(f,p),e.bindMode!==void 0&&(l.bindMode=e.bindMode),e.bindMatrix!==void 0&&l.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(l.skeleton=e.skeleton);break;case"Mesh":f=c(e.geometry),p=u(e.material),l=new en(f,p);break;case"InstancedMesh":f=c(e.geometry),p=u(e.material);const m=e.count,g=e.instanceMatrix,y=e.instanceColor;l=new Q_(f,p,m),l.instanceMatrix=new No(new Float32Array(g.array),16),y!==void 0&&(l.instanceColor=new No(new Float32Array(y.array),y.itemSize));break;case"BatchedMesh":f=c(e.geometry),p=u(e.material),l=new $_(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),l.geometry=f,l.perObjectFrustumCulled=e.perObjectFrustumCulled,l.sortObjects=e.sortObjects,l._drawRanges=e.drawRanges,l._reservedRanges=e.reservedRanges,l._visibility=e.visibility,l._active=e.active,l._bounds=e.bounds.map(S=>{const x=new _n;x.min.fromArray(S.boxMin),x.max.fromArray(S.boxMax);const _=new yn;return _.radius=S.sphereRadius,_.center.fromArray(S.sphereCenter),{boxInitialized:S.boxInitialized,box:x,sphereInitialized:S.sphereInitialized,sphere:_}}),l._maxInstanceCount=e.maxInstanceCount,l._maxVertexCount=e.maxVertexCount,l._maxIndexCount=e.maxIndexCount,l._geometryInitialized=e.geometryInitialized,l._geometryCount=e.geometryCount,l._matricesTexture=h(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(l._colorsTexture=h(e.colorsTexture.uuid));break;case"LOD":l=new J_;break;case"Line":l=new Br(c(e.geometry),u(e.material));break;case"LineLoop":l=new ey(c(e.geometry),u(e.material));break;case"LineSegments":l=new Zi(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":l=new ty(c(e.geometry),u(e.material));break;case"Sprite":l=new j_(u(e.material));break;case"Group":l=new bo;break;case"Bone":l=new wp;break;default:l=new bt}if(l.uuid=e.uuid,e.name!==void 0&&(l.name=e.name),e.matrix!==void 0?(l.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(l.matrixAutoUpdate=e.matrixAutoUpdate),l.matrixAutoUpdate&&l.matrix.decompose(l.position,l.quaternion,l.scale)):(e.position!==void 0&&l.position.fromArray(e.position),e.rotation!==void 0&&l.rotation.fromArray(e.rotation),e.quaternion!==void 0&&l.quaternion.fromArray(e.quaternion),e.scale!==void 0&&l.scale.fromArray(e.scale)),e.up!==void 0&&l.up.fromArray(e.up),e.castShadow!==void 0&&(l.castShadow=e.castShadow),e.receiveShadow!==void 0&&(l.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(l.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(l.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(l.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(l.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&l.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(l.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(l.visible=e.visible),e.frustumCulled!==void 0&&(l.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(l.renderOrder=e.renderOrder),e.userData!==void 0&&(l.userData=e.userData),e.layers!==void 0&&(l.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)l.add(this.parseObject(m[g],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const y=m[g];l.animations.push(s[y])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(l.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const y=m[g],S=l.getObjectByProperty("uuid",y.object);S!==void 0&&l.addLevel(S,y.distance,y.hysteresis)}}return l}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new bt}})}}const gb={UVMapping:Ku,CubeReflectionMapping:gr,CubeRefractionMapping:zr,EquirectangularReflectionMapping:Ba,EquirectangularRefractionMapping:ka,CubeUVReflectionMapping:zo},X0={RepeatWrapping:Ha,ClampToEdgeWrapping:vi,MirroredRepeatWrapping:Va},Y0={NearestFilter:vn,NearestMipmapNearestFilter:np,NearestMipmapLinearFilter:Eo,LinearFilter:on,LinearMipmapNearestFilter:Ca,LinearMipmapLinearFilter:Gi};class vb extends jn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=dr.get(e);if(l!==void 0){if(s.manager.itemStart(e),l.then){l.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return dr.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),dr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});dr.add(e,u),s.manager.itemStart(e)}}let $c;class Bp{static getContext(){return $c===void 0&&($c=new(window.AudioContext||window.webkitAudioContext)),$c}static setContext(e){$c=e}}class _b extends jn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=new _r(this.manager);l.setResponseType("arraybuffer"),l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{const h=u.slice(0);Bp.getContext().decodeAudioData(h,function(p){t(p)}).catch(c)}catch(h){c(h)}},n,i);function c(u){i?i(u):console.error(u),s.manager.itemError(e)}}}const q0=new st,Z0=new st,os=new st;class yb{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Kt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Kt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,os.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,l=t.near*Math.tan(ws*t.fov*.5)/t.zoom;let c,u;Z0.elements[12]=-i,q0.elements[12]=i,c=-l*t.aspect+s,u=l*t.aspect+s,os.elements[0]=2*t.near/(u-c),os.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(os),c=-l*t.aspect-s,u=l*t.aspect-s,os.elements[0]=2*t.near/(u-c),os.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(os)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Z0),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(q0)}}class kp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=j0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=j0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function j0(){return(typeof performance>"u"?Date:performance).now()}const as=new D,J0=new Un,xb=new D,ls=new D;class Sb extends bt{constructor(){super(),this.type="AudioListener",this.context=Bp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new kp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(as,J0,xb),ls.set(0,0,-1).applyQuaternion(J0),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(as.x,i),t.positionY.linearRampToValueAtTime(as.y,i),t.positionZ.linearRampToValueAtTime(as.z,i),t.forwardX.linearRampToValueAtTime(ls.x,i),t.forwardY.linearRampToValueAtTime(ls.y,i),t.forwardZ.linearRampToValueAtTime(ls.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(as.x,as.y,as.z),t.setOrientation(ls.x,ls.y,ls.z,n.x,n.y,n.z)}}class Ny extends bt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const cs=new D,K0=new Un,Mb=new D,us=new D;class wb extends Ny{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(cs,K0,Mb),us.set(0,0,1).applyQuaternion(K0);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(cs.x,n),t.positionY.linearRampToValueAtTime(cs.y,n),t.positionZ.linearRampToValueAtTime(cs.z,n),t.orientationX.linearRampToValueAtTime(us.x,n),t.orientationY.linearRampToValueAtTime(us.y,n),t.orientationZ.linearRampToValueAtTime(us.z,n)}else t.setPosition(cs.x,cs.y,cs.z),t.setOrientation(us.x,us.y,us.z)}}class Eb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Oy{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,l;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,l=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,l=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,l=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=l,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let l=this.cumulativeWeight;if(l===0){for(let c=0;c!==i;++c)n[s+c]=n[c];l=t}else{l+=t;const c=t/l;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=l}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,l=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}l>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,l=i;s!==l;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let l=0;l!==s;++l)e[t+l]=e[n+l]}_slerp(e,t,n,i){Un.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const l=this._workIndex*s;Un.multiplyQuaternionsFlat(e,l,e,t,e,n),Un.slerpFlat(e,t,e,t,e,l,i)}_lerp(e,t,n,i,s){const l=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*l+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let l=0;l!==s;++l){const c=t+l;e[c]=e[c]+e[n+l]*i}}}const Hp="\\[\\]\\.:\\/",Tb=new RegExp("["+Hp+"]","g"),Vp="[^"+Hp+"]",Ab="[^"+Hp.replace("\\.","")+"]",bb=/((?:WC+[\/:])*)/.source.replace("WC",Vp),Cb=/(WCOD+)?/.source.replace("WCOD",Ab),Rb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vp),Pb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vp),Ib=new RegExp("^"+bb+Cb+Rb+Pb+"$"),Lb=["material","materials","bones","map"];class Db{constructor(e,t,n){const i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tb,"")}static parseTrackName(e){const t=Ib.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Lb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let l=0;l<s.length;l++){const c=s[l];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const l=e[i];if(l===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=s}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=Db;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ub{constructor(){this.isAnimationObjectGroup=!0,this.uuid=si(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,l=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let f=0,p=arguments.length;f!==p;++f){const m=arguments[f],g=m.uuid;let y=t[g];if(y===void 0){y=u++,t[g]=y,e.push(m);for(let S=0,x=l;S!==x;++S)s[S].push(new At(m,n[S],i[S]))}else if(y<h){c=e[y];const S=--h,x=e[S];t[x.uuid]=y,e[y]=x,t[g]=S,e[S]=m;for(let _=0,E=l;_!==E;++_){const w=s[_],A=w[S];let U=w[y];w[y]=A,U===void 0&&(U=new At(m,n[_],i[_])),w[S]=U}}else e[y]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let l=0,c=arguments.length;l!==c;++l){const u=arguments[l],h=u.uuid,f=t[h];if(f!==void 0&&f>=s){const p=s++,m=e[p];t[m.uuid]=f,e[f]=m,t[h]=p,e[p]=u;for(let g=0,y=i;g!==y;++g){const S=n[g],x=S[p],_=S[f];S[f]=x,S[p]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,l=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],f=h.uuid,p=t[f];if(p!==void 0)if(delete t[f],p<s){const m=--s,g=e[m],y=--l,S=e[y];t[g.uuid]=p,e[p]=g,t[S.uuid]=m,e[m]=S,e.pop();for(let x=0,_=i;x!==_;++x){const E=n[x],w=E[m],A=E[y];E[p]=w,E[m]=A,E.pop()}}else{const m=--l,g=e[m];m>0&&(t[g.uuid]=p),e[p]=g,e.pop();for(let y=0,S=i;y!==S;++y){const x=n[y];x[p]=x[m],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const l=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,f=this.nCachedObjects_,p=new Array(h);i=s.length,n[e]=i,l.push(e),c.push(t),s.push(p);for(let m=f,g=u.length;m!==g;++m){const y=u[m];p[m]=new At(y,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,l=this._bindings,c=l.length-1,u=l[c],h=e[c];t[h]=n,l[n]=u,l.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class Fy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,l=s.length,c=new Array(l),u={endingStart:gs,endingEnd:gs};for(let h=0;h!==l;++h){const f=s[h].createInterpolant(null);c[h]=f,f.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(l),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=y_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,l=s/i,c=i/s;e.warp(1,l,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,l=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/l,h[1]=t/l,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const l=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case fp:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(l),h[f].accumulateAdditive(c);break;case rh:default:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(l),h[f].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const l=n===x_;if(e===0)return s===-1?i:l&&(s&1)===1?t-i:i;if(n===__){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,l)):this._setEndings(this.repetitions===0,!0,l)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,l)}else this._setEndings(!1,!1,l);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(l&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=vs,i.endingEnd=vs):(e?i.endingStart=this.zeroSlopeAtStart?vs:gs:i.endingStart=Wa,t?i.endingEnd=this.zeroSlopeAtEnd?vs:gs:i.endingEnd=Wa)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let l=this._weightInterpolant;l===null&&(l=i._lendControlInterpolant(),this._weightInterpolant=l);const c=l.parameterPositions,u=l.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const Nb=new Float32Array(1);class Ob extends Ri{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,l=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let p=0;p!==s;++p){const m=i[p],g=m.name;let y=f[g];if(y!==void 0)++y.referenceCount,l[p]=y;else{if(y=l[p],y!==void 0){y._cacheIndex===null&&(++y.referenceCount,this._addInactiveBinding(y,u,g));continue}const S=t&&t._propertyBindings[p].binding.parsedPath;y=new Oy(At.create(n,g,S),m.ValueTypeName,m.getValueSize()),++y.referenceCount,this._addInactiveBinding(y,u,g),l[p]=y}c[p].resultBuffer=y.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let l=s[t];if(l===void 0)l={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=l;else{const c=l.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),l.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,l=this._actionsByClip,c=l[s],u=c.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete l[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let l=i[t];l===void 0&&(l={},i[t]=l),l[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,l=this._bindingsByRootAndName,c=l[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete l[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Up(new Float32Array(2),new Float32Array(2),1,Nb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let l=typeof e=="string"?il.findByName(i,e):e;const c=l!==null?l.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(l!==null?n=l.blendMode:n=rh),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],l===null&&(l=h._clip)}if(l===null)return null;const f=new Fy(this,l,t,n);return this._bindAction(f,h),this._addInactiveAction(f,c,s),f}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?il.findByName(n,e):e,l=s?s.uuid:e,c=this._actionsByClip[l];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),l=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,l);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(l);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const l=s.knownActions;for(let c=0,u=l.length;c!==u;++c){const h=l[c];this._deactivateAction(h);const f=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=f,t[f]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const l in n){const c=n[l].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const l in s){const c=s[l];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Gp{constructor(e){this.value=e}clone(){return new Gp(this.value.clone===void 0?this.value:this.value.clone())}}let Fb=0;class zb extends Ri{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Fb++}),this.name="",this.usage=Za,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let l=0;l<s.length;l++)this.uniforms.push(s[l].clone())}return this}clone(){return new this.constructor().copy(this)}}class ju extends uh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Bb{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Q0=new st;class Wp{constructor(e,t,n=0,i=1/0){this.ray=new Ps(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Q0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Q0),this}intersectObject(e,t=!0,n=[]){return Jd(e,this,n,t),n.sort($0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Jd(e[i],this,n,t);return n.sort($0),n}}function $0(r,e){return r.distance-e.distance}function Jd(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let l=0,c=s.length;l<c;l++)Jd(s[l],e,t,!0)}}class Kd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kb{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Xp{constructor(e,t,n,i){Xp.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const ev=new le;class Hb{constructor(e=new le(1/0,1/0),t=new le(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ev.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ev).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tv=new D,eu=new D;class zy{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){tv.subVectors(e,this.start),eu.subVectors(this.end,this.start);const n=eu.dot(eu);let s=eu.dot(tv)/n;return t&&(s=Jt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const nv=new D;class Vb extends bt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new yt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let l=0,c=1,u=32;l<u;l++,c++){const h=l/u*Math.PI*2,f=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(f),Math.sin(f),1)}n.setAttribute("position",new qe(i,3));const s=new Vn({fog:!1,toneMapped:!1});this.cone=new Zi(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),nv.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(nv),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Or=new D,tu=new st,xd=new st;class Gb extends Zi{constructor(e){const t=By(e),n=new yt,i=[],s=[],l=new Be(0,0,1),c=new Be(0,1,0);for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(l.r,l.g,l.b),s.push(c.r,c.g,c.b))}n.setAttribute("position",new qe(i,3)),n.setAttribute("color",new qe(s,3));const u=new Vn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");xd.copy(this.root.matrixWorld).invert();for(let s=0,l=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(tu.multiplyMatrices(xd,c.matrixWorld),Or.setFromMatrixPosition(tu),i.setXYZ(l,Or.x,Or.y,Or.z),tu.multiplyMatrices(xd,c.parent.matrixWorld),Or.setFromMatrixPosition(tu),i.setXYZ(l+1,Or.x,Or.y,Or.z),l+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function By(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,By(r.children[t]));return e}class Wb extends en{constructor(e,t,n){const i=new pl(t,4,2),s=new Hr({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Xb=new D,iv=new Be,rv=new Be;class Yb extends bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new dl(t);i.rotateY(Math.PI*.5),this.material=new Hr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),l=new Float32Array(s.count*3);i.setAttribute("color",new Ut(l,3)),this.add(new en(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");iv.copy(this.light.color),rv.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?iv:rv;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Xb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class qb extends Zi{constructor(e=10,t=10,n=4473924,i=8947848){n=new Be(n),i=new Be(i);const s=t/2,l=e/t,c=e/2,u=[],h=[];for(let m=0,g=0,y=-c;m<=t;m++,y+=l){u.push(-c,0,y,c,0,y),u.push(y,0,-c,y,0,c);const S=m===s?n:i;S.toArray(h,g),g+=3,S.toArray(h,g),g+=3,S.toArray(h,g),g+=3,S.toArray(h,g),g+=3}const f=new yt;f.setAttribute("position",new qe(u,3)),f.setAttribute("color",new qe(h,3));const p=new Vn({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zb extends Zi{constructor(e=10,t=16,n=8,i=64,s=4473924,l=8947848){s=new Be(s),l=new Be(l);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),g=Math.sin(m)*e,y=Math.cos(m)*e;c.push(0,0,0),c.push(g,0,y);const S=p&1?s:l;u.push(S.r,S.g,S.b),u.push(S.r,S.g,S.b)}for(let p=0;p<n;p++){const m=p&1?s:l,g=e-e/n*p;for(let y=0;y<i;y++){let S=y/i*(Math.PI*2),x=Math.sin(S)*g,_=Math.cos(S)*g;c.push(x,0,_),u.push(m.r,m.g,m.b),S=(y+1)/i*(Math.PI*2),x=Math.sin(S)*g,_=Math.cos(S)*g,c.push(x,0,_),u.push(m.r,m.g,m.b)}}const h=new yt;h.setAttribute("position",new qe(c,3)),h.setAttribute("color",new qe(u,3));const f=new Vn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const sv=new D,nu=new D,ov=new D;class jb extends bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new yt;i.setAttribute("position",new qe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Vn({fog:!1,toneMapped:!1});this.lightPlane=new Br(i,s),this.add(this.lightPlane),i=new yt,i.setAttribute("position",new qe([0,0,0,0,0,1],3)),this.targetLine=new Br(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),sv.setFromMatrixPosition(this.light.matrixWorld),nu.setFromMatrixPosition(this.light.target.matrixWorld),ov.subVectors(nu,sv),this.lightPlane.lookAt(nu),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(nu),this.targetLine.scale.z=ov.length()}}const iu=new D,jt=new cl;class Jb extends Zi{constructor(e){const t=new yt,n=new Vn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],l={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(y,S){u(y),u(S)}function u(y){i.push(0,0,0),s.push(0,0,0),l[y]===void 0&&(l[y]=[]),l[y].push(i.length/3-1)}t.setAttribute("position",new qe(i,3)),t.setAttribute("color",new qe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=l,this.update();const h=new Be(16755200),f=new Be(16711680),p=new Be(43775),m=new Be(16777215),g=new Be(3355443);this.setColors(h,f,p,m,g)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;jt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),$t("c",t,e,jt,0,0,-1),$t("t",t,e,jt,0,0,1),$t("n1",t,e,jt,-n,-i,-1),$t("n2",t,e,jt,n,-i,-1),$t("n3",t,e,jt,-n,i,-1),$t("n4",t,e,jt,n,i,-1),$t("f1",t,e,jt,-n,-i,1),$t("f2",t,e,jt,n,-i,1),$t("f3",t,e,jt,-n,i,1),$t("f4",t,e,jt,n,i,1),$t("u1",t,e,jt,n*.7,i*1.1,-1),$t("u2",t,e,jt,-n*.7,i*1.1,-1),$t("u3",t,e,jt,0,i*2,-1),$t("cf1",t,e,jt,-n,0,1),$t("cf2",t,e,jt,n,0,1),$t("cf3",t,e,jt,0,-i,1),$t("cf4",t,e,jt,0,i,1),$t("cn1",t,e,jt,-n,0,-1),$t("cn2",t,e,jt,n,0,-1),$t("cn3",t,e,jt,0,-i,-1),$t("cn4",t,e,jt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function $t(r,e,t,n,i,s,l){iu.set(i,s,l).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],iu.x,iu.y,iu.z)}}const ru=new _n;class Kb extends Zi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new yt;s.setIndex(new Ut(n,1)),s.setAttribute("position",new Ut(i,3)),super(s,new Vn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ru.setFromObject(this.object),ru.isEmpty())return;const t=ru.min,n=ru.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Qb extends Zi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new yt;s.setIndex(new Ut(n,1)),s.setAttribute("position",new qe(i,3)),super(s,new Vn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class $b extends Br{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],l=new yt;l.setAttribute("position",new qe(s,3)),l.computeBoundingSphere(),super(l,new Vn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new yt;u.setAttribute("position",new qe(c,3)),u.computeBoundingSphere(),this.add(new en(u,new Hr({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const av=new D;let su,Sd;class eC extends bt{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,i=16776960,s=n*.2,l=s*.2){super(),this.type="ArrowHelper",su===void 0&&(su=new yt,su.setAttribute("position",new qe([0,0,0,0,1,0],3)),Sd=new Vo(0,.5,1,5,1),Sd.translate(0,-.5,0)),this.position.copy(t),this.line=new Br(su,new Vn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new en(Sd,new Hr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,l)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{av.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(av,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class tC extends Zi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new yt;i.setAttribute("position",new qe(t,3)),i.setAttribute("color",new qe(n,3));const s=new Vn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Be,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class nC{constructor(){this.type="ShapePath",this.color=new Be,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ka,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,l){return this.currentPath.bezierCurveTo(e,t,n,i,s,l),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const E=[];for(let w=0,A=_.length;w<A;w++){const U=_[w],C=new Ts;C.curves=U.curves,E.push(C)}return E}function n(_,E){const w=E.length;let A=!1;for(let U=w-1,C=0;C<w;U=C++){let L=E[U],z=E[C],R=z.x-L.x,b=z.y-L.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(L=E[C],R=-R,z=E[U],b=-b),_.y<L.y||_.y>z.y)continue;if(_.y===L.y){if(_.x===L.x)return!0}else{const O=b*(_.x-L.x)-R*(_.y-L.y);if(O===0)return!0;if(O<0)continue;A=!A}}else{if(_.y!==L.y)continue;if(z.x<=_.x&&_.x<=L.x||L.x<=_.x&&_.x<=z.x)return!0}}return A}const i=qi.isClockWise,s=this.subPaths;if(s.length===0)return[];let l,c,u;const h=[];if(s.length===1)return c=s[0],u=new Ts,u.curves=c.curves,h.push(u),h;let f=!i(s[0].getPoints());f=e?!f:f;const p=[],m=[];let g=[],y=0,S;m[y]=void 0,g[y]=[];for(let _=0,E=s.length;_<E;_++)c=s[_],S=c.getPoints(),l=i(S),l=e?!l:l,l?(!f&&m[y]&&y++,m[y]={s:new Ts,p:S},m[y].s.curves=c.curves,f&&y++,g[y]=[]):g[y].push({h:c,p:S[0]});if(!m[0])return t(s);if(m.length>1){let _=!1,E=0;for(let w=0,A=m.length;w<A;w++)p[w]=[];for(let w=0,A=m.length;w<A;w++){const U=g[w];for(let C=0;C<U.length;C++){const L=U[C];let z=!0;for(let R=0;R<m.length;R++)n(L.p,m[R].p)&&(w!==R&&E++,z?(z=!1,p[R].push(L)):_=!0);z&&p[w].push(L)}}E>0&&_===!1&&(g=p)}let x;for(let _=0,E=m.length;_<E;_++){u=m[_].s,h.push(u),x=g[_];for(let w=0,A=x.length;w<A;w++)u.holes.push(x[w].h)}return h}}class iC extends Ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class rC extends Ci{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);const sC=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:tp,AddEquation:Fr,AddOperation:u_,AdditiveAnimationBlendMode:fp,AdditiveBlending:Od,AgXToneMapping:m_,AlphaFormat:op,AlwaysCompare:P_,AlwaysDepth:i_,AlwaysStencilFunc:kd,AmbientLight:Py,AnimationAction:Fy,AnimationClip:il,AnimationLoader:ab,AnimationMixer:Ob,AnimationObjectGroup:Ub,AnimationUtils:ib,ArcCurve:ny,ArrayCamera:Y_,ArrowHelper:eC,AttachedBindMode:Bd,Audio:Ny,AudioAnalyser:Eb,AudioContext:Bp,AudioListener:Sb,AudioLoader:_b,AxesHelper:tC,BackSide:Hn,BasicDepthPacking:S_,BasicShadowMap:Fv,BatchedMesh:$_,Bone:wp,BooleanKeyframeTrack:Ls,Box2:Hb,Box3:_n,Box3Helper:Qb,BoxGeometry:Is,BoxHelper:Kb,BufferAttribute:Ut,BufferGeometry:yt,BufferGeometryLoader:Uy,ByteType:ip,Cache:dr,Camera:cl,CameraHelper:Jb,CanvasTexture:bA,CapsuleGeometry:ph,CatmullRomCurve3:iy,CineonToneMapping:d_,CircleGeometry:mh,ClampToEdgeWrapping:vi,Clock:kp,Color:Be,ColorKeyframeTrack:Np,ColorManagement:Lt,CompressedArrayTexture:TA,CompressedCubeTexture:AA,CompressedTexture:fh,CompressedTextureLoader:lb,ConeGeometry:gh,ConstantAlphaFactor:e_,ConstantColorFactor:Qv,Controls:iC,CubeCamera:z_,CubeReflectionMapping:gr,CubeRefractionMapping:zr,CubeTexture:ul,CubeTextureLoader:cb,CubeUVReflectionMapping:zo,CubicBezierCurve:Ap,CubicBezierCurve3:ry,CubicInterpolant:My,CullFaceBack:Nd,CullFaceFront:Ov,CullFaceFrontBack:iS,CullFaceNone:Nv,Curve:Pi,CurvePath:oy,CustomBlending:zv,CustomToneMapping:p_,CylinderGeometry:Vo,Cylindrical:kb,Data3DTexture:mp,DataArrayTexture:oh,DataTexture:Yi,DataTextureLoader:ub,DataUtils:mM,DecrementStencilOp:vS,DecrementWrapStencilOp:yS,DefaultLoadingManager:Ty,DepthFormat:Ms,DepthStencilFormat:Cs,DepthTexture:yp,DetachedBindMode:v_,DirectionalLight:Ry,DirectionalLightHelper:jb,DiscreteInterpolant:wy,DisplayP3ColorSpace:sh,DodecahedronGeometry:vh,DoubleSide:Hi,DstAlphaFactor:qv,DstColorFactor:jv,DynamicCopyUsage:US,DynamicDrawUsage:CS,DynamicReadUsage:IS,EdgesGeometry:ay,EllipseCurve:dh,EqualCompare:A_,EqualDepth:s_,EqualStencilFunc:wS,EquirectangularReflectionMapping:Ba,EquirectangularRefractionMapping:ka,Euler:oi,EventDispatcher:Ri,ExtrudeGeometry:yh,FileLoader:_r,Float16BufferAttribute:SM,Float32BufferAttribute:qe,FloatType:Zn,Fog:ch,FogExp2:lh,FramebufferTexture:EA,FrontSide:mr,Frustum:hl,GLBufferAttribute:Bb,GLSL1:OS,GLSL3:Hd,GreaterCompare:b_,GreaterDepth:a_,GreaterEqualCompare:R_,GreaterEqualDepth:o_,GreaterEqualStencilFunc:bS,GreaterStencilFunc:TS,GridHelper:qb,Group:bo,HalfFloatType:Bo,HemisphereLight:Ay,HemisphereLightHelper:Yb,IcosahedronGeometry:xh,ImageBitmapLoader:vb,ImageLoader:rl,ImageUtils:U_,IncrementStencilOp:gS,IncrementWrapStencilOp:_S,InstancedBufferAttribute:No,InstancedBufferGeometry:zp,InstancedInterleavedBuffer:ju,InstancedMesh:Q_,Int16BufferAttribute:yM,Int32BufferAttribute:xM,Int8BufferAttribute:gM,IntType:Qu,InterleavedBuffer:uh,InterleavedBufferAttribute:ri,Interpolant:ml,InterpolateDiscrete:Ga,InterpolateLinear:Gu,InterpolateSmooth:fu,InvertStencilOp:xS,KeepStencilOp:ds,KeyframeTrack:Ii,LOD:J_,LatheGeometry:fl,Layers:Es,LessCompare:T_,LessDepth:r_,LessEqualCompare:dp,LessEqualDepth:za,LessEqualStencilFunc:ES,LessStencilFunc:MS,Light:Gr,LightProbe:Dy,Line:Br,Line3:zy,LineBasicMaterial:Vn,LineCurve:bp,LineCurve3:sy,LineDashedMaterial:yy,LineLoop:ey,LineSegments:Zi,LinearDisplayP3ColorSpace:ll,LinearFilter:on,LinearInterpolant:Up,LinearMipMapLinearFilter:aS,LinearMipMapNearestFilter:oS,LinearMipmapLinearFilter:Gi,LinearMipmapNearestFilter:Ca,LinearSRGBColorSpace:yr,LinearToneMapping:h_,LinearTransfer:Xa,Loader:jn,LoaderUtils:jd,LoadingManager:Op,LoopOnce:__,LoopPingPong:x_,LoopRepeat:y_,LuminanceAlphaFormat:cp,LuminanceFormat:lp,MOUSE:hs,Material:Tn,MaterialLoader:bh,MathUtils:I_,Matrix2:Xp,Matrix3:gt,Matrix4:st,MaxEquation:Vv,Mesh:en,MeshBasicMaterial:Hr,MeshDepthMaterial:xp,MeshDistanceMaterial:Sp,MeshLambertMaterial:vy,MeshMatcapMaterial:_y,MeshNormalMaterial:gy,MeshPhongMaterial:py,MeshPhysicalMaterial:dy,MeshStandardMaterial:Lp,MeshToonMaterial:my,MinEquation:Hv,MirroredRepeatWrapping:Va,MixOperation:c_,MultiplyBlending:zd,MultiplyOperation:ol,NearestFilter:vn,NearestMipMapLinearFilter:sS,NearestMipMapNearestFilter:rS,NearestMipmapLinearFilter:Eo,NearestMipmapNearestFilter:np,NeutralToneMapping:g_,NeverCompare:E_,NeverDepth:n_,NeverStencilFunc:SS,NoBlending:pr,NoColorSpace:ur,NoToneMapping:Xi,NormalAnimationBlendMode:rh,NormalBlending:Ss,NotEqualCompare:C_,NotEqualDepth:l_,NotEqualStencilFunc:AS,NumberKeyframeTrack:tl,Object3D:bt,ObjectLoader:mb,ObjectSpaceNormalMap:w_,OctahedronGeometry:dl,OneFactor:Wv,OneMinusConstantAlphaFactor:t_,OneMinusConstantColorFactor:$v,OneMinusDstAlphaFactor:Zv,OneMinusDstColorFactor:Jv,OneMinusSrcAlphaFactor:gu,OneMinusSrcColorFactor:Yv,OrthographicCamera:fr,P3Primaries:qa,PCFShadowMap:Ju,PCFSoftShadowMap:ba,PMREMGenerator:Vd,Path:Ka,PerspectiveCamera:Kt,Plane:cr,PlaneGeometry:ko,PlaneHelper:$b,PointLight:Cy,PointLightHelper:Wb,Points:ty,PointsMaterial:Ep,PolarGridHelper:Zb,PolyhedronGeometry:Vr,PositionalAudio:wb,PropertyBinding:At,PropertyMixer:Oy,QuadraticBezierCurve:Cp,QuadraticBezierCurve3:Rp,Quaternion:Un,QuaternionKeyframeTrack:gl,QuaternionLinearInterpolant:Ey,RED_GREEN_RGTC2_Format:Hu,RED_RGTC1_Format:hp,REVISION:Fo,RGBADepthPacking:M_,RGBAFormat:Dn,RGBAIntegerFormat:ih,RGBA_ASTC_10x10_Format:Nu,RGBA_ASTC_10x5_Format:Lu,RGBA_ASTC_10x6_Format:Du,RGBA_ASTC_10x8_Format:Uu,RGBA_ASTC_12x10_Format:Ou,RGBA_ASTC_12x12_Format:Fu,RGBA_ASTC_4x4_Format:Eu,RGBA_ASTC_5x4_Format:Tu,RGBA_ASTC_5x5_Format:Au,RGBA_ASTC_6x5_Format:bu,RGBA_ASTC_6x6_Format:Cu,RGBA_ASTC_8x5_Format:Ru,RGBA_ASTC_8x6_Format:Pu,RGBA_ASTC_8x8_Format:Iu,RGBA_BPTC_Format:Da,RGBA_ETC2_EAC_Format:wu,RGBA_PVRTC_2BPPV1_Format:xu,RGBA_PVRTC_4BPPV1_Format:yu,RGBA_S3TC_DXT1_Format:Pa,RGBA_S3TC_DXT3_Format:Ia,RGBA_S3TC_DXT5_Format:La,RGBDepthPacking:fS,RGBFormat:ap,RGBIntegerFormat:lS,RGB_BPTC_SIGNED_Format:zu,RGB_BPTC_UNSIGNED_Format:Bu,RGB_ETC1_Format:Su,RGB_ETC2_Format:Mu,RGB_PVRTC_2BPPV1_Format:_u,RGB_PVRTC_4BPPV1_Format:vu,RGB_S3TC_DXT1_Format:Ra,RGDepthPacking:dS,RGFormat:up,RGIntegerFormat:nh,RawShaderMaterial:fy,Ray:Ps,Raycaster:Wp,Rec709Primaries:Ya,RectAreaLight:Iy,RedFormat:th,RedIntegerFormat:al,ReinhardToneMapping:f_,RenderTarget:N_,RepeatWrapping:Ha,ReplaceStencilOp:mS,ReverseSubtractEquation:kv,RingGeometry:Sh,SIGNED_RED_GREEN_RGTC2_Format:Vu,SIGNED_RED_RGTC1_Format:ku,SRGBColorSpace:gi,SRGBTransfer:Bt,Scene:Xu,ShaderChunk:_t,ShaderLib:Ai,ShaderMaterial:_i,ShadowMaterial:hy,Shape:Ts,ShapeGeometry:Mh,ShapePath:nC,ShapeUtils:qi,ShortType:rp,Skeleton:hh,SkeletonHelper:Gb,SkinnedMesh:K_,Source:_s,Sphere:yn,SphereGeometry:pl,Spherical:Kd,SphericalHarmonics3:Ly,SplineCurve:Pp,SpotLight:by,SpotLightHelper:Vb,Sprite:j_,SpriteMaterial:Mp,SrcAlphaFactor:mu,SrcAlphaSaturateFactor:Kv,SrcColorFactor:Xv,StaticCopyUsage:DS,StaticDrawUsage:Za,StaticReadUsage:PS,StereoCamera:yb,StreamCopyUsage:NS,StreamDrawUsage:RS,StreamReadUsage:LS,StringKeyframeTrack:Ds,SubtractEquation:Bv,SubtractiveBlending:Fd,TOUCH:fs,TangentSpaceNormalMap:kr,TetrahedronGeometry:wh,Texture:Yt,TextureLoader:hb,TextureUtils:iA,TorusGeometry:Eh,TorusKnotGeometry:Th,Triangle:ii,TriangleFanDrawMode:hS,TriangleStripDrawMode:uS,TrianglesDrawMode:cS,TubeGeometry:Ah,UVMapping:Ku,Uint16BufferAttribute:gp,Uint32BufferAttribute:vp,Uint8BufferAttribute:vM,Uint8ClampedBufferAttribute:_M,Uniform:Gp,UniformsGroup:zb,UniformsLib:Ie,UniformsUtils:Wu,UnsignedByteType:bi,UnsignedInt248Type:bs,UnsignedInt5999Type:sp,UnsignedIntType:vr,UnsignedShort4444Type:$u,UnsignedShort5551Type:eh,UnsignedShortType:Lo,VSMShadowMap:Ti,Vector2:le,Vector3:D,Vector4:Et,VectorKeyframeTrack:nl,VideoTexture:wA,WebGL3DRenderTarget:sM,WebGLArrayRenderTarget:rM,WebGLCoordinateSystem:Wi,WebGLCubeRenderTarget:B_,WebGLMultipleRenderTargets:rC,WebGLRenderTarget:Ci,WebGLRenderer:q_,WebGLUtils:X_,WebGPUCoordinateSystem:ja,WireframeGeometry:Ip,WrapAroundEnding:Wa,ZeroCurvatureEnding:gs,ZeroFactor:Gv,ZeroSlopeEnding:vs,ZeroStencilOp:pS,createCanvasElement:D_},Symbol.toStringTag,{value:"Module"}));var ky={exports:{}},Us={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Us.ConcurrentRoot=1;Us.ContinuousEventPriority=4;Us.DefaultEventPriority=16;Us.DiscreteEventPriority=1;Us.IdleEventPriority=536870912;Us.LegacyRoot=0;ky.exports=Us;var Ro=ky.exports;function oC(r){let e;const t=new Set,n=(h,f)=>{const p=typeof h=="function"?h(e):h;if(p!==e){const m=e;e=f?p:Object.assign({},e,p),t.forEach(g=>g(e,m))}},i=()=>e,s=(h,f=i,p=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let m=f(e);function g(){const y=f(e);if(!p(m,y)){const S=m;h(m=y,S)}}return t.add(g),()=>t.delete(g)},u={setState:n,getState:i,subscribe:(h,f,p)=>f||p?s(h,f,p):(t.add(h),()=>t.delete(h)),destroy:()=>t.clear()};return e=r(n,i,u),u}const aC=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),lv=aC?De.useEffect:De.useLayoutEffect;function Hy(r){const e=typeof r=="function"?oC(r):r,t=(n=e.getState,i=Object.is)=>{const[,s]=De.useReducer(x=>x+1,0),l=e.getState(),c=De.useRef(l),u=De.useRef(n),h=De.useRef(i),f=De.useRef(!1),p=De.useRef();p.current===void 0&&(p.current=n(l));let m,g=!1;(c.current!==l||u.current!==n||h.current!==i||f.current)&&(m=n(l),g=!i(p.current,m)),lv(()=>{g&&(p.current=m),c.current=l,u.current=n,h.current=i,f.current=!1});const y=De.useRef(l);lv(()=>{const x=()=>{try{const E=e.getState(),w=u.current(E);h.current(p.current,w)||(c.current=E,p.current=w,s())}catch{f.current=!0,s()}},_=e.subscribe(x);return e.getState()!==y.current&&x(),_},[]);const S=g?m:p.current;return De.useDebugValue(S),S};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[t,e];return{next(){const i=n.length<=0;return{value:n.shift(),done:i}}}},t}const lC=r=>typeof r=="object"&&typeof r.then=="function",xs=[];function Vy(r,e,t=(n,i)=>n===i){if(r===e)return!0;if(!r||!e)return!1;const n=r.length;if(e.length!==n)return!1;for(let i=0;i<n;i++)if(!t(r[i],e[i]))return!1;return!0}function Gy(r,e=null,t=!1,n={}){e===null&&(e=[r]);for(const s of xs)if(Vy(e,s.keys,s.equal)){if(t)return;if(Object.prototype.hasOwnProperty.call(s,"error"))throw s.error;if(Object.prototype.hasOwnProperty.call(s,"response"))return n.lifespan&&n.lifespan>0&&(s.timeout&&clearTimeout(s.timeout),s.timeout=setTimeout(s.remove,n.lifespan)),s.response;if(!t)throw s.promise}const i={keys:e,equal:n.equal,remove:()=>{const s=xs.indexOf(i);s!==-1&&xs.splice(s,1)},promise:(lC(r)?r:r(...e)).then(s=>{i.response=s,n.lifespan&&n.lifespan>0&&(i.timeout=setTimeout(i.remove,n.lifespan))}).catch(s=>i.error=s)};if(xs.push(i),!t)throw i.promise}const cC=(r,e,t)=>Gy(r,e,!1,t),uC=(r,e,t)=>void Gy(r,e,!0,t),hC=r=>{if(r===void 0||r.length===0)xs.splice(0,xs.length);else{const e=xs.find(t=>Vy(r,t.keys,t.equal));e&&e.remove()}};var Wy={exports:{}},Md={exports:{}},wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function fC(){return cv||(cv=1,function(r){function e(F,j){var Z=F.length;F.push(j);e:for(;0<Z;){var re=Z-1>>>1,Se=F[re];if(0<i(Se,j))F[re]=j,F[Z]=Se,Z=re;else break e}}function t(F){return F.length===0?null:F[0]}function n(F){if(F.length===0)return null;var j=F[0],Z=F.pop();if(Z!==j){F[0]=Z;e:for(var re=0,Se=F.length,He=Se>>>1;re<He;){var ie=2*(re+1)-1,ve=F[ie],Ae=ie+1,we=F[Ae];if(0>i(ve,Z))Ae<Se&&0>i(we,ve)?(F[re]=we,F[Ae]=Z,re=Ae):(F[re]=ve,F[ie]=Z,re=ie);else if(Ae<Se&&0>i(we,Z))F[re]=we,F[Ae]=Z,re=Ae;else break e}}return j}function i(F,j){var Z=F.sortIndex-j.sortIndex;return Z!==0?Z:F.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();r.unstable_now=function(){return l.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,y=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(F){for(var j=t(h);j!==null;){if(j.callback===null)n(h);else if(j.startTime<=F)n(h),j.sortIndex=j.expirationTime,e(u,j);else break;j=t(h)}}function A(F){if(S=!1,w(F),!y)if(t(u)!==null)y=!0,Q(U);else{var j=t(h);j!==null&&me(A,j.startTime-F)}}function U(F,j){y=!1,S&&(S=!1,_(z),z=-1),g=!0;var Z=m;try{for(w(j),p=t(u);p!==null&&(!(p.expirationTime>j)||F&&!O());){var re=p.callback;if(typeof re=="function"){p.callback=null,m=p.priorityLevel;var Se=re(p.expirationTime<=j);j=r.unstable_now(),typeof Se=="function"?p.callback=Se:p===t(u)&&n(u),w(j)}else n(u);p=t(u)}if(p!==null)var He=!0;else{var ie=t(h);ie!==null&&me(A,ie.startTime-j),He=!1}return He}finally{p=null,m=Z,g=!1}}var C=!1,L=null,z=-1,R=5,b=-1;function O(){return!(r.unstable_now()-b<R)}function q(){if(L!==null){var F=r.unstable_now();b=F;var j=!0;try{j=L(!0,F)}finally{j?Y():(C=!1,L=null)}}else C=!1}var Y;if(typeof E=="function")Y=function(){E(q)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ae=K.port2;K.port1.onmessage=q,Y=function(){ae.postMessage(null)}}else Y=function(){x(q,0)};function Q(F){L=F,C||(C=!0,Y())}function me(F,j){z=x(function(){F(r.unstable_now())},j)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_continueExecution=function(){y||g||(y=!0,Q(U))},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(F){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var Z=m;m=j;try{return F()}finally{m=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=m;m=F;try{return j()}finally{m=Z}},r.unstable_scheduleCallback=function(F,j,Z){var re=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,F){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,F={id:f++,callback:j,priorityLevel:F,startTime:Z,expirationTime:Se,sortIndex:-1},Z>re?(F.sortIndex=Z,e(h,F),t(u)===null&&F===t(h)&&(S?(_(z),z=-1):S=!0,me(A,Z-re))):(F.sortIndex=Se,e(u,F),y||g||(y=!0,Q(U))),F},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(F){var j=m;return function(){var Z=m;m=j;try{return F.apply(this,arguments)}finally{m=Z}}}}(wd)),wd}var uv;function dC(){return uv||(uv=1,Md.exports=fC()),Md.exports}/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pC=function(e){var t={},n=De,i=dC(),s=Object.assign;function l(o){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+o,d=1;d<arguments.length;d++)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+o+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),y=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),U=Symbol.iterator;function C(o){return o===null||typeof o!="object"?null:(o=U&&o[U]||o["@@iterator"],typeof o=="function"?o:null)}function L(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case f:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case x:return"Suspense";case _:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case y:return(o.displayName||"Context")+".Consumer";case g:return(o._context.displayName||"Context")+".Provider";case S:var a=o.render;return o=o.displayName,o||(o=a.displayName||a.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case E:return a=o.displayName||null,a!==null?a:L(o.type)||"Memo";case w:a=o._payload,o=o._init;try{return L(o(a))}catch{}}return null}function z(o){var a=o.type;switch(o.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=a.render,o=o.displayName||o.name||"",a.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return L(a);case 8:return a===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function R(o){var a=o,d=o;if(o.alternate)for(;a.return;)a=a.return;else{o=a;do a=o,a.flags&4098&&(d=a.return),o=a.return;while(o)}return a.tag===3?d:null}function b(o){if(R(o)!==o)throw Error(l(188))}function O(o){var a=o.alternate;if(!a){if(a=R(o),a===null)throw Error(l(188));return a!==o?null:o}for(var d=o,v=a;;){var M=d.return;if(M===null)break;var T=M.alternate;if(T===null){if(v=M.return,v!==null){d=v;continue}break}if(M.child===T.child){for(T=M.child;T;){if(T===d)return b(M),o;if(T===v)return b(M),a;T=T.sibling}throw Error(l(188))}if(d.return!==v.return)d=M,v=T;else{for(var B=!1,G=M.child;G;){if(G===d){B=!0,d=M,v=T;break}if(G===v){B=!0,v=M,d=T;break}G=G.sibling}if(!B){for(G=T.child;G;){if(G===d){B=!0,d=T,v=M;break}if(G===v){B=!0,v=T,d=M;break}G=G.sibling}if(!B)throw Error(l(189))}}if(d.alternate!==v)throw Error(l(190))}if(d.tag!==3)throw Error(l(188));return d.stateNode.current===d?o:a}function q(o){return o=O(o),o!==null?Y(o):null}function Y(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var a=Y(o);if(a!==null)return a;o=o.sibling}return null}function K(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){if(o.tag!==4){var a=K(o);if(a!==null)return a}o=o.sibling}return null}var ae=Array.isArray,Q=e.getPublicInstance,me=e.getRootHostContext,F=e.getChildHostContext,j=e.prepareForCommit,Z=e.resetAfterCommit,re=e.createInstance,Se=e.appendInitialChild,He=e.finalizeInitialChildren,ie=e.prepareUpdate,ve=e.shouldSetTextContent,Ae=e.createTextInstance,we=e.scheduleTimeout,et=e.cancelTimeout,ot=e.noTimeout,tt=e.isPrimaryRenderer,ct=e.supportsMutation,N=e.supportsPersistence,ye=e.supportsHydration,xe=e.getInstanceFromNode,Le=e.preparePortalMount,de=e.getCurrentEventPriority,Qe=e.detachDeletedInstance,Pe=e.supportsMicrotasks,Ve=e.scheduleMicrotask,k=e.supportsTestSelectors,P=e.findFiberRoot,ee=e.getBoundingRect,pe=e.getTextContent,he=e.isHiddenSubtree,ge=e.matchAccessibilityRole,je=e.setFocusIfFocusable,Re=e.setupIntersectionObserver,ke=e.appendChild,ft=e.appendChildToContainer,Me=e.commitTextUpdate,Oe=e.commitMount,wt=e.commitUpdate,at=e.insertBefore,Ge=e.insertInContainerBefore,V=e.removeChild,ue=e.removeChildFromContainer,Ne=e.resetTextContent,H=e.hideInstance,_e=e.hideTextInstance,ce=e.unhideInstance,fe=e.unhideTextInstance,be=e.clearContainer,it=e.cloneInstance,dt=e.createContainerChildSet,Tt=e.appendChildToContainerChildSet,Ht=e.finalizeContainerChildren,St=e.replaceContainerChildren,un=e.cloneHiddenInstance,hn=e.cloneHiddenTextInstance,_l=e.canHydrateInstance,ji=e.canHydrateTextInstance,Go=e.canHydrateSuspenseInstance,Wo=e.isSuspenseInstancePending,Ns=e.isSuspenseInstanceFallback,Os=e.registerSuspenseInstanceRetry,xr=e.getNextHydratableSibling,Fs=e.getFirstHydratableChild,yl=e.getFirstHydratableChildWithinContainer,xl=e.getFirstHydratableChildWithinSuspenseInstance,Ch=e.hydrateInstance,Rh=e.hydrateTextInstance,Ph=e.hydrateSuspenseInstance,I=e.getNextHydratableInstanceAfterSuspenseInstance,W=e.commitHydratedContainer,te=e.commitHydratedSuspenseInstance,ne=e.clearSuspenseBoundary,J=e.clearSuspenseBoundaryFromContainer,Te=e.shouldDeleteUnhydratedTailInstances,ze=e.didNotMatchHydratedContainerTextInstance,Ye=e.didNotMatchHydratedTextInstance,We;function nt(o){if(We===void 0)try{throw Error()}catch(d){var a=d.stack.trim().match(/\n( *(at )?)/);We=a&&a[1]||""}return`
`+We+o}var lt=!1;function Ze(o,a){if(!o||lt)return"";lt=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(Ee){var v=Ee}Reflect.construct(o,[],a)}else{try{a.call()}catch(Ee){v=Ee}o.call(a.prototype)}else{try{throw Error()}catch(Ee){v=Ee}o()}}catch(Ee){if(Ee&&v&&typeof Ee.stack=="string"){for(var M=Ee.stack.split(`
`),T=v.stack.split(`
`),B=M.length-1,G=T.length-1;1<=B&&0<=G&&M[B]!==T[G];)G--;for(;1<=B&&0<=G;B--,G--)if(M[B]!==T[G]){if(B!==1||G!==1)do if(B--,G--,0>G||M[B]!==T[G]){var oe=`
`+M[B].replace(" at new "," at ");return o.displayName&&oe.includes("<anonymous>")&&(oe=oe.replace("<anonymous>",o.displayName)),oe}while(1<=B&&0<=G);break}}}finally{lt=!1,Error.prepareStackTrace=d}return(o=o?o.displayName||o.name:"")?nt(o):""}var Ct=Object.prototype.hasOwnProperty,Ot=[],Dt=-1;function qt(o){return{current:o}}function $e(o){0>Dt||(o.current=Ot[Dt],Ot[Dt]=null,Dt--)}function Ce(o,a){Dt++,Ot[Dt]=o.current,o.current=a}var Ft={},ut=qt(Ft),zt=qt(!1),Gn=Ft;function tn(o,a){var d=o.type.contextTypes;if(!d)return Ft;var v=o.stateNode;if(v&&v.__reactInternalMemoizedUnmaskedChildContext===a)return v.__reactInternalMemoizedMaskedChildContext;var M={},T;for(T in d)M[T]=a[T];return v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=a,o.__reactInternalMemoizedMaskedChildContext=M),M}function fn(o){return o=o.childContextTypes,o!=null}function Vt(){$e(zt),$e(ut)}function yi(o,a,d){if(ut.current!==Ft)throw Error(l(168));Ce(ut,a),Ce(zt,d)}function zs(o,a,d){var v=o.stateNode;if(a=a.childContextTypes,typeof v.getChildContext!="function")return d;v=v.getChildContext();for(var M in v)if(!(M in a))throw Error(l(108,z(o)||"Unknown",M));return s({},d,v)}function xn(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||Ft,Gn=ut.current,Ce(ut,o),Ce(zt,zt.current),!0}function Bs(o,a,d){var v=o.stateNode;if(!v)throw Error(l(169));d?(o=zs(o,a,Gn),v.__reactInternalMemoizedMergedChildContext=o,$e(zt),$e(ut),Ce(ut,o)):$e(zt),Ce(zt,d)}var Jn=Math.clz32?Math.clz32:px,Sl=Math.log,dx=Math.LN2;function px(o){return o>>>=0,o===0?32:31-(Sl(o)/dx|0)|0}var Ml=64,wl=4194304;function Xo(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function El(o,a){var d=o.pendingLanes;if(d===0)return 0;var v=0,M=o.suspendedLanes,T=o.pingedLanes,B=d&268435455;if(B!==0){var G=B&~M;G!==0?v=Xo(G):(T&=B,T!==0&&(v=Xo(T)))}else B=d&~M,B!==0?v=Xo(B):T!==0&&(v=Xo(T));if(v===0)return 0;if(a!==0&&a!==v&&!(a&M)&&(M=v&-v,T=a&-a,M>=T||M===16&&(T&4194240)!==0))return a;if(v&4&&(v|=d&16),a=o.entangledLanes,a!==0)for(o=o.entanglements,a&=v;0<a;)d=31-Jn(a),M=1<<d,v|=o[d],a&=~M;return v}function mx(o,a){switch(o){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gx(o,a){for(var d=o.suspendedLanes,v=o.pingedLanes,M=o.expirationTimes,T=o.pendingLanes;0<T;){var B=31-Jn(T),G=1<<B,oe=M[B];oe===-1?(!(G&d)||G&v)&&(M[B]=mx(G,a)):oe<=a&&(o.expiredLanes|=G),T&=~G}}function Ih(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Lh(o){for(var a=[],d=0;31>d;d++)a.push(o);return a}function Yo(o,a,d){o.pendingLanes|=a,a!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,a=31-Jn(a),o[a]=d}function vx(o,a){var d=o.pendingLanes&~a;o.pendingLanes=a,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=a,o.mutableReadLanes&=a,o.entangledLanes&=a,a=o.entanglements;var v=o.eventTimes;for(o=o.expirationTimes;0<d;){var M=31-Jn(d),T=1<<M;a[M]=0,v[M]=-1,o[M]=-1,d&=~T}}function Dh(o,a){var d=o.entangledLanes|=a;for(o=o.entanglements;d;){var v=31-Jn(d),M=1<<v;M&a|o[v]&a&&(o[v]|=a),d&=~M}}var Rt=0;function Qp(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var Uh=i.unstable_scheduleCallback,$p=i.unstable_cancelCallback,_x=i.unstable_shouldYield,yx=i.unstable_requestPaint,dn=i.unstable_now,Nh=i.unstable_ImmediatePriority,xx=i.unstable_UserBlockingPriority,Oh=i.unstable_NormalPriority,Sx=i.unstable_IdlePriority,Tl=null,Li=null;function Mx(o){if(Li&&typeof Li.onCommitFiberRoot=="function")try{Li.onCommitFiberRoot(Tl,o,void 0,(o.current.flags&128)===128)}catch{}}function wx(o,a){return o===a&&(o!==0||1/o===1/a)||o!==o&&a!==a}var Di=typeof Object.is=="function"?Object.is:wx,Ji=null,Al=!1,Fh=!1;function em(o){Ji===null?Ji=[o]:Ji.push(o)}function Ex(o){Al=!0,em(o)}function Ui(){if(!Fh&&Ji!==null){Fh=!0;var o=0,a=Rt;try{var d=Ji;for(Rt=1;o<d.length;o++){var v=d[o];do v=v(!0);while(v!==null)}Ji=null,Al=!1}catch(M){throw Ji!==null&&(Ji=Ji.slice(o+1)),Uh(Nh,Ui),M}finally{Rt=a,Fh=!1}}return null}var Tx=c.ReactCurrentBatchConfig;function bl(o,a){if(Di(o,a))return!0;if(typeof o!="object"||o===null||typeof a!="object"||a===null)return!1;var d=Object.keys(o),v=Object.keys(a);if(d.length!==v.length)return!1;for(v=0;v<d.length;v++){var M=d[v];if(!Ct.call(a,M)||!Di(o[M],a[M]))return!1}return!0}function Ax(o){switch(o.tag){case 5:return nt(o.type);case 16:return nt("Lazy");case 13:return nt("Suspense");case 19:return nt("SuspenseList");case 0:case 2:case 15:return o=Ze(o.type,!1),o;case 11:return o=Ze(o.type.render,!1),o;case 1:return o=Ze(o.type,!0),o;default:return""}}function xi(o,a){if(o&&o.defaultProps){a=s({},a),o=o.defaultProps;for(var d in o)a[d]===void 0&&(a[d]=o[d]);return a}return a}var Cl=qt(null),Rl=null,ks=null,zh=null;function Bh(){zh=ks=Rl=null}function tm(o,a,d){tt?(Ce(Cl,a._currentValue),a._currentValue=d):(Ce(Cl,a._currentValue2),a._currentValue2=d)}function kh(o){var a=Cl.current;$e(Cl),tt?o._currentValue=a:o._currentValue2=a}function Hh(o,a,d){for(;o!==null;){var v=o.alternate;if((o.childLanes&a)!==a?(o.childLanes|=a,v!==null&&(v.childLanes|=a)):v!==null&&(v.childLanes&a)!==a&&(v.childLanes|=a),o===d)break;o=o.return}}function Hs(o,a){Rl=o,zh=ks=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&a&&($n=!0),o.firstContext=null)}function ai(o){var a=tt?o._currentValue:o._currentValue2;if(zh!==o)if(o={context:o,memoizedValue:a,next:null},ks===null){if(Rl===null)throw Error(l(308));ks=o,Rl.dependencies={lanes:0,firstContext:o}}else ks=ks.next=o;return a}var Ni=null,Sr=!1;function Vh(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nm(o,a){o=o.updateQueue,a.updateQueue===o&&(a.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Ki(o,a){return{eventTime:o,lane:a,tag:0,payload:null,callback:null,next:null}}function Mr(o,a){var d=o.updateQueue;d!==null&&(d=d.shared,nn!==null&&o.mode&1&&!(Mt&2)?(o=d.interleaved,o===null?(a.next=a,Ni===null?Ni=[d]:Ni.push(d)):(a.next=o.next,o.next=a),d.interleaved=a):(o=d.pending,o===null?a.next=a:(a.next=o.next,o.next=a),d.pending=a))}function Pl(o,a,d){if(a=a.updateQueue,a!==null&&(a=a.shared,(d&4194240)!==0)){var v=a.lanes;v&=o.pendingLanes,d|=v,a.lanes=d,Dh(o,d)}}function im(o,a){var d=o.updateQueue,v=o.alternate;if(v!==null&&(v=v.updateQueue,d===v)){var M=null,T=null;if(d=d.firstBaseUpdate,d!==null){do{var B={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};T===null?M=T=B:T=T.next=B,d=d.next}while(d!==null);T===null?M=T=a:T=T.next=a}else M=T=a;d={baseState:v.baseState,firstBaseUpdate:M,lastBaseUpdate:T,shared:v.shared,effects:v.effects},o.updateQueue=d;return}o=d.lastBaseUpdate,o===null?d.firstBaseUpdate=a:o.next=a,d.lastBaseUpdate=a}function Il(o,a,d,v){var M=o.updateQueue;Sr=!1;var T=M.firstBaseUpdate,B=M.lastBaseUpdate,G=M.shared.pending;if(G!==null){M.shared.pending=null;var oe=G,Ee=oe.next;oe.next=null,B===null?T=Ee:B.next=Ee,B=oe;var Xe=o.alternate;Xe!==null&&(Xe=Xe.updateQueue,G=Xe.lastBaseUpdate,G!==B&&(G===null?Xe.firstBaseUpdate=Ee:G.next=Ee,Xe.lastBaseUpdate=oe))}if(T!==null){var pt=M.baseState;B=0,Xe=Ee=oe=null,G=T;do{var rt=G.lane,Nt=G.eventTime;if((v&rt)===rt){Xe!==null&&(Xe=Xe.next={eventTime:Nt,lane:0,tag:G.tag,payload:G.payload,callback:G.callback,next:null});e:{var Ke=o,Rn=G;switch(rt=a,Nt=d,Rn.tag){case 1:if(Ke=Rn.payload,typeof Ke=="function"){pt=Ke.call(Nt,pt,rt);break e}pt=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Rn.payload,rt=typeof Ke=="function"?Ke.call(Nt,pt,rt):Ke,rt==null)break e;pt=s({},pt,rt);break e;case 2:Sr=!0}}G.callback!==null&&G.lane!==0&&(o.flags|=64,rt=M.effects,rt===null?M.effects=[G]:rt.push(G))}else Nt={eventTime:Nt,lane:rt,tag:G.tag,payload:G.payload,callback:G.callback,next:null},Xe===null?(Ee=Xe=Nt,oe=pt):Xe=Xe.next=Nt,B|=rt;if(G=G.next,G===null){if(G=M.shared.pending,G===null)break;rt=G,G=rt.next,rt.next=null,M.lastBaseUpdate=rt,M.shared.pending=null}}while(!0);if(Xe===null&&(oe=pt),M.baseState=oe,M.firstBaseUpdate=Ee,M.lastBaseUpdate=Xe,a=M.shared.interleaved,a!==null){M=a;do B|=M.lane,M=M.next;while(M!==a)}else T===null&&(M.shared.lanes=0);Js|=B,o.lanes=B,o.memoizedState=pt}}function rm(o,a,d){if(o=a.effects,a.effects=null,o!==null)for(a=0;a<o.length;a++){var v=o[a],M=v.callback;if(M!==null){if(v.callback=null,v=d,typeof M!="function")throw Error(l(191,M));M.call(v)}}}var sm=new n.Component().refs;function Gh(o,a,d,v){a=o.memoizedState,d=d(v,a),d=d==null?a:s({},a,d),o.memoizedState=d,o.lanes===0&&(o.updateQueue.baseState=d)}var Ll={isMounted:function(o){return(o=o._reactInternals)?R(o)===o:!1},enqueueSetState:function(o,a,d){o=o._reactInternals;var v=On(),M=Tr(o),T=Ki(v,M);T.payload=a,d!=null&&(T.callback=d),Mr(o,T),a=fi(o,M,v),a!==null&&Pl(a,o,M)},enqueueReplaceState:function(o,a,d){o=o._reactInternals;var v=On(),M=Tr(o),T=Ki(v,M);T.tag=1,T.payload=a,d!=null&&(T.callback=d),Mr(o,T),a=fi(o,M,v),a!==null&&Pl(a,o,M)},enqueueForceUpdate:function(o,a){o=o._reactInternals;var d=On(),v=Tr(o),M=Ki(d,v);M.tag=2,a!=null&&(M.callback=a),Mr(o,M),a=fi(o,v,d),a!==null&&Pl(a,o,v)}};function om(o,a,d,v,M,T,B){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(v,T,B):a.prototype&&a.prototype.isPureReactComponent?!bl(d,v)||!bl(M,T):!0}function am(o,a,d){var v=!1,M=Ft,T=a.contextType;return typeof T=="object"&&T!==null?T=ai(T):(M=fn(a)?Gn:ut.current,v=a.contextTypes,T=(v=v!=null)?tn(o,M):Ft),a=new a(d,T),o.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ll,o.stateNode=a,a._reactInternals=o,v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=M,o.__reactInternalMemoizedMaskedChildContext=T),a}function lm(o,a,d,v){o=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(d,v),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(d,v),a.state!==o&&Ll.enqueueReplaceState(a,a.state,null)}function Wh(o,a,d,v){var M=o.stateNode;M.props=d,M.state=o.memoizedState,M.refs=sm,Vh(o);var T=a.contextType;typeof T=="object"&&T!==null?M.context=ai(T):(T=fn(a)?Gn:ut.current,M.context=tn(o,T)),M.state=o.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(Gh(o,a,T,d),M.state=o.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof M.getSnapshotBeforeUpdate=="function"||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(a=M.state,typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount(),a!==M.state&&Ll.enqueueReplaceState(M,M.state,null),Il(o,d,M,v),M.state=o.memoizedState),typeof M.componentDidMount=="function"&&(o.flags|=4194308)}var Vs=[],Gs=0,Dl=null,Ul=0,li=[],ci=0,Wr=null,Qi=1,$i="";function Xr(o,a){Vs[Gs++]=Ul,Vs[Gs++]=Dl,Dl=o,Ul=a}function cm(o,a,d){li[ci++]=Qi,li[ci++]=$i,li[ci++]=Wr,Wr=o;var v=Qi;o=$i;var M=32-Jn(v)-1;v&=~(1<<M),d+=1;var T=32-Jn(a)+M;if(30<T){var B=M-M%5;T=(v&(1<<B)-1).toString(32),v>>=B,M-=B,Qi=1<<32-Jn(a)+M|d<<M|v,$i=T+o}else Qi=1<<T|d<<M|v,$i=o}function Xh(o){o.return!==null&&(Xr(o,1),cm(o,1,0))}function Yh(o){for(;o===Dl;)Dl=Vs[--Gs],Vs[Gs]=null,Ul=Vs[--Gs],Vs[Gs]=null;for(;o===Wr;)Wr=li[--ci],li[ci]=null,$i=li[--ci],li[ci]=null,Qi=li[--ci],li[ci]=null}var Kn=null,Qn=null,Gt=!1,qo=!1,Si=null;function um(o,a){var d=di(5,null,null,0);d.elementType="DELETED",d.stateNode=a,d.return=o,a=o.deletions,a===null?(o.deletions=[d],o.flags|=16):a.push(d)}function hm(o,a){switch(o.tag){case 5:return a=_l(a,o.type,o.pendingProps),a!==null?(o.stateNode=a,Kn=o,Qn=Fs(a),!0):!1;case 6:return a=ji(a,o.pendingProps),a!==null?(o.stateNode=a,Kn=o,Qn=null,!0):!1;case 13:if(a=Go(a),a!==null){var d=Wr!==null?{id:Qi,overflow:$i}:null;return o.memoizedState={dehydrated:a,treeContext:d,retryLane:1073741824},d=di(18,null,null,0),d.stateNode=a,d.return=o,o.child=d,Kn=o,Qn=null,!0}return!1;default:return!1}}function qh(o){return(o.mode&1)!==0&&(o.flags&128)===0}function Zh(o){if(Gt){var a=Qn;if(a){var d=a;if(!hm(o,a)){if(qh(o))throw Error(l(418));a=xr(d);var v=Kn;a&&hm(o,a)?um(v,d):(o.flags=o.flags&-4097|2,Gt=!1,Kn=o)}}else{if(qh(o))throw Error(l(418));o.flags=o.flags&-4097|2,Gt=!1,Kn=o}}}function fm(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;Kn=o}function Zo(o){if(!ye||o!==Kn)return!1;if(!Gt)return fm(o),Gt=!0,!1;if(o.tag!==3&&(o.tag!==5||Te(o.type)&&!ve(o.type,o.memoizedProps))){var a=Qn;if(a){if(qh(o)){for(o=Qn;o;)o=xr(o);throw Error(l(418))}for(;a;)um(o,a),a=xr(a)}}if(fm(o),o.tag===13){if(!ye)throw Error(l(316));if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));Qn=I(o)}else Qn=Kn?xr(o.stateNode):null;return!0}function Ws(){ye&&(Qn=Kn=null,qo=Gt=!1)}function jh(o){Si===null?Si=[o]:Si.push(o)}function jo(o,a,d){if(o=d.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(l(309));var v=d.stateNode}if(!v)throw Error(l(147,o));var M=v,T=""+o;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===T?a.ref:(a=function(B){var G=M.refs;G===sm&&(G=M.refs={}),B===null?delete G[T]:G[T]=B},a._stringRef=T,a)}if(typeof o!="string")throw Error(l(284));if(!d._owner)throw Error(l(290,o))}return o}function Nl(o,a){throw o=Object.prototype.toString.call(a),Error(l(31,o==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":o))}function dm(o){var a=o._init;return a(o._payload)}function pm(o){function a($,X){if(o){var se=$.deletions;se===null?($.deletions=[X],$.flags|=16):se.push(X)}}function d($,X){if(!o)return null;for(;X!==null;)a($,X),X=X.sibling;return null}function v($,X){for($=new Map;X!==null;)X.key!==null?$.set(X.key,X):$.set(X.index,X),X=X.sibling;return $}function M($,X){return $=br($,X),$.index=0,$.sibling=null,$}function T($,X,se){return $.index=se,o?(se=$.alternate,se!==null?(se=se.index,se<X?($.flags|=2,X):se):($.flags|=2,X)):($.flags|=1048576,X)}function B($){return o&&$.alternate===null&&($.flags|=2),$}function G($,X,se,Fe){return X===null||X.tag!==6?(X=Df(se,$.mode,Fe),X.return=$,X):(X=M(X,se),X.return=$,X)}function oe($,X,se,Fe){var Je=se.type;return Je===f?Xe($,X,se.props.children,Fe,se.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===w&&dm(Je)===X.type)?(Fe=M(X,se.props),Fe.ref=jo($,X,se),Fe.return=$,Fe):(Fe=fc(se.type,se.key,se.props,null,$.mode,Fe),Fe.ref=jo($,X,se),Fe.return=$,Fe)}function Ee($,X,se,Fe){return X===null||X.tag!==4||X.stateNode.containerInfo!==se.containerInfo||X.stateNode.implementation!==se.implementation?(X=Uf(se,$.mode,Fe),X.return=$,X):(X=M(X,se.children||[]),X.return=$,X)}function Xe($,X,se,Fe,Je){return X===null||X.tag!==7?(X=Qr(se,$.mode,Fe,Je),X.return=$,X):(X=M(X,se),X.return=$,X)}function pt($,X,se){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Df(""+X,$.mode,se),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case u:return se=fc(X.type,X.key,X.props,null,$.mode,se),se.ref=jo($,null,X),se.return=$,se;case h:return X=Uf(X,$.mode,se),X.return=$,X;case w:var Fe=X._init;return pt($,Fe(X._payload),se)}if(ae(X)||C(X))return X=Qr(X,$.mode,se,null),X.return=$,X;Nl($,X)}return null}function rt($,X,se,Fe){var Je=X!==null?X.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Je!==null?null:G($,X,""+se,Fe);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case u:return se.key===Je?oe($,X,se,Fe):null;case h:return se.key===Je?Ee($,X,se,Fe):null;case w:return Je=se._init,rt($,X,Je(se._payload),Fe)}if(ae(se)||C(se))return Je!==null?null:Xe($,X,se,Fe,null);Nl($,se)}return null}function Nt($,X,se,Fe,Je){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return $=$.get(se)||null,G(X,$,""+Fe,Je);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case u:return $=$.get(Fe.key===null?se:Fe.key)||null,oe(X,$,Fe,Je);case h:return $=$.get(Fe.key===null?se:Fe.key)||null,Ee(X,$,Fe,Je);case w:var xt=Fe._init;return Nt($,X,se,xt(Fe._payload),Je)}if(ae(Fe)||C(Fe))return $=$.get(se)||null,Xe(X,$,Fe,Je,null);Nl(X,Fe)}return null}function Ke($,X,se,Fe){for(var Je=null,xt=null,mt=X,Pt=X=0,mn=null;mt!==null&&Pt<se.length;Pt++){mt.index>Pt?(mn=mt,mt=null):mn=mt.sibling;var It=rt($,mt,se[Pt],Fe);if(It===null){mt===null&&(mt=mn);break}o&&mt&&It.alternate===null&&a($,mt),X=T(It,X,Pt),xt===null?Je=It:xt.sibling=It,xt=It,mt=mn}if(Pt===se.length)return d($,mt),Gt&&Xr($,Pt),Je;if(mt===null){for(;Pt<se.length;Pt++)mt=pt($,se[Pt],Fe),mt!==null&&(X=T(mt,X,Pt),xt===null?Je=mt:xt.sibling=mt,xt=mt);return Gt&&Xr($,Pt),Je}for(mt=v($,mt);Pt<se.length;Pt++)mn=Nt(mt,$,Pt,se[Pt],Fe),mn!==null&&(o&&mn.alternate!==null&&mt.delete(mn.key===null?Pt:mn.key),X=T(mn,X,Pt),xt===null?Je=mn:xt.sibling=mn,xt=mn);return o&&mt.forEach(function(Cr){return a($,Cr)}),Gt&&Xr($,Pt),Je}function Rn($,X,se,Fe){var Je=C(se);if(typeof Je!="function")throw Error(l(150));if(se=Je.call(se),se==null)throw Error(l(151));for(var xt=Je=null,mt=X,Pt=X=0,mn=null,It=se.next();mt!==null&&!It.done;Pt++,It=se.next()){mt.index>Pt?(mn=mt,mt=null):mn=mt.sibling;var Cr=rt($,mt,It.value,Fe);if(Cr===null){mt===null&&(mt=mn);break}o&&mt&&Cr.alternate===null&&a($,mt),X=T(Cr,X,Pt),xt===null?Je=Cr:xt.sibling=Cr,xt=Cr,mt=mn}if(It.done)return d($,mt),Gt&&Xr($,Pt),Je;if(mt===null){for(;!It.done;Pt++,It=se.next())It=pt($,It.value,Fe),It!==null&&(X=T(It,X,Pt),xt===null?Je=It:xt.sibling=It,xt=It);return Gt&&Xr($,Pt),Je}for(mt=v($,mt);!It.done;Pt++,It=se.next())It=Nt(mt,$,Pt,It.value,Fe),It!==null&&(o&&It.alternate!==null&&mt.delete(It.key===null?Pt:It.key),X=T(It,X,Pt),xt===null?Je=It:xt.sibling=It,xt=It);return o&&mt.forEach(function(nS){return a($,nS)}),Gt&&Xr($,Pt),Je}function pi($,X,se,Fe){if(typeof se=="object"&&se!==null&&se.type===f&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case u:e:{for(var Je=se.key,xt=X;xt!==null;){if(xt.key===Je){if(Je=se.type,Je===f){if(xt.tag===7){d($,xt.sibling),X=M(xt,se.props.children),X.return=$,$=X;break e}}else if(xt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===w&&dm(Je)===xt.type){d($,xt.sibling),X=M(xt,se.props),X.ref=jo($,xt,se),X.return=$,$=X;break e}d($,xt);break}else a($,xt);xt=xt.sibling}se.type===f?(X=Qr(se.props.children,$.mode,Fe,se.key),X.return=$,$=X):(Fe=fc(se.type,se.key,se.props,null,$.mode,Fe),Fe.ref=jo($,X,se),Fe.return=$,$=Fe)}return B($);case h:e:{for(xt=se.key;X!==null;){if(X.key===xt)if(X.tag===4&&X.stateNode.containerInfo===se.containerInfo&&X.stateNode.implementation===se.implementation){d($,X.sibling),X=M(X,se.children||[]),X.return=$,$=X;break e}else{d($,X);break}else a($,X);X=X.sibling}X=Uf(se,$.mode,Fe),X.return=$,$=X}return B($);case w:return xt=se._init,pi($,X,xt(se._payload),Fe)}if(ae(se))return Ke($,X,se,Fe);if(C(se))return Rn($,X,se,Fe);Nl($,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,X!==null&&X.tag===6?(d($,X.sibling),X=M(X,se),X.return=$,$=X):(d($,X),X=Df(se,$.mode,Fe),X.return=$,$=X),B($)):d($,X)}return pi}var Xs=pm(!0),mm=pm(!1),Jo={},ui=qt(Jo),Ko=qt(Jo),Ys=qt(Jo);function Oi(o){if(o===Jo)throw Error(l(174));return o}function Jh(o,a){Ce(Ys,a),Ce(Ko,o),Ce(ui,Jo),o=me(a),$e(ui),Ce(ui,o)}function qs(){$e(ui),$e(Ko),$e(Ys)}function gm(o){var a=Oi(Ys.current),d=Oi(ui.current);a=F(d,o.type,a),d!==a&&(Ce(Ko,o),Ce(ui,a))}function Kh(o){Ko.current===o&&($e(ui),$e(Ko))}var Wt=qt(0);function Ol(o){for(var a=o;a!==null;){if(a.tag===13){var d=a.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||Wo(d)||Ns(d)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Qh=[];function $h(){for(var o=0;o<Qh.length;o++){var a=Qh[o];tt?a._workInProgressVersionPrimary=null:a._workInProgressVersionSecondary=null}Qh.length=0}var Fl=c.ReactCurrentDispatcher,hi=c.ReactCurrentBatchConfig,Zs=0,Zt=null,An=null,pn=null,zl=!1,Qo=!1,$o=0,bx=0;function bn(){throw Error(l(321))}function ef(o,a){if(a===null)return!1;for(var d=0;d<a.length&&d<o.length;d++)if(!Di(o[d],a[d]))return!1;return!0}function tf(o,a,d,v,M,T){if(Zs=T,Zt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Fl.current=o===null||o.memoizedState===null?Ix:Lx,o=d(v,M),Qo){T=0;do{if(Qo=!1,$o=0,25<=T)throw Error(l(301));T+=1,pn=An=null,a.updateQueue=null,Fl.current=Dx,o=d(v,M)}while(Qo)}if(Fl.current=Gl,a=An!==null&&An.next!==null,Zs=0,pn=An=Zt=null,zl=!1,a)throw Error(l(300));return o}function nf(){var o=$o!==0;return $o=0,o}function er(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Zt.memoizedState=pn=o:pn=pn.next=o,pn}function Fi(){if(An===null){var o=Zt.alternate;o=o!==null?o.memoizedState:null}else o=An.next;var a=pn===null?Zt.memoizedState:pn.next;if(a!==null)pn=a,An=o;else{if(o===null)throw Error(l(310));An=o,o={memoizedState:An.memoizedState,baseState:An.baseState,baseQueue:An.baseQueue,queue:An.queue,next:null},pn===null?Zt.memoizedState=pn=o:pn=pn.next=o}return pn}function Yr(o,a){return typeof a=="function"?a(o):a}function Bl(o){var a=Fi(),d=a.queue;if(d===null)throw Error(l(311));d.lastRenderedReducer=o;var v=An,M=v.baseQueue,T=d.pending;if(T!==null){if(M!==null){var B=M.next;M.next=T.next,T.next=B}v.baseQueue=M=T,d.pending=null}if(M!==null){T=M.next,v=v.baseState;var G=B=null,oe=null,Ee=T;do{var Xe=Ee.lane;if((Zs&Xe)===Xe)oe!==null&&(oe=oe.next={lane:0,action:Ee.action,hasEagerState:Ee.hasEagerState,eagerState:Ee.eagerState,next:null}),v=Ee.hasEagerState?Ee.eagerState:o(v,Ee.action);else{var pt={lane:Xe,action:Ee.action,hasEagerState:Ee.hasEagerState,eagerState:Ee.eagerState,next:null};oe===null?(G=oe=pt,B=v):oe=oe.next=pt,Zt.lanes|=Xe,Js|=Xe}Ee=Ee.next}while(Ee!==null&&Ee!==T);oe===null?B=v:oe.next=G,Di(v,a.memoizedState)||($n=!0),a.memoizedState=v,a.baseState=B,a.baseQueue=oe,d.lastRenderedState=v}if(o=d.interleaved,o!==null){M=o;do T=M.lane,Zt.lanes|=T,Js|=T,M=M.next;while(M!==o)}else M===null&&(d.lanes=0);return[a.memoizedState,d.dispatch]}function kl(o){var a=Fi(),d=a.queue;if(d===null)throw Error(l(311));d.lastRenderedReducer=o;var v=d.dispatch,M=d.pending,T=a.memoizedState;if(M!==null){d.pending=null;var B=M=M.next;do T=o(T,B.action),B=B.next;while(B!==M);Di(T,a.memoizedState)||($n=!0),a.memoizedState=T,a.baseQueue===null&&(a.baseState=T),d.lastRenderedState=T}return[T,v]}function vm(){}function _m(o,a){var d=Zt,v=Fi(),M=a(),T=!Di(v.memoizedState,M);if(T&&(v.memoizedState=M,$n=!0),v=v.queue,ta(Sm.bind(null,d,v,o),[o]),v.getSnapshot!==a||T||pn!==null&&pn.memoizedState.tag&1){if(d.flags|=2048,ea(9,xm.bind(null,d,v,M,a),void 0,null),nn===null)throw Error(l(349));Zs&30||ym(d,a,M)}return M}function ym(o,a,d){o.flags|=16384,o={getSnapshot:a,value:d},a=Zt.updateQueue,a===null?(a={lastEffect:null,stores:null},Zt.updateQueue=a,a.stores=[o]):(d=a.stores,d===null?a.stores=[o]:d.push(o))}function xm(o,a,d,v){a.value=d,a.getSnapshot=v,Mm(a)&&fi(o,1,-1)}function Sm(o,a,d){return d(function(){Mm(a)&&fi(o,1,-1)})}function Mm(o){var a=o.getSnapshot;o=o.value;try{var d=a();return!Di(o,d)}catch{return!0}}function rf(o){var a=er();return typeof o=="function"&&(o=o()),a.memoizedState=a.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:o},a.queue=o,o=o.dispatch=Px.bind(null,Zt,o),[a.memoizedState,o]}function ea(o,a,d,v){return o={tag:o,create:a,destroy:d,deps:v,next:null},a=Zt.updateQueue,a===null?(a={lastEffect:null,stores:null},Zt.updateQueue=a,a.lastEffect=o.next=o):(d=a.lastEffect,d===null?a.lastEffect=o.next=o:(v=d.next,d.next=o,o.next=v,a.lastEffect=o)),o}function wm(){return Fi().memoizedState}function Hl(o,a,d,v){var M=er();Zt.flags|=o,M.memoizedState=ea(1|a,d,void 0,v===void 0?null:v)}function Vl(o,a,d,v){var M=Fi();v=v===void 0?null:v;var T=void 0;if(An!==null){var B=An.memoizedState;if(T=B.destroy,v!==null&&ef(v,B.deps)){M.memoizedState=ea(a,d,T,v);return}}Zt.flags|=o,M.memoizedState=ea(1|a,d,T,v)}function sf(o,a){return Hl(8390656,8,o,a)}function ta(o,a){return Vl(2048,8,o,a)}function Em(o,a){return Vl(4,2,o,a)}function Tm(o,a){return Vl(4,4,o,a)}function Am(o,a){if(typeof a=="function")return o=o(),a(o),function(){a(null)};if(a!=null)return o=o(),a.current=o,function(){a.current=null}}function bm(o,a,d){return d=d!=null?d.concat([o]):null,Vl(4,4,Am.bind(null,a,o),d)}function of(){}function Cm(o,a){var d=Fi();a=a===void 0?null:a;var v=d.memoizedState;return v!==null&&a!==null&&ef(a,v[1])?v[0]:(d.memoizedState=[o,a],o)}function Rm(o,a){var d=Fi();a=a===void 0?null:a;var v=d.memoizedState;return v!==null&&a!==null&&ef(a,v[1])?v[0]:(o=o(),d.memoizedState=[o,a],o)}function Cx(o,a){var d=Rt;Rt=d!==0&&4>d?d:4,o(!0);var v=hi.transition;hi.transition={};try{o(!1),a()}finally{Rt=d,hi.transition=v}}function Pm(){return Fi().memoizedState}function Rx(o,a,d){var v=Tr(o);d={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null},Im(o)?Lm(a,d):(Dm(o,a,d),d=On(),o=fi(o,v,d),o!==null&&Um(o,a,v))}function Px(o,a,d){var v=Tr(o),M={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null};if(Im(o))Lm(a,M);else{Dm(o,a,M);var T=o.alternate;if(o.lanes===0&&(T===null||T.lanes===0)&&(T=a.lastRenderedReducer,T!==null))try{var B=a.lastRenderedState,G=T(B,d);if(M.hasEagerState=!0,M.eagerState=G,Di(G,B))return}catch{}finally{}d=On(),o=fi(o,v,d),o!==null&&Um(o,a,v)}}function Im(o){var a=o.alternate;return o===Zt||a!==null&&a===Zt}function Lm(o,a){Qo=zl=!0;var d=o.pending;d===null?a.next=a:(a.next=d.next,d.next=a),o.pending=a}function Dm(o,a,d){nn!==null&&o.mode&1&&!(Mt&2)?(o=a.interleaved,o===null?(d.next=d,Ni===null?Ni=[a]:Ni.push(a)):(d.next=o.next,o.next=d),a.interleaved=d):(o=a.pending,o===null?d.next=d:(d.next=o.next,o.next=d),a.pending=d)}function Um(o,a,d){if(d&4194240){var v=a.lanes;v&=o.pendingLanes,d|=v,a.lanes=d,Dh(o,d)}}var Gl={readContext:ai,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},Ix={readContext:ai,useCallback:function(o,a){return er().memoizedState=[o,a===void 0?null:a],o},useContext:ai,useEffect:sf,useImperativeHandle:function(o,a,d){return d=d!=null?d.concat([o]):null,Hl(4194308,4,Am.bind(null,a,o),d)},useLayoutEffect:function(o,a){return Hl(4194308,4,o,a)},useInsertionEffect:function(o,a){return Hl(4,2,o,a)},useMemo:function(o,a){var d=er();return a=a===void 0?null:a,o=o(),d.memoizedState=[o,a],o},useReducer:function(o,a,d){var v=er();return a=d!==void 0?d(a):a,v.memoizedState=v.baseState=a,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:a},v.queue=o,o=o.dispatch=Rx.bind(null,Zt,o),[v.memoizedState,o]},useRef:function(o){var a=er();return o={current:o},a.memoizedState=o},useState:rf,useDebugValue:of,useDeferredValue:function(o){var a=rf(o),d=a[0],v=a[1];return sf(function(){var M=hi.transition;hi.transition={};try{v(o)}finally{hi.transition=M}},[o]),d},useTransition:function(){var o=rf(!1),a=o[0];return o=Cx.bind(null,o[1]),er().memoizedState=o,[a,o]},useMutableSource:function(){},useSyncExternalStore:function(o,a,d){var v=Zt,M=er();if(Gt){if(d===void 0)throw Error(l(407));d=d()}else{if(d=a(),nn===null)throw Error(l(349));Zs&30||ym(v,a,d)}M.memoizedState=d;var T={value:d,getSnapshot:a};return M.queue=T,sf(Sm.bind(null,v,T,o),[o]),v.flags|=2048,ea(9,xm.bind(null,v,T,d,a),void 0,null),d},useId:function(){var o=er(),a=nn.identifierPrefix;if(Gt){var d=$i,v=Qi;d=(v&~(1<<32-Jn(v)-1)).toString(32)+d,a=":"+a+"R"+d,d=$o++,0<d&&(a+="H"+d.toString(32)),a+=":"}else d=bx++,a=":"+a+"r"+d.toString(32)+":";return o.memoizedState=a},unstable_isNewReconciler:!1},Lx={readContext:ai,useCallback:Cm,useContext:ai,useEffect:ta,useImperativeHandle:bm,useInsertionEffect:Em,useLayoutEffect:Tm,useMemo:Rm,useReducer:Bl,useRef:wm,useState:function(){return Bl(Yr)},useDebugValue:of,useDeferredValue:function(o){var a=Bl(Yr),d=a[0],v=a[1];return ta(function(){var M=hi.transition;hi.transition={};try{v(o)}finally{hi.transition=M}},[o]),d},useTransition:function(){var o=Bl(Yr)[0],a=Fi().memoizedState;return[o,a]},useMutableSource:vm,useSyncExternalStore:_m,useId:Pm,unstable_isNewReconciler:!1},Dx={readContext:ai,useCallback:Cm,useContext:ai,useEffect:ta,useImperativeHandle:bm,useInsertionEffect:Em,useLayoutEffect:Tm,useMemo:Rm,useReducer:kl,useRef:wm,useState:function(){return kl(Yr)},useDebugValue:of,useDeferredValue:function(o){var a=kl(Yr),d=a[0],v=a[1];return ta(function(){var M=hi.transition;hi.transition={};try{v(o)}finally{hi.transition=M}},[o]),d},useTransition:function(){var o=kl(Yr)[0],a=Fi().memoizedState;return[o,a]},useMutableSource:vm,useSyncExternalStore:_m,useId:Pm,unstable_isNewReconciler:!1};function af(o,a){try{var d="",v=a;do d+=Ax(v),v=v.return;while(v);var M=d}catch(T){M=`
Error generating stack: `+T.message+`
`+T.stack}return{value:o,source:a,stack:M}}function lf(o,a){try{console.error(a.value)}catch(d){setTimeout(function(){throw d})}}var Ux=typeof WeakMap=="function"?WeakMap:Map;function Nm(o,a,d){d=Ki(-1,d),d.tag=3,d.payload={element:null};var v=a.value;return d.callback=function(){sc||(sc=!0,Af=v),lf(o,a)},d}function Om(o,a,d){d=Ki(-1,d),d.tag=3;var v=o.type.getDerivedStateFromError;if(typeof v=="function"){var M=a.value;d.payload=function(){return v(M)},d.callback=function(){lf(o,a)}}var T=o.stateNode;return T!==null&&typeof T.componentDidCatch=="function"&&(d.callback=function(){lf(o,a),typeof v!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var B=a.stack;this.componentDidCatch(a.value,{componentStack:B!==null?B:""})}),d}function Fm(o,a,d){var v=o.pingCache;if(v===null){v=o.pingCache=new Ux;var M=new Set;v.set(a,M)}else M=v.get(a),M===void 0&&(M=new Set,v.set(a,M));M.has(d)||(M.add(d),o=Zx.bind(null,o,a,d),a.then(o,o))}function zm(o){do{var a;if((a=o.tag===13)&&(a=o.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return o;o=o.return}while(o!==null);return null}function Bm(o,a,d,v,M){return o.mode&1?(o.flags|=65536,o.lanes=M,o):(o===a?o.flags|=65536:(o.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(a=Ki(-1,1),a.tag=2,Mr(d,a))),d.lanes|=1),o)}function zi(o){o.flags|=4}function km(o,a){if(o!==null&&o.child===a.child)return!0;if(a.flags&16)return!1;for(o=a.child;o!==null;){if(o.flags&12854||o.subtreeFlags&12854)return!1;o=o.sibling}return!0}var na,ia,Wl,Xl;if(ct)na=function(o,a){for(var d=a.child;d!==null;){if(d.tag===5||d.tag===6)Se(o,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break;for(;d.sibling===null;){if(d.return===null||d.return===a)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},ia=function(){},Wl=function(o,a,d,v,M){if(o=o.memoizedProps,o!==v){var T=a.stateNode,B=Oi(ui.current);d=ie(T,d,o,v,M,B),(a.updateQueue=d)&&zi(a)}},Xl=function(o,a,d,v){d!==v&&zi(a)};else if(N){na=function(o,a,d,v){for(var M=a.child;M!==null;){if(M.tag===5){var T=M.stateNode;d&&v&&(T=un(T,M.type,M.memoizedProps,M)),Se(o,T)}else if(M.tag===6)T=M.stateNode,d&&v&&(T=hn(T,M.memoizedProps,M)),Se(o,T);else if(M.tag!==4){if(M.tag===22&&M.memoizedState!==null)T=M.child,T!==null&&(T.return=M),na(o,M,!0,!0);else if(M.child!==null){M.child.return=M,M=M.child;continue}}if(M===a)break;for(;M.sibling===null;){if(M.return===null||M.return===a)return;M=M.return}M.sibling.return=M.return,M=M.sibling}};var Hm=function(o,a,d,v){for(var M=a.child;M!==null;){if(M.tag===5){var T=M.stateNode;d&&v&&(T=un(T,M.type,M.memoizedProps,M)),Tt(o,T)}else if(M.tag===6)T=M.stateNode,d&&v&&(T=hn(T,M.memoizedProps,M)),Tt(o,T);else if(M.tag!==4){if(M.tag===22&&M.memoizedState!==null)T=M.child,T!==null&&(T.return=M),Hm(o,M,!0,!0);else if(M.child!==null){M.child.return=M,M=M.child;continue}}if(M===a)break;for(;M.sibling===null;){if(M.return===null||M.return===a)return;M=M.return}M.sibling.return=M.return,M=M.sibling}};ia=function(o,a){var d=a.stateNode;if(!km(o,a)){o=d.containerInfo;var v=dt(o);Hm(v,a,!1,!1),d.pendingChildren=v,zi(a),Ht(o,v)}},Wl=function(o,a,d,v,M){var T=o.stateNode,B=o.memoizedProps;if((o=km(o,a))&&B===v)a.stateNode=T;else{var G=a.stateNode,oe=Oi(ui.current),Ee=null;B!==v&&(Ee=ie(G,d,B,v,M,oe)),o&&Ee===null?a.stateNode=T:(T=it(T,Ee,d,B,v,a,o,G),He(T,d,v,M,oe)&&zi(a),a.stateNode=T,o?zi(a):na(T,a,!1,!1))}},Xl=function(o,a,d,v){d!==v?(o=Oi(Ys.current),d=Oi(ui.current),a.stateNode=Ae(v,o,d,a),zi(a)):a.stateNode=o.stateNode}}else ia=function(){},Wl=function(){},Xl=function(){};function ra(o,a){if(!Gt)switch(o.tailMode){case"hidden":a=o.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?o.tail=null:d.sibling=null;break;case"collapsed":d=o.tail;for(var v=null;d!==null;)d.alternate!==null&&(v=d),d=d.sibling;v===null?a||o.tail===null?o.tail=null:o.tail.sibling=null:v.sibling=null}}function Cn(o){var a=o.alternate!==null&&o.alternate.child===o.child,d=0,v=0;if(a)for(var M=o.child;M!==null;)d|=M.lanes|M.childLanes,v|=M.subtreeFlags&14680064,v|=M.flags&14680064,M.return=o,M=M.sibling;else for(M=o.child;M!==null;)d|=M.lanes|M.childLanes,v|=M.subtreeFlags,v|=M.flags,M.return=o,M=M.sibling;return o.subtreeFlags|=v,o.childLanes=d,a}function Nx(o,a,d){var v=a.pendingProps;switch(Yh(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(a),null;case 1:return fn(a.type)&&Vt(),Cn(a),null;case 3:return v=a.stateNode,qs(),$e(zt),$e(ut),$h(),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),(o===null||o.child===null)&&(Zo(a)?zi(a):o===null||o.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,Si!==null&&(Rf(Si),Si=null))),ia(o,a),Cn(a),null;case 5:Kh(a),d=Oi(Ys.current);var M=a.type;if(o!==null&&a.stateNode!=null)Wl(o,a,M,v,d),o.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!v){if(a.stateNode===null)throw Error(l(166));return Cn(a),null}if(o=Oi(ui.current),Zo(a)){if(!ye)throw Error(l(175));o=Ch(a.stateNode,a.type,a.memoizedProps,d,o,a,!qo),a.updateQueue=o,o!==null&&zi(a)}else{var T=re(M,v,d,o,a);na(T,a,!1,!1),a.stateNode=T,He(T,M,v,d,o)&&zi(a)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Cn(a),null;case 6:if(o&&a.stateNode!=null)Xl(o,a,o.memoizedProps,v);else{if(typeof v!="string"&&a.stateNode===null)throw Error(l(166));if(o=Oi(Ys.current),d=Oi(ui.current),Zo(a)){if(!ye)throw Error(l(176));if(o=a.stateNode,v=a.memoizedProps,(d=Rh(o,v,a,!qo))&&(M=Kn,M!==null))switch(T=(M.mode&1)!==0,M.tag){case 3:ze(M.stateNode.containerInfo,o,v,T);break;case 5:Ye(M.type,M.memoizedProps,M.stateNode,o,v,T)}d&&zi(a)}else a.stateNode=Ae(v,o,d,a)}return Cn(a),null;case 13:if($e(Wt),v=a.memoizedState,Gt&&Qn!==null&&a.mode&1&&!(a.flags&128)){for(o=Qn;o;)o=xr(o);return Ws(),a.flags|=98560,a}if(v!==null&&v.dehydrated!==null){if(v=Zo(a),o===null){if(!v)throw Error(l(318));if(!ye)throw Error(l(344));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));Ph(o,a)}else Ws(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;return Cn(a),null}return Si!==null&&(Rf(Si),Si=null),a.flags&128?(a.lanes=d,a):(v=v!==null,d=!1,o===null?Zo(a):d=o.memoizedState!==null,v&&!d&&(a.child.flags|=8192,a.mode&1&&(o===null||Wt.current&1?an===0&&(an=3):If())),a.updateQueue!==null&&(a.flags|=4),Cn(a),null);case 4:return qs(),ia(o,a),o===null&&Le(a.stateNode.containerInfo),Cn(a),null;case 10:return kh(a.type._context),Cn(a),null;case 17:return fn(a.type)&&Vt(),Cn(a),null;case 19:if($e(Wt),M=a.memoizedState,M===null)return Cn(a),null;if(v=(a.flags&128)!==0,T=M.rendering,T===null)if(v)ra(M,!1);else{if(an!==0||o!==null&&o.flags&128)for(o=a.child;o!==null;){if(T=Ol(o),T!==null){for(a.flags|=128,ra(M,!1),o=T.updateQueue,o!==null&&(a.updateQueue=o,a.flags|=4),a.subtreeFlags=0,o=d,v=a.child;v!==null;)d=v,M=o,d.flags&=14680066,T=d.alternate,T===null?(d.childLanes=0,d.lanes=M,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=T.childLanes,d.lanes=T.lanes,d.child=T.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=T.memoizedProps,d.memoizedState=T.memoizedState,d.updateQueue=T.updateQueue,d.type=T.type,M=T.dependencies,d.dependencies=M===null?null:{lanes:M.lanes,firstContext:M.firstContext}),v=v.sibling;return Ce(Wt,Wt.current&1|2),a.child}o=o.sibling}M.tail!==null&&dn()>Tf&&(a.flags|=128,v=!0,ra(M,!1),a.lanes=4194304)}else{if(!v)if(o=Ol(T),o!==null){if(a.flags|=128,v=!0,o=o.updateQueue,o!==null&&(a.updateQueue=o,a.flags|=4),ra(M,!0),M.tail===null&&M.tailMode==="hidden"&&!T.alternate&&!Gt)return Cn(a),null}else 2*dn()-M.renderingStartTime>Tf&&d!==1073741824&&(a.flags|=128,v=!0,ra(M,!1),a.lanes=4194304);M.isBackwards?(T.sibling=a.child,a.child=T):(o=M.last,o!==null?o.sibling=T:a.child=T,M.last=T)}return M.tail!==null?(a=M.tail,M.rendering=a,M.tail=a.sibling,M.renderingStartTime=dn(),a.sibling=null,o=Wt.current,Ce(Wt,v?o&1|2:o&1),a):(Cn(a),null);case 22:case 23:return Pf(),v=a.memoizedState!==null,o!==null&&o.memoizedState!==null!==v&&(a.flags|=8192),v&&a.mode&1?ei&1073741824&&(Cn(a),ct&&a.subtreeFlags&6&&(a.flags|=8192)):Cn(a),null;case 24:return null;case 25:return null}throw Error(l(156,a.tag))}var Ox=c.ReactCurrentOwner,$n=!1;function Nn(o,a,d,v){a.child=o===null?mm(a,null,d,v):Xs(a,o.child,d,v)}function Vm(o,a,d,v,M){d=d.render;var T=a.ref;return Hs(a,M),v=tf(o,a,d,v,T,M),d=nf(),o!==null&&!$n?(a.updateQueue=o.updateQueue,a.flags&=-2053,o.lanes&=~M,tr(o,a,M)):(Gt&&d&&Xh(a),a.flags|=1,Nn(o,a,v,M),a.child)}function Gm(o,a,d,v,M){if(o===null){var T=d.type;return typeof T=="function"&&!Lf(T)&&T.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(a.tag=15,a.type=T,Wm(o,a,T,v,M)):(o=fc(d.type,null,v,a,a.mode,M),o.ref=a.ref,o.return=a,a.child=o)}if(T=o.child,!(o.lanes&M)){var B=T.memoizedProps;if(d=d.compare,d=d!==null?d:bl,d(B,v)&&o.ref===a.ref)return tr(o,a,M)}return a.flags|=1,o=br(T,v),o.ref=a.ref,o.return=a,a.child=o}function Wm(o,a,d,v,M){if(o!==null&&bl(o.memoizedProps,v)&&o.ref===a.ref)if($n=!1,(o.lanes&M)!==0)o.flags&131072&&($n=!0);else return a.lanes=o.lanes,tr(o,a,M);return cf(o,a,d,v,M)}function Xm(o,a,d){var v=a.pendingProps,M=v.children,T=o!==null?o.memoizedState:null;if(v.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null},Ce(js,ei),ei|=d;else if(d&1073741824)a.memoizedState={baseLanes:0,cachePool:null},v=T!==null?T.baseLanes:d,Ce(js,ei),ei|=v;else return o=T!==null?T.baseLanes|d:d,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:o,cachePool:null},a.updateQueue=null,Ce(js,ei),ei|=o,null;else T!==null?(v=T.baseLanes|d,a.memoizedState=null):v=d,Ce(js,ei),ei|=v;return Nn(o,a,M,d),a.child}function Ym(o,a){var d=a.ref;(o===null&&d!==null||o!==null&&o.ref!==d)&&(a.flags|=512,a.flags|=2097152)}function cf(o,a,d,v,M){var T=fn(d)?Gn:ut.current;return T=tn(a,T),Hs(a,M),d=tf(o,a,d,v,T,M),v=nf(),o!==null&&!$n?(a.updateQueue=o.updateQueue,a.flags&=-2053,o.lanes&=~M,tr(o,a,M)):(Gt&&v&&Xh(a),a.flags|=1,Nn(o,a,d,M),a.child)}function qm(o,a,d,v,M){if(fn(d)){var T=!0;xn(a)}else T=!1;if(Hs(a,M),a.stateNode===null)o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),am(a,d,v),Wh(a,d,v,M),v=!0;else if(o===null){var B=a.stateNode,G=a.memoizedProps;B.props=G;var oe=B.context,Ee=d.contextType;typeof Ee=="object"&&Ee!==null?Ee=ai(Ee):(Ee=fn(d)?Gn:ut.current,Ee=tn(a,Ee));var Xe=d.getDerivedStateFromProps,pt=typeof Xe=="function"||typeof B.getSnapshotBeforeUpdate=="function";pt||typeof B.UNSAFE_componentWillReceiveProps!="function"&&typeof B.componentWillReceiveProps!="function"||(G!==v||oe!==Ee)&&lm(a,B,v,Ee),Sr=!1;var rt=a.memoizedState;B.state=rt,Il(a,v,B,M),oe=a.memoizedState,G!==v||rt!==oe||zt.current||Sr?(typeof Xe=="function"&&(Gh(a,d,Xe,v),oe=a.memoizedState),(G=Sr||om(a,d,G,v,rt,oe,Ee))?(pt||typeof B.UNSAFE_componentWillMount!="function"&&typeof B.componentWillMount!="function"||(typeof B.componentWillMount=="function"&&B.componentWillMount(),typeof B.UNSAFE_componentWillMount=="function"&&B.UNSAFE_componentWillMount()),typeof B.componentDidMount=="function"&&(a.flags|=4194308)):(typeof B.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=v,a.memoizedState=oe),B.props=v,B.state=oe,B.context=Ee,v=G):(typeof B.componentDidMount=="function"&&(a.flags|=4194308),v=!1)}else{B=a.stateNode,nm(o,a),G=a.memoizedProps,Ee=a.type===a.elementType?G:xi(a.type,G),B.props=Ee,pt=a.pendingProps,rt=B.context,oe=d.contextType,typeof oe=="object"&&oe!==null?oe=ai(oe):(oe=fn(d)?Gn:ut.current,oe=tn(a,oe));var Nt=d.getDerivedStateFromProps;(Xe=typeof Nt=="function"||typeof B.getSnapshotBeforeUpdate=="function")||typeof B.UNSAFE_componentWillReceiveProps!="function"&&typeof B.componentWillReceiveProps!="function"||(G!==pt||rt!==oe)&&lm(a,B,v,oe),Sr=!1,rt=a.memoizedState,B.state=rt,Il(a,v,B,M);var Ke=a.memoizedState;G!==pt||rt!==Ke||zt.current||Sr?(typeof Nt=="function"&&(Gh(a,d,Nt,v),Ke=a.memoizedState),(Ee=Sr||om(a,d,Ee,v,rt,Ke,oe)||!1)?(Xe||typeof B.UNSAFE_componentWillUpdate!="function"&&typeof B.componentWillUpdate!="function"||(typeof B.componentWillUpdate=="function"&&B.componentWillUpdate(v,Ke,oe),typeof B.UNSAFE_componentWillUpdate=="function"&&B.UNSAFE_componentWillUpdate(v,Ke,oe)),typeof B.componentDidUpdate=="function"&&(a.flags|=4),typeof B.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof B.componentDidUpdate!="function"||G===o.memoizedProps&&rt===o.memoizedState||(a.flags|=4),typeof B.getSnapshotBeforeUpdate!="function"||G===o.memoizedProps&&rt===o.memoizedState||(a.flags|=1024),a.memoizedProps=v,a.memoizedState=Ke),B.props=v,B.state=Ke,B.context=oe,v=Ee):(typeof B.componentDidUpdate!="function"||G===o.memoizedProps&&rt===o.memoizedState||(a.flags|=4),typeof B.getSnapshotBeforeUpdate!="function"||G===o.memoizedProps&&rt===o.memoizedState||(a.flags|=1024),v=!1)}return uf(o,a,d,v,T,M)}function uf(o,a,d,v,M,T){Ym(o,a);var B=(a.flags&128)!==0;if(!v&&!B)return M&&Bs(a,d,!1),tr(o,a,T);v=a.stateNode,Ox.current=a;var G=B&&typeof d.getDerivedStateFromError!="function"?null:v.render();return a.flags|=1,o!==null&&B?(a.child=Xs(a,o.child,null,T),a.child=Xs(a,null,G,T)):Nn(o,a,G,T),a.memoizedState=v.state,M&&Bs(a,d,!0),a.child}function Zm(o){var a=o.stateNode;a.pendingContext?yi(o,a.pendingContext,a.pendingContext!==a.context):a.context&&yi(o,a.context,!1),Jh(o,a.containerInfo)}function jm(o,a,d,v,M){return Ws(),jh(M),a.flags|=256,Nn(o,a,d,v),a.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function ql(o){return{baseLanes:o,cachePool:null}}function Jm(o,a,d){var v=a.pendingProps,M=Wt.current,T=!1,B=(a.flags&128)!==0,G;if((G=B)||(G=o!==null&&o.memoizedState===null?!1:(M&2)!==0),G?(T=!0,a.flags&=-129):(o===null||o.memoizedState!==null)&&(M|=1),Ce(Wt,M&1),o===null)return Zh(a),o=a.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(a.mode&1?Ns(o)?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(M=v.children,o=v.fallback,T?(v=a.mode,T=a.child,M={mode:"hidden",children:M},!(v&1)&&T!==null?(T.childLanes=0,T.pendingProps=M):T=dc(M,v,0,null),o=Qr(o,v,d,null),T.return=a,o.return=a,T.sibling=o,a.child=T,a.child.memoizedState=ql(d),a.memoizedState=Yl,o):hf(a,M));if(M=o.memoizedState,M!==null){if(G=M.dehydrated,G!==null){if(B)return a.flags&256?(a.flags&=-257,Zl(o,a,d,Error(l(422)))):a.memoizedState!==null?(a.child=o.child,a.flags|=128,null):(T=v.fallback,M=a.mode,v=dc({mode:"visible",children:v.children},M,0,null),T=Qr(T,M,d,null),T.flags|=2,v.return=a,T.return=a,v.sibling=T,a.child=v,a.mode&1&&Xs(a,o.child,null,d),a.child.memoizedState=ql(d),a.memoizedState=Yl,T);if(!(a.mode&1))a=Zl(o,a,d,null);else if(Ns(G))a=Zl(o,a,d,Error(l(419)));else if(v=(d&o.childLanes)!==0,$n||v){if(v=nn,v!==null){switch(d&-d){case 4:T=2;break;case 16:T=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:T=32;break;case 536870912:T=268435456;break;default:T=0}v=T&(v.suspendedLanes|d)?0:T,v!==0&&v!==M.retryLane&&(M.retryLane=v,fi(o,v,-1))}If(),a=Zl(o,a,d,Error(l(421)))}else Wo(G)?(a.flags|=128,a.child=o.child,a=jx.bind(null,o),Os(G,a),a=null):(d=M.treeContext,ye&&(Qn=xl(G),Kn=a,Gt=!0,Si=null,qo=!1,d!==null&&(li[ci++]=Qi,li[ci++]=$i,li[ci++]=Wr,Qi=d.id,$i=d.overflow,Wr=a)),a=hf(a,a.pendingProps.children),a.flags|=4096);return a}return T?(v=Qm(o,a,v.children,v.fallback,d),T=a.child,M=o.child.memoizedState,T.memoizedState=M===null?ql(d):{baseLanes:M.baseLanes|d,cachePool:null},T.childLanes=o.childLanes&~d,a.memoizedState=Yl,v):(d=Km(o,a,v.children,d),a.memoizedState=null,d)}return T?(v=Qm(o,a,v.children,v.fallback,d),T=a.child,M=o.child.memoizedState,T.memoizedState=M===null?ql(d):{baseLanes:M.baseLanes|d,cachePool:null},T.childLanes=o.childLanes&~d,a.memoizedState=Yl,v):(d=Km(o,a,v.children,d),a.memoizedState=null,d)}function hf(o,a){return a=dc({mode:"visible",children:a},o.mode,0,null),a.return=o,o.child=a}function Km(o,a,d,v){var M=o.child;return o=M.sibling,d=br(M,{mode:"visible",children:d}),!(a.mode&1)&&(d.lanes=v),d.return=a,d.sibling=null,o!==null&&(v=a.deletions,v===null?(a.deletions=[o],a.flags|=16):v.push(o)),a.child=d}function Qm(o,a,d,v,M){var T=a.mode;o=o.child;var B=o.sibling,G={mode:"hidden",children:d};return!(T&1)&&a.child!==o?(d=a.child,d.childLanes=0,d.pendingProps=G,a.deletions=null):(d=br(o,G),d.subtreeFlags=o.subtreeFlags&14680064),B!==null?v=br(B,v):(v=Qr(v,T,M,null),v.flags|=2),v.return=a,d.return=a,d.sibling=v,a.child=d,v}function Zl(o,a,d,v){return v!==null&&jh(v),Xs(a,o.child,null,d),o=hf(a,a.pendingProps.children),o.flags|=2,a.memoizedState=null,o}function $m(o,a,d){o.lanes|=a;var v=o.alternate;v!==null&&(v.lanes|=a),Hh(o.return,a,d)}function ff(o,a,d,v,M){var T=o.memoizedState;T===null?o.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:v,tail:d,tailMode:M}:(T.isBackwards=a,T.rendering=null,T.renderingStartTime=0,T.last=v,T.tail=d,T.tailMode=M)}function eg(o,a,d){var v=a.pendingProps,M=v.revealOrder,T=v.tail;if(Nn(o,a,v.children,d),v=Wt.current,v&2)v=v&1|2,a.flags|=128;else{if(o!==null&&o.flags&128)e:for(o=a.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&$m(o,d,a);else if(o.tag===19)$m(o,d,a);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}v&=1}if(Ce(Wt,v),!(a.mode&1))a.memoizedState=null;else switch(M){case"forwards":for(d=a.child,M=null;d!==null;)o=d.alternate,o!==null&&Ol(o)===null&&(M=d),d=d.sibling;d=M,d===null?(M=a.child,a.child=null):(M=d.sibling,d.sibling=null),ff(a,!1,M,d,T);break;case"backwards":for(d=null,M=a.child,a.child=null;M!==null;){if(o=M.alternate,o!==null&&Ol(o)===null){a.child=M;break}o=M.sibling,M.sibling=d,d=M,M=o}ff(a,!0,d,null,T);break;case"together":ff(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function tr(o,a,d){if(o!==null&&(a.dependencies=o.dependencies),Js|=a.lanes,!(d&a.childLanes))return null;if(o!==null&&a.child!==o.child)throw Error(l(153));if(a.child!==null){for(o=a.child,d=br(o,o.pendingProps),a.child=d,d.return=a;o.sibling!==null;)o=o.sibling,d=d.sibling=br(o,o.pendingProps),d.return=a;d.sibling=null}return a.child}function Fx(o,a,d){switch(a.tag){case 3:Zm(a),Ws();break;case 5:gm(a);break;case 1:fn(a.type)&&xn(a);break;case 4:Jh(a,a.stateNode.containerInfo);break;case 10:tm(a,a.type._context,a.memoizedProps.value);break;case 13:var v=a.memoizedState;if(v!==null)return v.dehydrated!==null?(Ce(Wt,Wt.current&1),a.flags|=128,null):d&a.child.childLanes?Jm(o,a,d):(Ce(Wt,Wt.current&1),o=tr(o,a,d),o!==null?o.sibling:null);Ce(Wt,Wt.current&1);break;case 19:if(v=(d&a.childLanes)!==0,o.flags&128){if(v)return eg(o,a,d);a.flags|=128}var M=a.memoizedState;if(M!==null&&(M.rendering=null,M.tail=null,M.lastEffect=null),Ce(Wt,Wt.current),v)break;return null;case 22:case 23:return a.lanes=0,Xm(o,a,d)}return tr(o,a,d)}function zx(o,a){switch(Yh(a),a.tag){case 1:return fn(a.type)&&Vt(),o=a.flags,o&65536?(a.flags=o&-65537|128,a):null;case 3:return qs(),$e(zt),$e(ut),$h(),o=a.flags,o&65536&&!(o&128)?(a.flags=o&-65537|128,a):null;case 5:return Kh(a),null;case 13:if($e(Wt),o=a.memoizedState,o!==null&&o.dehydrated!==null){if(a.alternate===null)throw Error(l(340));Ws()}return o=a.flags,o&65536?(a.flags=o&-65537|128,a):null;case 19:return $e(Wt),null;case 4:return qs(),null;case 10:return kh(a.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var jl=!1,qr=!1,Bx=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Jl(o,a){var d=o.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(v){Yn(o,a,v)}else d.current=null}function df(o,a,d){try{d()}catch(v){Yn(o,a,v)}}var tg=!1;function kx(o,a){for(j(o.containerInfo),Ue=a;Ue!==null;)if(o=Ue,a=o.child,(o.subtreeFlags&1028)!==0&&a!==null)a.return=o,Ue=a;else for(;Ue!==null;){o=Ue;try{var d=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var v=d.memoizedProps,M=d.memoizedState,T=o.stateNode,B=T.getSnapshotBeforeUpdate(o.elementType===o.type?v:xi(o.type,v),M);T.__reactInternalSnapshotBeforeUpdate=B}break;case 3:ct&&be(o.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(G){Yn(o,o.return,G)}if(a=o.sibling,a!==null){a.return=o.return,Ue=a;break}Ue=o.return}return d=tg,tg=!1,d}function Zr(o,a,d){var v=a.updateQueue;if(v=v!==null?v.lastEffect:null,v!==null){var M=v=v.next;do{if((M.tag&o)===o){var T=M.destroy;M.destroy=void 0,T!==void 0&&df(a,d,T)}M=M.next}while(M!==v)}}function sa(o,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&o)===o){var v=d.create;d.destroy=v()}d=d.next}while(d!==a)}}function pf(o){var a=o.ref;if(a!==null){var d=o.stateNode;switch(o.tag){case 5:o=Q(d);break;default:o=d}typeof a=="function"?a(o):a.current=o}}function ng(o,a,d){if(Li&&typeof Li.onCommitFiberUnmount=="function")try{Li.onCommitFiberUnmount(Tl,a)}catch{}switch(a.tag){case 0:case 11:case 14:case 15:if(o=a.updateQueue,o!==null&&(o=o.lastEffect,o!==null)){var v=o=o.next;do{var M=v,T=M.destroy;M=M.tag,T!==void 0&&(M&2||M&4)&&df(a,d,T),v=v.next}while(v!==o)}break;case 1:if(Jl(a,d),o=a.stateNode,typeof o.componentWillUnmount=="function")try{o.props=a.memoizedProps,o.state=a.memoizedState,o.componentWillUnmount()}catch(B){Yn(a,d,B)}break;case 5:Jl(a,d);break;case 4:ct?lg(o,a,d):N&&N&&(a=a.stateNode.containerInfo,d=dt(a),St(a,d))}}function ig(o,a,d){for(var v=a;;)if(ng(o,v,d),v.child===null||ct&&v.tag===4){if(v===a)break;for(;v.sibling===null;){if(v.return===null||v.return===a)return;v=v.return}v.sibling.return=v.return,v=v.sibling}else v.child.return=v,v=v.child}function rg(o){var a=o.alternate;a!==null&&(o.alternate=null,rg(a)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(a=o.stateNode,a!==null&&Qe(a)),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function sg(o){return o.tag===5||o.tag===3||o.tag===4}function og(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||sg(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function ag(o){if(ct){e:{for(var a=o.return;a!==null;){if(sg(a))break e;a=a.return}throw Error(l(160))}var d=a;switch(d.tag){case 5:a=d.stateNode,d.flags&32&&(Ne(a),d.flags&=-33),d=og(o),gf(o,d,a);break;case 3:case 4:a=d.stateNode.containerInfo,d=og(o),mf(o,d,a);break;default:throw Error(l(161))}}}function mf(o,a,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,a?Ge(d,o,a):ft(d,o);else if(v!==4&&(o=o.child,o!==null))for(mf(o,a,d),o=o.sibling;o!==null;)mf(o,a,d),o=o.sibling}function gf(o,a,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,a?at(d,o,a):ke(d,o);else if(v!==4&&(o=o.child,o!==null))for(gf(o,a,d),o=o.sibling;o!==null;)gf(o,a,d),o=o.sibling}function lg(o,a,d){for(var v=a,M=!1,T,B;;){if(!M){M=v.return;e:for(;;){if(M===null)throw Error(l(160));switch(T=M.stateNode,M.tag){case 5:B=!1;break e;case 3:T=T.containerInfo,B=!0;break e;case 4:T=T.containerInfo,B=!0;break e}M=M.return}M=!0}if(v.tag===5||v.tag===6)ig(o,v,d),B?ue(T,v.stateNode):V(T,v.stateNode);else if(v.tag===18)B?J(T,v.stateNode):ne(T,v.stateNode);else if(v.tag===4){if(v.child!==null){T=v.stateNode.containerInfo,B=!0,v.child.return=v,v=v.child;continue}}else if(ng(o,v,d),v.child!==null){v.child.return=v,v=v.child;continue}if(v===a)break;for(;v.sibling===null;){if(v.return===null||v.return===a)return;v=v.return,v.tag===4&&(M=!1)}v.sibling.return=v.return,v=v.sibling}}function vf(o,a){if(ct){switch(a.tag){case 0:case 11:case 14:case 15:Zr(3,a,a.return),sa(3,a),Zr(5,a,a.return);return;case 1:return;case 5:var d=a.stateNode;if(d!=null){var v=a.memoizedProps;o=o!==null?o.memoizedProps:v;var M=a.type,T=a.updateQueue;a.updateQueue=null,T!==null&&wt(d,T,M,o,v,a)}return;case 6:if(a.stateNode===null)throw Error(l(162));d=a.memoizedProps,Me(a.stateNode,o!==null?o.memoizedProps:d,d);return;case 3:ye&&o!==null&&o.memoizedState.isDehydrated&&W(a.stateNode.containerInfo);return;case 12:return;case 13:Kl(a);return;case 19:Kl(a);return;case 17:return}throw Error(l(163))}switch(a.tag){case 0:case 11:case 14:case 15:Zr(3,a,a.return),sa(3,a),Zr(5,a,a.return);return;case 12:return;case 13:Kl(a);return;case 19:Kl(a);return;case 3:ye&&o!==null&&o.memoizedState.isDehydrated&&W(a.stateNode.containerInfo);break;case 22:case 23:return}e:if(N){switch(a.tag){case 1:case 5:case 6:break e;case 3:case 4:a=a.stateNode,St(a.containerInfo,a.pendingChildren);break e}throw Error(l(163))}}function Kl(o){var a=o.updateQueue;if(a!==null){o.updateQueue=null;var d=o.stateNode;d===null&&(d=o.stateNode=new Bx),a.forEach(function(v){var M=Jx.bind(null,o,v);d.has(v)||(d.add(v),v.then(M,M))})}}function Hx(o,a){for(Ue=a;Ue!==null;){a=Ue;var d=a.deletions;if(d!==null)for(var v=0;v<d.length;v++){var M=d[v];try{var T=o;ct?lg(T,M,a):ig(T,M,a);var B=M.alternate;B!==null&&(B.return=null),M.return=null}catch(Je){Yn(M,a,Je)}}if(d=a.child,a.subtreeFlags&12854&&d!==null)d.return=a,Ue=d;else for(;Ue!==null;){a=Ue;try{var G=a.flags;if(G&32&&ct&&Ne(a.stateNode),G&512){var oe=a.alternate;if(oe!==null){var Ee=oe.ref;Ee!==null&&(typeof Ee=="function"?Ee(null):Ee.current=null)}}if(G&8192)switch(a.tag){case 13:if(a.memoizedState!==null){var Xe=a.alternate;(Xe===null||Xe.memoizedState===null)&&(Ef=dn())}break;case 22:var pt=a.memoizedState!==null,rt=a.alternate,Nt=rt!==null&&rt.memoizedState!==null;if(d=a,ct){e:if(v=d,M=pt,T=null,ct)for(var Ke=v;;){if(Ke.tag===5){if(T===null){T=Ke;var Rn=Ke.stateNode;M?H(Rn):ce(Ke.stateNode,Ke.memoizedProps)}}else if(Ke.tag===6){if(T===null){var pi=Ke.stateNode;M?_e(pi):fe(pi,Ke.memoizedProps)}}else if((Ke.tag!==22&&Ke.tag!==23||Ke.memoizedState===null||Ke===v)&&Ke.child!==null){Ke.child.return=Ke,Ke=Ke.child;continue}if(Ke===v)break;for(;Ke.sibling===null;){if(Ke.return===null||Ke.return===v)break e;T===Ke&&(T=null),Ke=Ke.return}T===Ke&&(T=null),Ke.sibling.return=Ke.return,Ke=Ke.sibling}}if(pt&&!Nt&&d.mode&1){Ue=d;for(var $=d.child;$!==null;){for(d=Ue=$;Ue!==null;){v=Ue;var X=v.child;switch(v.tag){case 0:case 11:case 14:case 15:Zr(4,v,v.return);break;case 1:Jl(v,v.return);var se=v.stateNode;if(typeof se.componentWillUnmount=="function"){var Fe=v.return;try{se.props=v.memoizedProps,se.state=v.memoizedState,se.componentWillUnmount()}catch(Je){Yn(v,Fe,Je)}}break;case 5:Jl(v,v.return);break;case 22:if(v.memoizedState!==null){hg(d);continue}}X!==null?(X.return=v,Ue=X):hg(d)}$=$.sibling}}}switch(G&4102){case 2:ag(a),a.flags&=-3;break;case 6:ag(a),a.flags&=-3,vf(a.alternate,a);break;case 4096:a.flags&=-4097;break;case 4100:a.flags&=-4097,vf(a.alternate,a);break;case 4:vf(a.alternate,a)}}catch(Je){Yn(a,a.return,Je)}if(d=a.sibling,d!==null){d.return=a.return,Ue=d;break}Ue=a.return}}}function Vx(o,a,d){Ue=o,cg(o)}function cg(o,a,d){for(var v=(o.mode&1)!==0;Ue!==null;){var M=Ue,T=M.child;if(M.tag===22&&v){var B=M.memoizedState!==null||jl;if(!B){var G=M.alternate,oe=G!==null&&G.memoizedState!==null||qr;G=jl;var Ee=qr;if(jl=B,(qr=oe)&&!Ee)for(Ue=M;Ue!==null;)B=Ue,oe=B.child,B.tag===22&&B.memoizedState!==null?fg(M):oe!==null?(oe.return=B,Ue=oe):fg(M);for(;T!==null;)Ue=T,cg(T),T=T.sibling;Ue=M,jl=G,qr=Ee}ug(o)}else M.subtreeFlags&8772&&T!==null?(T.return=M,Ue=T):ug(o)}}function ug(o){for(;Ue!==null;){var a=Ue;if(a.flags&8772){var d=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:qr||sa(5,a);break;case 1:var v=a.stateNode;if(a.flags&4&&!qr)if(d===null)v.componentDidMount();else{var M=a.elementType===a.type?d.memoizedProps:xi(a.type,d.memoizedProps);v.componentDidUpdate(M,d.memoizedState,v.__reactInternalSnapshotBeforeUpdate)}var T=a.updateQueue;T!==null&&rm(a,T,v);break;case 3:var B=a.updateQueue;if(B!==null){if(d=null,a.child!==null)switch(a.child.tag){case 5:d=Q(a.child.stateNode);break;case 1:d=a.child.stateNode}rm(a,B,d)}break;case 5:var G=a.stateNode;d===null&&a.flags&4&&Oe(G,a.type,a.memoizedProps,a);break;case 6:break;case 4:break;case 12:break;case 13:if(ye&&a.memoizedState===null){var oe=a.alternate;if(oe!==null){var Ee=oe.memoizedState;if(Ee!==null){var Xe=Ee.dehydrated;Xe!==null&&te(Xe)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(l(163))}qr||a.flags&512&&pf(a)}catch(pt){Yn(a,a.return,pt)}}if(a===o){Ue=null;break}if(d=a.sibling,d!==null){d.return=a.return,Ue=d;break}Ue=a.return}}function hg(o){for(;Ue!==null;){var a=Ue;if(a===o){Ue=null;break}var d=a.sibling;if(d!==null){d.return=a.return,Ue=d;break}Ue=a.return}}function fg(o){for(;Ue!==null;){var a=Ue;try{switch(a.tag){case 0:case 11:case 15:var d=a.return;try{sa(4,a)}catch(oe){Yn(a,d,oe)}break;case 1:var v=a.stateNode;if(typeof v.componentDidMount=="function"){var M=a.return;try{v.componentDidMount()}catch(oe){Yn(a,M,oe)}}var T=a.return;try{pf(a)}catch(oe){Yn(a,T,oe)}break;case 5:var B=a.return;try{pf(a)}catch(oe){Yn(a,B,oe)}}}catch(oe){Yn(a,a.return,oe)}if(a===o){Ue=null;break}var G=a.sibling;if(G!==null){G.return=a.return,Ue=G;break}Ue=a.return}}var Ql=0,$l=1,ec=2,tc=3,nc=4;if(typeof Symbol=="function"&&Symbol.for){var oa=Symbol.for;Ql=oa("selector.component"),$l=oa("selector.has_pseudo_class"),ec=oa("selector.role"),tc=oa("selector.test_id"),nc=oa("selector.text")}function _f(o){var a=xe(o);if(a!=null){if(typeof a.memoizedProps["data-testname"]!="string")throw Error(l(364));return a}if(o=P(o),o===null)throw Error(l(362));return o.stateNode.current}function yf(o,a){switch(a.$$typeof){case Ql:if(o.type===a.value)return!0;break;case $l:e:{a=a.value,o=[o,0];for(var d=0;d<o.length;){var v=o[d++],M=o[d++],T=a[M];if(v.tag!==5||!he(v)){for(;T!=null&&yf(v,T);)M++,T=a[M];if(M===a.length){a=!0;break e}else for(v=v.child;v!==null;)o.push(v,M),v=v.sibling}}a=!1}return a;case ec:if(o.tag===5&&ge(o.stateNode,a.value))return!0;break;case nc:if((o.tag===5||o.tag===6)&&(o=pe(o),o!==null&&0<=o.indexOf(a.value)))return!0;break;case tc:if(o.tag===5&&(o=o.memoizedProps["data-testname"],typeof o=="string"&&o.toLowerCase()===a.value.toLowerCase()))return!0;break;default:throw Error(l(365))}return!1}function xf(o){switch(o.$$typeof){case Ql:return"<"+(L(o.value)||"Unknown")+">";case $l:return":has("+(xf(o)||"")+")";case ec:return'[role="'+o.value+'"]';case nc:return'"'+o.value+'"';case tc:return'[data-testname="'+o.value+'"]';default:throw Error(l(365))}}function dg(o,a){var d=[];o=[o,0];for(var v=0;v<o.length;){var M=o[v++],T=o[v++],B=a[T];if(M.tag!==5||!he(M)){for(;B!=null&&yf(M,B);)T++,B=a[T];if(T===a.length)d.push(M);else for(M=M.child;M!==null;)o.push(M,T),M=M.sibling}}return d}function Sf(o,a){if(!k)throw Error(l(363));o=_f(o),o=dg(o,a),a=[],o=Array.from(o);for(var d=0;d<o.length;){var v=o[d++];if(v.tag===5)he(v)||a.push(v.stateNode);else for(v=v.child;v!==null;)o.push(v),v=v.sibling}return a}var Gx=Math.ceil,ic=c.ReactCurrentDispatcher,Mf=c.ReactCurrentOwner,Qt=c.ReactCurrentBatchConfig,Mt=0,nn=null,rn=null,Sn=0,ei=0,js=qt(0),an=0,aa=null,Js=0,rc=0,wf=0,la=null,Wn=null,Ef=0,Tf=1/0;function Ks(){Tf=dn()+500}var sc=!1,Af=null,wr=null,oc=!1,Er=null,ac=0,ca=0,bf=null,lc=-1,cc=0;function On(){return Mt&6?dn():lc!==-1?lc:lc=dn()}function Tr(o){return o.mode&1?Mt&2&&Sn!==0?Sn&-Sn:Tx.transition!==null?(cc===0&&(o=Ml,Ml<<=1,!(Ml&4194240)&&(Ml=64),cc=o),cc):(o=Rt,o!==0?o:de()):1}function fi(o,a,d){if(50<ca)throw ca=0,bf=null,Error(l(185));var v=uc(o,a);return v===null?null:(Yo(v,a,d),(!(Mt&2)||v!==nn)&&(v===nn&&(!(Mt&2)&&(rc|=a),an===4&&Ar(v,Sn)),Xn(v,d),a===1&&Mt===0&&!(o.mode&1)&&(Ks(),Al&&Ui())),v)}function uc(o,a){o.lanes|=a;var d=o.alternate;for(d!==null&&(d.lanes|=a),d=o,o=o.return;o!==null;)o.childLanes|=a,d=o.alternate,d!==null&&(d.childLanes|=a),d=o,o=o.return;return d.tag===3?d.stateNode:null}function Xn(o,a){var d=o.callbackNode;gx(o,a);var v=El(o,o===nn?Sn:0);if(v===0)d!==null&&$p(d),o.callbackNode=null,o.callbackPriority=0;else if(a=v&-v,o.callbackPriority!==a){if(d!=null&&$p(d),a===1)o.tag===0?Ex(mg.bind(null,o)):em(mg.bind(null,o)),Pe?Ve(function(){Mt===0&&Ui()}):Uh(Nh,Ui),d=null;else{switch(Qp(v)){case 1:d=Nh;break;case 4:d=xx;break;case 16:d=Oh;break;case 536870912:d=Sx;break;default:d=Oh}d=Eg(d,pg.bind(null,o))}o.callbackPriority=a,o.callbackNode=d}}function pg(o,a){if(lc=-1,cc=0,Mt&6)throw Error(l(327));var d=o.callbackNode;if(Kr()&&o.callbackNode!==d)return null;var v=El(o,o===nn?Sn:0);if(v===0)return null;if(v&30||v&o.expiredLanes||a)a=hc(o,v);else{a=v;var M=Mt;Mt|=2;var T=_g();(nn!==o||Sn!==a)&&(Ks(),jr(o,a));do try{Yx();break}catch(G){vg(o,G)}while(!0);Bh(),ic.current=T,Mt=M,rn!==null?a=0:(nn=null,Sn=0,a=an)}if(a!==0){if(a===2&&(M=Ih(o),M!==0&&(v=M,a=Cf(o,M))),a===1)throw d=aa,jr(o,0),Ar(o,v),Xn(o,dn()),d;if(a===6)Ar(o,v);else{if(M=o.current.alternate,!(v&30)&&!Wx(M)&&(a=hc(o,v),a===2&&(T=Ih(o),T!==0&&(v=T,a=Cf(o,T))),a===1))throw d=aa,jr(o,0),Ar(o,v),Xn(o,dn()),d;switch(o.finishedWork=M,o.finishedLanes=v,a){case 0:case 1:throw Error(l(345));case 2:Jr(o,Wn);break;case 3:if(Ar(o,v),(v&130023424)===v&&(a=Ef+500-dn(),10<a)){if(El(o,0)!==0)break;if(M=o.suspendedLanes,(M&v)!==v){On(),o.pingedLanes|=o.suspendedLanes&M;break}o.timeoutHandle=we(Jr.bind(null,o,Wn),a);break}Jr(o,Wn);break;case 4:if(Ar(o,v),(v&4194240)===v)break;for(a=o.eventTimes,M=-1;0<v;){var B=31-Jn(v);T=1<<B,B=a[B],B>M&&(M=B),v&=~T}if(v=M,v=dn()-v,v=(120>v?120:480>v?480:1080>v?1080:1920>v?1920:3e3>v?3e3:4320>v?4320:1960*Gx(v/1960))-v,10<v){o.timeoutHandle=we(Jr.bind(null,o,Wn),v);break}Jr(o,Wn);break;case 5:Jr(o,Wn);break;default:throw Error(l(329))}}}return Xn(o,dn()),o.callbackNode===d?pg.bind(null,o):null}function Cf(o,a){var d=la;return o.current.memoizedState.isDehydrated&&(jr(o,a).flags|=256),o=hc(o,a),o!==2&&(a=Wn,Wn=d,a!==null&&Rf(a)),o}function Rf(o){Wn===null?Wn=o:Wn.push.apply(Wn,o)}function Wx(o){for(var a=o;;){if(a.flags&16384){var d=a.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var v=0;v<d.length;v++){var M=d[v],T=M.getSnapshot;M=M.value;try{if(!Di(T(),M))return!1}catch{return!1}}}if(d=a.child,a.subtreeFlags&16384&&d!==null)d.return=a,a=d;else{if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ar(o,a){for(a&=~wf,a&=~rc,o.suspendedLanes|=a,o.pingedLanes&=~a,o=o.expirationTimes;0<a;){var d=31-Jn(a),v=1<<d;o[d]=-1,a&=~v}}function mg(o){if(Mt&6)throw Error(l(327));Kr();var a=El(o,0);if(!(a&1))return Xn(o,dn()),null;var d=hc(o,a);if(o.tag!==0&&d===2){var v=Ih(o);v!==0&&(a=v,d=Cf(o,v))}if(d===1)throw d=aa,jr(o,0),Ar(o,a),Xn(o,dn()),d;if(d===6)throw Error(l(345));return o.finishedWork=o.current.alternate,o.finishedLanes=a,Jr(o,Wn),Xn(o,dn()),null}function gg(o){Er!==null&&Er.tag===0&&!(Mt&6)&&Kr();var a=Mt;Mt|=1;var d=Qt.transition,v=Rt;try{if(Qt.transition=null,Rt=1,o)return o()}finally{Rt=v,Qt.transition=d,Mt=a,!(Mt&6)&&Ui()}}function Pf(){ei=js.current,$e(js)}function jr(o,a){o.finishedWork=null,o.finishedLanes=0;var d=o.timeoutHandle;if(d!==ot&&(o.timeoutHandle=ot,et(d)),rn!==null)for(d=rn.return;d!==null;){var v=d;switch(Yh(v),v.tag){case 1:v=v.type.childContextTypes,v!=null&&Vt();break;case 3:qs(),$e(zt),$e(ut),$h();break;case 5:Kh(v);break;case 4:qs();break;case 13:$e(Wt);break;case 19:$e(Wt);break;case 10:kh(v.type._context);break;case 22:case 23:Pf()}d=d.return}if(nn=o,rn=o=br(o.current,null),Sn=ei=a,an=0,aa=null,wf=rc=Js=0,Wn=la=null,Ni!==null){for(a=0;a<Ni.length;a++)if(d=Ni[a],v=d.interleaved,v!==null){d.interleaved=null;var M=v.next,T=d.pending;if(T!==null){var B=T.next;T.next=M,v.next=B}d.pending=v}Ni=null}return o}function vg(o,a){do{var d=rn;try{if(Bh(),Fl.current=Gl,zl){for(var v=Zt.memoizedState;v!==null;){var M=v.queue;M!==null&&(M.pending=null),v=v.next}zl=!1}if(Zs=0,pn=An=Zt=null,Qo=!1,$o=0,Mf.current=null,d===null||d.return===null){an=1,aa=a,rn=null;break}e:{var T=o,B=d.return,G=d,oe=a;if(a=Sn,G.flags|=32768,oe!==null&&typeof oe=="object"&&typeof oe.then=="function"){var Ee=oe,Xe=G,pt=Xe.tag;if(!(Xe.mode&1)&&(pt===0||pt===11||pt===15)){var rt=Xe.alternate;rt?(Xe.updateQueue=rt.updateQueue,Xe.memoizedState=rt.memoizedState,Xe.lanes=rt.lanes):(Xe.updateQueue=null,Xe.memoizedState=null)}var Nt=zm(B);if(Nt!==null){Nt.flags&=-257,Bm(Nt,B,G,T,a),Nt.mode&1&&Fm(T,Ee,a),a=Nt,oe=Ee;var Ke=a.updateQueue;if(Ke===null){var Rn=new Set;Rn.add(oe),a.updateQueue=Rn}else Ke.add(oe);break e}else{if(!(a&1)){Fm(T,Ee,a),If();break e}oe=Error(l(426))}}else if(Gt&&G.mode&1){var pi=zm(B);if(pi!==null){!(pi.flags&65536)&&(pi.flags|=256),Bm(pi,B,G,T,a),jh(oe);break e}}T=oe,an!==4&&(an=2),la===null?la=[T]:la.push(T),oe=af(oe,G),G=B;do{switch(G.tag){case 3:G.flags|=65536,a&=-a,G.lanes|=a;var $=Nm(G,oe,a);im(G,$);break e;case 1:T=oe;var X=G.type,se=G.stateNode;if(!(G.flags&128)&&(typeof X.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(wr===null||!wr.has(se)))){G.flags|=65536,a&=-a,G.lanes|=a;var Fe=Om(G,T,a);im(G,Fe);break e}}G=G.return}while(G!==null)}xg(d)}catch(Je){a=Je,rn===d&&d!==null&&(rn=d=d.return);continue}break}while(!0)}function _g(){var o=ic.current;return ic.current=Gl,o===null?Gl:o}function If(){(an===0||an===3||an===2)&&(an=4),nn===null||!(Js&268435455)&&!(rc&268435455)||Ar(nn,Sn)}function hc(o,a){var d=Mt;Mt|=2;var v=_g();nn===o&&Sn===a||jr(o,a);do try{Xx();break}catch(M){vg(o,M)}while(!0);if(Bh(),Mt=d,ic.current=v,rn!==null)throw Error(l(261));return nn=null,Sn=0,an}function Xx(){for(;rn!==null;)yg(rn)}function Yx(){for(;rn!==null&&!_x();)yg(rn)}function yg(o){var a=wg(o.alternate,o,ei);o.memoizedProps=o.pendingProps,a===null?xg(o):rn=a,Mf.current=null}function xg(o){var a=o;do{var d=a.alternate;if(o=a.return,a.flags&32768){if(d=zx(d,a),d!==null){d.flags&=32767,rn=d;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{an=6,rn=null;return}}else if(d=Nx(d,a,ei),d!==null){rn=d;return}if(a=a.sibling,a!==null){rn=a;return}rn=a=o}while(a!==null);an===0&&(an=5)}function Jr(o,a){var d=Rt,v=Qt.transition;try{Qt.transition=null,Rt=1,qx(o,a,d)}finally{Qt.transition=v,Rt=d}return null}function qx(o,a,d){do Kr();while(Er!==null);if(Mt&6)throw Error(l(327));var v=o.finishedWork,M=o.finishedLanes;if(v===null)return null;if(o.finishedWork=null,o.finishedLanes=0,v===o.current)throw Error(l(177));o.callbackNode=null,o.callbackPriority=0;var T=v.lanes|v.childLanes;if(vx(o,T),o===nn&&(rn=nn=null,Sn=0),!(v.subtreeFlags&2064)&&!(v.flags&2064)||oc||(oc=!0,Eg(Oh,function(){return Kr(),null})),T=(v.flags&15990)!==0,v.subtreeFlags&15990||T){T=Qt.transition,Qt.transition=null;var B=Rt;Rt=1;var G=Mt;Mt|=4,Mf.current=null,kx(o,v),Hx(o,v),Z(o.containerInfo),o.current=v,Vx(v),yx(),Mt=G,Rt=B,Qt.transition=T}else o.current=v;if(oc&&(oc=!1,Er=o,ac=M),T=o.pendingLanes,T===0&&(wr=null),Mx(v.stateNode),Xn(o,dn()),a!==null)for(d=o.onRecoverableError,v=0;v<a.length;v++)d(a[v]);if(sc)throw sc=!1,o=Af,Af=null,o;return ac&1&&o.tag!==0&&Kr(),T=o.pendingLanes,T&1?o===bf?ca++:(ca=0,bf=o):ca=0,Ui(),null}function Kr(){if(Er!==null){var o=Qp(ac),a=Qt.transition,d=Rt;try{if(Qt.transition=null,Rt=16>o?16:o,Er===null)var v=!1;else{if(o=Er,Er=null,ac=0,Mt&6)throw Error(l(331));var M=Mt;for(Mt|=4,Ue=o.current;Ue!==null;){var T=Ue,B=T.child;if(Ue.flags&16){var G=T.deletions;if(G!==null){for(var oe=0;oe<G.length;oe++){var Ee=G[oe];for(Ue=Ee;Ue!==null;){var Xe=Ue;switch(Xe.tag){case 0:case 11:case 15:Zr(8,Xe,T)}var pt=Xe.child;if(pt!==null)pt.return=Xe,Ue=pt;else for(;Ue!==null;){Xe=Ue;var rt=Xe.sibling,Nt=Xe.return;if(rg(Xe),Xe===Ee){Ue=null;break}if(rt!==null){rt.return=Nt,Ue=rt;break}Ue=Nt}}}var Ke=T.alternate;if(Ke!==null){var Rn=Ke.child;if(Rn!==null){Ke.child=null;do{var pi=Rn.sibling;Rn.sibling=null,Rn=pi}while(Rn!==null)}}Ue=T}}if(T.subtreeFlags&2064&&B!==null)B.return=T,Ue=B;else e:for(;Ue!==null;){if(T=Ue,T.flags&2048)switch(T.tag){case 0:case 11:case 15:Zr(9,T,T.return)}var $=T.sibling;if($!==null){$.return=T.return,Ue=$;break e}Ue=T.return}}var X=o.current;for(Ue=X;Ue!==null;){B=Ue;var se=B.child;if(B.subtreeFlags&2064&&se!==null)se.return=B,Ue=se;else e:for(B=X;Ue!==null;){if(G=Ue,G.flags&2048)try{switch(G.tag){case 0:case 11:case 15:sa(9,G)}}catch(Je){Yn(G,G.return,Je)}if(G===B){Ue=null;break e}var Fe=G.sibling;if(Fe!==null){Fe.return=G.return,Ue=Fe;break e}Ue=G.return}}if(Mt=M,Ui(),Li&&typeof Li.onPostCommitFiberRoot=="function")try{Li.onPostCommitFiberRoot(Tl,o)}catch{}v=!0}return v}finally{Rt=d,Qt.transition=a}}return!1}function Sg(o,a,d){a=af(d,a),a=Nm(o,a,1),Mr(o,a),a=On(),o=uc(o,1),o!==null&&(Yo(o,1,a),Xn(o,a))}function Yn(o,a,d){if(o.tag===3)Sg(o,o,d);else for(;a!==null;){if(a.tag===3){Sg(a,o,d);break}else if(a.tag===1){var v=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof v.componentDidCatch=="function"&&(wr===null||!wr.has(v))){o=af(d,o),o=Om(a,o,1),Mr(a,o),o=On(),a=uc(a,1),a!==null&&(Yo(a,1,o),Xn(a,o));break}}a=a.return}}function Zx(o,a,d){var v=o.pingCache;v!==null&&v.delete(a),a=On(),o.pingedLanes|=o.suspendedLanes&d,nn===o&&(Sn&d)===d&&(an===4||an===3&&(Sn&130023424)===Sn&&500>dn()-Ef?jr(o,0):wf|=d),Xn(o,a)}function Mg(o,a){a===0&&(o.mode&1?(a=wl,wl<<=1,!(wl&130023424)&&(wl=4194304)):a=1);var d=On();o=uc(o,a),o!==null&&(Yo(o,a,d),Xn(o,d))}function jx(o){var a=o.memoizedState,d=0;a!==null&&(d=a.retryLane),Mg(o,d)}function Jx(o,a){var d=0;switch(o.tag){case 13:var v=o.stateNode,M=o.memoizedState;M!==null&&(d=M.retryLane);break;case 19:v=o.stateNode;break;default:throw Error(l(314))}v!==null&&v.delete(a),Mg(o,d)}var wg;wg=function(o,a,d){if(o!==null)if(o.memoizedProps!==a.pendingProps||zt.current)$n=!0;else{if(!(o.lanes&d)&&!(a.flags&128))return $n=!1,Fx(o,a,d);$n=!!(o.flags&131072)}else $n=!1,Gt&&a.flags&1048576&&cm(a,Ul,a.index);switch(a.lanes=0,a.tag){case 2:var v=a.type;o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),o=a.pendingProps;var M=tn(a,ut.current);Hs(a,d),M=tf(null,a,v,o,M,d);var T=nf();return a.flags|=1,typeof M=="object"&&M!==null&&typeof M.render=="function"&&M.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,fn(v)?(T=!0,xn(a)):T=!1,a.memoizedState=M.state!==null&&M.state!==void 0?M.state:null,Vh(a),M.updater=Ll,a.stateNode=M,M._reactInternals=a,Wh(a,v,o,d),a=uf(null,a,v,!0,T,d)):(a.tag=0,Gt&&T&&Xh(a),Nn(null,a,M,d),a=a.child),a;case 16:v=a.elementType;e:{switch(o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),o=a.pendingProps,M=v._init,v=M(v._payload),a.type=v,M=a.tag=Qx(v),o=xi(v,o),M){case 0:a=cf(null,a,v,o,d);break e;case 1:a=qm(null,a,v,o,d);break e;case 11:a=Vm(null,a,v,o,d);break e;case 14:a=Gm(null,a,v,xi(v.type,o),d);break e}throw Error(l(306,v,""))}return a;case 0:return v=a.type,M=a.pendingProps,M=a.elementType===v?M:xi(v,M),cf(o,a,v,M,d);case 1:return v=a.type,M=a.pendingProps,M=a.elementType===v?M:xi(v,M),qm(o,a,v,M,d);case 3:e:{if(Zm(a),o===null)throw Error(l(387));v=a.pendingProps,T=a.memoizedState,M=T.element,nm(o,a),Il(a,v,null,d);var B=a.memoizedState;if(v=B.element,ye&&T.isDehydrated)if(T={element:v,isDehydrated:!1,cache:B.cache,transitions:B.transitions},a.updateQueue.baseState=T,a.memoizedState=T,a.flags&256){M=Error(l(423)),a=jm(o,a,v,d,M);break e}else if(v!==M){M=Error(l(424)),a=jm(o,a,v,d,M);break e}else for(ye&&(Qn=yl(a.stateNode.containerInfo),Kn=a,Gt=!0,Si=null,qo=!1),d=mm(a,null,v,d),a.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Ws(),v===M){a=tr(o,a,d);break e}Nn(o,a,v,d)}a=a.child}return a;case 5:return gm(a),o===null&&Zh(a),v=a.type,M=a.pendingProps,T=o!==null?o.memoizedProps:null,B=M.children,ve(v,M)?B=null:T!==null&&ve(v,T)&&(a.flags|=32),Ym(o,a),Nn(o,a,B,d),a.child;case 6:return o===null&&Zh(a),null;case 13:return Jm(o,a,d);case 4:return Jh(a,a.stateNode.containerInfo),v=a.pendingProps,o===null?a.child=Xs(a,null,v,d):Nn(o,a,v,d),a.child;case 11:return v=a.type,M=a.pendingProps,M=a.elementType===v?M:xi(v,M),Vm(o,a,v,M,d);case 7:return Nn(o,a,a.pendingProps,d),a.child;case 8:return Nn(o,a,a.pendingProps.children,d),a.child;case 12:return Nn(o,a,a.pendingProps.children,d),a.child;case 10:e:{if(v=a.type._context,M=a.pendingProps,T=a.memoizedProps,B=M.value,tm(a,v,B),T!==null)if(Di(T.value,B)){if(T.children===M.children&&!zt.current){a=tr(o,a,d);break e}}else for(T=a.child,T!==null&&(T.return=a);T!==null;){var G=T.dependencies;if(G!==null){B=T.child;for(var oe=G.firstContext;oe!==null;){if(oe.context===v){if(T.tag===1){oe=Ki(-1,d&-d),oe.tag=2;var Ee=T.updateQueue;if(Ee!==null){Ee=Ee.shared;var Xe=Ee.pending;Xe===null?oe.next=oe:(oe.next=Xe.next,Xe.next=oe),Ee.pending=oe}}T.lanes|=d,oe=T.alternate,oe!==null&&(oe.lanes|=d),Hh(T.return,d,a),G.lanes|=d;break}oe=oe.next}}else if(T.tag===10)B=T.type===a.type?null:T.child;else if(T.tag===18){if(B=T.return,B===null)throw Error(l(341));B.lanes|=d,G=B.alternate,G!==null&&(G.lanes|=d),Hh(B,d,a),B=T.sibling}else B=T.child;if(B!==null)B.return=T;else for(B=T;B!==null;){if(B===a){B=null;break}if(T=B.sibling,T!==null){T.return=B.return,B=T;break}B=B.return}T=B}Nn(o,a,M.children,d),a=a.child}return a;case 9:return M=a.type,v=a.pendingProps.children,Hs(a,d),M=ai(M),v=v(M),a.flags|=1,Nn(o,a,v,d),a.child;case 14:return v=a.type,M=xi(v,a.pendingProps),M=xi(v.type,M),Gm(o,a,v,M,d);case 15:return Wm(o,a,a.type,a.pendingProps,d);case 17:return v=a.type,M=a.pendingProps,M=a.elementType===v?M:xi(v,M),o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),a.tag=1,fn(v)?(o=!0,xn(a)):o=!1,Hs(a,d),am(a,v,M),Wh(a,v,M,d),uf(null,a,v,!0,o,d);case 19:return eg(o,a,d);case 22:return Xm(o,a,d)}throw Error(l(156,a.tag))};function Eg(o,a){return Uh(o,a)}function Kx(o,a,d,v){this.tag=o,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=v,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(o,a,d,v){return new Kx(o,a,d,v)}function Lf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function Qx(o){if(typeof o=="function")return Lf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===S)return 11;if(o===E)return 14}return 2}function br(o,a){var d=o.alternate;return d===null?(d=di(o.tag,a,o.key,o.mode),d.elementType=o.elementType,d.type=o.type,d.stateNode=o.stateNode,d.alternate=o,o.alternate=d):(d.pendingProps=a,d.type=o.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=o.flags&14680064,d.childLanes=o.childLanes,d.lanes=o.lanes,d.child=o.child,d.memoizedProps=o.memoizedProps,d.memoizedState=o.memoizedState,d.updateQueue=o.updateQueue,a=o.dependencies,d.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},d.sibling=o.sibling,d.index=o.index,d.ref=o.ref,d}function fc(o,a,d,v,M,T){var B=2;if(v=o,typeof o=="function")Lf(o)&&(B=1);else if(typeof o=="string")B=5;else e:switch(o){case f:return Qr(d.children,M,T,a);case p:B=8,M|=8;break;case m:return o=di(12,d,a,M|2),o.elementType=m,o.lanes=T,o;case x:return o=di(13,d,a,M),o.elementType=x,o.lanes=T,o;case _:return o=di(19,d,a,M),o.elementType=_,o.lanes=T,o;case A:return dc(d,M,T,a);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case g:B=10;break e;case y:B=9;break e;case S:B=11;break e;case E:B=14;break e;case w:B=16,v=null;break e}throw Error(l(130,o==null?o:typeof o,""))}return a=di(B,d,a,M),a.elementType=o,a.type=v,a.lanes=T,a}function Qr(o,a,d,v){return o=di(7,o,v,a),o.lanes=d,o}function dc(o,a,d,v){return o=di(22,o,v,a),o.elementType=A,o.lanes=d,o.stateNode={},o}function Df(o,a,d){return o=di(6,o,null,a),o.lanes=d,o}function Uf(o,a,d){return a=di(4,o.children!==null?o.children:[],o.key,a),a.lanes=d,a.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},a}function $x(o,a,d,v,M){this.tag=a,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=ot,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lh(0),this.expirationTimes=Lh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lh(0),this.identifierPrefix=v,this.onRecoverableError=M,ye&&(this.mutableSourceEagerHydrationData=null)}function Tg(o,a,d,v,M,T,B,G,oe){return o=new $x(o,a,d,G,oe),a===1?(a=1,T===!0&&(a|=8)):a=0,T=di(3,null,null,a),o.current=T,T.stateNode=o,T.memoizedState={element:v,isDehydrated:d,cache:null,transitions:null},Vh(T),o}function Ag(o){if(!o)return Ft;o=o._reactInternals;e:{if(R(o)!==o||o.tag!==1)throw Error(l(170));var a=o;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(fn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(l(171))}if(o.tag===1){var d=o.type;if(fn(d))return zs(o,d,a)}return a}function bg(o){var a=o._reactInternals;if(a===void 0)throw typeof o.render=="function"?Error(l(188)):(o=Object.keys(o).join(","),Error(l(268,o)));return o=q(a),o===null?null:o.stateNode}function Cg(o,a){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var d=o.retryLane;o.retryLane=d!==0&&d<a?d:a}}function Nf(o,a){Cg(o,a),(o=o.alternate)&&Cg(o,a)}function eS(o){return o=q(o),o===null?null:o.stateNode}function tS(){return null}return t.attemptContinuousHydration=function(o){if(o.tag===13){var a=On();fi(o,134217728,a),Nf(o,134217728)}},t.attemptHydrationAtCurrentPriority=function(o){if(o.tag===13){var a=On(),d=Tr(o);fi(o,d,a),Nf(o,d)}},t.attemptSynchronousHydration=function(o){switch(o.tag){case 3:var a=o.stateNode;if(a.current.memoizedState.isDehydrated){var d=Xo(a.pendingLanes);d!==0&&(Dh(a,d|1),Xn(a,dn()),!(Mt&6)&&(Ks(),Ui()))}break;case 13:var v=On();gg(function(){return fi(o,1,v)}),Nf(o,1)}},t.batchedUpdates=function(o,a){var d=Mt;Mt|=1;try{return o(a)}finally{Mt=d,Mt===0&&(Ks(),Al&&Ui())}},t.createComponentSelector=function(o){return{$$typeof:Ql,value:o}},t.createContainer=function(o,a,d,v,M,T,B){return Tg(o,a,!1,null,d,v,M,T,B)},t.createHasPseudoClassSelector=function(o){return{$$typeof:$l,value:o}},t.createHydrationContainer=function(o,a,d,v,M,T,B,G,oe){return o=Tg(d,v,!0,o,M,T,B,G,oe),o.context=Ag(null),d=o.current,v=On(),M=Tr(d),T=Ki(v,M),T.callback=a??null,Mr(d,T),o.current.lanes=M,Yo(o,M,v),Xn(o,v),o},t.createPortal=function(o,a,d){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:v==null?null:""+v,children:o,containerInfo:a,implementation:d}},t.createRoleSelector=function(o){return{$$typeof:ec,value:o}},t.createTestNameSelector=function(o){return{$$typeof:tc,value:o}},t.createTextSelector=function(o){return{$$typeof:nc,value:o}},t.deferredUpdates=function(o){var a=Rt,d=Qt.transition;try{return Qt.transition=null,Rt=16,o()}finally{Rt=a,Qt.transition=d}},t.discreteUpdates=function(o,a,d,v,M){var T=Rt,B=Qt.transition;try{return Qt.transition=null,Rt=1,o(a,d,v,M)}finally{Rt=T,Qt.transition=B,Mt===0&&Ks()}},t.findAllNodes=Sf,t.findBoundingRects=function(o,a){if(!k)throw Error(l(363));a=Sf(o,a),o=[];for(var d=0;d<a.length;d++)o.push(ee(a[d]));for(a=o.length-1;0<a;a--){d=o[a];for(var v=d.x,M=v+d.width,T=d.y,B=T+d.height,G=a-1;0<=G;G--)if(a!==G){var oe=o[G],Ee=oe.x,Xe=Ee+oe.width,pt=oe.y,rt=pt+oe.height;if(v>=Ee&&T>=pt&&M<=Xe&&B<=rt){o.splice(a,1);break}else if(v!==Ee||d.width!==oe.width||rt<T||pt>B){if(!(T!==pt||d.height!==oe.height||Xe<v||Ee>M)){Ee>v&&(oe.width+=Ee-v,oe.x=v),Xe<M&&(oe.width=M-Ee),o.splice(a,1);break}}else{pt>T&&(oe.height+=pt-T,oe.y=T),rt<B&&(oe.height=B-pt),o.splice(a,1);break}}}return o},t.findHostInstance=bg,t.findHostInstanceWithNoPortals=function(o){return o=O(o),o=o!==null?K(o):null,o===null?null:o.stateNode},t.findHostInstanceWithWarning=function(o){return bg(o)},t.flushControlled=function(o){var a=Mt;Mt|=1;var d=Qt.transition,v=Rt;try{Qt.transition=null,Rt=1,o()}finally{Rt=v,Qt.transition=d,Mt=a,Mt===0&&(Ks(),Ui())}},t.flushPassiveEffects=Kr,t.flushSync=gg,t.focusWithin=function(o,a){if(!k)throw Error(l(363));for(o=_f(o),a=dg(o,a),a=Array.from(a),o=0;o<a.length;){var d=a[o++];if(!he(d)){if(d.tag===5&&je(d.stateNode))return!0;for(d=d.child;d!==null;)a.push(d),d=d.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Rt},t.getFindAllNodesFailureDescription=function(o,a){if(!k)throw Error(l(363));var d=0,v=[];o=[_f(o),0];for(var M=0;M<o.length;){var T=o[M++],B=o[M++],G=a[B];if((T.tag!==5||!he(T))&&(yf(T,G)&&(v.push(xf(G)),B++,B>d&&(d=B)),B<a.length))for(T=T.child;T!==null;)o.push(T,B),T=T.sibling}if(d<a.length){for(o=[];d<a.length;d++)o.push(xf(a[d]));return`findAllNodes was able to match part of the selector:
  `+(v.join(" > ")+`

No matching component was found for:
  `)+o.join(" > ")}return null},t.getPublicRootInstance=function(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return Q(o.child.stateNode);default:return o.child.stateNode}},t.injectIntoDevTools=function(o){if(o={bundleType:o.bundleType,version:o.version,rendererPackageName:o.rendererPackageName,rendererConfig:o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:eS,findFiberByHostInstance:o.findFiberByHostInstance||tS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")o=!1;else{var a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(a.isDisabled||!a.supportsFiber)o=!0;else{try{Tl=a.inject(o),Li=a}catch{}o=!!a.checkDCE}}return o},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(o,a,d,v){if(!k)throw Error(l(363));o=Sf(o,a);var M=Re(o,d,v).disconnect;return{disconnect:function(){M()}}},t.registerMutableSourceForHydration=function(o,a){var d=a._getVersion;d=d(a._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[a,d]:o.mutableSourceEagerHydrationData.push(a,d)},t.runWithPriority=function(o,a){var d=Rt;try{return Rt=o,a()}finally{Rt=d}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(o,a,d,v){var M=a.current,T=On(),B=Tr(M);return d=Ag(d),a.context===null?a.context=d:a.pendingContext=d,a=Ki(T,B),a.payload={element:o},v=v===void 0?null:v,v!==null&&(a.callback=v),Mr(M,a),o=fi(M,B,T),o!==null&&Pl(o,M,B),B},t};Wy.exports=pC;var mC=Wy.exports;const gC=Uv(mC);var Xy={exports:{}},Yy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function e(F,j){var Z=F.length;F.push(j);e:for(;0<Z;){var re=Z-1>>>1,Se=F[re];if(0<i(Se,j))F[re]=j,F[Z]=Se,Z=re;else break e}}function t(F){return F.length===0?null:F[0]}function n(F){if(F.length===0)return null;var j=F[0],Z=F.pop();if(Z!==j){F[0]=Z;e:for(var re=0,Se=F.length,He=Se>>>1;re<He;){var ie=2*(re+1)-1,ve=F[ie],Ae=ie+1,we=F[Ae];if(0>i(ve,Z))Ae<Se&&0>i(we,ve)?(F[re]=we,F[Ae]=Z,re=Ae):(F[re]=ve,F[ie]=Z,re=ie);else if(Ae<Se&&0>i(we,Z))F[re]=we,F[Ae]=Z,re=Ae;else break e}}return j}function i(F,j){var Z=F.sortIndex-j.sortIndex;return Z!==0?Z:F.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();r.unstable_now=function(){return l.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,y=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(F){for(var j=t(h);j!==null;){if(j.callback===null)n(h);else if(j.startTime<=F)n(h),j.sortIndex=j.expirationTime,e(u,j);else break;j=t(h)}}function A(F){if(S=!1,w(F),!y)if(t(u)!==null)y=!0,Q(U);else{var j=t(h);j!==null&&me(A,j.startTime-F)}}function U(F,j){y=!1,S&&(S=!1,_(z),z=-1),g=!0;var Z=m;try{for(w(j),p=t(u);p!==null&&(!(p.expirationTime>j)||F&&!O());){var re=p.callback;if(typeof re=="function"){p.callback=null,m=p.priorityLevel;var Se=re(p.expirationTime<=j);j=r.unstable_now(),typeof Se=="function"?p.callback=Se:p===t(u)&&n(u),w(j)}else n(u);p=t(u)}if(p!==null)var He=!0;else{var ie=t(h);ie!==null&&me(A,ie.startTime-j),He=!1}return He}finally{p=null,m=Z,g=!1}}var C=!1,L=null,z=-1,R=5,b=-1;function O(){return!(r.unstable_now()-b<R)}function q(){if(L!==null){var F=r.unstable_now();b=F;var j=!0;try{j=L(!0,F)}finally{j?Y():(C=!1,L=null)}}else C=!1}var Y;if(typeof E=="function")Y=function(){E(q)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ae=K.port2;K.port1.onmessage=q,Y=function(){ae.postMessage(null)}}else Y=function(){x(q,0)};function Q(F){L=F,C||(C=!0,Y())}function me(F,j){z=x(function(){F(r.unstable_now())},j)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_continueExecution=function(){y||g||(y=!0,Q(U))},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(F){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var Z=m;m=j;try{return F()}finally{m=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=m;m=F;try{return j()}finally{m=Z}},r.unstable_scheduleCallback=function(F,j,Z){var re=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,F){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,F={id:f++,callback:j,priorityLevel:F,startTime:Z,expirationTime:Se,sortIndex:-1},Z>re?(F.sortIndex=Z,e(h,F),t(u)===null&&F===t(h)&&(S?(_(z),z=-1):S=!0,me(A,Z-re))):(F.sortIndex=Se,e(u,F),y||g||(y=!0,Q(U))),F},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(F){var j=m;return function(){var Z=m;m=j;try{return F.apply(this,arguments)}finally{m=Z}}}})(Yy);Xy.exports=Yy;var hv=Xy.exports;const Yp={},vC=r=>void Object.assign(Yp,r);function _C(r,e){function t(f,{args:p=[],attach:m,...g},y){let S=`${f[0].toUpperCase()}${f.slice(1)}`,x;if(f==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const _=g.object;x=Mo(_,{type:f,root:y,attach:m,primitive:!0})}else{const _=Yp[S];if(!_)throw new Error(`R3F: ${S} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");x=Mo(new _(...p),{type:f,root:y,attach:m,memoizedProps:{args:p}})}return x.__r3f.attach===void 0&&(x instanceof yt?x.__r3f.attach="geometry":x instanceof Tn&&(x.__r3f.attach="material")),S!=="inject"&&Ad(x,g),x}function n(f,p){let m=!1;if(p){var g,y;(g=p.__r3f)!=null&&g.attach?Td(f,p,p.__r3f.attach):p.isObject3D&&f.isObject3D&&(f.add(p),m=!0),m||(y=f.__r3f)==null||y.objects.push(p),p.__r3f||Mo(p,{}),p.__r3f.parent=f,$d(p),wo(p)}}function i(f,p,m){let g=!1;if(p){var y,S;if((y=p.__r3f)!=null&&y.attach)Td(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){p.parent=f,p.dispatchEvent({type:"added"}),f.dispatchEvent({type:"childadded",child:p});const x=f.children.filter(E=>E!==p),_=x.indexOf(m);f.children=[...x.slice(0,_),p,...x.slice(_)],g=!0}g||(S=f.__r3f)==null||S.objects.push(p),p.__r3f||Mo(p,{}),p.__r3f.parent=f,$d(p),wo(p)}}function s(f,p,m=!1){f&&[...f].forEach(g=>l(p,g,m))}function l(f,p,m){if(p){var g,y,S;if(p.__r3f&&(p.__r3f.parent=null),(g=f.__r3f)!=null&&g.objects&&(f.__r3f.objects=f.__r3f.objects.filter(A=>A!==p)),(y=p.__r3f)!=null&&y.attach)gv(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){var x;f.remove(p),(x=p.__r3f)!=null&&x.root&&AC(pu(p),p)}const E=(S=p.__r3f)==null?void 0:S.primitive,w=!E&&(m===void 0?p.dispose!==null:m);if(!E){var _;s((_=p.__r3f)==null?void 0:_.objects,p,w),s(p.children,p,w)}if(delete p.__r3f,w&&p.dispose&&p.type!=="Scene"){const A=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?hv.unstable_scheduleCallback(hv.unstable_IdlePriority,A):A()}wo(f)}}function c(f,p,m,g){var y;const S=(y=f.__r3f)==null?void 0:y.parent;if(!S)return;const x=t(p,m,f.__r3f.root);if(f.children){for(const _ of f.children)_.__r3f&&n(x,_);f.children=f.children.filter(_=>!_.__r3f)}f.__r3f.objects.forEach(_=>n(x,_)),f.__r3f.objects=[],f.__r3f.autoRemovedBeforeAppend||l(S,f),x.parent&&(x.__r3f.autoRemovedBeforeAppend=!0),n(S,x),x.raycast&&x.__r3f.eventCount&&pu(x).getState().internal.interaction.push(x),[g,g.alternate].forEach(_=>{_!==null&&(_.stateNode=x,_.ref&&(typeof _.ref=="function"?_.ref(x):_.ref.current=x))})}const u=()=>console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");return{reconciler:gC({createInstance:t,removeChild:l,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(f,p)=>{if(!p)return;const m=f.getState().scene;m.__r3f&&(m.__r3f.root=f,n(m,p))},removeChildFromContainer:(f,p)=>{p&&l(f.getState().scene,p)},insertInContainerBefore:(f,p,m)=>{if(!p||!m)return;const g=f.getState().scene;g.__r3f&&i(g,p,m)},getRootHostContext:()=>null,getChildHostContext:f=>f,finalizeInitialChildren(f){var p;return!!((p=f==null?void 0:f.__r3f)!=null?p:{}).handlers},prepareUpdate(f,p,m,g){var y;if(((y=f==null?void 0:f.__r3f)!=null?y:{}).primitive&&g.object&&g.object!==f)return[!0];{const{args:x=[],children:_,...E}=g,{args:w=[],children:A,...U}=m;if(!Array.isArray(x))throw new Error("R3F: the args prop must be an array!");if(x.some((L,z)=>L!==w[z]))return[!0];const C=$y(f,E,U,!0);return C.changes.length?[!1,C]:null}},commitUpdate(f,[p,m],g,y,S,x){p?c(f,g,S,x):Ad(f,m)},commitMount(f,p,m,g){var y;const S=(y=f.__r3f)!=null?y:{};f.raycast&&S.handlers&&S.eventCount&&pu(f).getState().internal.interaction.push(f)},getPublicInstance:f=>f,prepareForCommit:()=>null,preparePortalMount:f=>Mo(f.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(f){var p;const{attach:m,parent:g}=(p=f.__r3f)!=null?p:{};m&&g&&gv(g,f,m),f.isObject3D&&(f.visible=!1),wo(f)},unhideInstance(f,p){var m;const{attach:g,parent:y}=(m=f.__r3f)!=null?m:{};g&&y&&Td(y,f,g),(f.isObject3D&&p.visible==null||p.visible)&&(f.visible=!0),wo(f)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():Ro.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&kt.fun(performance.now)?performance.now:kt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:kt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:kt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:Ad}}var fv,dv;const Ed=r=>"colorSpace"in r||"outputColorSpace"in r,qy=()=>{var r;return(r=Yp.ColorManagement)!=null?r:null},Zy=r=>r&&r.isOrthographicCamera,yC=r=>r&&r.hasOwnProperty("current"),vl=typeof window<"u"&&((fv=window.document)!=null&&fv.createElement||((dv=window.navigator)==null?void 0:dv.product)==="ReactNative")?De.useLayoutEffect:De.useEffect;function jy(r){const e=De.useRef(r);return vl(()=>void(e.current=r),[r]),e}function xC({set:r}){return vl(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}class Jy extends De.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}Jy.getDerivedStateFromError=()=>({error:!0});const Ky="__default",pv=new Map,SC=r=>r&&!!r.memoized&&!!r.changes;function Qy(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const wa=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function pu(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const kt={obj:r=>r===Object(r)&&!kt.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(kt.str(r)||kt.num(r)||kt.boo(r))return r===e;const s=kt.obj(r);if(s&&n==="reference")return r===e;const l=kt.arr(r);if(l&&t==="reference")return r===e;if((l||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!kt.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if(kt.und(c)){if(l&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function MC(r){const e={nodes:{},materials:{}};return r&&r.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e}function wC(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function Mo(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function Qd(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,l)=>s[l],r),{target:t,key:i}}else return{target:t,key:e}}const mv=/-\d+$/;function Td(r,e,t){if(kt.str(t)){if(mv.test(t)){const s=t.replace(mv,""),{target:l,key:c}=Qd(r,s);Array.isArray(l[c])||(l[c]=[])}const{target:n,key:i}=Qd(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function gv(r,e,t){var n,i;if(kt.str(t)){const{target:s,key:l}=Qd(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[l]:s[l]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function $y(r,{children:e,key:t,ref:n,...i},{children:s,key:l,ref:c,...u}={},h=!1){const f=r.__r3f,p=Object.entries(i),m=[];if(h){const y=Object.keys(u);for(let S=0;S<y.length;S++)i.hasOwnProperty(y[S])||p.unshift([y[S],Ky+"remove"])}p.forEach(([y,S])=>{var x;if((x=r.__r3f)!=null&&x.primitive&&y==="object"||kt.equ(S,u[y]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(y))return m.push([y,S,!0,[]]);let _=[];y.includes("-")&&(_=y.split("-")),m.push([y,S,!1,_]);for(const E in i){const w=i[E];E.startsWith(`${y}-`)&&m.push([E,w,!1,E.split("-")])}});const g={...i};return f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.args&&(g.args=f.memoizedProps.args),f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.attach&&(g.attach=f.memoizedProps.attach),{memoized:g,changes:m}}const EC=typeof process<"u"&&!1;function Ad(r,e){var t;const n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:l,changes:c}=SC(e)?e:$y(r,e),u=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=l);for(let f=0;f<c.length;f++){let[p,m,g,y]=c[f];if(Ed(r)){const E="srgb",w="srgb-linear";p==="encoding"?(p="colorSpace",m=m===3001?E:w):p==="outputEncoding"&&(p="outputColorSpace",m=m===3001?E:w)}let S=r,x=S[p];if(y.length&&(x=y.reduce((_,E)=>_[E],r),!(x&&x.set))){const[_,...E]=y.reverse();S=E.reverse().reduce((w,A)=>w[A],r),p=_}if(m===Ky+"remove")if(S.constructor){let _=pv.get(S.constructor);_||(_=new S.constructor,pv.set(S.constructor,_)),m=_[p]}else m=0;if(g&&n)m?n.handlers[p]=m:delete n.handlers[p],n.eventCount=Object.keys(n.handlers).length;else if(x&&x.set&&(x.copy||x instanceof Es)){if(Array.isArray(m))x.fromArray?x.fromArray(m):x.set(...m);else if(x.copy&&m&&m.constructor&&(EC?x.constructor.name===m.constructor.name:x.constructor===m.constructor))x.copy(m);else if(m!==void 0){const _=x instanceof Be;!_&&x.setScalar?x.setScalar(m):x instanceof Es&&m instanceof Es?x.mask=m.mask:x.set(m),!qy()&&s&&!s.linear&&_&&x.convertSRGBToLinear()}}else if(S[p]=m,S[p]instanceof Yt&&S[p].format===Dn&&S[p].type===bi&&s){const _=S[p];Ed(_)&&Ed(s.gl)?_.colorSpace=s.gl.outputColorSpace:_.encoding=s.gl.outputEncoding}wo(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const f=pu(r).getState().internal,p=f.interaction.indexOf(r);p>-1&&f.interaction.splice(p,1),n.eventCount&&f.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&$d(r),r}function wo(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function $d(r){r.onUpdate==null||r.onUpdate(r)}function ex(r,e){r.manual||(Zy(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function ou(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function TC(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return Ro.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Ro.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Ro.ContinuousEventPriority;default:return Ro.DefaultEventPriority}}function tx(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function AC(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{tx(t.capturedMap,e,n,i)})}function bC(r){function e(u){const{internal:h}=r.getState(),f=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(f*f+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(f=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+f]}))}function n(u,h){const f=r.getState(),p=new Set,m=[],g=h?h(f.internal.interaction):f.internal.interaction;for(let _=0;_<g.length;_++){const E=wa(g[_]);E&&(E.raycaster.camera=void 0)}f.previousRoot||f.events.compute==null||f.events.compute(u,f);function y(_){const E=wa(_);if(!E||!E.events.enabled||E.raycaster.camera===null)return[];if(E.raycaster.camera===void 0){var w;E.events.compute==null||E.events.compute(u,E,(w=E.previousRoot)==null?void 0:w.getState()),E.raycaster.camera===void 0&&(E.raycaster.camera=null)}return E.raycaster.camera?E.raycaster.intersectObject(_,!0):[]}let S=g.flatMap(y).sort((_,E)=>{const w=wa(_.object),A=wa(E.object);return!w||!A?_.distance-E.distance:A.events.priority-w.events.priority||_.distance-E.distance}).filter(_=>{const E=ou(_);return p.has(E)?!1:(p.add(E),!0)});f.events.filter&&(S=f.events.filter(S,f));for(const _ of S){let E=_.object;for(;E;){var x;(x=E.__r3f)!=null&&x.eventCount&&m.push({..._,eventObject:E}),E=E.parent}}if("pointerId"in u&&f.internal.capturedMap.has(u.pointerId))for(let _ of f.internal.capturedMap.get(u.pointerId).values())p.has(ou(_.intersection))||m.push(_.intersection);return m}function i(u,h,f,p){const m=r.getState();if(u.length){const g={stopped:!1};for(const y of u){const S=wa(y.object)||m,{raycaster:x,pointer:_,camera:E,internal:w}=S,A=new D(_.x,_.y,0).unproject(E),U=b=>{var O,q;return(O=(q=w.capturedMap.get(b))==null?void 0:q.has(y.eventObject))!=null?O:!1},C=b=>{const O={intersection:y,target:h.target};w.capturedMap.has(b)?w.capturedMap.get(b).set(y.eventObject,O):w.capturedMap.set(b,new Map([[y.eventObject,O]])),h.target.setPointerCapture(b)},L=b=>{const O=w.capturedMap.get(b);O&&tx(w.capturedMap,y.eventObject,O,b)};let z={};for(let b in h){let O=h[b];typeof O!="function"&&(z[b]=O)}let R={...y,...z,pointer:_,intersections:u,stopped:g.stopped,delta:f,unprojectedPoint:A,ray:x.ray,camera:E,stopPropagation(){const b="pointerId"in h&&w.capturedMap.get(h.pointerId);if((!b||b.has(y.eventObject))&&(R.stopped=g.stopped=!0,w.hovered.size&&Array.from(w.hovered.values()).find(O=>O.eventObject===y.eventObject))){const O=u.slice(0,u.indexOf(y));s([...O,y])}},target:{hasPointerCapture:U,setPointerCapture:C,releasePointerCapture:L},currentTarget:{hasPointerCapture:U,setPointerCapture:C,releasePointerCapture:L},nativeEvent:h};if(p(R),g.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const f of h.hovered.values())if(!u.length||!u.find(p=>p.object===f.object&&p.index===f.index&&p.instanceId===f.instanceId)){const m=f.eventObject.__r3f,g=m==null?void 0:m.handlers;if(h.hovered.delete(ou(f)),m!=null&&m.eventCount){const y={...f,intersections:u};g.onPointerOut==null||g.onPointerOut(y),g.onPointerLeave==null||g.onPointerLeave(y)}}}function l(u,h){for(let f=0;f<h.length;f++){const p=h[f].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:f}=r.getState();"pointerId"in h&&f.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{f.capturedMap.has(h.pointerId)&&(f.capturedMap.delete(h.pointerId),s([]))})}}return function(f){const{onPointerMissed:p,internal:m}=r.getState();m.lastEvent.current=f;const g=u==="onPointerMove",y=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",x=n(f,g?t:void 0),_=y?e(f):0;u==="onPointerDown"&&(m.initialClick=[f.offsetX,f.offsetY],m.initialHits=x.map(w=>w.eventObject)),y&&!x.length&&_<=2&&(l(f,m.interaction),p&&p(f)),g&&s(x);function E(w){const A=w.eventObject,U=A.__r3f,C=U==null?void 0:U.handlers;if(U!=null&&U.eventCount)if(g){if(C.onPointerOver||C.onPointerEnter||C.onPointerOut||C.onPointerLeave){const L=ou(w),z=m.hovered.get(L);z?z.stopped&&w.stopPropagation():(m.hovered.set(L,w),C.onPointerOver==null||C.onPointerOver(w),C.onPointerEnter==null||C.onPointerEnter(w))}C.onPointerMove==null||C.onPointerMove(w)}else{const L=C[u];L?(!y||m.initialHits.includes(A))&&(l(f,m.interaction.filter(z=>!m.initialHits.includes(z))),L(w)):y&&m.initialHits.includes(A)&&l(f,m.interaction.filter(z=>!m.initialHits.includes(z)))}}i(x,f,_,E)}}return{handlePointer:c}}const CC=["set","get","setSize","setFrameloop","setDpr","events","invalidate","advance","size","viewport"],nx=r=>!!(r!=null&&r.render),qp=De.createContext(null),RC=(r,e)=>{const t=Hy((c,u)=>{const h=new D,f=new D,p=new D;function m(_=u().camera,E=f,w=u().size){const{width:A,height:U,top:C,left:L}=w,z=A/U;E instanceof D?p.copy(E):p.set(...E);const R=_.getWorldPosition(h).distanceTo(p);if(Zy(_))return{width:A/_.zoom,height:U/_.zoom,top:C,left:L,factor:1,distance:R,aspect:z};{const b=_.fov*Math.PI/180,O=2*Math.tan(b/2)*R,q=O*(A/U);return{width:q,height:O,top:C,left:L,factor:A/q,distance:R,aspect:z}}}let g;const y=_=>c(E=>({performance:{...E.performance,current:_}})),S=new le;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(_=1)=>r(u(),_),advance:(_,E)=>e(_,E,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new kp,pointer:S,mouse:S,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const _=u();g&&clearTimeout(g),_.performance.current!==_.performance.min&&y(_.performance.min),g=setTimeout(()=>y(u().performance.max),_.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:_=>c(E=>({...E,events:{...E.events,..._}})),setSize:(_,E,w,A,U)=>{const C=u().camera,L={width:_,height:E,top:A||0,left:U||0,updateStyle:w};c(z=>({size:L,viewport:{...z.viewport,...m(C,f,L)}}))},setDpr:_=>c(E=>{const w=Qy(_);return{viewport:{...E.viewport,dpr:w,initialDpr:E.viewport.initialDpr||w}}}),setFrameloop:(_="always")=>{const E=u().clock;E.stop(),E.elapsedTime=0,_!=="never"&&(E.start(),E.elapsedTime=0),c(()=>({frameloop:_}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:De.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(_,E,w)=>{const A=u().internal;return A.priority=A.priority+(E>0?1:0),A.subscribers.push({ref:_,priority:E,store:w}),A.subscribers=A.subscribers.sort((U,C)=>U.priority-C.priority),()=>{const U=u().internal;U!=null&&U.subscribers&&(U.priority=U.priority-(E>0?1:0),U.subscribers=U.subscribers.filter(C=>C.ref!==_))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,l=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:f,set:p}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,ex(c,u),f.setPixelRatio(h.dpr);const g=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&f.domElement instanceof HTMLCanvasElement;f.setSize(u.width,u.height,g)}c!==l&&(l=c,p(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};let au,PC=new Set,IC=new Set,LC=new Set;function bd(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function Ea(r,e){switch(r){case"before":return bd(PC,e);case"after":return bd(IC,e);case"tail":return bd(LC,e)}}let Cd,Rd;function Pd(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),Cd=e.internal.subscribers,au=0;au<Cd.length;au++)Rd=Cd[au],Rd.ref.current(Rd.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function DC(r){let e=!1,t=!1,n,i,s;function l(h){i=requestAnimationFrame(l),e=!0,n=0,Ea("before",h),t=!0;for(const p of r.values()){var f;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((f=s.gl.xr)!=null&&f.isPresenting)&&(n+=Pd(h,s))}if(t=!1,Ea("after",h),n===0)return Ea("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,f=1){var p;if(!h)return r.forEach(m=>c(m.store.getState(),f));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(f>1?h.internal.frames=Math.min(60,h.internal.frames+f):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(l)))}function u(h,f=!0,p,m){if(f&&Ea("before",h),p)Pd(h,p,m);else for(const g of r.values())Pd(h,g.store.getState());f&&Ea("after",h)}return{loop:l,invalidate:c,advance:u}}function Zp(){const r=De.useContext(qp);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function lr(r=t=>t,e){return Zp()(r,e)}function UC(r,e=0){const t=Zp(),n=t.getState().internal.subscribe,i=jy(r);return vl(()=>n(i,e,t),[e,n,t]),null}const vv=new WeakMap;function ix(r,e){return function(t,...n){let i=vv.get(t);return i||(i=new t,vv.set(t,i)),r&&r(i),Promise.all(n.map(s=>new Promise((l,c)=>i.load(s,u=>{u.scene&&Object.assign(u,MC(u.scene)),l(u)},e,u=>c(new Error(`Could not load ${s}: ${u==null?void 0:u.message}`))))))}}function rx(r,e,t,n){const i=Array.isArray(e)?e:[e],s=cC(ix(t,n),[r,...i],{equal:kt.equ});return Array.isArray(e)?s:s[0]}rx.preload=function(r,e,t){const n=Array.isArray(e)?e:[e];return uC(ix(t),[r,...n])};rx.clear=function(r,e){const t=Array.isArray(e)?e:[e];return hC([r,...t])};const Oo=new Map,{invalidate:_v,advance:yv}=DC(Oo),{reconciler:sl,applyProps:xo}=_C(Oo,TC),So={objects:"shallow",strict:!1},NC=(r,e)=>{const t=typeof r=="function"?r(e):r;return nx(t)?t:new q_({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function OC(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:l,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:l,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:l}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:l,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function FC(r){const e=Oo.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||RC(_v,yv),l=t||sl.createContainer(s,Ro.ConcurrentRoot,null,!1,null,"",i,null);e||Oo.set(r,{fiber:l,store:s});let c,u=!1,h;return{configure(f={}){let{gl:p,size:m,scene:g,events:y,onCreated:S,shadows:x=!1,linear:_=!1,flat:E=!1,legacy:w=!1,orthographic:A=!1,frameloop:U="always",dpr:C=[1,2],performance:L,raycaster:z,camera:R,onPointerMissed:b}=f,O=s.getState(),q=O.gl;O.gl||O.set({gl:q=NC(p,r)});let Y=O.raycaster;Y||O.set({raycaster:Y=new Wp});const{params:K,...ae}=z||{};if(kt.equ(ae,Y,So)||xo(Y,{...ae}),kt.equ(K,Y.params,So)||xo(Y,{params:{...Y.params,...K}}),!O.camera||O.camera===h&&!kt.equ(h,R,So)){h=R;const Z=R instanceof cl,re=Z?R:A?new fr(0,0,0,0,.1,1e3):new Kt(75,0,.1,1e3);Z||(re.position.z=5,R&&(xo(re,R),("aspect"in R||"left"in R||"right"in R||"bottom"in R||"top"in R)&&(re.manual=!0,re.updateProjectionMatrix())),!O.camera&&!(R!=null&&R.rotation)&&re.lookAt(0,0,0)),O.set({camera:re}),Y.camera=re}if(!O.scene){let Z;g instanceof Xu?Z=g:(Z=new Xu,g&&xo(Z,g)),O.set({scene:Mo(Z)})}if(!O.xr){var Q;const Z=(He,ie)=>{const ve=s.getState();ve.frameloop!=="never"&&yv(He,!0,ve,ie)},re=()=>{const He=s.getState();He.gl.xr.enabled=He.gl.xr.isPresenting,He.gl.xr.setAnimationLoop(He.gl.xr.isPresenting?Z:null),He.gl.xr.isPresenting||_v(He)},Se={connect(){const He=s.getState().gl;He.xr.addEventListener("sessionstart",re),He.xr.addEventListener("sessionend",re)},disconnect(){const He=s.getState().gl;He.xr.removeEventListener("sessionstart",re),He.xr.removeEventListener("sessionend",re)}};typeof((Q=q.xr)==null?void 0:Q.addEventListener)=="function"&&Se.connect(),O.set({xr:Se})}if(q.shadowMap){const Z=q.shadowMap.enabled,re=q.shadowMap.type;if(q.shadowMap.enabled=!!x,kt.boo(x))q.shadowMap.type=ba;else if(kt.str(x)){var me;const Se={basic:Fv,percentage:Ju,soft:ba,variance:Ti};q.shadowMap.type=(me=Se[x])!=null?me:ba}else kt.obj(x)&&Object.assign(q.shadowMap,x);(Z!==q.shadowMap.enabled||re!==q.shadowMap.type)&&(q.shadowMap.needsUpdate=!0)}const F=qy();F&&("enabled"in F?F.enabled=!w:"legacyMode"in F&&(F.legacyMode=w)),u||xo(q,{outputEncoding:_?3e3:3001,toneMapping:E?Xi:tp}),O.legacy!==w&&O.set(()=>({legacy:w})),O.linear!==_&&O.set(()=>({linear:_})),O.flat!==E&&O.set(()=>({flat:E})),p&&!kt.fun(p)&&!nx(p)&&!kt.equ(p,q,So)&&xo(q,p),y&&!O.events.handlers&&O.set({events:y(s)});const j=OC(r,m);return kt.equ(j,O.size,So)||O.setSize(j.width,j.height,j.updateStyle,j.top,j.left),C&&O.viewport.dpr!==Qy(C)&&O.setDpr(C),O.frameloop!==U&&O.setFrameloop(U),O.onPointerMissed||O.set({onPointerMissed:b}),L&&!kt.equ(L,O.performance,So)&&O.set(Z=>({performance:{...Z.performance,...L}})),c=S,u=!0,this},render(f){return u||this.configure(),sl.updateContainer(Bn.jsx(zC,{store:s,children:f,onCreated:c,rootElement:r}),l,null,()=>{}),s},unmount(){sx(r)}}}function zC({store:r,children:e,onCreated:t,rootElement:n}){return vl(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),Bn.jsx(qp.Provider,{value:r,children:e})}function sx(r,e){const t=Oo.get(r),n=t==null?void 0:t.fiber;if(n){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),sl.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,l,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(l=s.renderLists)==null||l.dispose==null||l.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),wC(i),Oo.delete(r)}catch{}},500)})}}function dR(r,e,t){return Bn.jsx(BC,{children:r,container:e,state:t},e.uuid)}function BC({state:r={},children:e,container:t}){const{events:n,size:i,...s}=r,l=Zp(),[c]=De.useState(()=>new Wp),[u]=De.useState(()=>new le),h=De.useCallback((p,m)=>{const g={...p};Object.keys(p).forEach(S=>{(CC.includes(S)||p[S]!==m[S]&&m[S])&&delete g[S]});let y;if(m&&i){const S=m.camera;y=p.viewport.getCurrentViewport(S,new D,i),S!==p.camera&&ex(S,i)}return{...g,scene:t,raycaster:c,pointer:u,mouse:u,previousRoot:l,events:{...p.events,...m==null?void 0:m.events,...n},size:{...p.size,...i},viewport:{...p.viewport,...y},...s}},[r]),[f]=De.useState(()=>{const p=l.getState();return Hy((g,y)=>({...p,scene:t,raycaster:c,pointer:u,mouse:u,previousRoot:l,events:{...p.events,...n},size:{...p.size,...i},...s,set:g,get:y,setEvents:S=>g(x=>({...x,events:{...x.events,...S}}))}))});return De.useEffect(()=>{const p=l.subscribe(m=>f.setState(g=>h(m,g)));return()=>{p()}},[h]),De.useEffect(()=>{f.setState(p=>h(l.getState(),p))},[h]),De.useEffect(()=>()=>{f.destroy()},[]),Bn.jsx(Bn.Fragment,{children:sl.createPortal(Bn.jsx(qp.Provider,{value:f,children:e}),f,null)})}sl.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:De.version});const Id={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function kC(r){const{handlePointer:e}=bC(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(Id).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(l=>({events:{...l.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([l,c])=>{const[u,h]=Id[l];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,l])=>{if(n&&n.connected instanceof HTMLElement){const[c]=Id[s];n.connected.removeEventListener(c,l)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function ep(r,e,t){var n,i,s,l,c;e==null&&(e=100);function u(){var f=Date.now()-l;f<e&&f>=0?n=setTimeout(u,e-f):(n=null,t||(c=r.apply(s,i),s=i=null))}var h=function(){s=this,i=arguments,l=Date.now();var f=t&&!n;return n||(n=setTimeout(u,e)),f&&(c=r.apply(s,i),s=i=null),c};return h.clear=function(){n&&(clearTimeout(n),n=null)},h.flush=function(){n&&(c=r.apply(s,i),s=i=null,clearTimeout(n),n=null)},h}ep.debounce=ep;var HC=ep;const xv=Uv(HC);var VC=Object.defineProperty,GC=Object.defineProperties,WC=Object.getOwnPropertyDescriptors,Sv=Object.getOwnPropertySymbols,XC=Object.prototype.hasOwnProperty,YC=Object.prototype.propertyIsEnumerable,Mv=(r,e,t)=>e in r?VC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,wv=(r,e)=>{for(var t in e||(e={}))XC.call(e,t)&&Mv(r,t,e[t]);if(Sv)for(var t of Sv(e))YC.call(e,t)&&Mv(r,t,e[t]);return r},qC=(r,e)=>GC(r,WC(e)),Ev,Tv;typeof window<"u"&&((Ev=window.document)!=null&&Ev.createElement||((Tv=window.navigator)==null?void 0:Tv.product)==="ReactNative")?De.useLayoutEffect:De.useEffect;function ox(r,e,t){if(!r)return;if(t(r)===!0)return r;let n=r.child;for(;n;){const i=ox(n,e,t);if(i)return i;n=n.sibling}}function ax(r){try{return Object.defineProperties(r,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return r}}const Av=console.error;console.error=function(){const r=[...arguments].join("");if(r!=null&&r.startsWith("Warning:")&&r.includes("useContext")){console.error=Av;return}return Av.apply(this,arguments)};const jp=ax(De.createContext(null));class lx extends De.Component{render(){return De.createElement(jp.Provider,{value:this._reactInternals},this.props.children)}}function ZC(){const r=De.useContext(jp);if(r===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=De.useId();return De.useMemo(()=>{for(const n of[r,r==null?void 0:r.alternate]){if(!n)continue;const i=ox(n,!1,s=>{let l=s.memoizedState;for(;l;){if(l.memoizedState===e)return!0;l=l.next}});if(i)return i}},[r,e])}function jC(){const r=ZC(),[e]=De.useState(()=>new Map);e.clear();let t=r;for(;t;){if(t.type&&typeof t.type=="object"){const i=t.type._context===void 0&&t.type.Provider===t.type?t.type:t.type._context;i&&i!==jp&&!e.has(i)&&e.set(i,De.useContext(ax(i)))}t=t.return}return e}function JC(){const r=jC();return De.useMemo(()=>Array.from(r.keys()).reduce((e,t)=>n=>De.createElement(e,null,De.createElement(t.Provider,qC(wv({},n),{value:r.get(t)}))),e=>De.createElement(lx,wv({},e))),[r])}function KC({debounce:r,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||typeof window<"u"&&window.ResizeObserver,[s,l]=De.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0});if(!i)return s.width=1280,s.height=800,[()=>{},s,()=>{}];const c=De.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s}),u=r?typeof r=="number"?r:r.scroll:null,h=r?typeof r=="number"?r:r.resize:null,f=De.useRef(!1);De.useEffect(()=>(f.current=!0,()=>void(f.current=!1)));const[p,m,g]=De.useMemo(()=>{const _=()=>{if(!c.current.element)return;const{left:E,top:w,width:A,height:U,bottom:C,right:L,x:z,y:R}=c.current.element.getBoundingClientRect(),b={left:E,top:w,width:A,height:U,bottom:C,right:L,x:z,y:R};c.current.element instanceof HTMLElement&&n&&(b.height=c.current.element.offsetHeight,b.width=c.current.element.offsetWidth),Object.freeze(b),f.current&&!tR(c.current.lastBounds,b)&&l(c.current.lastBounds=b)};return[_,h?xv(_,h):_,u?xv(_,u):_]},[l,n,u,h]);function y(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(_=>_.removeEventListener("scroll",g,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null)}function S(){c.current.element&&(c.current.resizeObserver=new i(g),c.current.resizeObserver.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(_=>_.addEventListener("scroll",g,{capture:!0,passive:!0})))}const x=_=>{!_||_===c.current.element||(y(),c.current.element=_,c.current.scrollContainers=cx(_),S())};return $C(g,!!e),QC(m),De.useEffect(()=>{y(),S()},[e,g,m]),De.useEffect(()=>y,[]),[x,s,p]}function QC(r){De.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function $C(r,e){De.useEffect(()=>{if(e){const t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function cx(r){const e=[];if(!r||r===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...cx(r.parentElement)]}const eR=["x","y","top","bottom","left","right","width","height"],tR=(r,e)=>eR.every(t=>r[t]===e[t]),nR=De.forwardRef(function({children:e,fallback:t,resize:n,style:i,gl:s,events:l=kC,eventSource:c,eventPrefix:u,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:y,dpr:S,performance:x,raycaster:_,camera:E,scene:w,onPointerMissed:A,onCreated:U,...C},L){De.useMemo(()=>vC(sC),[]);const z=JC(),[R,b]=KC({scroll:!0,debounce:{scroll:50,resize:0},...n}),O=De.useRef(null),q=De.useRef(null);De.useImperativeHandle(L,()=>O.current);const Y=jy(A),[K,ae]=De.useState(!1),[Q,me]=De.useState(!1);if(K)throw K;if(Q)throw Q;const F=De.useRef(null);vl(()=>{const Z=O.current;b.width>0&&b.height>0&&Z&&(F.current||(F.current=FC(Z)),F.current.configure({gl:s,events:l,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:y,dpr:S,performance:x,raycaster:_,camera:E,scene:w,size:b,onPointerMissed:(...re)=>Y.current==null?void 0:Y.current(...re),onCreated:re=>{re.events.connect==null||re.events.connect(c?yC(c)?c.current:c:q.current),u&&re.setEvents({compute:(Se,He)=>{const ie=Se[u+"X"],ve=Se[u+"Y"];He.pointer.set(ie/He.size.width*2-1,-(ve/He.size.height)*2+1),He.raycaster.setFromCamera(He.pointer,He.camera)}}),U==null||U(re)}}),F.current.render(Bn.jsx(z,{children:Bn.jsx(Jy,{set:me,children:Bn.jsx(De.Suspense,{fallback:Bn.jsx(xC,{set:ae}),children:e})})})))}),De.useEffect(()=>{const Z=O.current;if(Z)return()=>sx(Z)},[]);const j=c?"none":"auto";return Bn.jsx("div",{ref:q,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:j,...i},...C,children:Bn.jsx("div",{ref:R,style:{width:"100%",height:"100%"},children:Bn.jsx("canvas",{ref:O,style:{display:"block"},children:t})})})}),pR=De.forwardRef(function(e,t){return Bn.jsx(lx,{children:Bn.jsx(nR,{...e,ref:t})})}),iR=parseInt(Fo.replace(/\D+/g,"")),ux=iR>=125?"uv1":"uv2";var rR=Object.defineProperty,sR=(r,e,t)=>e in r?rR(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ht=(r,e,t)=>(sR(r,typeof e!="symbol"?e+"":e,t),t);const lu=new Ps,bv=new cr,oR=Math.cos(70*(Math.PI/180)),Cv=(r,e)=>(r%e+e)%e;let aR=class extends Ri{constructor(e,t){super(),ht(this,"object"),ht(this,"domElement"),ht(this,"enabled",!0),ht(this,"target",new D),ht(this,"minDistance",0),ht(this,"maxDistance",1/0),ht(this,"minZoom",0),ht(this,"maxZoom",1/0),ht(this,"minPolarAngle",0),ht(this,"maxPolarAngle",Math.PI),ht(this,"minAzimuthAngle",-1/0),ht(this,"maxAzimuthAngle",1/0),ht(this,"enableDamping",!1),ht(this,"dampingFactor",.05),ht(this,"enableZoom",!0),ht(this,"zoomSpeed",1),ht(this,"enableRotate",!0),ht(this,"rotateSpeed",1),ht(this,"enablePan",!0),ht(this,"panSpeed",1),ht(this,"screenSpacePanning",!0),ht(this,"keyPanSpeed",7),ht(this,"zoomToCursor",!1),ht(this,"autoRotate",!1),ht(this,"autoRotateSpeed",2),ht(this,"reverseOrbit",!1),ht(this,"reverseHorizontalOrbit",!1),ht(this,"reverseVerticalOrbit",!1),ht(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),ht(this,"mouseButtons",{LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN}),ht(this,"touches",{ONE:fs.ROTATE,TWO:fs.DOLLY_PAN}),ht(this,"target0"),ht(this,"position0"),ht(this,"zoom0"),ht(this,"_domElementKeyEvents",null),ht(this,"getPolarAngle"),ht(this,"getAzimuthalAngle"),ht(this,"setPolarAngle"),ht(this,"setAzimuthalAngle"),ht(this,"getDistance"),ht(this,"listenToKeyEvents"),ht(this,"stopListenToKeyEvents"),ht(this,"saveState"),ht(this,"reset"),ht(this,"update"),ht(this,"connect"),ht(this,"dispose"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>f.phi,this.getAzimuthalAngle=()=>f.theta,this.setPolarAngle=V=>{let ue=Cv(V,2*Math.PI),Ne=f.phi;Ne<0&&(Ne+=2*Math.PI),ue<0&&(ue+=2*Math.PI);let H=Math.abs(ue-Ne);2*Math.PI-H<H&&(ue<Ne?ue+=2*Math.PI:Ne+=2*Math.PI),p.phi=ue-Ne,n.update()},this.setAzimuthalAngle=V=>{let ue=Cv(V,2*Math.PI),Ne=f.theta;Ne<0&&(Ne+=2*Math.PI),ue<0&&(ue+=2*Math.PI);let H=Math.abs(ue-Ne);2*Math.PI-H<H&&(ue<Ne?ue+=2*Math.PI:Ne+=2*Math.PI),p.theta=ue-Ne,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=V=>{V.addEventListener("keydown",Re),this._domElementKeyEvents=V},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Re),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),u=c.NONE},this.update=(()=>{const V=new D,ue=new D(0,1,0),Ne=new Un().setFromUnitVectors(e.up,ue),H=Ne.clone().invert(),_e=new D,ce=new Un,fe=2*Math.PI;return function(){const it=n.object.position;Ne.setFromUnitVectors(e.up,ue),H.copy(Ne).invert(),V.copy(it).sub(n.target),V.applyQuaternion(Ne),f.setFromVector3(V),n.autoRotate&&u===c.NONE&&K(q()),n.enableDamping?(f.theta+=p.theta*n.dampingFactor,f.phi+=p.phi*n.dampingFactor):(f.theta+=p.theta,f.phi+=p.phi);let dt=n.minAzimuthAngle,Tt=n.maxAzimuthAngle;isFinite(dt)&&isFinite(Tt)&&(dt<-Math.PI?dt+=fe:dt>Math.PI&&(dt-=fe),Tt<-Math.PI?Tt+=fe:Tt>Math.PI&&(Tt-=fe),dt<=Tt?f.theta=Math.max(dt,Math.min(Tt,f.theta)):f.theta=f.theta>(dt+Tt)/2?Math.max(dt,f.theta):Math.min(Tt,f.theta)),f.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,f.phi)),f.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(g,n.dampingFactor):n.target.add(g),n.zoomToCursor&&R||n.object.isOrthographicCamera?f.radius=Se(f.radius):f.radius=Se(f.radius*m),V.setFromSpherical(f),V.applyQuaternion(H),it.copy(n.target).add(V),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),n.enableDamping===!0?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,g.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Ht=!1;if(n.zoomToCursor&&R){let St=null;if(n.object instanceof Kt&&n.object.isPerspectiveCamera){const un=V.length();St=Se(un*m);const hn=un-St;n.object.position.addScaledVector(L,hn),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const un=new D(z.x,z.y,0);un.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/m)),n.object.updateProjectionMatrix(),Ht=!0;const hn=new D(z.x,z.y,0);hn.unproject(n.object),n.object.position.sub(hn).add(un),n.object.updateMatrixWorld(),St=V.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;St!==null&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(St).add(n.object.position):(lu.origin.copy(n.object.position),lu.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(lu.direction))<oR?e.lookAt(n.target):(bv.setFromNormalAndCoplanarPoint(n.object.up,n.target),lu.intersectPlane(bv,n.target))))}else n.object instanceof fr&&n.object.isOrthographicCamera&&(Ht=m!==1,Ht&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/m)),n.object.updateProjectionMatrix()));return m=1,R=!1,Ht||_e.distanceToSquared(n.object.position)>h||8*(1-ce.dot(n.object.quaternion))>h?(n.dispatchEvent(i),_e.copy(n.object.position),ce.copy(n.object.quaternion),Ht=!1,!0):!1}})(),this.connect=V=>{n.domElement=V,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",Me),n.domElement.addEventListener("pointerdown",P),n.domElement.addEventListener("pointercancel",pe),n.domElement.addEventListener("wheel",je)},this.dispose=()=>{var V,ue,Ne,H,_e,ce;n.domElement&&(n.domElement.style.touchAction="auto"),(V=n.domElement)==null||V.removeEventListener("contextmenu",Me),(ue=n.domElement)==null||ue.removeEventListener("pointerdown",P),(Ne=n.domElement)==null||Ne.removeEventListener("pointercancel",pe),(H=n.domElement)==null||H.removeEventListener("wheel",je),(_e=n.domElement)==null||_e.ownerDocument.removeEventListener("pointermove",ee),(ce=n.domElement)==null||ce.ownerDocument.removeEventListener("pointerup",pe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Re)};const n=this,i={type:"change"},s={type:"start"},l={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=c.NONE;const h=1e-6,f=new Kd,p=new Kd;let m=1;const g=new D,y=new le,S=new le,x=new le,_=new le,E=new le,w=new le,A=new le,U=new le,C=new le,L=new D,z=new le;let R=!1;const b=[],O={};function q(){return 2*Math.PI/60/60*n.autoRotateSpeed}function Y(){return Math.pow(.95,n.zoomSpeed)}function K(V){n.reverseOrbit||n.reverseHorizontalOrbit?p.theta+=V:p.theta-=V}function ae(V){n.reverseOrbit||n.reverseVerticalOrbit?p.phi+=V:p.phi-=V}const Q=(()=>{const V=new D;return function(Ne,H){V.setFromMatrixColumn(H,0),V.multiplyScalar(-Ne),g.add(V)}})(),me=(()=>{const V=new D;return function(Ne,H){n.screenSpacePanning===!0?V.setFromMatrixColumn(H,1):(V.setFromMatrixColumn(H,0),V.crossVectors(n.object.up,V)),V.multiplyScalar(Ne),g.add(V)}})(),F=(()=>{const V=new D;return function(Ne,H){const _e=n.domElement;if(_e&&n.object instanceof Kt&&n.object.isPerspectiveCamera){const ce=n.object.position;V.copy(ce).sub(n.target);let fe=V.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),Q(2*Ne*fe/_e.clientHeight,n.object.matrix),me(2*H*fe/_e.clientHeight,n.object.matrix)}else _e&&n.object instanceof fr&&n.object.isOrthographicCamera?(Q(Ne*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),me(H*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function j(V){n.object instanceof Kt&&n.object.isPerspectiveCamera||n.object instanceof fr&&n.object.isOrthographicCamera?m/=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(V){n.object instanceof Kt&&n.object.isPerspectiveCamera||n.object instanceof fr&&n.object.isOrthographicCamera?m*=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(V){if(!n.zoomToCursor||!n.domElement)return;R=!0;const ue=n.domElement.getBoundingClientRect(),Ne=V.clientX-ue.left,H=V.clientY-ue.top,_e=ue.width,ce=ue.height;z.x=Ne/_e*2-1,z.y=-(H/ce)*2+1,L.set(z.x,z.y,1).unproject(n.object).sub(n.object.position).normalize()}function Se(V){return Math.max(n.minDistance,Math.min(n.maxDistance,V))}function He(V){y.set(V.clientX,V.clientY)}function ie(V){re(V),A.set(V.clientX,V.clientY)}function ve(V){_.set(V.clientX,V.clientY)}function Ae(V){S.set(V.clientX,V.clientY),x.subVectors(S,y).multiplyScalar(n.rotateSpeed);const ue=n.domElement;ue&&(K(2*Math.PI*x.x/ue.clientHeight),ae(2*Math.PI*x.y/ue.clientHeight)),y.copy(S),n.update()}function we(V){U.set(V.clientX,V.clientY),C.subVectors(U,A),C.y>0?j(Y()):C.y<0&&Z(Y()),A.copy(U),n.update()}function et(V){E.set(V.clientX,V.clientY),w.subVectors(E,_).multiplyScalar(n.panSpeed),F(w.x,w.y),_.copy(E),n.update()}function ot(V){re(V),V.deltaY<0?Z(Y()):V.deltaY>0&&j(Y()),n.update()}function tt(V){let ue=!1;switch(V.code){case n.keys.UP:F(0,n.keyPanSpeed),ue=!0;break;case n.keys.BOTTOM:F(0,-n.keyPanSpeed),ue=!0;break;case n.keys.LEFT:F(n.keyPanSpeed,0),ue=!0;break;case n.keys.RIGHT:F(-n.keyPanSpeed,0),ue=!0;break}ue&&(V.preventDefault(),n.update())}function ct(){if(b.length==1)y.set(b[0].pageX,b[0].pageY);else{const V=.5*(b[0].pageX+b[1].pageX),ue=.5*(b[0].pageY+b[1].pageY);y.set(V,ue)}}function N(){if(b.length==1)_.set(b[0].pageX,b[0].pageY);else{const V=.5*(b[0].pageX+b[1].pageX),ue=.5*(b[0].pageY+b[1].pageY);_.set(V,ue)}}function ye(){const V=b[0].pageX-b[1].pageX,ue=b[0].pageY-b[1].pageY,Ne=Math.sqrt(V*V+ue*ue);A.set(0,Ne)}function xe(){n.enableZoom&&ye(),n.enablePan&&N()}function Le(){n.enableZoom&&ye(),n.enableRotate&&ct()}function de(V){if(b.length==1)S.set(V.pageX,V.pageY);else{const Ne=Ge(V),H=.5*(V.pageX+Ne.x),_e=.5*(V.pageY+Ne.y);S.set(H,_e)}x.subVectors(S,y).multiplyScalar(n.rotateSpeed);const ue=n.domElement;ue&&(K(2*Math.PI*x.x/ue.clientHeight),ae(2*Math.PI*x.y/ue.clientHeight)),y.copy(S)}function Qe(V){if(b.length==1)E.set(V.pageX,V.pageY);else{const ue=Ge(V),Ne=.5*(V.pageX+ue.x),H=.5*(V.pageY+ue.y);E.set(Ne,H)}w.subVectors(E,_).multiplyScalar(n.panSpeed),F(w.x,w.y),_.copy(E)}function Pe(V){const ue=Ge(V),Ne=V.pageX-ue.x,H=V.pageY-ue.y,_e=Math.sqrt(Ne*Ne+H*H);U.set(0,_e),C.set(0,Math.pow(U.y/A.y,n.zoomSpeed)),j(C.y),A.copy(U)}function Ve(V){n.enableZoom&&Pe(V),n.enablePan&&Qe(V)}function k(V){n.enableZoom&&Pe(V),n.enableRotate&&de(V)}function P(V){var ue,Ne;n.enabled!==!1&&(b.length===0&&((ue=n.domElement)==null||ue.ownerDocument.addEventListener("pointermove",ee),(Ne=n.domElement)==null||Ne.ownerDocument.addEventListener("pointerup",pe)),Oe(V),V.pointerType==="touch"?ke(V):he(V))}function ee(V){n.enabled!==!1&&(V.pointerType==="touch"?ft(V):ge(V))}function pe(V){var ue,Ne,H;wt(V),b.length===0&&((ue=n.domElement)==null||ue.releasePointerCapture(V.pointerId),(Ne=n.domElement)==null||Ne.ownerDocument.removeEventListener("pointermove",ee),(H=n.domElement)==null||H.ownerDocument.removeEventListener("pointerup",pe)),n.dispatchEvent(l),u=c.NONE}function he(V){let ue;switch(V.button){case 0:ue=n.mouseButtons.LEFT;break;case 1:ue=n.mouseButtons.MIDDLE;break;case 2:ue=n.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case hs.DOLLY:if(n.enableZoom===!1)return;ie(V),u=c.DOLLY;break;case hs.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enablePan===!1)return;ve(V),u=c.PAN}else{if(n.enableRotate===!1)return;He(V),u=c.ROTATE}break;case hs.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enableRotate===!1)return;He(V),u=c.ROTATE}else{if(n.enablePan===!1)return;ve(V),u=c.PAN}break;default:u=c.NONE}u!==c.NONE&&n.dispatchEvent(s)}function ge(V){if(n.enabled!==!1)switch(u){case c.ROTATE:if(n.enableRotate===!1)return;Ae(V);break;case c.DOLLY:if(n.enableZoom===!1)return;we(V);break;case c.PAN:if(n.enablePan===!1)return;et(V);break}}function je(V){n.enabled===!1||n.enableZoom===!1||u!==c.NONE&&u!==c.ROTATE||(V.preventDefault(),n.dispatchEvent(s),ot(V),n.dispatchEvent(l))}function Re(V){n.enabled===!1||n.enablePan===!1||tt(V)}function ke(V){switch(at(V),b.length){case 1:switch(n.touches.ONE){case fs.ROTATE:if(n.enableRotate===!1)return;ct(),u=c.TOUCH_ROTATE;break;case fs.PAN:if(n.enablePan===!1)return;N(),u=c.TOUCH_PAN;break;default:u=c.NONE}break;case 2:switch(n.touches.TWO){case fs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(),u=c.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(),u=c.TOUCH_DOLLY_ROTATE;break;default:u=c.NONE}break;default:u=c.NONE}u!==c.NONE&&n.dispatchEvent(s)}function ft(V){switch(at(V),u){case c.TOUCH_ROTATE:if(n.enableRotate===!1)return;de(V),n.update();break;case c.TOUCH_PAN:if(n.enablePan===!1)return;Qe(V),n.update();break;case c.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ve(V),n.update();break;case c.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;k(V),n.update();break;default:u=c.NONE}}function Me(V){n.enabled!==!1&&V.preventDefault()}function Oe(V){b.push(V)}function wt(V){delete O[V.pointerId];for(let ue=0;ue<b.length;ue++)if(b[ue].pointerId==V.pointerId){b.splice(ue,1);return}}function at(V){let ue=O[V.pointerId];ue===void 0&&(ue=new le,O[V.pointerId]=ue),ue.set(V.pageX,V.pageY)}function Ge(V){const ue=V.pointerId===b[0].pointerId?b[1]:b[0];return O[ue.pointerId]}t!==void 0&&this.connect(t),this.update()}};const Rv=new _n,cu=new D;class Jp extends zp{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new qe(e,3)),this.setAttribute("uv",new qe(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new ju(t,6,1);return this.setAttribute("instanceStart",new ri(n,3,0)),this.setAttribute("instanceEnd",new ri(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new ju(n,t*2,1);return this.setAttribute("instanceColorStart",new ri(i,t,0)),this.setAttribute("instanceColorEnd",new ri(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Ip(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Rv.setFromBufferAttribute(t),this.boundingBox.union(Rv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,l=e.count;s<l;s++)cu.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(cu)),cu.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(cu));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class hx extends Jp{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){const n=e.length-t,i=new Float32Array(2*n);if(t===3)for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];else for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5],i[2*s+6]=e[s+6],i[2*s+7]=e[s+7];return super.setColors(i,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Kp extends _i{constructor(e){super({type:"LineMaterial",uniforms:Wu.clone(Wu.merge([Ie.common,Ie.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new le(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${parseInt(Fo.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Ld=new Et,Pv=new D,Iv=new D,Mn=new Et,wn=new Et,Bi=new Et,Dd=new D,Ud=new st,En=new zy,Lv=new D,uu=new _n,hu=new yn,ki=new Et;let Vi,As;function Dv(r,e,t){return ki.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),ki.multiplyScalar(1/ki.w),ki.x=As/t.width,ki.y=As/t.height,ki.applyMatrix4(r.projectionMatrixInverse),ki.multiplyScalar(1/ki.w),Math.abs(Math.max(ki.x,ki.y))}function lR(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,l=Math.min(n.instanceCount,i.count);for(let c=0,u=l;c<u;c++){En.start.fromBufferAttribute(i,c),En.end.fromBufferAttribute(s,c),En.applyMatrix4(t);const h=new D,f=new D;Vi.distanceSqToSegment(En.start,En.end,f,h),f.distanceTo(h)<As*.5&&e.push({point:f,pointOnLine:h,distance:Vi.origin.distanceTo(f),object:r,face:null,faceIndex:c,uv:null,[ux]:null})}}function cR(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,l=r.matrixWorld,c=r.geometry,u=c.attributes.instanceStart,h=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),p=-e.near;Vi.at(1,Bi),Bi.w=1,Bi.applyMatrix4(e.matrixWorldInverse),Bi.applyMatrix4(n),Bi.multiplyScalar(1/Bi.w),Bi.x*=s.x/2,Bi.y*=s.y/2,Bi.z=0,Dd.copy(Bi),Ud.multiplyMatrices(e.matrixWorldInverse,l);for(let m=0,g=f;m<g;m++){if(Mn.fromBufferAttribute(u,m),wn.fromBufferAttribute(h,m),Mn.w=1,wn.w=1,Mn.applyMatrix4(Ud),wn.applyMatrix4(Ud),Mn.z>p&&wn.z>p)continue;if(Mn.z>p){const w=Mn.z-wn.z,A=(Mn.z-p)/w;Mn.lerp(wn,A)}else if(wn.z>p){const w=wn.z-Mn.z,A=(wn.z-p)/w;wn.lerp(Mn,A)}Mn.applyMatrix4(n),wn.applyMatrix4(n),Mn.multiplyScalar(1/Mn.w),wn.multiplyScalar(1/wn.w),Mn.x*=s.x/2,Mn.y*=s.y/2,wn.x*=s.x/2,wn.y*=s.y/2,En.start.copy(Mn),En.start.z=0,En.end.copy(wn),En.end.z=0;const S=En.closestPointToPointParameter(Dd,!0);En.at(S,Lv);const x=I_.lerp(Mn.z,wn.z,S),_=x>=-1&&x<=1,E=Dd.distanceTo(Lv)<As*.5;if(_&&E){En.start.fromBufferAttribute(u,m),En.end.fromBufferAttribute(h,m),En.start.applyMatrix4(l),En.end.applyMatrix4(l);const w=new D,A=new D;Vi.distanceSqToSegment(En.start,En.end,A,w),t.push({point:A,pointOnLine:w,distance:Vi.origin.distanceTo(A),object:r,face:null,faceIndex:m,uv:null,[ux]:null})}}}class fx extends en{constructor(e=new Jp,t=new Kp({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let l=0,c=0,u=t.count;l<u;l++,c+=2)Pv.fromBufferAttribute(t,l),Iv.fromBufferAttribute(n,l),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+Pv.distanceTo(Iv);const s=new ju(i,2,1);return e.setAttribute("instanceDistanceStart",new ri(s,1,0)),e.setAttribute("instanceDistanceEnd",new ri(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Vi=e.ray;const l=this.matrixWorld,c=this.geometry,u=this.material;As=u.linewidth+s,c.boundingSphere===null&&c.computeBoundingSphere(),hu.copy(c.boundingSphere).applyMatrix4(l);let h;if(n)h=As*.5;else{const p=Math.max(i.near,hu.distanceToPoint(Vi.origin));h=Dv(i,p,u.resolution)}if(hu.radius+=h,Vi.intersectsSphere(hu)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),uu.copy(c.boundingBox).applyMatrix4(l);let f;if(n)f=As*.5;else{const p=Math.max(i.near,uu.distanceToPoint(Vi.origin));f=Dv(i,p,u.resolution)}uu.expandByScalar(f),Vi.intersectsBox(uu)!==!1&&(n?lR(this,t):cR(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Ld),this.material.uniforms.resolution.value.set(Ld.z,Ld.w))}}class uR extends fx{constructor(e=new hx,t=new Kp({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const gR=De.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:i,lineWidth:s,segments:l,dashed:c,...u},h){var f,p;const m=lr(_=>_.size),g=De.useMemo(()=>l?new fx:new uR,[l]),[y]=De.useState(()=>new Kp),S=(n==null||(f=n[0])==null?void 0:f.length)===4?4:3,x=De.useMemo(()=>{const _=l?new Jp:new hx,E=e.map(w=>{const A=Array.isArray(w);return w instanceof D||w instanceof Et?[w.x,w.y,w.z]:w instanceof le?[w.x,w.y,0]:A&&w.length===3?[w[0],w[1],w[2]]:A&&w.length===2?[w[0],w[1],0]:w});if(_.setPositions(E.flat()),n){t=16777215;const w=n.map(A=>A instanceof Be?A.toArray():A);_.setColors(w.flat(),S)}return _},[e,l,n,S]);return De.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),De.useLayoutEffect(()=>{c?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[c,y]),De.useEffect(()=>()=>{x.dispose(),y.dispose()},[x]),De.createElement("primitive",Fa({object:g,ref:h},u),De.createElement("primitive",{object:x,attach:"geometry"}),De.createElement("primitive",Fa({object:y,attach:"material",color:t,vertexColors:!!n,resolution:[m.width,m.height],linewidth:(p=i??s)!==null&&p!==void 0?p:1,dashed:c,transparent:S===4},u)))}),vR=De.forwardRef(({makeDefault:r,camera:e,regress:t,domElement:n,enableDamping:i=!0,keyEvents:s=!1,onChange:l,onStart:c,onEnd:u,...h},f)=>{const p=lr(C=>C.invalidate),m=lr(C=>C.camera),g=lr(C=>C.gl),y=lr(C=>C.events),S=lr(C=>C.setEvents),x=lr(C=>C.set),_=lr(C=>C.get),E=lr(C=>C.performance),w=e||m,A=n||y.connected||g.domElement,U=De.useMemo(()=>new aR(w),[w]);return UC(()=>{U.enabled&&U.update()},-1),De.useEffect(()=>(s&&U.connect(s===!0?A:s),U.connect(A),()=>void U.dispose()),[s,A,t,U,p]),De.useEffect(()=>{const C=R=>{p(),t&&E.regress(),l&&l(R)},L=R=>{c&&c(R)},z=R=>{u&&u(R)};return U.addEventListener("change",C),U.addEventListener("start",L),U.addEventListener("end",z),()=>{U.removeEventListener("start",L),U.removeEventListener("end",z),U.removeEventListener("change",C)}},[l,c,u,U,p,S]),De.useEffect(()=>{if(r){const C=_().controls;return x({controls:U}),()=>x({controls:C})}},[r,U]),De.createElement("primitive",Fa({ref:f,object:U,enableDamping:i},h))});export{ny as A,bA as C,yp as D,Zn as F,Bo as H,on as L,st as M,bt as O,Un as Q,Xu as S,hb as T,D as V,Ci as W,Fa as _,UC as a,pR as b,dR as c,Be as d,vR as e,le as f,rx as g,iy as h,gR as i,Kd as j,lr as u};
