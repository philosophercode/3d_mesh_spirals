(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ca="160",Li={ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kh=0,yl=1,Vh=2,ku=1,zh=2,Pn=3,_n=0,Gt=1,Zt=2,ei=0,tr=1,Ml=2,El=3,Sl=4,Hh=5,fi=100,Gh=101,Wh=102,Tl=103,Cl=104,jh=200,Xh=201,$h=202,qh=203,sa=204,oa=205,Yh=206,Kh=207,Zh=208,Jh=209,Qh=210,ep=211,tp=212,np=213,ip=214,rp=0,sp=1,op=2,ks=3,ap=4,lp=5,cp=6,up=7,Vu=0,dp=1,hp=2,ti=0,pp=1,fp=2,mp=3,gp=4,vp=5,_p=6,zu=300,or=301,ar=302,aa=303,la=304,Qs=306,ca=1e3,dn=1001,ua=1002,Bt=1003,Al=1004,vo=1005,sn=1006,xp=1007,Br=1008,ni=1009,bp=1010,wp=1011,Aa=1012,Hu=1013,Yn=1014,Kn=1015,kr=1016,Gu=1017,Wu=1018,gi=1020,yp=1021,hn=1023,Mp=1024,Ep=1025,vi=1026,lr=1027,Sp=1028,ju=1029,Tp=1030,Xu=1031,$u=1033,_o=33776,xo=33777,bo=33778,wo=33779,Pl=35840,Rl=35841,Ll=35842,Dl=35843,qu=36196,Ul=37492,Il=37496,Nl=37808,Ol=37809,Fl=37810,Bl=37811,kl=37812,Vl=37813,zl=37814,Hl=37815,Gl=37816,Wl=37817,jl=37818,Xl=37819,$l=37820,ql=37821,yo=36492,Yl=36494,Kl=36495,Cp=36283,Zl=36284,Jl=36285,Ql=36286,rE=2300,sE=2301,Yu=3e3,_i=3001,Ap=3200,Pp=3201,Ku=0,Rp=1,Jt="",Mt="srgb",Nn="srgb-linear",Pa="display-p3",eo="display-p3-linear",Vs="linear",nt="srgb",zs="rec709",Hs="p3",Ui=7680,ec=519,Lp=512,Dp=513,Up=514,Zu=515,Ip=516,Np=517,Op=518,Fp=519,tc=35044,nc="300 es",da=1035,Rn=2e3,Gs=2001;class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ic=1234567;const Ur=Math.PI/180,Vr=180/Math.PI;function pr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function Ra(n,e){return(n%e+e)%e}function Bp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function kp(n,e,t){return n!==e?(t-n)/(e-n):0}function Ir(n,e,t){return(1-t)*n+t*e}function Vp(n,e,t,i){return Ir(n,e,1-Math.exp(-t*i))}function zp(n,e=1){return e-Math.abs(Ra(n,e*2)-e)}function Hp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Gp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Wp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jp(n,e){return n+Math.random()*(e-n)}function Xp(n){return n*(.5-Math.random())}function $p(n){n!==void 0&&(ic=n);let e=ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qp(n){return n*Ur}function Yp(n){return n*Vr}function ha(n){return(n&n-1)===0&&n!==0}function Kp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ws(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zp(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),p=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*p,o*c);break;case"YZY":n.set(l*p,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*p,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Jp={DEG2RAD:Ur,RAD2DEG:Vr,generateUUID:pr,clamp:It,euclideanModulo:Ra,mapLinear:Bp,inverseLerp:kp,lerp:Ir,damp:Vp,pingpong:zp,smoothstep:Hp,smootherstep:Gp,randInt:Wp,randFloat:jp,randFloatSpread:Xp,seededRandom:$p,degToRad:qp,radToDeg:Yp,isPowerOfTwo:ha,ceilPowerOfTwo:Kp,floorPowerOfTwo:Ws,setQuaternionFromProperEuler:Zp,normalize:Ot,denormalize:Ji};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],f=i[5],g=i[8],v=r[0],m=r[3],h=r[6],w=r[1],_=r[4],A=r[7],C=r[2],P=r[5],S=r[8];return s[0]=a*v+o*w+l*C,s[3]=a*m+o*_+l*P,s[6]=a*h+o*A+l*S,s[1]=c*v+u*w+d*C,s[4]=c*m+u*_+d*P,s[7]=c*h+u*A+d*S,s[2]=p*v+f*w+g*C,s[5]=p*m+f*_+g*P,s[8]=p*h+f*A+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,p=o*l-u*s,f=c*s-a*l,g=t*d+i*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=p*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new He;function Ju(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qp(){const n=zr("canvas");return n.style.display="block",n}const rc={};function Nr(n){n in rc||(rc[n]=!0,console.warn(n))}const sc=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oc=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cs={[Nn]:{transfer:Vs,primaries:zs,toReference:n=>n,fromReference:n=>n},[Mt]:{transfer:nt,primaries:zs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[eo]:{transfer:Vs,primaries:Hs,toReference:n=>n.applyMatrix3(oc),fromReference:n=>n.applyMatrix3(sc)},[Pa]:{transfer:nt,primaries:Hs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(oc),fromReference:n=>n.applyMatrix3(sc).convertLinearToSRGB()}},ef=new Set([Nn,eo]),Qe={enabled:!0,_workingColorSpace:Nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ef.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=cs[e].toReference,r=cs[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return cs[n].primaries},getTransfer:function(n){return n===Jt?Vs:cs[n].transfer}};function nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ii;class Qu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=zr("canvas")),Ii.width=e.width,Ii.height=e.height;const i=Ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=nr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nr(t[i]/255)*255):t[i]=nr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tf=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=pr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(So(r[a].image)):s.push(So(r[a]))}else s=So(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function So(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nf=0;class Nt extends Ci{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=dn,r=dn,s=sn,a=Br,o=hn,l=ni,c=Nt.DEFAULT_ANISOTROPY,u=Jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=pr(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===_i?Mt:Jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ca:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ca:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?_i:Yu}set encoding(e){Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_i?Mt:Jt}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=zu;Nt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],f=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,A=(f+1)/2,C=(h+1)/2,P=(u+p)/4,S=(d+v)/4,L=(g+m)/4;return _>A&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=P/i,s=S/i):A>C?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=P/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=S/s,r=L/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(p-u)*(p-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-v)/w,this.z=(p-u)/w,this.w=Math.acos((c+f+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rf extends Ci{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Nr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_i?Mt:Jt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Nt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends rf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class td extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sf extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const p=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==p||c!==f||u!==g){let m=1-o;const h=l*p+c*f+u*g+d*v,w=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const C=Math.sqrt(_),P=Math.atan2(C,h*w);m=Math.sin(m*P)/C,o=Math.sin(o*P)/C}const A=o*w;if(l=l*m+p*A,c=c*m+f*A,u=u*m+g*A,d=d*m+v*A,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],p=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*f-c*p,e[t+1]=l*g+u*p+c*d-o*f,e[t+2]=c*g+u*f+o*p-l*d,e[t+3]=u*g-o*d-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),p=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=p*u*d+c*f*g,this._y=c*f*d-p*u*g,this._z=c*u*g+p*f*d,this._w=c*u*d-p*f*g;break;case"YXZ":this._x=p*u*d+c*f*g,this._y=c*f*d-p*u*g,this._z=c*u*g-p*f*d,this._w=c*u*d+p*f*g;break;case"ZXY":this._x=p*u*d-c*f*g,this._y=c*f*d+p*u*g,this._z=c*u*g+p*f*d,this._w=c*u*d-p*f*g;break;case"ZYX":this._x=p*u*d-c*f*g,this._y=c*f*d+p*u*g,this._z=c*u*g-p*f*d,this._w=c*u*d+p*f*g;break;case"YZX":this._x=p*u*d+c*f*g,this._y=c*f*d+p*u*g,this._z=c*u*g-p*f*d,this._w=c*u*d-p*f*g;break;case"XZY":this._x=p*u*d-c*f*g,this._y=c*f*d-p*u*g,this._z=c*u*g+p*f*d,this._w=c*u*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=i+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new U,ac=new yi;class Yr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(s,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),us.copy(i.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),ds.subVectors(this.max,wr),Ni.subVectors(e.a,wr),Oi.subVectors(e.b,wr),Fi.subVectors(e.c,wr),kn.subVectors(Oi,Ni),Vn.subVectors(Fi,Oi),li.subVectors(Ni,Fi);let t=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-li.z,li.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,li.z,0,-li.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-li.y,li.x,0];return!Co(t,Ni,Oi,Fi,ds)||(t=[1,0,0,0,1,0,0,0,1],!Co(t,Ni,Oi,Fi,ds))?!1:(hs.crossVectors(kn,Vn),t=[hs.x,hs.y,hs.z],Co(t,Ni,Oi,Fi,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new U,new U,new U,new U,new U,new U,new U,new U],an=new U,us=new Yr,Ni=new U,Oi=new U,Fi=new U,kn=new U,Vn=new U,li=new U,wr=new U,ds=new U,hs=new U,ci=new U;function Co(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ci.fromArray(n,s);const o=r.x*Math.abs(ci.x)+r.y*Math.abs(ci.y)+r.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),u=i.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const of=new Yr,yr=new U,Ao=new U;class to{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):of.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);const t=yr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(Ao)),this.expandByPoint(yr.copy(e.center).sub(Ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new U,Po=new U,ps=new U,zn=new U,Ro=new U,fs=new U,Lo=new U;class La{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Po.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(Po);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ps),o=zn.dot(this.direction),l=-zn.dot(ps),c=zn.lengthSq(),u=Math.abs(1-a*a);let d,p,f,g;if(u>0)if(d=a*l-o,p=a*o-l,g=s*u,d>=0)if(p>=-g)if(p<=g){const v=1/u;d*=v,p*=v,f=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Po).addScaledVector(ps,p),f}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),r=Mn.dot(Mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,r,s){Ro.subVectors(t,e),fs.subVectors(i,e),Lo.crossVectors(Ro,fs);let a=this.direction.dot(Lo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const l=o*this.direction.dot(fs.crossVectors(zn,fs));if(l<0)return null;const c=o*this.direction.dot(Ro.cross(zn));if(c<0||l+c>a)return null;const u=-o*zn.dot(Lo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,a,o,l,c,u,d,p,f,g,v,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,p,f,g,v,m)}set(e,t,i,r,s,a,o,l,c,u,d,p,f,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=f,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=a*u,f=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=p-v*c,t[9]=-o*l,t[2]=v-p*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*u,f=l*d,g=c*u,v=c*d;t[0]=p+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=v+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*u,f=l*d,g=c*u,v=c*d;t[0]=p-v*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=v-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*u,f=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=p*c+v,t[1]=l*d,t[5]=v*c+p,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-p*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=p-v*d}else if(e.order==="XZY"){const p=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+v,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(af,e,lf)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Hn.crossVectors(i,$t),Hn.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Hn.crossVectors(i,$t)),Hn.normalize(),ms.crossVectors($t,Hn),r[0]=Hn.x,r[4]=ms.x,r[8]=$t.x,r[1]=Hn.y,r[5]=ms.y,r[9]=$t.y,r[2]=Hn.z,r[6]=ms.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],f=i[13],g=i[2],v=i[6],m=i[10],h=i[14],w=i[3],_=i[7],A=i[11],C=i[15],P=r[0],S=r[4],L=r[8],x=r[12],M=r[1],O=r[5],G=r[9],q=r[13],T=r[2],I=r[6],V=r[10],$=r[14],X=r[3],j=r[7],Z=r[11],K=r[15];return s[0]=a*P+o*M+l*T+c*X,s[4]=a*S+o*O+l*I+c*j,s[8]=a*L+o*G+l*V+c*Z,s[12]=a*x+o*q+l*$+c*K,s[1]=u*P+d*M+p*T+f*X,s[5]=u*S+d*O+p*I+f*j,s[9]=u*L+d*G+p*V+f*Z,s[13]=u*x+d*q+p*$+f*K,s[2]=g*P+v*M+m*T+h*X,s[6]=g*S+v*O+m*I+h*j,s[10]=g*L+v*G+m*V+h*Z,s[14]=g*x+v*q+m*$+h*K,s[3]=w*P+_*M+A*T+C*X,s[7]=w*S+_*O+A*I+C*j,s[11]=w*L+_*G+A*V+C*Z,s[15]=w*x+_*q+A*$+C*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],f=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*o*p+i*c*p+r*o*f-i*l*f)+v*(+t*l*f-t*c*p+s*a*p-r*a*f+r*c*u-s*l*u)+m*(+t*c*d-t*o*f-s*a*d+i*a*f+s*o*u-i*c*u)+h*(-r*o*u-t*l*d+t*o*p+r*a*d-i*a*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],f=e[11],g=e[12],v=e[13],m=e[14],h=e[15],w=d*m*c-v*p*c+v*l*f-o*m*f-d*l*h+o*p*h,_=g*p*c-u*m*c-g*l*f+a*m*f+u*l*h-a*p*h,A=u*v*c-g*d*c+g*o*f-a*v*f-u*o*h+a*d*h,C=g*d*l-u*v*l-g*o*p+a*v*p+u*o*m-a*d*m,P=t*w+i*_+r*A+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/P;return e[0]=w*S,e[1]=(v*p*s-d*m*s-v*r*f+i*m*f+d*r*h-i*p*h)*S,e[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*h+i*l*h)*S,e[3]=(d*l*s-o*p*s-d*r*c+i*p*c+o*r*f-i*l*f)*S,e[4]=_*S,e[5]=(u*m*s-g*p*s+g*r*f-t*m*f-u*r*h+t*p*h)*S,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*h-t*l*h)*S,e[7]=(a*p*s-u*l*s+u*r*c-t*p*c-a*r*f+t*l*f)*S,e[8]=A*S,e[9]=(g*d*s-u*v*s-g*i*f+t*v*f+u*i*h-t*d*h)*S,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*h+t*o*h)*S,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*f-t*o*f)*S,e[12]=C*S,e[13]=(u*v*r-g*d*r+g*i*p-t*v*p-u*i*m+t*d*m)*S,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*m-t*o*m)*S,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*p+t*o*p)*S,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,p=s*c,f=s*u,g=s*d,v=a*u,m=a*d,h=o*d,w=l*c,_=l*u,A=l*d,C=i.x,P=i.y,S=i.z;return r[0]=(1-(v+h))*C,r[1]=(f+A)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(f-A)*P,r[5]=(1-(p+h))*P,r[6]=(m+w)*P,r[7]=0,r[8]=(g+_)*S,r[9]=(m-w)*S,r[10]=(1-(p+v))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Bi.set(r[0],r[1],r[2]).length();const a=Bi.set(r[4],r[5],r[6]).length(),o=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ln.copy(this);const c=1/s,u=1/a,d=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,t.setFromRotationMatrix(ln),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Rn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let f,g;if(o===Rn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Gs)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Rn){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(a-s),p=(t+e)*c,f=(i+r)*u;let g,v;if(o===Rn)g=(a+s)*d,v=-2*d;else if(o===Gs)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bi=new U,ln=new mt,af=new U(0,0,0),lf=new U(1,1,1),Hn=new U,ms=new U,$t=new U,lc=new mt,cc=new yi;class no{constructor(e=0,t=0,i=0,r=no.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cc.setFromEuler(this),this.setFromQuaternion(cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}no.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cf=0;const uc=new U,ki=new yi,En=new mt,gs=new U,Mr=new U,uf=new U,df=new yi,dc=new U(1,0,0),hc=new U(0,1,0),pc=new U(0,0,1),hf={type:"added"},pf={type:"removed"};class Pt extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new U,t=new no,i=new yi,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new He}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(dc,e)}rotateY(e){return this.rotateOnAxis(hc,e)}rotateZ(e){return this.rotateOnAxis(pc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dc,e)}translateY(e){return this.translateOnAxis(hc,e)}translateZ(e){return this.translateOnAxis(pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gs.copy(e):gs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Mr,gs,this.up):En.lookAt(gs,Mr,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(En),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new U(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new U,Sn=new U,Do=new U,Tn=new U,Vi=new U,zi=new U,fc=new U,Uo=new U,Io=new U,No=new U;let vs=!1;class un{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),cn.subVectors(e,t),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){cn.subVectors(r,t),Sn.subVectors(i,t),Do.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(Sn),l=cn.dot(Do),c=Sn.dot(Sn),u=Sn.dot(Do),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(c*l-o*u)*p,g=(a*u-o*l)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(e,t,i,r,s,a,o,l){return vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vs=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static isFrontFacing(e,t,i,r){return cn.subVectors(i,t),Sn.subVectors(e,t),cn.cross(Sn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),cn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vs=!0),un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Vi.subVectors(r,i),zi.subVectors(s,i),Uo.subVectors(e,i);const l=Vi.dot(Uo),c=zi.dot(Uo);if(l<=0&&c<=0)return t.copy(i);Io.subVectors(e,r);const u=Vi.dot(Io),d=zi.dot(Io);if(u>=0&&d<=u)return t.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Vi,a);No.subVectors(e,s);const f=Vi.dot(No),g=zi.dot(No);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(zi,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return fc.subVectors(s,r),o=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(fc,o);const h=1/(m+v+p);return a=v*h,o=p*h,t.copy(i).addScaledVector(Vi,a).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Oo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Se{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=Ra(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Oo(a,s,e+1/3),this.g=Oo(a,s,e),this.b=Oo(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=id[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Qe.fromWorkingColorSpace(Dt.copy(this),e),Math.round(It(Dt.r*255,0,255))*65536+Math.round(It(Dt.g*255,0,255))*256+Math.round(It(Dt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Mt){Qe.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(_s);const i=Ir(Gn.h,_s.h,t),r=Ir(Gn.s,_s.s,t),s=Ir(Gn.l,_s.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Se;Se.NAMES=id;let ff=0;class Ai extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=tr,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=oa,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==_n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sa&&(i.blendSrc=this.blendSrc),this.blendDst!==oa&&(i.blendDst=this.blendDst),this.blendEquation!==fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xi extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new U,xs=new Ue;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}}class rd extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sd extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let mf=0;const nn=new mt,Fo=new Pt,Hi=new U,qt=new Yr,Er=new Yr,yt=new U;class ot extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ju(e)?sd:rd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(qt.min,Er.min),qt.expandByPoint(yt),yt.addVectors(qt.max,Er.max),qt.expandByPoint(yt)):(qt.expandByPoint(Er.min),qt.expandByPoint(Er.max))}qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(e,c),yt.add(Hi)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let M=0;M<o;M++)c[M]=new U,u[M]=new U;const d=new U,p=new U,f=new U,g=new Ue,v=new Ue,m=new Ue,h=new U,w=new U;function _(M,O,G){d.fromArray(r,M*3),p.fromArray(r,O*3),f.fromArray(r,G*3),g.fromArray(a,M*2),v.fromArray(a,O*2),m.fromArray(a,G*2),p.sub(d),f.sub(d),v.sub(g),m.sub(g);const q=1/(v.x*m.y-m.x*v.y);isFinite(q)&&(h.copy(p).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(q),w.copy(f).multiplyScalar(v.x).addScaledVector(p,-m.x).multiplyScalar(q),c[M].add(h),c[O].add(h),c[G].add(h),u[M].add(w),u[O].add(w),u[G].add(w))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let M=0,O=A.length;M<O;++M){const G=A[M],q=G.start,T=G.count;for(let I=q,V=q+T;I<V;I+=3)_(i[I+0],i[I+1],i[I+2])}const C=new U,P=new U,S=new U,L=new U;function x(M){S.fromArray(s,M*3),L.copy(S);const O=c[M];C.copy(O),C.sub(S.multiplyScalar(S.dot(O))).normalize(),P.crossVectors(L,O);const q=P.dot(u[M])<0?-1:1;l[M*4]=C.x,l[M*4+1]=C.y,l[M*4+2]=C.z,l[M*4+3]=q}for(let M=0,O=A.length;M<O;++M){const G=A[M],q=G.start,T=G.count;for(let I=q,V=q+T;I<V;I+=3)x(i[I+0]),x(i[I+1]),x(i[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let h=0;h<u;h++)p[g++]=c[f++]}return new vn(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ot,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],f=e(p,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new mt,ui=new La,bs=new to,gc=new U,Gi=new U,Wi=new U,ji=new U,Bo=new U,ws=new U,ys=new Ue,Ms=new Ue,Es=new Ue,vc=new U,_c=new U,xc=new U,Ss=new U,Ts=new U;class Et extends Pt{constructor(e=new ot,t=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ws.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Bo.fromBufferAttribute(d,e),a?ws.addScaledVector(Bo,u):ws.addScaledVector(Bo.sub(t),u))}t.add(ws)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(s),ui.copy(e.ray).recast(e.near),!(bs.containsPoint(ui.origin)===!1&&(ui.intersectSphere(bs,gc)===null||ui.origin.distanceToSquared(gc)>(e.far-e.near)**2))&&(mc.copy(s).invert(),ui.copy(e.ray).applyMatrix4(mc),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],h=a[m.materialIndex],w=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let A=w,C=_;A<C;A+=3){const P=o.getX(A),S=o.getX(A+1),L=o.getX(A+2);r=Cs(this,h,e,i,c,u,d,P,S,L),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,h=v;m<h;m+=3){const w=o.getX(m),_=o.getX(m+1),A=o.getX(m+2);r=Cs(this,a,e,i,c,u,d,w,_,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const m=p[g],h=a[m.materialIndex],w=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let A=w,C=_;A<C;A+=3){const P=A,S=A+1,L=A+2;r=Cs(this,h,e,i,c,u,d,P,S,L),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,h=v;m<h;m+=3){const w=m,_=m+1,A=m+2;r=Cs(this,a,e,i,c,u,d,w,_,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function gf(n,e,t,i,r,s,a,o){let l;if(e.side===Gt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===_n,o),l===null)return null;Ts.copy(o),Ts.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ts);return c<t.near||c>t.far?null:{distance:c,point:Ts.clone(),object:n}}function Cs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Gi),n.getVertexPosition(l,Wi),n.getVertexPosition(c,ji);const u=gf(n,e,t,i,Gi,Wi,ji,Ss);if(u){r&&(ys.fromBufferAttribute(r,o),Ms.fromBufferAttribute(r,l),Es.fromBufferAttribute(r,c),u.uv=un.getInterpolation(Ss,Gi,Wi,ji,ys,Ms,Es,new Ue)),s&&(ys.fromBufferAttribute(s,o),Ms.fromBufferAttribute(s,l),Es.fromBufferAttribute(s,c),u.uv1=un.getInterpolation(Ss,Gi,Wi,ji,ys,Ms,Es,new Ue),u.uv2=u.uv1),a&&(vc.fromBufferAttribute(a,o),_c.fromBufferAttribute(a,l),xc.fromBufferAttribute(a,c),u.normal=un.getInterpolation(Ss,Gi,Wi,ji,vc,_c,xc,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};un.getNormal(Gi,Wi,ji,d.normal),u.face=d}return u}class Kr extends ot{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(d,2));function g(v,m,h,w,_,A,C,P,S,L,x){const M=A/S,O=C/L,G=A/2,q=C/2,T=P/2,I=S+1,V=L+1;let $=0,X=0;const j=new U;for(let Z=0;Z<V;Z++){const K=Z*O-q;for(let ae=0;ae<I;ae++){const H=ae*M-G;j[v]=H*w,j[m]=K*_,j[h]=T,c.push(j.x,j.y,j.z),j[v]=0,j[m]=0,j[h]=P>0?1:-1,u.push(j.x,j.y,j.z),d.push(ae/S),d.push(1-Z/L),$+=1}}for(let Z=0;Z<L;Z++)for(let K=0;K<S;K++){const ae=p+K+I*Z,H=p+K+I*(Z+1),Y=p+(K+1)+I*(Z+1),se=p+(K+1)+I*Z;l.push(ae,H,se),l.push(H,Y,se),X+=6}o.addGroup(f,X,x),f+=X,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=cr(n[t]);for(const r in i)e[r]=i[r]}return e}function vf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function od(n){return n.getRenderTarget()===null?n.outputColorSpace:Qe.workingColorSpace}const _f={clone:cr,merge:Ft};var xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ad extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vt extends ad{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,$i=1;class wf extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vt(Xi,$i,e,t);r.layers=this.layers,this.add(r);const s=new vt(Xi,$i,e,t);s.layers=this.layers,this.add(s);const a=new vt(Xi,$i,e,t);a.layers=this.layers,this.add(a);const o=new vt(Xi,$i,e,t);o.layers=this.layers,this.add(o);const l=new vt(Xi,$i,e,t);l.layers=this.layers,this.add(l);const c=new vt(Xi,$i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ld extends Nt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yf extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Nr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_i?Mt:Jt),this.texture=new ld(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kr(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:ei});s.uniforms.tEquirect.value=t;const a=new Et(r,s),o=t.minFilter;return t.minFilter===Br&&(t.minFilter=sn),new wf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ko=new U,Mf=new U,Ef=new He;class qn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ko.subVectors(i,t).cross(Mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ko),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ef.getNormalMatrix(e),r=this.coplanarPoint(ko).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new to,As=new U;class Da{constructor(e=new qn,t=new qn,i=new qn,r=new qn,s=new qn,a=new qn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],p=r[7],f=r[8],g=r[9],v=r[10],m=r[11],h=r[12],w=r[13],_=r[14],A=r[15];if(i[0].setComponents(l-s,p-c,m-f,A-h).normalize(),i[1].setComponents(l+s,p+c,m+f,A+h).normalize(),i[2].setComponents(l+a,p+u,m+g,A+w).normalize(),i[3].setComponents(l-a,p-u,m-g,A-w).normalize(),i[4].setComponents(l-o,p-d,m-v,A-_).normalize(),t===Rn)i[5].setComponents(l+o,p+d,m+v,A+_).normalize();else if(t===Gs)i[5].setComponents(o,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(As.x=r.normal.x>0?e.max.x:e.min.x,As.y=r.normal.y>0?e.max.y:e.min.y,As.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Sf(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,p=c.usage,f=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,p),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,d){const p=u.array,f=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,c),f.count===-1&&g.length===0&&n.bufferSubData(d,0,p),g.length!==0){for(let v=0,m=g.length;v<m;v++){const h=g[v];t?n.bufferSubData(d,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):n.bufferSubData(d,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(d,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):n.bufferSubData(d,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:a,remove:o,update:l}}class io extends ot{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,p=t/l,f=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const w=h*p-a;for(let _=0;_<c;_++){const A=_*d-s;g.push(A,-w,0),v.push(0,0,1),m.push(_/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<o;w++){const _=w+c*h,A=w+c*(h+1),C=w+1+c*(h+1),P=w+1+c*h;f.push(_,A,P),f.push(A,C,P)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cf=`#ifdef USE_ALPHAHASH
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
#endif`,Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
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
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Vf=`#ifdef USE_BUMPMAP
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
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yf=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,rm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,fm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_m=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,xm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
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
#endif`,Sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Tm=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Om=`#if defined( USE_POINTS_UV )
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
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
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
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ug=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bg=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`#include <common>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Ug=`#define DISTANCE
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
}`,Ig=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kg=`#include <common>
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
}`,Vg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zg=`#define LAMBERT
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
}`,Hg=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gg=`#define MATCAP
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
}`,Wg=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jg=`#define NORMAL
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
}`,Xg=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$g=`#define PHONG
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
}`,qg=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yg=`#define STANDARD
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
}`,Kg=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zg=`#define TOON
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
}`,Jg=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qg=`uniform float size;
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
}`,ev=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,nv=`uniform vec3 color;
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
}`,iv=`uniform float rotation;
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
}`,rv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Be={alphahash_fragment:Tf,alphahash_pars_fragment:Cf,alphamap_fragment:Af,alphamap_pars_fragment:Pf,alphatest_fragment:Rf,alphatest_pars_fragment:Lf,aomap_fragment:Df,aomap_pars_fragment:Uf,batching_pars_vertex:If,batching_vertex:Nf,begin_vertex:Of,beginnormal_vertex:Ff,bsdfs:Bf,iridescence_fragment:kf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:zf,clipping_planes_pars_fragment:Hf,clipping_planes_pars_vertex:Gf,clipping_planes_vertex:Wf,color_fragment:jf,color_pars_fragment:Xf,color_pars_vertex:$f,color_vertex:qf,common:Yf,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:Zf,displacementmap_pars_vertex:Jf,displacementmap_vertex:Qf,emissivemap_fragment:em,emissivemap_pars_fragment:tm,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:rm,envmap_common_pars_fragment:sm,envmap_pars_fragment:om,envmap_pars_vertex:am,envmap_physical_pars_fragment:xm,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:um,fog_fragment:dm,fog_pars_fragment:hm,gradientmap_pars_fragment:pm,lightmap_fragment:fm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:vm,lights_pars_begin:_m,lights_toon_fragment:bm,lights_toon_pars_fragment:wm,lights_phong_fragment:ym,lights_phong_pars_fragment:Mm,lights_physical_fragment:Em,lights_physical_pars_fragment:Sm,lights_fragment_begin:Tm,lights_fragment_maps:Cm,lights_fragment_end:Am,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Lm,logdepthbuf_vertex:Dm,map_fragment:Um,map_pars_fragment:Im,map_particle_fragment:Nm,map_particle_pars_fragment:Om,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Bm,morphcolor_vertex:km,morphnormal_vertex:Vm,morphtarget_pars_vertex:zm,morphtarget_vertex:Hm,normal_fragment_begin:Gm,normal_fragment_maps:Wm,normal_pars_fragment:jm,normal_pars_vertex:Xm,normal_vertex:$m,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Jm,opaque_fragment:Qm,packing:eg,premultiplied_alpha_fragment:tg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:rg,roughnessmap_fragment:sg,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:lg,shadowmap_vertex:cg,shadowmask_pars_fragment:ug,skinbase_vertex:dg,skinning_pars_vertex:hg,skinning_vertex:pg,skinnormal_vertex:fg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:vg,tonemapping_pars_fragment:_g,transmission_fragment:xg,transmission_pars_fragment:bg,uv_pars_fragment:wg,uv_pars_vertex:yg,uv_vertex:Mg,worldpos_vertex:Eg,background_vert:Sg,background_frag:Tg,backgroundCube_vert:Cg,backgroundCube_frag:Ag,cube_vert:Pg,cube_frag:Rg,depth_vert:Lg,depth_frag:Dg,distanceRGBA_vert:Ug,distanceRGBA_frag:Ig,equirect_vert:Ng,equirect_frag:Og,linedashed_vert:Fg,linedashed_frag:Bg,meshbasic_vert:kg,meshbasic_frag:Vg,meshlambert_vert:zg,meshlambert_frag:Hg,meshmatcap_vert:Gg,meshmatcap_frag:Wg,meshnormal_vert:jg,meshnormal_frag:Xg,meshphong_vert:$g,meshphong_frag:qg,meshphysical_vert:Yg,meshphysical_frag:Kg,meshtoon_vert:Zg,meshtoon_frag:Jg,points_vert:Qg,points_frag:ev,shadow_vert:tv,shadow_frag:nv,sprite_vert:iv,sprite_frag:rv},oe={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},fn={basic:{uniforms:Ft([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ft([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Se(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ft([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ft([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ft([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Se(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ft([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ft([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ft([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ft([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ft([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ft([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Ft([oe.common,oe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Ft([oe.lights,oe.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};fn.physical={uniforms:Ft([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ps={r:0,b:0,g:0};function sv(n,e,t,i,r,s,a){const o=new Se(0);let l=s===!0?0:1,c,u,d=null,p=0,f=null;function g(m,h){let w=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),w=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Qs)?(u===void 0&&(u=new Et(new Kr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:cr(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(_.colorSpace)!==nt,(d!==_||p!==_.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=_,p=_.version,f=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Et(new io(2,2),new ri({name:"BackgroundMaterial",uniforms:cr(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(_.colorSpace)!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||p!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,p=_.version,f=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,h){m.getRGB(Ps,od(n)),i.buffers.color.setClear(Ps.r,Ps.g,Ps.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function ov(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function d(T,I,V,$,X){let j=!1;if(a){const Z=v($,V,I);c!==Z&&(c=Z,f(c.object)),j=h(T,$,V,X),j&&w(T,$,V,X)}else{const Z=I.wireframe===!0;(c.geometry!==$.id||c.program!==V.id||c.wireframe!==Z)&&(c.geometry=$.id,c.program=V.id,c.wireframe=Z,j=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,L(T,I,V,$),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function p(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(T){return i.isWebGL2?n.bindVertexArray(T):s.bindVertexArrayOES(T)}function g(T){return i.isWebGL2?n.deleteVertexArray(T):s.deleteVertexArrayOES(T)}function v(T,I,V){const $=V.wireframe===!0;let X=o[T.id];X===void 0&&(X={},o[T.id]=X);let j=X[I.id];j===void 0&&(j={},X[I.id]=j);let Z=j[$];return Z===void 0&&(Z=m(p()),j[$]=Z),Z}function m(T){const I=[],V=[],$=[];for(let X=0;X<r;X++)I[X]=0,V[X]=0,$[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:$,object:T,attributes:{},index:null}}function h(T,I,V,$){const X=c.attributes,j=I.attributes;let Z=0;const K=V.getAttributes();for(const ae in K)if(K[ae].location>=0){const Y=X[ae];let se=j[ae];if(se===void 0&&(ae==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),ae==="instanceColor"&&T.instanceColor&&(se=T.instanceColor)),Y===void 0||Y.attribute!==se||se&&Y.data!==se.data)return!0;Z++}return c.attributesNum!==Z||c.index!==$}function w(T,I,V,$){const X={},j=I.attributes;let Z=0;const K=V.getAttributes();for(const ae in K)if(K[ae].location>=0){let Y=j[ae];Y===void 0&&(ae==="instanceMatrix"&&T.instanceMatrix&&(Y=T.instanceMatrix),ae==="instanceColor"&&T.instanceColor&&(Y=T.instanceColor));const se={};se.attribute=Y,Y&&Y.data&&(se.data=Y.data),X[ae]=se,Z++}c.attributes=X,c.attributesNum=Z,c.index=$}function _(){const T=c.newAttributes;for(let I=0,V=T.length;I<V;I++)T[I]=0}function A(T){C(T,0)}function C(T,I){const V=c.newAttributes,$=c.enabledAttributes,X=c.attributeDivisors;V[T]=1,$[T]===0&&(n.enableVertexAttribArray(T),$[T]=1),X[T]!==I&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,I),X[T]=I)}function P(){const T=c.newAttributes,I=c.enabledAttributes;for(let V=0,$=I.length;V<$;V++)I[V]!==T[V]&&(n.disableVertexAttribArray(V),I[V]=0)}function S(T,I,V,$,X,j,Z){Z===!0?n.vertexAttribIPointer(T,I,V,X,j):n.vertexAttribPointer(T,I,V,$,X,j)}function L(T,I,V,$){if(i.isWebGL2===!1&&(T.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const X=$.attributes,j=V.getAttributes(),Z=I.defaultAttributeValues;for(const K in j){const ae=j[K];if(ae.location>=0){let H=X[K];if(H===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(H=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(H=T.instanceColor)),H!==void 0){const Y=H.normalized,se=H.itemSize,ge=t.get(H);if(ge===void 0)continue;const fe=ge.buffer,Ae=ge.type,Pe=ge.bytesPerElement,ye=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||H.gpuType===Hu);if(H.isInterleavedBufferAttribute){const ke=H.data,F=ke.stride,Ct=H.offset;if(ke.isInstancedInterleavedBuffer){for(let _e=0;_e<ae.locationSize;_e++)C(ae.location+_e,ke.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let _e=0;_e<ae.locationSize;_e++)A(ae.location+_e);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let _e=0;_e<ae.locationSize;_e++)S(ae.location+_e,se/ae.locationSize,Ae,Y,F*Pe,(Ct+se/ae.locationSize*_e)*Pe,ye)}else{if(H.isInstancedBufferAttribute){for(let ke=0;ke<ae.locationSize;ke++)C(ae.location+ke,H.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ke=0;ke<ae.locationSize;ke++)A(ae.location+ke);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let ke=0;ke<ae.locationSize;ke++)S(ae.location+ke,se/ae.locationSize,Ae,Y,se*Pe,se/ae.locationSize*ke*Pe,ye)}}else if(Z!==void 0){const Y=Z[K];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(ae.location,Y);break;case 3:n.vertexAttrib3fv(ae.location,Y);break;case 4:n.vertexAttrib4fv(ae.location,Y);break;default:n.vertexAttrib1fv(ae.location,Y)}}}}P()}function x(){G();for(const T in o){const I=o[T];for(const V in I){const $=I[V];for(const X in $)g($[X].object),delete $[X];delete I[V]}delete o[T]}}function M(T){if(o[T.id]===void 0)return;const I=o[T.id];for(const V in I){const $=I[V];for(const X in $)g($[X].object),delete $[X];delete I[V]}delete o[T.id]}function O(T){for(const I in o){const V=o[I];if(V[T.id]===void 0)continue;const $=V[T.id];for(const X in $)g($[X].object),delete $[X];delete V[T.id]}}function G(){q(),u=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:q,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:A,disableUnusedAttributes:P}}function av(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,p){if(p===0)return;let f,g;if(r)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,d,p),t.update(d,s,p)}function c(u,d,p){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<p;g++)this.render(u[g],d[g]);else{f.multiDrawArraysWEBGL(s,u,0,d,0,p);let g=0;for(let v=0;v<p;v++)g+=d[v];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function lv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,A=a||e.has("OES_texture_float"),C=_&&A,P=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:w,vertexTextures:_,floatFragmentTextures:A,floatVertexTextures:C,maxSamples:P}}function cv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new qn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||r;return r=p,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,_=w*4;let A=h.clippingState||null;l.value=A,A=u(g,p,_,f);for(let C=0;C!==_;++C)A[C]=t[C];h.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=f+v*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,A=f;_!==v;++_,A+=4)a.copy(d[_]).applyMatrix4(w,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function uv(n){let e=new WeakMap;function t(a,o){return o===aa?a.mapping=or:o===la&&(a.mapping=ar),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===aa||o===la)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new yf(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Un extends ad{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qi=4,bc=[.125,.215,.35,.446,.526,.582],mi=20,Vo=new Un,wc=new Se;let zo=null,Ho=0,Go=0;const pi=(1+Math.sqrt(5))/2,qi=1/pi,yc=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,pi,qi),new U(0,pi,-qi),new U(qi,0,pi),new U(-qi,0,pi),new U(pi,qi,0),new U(-pi,qi,0)];class Mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){zo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zo,Ho,Go),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:kr,format:hn,colorSpace:Nn,depthBuffer:!1},r=Ec(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dv(s)),this._blurMaterial=hv(s,e,t)}return r}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Vo)}_sceneToCubeUV(e,t,i,r){const o=new vt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(wc),u.toneMapping=ti,u.autoClear=!1;const f=new xi({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Et(new Kr,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(wc),v=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):w===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const _=this._cubeSize;Rs(r,w*_,h>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===or||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Vo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yc[(r-1)%yc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Et(this._lodPlanes[r],c),p=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*mi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):mi;m>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const h=[];let w=0;for(let S=0;S<mi;++S){const L=S/v,x=Math.exp(-L*L/2);h.push(x),S===0?w+=x:S<m&&(w+=2*x)}for(let S=0;S<h.length;S++)h[S]=h[S]/w;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:_}=this;p.dTheta.value=g,p.mipInt.value=_-i;const A=this._sizeLods[r],C=3*A*(r>_-Qi?r-_+Qi:0),P=4*(this._cubeSize-A);Rs(t,C,P,3*A,2*A),l.setRenderTarget(t),l.render(d,Vo)}}function dv(n){const e=[],t=[],i=[];let r=n;const s=n-Qi+1+bc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Qi?l=bc[a-n+Qi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,h=1,w=new Float32Array(v*g*f),_=new Float32Array(m*g*f),A=new Float32Array(h*g*f);for(let P=0;P<f;P++){const S=P%3*2/3-1,L=P>2?0:-1,x=[S,L,0,S+2/3,L,0,S+2/3,L+1,0,S,L,0,S+2/3,L+1,0,S,L+1,0];w.set(x,v*g*P),_.set(p,m*g*P);const M=[P,P,P,P,P,P];A.set(M,h*g*P)}const C=new ot;C.setAttribute("position",new vn(w,v)),C.setAttribute("uv",new vn(_,m)),C.setAttribute("faceIndex",new vn(A,h)),e.push(C),r>Qi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ec(n,e,t){const i=new wi(n,e,t);return i.texture.mapping=Qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function hv(n,e,t){const i=new Float32Array(mi),r=new U(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Sc(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Tc(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ua(){return`

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
	`}function pv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===aa||l===la,u=l===or||l===ar;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Mc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Mc(n));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function fv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mv(n,e,t,i){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}p.removeEventListener("dispose",a),delete r[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const g in p)e.update(p[g],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(d){const p=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let _=0,A=w.length;_<A;_+=3){const C=w[_+0],P=w[_+1],S=w[_+2];p.push(C,P,P,S,S,C)}}else if(g!==void 0){const w=g.array;v=g.version;for(let _=0,A=w.length/3-1;_<A;_+=3){const C=_+0,P=_+1,S=_+2;p.push(C,P,P,S,S,C)}}else return;const m=new(Ju(p)?sd:rd)(p,1);m.version=v;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const p=s.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function gv(n,e,t,i){const r=i.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,g){n.drawElements(s,g,o,f*l),t.update(g,s,1)}function d(f,g,v){if(v===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,o,f*l,v),t.update(g,s,v)}function p(f,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<v;h++)this.render(f[h]/l,g[h]);else{m.multiDrawElementsWEBGL(s,g,0,o,f,0,v);let h=0;for(let w=0;w<v;w++)h+=g[w];t.update(h,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function vv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _v(n,e){return n[0]-e[0]}function xv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function bv(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new St,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0;let v=s.get(u);if(v===void 0||v.count!==g){let T=function(){G.dispose(),s.delete(u),u.removeEventListener("dispose",T)};v!==void 0&&v.texture.dispose();const w=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let L=0;w===!0&&(L=1),_===!0&&(L=2),A===!0&&(L=3);let x=u.attributes.position.count*L,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const O=new Float32Array(x*M*4*g),G=new td(O,x,M,g);G.type=Kn,G.needsUpdate=!0;const q=L*4;for(let I=0;I<g;I++){const V=C[I],$=P[I],X=S[I],j=x*M*4*I;for(let Z=0;Z<V.count;Z++){const K=Z*q;w===!0&&(a.fromBufferAttribute(V,Z),O[j+K+0]=a.x,O[j+K+1]=a.y,O[j+K+2]=a.z,O[j+K+3]=0),_===!0&&(a.fromBufferAttribute($,Z),O[j+K+4]=a.x,O[j+K+5]=a.y,O[j+K+6]=a.z,O[j+K+7]=0),A===!0&&(a.fromBufferAttribute(X,Z),O[j+K+8]=a.x,O[j+K+9]=a.y,O[j+K+10]=a.z,O[j+K+11]=X.itemSize===4?a.w:1)}}v={count:g,texture:G,size:new Ue(x,M)},s.set(u,v),u.addEventListener("dispose",T)}let m=0;for(let w=0;w<p.length;w++)m+=p[w];const h=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",h),d.getUniforms().setValue(n,"morphTargetInfluences",p),d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const f=p===void 0?0:p.length;let g=i[u.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];i[u.id]=g}for(let _=0;_<f;_++){const A=g[_];A[0]=_,A[1]=p[_]}g.sort(xv);for(let _=0;_<8;_++)_<f&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(_v);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let h=0;for(let _=0;_<8;_++){const A=o[_],C=A[0],P=A[1];C!==Number.MAX_SAFE_INTEGER&&P?(v&&u.getAttribute("morphTarget"+_)!==v[C]&&u.setAttribute("morphTarget"+_,v[C]),m&&u.getAttribute("morphNormal"+_)!==m[C]&&u.setAttribute("morphNormal"+_,m[C]),r[_]=P,h+=P):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const w=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",w),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function wv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class ud extends Nt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:vi,u!==vi&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vi&&(i=Yn),i===void 0&&u===lr&&(i=gi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const dd=new Nt,hd=new ud(1,1);hd.compareFunction=Zu;const pd=new td,fd=new sf,md=new ld,Cc=[],Ac=[],Pc=new Float32Array(16),Rc=new Float32Array(9),Lc=new Float32Array(4);function fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cc[r];if(s===void 0&&(s=new Float32Array(r),Cc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ro(n,e){let t=Ac[e];t===void 0&&(t=new Int32Array(e),Ac[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function Tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(xt(t,i))return;Lc.set(i),n.uniformMatrix2fv(this.addr,!1,Lc),bt(t,i)}}function Cv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(xt(t,i))return;Rc.set(i),n.uniformMatrix3fv(this.addr,!1,Rc),bt(t,i)}}function Av(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(xt(t,i))return;Pc.set(i),n.uniformMatrix4fv(this.addr,!1,Pc),bt(t,i)}}function Pv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function Lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function Dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function Uv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function Nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function Ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function Fv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?hd:dd;t.setTexture2D(e||s,r)}function Bv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||fd,r)}function kv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||md,r)}function Vv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||pd,r)}function zv(n){switch(n){case 5126:return yv;case 35664:return Mv;case 35665:return Ev;case 35666:return Sv;case 35674:return Tv;case 35675:return Cv;case 35676:return Av;case 5124:case 35670:return Pv;case 35667:case 35671:return Rv;case 35668:case 35672:return Lv;case 35669:case 35673:return Dv;case 5125:return Uv;case 36294:return Iv;case 36295:return Nv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Vv}}function Hv(n,e){n.uniform1fv(this.addr,e)}function Gv(n,e){const t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function Wv(n,e){const t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function jv(n,e){const t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function Xv(n,e){const t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $v(n,e){const t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qv(n,e){const t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yv(n,e){n.uniform1iv(this.addr,e)}function Kv(n,e){n.uniform2iv(this.addr,e)}function Zv(n,e){n.uniform3iv(this.addr,e)}function Jv(n,e){n.uniform4iv(this.addr,e)}function Qv(n,e){n.uniform1uiv(this.addr,e)}function e_(n,e){n.uniform2uiv(this.addr,e)}function t_(n,e){n.uniform3uiv(this.addr,e)}function n_(n,e){n.uniform4uiv(this.addr,e)}function i_(n,e,t){const i=this.cache,r=e.length,s=ro(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||dd,s[a])}function r_(n,e,t){const i=this.cache,r=e.length,s=ro(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||fd,s[a])}function s_(n,e,t){const i=this.cache,r=e.length,s=ro(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||md,s[a])}function o_(n,e,t){const i=this.cache,r=e.length,s=ro(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||pd,s[a])}function a_(n){switch(n){case 5126:return Hv;case 35664:return Gv;case 35665:return Wv;case 35666:return jv;case 35674:return Xv;case 35675:return $v;case 35676:return qv;case 5124:case 35670:return Yv;case 35667:case 35671:return Kv;case 35668:case 35672:return Zv;case 35669:case 35673:return Jv;case 5125:return Qv;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return o_}}class l_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zv(t.type)}}class c_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a_(t.type)}}class u_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function Dc(n,e){n.seq.push(e),n.map[e.id]=e}function d_(n,e,t){const i=n.name,r=i.length;for(Wo.lastIndex=0;;){const s=Wo.exec(i),a=Wo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Dc(t,c===void 0?new l_(o,n,e):new c_(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new u_(o),Dc(t,d)),t=d}}}class Os{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);d_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Uc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const h_=37297;let p_=0;function f_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function m_(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===Hs&&t===zs?i="LinearDisplayP3ToLinearSRGB":e===zs&&t===Hs&&(i="LinearSRGBToLinearDisplayP3"),n){case Nn:case eo:return[i,"LinearTransferOETF"];case Mt:case Pa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ic(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+f_(n.getShaderSource(e),a)}else return r}function g_(n,e){const t=m_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function v_(n,e){let t;switch(e){case pp:t="Linear";break;case fp:t="Reinhard";break;case mp:t="OptimizedCineon";break;case gp:t="ACESFilmic";break;case _p:t="AgX";break;case vp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function __(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(er).join(`
`)}function x_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(er).join(`
`)}function b_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function w_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function er(n){return n!==""}function Nc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(n){return n.replace(y_,E_)}const M_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function E_(n,e){let t=Be[e];if(t===void 0){const i=M_.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pa(t)}const S_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(n){return n.replace(S_,T_)}function T_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function A_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function P_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function R_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vu:e="ENVMAP_BLENDING_MULTIPLY";break;case dp:e="ENVMAP_BLENDING_MIX";break;case hp:e="ENVMAP_BLENDING_ADD";break}return e}function L_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function D_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=C_(t),c=A_(t),u=P_(t),d=R_(t),p=L_(t),f=t.isWebGL2?"":__(t),g=x_(t),v=b_(s),m=r.createProgram();let h,w,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(er).join(`
`),h.length>0&&(h+=`
`),w=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(er).join(`
`),w.length>0&&(w+=`
`)):(h=[Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),w=[f,Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Be.tonemapping_pars_fragment:"",t.toneMapping!==ti?v_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,g_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),a=pa(a),a=Nc(a,t),a=Oc(a,t),o=pa(o),o=Nc(o,t),o=Oc(o,t),a=Fc(a),o=Fc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const A=_+h+a,C=_+w+o,P=Uc(r,r.VERTEX_SHADER,A),S=Uc(r,r.FRAGMENT_SHADER,C);r.attachShader(m,P),r.attachShader(m,S),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function L(G){if(n.debug.checkShaderErrors){const q=r.getProgramInfoLog(m).trim(),T=r.getShaderInfoLog(P).trim(),I=r.getShaderInfoLog(S).trim();let V=!0,$=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,P,S);else{const X=Ic(r,P,"vertex"),j=Ic(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+X+`
`+j)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(T===""||I==="")&&($=!1);$&&(G.diagnostics={runnable:V,programLog:q,vertexShader:{log:T,prefix:h},fragmentShader:{log:I,prefix:w}})}r.deleteShader(P),r.deleteShader(S),x=new Os(r,m),M=w_(r,m)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(m,h_)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=S,this}let U_=0;class I_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new N_(e),t.set(e,i)),i}}class N_{constructor(e){this.id=U_++,this.code=e,this.usedTimes=0}}function O_(n,e,t,i,r,s,a){const o=new nd,l=new I_,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function m(x,M,O,G,q){const T=G.fog,I=q.geometry,V=x.isMeshStandardMaterial?G.environment:null,$=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),X=$&&$.mapping===Qs?$.image.height:null,j=g[x.type];x.precision!==null&&(f=r.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const Z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=Z!==void 0?Z.length:0;let ae=0;I.morphAttributes.position!==void 0&&(ae=1),I.morphAttributes.normal!==void 0&&(ae=2),I.morphAttributes.color!==void 0&&(ae=3);let H,Y,se,ge;if(j){const dt=fn[j];H=dt.vertexShader,Y=dt.fragmentShader}else H=x.vertexShader,Y=x.fragmentShader,l.update(x),se=l.getVertexShaderID(x),ge=l.getFragmentShaderID(x);const fe=n.getRenderTarget(),Ae=q.isInstancedMesh===!0,Pe=q.isBatchedMesh===!0,ye=!!x.map,ke=!!x.matcap,F=!!$,Ct=!!x.aoMap,_e=!!x.lightMap,Re=!!x.bumpMap,me=!!x.normalMap,tt=!!x.displacementMap,Ne=!!x.emissiveMap,E=!!x.metalnessMap,b=!!x.roughnessMap,B=x.anisotropy>0,te=x.clearcoat>0,Q=x.iridescence>0,ne=x.sheen>0,ve=x.transmission>0,ce=B&&!!x.anisotropyMap,pe=te&&!!x.clearcoatMap,Ee=te&&!!x.clearcoatNormalMap,Oe=te&&!!x.clearcoatRoughnessMap,J=Q&&!!x.iridescenceMap,Ke=Q&&!!x.iridescenceThicknessMap,Ve=ne&&!!x.sheenColorMap,Le=ne&&!!x.sheenRoughnessMap,we=!!x.specularMap,ue=!!x.specularColorMap,R=!!x.specularIntensityMap,ie=ve&&!!x.transmissionMap,xe=ve&&!!x.thicknessMap,he=!!x.gradientMap,ee=!!x.alphaMap,D=x.alphaTest>0,re=!!x.alphaHash,le=!!x.extensions,Te=!!I.attributes.uv1,Me=!!I.attributes.uv2,je=!!I.attributes.uv3;let Xe=ti;return x.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Xe=n.toneMapping),{isWebGL2:u,shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:Y,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Pe,instancing:Ae,instancingColor:Ae&&q.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Nn,map:ye,matcap:ke,envMap:F,envMapMode:F&&$.mapping,envMapCubeUVHeight:X,aoMap:Ct,lightMap:_e,bumpMap:Re,normalMap:me,displacementMap:p&&tt,emissiveMap:Ne,normalMapObjectSpace:me&&x.normalMapType===Rp,normalMapTangentSpace:me&&x.normalMapType===Ku,metalnessMap:E,roughnessMap:b,anisotropy:B,anisotropyMap:ce,clearcoat:te,clearcoatMap:pe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Oe,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:Ke,sheen:ne,sheenColorMap:Ve,sheenRoughnessMap:Le,specularMap:we,specularColorMap:ue,specularIntensityMap:R,transmission:ve,transmissionMap:ie,thicknessMap:xe,gradientMap:he,opaque:x.transparent===!1&&x.blending===tr,alphaMap:ee,alphaTest:D,alphaHash:re,combine:x.combine,mapUv:ye&&v(x.map.channel),aoMapUv:Ct&&v(x.aoMap.channel),lightMapUv:_e&&v(x.lightMap.channel),bumpMapUv:Re&&v(x.bumpMap.channel),normalMapUv:me&&v(x.normalMap.channel),displacementMapUv:tt&&v(x.displacementMap.channel),emissiveMapUv:Ne&&v(x.emissiveMap.channel),metalnessMapUv:E&&v(x.metalnessMap.channel),roughnessMapUv:b&&v(x.roughnessMap.channel),anisotropyMapUv:ce&&v(x.anisotropyMap.channel),clearcoatMapUv:pe&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(x.sheenRoughnessMap.channel),specularMapUv:we&&v(x.specularMap.channel),specularColorMapUv:ue&&v(x.specularColorMap.channel),specularIntensityMapUv:R&&v(x.specularIntensityMap.channel),transmissionMapUv:ie&&v(x.transmissionMap.channel),thicknessMapUv:xe&&v(x.thicknessMap.channel),alphaMapUv:ee&&v(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(me||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Me,vertexUv3s:je,pointsUvs:q.isPoints===!0&&!!I.attributes.uv&&(ye||ee),fog:!!T,useFog:x.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ae,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ye&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Zt,flipSided:x.side===Gt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:le&&x.extensions.derivatives===!0,extensionFragDepth:le&&x.extensions.fragDepth===!0,extensionDrawBuffers:le&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function h(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)M.push(O),M.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(w(M,x),_(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function w(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function _(x,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function A(x){const M=g[x.type];let O;if(M){const G=fn[M];O=_f.clone(G.uniforms)}else O=x.uniforms;return O}function C(x,M){let O;for(let G=0,q=c.length;G<q;G++){const T=c[G];if(T.cacheKey===M){O=T,++O.usedTimes;break}}return O===void 0&&(O=new D_(n,M,x,s),c.push(O)),O}function P(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),x.destroy()}}function S(x){l.remove(x)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:A,acquireProgram:C,releaseProgram:P,releaseShaderCache:S,programs:c,dispose:L}}function F_(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function B_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,p,f,g,v,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=f,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=m),e++,h}function o(d,p,f,g,v,m){const h=a(d,p,f,g,v,m);f.transmission>0?i.push(h):f.transparent===!0?r.push(h):t.push(h)}function l(d,p,f,g,v,m){const h=a(d,p,f,g,v,m);f.transmission>0?i.unshift(h):f.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,p){t.length>1&&t.sort(d||B_),i.length>1&&i.sort(p||kc),r.length>1&&r.sort(p||kc)}function u(){for(let d=e,p=n.length;d<p;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function k_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Vc,n.set(i,[a])):r>=s.length?(a=new Vc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function V_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Se};break;case"SpotLight":t={position:new U,direction:new U,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function z_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let H_=0;function G_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W_(n,e){const t=new V_,i=z_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,a=new mt,o=new mt;function l(u,d){let p=0,f=0,g=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let v=0,m=0,h=0,w=0,_=0,A=0,C=0,P=0,S=0,L=0,x=0;u.sort(G_);const M=d===!0?Math.PI:1;for(let G=0,q=u.length;G<q;G++){const T=u[G],I=T.color,V=T.intensity,$=T.distance,X=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)p+=I.r*V*M,f+=I.g*V*M,g+=I.b*V*M;else if(T.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(T.sh.coefficients[j],V);x++}else if(T.isDirectionalLight){const j=t.get(T);if(j.color.copy(T.color).multiplyScalar(T.intensity*M),T.castShadow){const Z=T.shadow,K=i.get(T);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.directionalShadow[v]=K,r.directionalShadowMap[v]=X,r.directionalShadowMatrix[v]=T.shadow.matrix,A++}r.directional[v]=j,v++}else if(T.isSpotLight){const j=t.get(T);j.position.setFromMatrixPosition(T.matrixWorld),j.color.copy(I).multiplyScalar(V*M),j.distance=$,j.coneCos=Math.cos(T.angle),j.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),j.decay=T.decay,r.spot[h]=j;const Z=T.shadow;if(T.map&&(r.spotLightMap[S]=T.map,S++,Z.updateMatrices(T),T.castShadow&&L++),r.spotLightMatrix[h]=Z.matrix,T.castShadow){const K=i.get(T);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.spotShadow[h]=K,r.spotShadowMap[h]=X,P++}h++}else if(T.isRectAreaLight){const j=t.get(T);j.color.copy(I).multiplyScalar(V),j.halfWidth.set(T.width*.5,0,0),j.halfHeight.set(0,T.height*.5,0),r.rectArea[w]=j,w++}else if(T.isPointLight){const j=t.get(T);if(j.color.copy(T.color).multiplyScalar(T.intensity*M),j.distance=T.distance,j.decay=T.decay,T.castShadow){const Z=T.shadow,K=i.get(T);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=T.shadow.matrix,C++}r.point[m]=j,m++}else if(T.isHemisphereLight){const j=t.get(T);j.skyColor.copy(T.color).multiplyScalar(V*M),j.groundColor.copy(T.groundColor).multiplyScalar(V*M),r.hemi[_]=j,_++}}w>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=f,r.ambient[2]=g;const O=r.hash;(O.directionalLength!==v||O.pointLength!==m||O.spotLength!==h||O.rectAreaLength!==w||O.hemiLength!==_||O.numDirectionalShadows!==A||O.numPointShadows!==C||O.numSpotShadows!==P||O.numSpotMaps!==S||O.numLightProbes!==x)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=w,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=P+S-L,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=x,O.directionalLength=v,O.pointLength=m,O.spotLength=h,O.rectAreaLength=w,O.hemiLength=_,O.numDirectionalShadows=A,O.numPointShadows=C,O.numSpotShadows=P,O.numSpotMaps=S,O.numLightProbes=x,r.version=H_++)}function c(u,d){let p=0,f=0,g=0,v=0,m=0;const h=d.matrixWorldInverse;for(let w=0,_=u.length;w<_;w++){const A=u[w];if(A.isDirectionalLight){const C=r.directional[p];C.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),p++}else if(A.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),g++}else if(A.isRectAreaLight){const C=r.rectArea[v];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(h),o.identity(),a.copy(A.matrixWorld),a.premultiply(h),o.extractRotation(a),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){const C=r.point[f];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(h),f++}else if(A.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function zc(n,e){const t=new W_(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function j_(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new zc(n,e),t.set(s,[l])):a>=o.length?(l=new zc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class X_ extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $_ extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
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
}`;function K_(n,e,t){let i=new Da;const r=new Ue,s=new Ue,a=new St,o=new X_({depthPacking:Pp}),l=new $_,c={},u=t.maxTextureSize,d={[_n]:Gt,[Gt]:_n,[Zt]:Zt},p=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new ot;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Et(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let h=this.type;this.render=function(P,S,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const x=n.getRenderTarget(),M=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ei),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=h!==Pn&&this.type===Pn,T=h===Pn&&this.type!==Pn;for(let I=0,V=P.length;I<V;I++){const $=P[I],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const j=X.getFrameExtents();if(r.multiply(j),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,X.mapSize.y=s.y)),X.map===null||q===!0||T===!0){const K=this.type!==Pn?{minFilter:Bt,magFilter:Bt}:{};X.map!==null&&X.map.dispose(),X.map=new wi(r.x,r.y,K),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const Z=X.getViewportCount();for(let K=0;K<Z;K++){const ae=X.getViewport(K);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),G.viewport(a),X.updateMatrices($,K),i=X.getFrustum(),A(S,L,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===Pn&&w(X,L),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(x,M,O)};function w(P,S){const L=e.update(v);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new wi(r.x,r.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(S,null,L,p,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(S,null,L,f,v,null)}function _(P,S,L,x){let M=null;const O=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(O!==void 0)M=O;else if(M=L.isPointLight===!0?l:o,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const G=M.uuid,q=S.uuid;let T=c[G];T===void 0&&(T={},c[G]=T);let I=T[q];I===void 0&&(I=M.clone(),T[q]=I,S.addEventListener("dispose",C)),M=I}if(M.visible=S.visible,M.wireframe=S.wireframe,x===Pn?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:d[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=n.properties.get(M);G.light=L}return M}function A(P,S,L,x,M){if(P.visible===!1)return;if(P.layers.test(S.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===Pn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const q=e.update(P),T=P.material;if(Array.isArray(T)){const I=q.groups;for(let V=0,$=I.length;V<$;V++){const X=I[V],j=T[X.materialIndex];if(j&&j.visible){const Z=_(P,j,x,M);P.onBeforeShadow(n,P,S,L,q,Z,X),n.renderBufferDirect(L,null,q,Z,P,X),P.onAfterShadow(n,P,S,L,q,Z,X)}}}else if(T.visible){const I=_(P,T,x,M);P.onBeforeShadow(n,P,S,L,q,I,null),n.renderBufferDirect(L,null,q,I,P,null),P.onAfterShadow(n,P,S,L,q,I,null)}}const G=P.children;for(let q=0,T=G.length;q<T;q++)A(G[q],S,L,x,M)}function C(P){P.target.removeEventListener("dispose",C);for(const L in c){const x=c[L],M=P.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}function Z_(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const re=new St;let le=null;const Te=new St(0,0,0,0);return{setMask:function(Me){le!==Me&&!D&&(n.colorMask(Me,Me,Me,Me),le=Me)},setLocked:function(Me){D=Me},setClear:function(Me,je,Xe,lt,dt){dt===!0&&(Me*=lt,je*=lt,Xe*=lt),re.set(Me,je,Xe,lt),Te.equals(re)===!1&&(n.clearColor(Me,je,Xe,lt),Te.copy(re))},reset:function(){D=!1,le=null,Te.set(-1,0,0,0)}}}function s(){let D=!1,re=null,le=null,Te=null;return{setTest:function(Me){Me?Pe(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(Me){re!==Me&&!D&&(n.depthMask(Me),re=Me)},setFunc:function(Me){if(le!==Me){switch(Me){case rp:n.depthFunc(n.NEVER);break;case sp:n.depthFunc(n.ALWAYS);break;case op:n.depthFunc(n.LESS);break;case ks:n.depthFunc(n.LEQUAL);break;case ap:n.depthFunc(n.EQUAL);break;case lp:n.depthFunc(n.GEQUAL);break;case cp:n.depthFunc(n.GREATER);break;case up:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Me}},setLocked:function(Me){D=Me},setClear:function(Me){Te!==Me&&(n.clearDepth(Me),Te=Me)},reset:function(){D=!1,re=null,le=null,Te=null}}}function a(){let D=!1,re=null,le=null,Te=null,Me=null,je=null,Xe=null,lt=null,dt=null;return{setTest:function(qe){D||(qe?Pe(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(qe){re!==qe&&!D&&(n.stencilMask(qe),re=qe)},setFunc:function(qe,pt,pn){(le!==qe||Te!==pt||Me!==pn)&&(n.stencilFunc(qe,pt,pn),le=qe,Te=pt,Me=pn)},setOp:function(qe,pt,pn){(je!==qe||Xe!==pt||lt!==pn)&&(n.stencilOp(qe,pt,pn),je=qe,Xe=pt,lt=pn)},setLocked:function(qe){D=qe},setClear:function(qe){dt!==qe&&(n.clearStencil(qe),dt=qe)},reset:function(){D=!1,re=null,le=null,Te=null,Me=null,je=null,Xe=null,lt=null,dt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,d=new WeakMap;let p={},f={},g=new WeakMap,v=[],m=null,h=!1,w=null,_=null,A=null,C=null,P=null,S=null,L=null,x=new Se(0,0,0),M=0,O=!1,G=null,q=null,T=null,I=null,V=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=j>=2);let K=null,ae={};const H=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),se=new St().fromArray(H),ge=new St().fromArray(Y);function fe(D,re,le,Te){const Me=new Uint8Array(4),je=n.createTexture();n.bindTexture(D,je),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<le;Xe++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(re,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(re+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return je}const Ae={};Ae[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(n.DEPTH_TEST),l.setFunc(ks),Ne(!1),E(yl),Pe(n.CULL_FACE),me(ei);function Pe(D){p[D]!==!0&&(n.enable(D),p[D]=!0)}function ye(D){p[D]!==!1&&(n.disable(D),p[D]=!1)}function ke(D,re){return f[D]!==re?(n.bindFramebuffer(D,re),f[D]=re,i&&(D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=re),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=re)),!0):!1}function F(D,re){let le=v,Te=!1;if(D)if(le=g.get(re),le===void 0&&(le=[],g.set(re,le)),D.isWebGLMultipleRenderTargets){const Me=D.texture;if(le.length!==Me.length||le[0]!==n.COLOR_ATTACHMENT0){for(let je=0,Xe=Me.length;je<Xe;je++)le[je]=n.COLOR_ATTACHMENT0+je;le.length=Me.length,Te=!0}}else le[0]!==n.COLOR_ATTACHMENT0&&(le[0]=n.COLOR_ATTACHMENT0,Te=!0);else le[0]!==n.BACK&&(le[0]=n.BACK,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Ct(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const _e={[fi]:n.FUNC_ADD,[Gh]:n.FUNC_SUBTRACT,[Wh]:n.FUNC_REVERSE_SUBTRACT};if(i)_e[Tl]=n.MIN,_e[Cl]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(_e[Tl]=D.MIN_EXT,_e[Cl]=D.MAX_EXT)}const Re={[jh]:n.ZERO,[Xh]:n.ONE,[$h]:n.SRC_COLOR,[sa]:n.SRC_ALPHA,[Qh]:n.SRC_ALPHA_SATURATE,[Zh]:n.DST_COLOR,[Yh]:n.DST_ALPHA,[qh]:n.ONE_MINUS_SRC_COLOR,[oa]:n.ONE_MINUS_SRC_ALPHA,[Jh]:n.ONE_MINUS_DST_COLOR,[Kh]:n.ONE_MINUS_DST_ALPHA,[ep]:n.CONSTANT_COLOR,[tp]:n.ONE_MINUS_CONSTANT_COLOR,[np]:n.CONSTANT_ALPHA,[ip]:n.ONE_MINUS_CONSTANT_ALPHA};function me(D,re,le,Te,Me,je,Xe,lt,dt,qe){if(D===ei){h===!0&&(ye(n.BLEND),h=!1);return}if(h===!1&&(Pe(n.BLEND),h=!0),D!==Hh){if(D!==w||qe!==O){if((_!==fi||P!==fi)&&(n.blendEquation(n.FUNC_ADD),_=fi,P=fi),qe)switch(D){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ml:n.blendFunc(n.ONE,n.ONE);break;case El:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ml:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case El:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,C=null,S=null,L=null,x.set(0,0,0),M=0,w=D,O=qe}return}Me=Me||re,je=je||le,Xe=Xe||Te,(re!==_||Me!==P)&&(n.blendEquationSeparate(_e[re],_e[Me]),_=re,P=Me),(le!==A||Te!==C||je!==S||Xe!==L)&&(n.blendFuncSeparate(Re[le],Re[Te],Re[je],Re[Xe]),A=le,C=Te,S=je,L=Xe),(lt.equals(x)===!1||dt!==M)&&(n.blendColor(lt.r,lt.g,lt.b,dt),x.copy(lt),M=dt),w=D,O=!1}function tt(D,re){D.side===Zt?ye(n.CULL_FACE):Pe(n.CULL_FACE);let le=D.side===Gt;re&&(le=!le),Ne(le),D.blending===tr&&D.transparent===!1?me(ei):me(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Te=D.stencilWrite;c.setTest(Te),Te&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),B(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Pe(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(D){G!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),G=D)}function E(D){D!==kh?(Pe(n.CULL_FACE),D!==q&&(D===yl?n.cullFace(n.BACK):D===Vh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),q=D}function b(D){D!==T&&(X&&n.lineWidth(D),T=D)}function B(D,re,le){D?(Pe(n.POLYGON_OFFSET_FILL),(I!==re||V!==le)&&(n.polygonOffset(re,le),I=re,V=le)):ye(n.POLYGON_OFFSET_FILL)}function te(D){D?Pe(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Q(D){D===void 0&&(D=n.TEXTURE0+$-1),K!==D&&(n.activeTexture(D),K=D)}function ne(D,re,le){le===void 0&&(K===null?le=n.TEXTURE0+$-1:le=K);let Te=ae[le];Te===void 0&&(Te={type:void 0,texture:void 0},ae[le]=Te),(Te.type!==D||Te.texture!==re)&&(K!==le&&(n.activeTexture(le),K=le),n.bindTexture(D,re||Ae[D]),Te.type=D,Te.texture=re)}function ve(){const D=ae[K];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function R(D){se.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),se.copy(D))}function ie(D){ge.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ge.copy(D))}function xe(D,re){let le=d.get(re);le===void 0&&(le=new WeakMap,d.set(re,le));let Te=le.get(D);Te===void 0&&(Te=n.getUniformBlockIndex(re,D.name),le.set(D,Te))}function he(D,re){const Te=d.get(re).get(D);u.get(re)!==Te&&(n.uniformBlockBinding(re,Te,D.__bindingPointIndex),u.set(re,Te))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},K=null,ae={},f={},g=new WeakMap,v=[],m=null,h=!1,w=null,_=null,A=null,C=null,P=null,S=null,L=null,x=new Se(0,0,0),M=0,O=!1,G=null,q=null,T=null,I=null,V=null,se.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:ye,bindFramebuffer:ke,drawBuffers:F,useProgram:Ct,setBlending:me,setMaterial:tt,setFlipSided:Ne,setCullFace:E,setLineWidth:b,setPolygonOffset:B,setScissorTest:te,activeTexture:Q,bindTexture:ne,unbindTexture:ve,compressedTexImage2D:ce,compressedTexImage3D:pe,texImage2D:we,texImage3D:ue,updateUBOMapping:xe,uniformBlockBinding:he,texStorage2D:Ve,texStorage3D:Le,texSubImage2D:Ee,texSubImage3D:Oe,compressedTexSubImage2D:J,compressedTexSubImage3D:Ke,scissor:R,viewport:ie,reset:ee}}function J_(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,b){return f?new OffscreenCanvas(E,b):zr("canvas")}function v(E,b,B,te){let Q=1;if((E.width>te||E.height>te)&&(Q=te/Math.max(E.width,E.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ne=b?Ws:Math.floor,ve=ne(Q*E.width),ce=ne(Q*E.height);d===void 0&&(d=g(ve,ce));const pe=B?g(ve,ce):d;return pe.width=ve,pe.height=ce,pe.getContext("2d").drawImage(E,0,0,ve,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ve+"x"+ce+")."),pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return ha(E.width)&&ha(E.height)}function h(E){return o?!1:E.wrapS!==dn||E.wrapT!==dn||E.minFilter!==Bt&&E.minFilter!==sn}function w(E,b){return E.generateMipmaps&&b&&E.minFilter!==Bt&&E.minFilter!==sn}function _(E){n.generateMipmap(E)}function A(E,b,B,te,Q=!1){if(o===!1)return b;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ne=b;if(b===n.RED&&(B===n.FLOAT&&(ne=n.R32F),B===n.HALF_FLOAT&&(ne=n.R16F),B===n.UNSIGNED_BYTE&&(ne=n.R8)),b===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(ne=n.R8UI),B===n.UNSIGNED_SHORT&&(ne=n.R16UI),B===n.UNSIGNED_INT&&(ne=n.R32UI),B===n.BYTE&&(ne=n.R8I),B===n.SHORT&&(ne=n.R16I),B===n.INT&&(ne=n.R32I)),b===n.RG&&(B===n.FLOAT&&(ne=n.RG32F),B===n.HALF_FLOAT&&(ne=n.RG16F),B===n.UNSIGNED_BYTE&&(ne=n.RG8)),b===n.RGBA){const ve=Q?Vs:Qe.getTransfer(te);B===n.FLOAT&&(ne=n.RGBA32F),B===n.HALF_FLOAT&&(ne=n.RGBA16F),B===n.UNSIGNED_BYTE&&(ne=ve===nt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function C(E,b,B){return w(E,B)===!0||E.isFramebufferTexture&&E.minFilter!==Bt&&E.minFilter!==sn?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function P(E){return E===Bt||E===Al||E===vo?n.NEAREST:n.LINEAR}function S(E){const b=E.target;b.removeEventListener("dispose",S),x(b),b.isVideoTexture&&u.delete(b)}function L(E){const b=E.target;b.removeEventListener("dispose",L),O(b)}function x(E){const b=i.get(E);if(b.__webglInit===void 0)return;const B=E.source,te=p.get(B);if(te){const Q=te[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(E),Object.keys(te).length===0&&p.delete(B)}i.remove(E)}function M(E){const b=i.get(E);n.deleteTexture(b.__webglTexture);const B=E.source,te=p.get(B);delete te[b.__cacheKey],a.memory.textures--}function O(E){const b=E.texture,B=i.get(E),te=i.get(b);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let ne=0;ne<B.__webglFramebuffer[Q].length;ne++)n.deleteFramebuffer(B.__webglFramebuffer[Q][ne]);else n.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)n.deleteFramebuffer(B.__webglFramebuffer[Q]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Q=0,ne=b.length;Q<ne;Q++){const ve=i.get(b[Q]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),a.memory.textures--),i.remove(b[Q])}i.remove(b),i.remove(E)}let G=0;function q(){G=0}function T(){const E=G;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),G+=1,E}function I(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function V(E,b){const B=i.get(E);if(E.isVideoTexture&&tt(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(B,E,b);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+b)}function $(E,b){const B=i.get(E);if(E.version>0&&B.__version!==E.version){se(B,E,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+b)}function X(E,b){const B=i.get(E);if(E.version>0&&B.__version!==E.version){se(B,E,b);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+b)}function j(E,b){const B=i.get(E);if(E.version>0&&B.__version!==E.version){ge(B,E,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+b)}const Z={[ca]:n.REPEAT,[dn]:n.CLAMP_TO_EDGE,[ua]:n.MIRRORED_REPEAT},K={[Bt]:n.NEAREST,[Al]:n.NEAREST_MIPMAP_NEAREST,[vo]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[xp]:n.LINEAR_MIPMAP_NEAREST,[Br]:n.LINEAR_MIPMAP_LINEAR},ae={[Lp]:n.NEVER,[Fp]:n.ALWAYS,[Dp]:n.LESS,[Zu]:n.LEQUAL,[Up]:n.EQUAL,[Op]:n.GEQUAL,[Ip]:n.GREATER,[Np]:n.NOTEQUAL};function H(E,b,B){if(B?(n.texParameteri(E,n.TEXTURE_WRAP_S,Z[b.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Z[b.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Z[b.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,K[b.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,K[b.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==dn||b.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,P(b.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,P(b.minFilter)),b.minFilter!==Bt&&b.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Bt||b.minFilter!==vo&&b.minFilter!==Br||b.type===Kn&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===kr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function Y(E,b){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",S));const te=b.source;let Q=p.get(te);Q===void 0&&(Q={},p.set(te,Q));const ne=I(b);if(ne!==E.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[ne].usedTimes++;const ve=Q[E.__cacheKey];ve!==void 0&&(Q[E.__cacheKey].usedTimes--,ve.usedTimes===0&&M(b)),E.__cacheKey=ne,E.__webglTexture=Q[ne].texture}return B}function se(E,b,B){let te=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=n.TEXTURE_3D);const Q=Y(E,b),ne=b.source;t.bindTexture(te,E.__webglTexture,n.TEXTURE0+B);const ve=i.get(ne);if(ne.version!==ve.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);const ce=Qe.getPrimaries(Qe.workingColorSpace),pe=b.colorSpace===Jt?null:Qe.getPrimaries(b.colorSpace),Ee=b.colorSpace===Jt||ce===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Oe=h(b)&&m(b.image)===!1;let J=v(b.image,Oe,!1,r.maxTextureSize);J=Ne(b,J);const Ke=m(J)||o,Ve=s.convert(b.format,b.colorSpace);let Le=s.convert(b.type),we=A(b.internalFormat,Ve,Le,b.colorSpace,b.isVideoTexture);H(te,b,Ke);let ue;const R=b.mipmaps,ie=o&&b.isVideoTexture!==!0&&we!==qu,xe=ve.__version===void 0||Q===!0,he=C(b,J,Ke);if(b.isDepthTexture)we=n.DEPTH_COMPONENT,o?b.type===Kn?we=n.DEPTH_COMPONENT32F:b.type===Yn?we=n.DEPTH_COMPONENT24:b.type===gi?we=n.DEPTH24_STENCIL8:we=n.DEPTH_COMPONENT16:b.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===vi&&we===n.DEPTH_COMPONENT&&b.type!==Aa&&b.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Yn,Le=s.convert(b.type)),b.format===lr&&we===n.DEPTH_COMPONENT&&(we=n.DEPTH_STENCIL,b.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=gi,Le=s.convert(b.type))),xe&&(ie?t.texStorage2D(n.TEXTURE_2D,1,we,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,we,J.width,J.height,0,Ve,Le,null));else if(b.isDataTexture)if(R.length>0&&Ke){ie&&xe&&t.texStorage2D(n.TEXTURE_2D,he,we,R[0].width,R[0].height);for(let ee=0,D=R.length;ee<D;ee++)ue=R[ee],ie?t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ue.width,ue.height,Ve,Le,ue.data):t.texImage2D(n.TEXTURE_2D,ee,we,ue.width,ue.height,0,Ve,Le,ue.data);b.generateMipmaps=!1}else ie?(xe&&t.texStorage2D(n.TEXTURE_2D,he,we,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Ve,Le,J.data)):t.texImage2D(n.TEXTURE_2D,0,we,J.width,J.height,0,Ve,Le,J.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ie&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,we,R[0].width,R[0].height,J.depth);for(let ee=0,D=R.length;ee<D;ee++)ue=R[ee],b.format!==hn?Ve!==null?ie?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,J.depth,Ve,ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,we,ue.width,ue.height,J.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,J.depth,Ve,Le,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,we,ue.width,ue.height,J.depth,0,Ve,Le,ue.data)}else{ie&&xe&&t.texStorage2D(n.TEXTURE_2D,he,we,R[0].width,R[0].height);for(let ee=0,D=R.length;ee<D;ee++)ue=R[ee],b.format!==hn?Ve!==null?ie?t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ue.width,ue.height,Ve,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,we,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ue.width,ue.height,Ve,Le,ue.data):t.texImage2D(n.TEXTURE_2D,ee,we,ue.width,ue.height,0,Ve,Le,ue.data)}else if(b.isDataArrayTexture)ie?(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,we,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ve,Le,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,J.width,J.height,J.depth,0,Ve,Le,J.data);else if(b.isData3DTexture)ie?(xe&&t.texStorage3D(n.TEXTURE_3D,he,we,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ve,Le,J.data)):t.texImage3D(n.TEXTURE_3D,0,we,J.width,J.height,J.depth,0,Ve,Le,J.data);else if(b.isFramebufferTexture){if(xe)if(ie)t.texStorage2D(n.TEXTURE_2D,he,we,J.width,J.height);else{let ee=J.width,D=J.height;for(let re=0;re<he;re++)t.texImage2D(n.TEXTURE_2D,re,we,ee,D,0,Ve,Le,null),ee>>=1,D>>=1}}else if(R.length>0&&Ke){ie&&xe&&t.texStorage2D(n.TEXTURE_2D,he,we,R[0].width,R[0].height);for(let ee=0,D=R.length;ee<D;ee++)ue=R[ee],ie?t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ve,Le,ue):t.texImage2D(n.TEXTURE_2D,ee,we,Ve,Le,ue);b.generateMipmaps=!1}else ie?(xe&&t.texStorage2D(n.TEXTURE_2D,he,we,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ve,Le,J)):t.texImage2D(n.TEXTURE_2D,0,we,Ve,Le,J);w(b,Ke)&&_(te),ve.__version=ne.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ge(E,b,B){if(b.image.length!==6)return;const te=Y(E,b),Q=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);const ne=i.get(Q);if(Q.version!==ne.__version||te===!0){t.activeTexture(n.TEXTURE0+B);const ve=Qe.getPrimaries(Qe.workingColorSpace),ce=b.colorSpace===Jt?null:Qe.getPrimaries(b.colorSpace),pe=b.colorSpace===Jt||ve===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ee=b.isCompressedTexture||b.image[0].isCompressedTexture,Oe=b.image[0]&&b.image[0].isDataTexture,J=[];for(let ee=0;ee<6;ee++)!Ee&&!Oe?J[ee]=v(b.image[ee],!1,!0,r.maxCubemapSize):J[ee]=Oe?b.image[ee].image:b.image[ee],J[ee]=Ne(b,J[ee]);const Ke=J[0],Ve=m(Ke)||o,Le=s.convert(b.format,b.colorSpace),we=s.convert(b.type),ue=A(b.internalFormat,Le,we,b.colorSpace),R=o&&b.isVideoTexture!==!0,ie=ne.__version===void 0||te===!0;let xe=C(b,Ke,Ve);H(n.TEXTURE_CUBE_MAP,b,Ve);let he;if(Ee){R&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,ue,Ke.width,Ke.height);for(let ee=0;ee<6;ee++){he=J[ee].mipmaps;for(let D=0;D<he.length;D++){const re=he[D];b.format!==hn?Le!==null?R?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D,0,0,re.width,re.height,Le,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D,0,0,re.width,re.height,Le,we,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D,ue,re.width,re.height,0,Le,we,re.data)}}}else{he=b.mipmaps,R&&ie&&(he.length>0&&xe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,ue,J[0].width,J[0].height));for(let ee=0;ee<6;ee++)if(Oe){R?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,J[ee].width,J[ee].height,Le,we,J[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ue,J[ee].width,J[ee].height,0,Le,we,J[ee].data);for(let D=0;D<he.length;D++){const le=he[D].image[ee].image;R?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D+1,0,0,le.width,le.height,Le,we,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D+1,ue,le.width,le.height,0,Le,we,le.data)}}else{R?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,we,J[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ue,Le,we,J[ee]);for(let D=0;D<he.length;D++){const re=he[D];R?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D+1,0,0,Le,we,re.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,D+1,ue,Le,we,re.image[ee])}}}w(b,Ve)&&_(n.TEXTURE_CUBE_MAP),ne.__version=Q.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function fe(E,b,B,te,Q,ne){const ve=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),pe=A(B.internalFormat,ve,ce,B.colorSpace);if(!i.get(b).__hasExternalTextures){const Oe=Math.max(1,b.width>>ne),J=Math.max(1,b.height>>ne);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ne,pe,Oe,J,b.depth,0,ve,ce,null):t.texImage2D(Q,ne,pe,Oe,J,0,ve,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),me(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Q,i.get(B).__webglTexture,0,Re(b)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,Q,i.get(B).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(E,b,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),b.depthBuffer&&!b.stencilBuffer){let te=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||me(b)){const Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Kn?te=n.DEPTH_COMPONENT32F:Q.type===Yn&&(te=n.DEPTH_COMPONENT24));const ne=Re(b);me(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,te,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,te,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(b.depthBuffer&&b.stencilBuffer){const te=Re(b);B&&me(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,b.width,b.height):me(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const te=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<te.length;Q++){const ne=te[Q],ve=s.convert(ne.format,ne.colorSpace),ce=s.convert(ne.type),pe=A(ne.internalFormat,ve,ce,ne.colorSpace),Ee=Re(b);B&&me(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,pe,b.width,b.height):me(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,pe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const te=i.get(b.depthTexture).__webglTexture,Q=Re(b);if(b.depthTexture.format===vi)me(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(b.depthTexture.format===lr)me(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ye(E){const b=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Pe(b.__webglFramebuffer,E)}else if(B){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]=n.createRenderbuffer(),Ae(b.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),Ae(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(E,b,B){const te=i.get(E);b!==void 0&&fe(te.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ye(E)}function F(E){const b=E.texture,B=i.get(E),te=i.get(b);E.addEventListener("dispose",L),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=b.version,a.memory.textures++);const Q=E.isWebGLCubeRenderTarget===!0,ne=E.isWebGLMultipleRenderTargets===!0,ve=m(E)||o;if(Q){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let pe=0;pe<b.mipmaps.length;pe++)B.__webglFramebuffer[ce][pe]=n.createFramebuffer()}else B.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)B.__webglFramebuffer[ce]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ne)if(r.drawBuffers){const ce=E.texture;for(let pe=0,Ee=ce.length;pe<Ee;pe++){const Oe=i.get(ce[pe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&me(E)===!1){const ce=ne?b:[b];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pe=0;pe<ce.length;pe++){const Ee=ce[pe];B.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[pe]);const Oe=s.convert(Ee.format,Ee.colorSpace),J=s.convert(Ee.type),Ke=A(Ee.internalFormat,Oe,J,Ee.colorSpace,E.isXRRenderTarget===!0),Ve=Re(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Ke,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,B.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),H(n.TEXTURE_CUBE_MAP,b,ve);for(let ce=0;ce<6;ce++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)fe(B.__webglFramebuffer[ce][pe],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else fe(B.__webglFramebuffer[ce],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);w(b,ve)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const ce=E.texture;for(let pe=0,Ee=ce.length;pe<Ee;pe++){const Oe=ce[pe],J=i.get(Oe);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),H(n.TEXTURE_2D,Oe,ve),fe(B.__webglFramebuffer,E,Oe,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),w(Oe,ve)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ce=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,te.__webglTexture),H(ce,b,ve),o&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)fe(B.__webglFramebuffer[pe],E,b,n.COLOR_ATTACHMENT0,ce,pe);else fe(B.__webglFramebuffer,E,b,n.COLOR_ATTACHMENT0,ce,0);w(b,ve)&&_(ce),t.unbindTexture()}E.depthBuffer&&ye(E)}function Ct(E){const b=m(E)||o,B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,Q=B.length;te<Q;te++){const ne=B[te];if(w(ne,b)){const ve=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(ne).__webglTexture;t.bindTexture(ve,ce),_(ve),t.unbindTexture()}}}function _e(E){if(o&&E.samples>0&&me(E)===!1){const b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],B=E.width,te=E.height;let Q=n.COLOR_BUFFER_BIT;const ne=[],ve=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(E),pe=E.isWebGLMultipleRenderTargets===!0;if(pe)for(let Ee=0;Ee<b.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ee=0;Ee<b.length;Ee++){ne.push(n.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&ne.push(ve);const Oe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Oe===!1&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]),Oe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),pe){const J=i.get(b[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,B,te,0,0,B,te,Q,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ee=0;Ee<b.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]);const Oe=i.get(b[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Re(E){return Math.min(r.maxSamples,E.samples)}function me(E){const b=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function tt(E){const b=a.render.frame;u.get(E)!==b&&(u.set(E,b),E.update())}function Ne(E,b){const B=E.colorSpace,te=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===da||B!==Nn&&B!==Jt&&(Qe.getTransfer(B)===nt?o===!1?e.has("EXT_sRGB")===!0&&te===hn?(E.format=da,E.minFilter=sn,E.generateMipmaps=!1):b=Qu.sRGBToLinear(b):(te!==hn||Q!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}this.allocateTextureUnit=T,this.resetTextureUnits=q,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=ke,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=me}function Q_(n,e,t){const i=t.isWebGL2;function r(s,a=Jt){let o;const l=Qe.getTransfer(a);if(s===ni)return n.UNSIGNED_BYTE;if(s===Gu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Wu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===bp)return n.BYTE;if(s===wp)return n.SHORT;if(s===Aa)return n.UNSIGNED_SHORT;if(s===Hu)return n.INT;if(s===Yn)return n.UNSIGNED_INT;if(s===Kn)return n.FLOAT;if(s===kr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===yp)return n.ALPHA;if(s===hn)return n.RGBA;if(s===Mp)return n.LUMINANCE;if(s===Ep)return n.LUMINANCE_ALPHA;if(s===vi)return n.DEPTH_COMPONENT;if(s===lr)return n.DEPTH_STENCIL;if(s===da)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Sp)return n.RED;if(s===ju)return n.RED_INTEGER;if(s===Tp)return n.RG;if(s===Xu)return n.RG_INTEGER;if(s===$u)return n.RGBA_INTEGER;if(s===_o||s===xo||s===bo||s===wo)if(l===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===_o)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===_o)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===wo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pl||s===Rl||s===Ll||s===Dl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Pl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ll)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ul||s===Il)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ul)return l===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Il)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Nl||s===Ol||s===Fl||s===Bl||s===kl||s===Vl||s===zl||s===Hl||s===Gl||s===Wl||s===jl||s===Xl||s===$l||s===ql)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Nl)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ol)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fl)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bl)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kl)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vl)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zl)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hl)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gl)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wl)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jl)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xl)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$l)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ql)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yo||s===Yl||s===Kl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===yo)return l===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Kl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cp||s===Zl||s===Jl||s===Ql)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===yo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Zl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ql)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===gi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class e0 extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ln extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t0={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ln;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class n0 extends Ci{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,f=null,g=null;const v=t.getContextAttributes();let m=null,h=null;const w=[],_=[],A=new Ue;let C=null;const P=new vt;P.layers.enable(1),P.viewport=new St;const S=new vt;S.layers.enable(2),S.viewport=new St;const L=[P,S],x=new e0;x.layers.enable(1),x.layers.enable(2);let M=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=w[H];return Y===void 0&&(Y=new jo,w[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=w[H];return Y===void 0&&(Y=new jo,w[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=w[H];return Y===void 0&&(Y=new jo,w[H]=Y),Y.getHandSpace()};function G(H){const Y=_.indexOf(H.inputSource);if(Y===-1)return;const se=w[Y];se!==void 0&&(se.update(H.inputSource,H.frame,c||a),se.dispatchEvent({type:H.type,data:H.inputSource}))}function q(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",T);for(let H=0;H<w.length;H++){const Y=_[H];Y!==null&&(_[H]=null,w[H].disconnect(Y))}M=null,O=null,e.setRenderTarget(m),f=null,p=null,d=null,r=null,h=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",q),r.addEventListener("inputsourceschange",T),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),h=new wi(f.framebufferWidth,f.framebufferHeight,{format:hn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Y=null,se=null,ge=null;v.depth&&(ge=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=v.stencil?lr:vi,se=v.stencil?gi:Yn);const fe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(fe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),h=new wi(p.textureWidth,p.textureHeight,{format:hn,type:ni,depthTexture:new ud(p.textureWidth,p.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ae=e.properties.get(h);Ae.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function T(H){for(let Y=0;Y<H.removed.length;Y++){const se=H.removed[Y],ge=_.indexOf(se);ge>=0&&(_[ge]=null,w[ge].disconnect(se))}for(let Y=0;Y<H.added.length;Y++){const se=H.added[Y];let ge=_.indexOf(se);if(ge===-1){for(let Ae=0;Ae<w.length;Ae++)if(Ae>=_.length){_.push(se),ge=Ae;break}else if(_[Ae]===null){_[Ae]=se,ge=Ae;break}if(ge===-1)break}const fe=w[ge];fe&&fe.connect(se)}}const I=new U,V=new U;function $(H,Y,se){I.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(se.matrixWorld);const ge=I.distanceTo(V),fe=Y.projectionMatrix.elements,Ae=se.projectionMatrix.elements,Pe=fe[14]/(fe[10]-1),ye=fe[14]/(fe[10]+1),ke=(fe[9]+1)/fe[5],F=(fe[9]-1)/fe[5],Ct=(fe[8]-1)/fe[0],_e=(Ae[8]+1)/Ae[0],Re=Pe*Ct,me=Pe*_e,tt=ge/(-Ct+_e),Ne=tt*-Ct;Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ne),H.translateZ(tt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const E=Pe+tt,b=ye+tt,B=Re-Ne,te=me+(ge-Ne),Q=ke*ye/b*E,ne=F*ye/b*E;H.projectionMatrix.makePerspective(B,te,Q,ne,E,b),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;x.near=S.near=P.near=H.near,x.far=S.far=P.far=H.far,(M!==x.near||O!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,O=x.far);const Y=H.parent,se=x.cameras;X(x,Y);for(let ge=0;ge<se.length;ge++)X(se[ge],Y);se.length===2?$(x,P,S):x.projectionMatrix.copy(P.projectionMatrix),j(H,x,Y)};function j(H,Y,se){se===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(se.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Vr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(H){l=H,p!==null&&(p.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)};let Z=null;function K(H,Y){if(u=Y.getViewerPose(c||a),g=Y,u!==null){const se=u.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let ge=!1;se.length!==x.cameras.length&&(x.cameras.length=0,ge=!0);for(let fe=0;fe<se.length;fe++){const Ae=se[fe];let Pe=null;if(f!==null)Pe=f.getViewport(Ae);else{const ke=d.getViewSubImage(p,Ae);Pe=ke.viewport,fe===0&&(e.setRenderTargetTextures(h,ke.colorTexture,p.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(h))}let ye=L[fe];ye===void 0&&(ye=new vt,ye.layers.enable(fe),ye.viewport=new St,L[fe]=ye),ye.matrix.fromArray(Ae.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ae.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),fe===0&&(x.matrix.copy(ye.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ge===!0&&x.cameras.push(ye)}}for(let se=0;se<w.length;se++){const ge=_[se],fe=w[se];ge!==null&&fe!==void 0&&fe.update(ge,Y,c||a)}Z&&Z(H,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const ae=new cd;ae.setAnimationLoop(K),this.setAnimationLoop=function(H){Z=H},this.dispose=function(){}}}function i0(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,od(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,w,_,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),p(m,h),h.isMeshPhysicalMaterial&&f(m,h,A)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,w,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Gt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Gt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const w=e.get(h).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*_,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,w,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Gt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const w=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function r0(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,_){const A=_.program;i.uniformBlockBinding(w,A)}function c(w,_){let A=r[w.id];A===void 0&&(g(w),A=u(w),r[w.id]=A,w.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(w,C);const P=e.render.frame;s[w.id]!==P&&(p(w),s[w.id]=P)}function u(w){const _=d();w.__bindingPointIndex=_;const A=n.createBuffer(),C=w.__size,P=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,A),A}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const _=r[w.id],A=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let P=0,S=A.length;P<S;P++){const L=Array.isArray(A[P])?A[P]:[A[P]];for(let x=0,M=L.length;x<M;x++){const O=L[x];if(f(O,P,x,C)===!0){const G=O.__offset,q=Array.isArray(O.value)?O.value:[O.value];let T=0;for(let I=0;I<q.length;I++){const V=q[I],$=v(V);typeof V=="number"||typeof V=="boolean"?(O.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,G+T,O.__data)):V.isMatrix3?(O.__data[0]=V.elements[0],O.__data[1]=V.elements[1],O.__data[2]=V.elements[2],O.__data[3]=0,O.__data[4]=V.elements[3],O.__data[5]=V.elements[4],O.__data[6]=V.elements[5],O.__data[7]=0,O.__data[8]=V.elements[6],O.__data[9]=V.elements[7],O.__data[10]=V.elements[8],O.__data[11]=0):(V.toArray(O.__data,T),T+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,_,A,C){const P=w.value,S=_+"_"+A;if(C[S]===void 0)return typeof P=="number"||typeof P=="boolean"?C[S]=P:C[S]=P.clone(),!0;{const L=C[S];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return C[S]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function g(w){const _=w.uniforms;let A=0;const C=16;for(let S=0,L=_.length;S<L;S++){const x=Array.isArray(_[S])?_[S]:[_[S]];for(let M=0,O=x.length;M<O;M++){const G=x[M],q=Array.isArray(G.value)?G.value:[G.value];for(let T=0,I=q.length;T<I;T++){const V=q[T],$=v(V),X=A%C;X!==0&&C-X<$.boundary&&(A+=C-X),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=$.storage}}}const P=A%C;return P>0&&(A+=C-P),w.__size=A,w.__cache={},this}function v(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function m(w){const _=w.target;_.removeEventListener("dispose",m);const A=a.indexOf(_.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Ia{constructor(e={}){const{canvas:t=Qp(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const h=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;const _=this;let A=!1,C=0,P=0,S=null,L=-1,x=null;const M=new St,O=new St;let G=null;const q=new Se(0);let T=0,I=t.width,V=t.height,$=1,X=null,j=null;const Z=new St(0,0,I,V),K=new St(0,0,I,V);let ae=!1;const H=new Da;let Y=!1,se=!1,ge=null;const fe=new mt,Ae=new Ue,Pe=new U,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return S===null?$:1}let F=i;function Ct(y,N){for(let z=0;z<y.length;z++){const W=y[z],k=t.getContext(W,N);if(k!==null)return k}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ca}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",re,!1),F===null){const N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),F=Ct(N,y),F===null)throw Ct(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let _e,Re,me,tt,Ne,E,b,B,te,Q,ne,ve,ce,pe,Ee,Oe,J,Ke,Ve,Le,we,ue,R,ie;function xe(){_e=new fv(F),Re=new lv(F,_e,e),_e.init(Re),ue=new Q_(F,_e,Re),me=new Z_(F,_e,Re),tt=new vv(F),Ne=new F_,E=new J_(F,_e,me,Ne,Re,ue,tt),b=new uv(_),B=new pv(_),te=new Sf(F,Re),R=new ov(F,_e,te,Re),Q=new mv(F,te,tt,R),ne=new wv(F,Q,te,tt),Ve=new bv(F,Re,E),Oe=new cv(Ne),ve=new O_(_,b,B,_e,Re,R,Oe),ce=new i0(_,Ne),pe=new k_,Ee=new j_(_e,Re),Ke=new sv(_,b,B,me,ne,p,l),J=new K_(_,ne,Re),ie=new r0(F,tt,Re,me),Le=new av(F,_e,tt,Re),we=new gv(F,_e,tt,Re),tt.programs=ve.programs,_.capabilities=Re,_.extensions=_e,_.properties=Ne,_.renderLists=pe,_.shadowMap=J,_.state=me,_.info=tt}xe();const he=new n0(_,F);this.xr=he,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=_e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=_e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(I,V,!1))},this.getSize=function(y){return y.set(I,V)},this.setSize=function(y,N,z=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=y,V=N,t.width=Math.floor(y*$),t.height=Math.floor(N*$),z===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(I*$,V*$).floor()},this.setDrawingBufferSize=function(y,N,z){I=y,V=N,$=z,t.width=Math.floor(y*z),t.height=Math.floor(N*z),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(M)},this.getViewport=function(y){return y.copy(Z)},this.setViewport=function(y,N,z,W){y.isVector4?Z.set(y.x,y.y,y.z,y.w):Z.set(y,N,z,W),me.viewport(M.copy(Z).multiplyScalar($).floor())},this.getScissor=function(y){return y.copy(K)},this.setScissor=function(y,N,z,W){y.isVector4?K.set(y.x,y.y,y.z,y.w):K.set(y,N,z,W),me.scissor(O.copy(K).multiplyScalar($).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(y){me.setScissorTest(ae=y)},this.setOpaqueSort=function(y){X=y},this.setTransparentSort=function(y){j=y},this.getClearColor=function(y){return y.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(y=!0,N=!0,z=!0){let W=0;if(y){let k=!1;if(S!==null){const de=S.texture.format;k=de===$u||de===Xu||de===ju}if(k){const de=S.texture.type,be=de===ni||de===Yn||de===Aa||de===gi||de===Gu||de===Wu,Ce=Ke.getClearColor(),De=Ke.getClearAlpha(),ze=Ce.r,Ie=Ce.g,Fe=Ce.b;be?(f[0]=ze,f[1]=Ie,f[2]=Fe,f[3]=De,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=ze,g[1]=Ie,g[2]=Fe,g[3]=De,F.clearBufferiv(F.COLOR,0,g))}else W|=F.COLOR_BUFFER_BIT}N&&(W|=F.DEPTH_BUFFER_BIT),z&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",re,!1),pe.dispose(),Ee.dispose(),Ne.dispose(),b.dispose(),B.dispose(),ne.dispose(),R.dispose(),ie.dispose(),ve.dispose(),he.dispose(),he.removeEventListener("sessionstart",dt),he.removeEventListener("sessionend",qe),ge&&(ge.dispose(),ge=null),pt.stop()};function ee(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=tt.autoReset,N=J.enabled,z=J.autoUpdate,W=J.needsUpdate,k=J.type;xe(),tt.autoReset=y,J.enabled=N,J.autoUpdate=z,J.needsUpdate=W,J.type=k}function re(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function le(y){const N=y.target;N.removeEventListener("dispose",le),Te(N)}function Te(y){Me(y),Ne.remove(y)}function Me(y){const N=Ne.get(y).programs;N!==void 0&&(N.forEach(function(z){ve.releaseProgram(z)}),y.isShaderMaterial&&ve.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,z,W,k,de){N===null&&(N=ye);const be=k.isMesh&&k.matrixWorld.determinant()<0,Ce=Nh(y,N,z,W,k);me.setMaterial(W,be);let De=z.index,ze=1;if(W.wireframe===!0){if(De=Q.getWireframeAttribute(z),De===void 0)return;ze=2}const Ie=z.drawRange,Fe=z.attributes.position;let ht=Ie.start*ze,Xt=(Ie.start+Ie.count)*ze;de!==null&&(ht=Math.max(ht,de.start*ze),Xt=Math.min(Xt,(de.start+de.count)*ze)),De!==null?(ht=Math.max(ht,0),Xt=Math.min(Xt,De.count)):Fe!=null&&(ht=Math.max(ht,0),Xt=Math.min(Xt,Fe.count));const wt=Xt-ht;if(wt<0||wt===1/0)return;R.setup(k,W,Ce,z,De);let wn,st=Le;if(De!==null&&(wn=te.get(De),st=we,st.setIndex(wn)),k.isMesh)W.wireframe===!0?(me.setLineWidth(W.wireframeLinewidth*ke()),st.setMode(F.LINES)):st.setMode(F.TRIANGLES);else if(k.isLine){let We=W.linewidth;We===void 0&&(We=1),me.setLineWidth(We*ke()),k.isLineSegments?st.setMode(F.LINES):k.isLineLoop?st.setMode(F.LINE_LOOP):st.setMode(F.LINE_STRIP)}else k.isPoints?st.setMode(F.POINTS):k.isSprite&&st.setMode(F.TRIANGLES);if(k.isBatchedMesh)st.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)st.renderInstances(ht,wt,k.count);else if(z.isInstancedBufferGeometry){const We=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,po=Math.min(z.instanceCount,We);st.renderInstances(ht,wt,po)}else st.render(ht,wt)};function je(y,N,z){y.transparent===!0&&y.side===Zt&&y.forceSinglePass===!1?(y.side=Gt,y.needsUpdate=!0,ls(y,N,z),y.side=_n,y.needsUpdate=!0,ls(y,N,z),y.side=Zt):ls(y,N,z)}this.compile=function(y,N,z=null){z===null&&(z=y),m=Ee.get(z),m.init(),w.push(m),z.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),y!==z&&y.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(_._useLegacyLights);const W=new Set;return y.traverse(function(k){const de=k.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){const Ce=de[be];je(Ce,z,k),W.add(Ce)}else je(de,z,k),W.add(de)}),w.pop(),m=null,W},this.compileAsync=function(y,N,z=null){const W=this.compile(y,N,z);return new Promise(k=>{function de(){if(W.forEach(function(be){Ne.get(be).currentProgram.isReady()&&W.delete(be)}),W.size===0){k(y);return}setTimeout(de,10)}_e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Xe=null;function lt(y){Xe&&Xe(y)}function dt(){pt.stop()}function qe(){pt.start()}const pt=new cd;pt.setAnimationLoop(lt),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(y){Xe=y,he.setAnimationLoop(y),y===null?pt.stop():pt.start()},he.addEventListener("sessionstart",dt),he.addEventListener("sessionend",qe),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,N,S),m=Ee.get(y,w.length),m.init(),w.push(m),fe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H.setFromProjectionMatrix(fe),se=this.localClippingEnabled,Y=Oe.init(this.clippingPlanes,se),v=pe.get(y,h.length),v.init(),h.push(v),pn(y,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(X,j),this.info.render.frame++,Y===!0&&Oe.beginShadows();const z=m.state.shadowsArray;if(J.render(z,y,N),Y===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(v,y),m.setupLights(_._useLegacyLights),N.isArrayCamera){const W=N.cameras;for(let k=0,de=W.length;k<de;k++){const be=W[k];gl(v,y,be,be.viewport)}}else gl(v,y,N);S!==null&&(E.updateMultisampleRenderTarget(S),E.updateRenderTargetMipmap(S)),y.isScene===!0&&y.onAfterRender(_,y,N),R.resetDefaultState(),L=-1,x=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function pn(y,N,z,W){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||H.intersectsSprite(y)){W&&Pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(fe);const be=ne.update(y),Ce=y.material;Ce.visible&&v.push(y,be,Ce,z,Pe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||H.intersectsObject(y))){const be=ne.update(y),Ce=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pe.copy(y.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Pe.copy(be.boundingSphere.center)),Pe.applyMatrix4(y.matrixWorld).applyMatrix4(fe)),Array.isArray(Ce)){const De=be.groups;for(let ze=0,Ie=De.length;ze<Ie;ze++){const Fe=De[ze],ht=Ce[Fe.materialIndex];ht&&ht.visible&&v.push(y,be,ht,z,Pe.z,Fe)}}else Ce.visible&&v.push(y,be,Ce,z,Pe.z,null)}}const de=y.children;for(let be=0,Ce=de.length;be<Ce;be++)pn(de[be],N,z,W)}function gl(y,N,z,W){const k=y.opaque,de=y.transmissive,be=y.transparent;m.setupLightsView(z),Y===!0&&Oe.setGlobalState(_.clippingPlanes,z),de.length>0&&Ih(k,de,N,z),W&&me.viewport(M.copy(W)),k.length>0&&as(k,N,z),de.length>0&&as(de,N,z),be.length>0&&as(be,N,z),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Ih(y,N,z,W){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const de=Re.isWebGL2;ge===null&&(ge=new wi(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?kr:ni,minFilter:Br,samples:de?4:0})),_.getDrawingBufferSize(Ae),de?ge.setSize(Ae.x,Ae.y):ge.setSize(Ws(Ae.x),Ws(Ae.y));const be=_.getRenderTarget();_.setRenderTarget(ge),_.getClearColor(q),T=_.getClearAlpha(),T<1&&_.setClearColor(16777215,.5),_.clear();const Ce=_.toneMapping;_.toneMapping=ti,as(y,z,W),E.updateMultisampleRenderTarget(ge),E.updateRenderTargetMipmap(ge);let De=!1;for(let ze=0,Ie=N.length;ze<Ie;ze++){const Fe=N[ze],ht=Fe.object,Xt=Fe.geometry,wt=Fe.material,wn=Fe.group;if(wt.side===Zt&&ht.layers.test(W.layers)){const st=wt.side;wt.side=Gt,wt.needsUpdate=!0,vl(ht,z,W,Xt,wt,wn),wt.side=st,wt.needsUpdate=!0,De=!0}}De===!0&&(E.updateMultisampleRenderTarget(ge),E.updateRenderTargetMipmap(ge)),_.setRenderTarget(be),_.setClearColor(q,T),_.toneMapping=Ce}function as(y,N,z){const W=N.isScene===!0?N.overrideMaterial:null;for(let k=0,de=y.length;k<de;k++){const be=y[k],Ce=be.object,De=be.geometry,ze=W===null?be.material:W,Ie=be.group;Ce.layers.test(z.layers)&&vl(Ce,N,z,De,ze,Ie)}}function vl(y,N,z,W,k,de){y.onBeforeRender(_,N,z,W,k,de),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(_,N,z,W,y,de),k.transparent===!0&&k.side===Zt&&k.forceSinglePass===!1?(k.side=Gt,k.needsUpdate=!0,_.renderBufferDirect(z,N,W,k,y,de),k.side=_n,k.needsUpdate=!0,_.renderBufferDirect(z,N,W,k,y,de),k.side=Zt):_.renderBufferDirect(z,N,W,k,y,de),y.onAfterRender(_,N,z,W,k,de)}function ls(y,N,z){N.isScene!==!0&&(N=ye);const W=Ne.get(y),k=m.state.lights,de=m.state.shadowsArray,be=k.state.version,Ce=ve.getParameters(y,k.state,de,N,z),De=ve.getProgramCacheKey(Ce);let ze=W.programs;W.environment=y.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(y.isMeshStandardMaterial?B:b).get(y.envMap||W.environment),ze===void 0&&(y.addEventListener("dispose",le),ze=new Map,W.programs=ze);let Ie=ze.get(De);if(Ie!==void 0){if(W.currentProgram===Ie&&W.lightsStateVersion===be)return xl(y,Ce),Ie}else Ce.uniforms=ve.getUniforms(y),y.onBuild(z,Ce,_),y.onBeforeCompile(Ce,_),Ie=ve.acquireProgram(Ce,De),ze.set(De,Ie),W.uniforms=Ce.uniforms;const Fe=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Fe.clippingPlanes=Oe.uniform),xl(y,Ce),W.needsLights=Fh(y),W.lightsStateVersion=be,W.needsLights&&(Fe.ambientLightColor.value=k.state.ambient,Fe.lightProbe.value=k.state.probe,Fe.directionalLights.value=k.state.directional,Fe.directionalLightShadows.value=k.state.directionalShadow,Fe.spotLights.value=k.state.spot,Fe.spotLightShadows.value=k.state.spotShadow,Fe.rectAreaLights.value=k.state.rectArea,Fe.ltc_1.value=k.state.rectAreaLTC1,Fe.ltc_2.value=k.state.rectAreaLTC2,Fe.pointLights.value=k.state.point,Fe.pointLightShadows.value=k.state.pointShadow,Fe.hemisphereLights.value=k.state.hemi,Fe.directionalShadowMap.value=k.state.directionalShadowMap,Fe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Fe.spotShadowMap.value=k.state.spotShadowMap,Fe.spotLightMatrix.value=k.state.spotLightMatrix,Fe.spotLightMap.value=k.state.spotLightMap,Fe.pointShadowMap.value=k.state.pointShadowMap,Fe.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Ie,W.uniformsList=null,Ie}function _l(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Os.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function xl(y,N){const z=Ne.get(y);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Nh(y,N,z,W,k){N.isScene!==!0&&(N=ye),E.resetTextureUnits();const de=N.fog,be=W.isMeshStandardMaterial?N.environment:null,Ce=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Nn,De=(W.isMeshStandardMaterial?B:b).get(W.envMap||be),ze=W.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ie=!!z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!z.morphAttributes.position,ht=!!z.morphAttributes.normal,Xt=!!z.morphAttributes.color;let wt=ti;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(wt=_.toneMapping);const wn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=wn!==void 0?wn.length:0,We=Ne.get(W),po=m.state.lights;if(Y===!0&&(se===!0||y!==x)){const tn=y===x&&W.id===L;Oe.setState(W,y,tn)}let ct=!1;W.version===We.__version?(We.needsLights&&We.lightsStateVersion!==po.state.version||We.outputColorSpace!==Ce||k.isBatchedMesh&&We.batching===!1||!k.isBatchedMesh&&We.batching===!0||k.isInstancedMesh&&We.instancing===!1||!k.isInstancedMesh&&We.instancing===!0||k.isSkinnedMesh&&We.skinning===!1||!k.isSkinnedMesh&&We.skinning===!0||k.isInstancedMesh&&We.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&We.instancingColor===!1&&k.instanceColor!==null||We.envMap!==De||W.fog===!0&&We.fog!==de||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Oe.numPlanes||We.numIntersection!==Oe.numIntersection)||We.vertexAlphas!==ze||We.vertexTangents!==Ie||We.morphTargets!==Fe||We.morphNormals!==ht||We.morphColors!==Xt||We.toneMapping!==wt||Re.isWebGL2===!0&&We.morphTargetsCount!==st)&&(ct=!0):(ct=!0,We.__version=W.version);let oi=We.currentProgram;ct===!0&&(oi=ls(W,N,k));let bl=!1,br=!1,fo=!1;const Rt=oi.getUniforms(),ai=We.uniforms;if(me.useProgram(oi.program)&&(bl=!0,br=!0,fo=!0),W.id!==L&&(L=W.id,br=!0),bl||x!==y){Rt.setValue(F,"projectionMatrix",y.projectionMatrix),Rt.setValue(F,"viewMatrix",y.matrixWorldInverse);const tn=Rt.map.cameraPosition;tn!==void 0&&tn.setValue(F,Pe.setFromMatrixPosition(y.matrixWorld)),Re.logarithmicDepthBuffer&&Rt.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Rt.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,br=!0,fo=!0)}if(k.isSkinnedMesh){Rt.setOptional(F,k,"bindMatrix"),Rt.setOptional(F,k,"bindMatrixInverse");const tn=k.skeleton;tn&&(Re.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Rt.setValue(F,"boneTexture",tn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Rt.setOptional(F,k,"batchingTexture"),Rt.setValue(F,"batchingTexture",k._matricesTexture,E));const mo=z.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0&&Re.isWebGL2===!0)&&Ve.update(k,z,oi),(br||We.receiveShadow!==k.receiveShadow)&&(We.receiveShadow=k.receiveShadow,Rt.setValue(F,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ai.envMap.value=De,ai.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),br&&(Rt.setValue(F,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&Oh(ai,fo),de&&W.fog===!0&&ce.refreshFogUniforms(ai,de),ce.refreshMaterialUniforms(ai,W,$,V,ge),Os.upload(F,_l(We),ai,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Os.upload(F,_l(We),ai,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Rt.setValue(F,"center",k.center),Rt.setValue(F,"modelViewMatrix",k.modelViewMatrix),Rt.setValue(F,"normalMatrix",k.normalMatrix),Rt.setValue(F,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const tn=W.uniformsGroups;for(let go=0,Bh=tn.length;go<Bh;go++)if(Re.isWebGL2){const wl=tn[go];ie.update(wl,oi),ie.bind(wl,oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return oi}function Oh(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Fh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(y,N,z){Ne.get(y.texture).__webglTexture=N,Ne.get(y.depthTexture).__webglTexture=z;const W=Ne.get(y);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=z===void 0,W.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,N){const z=Ne.get(y);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,z=0){S=y,C=N,P=z;let W=!0,k=null,de=!1,be=!1;if(y){const De=Ne.get(y);De.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):De.__webglFramebuffer===void 0?E.setupRenderTarget(y):De.__hasExternalTextures&&E.rebindTextures(y,Ne.get(y.texture).__webglTexture,Ne.get(y.depthTexture).__webglTexture);const ze=y.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(be=!0);const Ie=Ne.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?k=Ie[N][z]:k=Ie[N],de=!0):Re.isWebGL2&&y.samples>0&&E.useMultisampledRTT(y)===!1?k=Ne.get(y).__webglMultisampledFramebuffer:Array.isArray(Ie)?k=Ie[z]:k=Ie,M.copy(y.viewport),O.copy(y.scissor),G=y.scissorTest}else M.copy(Z).multiplyScalar($).floor(),O.copy(K).multiplyScalar($).floor(),G=ae;if(me.bindFramebuffer(F.FRAMEBUFFER,k)&&Re.drawBuffers&&W&&me.drawBuffers(y,k),me.viewport(M),me.scissor(O),me.setScissorTest(G),de){const De=Ne.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,De.__webglTexture,z)}else if(be){const De=Ne.get(y.texture),ze=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.__webglTexture,z||0,ze)}L=-1},this.readRenderTargetPixels=function(y,N,z,W,k,de,be){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){me.bindFramebuffer(F.FRAMEBUFFER,Ce);try{const De=y.texture,ze=De.format,Ie=De.type;if(ze!==hn&&ue.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ie===kr&&(_e.has("EXT_color_buffer_half_float")||Re.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ie!==ni&&ue.convert(Ie)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Kn&&(Re.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-W&&z>=0&&z<=y.height-k&&F.readPixels(N,z,W,k,ue.convert(ze),ue.convert(Ie),de)}finally{const De=S!==null?Ne.get(S).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(y,N,z=0){const W=Math.pow(2,-z),k=Math.floor(N.image.width*W),de=Math.floor(N.image.height*W);E.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,y.x,y.y,k,de),me.unbindTexture()},this.copyTextureToTexture=function(y,N,z,W=0){const k=N.image.width,de=N.image.height,be=ue.convert(z.format),Ce=ue.convert(z.type);E.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,y.x,y.y,k,de,be,Ce,N.image.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,y.x,y.y,N.mipmaps[0].width,N.mipmaps[0].height,be,N.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,y.x,y.y,be,Ce,N.image),W===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(y,N,z,W,k=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=y.max.x-y.min.x+1,be=y.max.y-y.min.y+1,Ce=y.max.z-y.min.z+1,De=ue.convert(W.format),ze=ue.convert(W.type);let Ie;if(W.isData3DTexture)E.setTexture3D(W,0),Ie=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)E.setTexture2DArray(W,0),Ie=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Fe=F.getParameter(F.UNPACK_ROW_LENGTH),ht=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Xt=F.getParameter(F.UNPACK_SKIP_PIXELS),wt=F.getParameter(F.UNPACK_SKIP_ROWS),wn=F.getParameter(F.UNPACK_SKIP_IMAGES),st=z.isCompressedTexture?z.mipmaps[k]:z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,st.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,y.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,y.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,y.min.z),z.isDataTexture||z.isData3DTexture?F.texSubImage3D(Ie,k,N.x,N.y,N.z,de,be,Ce,De,ze,st.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ie,k,N.x,N.y,N.z,de,be,Ce,De,st.data)):F.texSubImage3D(Ie,k,N.x,N.y,N.z,de,be,Ce,De,ze,st),F.pixelStorei(F.UNPACK_ROW_LENGTH,Fe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xt),F.pixelStorei(F.UNPACK_SKIP_ROWS,wt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,wn),k===0&&W.generateMipmaps&&F.generateMipmap(Ie),me.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),me.unbindTexture()},this.resetState=function(){C=0,P=0,S=null,me.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Pa?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===eo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?_i:Yu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_i?Mt:Nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class s0 extends Ia{}s0.prototype.isWebGL1Renderer=!0;class gd extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Yt extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hc=new U,Gc=new U,Wc=new mt,Xo=new La,Ls=new to;class Kt extends Pt{constructor(e=new ot,t=new Yt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Hc.fromBufferAttribute(t,r-1),Gc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Hc.distanceTo(Gc);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(r),Ls.radius+=s,e.ray.intersectsSphere(Ls)===!1)return;Wc.copy(r).invert(),Xo.copy(e.ray).applyMatrix4(Wc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,u=new U,d=new U,p=new U,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const h=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let _=h,A=w-1;_<A;_+=f){const C=g.getX(_),P=g.getX(_+1);if(c.fromBufferAttribute(m,C),u.fromBufferAttribute(m,P),Xo.distanceSqToSegment(c,u,p,d)>l)continue;p.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(p);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,a.start),w=Math.min(m.count,a.start+a.count);for(let _=h,A=w-1;_<A;_+=f){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),Xo.distanceSqToSegment(c,u,p,d)>l)continue;p.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(p);P<e.near||P>e.far||t.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const jc=new U,Xc=new U;class vd extends Kt{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)jc.fromBufferAttribute(t,r),Xc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+jc.distanceTo(Xc);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oE extends Nt{constructor(e,t,i,r,s,a,o,l,c,u,d,p){super(null,a,o,l,c,u,r,s,d,p),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class o0 extends Nt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $c extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ku,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const qc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class a0{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const l0=new a0;class Na{constructor(e){this.manager=e!==void 0?e:l0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Na.DEFAULT_MATERIAL_NAME="__DEFAULT";class c0 extends Na{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=qc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=zr("img");function l(){u(),qc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class u0 extends Na{constructor(e){super(e)}load(e,t,i,r){const s=new Nt,a=new c0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class _d extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $o=new mt,Yc=new U,Kc=new U;class d0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yc),Kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kc),t.updateMatrixWorld(),$o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class h0 extends d0{constructor(){super(new Un(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p0 extends _d{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new h0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class f0 extends _d{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Oa="\\[\\]\\.:\\/",m0=new RegExp("["+Oa+"]","g"),Fa="[^"+Oa+"]",g0="[^"+Oa.replace("\\.","")+"]",v0=/((?:WC+[\/:])*)/.source.replace("WC",Fa),_0=/(WCOD+)?/.source.replace("WCOD",g0),x0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fa),b0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fa),w0=new RegExp("^"+v0+_0+x0+b0+"$"),y0=["material","materials","bones","map"];class M0{constructor(e,t,i){const r=i||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Je{constructor(e,t,i){this.path=t,this.parsedPath=i||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,i):new Je(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(e){const t=w0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);y0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=M0;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ba{constructor(e){this.value=e}clone(){return new Ba(this.value.clone===void 0?this.value:this.value.clone())}}class Zc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class E0 extends vd{constructor(e=10,t=10,i=4473924,r=8947848){i=new Se(i),r=new Se(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let p=0,f=0,g=-o;p<=t;p++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=p===s?i:r;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new ot;u.setAttribute("position",new Tt(l,3)),u.setAttribute("color",new Tt(c,3));const d=new Yt({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class S0 extends vd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new ot;r.setAttribute("position",new Tt(t,3)),r.setAttribute("color",new Tt(i,3));const s=new Yt({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Se,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ca);const Jc={type:"change"},qo={type:"start"},Qc={type:"end"},Ds=new La,eu=new qn,T0=Math.cos(70*Jp.DEG2RAD);class C0 extends Ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Ee),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ee),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Jc),i.update(),s=r.NONE},this.update=function(){const R=new U,ie=new yi().setFromUnitVectors(e.up,new U(0,1,0)),xe=ie.clone().invert(),he=new U,ee=new yi,D=new U,re=2*Math.PI;return function(Te=null){const Me=i.object.position;R.copy(Me).sub(i.target),R.applyQuaternion(ie),o.setFromVector3(R),i.autoRotate&&s===r.NONE&&G(M(Te)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let je=i.minAzimuthAngle,Xe=i.maxAzimuthAngle;isFinite(je)&&isFinite(Xe)&&(je<-Math.PI?je+=re:je>Math.PI&&(je-=re),Xe<-Math.PI?Xe+=re:Xe>Math.PI&&(Xe-=re),je<=Xe?o.theta=Math.max(je,Math.min(Xe,o.theta)):o.theta=o.theta>(je+Xe)/2?Math.max(je,o.theta):Math.min(Xe,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&P||i.object.isOrthographicCamera?o.radius=Z(o.radius):o.radius=Z(o.radius*c),R.setFromSpherical(o),R.applyQuaternion(xe),Me.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let lt=!1;if(i.zoomToCursor&&P){let dt=null;if(i.object.isPerspectiveCamera){const qe=R.length();dt=Z(qe*c);const pt=qe-dt;i.object.position.addScaledVector(A,pt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const qe=new U(C.x,C.y,0);qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),lt=!0;const pt=new U(C.x,C.y,0);pt.unproject(i.object),i.object.position.sub(pt).add(qe),i.object.updateMatrixWorld(),dt=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;dt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(dt).add(i.object.position):(Ds.origin.copy(i.object.position),Ds.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ds.direction))<T0?e.lookAt(i.target):(eu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ds.intersectPlane(eu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),lt=!0);return c=1,P=!1,lt||he.distanceToSquared(i.object.position)>a||8*(1-ee.dot(i.object.quaternion))>a||D.distanceToSquared(i.target)>0?(i.dispatchEvent(Jc),he.copy(i.object.position),ee.copy(i.object.quaternion),D.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ke),i.domElement.removeEventListener("pointerdown",E),i.domElement.removeEventListener("pointercancel",B),i.domElement.removeEventListener("wheel",ne),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",B),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ee),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Zc,l=new Zc;let c=1;const u=new U,d=new Ue,p=new Ue,f=new Ue,g=new Ue,v=new Ue,m=new Ue,h=new Ue,w=new Ue,_=new Ue,A=new U,C=new Ue;let P=!1;const S=[],L={};let x=!1;function M(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function O(R){const ie=Math.abs(R*.01);return Math.pow(.95,i.zoomSpeed*ie)}function G(R){l.theta-=R}function q(R){l.phi-=R}const T=function(){const R=new U;return function(xe,he){R.setFromMatrixColumn(he,0),R.multiplyScalar(-xe),u.add(R)}}(),I=function(){const R=new U;return function(xe,he){i.screenSpacePanning===!0?R.setFromMatrixColumn(he,1):(R.setFromMatrixColumn(he,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(xe),u.add(R)}}(),V=function(){const R=new U;return function(xe,he){const ee=i.domElement;if(i.object.isPerspectiveCamera){const D=i.object.position;R.copy(D).sub(i.target);let re=R.length();re*=Math.tan(i.object.fov/2*Math.PI/180),T(2*xe*re/ee.clientHeight,i.object.matrix),I(2*he*re/ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(T(xe*(i.object.right-i.object.left)/i.object.zoom/ee.clientWidth,i.object.matrix),I(he*(i.object.top-i.object.bottom)/i.object.zoom/ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(R,ie){if(!i.zoomToCursor)return;P=!0;const xe=i.domElement.getBoundingClientRect(),he=R-xe.left,ee=ie-xe.top,D=xe.width,re=xe.height;C.x=he/D*2-1,C.y=-(ee/re)*2+1,A.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function Z(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function K(R){d.set(R.clientX,R.clientY)}function ae(R){j(R.clientX,R.clientX),h.set(R.clientX,R.clientY)}function H(R){g.set(R.clientX,R.clientY)}function Y(R){p.set(R.clientX,R.clientY),f.subVectors(p,d).multiplyScalar(i.rotateSpeed);const ie=i.domElement;G(2*Math.PI*f.x/ie.clientHeight),q(2*Math.PI*f.y/ie.clientHeight),d.copy(p),i.update()}function se(R){w.set(R.clientX,R.clientY),_.subVectors(w,h),_.y>0?$(O(_.y)):_.y<0&&X(O(_.y)),h.copy(w),i.update()}function ge(R){v.set(R.clientX,R.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),V(m.x,m.y),g.copy(v),i.update()}function fe(R){j(R.clientX,R.clientY),R.deltaY<0?X(O(R.deltaY)):R.deltaY>0&&$(O(R.deltaY)),i.update()}function Ae(R){let ie=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,i.keyPanSpeed),ie=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,-i.keyPanSpeed),ie=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(i.keyPanSpeed,0),ie=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(-i.keyPanSpeed,0),ie=!0;break}ie&&(R.preventDefault(),i.update())}function Pe(R){if(S.length===1)d.set(R.pageX,R.pageY);else{const ie=ue(R),xe=.5*(R.pageX+ie.x),he=.5*(R.pageY+ie.y);d.set(xe,he)}}function ye(R){if(S.length===1)g.set(R.pageX,R.pageY);else{const ie=ue(R),xe=.5*(R.pageX+ie.x),he=.5*(R.pageY+ie.y);g.set(xe,he)}}function ke(R){const ie=ue(R),xe=R.pageX-ie.x,he=R.pageY-ie.y,ee=Math.sqrt(xe*xe+he*he);h.set(0,ee)}function F(R){i.enableZoom&&ke(R),i.enablePan&&ye(R)}function Ct(R){i.enableZoom&&ke(R),i.enableRotate&&Pe(R)}function _e(R){if(S.length==1)p.set(R.pageX,R.pageY);else{const xe=ue(R),he=.5*(R.pageX+xe.x),ee=.5*(R.pageY+xe.y);p.set(he,ee)}f.subVectors(p,d).multiplyScalar(i.rotateSpeed);const ie=i.domElement;G(2*Math.PI*f.x/ie.clientHeight),q(2*Math.PI*f.y/ie.clientHeight),d.copy(p)}function Re(R){if(S.length===1)v.set(R.pageX,R.pageY);else{const ie=ue(R),xe=.5*(R.pageX+ie.x),he=.5*(R.pageY+ie.y);v.set(xe,he)}m.subVectors(v,g).multiplyScalar(i.panSpeed),V(m.x,m.y),g.copy(v)}function me(R){const ie=ue(R),xe=R.pageX-ie.x,he=R.pageY-ie.y,ee=Math.sqrt(xe*xe+he*he);w.set(0,ee),_.set(0,Math.pow(w.y/h.y,i.zoomSpeed)),$(_.y),h.copy(w);const D=(R.pageX+ie.x)*.5,re=(R.pageY+ie.y)*.5;j(D,re)}function tt(R){i.enableZoom&&me(R),i.enablePan&&Re(R)}function Ne(R){i.enableZoom&&me(R),i.enableRotate&&_e(R)}function E(R){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",B)),Ve(R),R.pointerType==="touch"?Oe(R):te(R))}function b(R){i.enabled!==!1&&(R.pointerType==="touch"?J(R):Q(R))}function B(R){Le(R),S.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",B)),i.dispatchEvent(Qc),s=r.NONE}function te(R){let ie;switch(R.button){case 0:ie=i.mouseButtons.LEFT;break;case 1:ie=i.mouseButtons.MIDDLE;break;case 2:ie=i.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Li.DOLLY:if(i.enableZoom===!1)return;ae(R),s=r.DOLLY;break;case Li.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;H(R),s=r.PAN}else{if(i.enableRotate===!1)return;K(R),s=r.ROTATE}break;case Li.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;K(R),s=r.ROTATE}else{if(i.enablePan===!1)return;H(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qo)}function Q(R){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Y(R);break;case r.DOLLY:if(i.enableZoom===!1)return;se(R);break;case r.PAN:if(i.enablePan===!1)return;ge(R);break}}function ne(R){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(R.preventDefault(),i.dispatchEvent(qo),fe(ve(R)),i.dispatchEvent(Qc))}function ve(R){const ie=R.deltaMode,xe={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(ie){case 1:xe.deltaY*=16;break;case 2:xe.deltaY*=100;break}return R.ctrlKey&&!x&&(xe.deltaY*=10),xe}function ce(R){R.key==="Control"&&(x=!0,document.addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(R){R.key==="Control"&&(x=!1,document.removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function Ee(R){i.enabled===!1||i.enablePan===!1||Ae(R)}function Oe(R){switch(we(R),S.length){case 1:switch(i.touches.ONE){case Di.ROTATE:if(i.enableRotate===!1)return;Pe(R),s=r.TOUCH_ROTATE;break;case Di.PAN:if(i.enablePan===!1)return;ye(R),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Di.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;F(R),s=r.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ct(R),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qo)}function J(R){switch(we(R),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;_e(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Re(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;tt(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ne(R),i.update();break;default:s=r.NONE}}function Ke(R){i.enabled!==!1&&R.preventDefault()}function Ve(R){S.push(R.pointerId)}function Le(R){delete L[R.pointerId];for(let ie=0;ie<S.length;ie++)if(S[ie]==R.pointerId){S.splice(ie,1);return}}function we(R){let ie=L[R.pointerId];ie===void 0&&(ie=new Ue,L[R.pointerId]=ie),ie.set(R.pageX,R.pageY)}function ue(R){const ie=R.pointerId===S[0]?S[1]:S[0];return L[ie]}i.domElement.addEventListener("contextmenu",Ke),i.domElement.addEventListener("pointerdown",E),i.domElement.addEventListener("pointercancel",B),i.domElement.addEventListener("wheel",ne,{passive:!1}),document.addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}function A0(n){const e=new Ia({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,3)),e.sortObjects=!0;const t=new gd,i=window.innerWidth/window.innerHeight,r=3,s=new Un(-r*i,r*i,r,-r,.1,1e3),a=new vt(50,i,.1,1e3);let o=s;s.position.set(5,4,5),a.position.set(5,4,5);const l=new C0(o,n);l.enableDamping=!0,l.dampingFactor=.05;const c=new f0(16777215,.6);t.add(c);const u=new p0(16777215,.8);u.position.set(5,10,7),t.add(u);const d=new E0(10,10,4473924,2236962);return t.add(d),{scene:t,renderer:e,orthoCamera:s,perspCamera:a,camera:o,orbitControls:l,gridHelper:d,ambientLight:c,directionalLight:u}}function P0(n,e=3){const t=window.innerWidth/window.innerHeight;n.orthoCamera.left=-e*t,n.orthoCamera.right=e*t,n.orthoCamera.updateProjectionMatrix(),n.perspCamera.aspect=t,n.perspCamera.updateProjectionMatrix(),n.renderer.setSize(window.innerWidth,window.innerHeight)}function ur(n,e){let t;return e.mode==="Exponential"?t=e.r0*Math.exp(-e.k*n):t=e.r0-e.alpha*n,Math.max(t,e.rMin)}function R0(n){const e=[],t=[],i=[],r=2*Math.PI*n.N;for(let a=0;a<=n.uDiv;a++){const o=r*a/n.uDiv,l=ur(o,n),c=a/n.uDiv;for(let u=0;u<=n.vDiv;u++){const p=2*Math.PI*u/n.vDiv+n.twist*(o/(2*Math.PI)),f=u/n.vDiv,g=l*(1+n.epsilon*Math.cos(p)),v=(n.R+g*Math.cos(p))*Math.cos(o),m=(n.R+g*Math.cos(p))*Math.sin(o),h=g*Math.sin(p)+n.h*(o/(2*Math.PI));e.push(v,m,h),t.push(c,f)}}for(let a=0;a<n.uDiv;a++)for(let o=0;o<n.vDiv;o++){const l=a*(n.vDiv+1)+o,c=(a+1)*(n.vDiv+1)+o,u=(a+1)*(n.vDiv+1)+(o+1),d=a*(n.vDiv+1)+(o+1);i.push(l,c,d),i.push(c,u,d)}const s=new ot;return s.setAttribute("position",new Tt(e,3)),s.setAttribute("uv",new Tt(t,2)),s.setIndex(i),s.computeVertexNormals(),s}function fa(n){const e=[],t=[],i=[],r=2*Math.PI*n.N,s=(n.uDiv+1)*(n.vDiv+1);for(let l=0;l<=n.uDiv;l++){const c=r*l/n.uDiv,u=ur(c,n),d=l/n.uDiv;for(let p=0;p<=n.vDiv;p++){const g=2*Math.PI*p/n.vDiv+n.twist*(c/(2*Math.PI)),v=p/n.vDiv,m=u*(1+n.epsilon*Math.cos(g)),h=(n.R+m*Math.cos(g))*Math.cos(c),w=(n.R+m*Math.cos(g))*Math.sin(c),_=m*Math.sin(g)+n.h*(c/(2*Math.PI));e.push(h,w,_),t.push(d,v)}}for(let l=0;l<=n.uDiv;l++){const c=r*l/n.uDiv,d=ur(c,n)-n.wallThickness,p=l/n.uDiv;for(let f=0;f<=n.vDiv;f++){const v=2*Math.PI*f/n.vDiv+n.twist*(c/(2*Math.PI)),m=f/n.vDiv,h=d*(1+n.epsilon*Math.cos(v)),w=(n.R+h*Math.cos(v))*Math.cos(c),_=(n.R+h*Math.cos(v))*Math.sin(c),A=h*Math.sin(v)+n.h*(c/(2*Math.PI));e.push(w,_,A),t.push(p,m)}}for(let l=0;l<n.uDiv;l++)for(let c=0;c<n.vDiv;c++){const u=l*(n.vDiv+1)+c,d=(l+1)*(n.vDiv+1)+c,p=(l+1)*(n.vDiv+1)+(c+1),f=l*(n.vDiv+1)+(c+1);i.push(u,d,f),i.push(d,p,f)}for(let l=0;l<n.uDiv;l++)for(let c=0;c<n.vDiv;c++){const u=s+l*(n.vDiv+1)+c,d=s+(l+1)*(n.vDiv+1)+c,p=s+(l+1)*(n.vDiv+1)+(c+1),f=s+l*(n.vDiv+1)+(c+1);i.push(u,f,d),i.push(d,f,p)}for(let l=0;l<n.vDiv;l++){const c=l,u=l+1,d=s+l,p=s+l+1;i.push(c,d,u),i.push(u,d,p)}const a=n.uDiv*(n.vDiv+1);for(let l=0;l<n.vDiv;l++){const c=a+l,u=a+l+1,d=s+a+l,p=s+a+l+1;i.push(c,u,d),i.push(u,p,d)}const o=new ot;return o.setAttribute("position",new Tt(e,3)),o.setAttribute("uv",new Tt(t,2)),o.setIndex(i),o.computeVertexNormals(),o}function tu(n,e){const t=ur(e,n),i=[],r=[];for(let a=0;a<=n.vDiv;a++){const l=2*Math.PI*a/n.vDiv+n.twist*(e/(2*Math.PI)),c=t*(1+n.epsilon*Math.cos(l)),u=(n.R+c*Math.cos(l))*Math.cos(e),d=(n.R+c*Math.cos(l))*Math.sin(e),p=c*Math.sin(l)+n.h*(e/(2*Math.PI));i.push(u,d,p);const g=(t-n.wallThickness)*(1+n.epsilon*Math.cos(l)),v=(n.R+g*Math.cos(l))*Math.cos(e),m=(n.R+g*Math.cos(l))*Math.sin(e),h=g*Math.sin(l)+n.h*(e/(2*Math.PI));i.push(v,m,h)}for(let a=0;a<n.vDiv;a++){const o=a*2,l=a*2+1,c=(a+1)*2,u=(a+1)*2+1;r.push(o,c,l),r.push(c,u,l)}const s=new ot;return s.setAttribute("position",new Tt(i,3)),s.setIndex(r),s.computeVertexNormals(),s}function nu(n){const e=2*Math.PI*n.N;function t(l,c,u=!1){const d=ur(l,n),p=c+n.twist*(l/(2*Math.PI)),g=(u?d-n.wallThickness:d)*(1+n.epsilon*Math.cos(p)),v=(n.R+g*Math.cos(p))*Math.cos(l),m=(n.R+g*Math.cos(p))*Math.sin(l),h=g*Math.sin(p)+n.h*(l/(2*Math.PI));return new U(v,m,h)}function i(l,c){const u=[];if(n.showMeridians){const d=Math.max(1,Math.floor(n.vDiv/48));for(let p=0;p<n.vDiv;p+=d){const f=[],g=2*Math.PI*p/n.vDiv;for(let w=0;w<=n.uDiv;w++){const _=e*w/n.uDiv;f.push(t(_,g,l))}const v=new ot().setFromPoints(f),m=new Yt({color:c,transparent:l,opacity:l?.7:1,depthTest:!0,depthWrite:!1,vertexColors:!1}),h=new Kt(v,m);h.frustumCulled=!1,u.push(h)}}if(n.showParallels){const d=Math.max(1,Math.floor(n.uDiv/80));for(let p=0;p<=n.uDiv;p+=d){const f=[],g=e*p/n.uDiv;for(let w=0;w<=n.vDiv;w++){const _=2*Math.PI*w/n.vDiv;f.push(t(g,_,l))}const v=new ot().setFromPoints(f),m=new Yt({color:c,transparent:l,opacity:l?.7:1,depthTest:!0,depthWrite:!1,vertexColors:!1}),h=new Kt(v,m);h.frustumCulled=!1,u.push(h)}}return u}const r=new Se(n.outerColor),s=i(!1,r),a=n.showInnerSurface?i(!0,new Se(n.innerColor)):[],o=[];if(n.showInnerSurface){const l=[];for(let L=0;L<=n.vDiv;L++){const x=2*Math.PI*L/n.vDiv;l.push(t(0,x,!1))}const c=new ot().setFromPoints(l),u=new Yt({color:r,depthTest:!0,depthWrite:!1}),d=new Kt(c,u);d.frustumCulled=!1,o.push(d);const p=[];for(let L=0;L<=n.vDiv;L++){const x=2*Math.PI*L/n.vDiv;p.push(t(0,x,!0))}const f=new ot().setFromPoints(p),g=new Yt({color:new Se(n.innerColor),transparent:!0,opacity:.7,depthTest:!0,depthWrite:!1}),v=new Kt(f,g);v.frustumCulled=!1,o.push(v);const m=[];for(let L=0;L<=n.vDiv;L++){const x=2*Math.PI*L/n.vDiv;m.push(t(e,x,!1))}const h=new ot().setFromPoints(m),w=new Yt({color:r,depthTest:!0,depthWrite:!1}),_=new Kt(h,w);_.frustumCulled=!1,o.push(_);const A=[];for(let L=0;L<=n.vDiv;L++){const x=2*Math.PI*L/n.vDiv;A.push(t(e,x,!0))}const C=new ot().setFromPoints(A),P=new Yt({color:new Se(n.innerColor),transparent:!0,opacity:.7,depthTest:!0,depthWrite:!1}),S=new Kt(C,P);S.frustumCulled=!1,o.push(S)}return{outerLines:s,innerLines:a,depthLines:o}}function L0(n,e){const t=ur(e,n),i=[],r=[];for(let f=0;f<=n.vDiv;f++){const v=2*Math.PI*f/n.vDiv+n.twist*(e/(2*Math.PI)),m=t*(1+n.epsilon*Math.cos(v)),h=(n.R+m*Math.cos(v))*Math.cos(e),w=(n.R+m*Math.cos(v))*Math.sin(e),_=m*Math.sin(v)+n.h*(e/(2*Math.PI));i.push(new U(h,w,_));const C=(t-n.wallThickness)*(1+n.epsilon*Math.cos(v)),P=(n.R+C*Math.cos(v))*Math.cos(e),S=(n.R+C*Math.cos(v))*Math.sin(e),L=C*Math.sin(v)+n.h*(e/(2*Math.PI));r.push(new U(P,S,L))}const s=[],a=new ot().setFromPoints(i),o=new Yt({color:new Se(n.crossSectionColor),depthTest:!0,depthWrite:!1}),l=new Kt(a,o);l.frustumCulled=!1,s.push(l);const c=new ot().setFromPoints(r),u=new Yt({color:new Se(n.crossSectionColor),depthTest:!0,depthWrite:!1}),d=new Kt(c,u);d.frustumCulled=!1,s.push(d);const p=Math.max(1,Math.floor(n.vDiv/n.crossSectionSpokes));for(let f=0;f<n.vDiv;f+=p){const g=[i[f],r[f]],v=new ot().setFromPoints(g),m=new Yt({color:new Se(n.crossSectionColor),depthTest:!0,depthWrite:!1}),h=new Kt(v,m);h.frustumCulled=!1,s.push(h)}for(let f=1;f<=n.crossSectionCircles;f++){const g=f/(n.crossSectionCircles+1),v=[];for(let _=0;_<=n.vDiv;_++){const C=2*Math.PI*_/n.vDiv+n.twist*(e/(2*Math.PI)),P=t-n.wallThickness,S=t*(1+n.epsilon*Math.cos(C)),L=P*(1+n.epsilon*Math.cos(C)),x=L+g*(S-L),M=(n.R+x*Math.cos(C))*Math.cos(e),O=(n.R+x*Math.cos(C))*Math.sin(e),G=x*Math.sin(C)+n.h*(e/(2*Math.PI));v.push(new U(M,O,G))}const m=new ot().setFromPoints(v),h=new Yt({color:new Se(n.crossSectionColor),transparent:!0,opacity:.6,depthTest:!0,depthWrite:!1}),w=new Kt(m,h);w.frustumCulled=!1,s.push(w)}return s}function xd(n,e){if(console.log("updateMesh called, renderStyle:",e.renderStyle,"hasTexture:",!!e.textureImage),n.traverse(t=>{if(t instanceof Et){const i=t.material;i instanceof Ai&&("map"in i&&i.map&&typeof i.map=="object"&&"dispose"in i.map&&i.map.dispose(),i.dispose()),t.geometry&&t.geometry.dispose()}}),n.clear(),e.renderStyle==="Solid"){const t=R0(e),i={color:6724044,side:Zt,metalness:.3,roughness:.6};if(e.textureImage){console.log("Loading texture from:",e.textureImage.substring(0,50)+"...");const o=new u0().load(e.textureImage,l=>{console.log("Texture loaded successfully, dimensions:",l.image.width,"x",l.image.height)},l=>{console.log("Texture loading progress:",l)},l=>{console.error("Error loading texture:",l),alert("Error loading texture image. Please try a different image.")});e.textureRepeat?o.repeat.set(e.textureRepeat.u,e.textureRepeat.v):o.repeat.set(1,1),e.textureOffset?o.offset.set(e.textureOffset.u,e.textureOffset.v):o.offset.set(0,0),i.map=o,console.log("Texture applied to material")}else console.log("No texture image provided");const r=new $c(i),s=new Et(t,r);n.add(s)}else if(e.renderStyle==="Wireframe"){const{outerLines:t,innerLines:i,depthLines:r}=nu(e);if(e.occludeInner){const s=fa(e),a=new xi({colorWrite:!1,side:_n}),o=new Et(s,a);n.add(o),[...t,...i,...r].forEach(l=>{const c=l.material;c.depthTest=!0,c.depthWrite=!1,l.renderOrder=1,n.add(l)})}else t.forEach(s=>n.add(s)),i.forEach(s=>n.add(s)),r.forEach(s=>n.add(s))}else if(e.renderStyle==="Hidden-line"){const t=fa(e),i=new xi({colorWrite:!1,side:_n}),r=new Et(t,i);n.add(r);const{outerLines:s,innerLines:a,depthLines:o}=nu(e);[...s,...a,...o].forEach(l=>{const c=l.material;c.depthTest=!0,c.depthWrite=!1,l.renderOrder=1,n.add(l)})}e.showCrossSection&&[0,2*Math.PI*e.N].forEach(r=>{if(e.renderStyle==="Solid"){const s=tu(e,r),a=new $c({color:e.crossSectionColor,side:Zt,metalness:.5,roughness:.4}),o=new Et(s,a);n.add(o)}else{const s=tu(e,r),a=new xi({colorWrite:!1,side:Zt}),o=new Et(s,a);n.add(o),L0(e,r).forEach(c=>{const u=c.material;u.depthTest=!0,u.depthWrite=!1,c.renderOrder=2,n.add(c)})}})}/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */function et(n){return n==null}function ka(n){return n!==null&&typeof n=="object"}function ma(n){return n!==null&&typeof n=="object"}function D0(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function Mi(n,e){return Array.from(new Set([...Object.keys(n),...Object.keys(e)])).reduce((i,r)=>{const s=n[r],a=e[r];return ma(s)&&ma(a)?Object.assign(Object.assign({},i),{[r]:Mi(s,a)}):Object.assign(Object.assign({},i),{[r]:r in e?a:s})},{})}function Va(n){return ka(n)?"target"in n:!1}const U0={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:n=>`Not compatible with  plugin '${n.id}'`,propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class ut{static alreadyDisposed(){return new ut({type:"alreadydisposed"})}static notBindable(){return new ut({type:"notbindable"})}static notCompatible(e,t){return new ut({type:"notcompatible",context:{id:`${e}.${t}`}})}static propertyNotFound(e){return new ut({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new ut({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=U0[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}toString(){return this.message}}class js{constructor(e,t){this.obj_=e,this.key=t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}read(){return this.obj_[this.key]}write(e){this.obj_[this.key]=e}writeProperty(e,t){const i=this.read();if(!js.isBindable(i))throw ut.notBindable();if(!(e in i))throw ut.propertyNotFound(e);i[e]=t}}class gt{constructor(){this.observers_={}}on(e,t,i){var r;let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t,key:(r=i==null?void 0:i.key)!==null&&r!==void 0?r:t}),this}off(e,t){const i=this.observers_[e];return i&&(this.observers_[e]=i.filter(r=>r.key!==t)),this}emit(e,t){const i=this.observers_[e];i&&i.forEach(r=>{r.handler(t)})}}class I0{constructor(e,t){var i;this.constraint_=t==null?void 0:t.constraint,this.equals_=(i=t==null?void 0:t.equals)!==null&&i!==void 0?i:(r,s)=>r===s,this.emitter=new gt,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const i=t??{forceEmit:!1,last:!0},r=this.constraint_?this.constraint_.constrain(e):e,s=this.rawValue_;this.equals_(s,r)&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=r,this.emitter.emit("change",{options:i,previousRawValue:s,rawValue:r,sender:this}))}}class N0{constructor(e){this.emitter=new gt,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const i=t??{forceEmit:!1,last:!0},r=this.value_;r===e&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:i,previousRawValue:r,rawValue:this.value_,sender:this}))}}class O0{constructor(e){this.emitter=new gt,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=e,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(e){this.emitter.emit("beforechange",Object.assign(Object.assign({},e),{sender:this}))}onValueChange_(e){this.emitter.emit("change",Object.assign(Object.assign({},e),{sender:this}))}}function rt(n,e){const t=e==null?void 0:e.constraint,i=e==null?void 0:e.equals;return!t&&!i?new N0(n):new I0(n,e)}function F0(n){return[new O0(n),(e,t)=>{n.setRawValue(e,t)}]}class Ge{constructor(e){this.emitter=new gt,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((i,r)=>Object.assign(i,{[r]:rt(e[r])}),{})}static fromObject(e){const t=this.createCore(e);return new Ge(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}class Zr{constructor(e){this.values=Ge.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),i=this.values.get("min");return Math.min(Math.max(e,i),t)}}class B0{constructor(e){this.values=Ge.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),i=this.values.get("min");let r=e;return et(i)||(r=Math.max(r,i)),et(t)||(r=Math.min(r,t)),r}}class k0{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,i=Math.round((e-t)/this.step);return t+i*this.step}}class V0{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const z0={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class H0{constructor(e,t,i){this.left=t,this.operator=e,this.right=i}evaluate(){const e=z0[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const G0={"+":n=>n,"-":n=>-n,"~":n=>~n};class W0{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=G0[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function za(n){return(e,t)=>{for(let i=0;i<n.length;i++){const r=n[i](e,t);if(r!=="")return r}return""}}function Hr(n,e){var t;const i=n.substr(e).match(/^\s+/);return(t=i&&i[0])!==null&&t!==void 0?t:""}function j0(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Gr(n,e){var t;const i=n.substr(e).match(/^[0-9]+/);return(t=i&&i[0])!==null&&t!==void 0?t:""}function X0(n,e){const t=Gr(n,e);if(t!=="")return t;const i=n.substr(e,1);if(e+=1,i!=="-"&&i!=="+")return"";const r=Gr(n,e);return r===""?"":i+r}function Ha(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const i=X0(n,e);return i===""?"":t+i}function bd(n,e){const t=n.substr(e,1);if(t==="0")return t;const i=j0(n,e);return e+=i.length,i===""?"":i+Gr(n,e)}function $0(n,e){const t=bd(n,e);if(e+=t.length,t==="")return"";const i=n.substr(e,1);if(e+=i.length,i!==".")return"";const r=Gr(n,e);return e+=r.length,t+i+r+Ha(n,e)}function q0(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const i=Gr(n,e);return e+=i.length,i===""?"":t+i+Ha(n,e)}function Y0(n,e){const t=bd(n,e);return e+=t.length,t===""?"":t+Ha(n,e)}const K0=za([$0,q0,Y0]);function Z0(n,e){var t;const i=n.substr(e).match(/^[01]+/);return(t=i&&i[0])!==null&&t!==void 0?t:""}function J0(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const i=Z0(n,e);return i===""?"":t+i}function Q0(n,e){var t;const i=n.substr(e).match(/^[0-7]+/);return(t=i&&i[0])!==null&&t!==void 0?t:""}function ex(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const i=Q0(n,e);return i===""?"":t+i}function tx(n,e){var t;const i=n.substr(e).match(/^[0-9a-f]+/i);return(t=i&&i[0])!==null&&t!==void 0?t:""}function nx(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const i=tx(n,e);return i===""?"":t+i}const ix=za([J0,ex,nx]),rx=za([ix,K0]);function sx(n,e){const t=rx(n,e);return e+=t.length,t===""?null:{evaluable:new V0(t),cursor:e}}function ox(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const i=yd(n,e);if(!i)return null;e=i.cursor,e+=Hr(n,e).length;const r=n.substr(e,1);return e+=r.length,r!==")"?null:{evaluable:i.evaluable,cursor:e}}function ax(n,e){var t;return(t=sx(n,e))!==null&&t!==void 0?t:ox(n,e)}function wd(n,e){const t=ax(n,e);if(t)return t;const i=n.substr(e,1);if(e+=i.length,i!=="+"&&i!=="-"&&i!=="~")return null;const r=wd(n,e);return r?(e=r.cursor,{cursor:e,evaluable:new W0(i,r.evaluable)}):null}function lx(n,e,t){t+=Hr(e,t).length;const i=n.filter(r=>e.startsWith(r,t))[0];return i?(t+=i.length,t+=Hr(e,t).length,{cursor:t,operator:i}):null}function cx(n,e){return(t,i)=>{const r=n(t,i);if(!r)return null;i=r.cursor;let s=r.evaluable;for(;;){const a=lx(e,t,i);if(!a)break;i=a.cursor;const o=n(t,i);if(!o)return null;i=o.cursor,s=new H0(a.operator,s,o.evaluable)}return s?{cursor:i,evaluable:s}:null}}const ux=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>cx(n,e),wd);function yd(n,e){return e+=Hr(n,e).length,ux(n,e)}function dx(n){const e=yd(n,0);return!e||e.cursor+Hr(n,e.cursor).length!==n.length?null:e.evaluable}function On(n){var e;const t=dx(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Md(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=On(n);if(!et(e))return e}return 0}function hx(n){return String(n)}function Wt(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}function Ze(n,e,t,i,r){const s=(n-e)/(t-e);return i+s*(r-i)}function iu(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function _t(n,e,t){return Math.min(Math.max(n,e),t)}function Ed(n,e){return(n%e+e)%e}function px(n,e){return et(n.step)?Math.max(iu(e),2):iu(n.step)}function Sd(n){var e;return(e=n.step)!==null&&e!==void 0?e:1}function Td(n,e){var t;const i=Math.abs((t=n.step)!==null&&t!==void 0?t:e);return i===0?.1:Math.pow(10,Math.floor(Math.log10(i))-1)}function Cd(n,e){return et(n.step)?null:new k0(n.step,e)}function Ad(n){return!et(n.max)&&!et(n.min)?new Zr({max:n.max,min:n.min}):!et(n.max)||!et(n.min)?new B0({max:n.max,min:n.min}):null}function Pd(n,e){var t,i,r;return{formatter:(t=n.format)!==null&&t!==void 0?t:Wt(px(n,e)),keyScale:(i=n.keyScale)!==null&&i!==void 0?i:Sd(n),pointerScale:(r=n.pointerScale)!==null&&r!==void 0?r:Td(n,e)}}function Rd(n){return{format:n.optional.function,keyScale:n.optional.number,max:n.optional.number,min:n.optional.number,pointerScale:n.optional.number,step:n.optional.number}}function Ga(n){return{constraint:n.constraint,textProps:Ge.fromObject(Pd(n.params,n.initialValue))}}class Pi{constructor(e){this.controller=e}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(e){this.controller.viewProps.set("disabled",e)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(e){this.controller.viewProps.set("hidden",e)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(e){return this.controller.importState(e)}exportState(){return this.controller.exportState()}}class so{constructor(e){this.target=e}}class Jr extends so{constructor(e,t,i){super(e),this.value=t,this.last=i??!0}}class fx extends so{constructor(e,t){super(e),this.expanded=t}}class mx extends so{constructor(e,t){super(e),this.index=t}}class gx extends so{constructor(e,t){super(e),this.native=t}}class Wr extends Pi{constructor(e){super(e),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new gt,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(e){this.controller.tag=e}on(e,t){const i=t.bind(this);return this.emitter_.on(e,r=>{i(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}refresh(){this.controller.value.fetch()}onValueChange_(e){const t=this.controller.value;this.emitter_.emit("change",new Jr(this,t.binding.target.read(),e.options.last))}}class vx{constructor(e,t){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t,this.value_=e,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new gt}get rawValue(){return this.value_.rawValue}set rawValue(e){this.value_.rawValue=e}setRawValue(e,t){this.value_.setRawValue(e,t)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(e){this.emitter.emit("beforechange",Object.assign(Object.assign({},e),{sender:this}))}onValueChange_(e){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},e),{sender:this}))}}function _x(n){if(!("binding"in n))return!1;const e=n.binding;return Va(e)&&"read"in e&&"write"in e}function xx(n,e){const i=Object.keys(e).reduce((r,s)=>{if(r===void 0)return;const a=e[s],o=a(n[s]);return o.succeeded?Object.assign(Object.assign({},r),{[s]:o.value}):void 0},{});return i}function bx(n,e){return n.reduce((t,i)=>{if(t===void 0)return;const r=e(i);if(!(!r.succeeded||r.value===void 0))return[...t,r.value]},[])}function wx(n){return n===null?!1:typeof n=="object"}function Cn(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const i=n(t);return i!==void 0?{succeeded:!0,value:i}:{succeeded:!1,value:void 0}}}function ru(n){return{custom:e=>Cn(e)(n),boolean:Cn(e=>typeof e=="boolean"?e:void 0)(n),number:Cn(e=>typeof e=="number"?e:void 0)(n),string:Cn(e=>typeof e=="string"?e:void 0)(n),function:Cn(e=>typeof e=="function"?e:void 0)(n),constant:e=>Cn(t=>t===e?e:void 0)(n),raw:Cn(e=>e)(n),object:e=>Cn(t=>{if(wx(t))return xx(t,e)})(n),array:e=>Cn(t=>{if(Array.isArray(t))return bx(t,e)})(n)}}const ga={optional:ru(!0),required:ru(!1)};function at(n,e){const t=e(ga),i=ga.required.object(t)(n);return i.succeeded?i.value:void 0}function Qt(n,e,t,i){if(e&&!e(n))return!1;const r=at(n,t);return r?i(r):!1}function en(n,e){var t;return Mi((t=n==null?void 0:n())!==null&&t!==void 0?t:{},e)}function bi(n){return"value"in n}function Ld(n){if(!ka(n)||!("binding"in n))return!1;const e=n.binding;return Va(e)}const gn="http://www.w3.org/2000/svg";function Xs(n){n.offsetHeight}function yx(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function Wa(n){return n.ontouchstart!==void 0}function Mx(){return globalThis}function Ex(){return Mx().document}function Sx(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const Tx={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function oo(n,e){const t=n.createElementNS(gn,"svg");return t.innerHTML=Tx[e],t}function Dd(n,e,t){n.insertBefore(e,n.children[t])}function ja(n){n.parentElement&&n.parentElement.removeChild(n)}function Ud(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function Cx(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function Id(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}function In(n,e){n.emitter.on("change",t=>{e(t.rawValue)}),e(n.rawValue)}function xn(n,e,t){In(n.value(e),t)}const Ax="tp";function $e(n){return(t,i)=>[Ax,"-",n,"v",t?`_${t}`:"",i?`-${i}`:""].join("")}const Sr=$e("lbl");function Px(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(r=>n.createTextNode(r)).forEach((r,s)=>{s>0&&t.appendChild(n.createElement("br")),t.appendChild(r)}),t}class Nd{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Sr()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(Sr("l")),xn(t.props,"label",s=>{et(s)?this.element.classList.add(Sr(void 0,"nol")):(this.element.classList.remove(Sr(void 0,"nol")),Cx(i),i.appendChild(Px(e,s)))}),this.element.appendChild(i),this.labelElement=i;const r=e.createElement("div");r.classList.add(Sr("v")),this.element.appendChild(r),this.valueElement=r}}class Od{constructor(e,t){this.props=t.props,this.valueController=t.valueController,this.viewProps=t.valueController.viewProps,this.view=new Nd(e,{props:t.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(e){return Qt(e,null,t=>({label:t.optional.string}),t=>(this.props.set("label",t.label),!0))}exportProps(){return en(null,{label:this.props.get("label")})}}function Rx(){return["veryfirst","first","last","verylast"]}const su=$e(""),ou={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class ao{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{Rx().forEach(i=>{t.classList.remove(su(void 0,ou[i]))}),this.blade.get("positions").forEach(i=>{t.classList.add(su(void 0,ou[i]))})}),this.viewProps.handleDispose(()=>{ja(t)})}get parent(){return this.parent_}set parent(e){this.parent_=e,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(e){return Qt(e,null,t=>({disabled:t.required.boolean,hidden:t.required.boolean}),t=>(this.viewProps.importState(t),!0))}exportState(){return en(null,Object.assign({},this.viewProps.exportState()))}}class Ei extends ao{constructor(e,t){if(t.value!==t.valueController.value)throw ut.shouldNeverHappen();const i=t.valueController.viewProps,r=new Od(e,{blade:t.blade,props:t.props,valueController:t.valueController});super(Object.assign(Object.assign({},t),{view:new Nd(e,{props:t.props,viewProps:i}),viewProps:i})),this.labelController=r,this.value=t.value,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(e){return Qt(e,t=>{var i,r,s;return super.importState(t)&&this.labelController.importProps(t)&&((s=(r=(i=this.valueController).importProps)===null||r===void 0?void 0:r.call(i,e))!==null&&s!==void 0?s:!0)},t=>({value:t.optional.raw}),t=>(t.value&&(this.value.rawValue=t.value),!0))}exportState(){var e,t,i;return en(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(i=(t=(e=this.valueController).exportProps)===null||t===void 0?void 0:t.call(e))!==null&&i!==void 0?i:{}))}}function au(n){const e=Object.assign({},n);return delete e.value,e}class Fd extends Ei{constructor(e,t){super(e,t),this.tag=t.tag}importState(e){return Qt(e,t=>super.importState(au(e)),t=>({tag:t.optional.string}),t=>(this.tag=t.tag,!0))}exportState(){return en(()=>au(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function Lx(n){return bi(n)&&Ld(n.value)}class Dx extends Fd{importState(e){return Qt(e,t=>super.importState(t),t=>({binding:t.required.object({value:t.required.raw})}),t=>(this.value.binding.inject(t.binding.value),this.value.fetch(),!0))}}function Ux(n){return bi(n)&&_x(n.value)}function Bd(n,e){for(;n.length<e;)n.push(void 0)}function Ix(n){const e=[];return Bd(e,n),e}function Nx(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function Ox(n,e){const t=[...Nx(n),e];return t.length>n.length?t.splice(0,t.length-n.length):Bd(t,n.length),t}class Fx{constructor(e){this.emitter=new gt,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e.binding,this.value_=rt(Ix(e.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(e){this.value_.rawValue=e}setRawValue(e,t){this.value_.setRawValue(e,t)}fetch(){this.value_.rawValue=Ox(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(e){this.emitter.emit("beforechange",Object.assign(Object.assign({},e),{sender:this}))}onValueChange_(e){this.emitter.emit("change",Object.assign(Object.assign({},e),{sender:this}))}}function Bx(n){if(!("binding"in n))return!1;const e=n.binding;return Va(e)&&"read"in e&&!("write"in e)}class kx extends Fd{exportState(){return en(()=>super.exportState(),{binding:{readonly:!0}})}}function Vx(n){return bi(n)&&Bx(n.value)}class zx extends Pi{get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get title(){var e;return(e=this.controller.buttonController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller.buttonController.props.set("title",e)}on(e,t){const i=t.bind(this);return this.controller.buttonController.emitter.on(e,s=>{i(new gx(this,s.nativeEvent))}),this}off(e,t){return this.controller.buttonController.emitter.off(e,t),this}}function Hx(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function mr(n,e){return t=>{Hx(n,e,t)}}function Xa(n,e){In(n,t=>{e.textContent=t??""})}const Yo=$e("btn");class Gx{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Yo()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("button");i.classList.add(Yo("b")),t.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=e.createElement("div");r.classList.add(Yo("t")),Xa(t.props.value("title"),r),this.buttonElement.appendChild(r)}}class Wx{constructor(e,t){this.emitter=new gt,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Gx(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(e){return Qt(e,null,t=>({title:t.optional.string}),t=>(this.props.set("title",t.title),!0))}exportProps(){return en(null,{title:this.props.get("title")})}onClick_(e){this.emitter.emit("click",{nativeEvent:e,sender:this})}}class lu extends ao{constructor(e,t){const i=new Wx(e,{props:t.buttonProps,viewProps:t.viewProps}),r=new Od(e,{blade:t.blade,props:t.labelProps,valueController:i});super({blade:t.blade,view:r.view,viewProps:t.viewProps}),this.buttonController=i,this.labelController=r}importState(e){return Qt(e,t=>super.importState(t)&&this.buttonController.importProps(t)&&this.labelController.importProps(t),()=>({}),()=>!0)}exportState(){return en(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class kd{constructor(e){const[t,i]=e.split("-"),r=t.split(".");this.major=parseInt(r[0],10),this.minor=parseInt(r[1],10),this.patch=parseInt(r[2],10),this.prerelease=i??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}const gr=new kd("2.0.5");function zt(n){return Object.assign({core:gr},n)}const jx=zt({id:"button",type:"blade",accept(n){const e=at(n,t=>({title:t.required.string,view:t.required.constant("button"),label:t.optional.string}));return e?{params:e}:null},controller(n){return new lu(n.document,{blade:n.blade,buttonProps:Ge.fromObject({title:n.params.title}),labelProps:Ge.fromObject({label:n.params.label}),viewProps:n.viewProps})},api(n){return n.controller instanceof lu?new zx(n.controller):null}});function Xx(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function $x(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function qx(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}function Yx(n){return ka(n)?"refresh"in n&&typeof n.refresh=="function":!1}function Kx(n,e){if(!js.isBindable(n))throw ut.notBindable();return new js(n,e)}class Zx{constructor(e,t){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=e,this.emitter_=new gt,this.pool_=t,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(e=>this.pool_.createApi(e))}addBinding(e,t,i){const r=i??{},s=this.controller_.element.ownerDocument,a=this.pool_.createBinding(s,Kx(e,t),r),o=this.pool_.createBindingApi(a);return this.add(o,r.index)}addFolder(e){return $x(this,e)}addButton(e){return Xx(this,e)}addTab(e){return qx(this,e)}add(e,t){const i=e.controller;return this.controller_.rack.add(i,t),e}remove(e){this.controller_.rack.remove(e.controller)}addBlade(e){const t=this.controller_.element.ownerDocument,i=this.pool_.createBlade(t,e),r=this.pool_.createApi(i);return this.add(r,e.index)}on(e,t){const i=t.bind(this);return this.emitter_.on(e,r=>{i(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}refresh(){this.children.forEach(e=>{Yx(e)&&e.refresh()})}onRackValueChange_(e){const t=e.bladeController,i=this.pool_.createApi(t),r=Ld(t.value)?t.value.binding:null;this.emitter_.emit("change",new Jr(i,r?r.target.read():t.value.rawValue,e.options.last))}}class $a extends Pi{constructor(e,t){super(e),this.rackApi_=new Zx(e.rackController,t)}refresh(){this.rackApi_.refresh()}}class qa extends ao{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}importState(e){return Qt(e,t=>super.importState(t),t=>({children:t.required.array(t.required.raw)}),t=>this.rackController.rack.children.every((i,r)=>i.importState(t.children[r])))}exportState(){return en(()=>super.exportState(),{children:this.rackController.rack.children.map(e=>e.exportState())})}}function va(n){return"rackController"in n}class Jx{constructor(e){this.emitter=new gt,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw ut.shouldNeverHappen();const i=t!==void 0?t:this.items_.length;this.items_.splice(i,0,e),this.cache_.add(e);const r=this.extract_(e);r&&(r.emitter.on("add",this.onSubListAdd_),r.emitter.on("remove",this.onSubListRemove_),r.allItems().forEach(s=>{this.cache_.add(s)})),this.emitter.emit("add",{index:i,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const i=this.extract_(e);i&&(i.allItems().forEach(r=>{this.cache_.delete(r)}),i.emitter.off("add",this.onSubListAdd_),i.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}function Qx(n,e){for(let t=0;t<n.length;t++){const i=n[t];if(bi(i)&&i.value===e)return i}return null}function eb(n){return va(n)?n.rackController.rack.bcSet_:null}class tb{constructor(e){var t,i;this.emitter=new gt,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(i=this.blade_)===null||i===void 0||i.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Jx(eb),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var i;(i=e.parent)===null||i===void 0||i.remove(e),e.parent=this,this.bcSet_.add(e,t)}remove(e){e.parent=null,this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,root:t,sender:this}),!t)return;const i=e.item;if(i.viewProps.emitter.on("change",this.onChildViewPropsChange_),i.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),i.viewProps.handleDispose(this.onChildDispose_),bi(i))i.value.emitter.on("change",this.onChildValueChange_);else if(va(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.on("layout",this.onRackLayout_),s.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,root:t,sender:this}),!t)return;const i=e.item;if(bi(i))i.value.emitter.off("change",this.onChildValueChange_);else if(va(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.off("layout",this.onRackLayout_),s.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const e=this.bcSet_.items.filter(r=>!r.viewProps.get("hidden")),t=e[0],i=e[e.length-1];this.bcSet_.items.forEach(r=>{const s=[];r===t&&(s.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&s.push("veryfirst")),r===i&&(s.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&s.push("verylast")),r.blade.set("positions",s)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildValueChange_(e){const t=Qx(this.find(bi),e.sender);if(!t)throw ut.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:t,options:e.options,sender:this})}onRackLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(e){this.emitter.emit("valuechange",{bladeController:e.bladeController,options:e.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ya{constructor(e){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=e.element,this.viewProps=e.viewProps;const t=new tb({blade:e.root?void 0:e.blade,viewProps:e.viewProps});t.emitter.on("add",this.onRackAdd_),t.emitter.on("remove",this.onRackRemove_),this.rack=t,this.viewProps.handleDispose(()=>{for(let i=this.rack.children.length-1;i>=0;i--)this.rack.children[i].viewProps.set("disposed",!0)})}onRackAdd_(e){e.root&&Dd(this.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.root&&ja(e.bladeController.view.element)}}function vr(){return new Ge({positions:rt([],{equals:D0})})}class Qr extends Ge{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},i=Ge.createCore(t);return new Qr(i)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!et(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const i=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};xn(this,"expanded",i),xn(this,"temporaryExpanded",i)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function nb(n,e){let t=0;return yx(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),Xs(e),t=e.clientHeight,n.set("temporaryExpanded",null),Xs(e)}),t}function cu(n,e){e.style.height=n.styleHeight}function Ka(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),et(n.get("expandedHeight"))){const t=nb(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),Xs(e)}),n.emitter.on("change",()=>{cu(n,e)}),cu(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Vd extends $a{constructor(e,t){super(e,t),this.emitter_=new gt,this.controller.foldable.value("expanded").emitter.on("change",i=>{this.emitter_.emit("fold",new fx(this,i.sender.rawValue))}),this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(e){this.controller.foldable.set("expanded",e)}get title(){return this.controller.props.get("title")}set title(e){this.controller.props.set("title",e)}get children(){return this.rackApi_.children}addBinding(e,t,i){return this.rackApi_.addBinding(e,t,i)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const i=t.bind(this);return this.emitter_.on(e,r=>{i(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}const zd=$e("cnt");class ib{constructor(e,t){var i;this.className_=$e((i=t.viewName)!==null&&i!==void 0?i:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),zd()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),xn(this.foldable_,"completed",mr(this.element,this.className_(void 0,"cpl")));const r=e.createElement("button");r.classList.add(this.className_("b")),xn(t.props,"title",c=>{et(c)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const s=e.createElement("div");s.classList.add(this.className_("i")),this.element.appendChild(s);const a=e.createElement("div");a.classList.add(this.className_("t")),Xa(t.props.value("title"),a),this.buttonElement.appendChild(a),this.titleElement=a;const o=e.createElement("div");o.classList.add(this.className_("m")),this.buttonElement.appendChild(o);const l=e.createElement("div");l.classList.add(this.className_("c")),this.element.appendChild(l),this.containerElement=l}}class _a extends qa{constructor(e,t){var i;const r=Qr.create((i=t.expanded)!==null&&i!==void 0?i:!0),s=new ib(e,{foldable:r,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:new Ya({blade:t.blade,element:s.containerElement,root:t.root,viewProps:t.viewProps}),view:s})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=r,Ka(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(e){return Qt(e,t=>super.importState(t),t=>({expanded:t.required.boolean,title:t.optional.string}),t=>(this.foldable.set("expanded",t.expanded),this.props.set("title",t.title),!0))}exportState(){return en(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const rb=zt({id:"folder",type:"blade",accept(n){const e=at(n,t=>({title:t.required.string,view:t.required.constant("folder"),expanded:t.optional.boolean}));return e?{params:e}:null},controller(n){return new _a(n.document,{blade:n.blade,expanded:n.params.expanded,props:Ge.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof _a?new Vd(n.controller,n.pool):null}}),sb=$e("");function uu(n,e){return mr(n,sb(void 0,e))}class Bn extends Ge{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=F0(rt(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,i,r;const s=e??{};return new Bn(Ge.createCore({disabled:(t=s.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(i=s.hidden)!==null&&i!==void 0?i:!1,parent:(r=s.parent)!==null&&r!==void 0?r:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){In(this.globalDisabled_,uu(e,"disabled")),xn(this,"hidden",uu(e,"hidden"))}bindDisabled(e){In(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){In(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}importState(e){this.set("disabled",e.disabled),this.set("hidden",e.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const i=e.previousRawValue;i==null||i.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const du=$e("tbp");class ob{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(du()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(du("c")),this.element.appendChild(i),this.containerElement=i}}const Tr=$e("tbi");class ab{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Tr()),t.viewProps.bindClassModifiers(this.element),xn(t.props,"selected",s=>{s?this.element.classList.add(Tr(void 0,"sel")):this.element.classList.remove(Tr(void 0,"sel"))});const i=e.createElement("button");i.classList.add(Tr("b")),t.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=e.createElement("div");r.classList.add(Tr("t")),Xa(t.props.value("title"),r),this.buttonElement.appendChild(r),this.titleElement=r}}class lb{constructor(e,t){this.emitter=new gt,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new ab(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class xa extends qa{constructor(e,t){const i=new ob(e,{viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:new Ya({blade:t.blade,element:i.containerElement,viewProps:t.viewProps}),view:i})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new lb(e,{props:t.itemProps,viewProps:Bn.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=t.props,xn(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}importState(e){return Qt(e,t=>super.importState(t),t=>({selected:t.required.boolean,title:t.required.string}),t=>(this.ic_.props.set("selected",t.selected),this.ic_.props.set("title",t.title),!0))}exportState(){return en(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class cb extends $a{constructor(e,t){super(e,t),this.emitter_=new gt,this.onSelect_=this.onSelect_.bind(this),this.pool_=t,this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(e){const t=this.controller.view.element.ownerDocument,i=new xa(t,{blade:vr(),itemProps:Ge.fromObject({selected:!1,title:e.title}),props:Ge.fromObject({selected:!1}),viewProps:Bn.create()}),r=this.pool_.createApi(i);return this.rackApi_.add(r,e.index)}removePage(e){this.rackApi_.remove(this.rackApi_.children[e])}on(e,t){const i=t.bind(this);return this.emitter_.on(e,r=>{i(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}onSelect_(e){this.emitter_.emit("select",new mx(this,e.rawValue))}}class ub extends $a{get title(){var e;return(e=this.controller.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller.itemController.props.set("title",e)}get selected(){return this.controller.props.get("selected")}set selected(e){this.controller.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBinding(e,t,i){return this.rackApi_.addBinding(e,t,i)}addBlade(e){return this.rackApi_.addBlade(e)}}const hu=-1;class db{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=rt(!0),this.selectedIndex=rt(hu),this.items_=[]}add(e,t){const i=t??this.items_.length;this.items_.splice(i,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=hu,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,i)=>{t.rawValue=i===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,i)=>{t.rawValue=i===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(i=>i===e.sender);this.items_.forEach((i,r)=>{i.rawValue=r===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Cr=$e("tab");class hb{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Cr(),zd()),t.viewProps.bindClassModifiers(this.element),In(t.empty,mr(this.element,Cr(void 0,"nop")));const i=e.createElement("div");i.classList.add(Cr("t")),this.element.appendChild(i),this.itemsElement=i;const r=e.createElement("div");r.classList.add(Cr("i")),this.element.appendChild(r);const s=e.createElement("div");s.classList.add(Cr("c")),this.element.appendChild(s),this.contentsElement=s}}class pu extends qa{constructor(e,t){const i=new db,r=new hb(e,{empty:i.empty,viewProps:t.viewProps});super({blade:t.blade,rackController:new Ya({blade:t.blade,element:r.contentsElement,viewProps:t.viewProps}),view:r}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=this.rackController.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.tab=i}add(e,t){this.rackController.rack.add(e,t)}remove(e){this.rackController.rack.remove(this.rackController.rack.children[e])}onRackAdd_(e){if(!e.root)return;const t=e.bladeController;Dd(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.tab.add(t.props.value("selected"))}onRackRemove_(e){if(!e.root)return;const t=e.bladeController;ja(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.tab.remove(t.props.value("selected"))}}const Hd=zt({id:"tab",type:"blade",accept(n){const e=at(n,t=>({pages:t.required.array(t.required.object({title:t.required.string})),view:t.required.constant("tab")}));return!e||e.pages.length===0?null:{params:e}},controller(n){const e=new pu(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const i=new xa(n.document,{blade:vr(),itemProps:Ge.fromObject({selected:!1,title:t.title}),props:Ge.fromObject({selected:!1}),viewProps:Bn.create()});e.add(i)}),e},api(n){return n.controller instanceof pu?new cb(n.controller,n.pool):n.controller instanceof xa?new ub(n.controller,n.pool):null}});function pb(n,e){const t=n.accept(e.params);if(!t)return null;const i=at(e.params,r=>({disabled:r.optional.boolean,hidden:r.optional.boolean}));return n.controller({blade:vr(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden}),viewProps:Bn.create({disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden})})}class Za extends Wr{get options(){return this.controller.valueController.props.get("options")}set options(e){this.controller.valueController.props.set("options",e)}}class fb{constructor(){this.disabled=!1,this.emitter=new gt}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class mb{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new gt,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class es{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,i)=>i.constrain(t),e)}}function $s(n,e){if(n instanceof e)return n;if(n instanceof es){const t=n.constraints.reduce((i,r)=>i||(r instanceof e?r:null),null);if(t)return t}return null}class ts{constructor(e){this.values=Ge.fromObject({options:e})}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(r=>r.value===e).length>0?e:t[0].value}}function ns(n){var e;const t=ga;if(Array.isArray(n))return(e=at({items:n},i=>({items:i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))})))===null||e===void 0?void 0:e.items;if(typeof n=="object")return t.required.raw(n).value}function Ja(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Qa(n){return et(n)?null:new ts(Ja(n))}const Ko=$e("lst");class gb{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Ko()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("select");i.classList.add(Ko("s")),t.viewProps.bindDisabled(i),this.element.appendChild(i),this.selectElement=i;const r=e.createElement("div");r.classList.add(Ko("m")),r.appendChild(oo(e,"dropdown")),this.element.appendChild(r),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,xn(this.props_,"options",s=>{Ud(this.selectElement),s.forEach(a=>{const o=e.createElement("option");o.textContent=a.text,this.selectElement.appendChild(o)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class si{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new gb(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}importProps(e){return Qt(e,null,t=>({options:t.required.custom(ns)}),t=>(this.props.set("options",Ja(t.options)),!0))}exportProps(){return en(null,{options:this.props.get("options")})}}const fu=$e("pop");class vb{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(fu()),t.viewProps.bindClassModifiers(this.element),In(t.shows,mr(this.element,fu(void 0,"v")))}}class Gd{constructor(e,t){this.shows=rt(!1),this.viewProps=t.viewProps,this.view=new vb(e,{shows:this.shows,viewProps:this.viewProps})}}const mu=$e("txt");class _b{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(mu()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const i=e.createElement("input");i.classList.add(mu("i")),i.type="text",t.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class jr{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new _b(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const i=e.currentTarget.value,r=this.parser_(i);et(r)||(this.value.rawValue=r),this.view.refresh()}}function xb(n){return String(n)}function Wd(n){return n==="false"?!1:!!n}function gu(n){return xb(n)}function bb(n){return e=>n.reduce((t,i)=>t!==null?t:i(e),null)}const wb=Wt(0);function qs(n){return wb(n)+"%"}function jd(n){return String(n)}function ba(n){return n}function _r({primary:n,secondary:e,forward:t,backward:i}){let r=!1;function s(a){r||(r=!0,a(),r=!1)}n.emitter.on("change",a=>{s(()=>{e.setRawValue(t(n.rawValue,e.rawValue),a.options)})}),e.emitter.on("change",a=>{s(()=>{n.setRawValue(i(n.rawValue,e.rawValue),a.options)}),s(()=>{e.setRawValue(t(n.rawValue,e.rawValue),a.options)})}),s(()=>{e.setRawValue(t(n.rawValue,e.rawValue),{forceEmit:!1,last:!0})})}function Ht(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function Xr(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Fn(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function yb(n){return n==="ArrowUp"||n==="ArrowDown"}function Xd(n){return yb(n)||n==="ArrowLeft"||n==="ArrowRight"}function Zo(n,e){var t,i;const r=e.ownerDocument.defaultView,s=e.getBoundingClientRect();return{x:n.pageX-(((t=r&&r.scrollX)!==null&&t!==void 0?t:0)+s.left),y:n.pageY-(((i=r&&r.scrollY)!==null&&i!==void 0?i:0)+s.top)}}class Ri{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new gt,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const i=this.elem_.ownerDocument;i.addEventListener("mousemove",this.onDocumentMouseMove_),i.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Zo(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Zo(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Zo(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-i.left,y:t.clientY-i.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-i.left,y:t.clientY-i.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const i=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,r=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(i?{x:i.clientX-r.left,y:i.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey})}}const rn=$e("txt");class Mb{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(rn(),rn(void 0,"num")),t.arrayPosition&&this.element.classList.add(rn(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("input");i.classList.add(rn("i")),i.type="text",t.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(rn()),this.inputElement.classList.add(rn("i"));const r=e.createElement("div");r.classList.add(rn("k")),this.element.appendChild(r),this.knobElement=r;const s=e.createElementNS(gn,"svg");s.classList.add(rn("g")),this.knobElement.appendChild(s);const a=e.createElementNS(gn,"path");a.classList.add(rn("gb")),s.appendChild(a),this.guideBodyElem_=a;const o=e.createElementNS(gn,"path");o.classList.add(rn("gh")),s.appendChild(o),this.guideHeadElem_=o;const l=e.createElement("div");l.classList.add($e("tt")()),this.knobElement.appendChild(l),this.tooltipElem_=l,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(rn(void 0,"drg"));return}this.element.classList.add(rn(void 0,"drg"));const t=e.rawValue/this.props_.get("pointerScale"),i=t+(t>0?-1:t<0?1:0),r=_t(-i,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${i+r},0 L${i},4 L${i+r},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const s=this.props_.get("formatter");this.tooltipElem_.textContent=s(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class is{constructor(e,t){var i;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=t.parser,this.props=t.props,this.sliderProps_=(i=t.sliderProps)!==null&&i!==void 0?i:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=rt(null),this.view=new Mb(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const r=new Ri(this.view.knobElement);r.emitter.on("down",this.onPointerDown_),r.emitter.on("move",this.onPointerMove_),r.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,i;const r=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("min"),s=(i=this.sliderProps_)===null||i===void 0?void 0:i.get("max");let a=e;return r!==void 0&&(a=Math.max(a,r)),s!==void 0&&(a=Math.min(a,s)),a}onInputChange_(e){const i=e.currentTarget.value,r=this.parser_(i);et(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(e){const t=Ht(this.props.get("keyScale"),Xr(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){Ht(this.props.get("keyScale"),Xr(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("pointerScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Jo=$e("sld");class Eb{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(Jo()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(Jo("t")),t.viewProps.bindTabIndex(i),this.element.appendChild(i),this.trackElement=i;const r=e.createElement("div");r.classList.add(Jo("k")),this.trackElement.appendChild(r),this.knobElement=r,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=_t(Ze(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class Sb{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new Eb(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ri(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Ze(_t(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("min"),this.props.get("max")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Ht(this.props.get("keyScale"),Fn(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){Ht(this.props.get("keyScale"),Fn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Qo=$e("sldtxt");class Tb{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Qo());const i=e.createElement("div");i.classList.add(Qo("s")),this.sliderView_=t.sliderView,i.appendChild(this.sliderView_.element),this.element.appendChild(i);const r=e.createElement("div");r.classList.add(Qo("t")),this.textView_=t.textView,r.appendChild(this.textView_.element),this.element.appendChild(r)}}class Ys{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new Sb(e,{props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new is(e,{parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new Tb(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(e){return Qt(e,null,t=>({max:t.required.number,min:t.required.number}),t=>{const i=this.sliderC_.props;return i.set("max",t.max),i.set("min",t.min),!0})}exportProps(){const e=this.sliderC_.props;return en(null,{max:e.get("max"),min:e.get("min")})}}function $d(n){return{sliderProps:new Ge({keyScale:n.keyScale,max:n.max,min:n.min}),textProps:new Ge({formatter:rt(n.formatter),keyScale:n.keyScale,pointerScale:rt(n.pointerScale)})}}const Cb={containerUnitSize:"cnt-usz"};function qd(n){return`--${Cb[n]}`}function $r(n){return Rd(n)}function Zn(n){if(ma(n))return at(n,$r)}function Dn(n,e){if(!n)return;const t=[],i=Cd(n,e);i&&t.push(i);const r=Ad(n);return r&&t.push(r),new es(t)}function Ab(n){return n?n.major===gr.major:!1}function Yd(n){if(n==="inline"||n==="popup")return n}function rs(n,e){n.write(e)}const Us=$e("ckb");class Pb{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Us()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("label");i.classList.add(Us("l")),this.element.appendChild(i),this.labelElement=i;const r=e.createElement("input");r.classList.add(Us("i")),r.type="checkbox",this.labelElement.appendChild(r),this.inputElement=r,t.viewProps.bindDisabled(this.inputElement);const s=e.createElement("div");s.classList.add(Us("w")),this.labelElement.appendChild(s);const a=oo(e,"check");s.appendChild(a),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Rb{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Pb(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked,e.preventDefault(),e.stopPropagation()}onLabelMouseDown_(e){e.preventDefault()}}function Lb(n){const e=[],t=Qa(n.options);return t&&e.push(t),new es(e)}const Db=zt({id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const t=at(e,i=>({options:i.optional.custom(ns),readonly:i.optional.constant(!1)}));return t?{initialValue:n,params:t}:null},binding:{reader:n=>Wd,constraint:n=>Lb(n.params),writer:n=>rs},controller:n=>{const e=n.document,t=n.value,i=n.constraint,r=i&&$s(i,ts);return r?new si(e,{props:new Ge({options:r.values.value("options")}),value:t,viewProps:n.viewProps}):new Rb(e,{value:t,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="boolean"?null:n.controller.valueController instanceof si?new Za(n.controller):null}}),hi=$e("col");class Ub{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(hi()),t.foldable.bindExpandedClass(this.element,hi(void 0,"expanded")),xn(t.foldable,"completed",mr(this.element,hi(void 0,"cpl")));const i=e.createElement("div");i.classList.add(hi("h")),this.element.appendChild(i);const r=e.createElement("div");r.classList.add(hi("s")),i.appendChild(r),this.swatchElement=r;const s=e.createElement("div");if(s.classList.add(hi("t")),i.appendChild(s),this.textElement=s,t.pickerLayout==="inline"){const a=e.createElement("div");a.classList.add(hi("p")),this.element.appendChild(a),this.pickerElement=a}else this.pickerElement=null}}function Ib(n,e,t){const i=_t(n/255,0,1),r=_t(e/255,0,1),s=_t(t/255,0,1),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0,u=0;const d=(o+a)/2;return l!==0&&(u=l/(1-Math.abs(a+o-1)),i===a?c=(r-s)/l:r===a?c=2+(s-i)/l:c=4+(i-r)/l,c=c/6+(c<0?1:0)),[c*360,u*100,d*100]}function Nb(n,e,t){const i=(n%360+360)%360,r=_t(e/100,0,1),s=_t(t/100,0,1),a=(1-Math.abs(2*s-1))*r,o=a*(1-Math.abs(i/60%2-1)),l=s-a/2;let c,u,d;return i>=0&&i<60?[c,u,d]=[a,o,0]:i>=60&&i<120?[c,u,d]=[o,a,0]:i>=120&&i<180?[c,u,d]=[0,a,o]:i>=180&&i<240?[c,u,d]=[0,o,a]:i>=240&&i<300?[c,u,d]=[o,0,a]:[c,u,d]=[a,0,o],[(c+l)*255,(u+l)*255,(d+l)*255]}function Ob(n,e,t){const i=_t(n/255,0,1),r=_t(e/255,0,1),s=_t(t/255,0,1),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c;l===0?c=0:a===i?c=60*(((r-s)/l%6+6)%6):a===r?c=60*((s-i)/l+2):c=60*((i-r)/l+4);const u=a===0?0:l/a,d=a;return[c,u*100,d*100]}function Kd(n,e,t){const i=Ed(n,360),r=_t(e/100,0,1),s=_t(t/100,0,1),a=s*r,o=a*(1-Math.abs(i/60%2-1)),l=s-a;let c,u,d;return i>=0&&i<60?[c,u,d]=[a,o,0]:i>=60&&i<120?[c,u,d]=[o,a,0]:i>=120&&i<180?[c,u,d]=[0,a,o]:i>=180&&i<240?[c,u,d]=[0,o,a]:i>=240&&i<300?[c,u,d]=[o,0,a]:[c,u,d]=[a,0,o],[(c+l)*255,(u+l)*255,(d+l)*255]}function Fb(n,e,t){const i=t+e*(100-Math.abs(2*t-100))/200;return[n,i!==0?e*(100-Math.abs(2*t-100))/i:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Bb(n,e,t){const i=100-Math.abs(t*(200-e)/100-100);return[n,i!==0?e*t/i:0,t*(200-e)/(2*100)]}function bn(n){return[n[0],n[1],n[2]]}function lo(n,e){return[n[0],n[1],n[2],e]}const kb={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:Fb,rgb:Nb},hsv:{hsl:Bb,hsv:(n,e,t)=>[n,e,t],rgb:Kd},rgb:{hsl:Ib,hsv:Ob,rgb:(n,e,t)=>[n,e,t]}};function dr(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function Vb(n,e){return n===e?e:Ed(n,e)}function Zd(n,e,t){var i;const r=dr(e,t);return[e==="rgb"?_t(n[0],0,r[0]):Vb(n[0],r[0]),_t(n[1],0,r[1]),_t(n[2],0,r[2]),_t((i=n[3])!==null&&i!==void 0?i:1,0,1)]}function vu(n,e,t,i){const r=dr(e,t),s=dr(e,i);return n.map((a,o)=>a/r[o]*s[o])}function Jd(n,e,t){const i=vu(n,e.mode,e.type,"int"),r=kb[e.mode][t.mode](...i);return vu(r,t.mode,"int",t.type)}class Ye{static black(){return new Ye([0,0,0],"rgb")}constructor(e,t){this.type="int",this.mode=t,this.comps_=Zd(e,t,this.type)}getComponents(e){return lo(Jd(bn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const e=this.getComponents("rgb");return{r:e[0],g:e[1],b:e[2],a:e[3]}}}const Wn=$e("colp");class zb{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(Wn()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(Wn("hsv"));const r=e.createElement("div");r.classList.add(Wn("sv")),this.svPaletteView_=t.svPaletteView,r.appendChild(this.svPaletteView_.element),i.appendChild(r);const s=e.createElement("div");s.classList.add(Wn("h")),this.hPaletteView_=t.hPaletteView,s.appendChild(this.hPaletteView_.element),i.appendChild(s),this.element.appendChild(i);const a=e.createElement("div");if(a.classList.add(Wn("rgb")),this.textsView_=t.textsView,a.appendChild(this.textsView_.element),this.element.appendChild(a),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const o=e.createElement("div");o.classList.add(Wn("a"));const l=e.createElement("div");l.classList.add(Wn("ap")),l.appendChild(this.alphaViews_.palette.element),o.appendChild(l);const c=e.createElement("div");c.classList.add(Wn("at")),c.appendChild(this.alphaViews_.text.element),o.appendChild(c),this.element.appendChild(o)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Hb(n){return n==="int"?"int":n==="float"?"float":void 0}function el(n){return at(n,e=>({color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Hb)}),expanded:e.optional.boolean,picker:e.optional.custom(Yd),readonly:e.optional.constant(!1)}))}function Si(n){return n?.1:1}function Qd(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}class tl{constructor(e,t){this.type="float",this.mode=t,this.comps_=Zd(e,t,this.type)}getComponents(e){return lo(Jd(bn(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const e=this.getComponents("rgb");return{r:e[0],g:e[1],b:e[2],a:e[3]}}}const Gb={int:(n,e)=>new Ye(n,e),float:(n,e)=>new tl(n,e)};function nl(n,e,t){return Gb[t](n,e)}function Wb(n){return n.type==="float"}function jb(n){return n.type==="int"}function Xb(n){const e=n.getComponents(),t=dr(n.mode,"int");return new Ye([Math.round(Ze(e[0],0,1,0,t[0])),Math.round(Ze(e[1],0,1,0,t[1])),Math.round(Ze(e[2],0,1,0,t[2])),e[3]],n.mode)}function $b(n){const e=n.getComponents(),t=dr(n.mode,"int");return new tl([Ze(e[0],0,t[0],0,1),Ze(e[1],0,t[1],0,1),Ze(e[2],0,t[2],0,1),e[3]],n.mode)}function Vt(n,e){if(n.type===e)return n;if(jb(n)&&e==="float")return $b(n);if(Wb(n)&&e==="int")return Xb(n);throw ut.shouldNeverHappen()}function qb(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function on(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const Yb={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function eh(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),i=e[2];return Yb[i](t)}function th(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[on(e[1],255),on(e[2],255),on(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Kb(n){const e=th(n);return e?new Ye(e,"rgb"):null}function nh(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[on(e[1],255),on(e[2],255),on(e[3],255),on(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Zb(n){const e=nh(n);return e?new Ye(e,"rgb"):null}function ih(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[eh(e[1]),on(e[2],100),on(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Jb(n){const e=ih(n);return e?new Ye(e,"hsl"):null}function rh(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[eh(e[1]),on(e[2],100),on(e[3],100),on(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Qb(n){const e=rh(n);return e?new Ye(e,"hsl"):null}function sh(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function ew(n){const e=sh(n);return e?new Ye(e,"rgb"):null}function oh(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Ze(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Ze(parseInt(t[4],16),0,255,0,1)]:null}function tw(n){const e=oh(n);return e?new Ye(e,"rgb"):null}function ah(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function nw(n){return e=>{const t=ah(e);return t?nl(t,"rgb",n):null}}function lh(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function iw(n){return e=>{const t=lh(e);return t?nl(t,"rgb",n):null}}const rw=[{parser:sh,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:oh,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:th,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:nh,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:ih,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:rh,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:ah,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:lh,result:{alpha:!0,mode:"rgb",notation:"object"}}];function sw(n){return rw.reduce((e,{parser:t,result:i})=>e||(t(n)?i:null),null)}function ow(n,e="int"){const t=sw(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}function ss(n){const e=[ew,tw,Kb,Zb,Jb,Qb];e.push(nw("int"),iw("int"));const t=bb(e);return i=>{const r=t(i);return r?Vt(r,n):null}}function aw(n){const e=ss("int");if(typeof n!="string")return Ye.black();const t=e(n);return t??Ye.black()}function ch(n){const e=_t(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function il(n,e="#"){const t=bn(n.getComponents("rgb")).map(ch).join("");return`${e}${t}`}function rl(n,e="#"){const t=n.getComponents("rgb"),i=[t[0],t[1],t[2],t[3]*255].map(ch).join("");return`${e}${i}`}function uh(n){const e=Wt(0),t=Vt(n,"int");return`rgb(${bn(t.getComponents("rgb")).map(r=>e(r)).join(", ")})`}function Fs(n){const e=Wt(2),t=Wt(0);return`rgba(${Vt(n,"int").getComponents("rgb").map((s,a)=>(a===3?e:t)(s)).join(", ")})`}function lw(n){const e=[Wt(0),qs,qs],t=Vt(n,"int");return`hsl(${bn(t.getComponents("hsl")).map((r,s)=>e[s](r)).join(", ")})`}function cw(n){const e=[Wt(0),qs,qs,Wt(2)];return`hsla(${Vt(n,"int").getComponents("hsl").map((r,s)=>e[s](r)).join(", ")})`}function dh(n,e){const t=Wt(e==="float"?2:0),i=["r","g","b"],r=Vt(n,e);return`{${bn(r.getComponents("rgb")).map((a,o)=>`${i[o]}: ${t(a)}`).join(", ")}}`}function uw(n){return e=>dh(e,n)}function hh(n,e){const t=Wt(2),i=Wt(e==="float"?2:0),r=["r","g","b","a"];return`{${Vt(n,e).getComponents("rgb").map((o,l)=>{const c=l===3?t:i;return`${r[l]}: ${c(o)}`}).join(", ")}}`}function dw(n){return e=>hh(e,n)}const hw=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:il},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:rl},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:uh},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:Fs},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:lw},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:cw},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:uw(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:dw(e)}],[])];function ph(n){return hw.reduce((e,t)=>e||(qb(t.format,n)?t.stringifier:null),null)}const Ar=$e("apl");class pw{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Ar()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const i=e.createElement("div");i.classList.add(Ar("b")),this.element.appendChild(i);const r=e.createElement("div");r.classList.add(Ar("c")),i.appendChild(r),this.colorElem_=r;const s=e.createElement("div");s.classList.add(Ar("m")),this.element.appendChild(s),this.markerElem_=s;const a=e.createElement("div");a.classList.add(Ar("p")),this.markerElem_.appendChild(a),this.previewElem_=a,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),i=new Ye([t[0],t[1],t[2],0],"rgb"),r=new Ye([t[0],t[1],t[2],255],"rgb"),s=["to right",Fs(i),Fs(r)];this.colorElem_.style.background=`linear-gradient(${s.join(",")})`,this.previewElem_.style.backgroundColor=Fs(e);const a=Ze(t[3],0,1,0,100);this.markerElem_.style.left=`${a}%`}onValueChange_(){this.update_()}}class fw{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new pw(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ri(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const i=e.point.x/e.bounds.width,r=this.value.rawValue,[s,a,o]=r.getComponents("hsv");this.value.setRawValue(new Ye([s,a,o,i],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Ht(Si(!0),Fn(e));if(t===0)return;const i=this.value.rawValue,[r,s,a,o]=i.getComponents("hsv");this.value.setRawValue(new Ye([r,s,a,o+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Ht(Si(!0),Fn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Yi=$e("coltxt");function mw(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return e.appendChild(t.reduce((i,r)=>{const s=n.createElement("option");return s.textContent=r.text,s.value=r.value,i.appendChild(s),i},n.createDocumentFragment())),e}class gw{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Yi()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(Yi("m")),this.modeElem_=mw(e),this.modeElem_.classList.add(Yi("ms")),i.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const r=e.createElement("div");r.classList.add(Yi("mm")),r.appendChild(oo(e,"dropdown")),i.appendChild(r),this.element.appendChild(i);const s=e.createElement("div");s.classList.add(Yi("w")),this.element.appendChild(s),this.inputsElem_=s,this.inputViews_=t.inputViews,this.applyInputViews_(),In(t.mode,a=>{this.modeElem_.value=a})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(e){this.inputViews_=e,this.applyInputViews_()}applyInputViews_(){Ud(this.inputsElem_);const e=this.element.ownerDocument;this.inputViews_.forEach(t=>{const i=e.createElement("div");i.classList.add(Yi("c")),i.appendChild(t.element),this.inputsElem_.appendChild(i)})}}function vw(n){return Wt(n==="float"?2:0)}function _w(n,e,t){const i=dr(n,e)[t];return new Zr({min:0,max:i})}function xw(n,e,t){return new is(n,{arrayPosition:t===0?"fst":t===2?"lst":"mid",parser:e.parser,props:Ge.fromObject({formatter:vw(e.colorType),keyScale:Si(!1),pointerScale:e.colorType==="float"?.01:1}),value:rt(0,{constraint:_w(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}function bw(n,e){const t={colorMode:e.colorMode,colorType:e.colorType,parser:On,viewProps:e.viewProps};return[0,1,2].map(i=>{const r=xw(n,t,i);return _r({primary:e.value,secondary:r.value,forward(s){return Vt(s,e.colorType).getComponents(e.colorMode)[i]},backward(s,a){const o=e.colorMode,c=Vt(s,e.colorType).getComponents(o);c[i]=a;const u=nl(lo(bn(c),c[3]),o,e.colorType);return Vt(u,"int")}}),r})}function ww(n,e){const t=new jr(n,{parser:ss("int"),props:Ge.fromObject({formatter:il}),value:rt(Ye.black()),viewProps:e.viewProps});return _r({primary:e.value,secondary:t.value,forward:i=>new Ye(bn(i.getComponents()),i.mode),backward:(i,r)=>new Ye(lo(bn(r.getComponents(i.mode)),i.getComponents()[3]),i.mode)}),[t]}function yw(n){return n!=="hex"}class Mw{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=rt(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new gw(e,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t=this.colorMode.rawValue;return yw(t)?bw(e,{colorMode:t,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):ww(e,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(i=>i.view)}}const ea=$e("hpl");class Ew{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ea()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const i=e.createElement("div");i.classList.add(ea("c")),this.element.appendChild(i);const r=e.createElement("div");r.classList.add(ea("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=uh(new Ye([t,100,100],"hsv"));const i=Ze(t,0,360,0,100);this.markerElem_.style.left=`${i}%`}onValueChange_(){this.update_()}}class Sw{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ew(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ri(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const i=Ze(_t(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),r=this.value.rawValue,[,s,a,o]=r.getComponents("hsv");this.value.setRawValue(new Ye([i,s,a,o],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Ht(Si(!1),Fn(e));if(t===0)return;const i=this.value.rawValue,[r,s,a,o]=i.getComponents("hsv");this.value.setRawValue(new Ye([r+t,s,a,o],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Ht(Si(!1),Fn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ta=$e("svp"),_u=64;class Tw{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ta()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const i=e.createElement("canvas");i.height=_u,i.width=_u,i.classList.add(ta("c")),this.element.appendChild(i),this.canvasElement=i;const r=e.createElement("div");r.classList.add(ta("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const e=Sx(this.canvasElement);if(!e)return;const i=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,s=this.canvasElement.height,a=e.getImageData(0,0,r,s),o=a.data;for(let u=0;u<s;u++)for(let d=0;d<r;d++){const p=Ze(d,0,r,0,100),f=Ze(u,0,s,100,0),g=Kd(i[0],p,f),v=(u*r+d)*4;o[v]=g[0],o[v+1]=g[1],o[v+2]=g[2],o[v+3]=255}e.putImageData(a,0,0);const l=Ze(i[1],0,100,0,100);this.markerElem_.style.left=`${l}%`;const c=Ze(i[2],0,100,100,0);this.markerElem_.style.top=`${c}%`}onValueChange_(){this.update_()}}class Cw{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Tw(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ri(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const i=Ze(e.point.x,0,e.bounds.width,0,100),r=Ze(e.point.y,0,e.bounds.height,100,0),[s,,,a]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ye([s,i,r,a],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Xd(e.key)&&e.preventDefault();const[t,i,r,s]=this.value.rawValue.getComponents("hsv"),a=Si(!1),o=Ht(a,Fn(e)),l=Ht(a,Xr(e));o===0&&l===0||this.value.setRawValue(new Ye([t,i+o,r+l,s],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Si(!1),i=Ht(t,Fn(e)),r=Ht(t,Xr(e));i===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Aw{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Sw(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Cw(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new fw(e,{value:this.value,viewProps:this.viewProps}),text:new is(e,{parser:On,props:Ge.fromObject({pointerScale:.01,keyScale:.1,formatter:Wt(2)}),value:rt(0,{constraint:new Zr({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&_r({primary:this.value,secondary:this.alphaIcs_.text.value,forward:i=>i.getComponents()[3],backward:(i,r)=>{const s=i.getComponents();return s[3]=r,new Ye(s,i.mode)}}),this.textsC_=new Mw(e,{colorType:t.colorType,value:this.value,viewProps:this.viewProps}),this.view=new zb(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const na=$e("colsw");class Pw{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(na()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(na("sw")),this.element.appendChild(i),this.swatchElem_=i;const r=e.createElement("button");r.classList.add(na("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=rl(e)}onValueChange_(){this.update_()}}class Rw{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Pw(e,{value:this.value,viewProps:this.viewProps})}}class sl{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Qr.create(t.expanded),this.swatchC_=new Rw(e,{value:this.value,viewProps:this.viewProps});const i=this.swatchC_.view.buttonElement;i.addEventListener("blur",this.onButtonBlur_),i.addEventListener("click",this.onButtonClick_),this.textC_=new jr(e,{parser:t.parser,props:Ge.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Ub(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Gd(e,{viewProps:this.viewProps}):null;const r=new Aw(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(r.view.element),_r({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,a)=>a})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ka(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,i=e.relatedTarget;(!i||!t.contains(i))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,i=Id(e);i&&t.contains(i)||i&&i===this.swatchC_.view.buttonElement&&!Wa(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Lw(n){return bn(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function Dw(n){return n.getComponents("rgb").reduce((e,t,i)=>{const r=Math.floor(i===3?t*255:t)&255;return e<<8|r},0)>>>0}function Uw(n){return new Ye([n>>16&255,n>>8&255,n&255],"rgb")}function Iw(n){return new Ye([n>>24&255,n>>16&255,n>>8&255,Ze(n&255,0,255,0,1)],"rgb")}function Nw(n){return typeof n!="number"?Ye.black():Uw(n)}function Ow(n){return typeof n!="number"?Ye.black():Iw(n)}function Bs(n,e){return typeof n!="object"||et(n)?!1:e in n&&typeof n[e]=="number"}function fh(n){return Bs(n,"r")&&Bs(n,"g")&&Bs(n,"b")}function mh(n){return fh(n)&&Bs(n,"a")}function gh(n){return fh(n)}function ol(n,e){if(n.mode!==e.mode||n.type!==e.type)return!1;const t=n.getComponents(),i=e.getComponents();for(let r=0;r<t.length;r++)if(t[r]!==i[r])return!1;return!0}function xu(n){return"a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b]}function Fw(n){const e=ph(n);return e?(t,i)=>{rs(t,e(i))}:null}function Bw(n){const e=n?Dw:Lw;return(t,i)=>{rs(t,e(i))}}function kw(n,e,t){const r=Vt(e,t).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function Vw(n,e,t){const r=Vt(e,t).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function zw(n,e){return(t,i)=>{n?kw(t,i,e):Vw(t,i,e)}}function Hw(n){var e;return!!(!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Gw(n){return n?e=>rl(e,"0x"):e=>il(e,"0x")}function Ww(n){return"color"in n||n.view==="color"}const jw=zt({id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Ww(e))return null;const t=el(e);return t?{initialValue:n,params:Object.assign(Object.assign({},t),{supportsAlpha:Hw(e)})}:null},binding:{reader:n=>n.params.supportsAlpha?Ow:Nw,equals:ol,writer:n=>Bw(n.params.supportsAlpha)},controller:n=>{var e,t;return new sl(n.document,{colorType:"int",expanded:(e=n.params.expanded)!==null&&e!==void 0?e:!1,formatter:Gw(n.params.supportsAlpha),parser:ss("int"),pickerLayout:(t=n.params.picker)!==null&&t!==void 0?t:"popup",supportsAlpha:n.params.supportsAlpha,value:n.value,viewProps:n.viewProps})}});function Xw(n,e){if(!gh(n))return Vt(Ye.black(),e);if(e==="int"){const t=xu(n);return new Ye(t,"rgb")}if(e==="float"){const t=xu(n);return new tl(t,"rgb")}return Vt(Ye.black(),"int")}function $w(n){return mh(n)}function qw(n){return e=>{const t=Xw(e,n);return Vt(t,"int")}}function Yw(n,e){return t=>n?hh(t,e):dh(t,e)}const Kw=zt({id:"input-color-object",type:"input",accept:(n,e)=>{var t;if(!gh(n))return null;const i=el(e);return i?{initialValue:n,params:Object.assign(Object.assign({},i),{colorType:(t=Qd(e))!==null&&t!==void 0?t:"int"})}:null},binding:{reader:n=>qw(n.params.colorType),equals:ol,writer:n=>zw($w(n.initialValue),n.params.colorType)},controller:n=>{var e,t;const i=mh(n.initialValue);return new sl(n.document,{colorType:n.params.colorType,expanded:(e=n.params.expanded)!==null&&e!==void 0?e:!1,formatter:Yw(i,n.params.colorType),parser:ss("int"),pickerLayout:(t=n.params.picker)!==null&&t!==void 0?t:"popup",supportsAlpha:i,value:n.value,viewProps:n.viewProps})}}),Zw=zt({id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||e.view==="text")return null;const t=ow(n,Qd(e));if(!t)return null;const i=ph(t);if(!i)return null;const r=el(e);return r?{initialValue:n,params:Object.assign(Object.assign({},r),{format:t,stringifier:i})}:null},binding:{reader:()=>aw,equals:ol,writer:n=>{const e=Fw(n.params.format);if(!e)throw ut.notBindable();return e}},controller:n=>{var e,t;return new sl(n.document,{colorType:n.params.format.type,expanded:(e=n.params.expanded)!==null&&e!==void 0?e:!1,formatter:n.params.stringifier,parser:ss("int"),pickerLayout:(t=n.params.picker)!==null&&t!==void 0?t:"popup",supportsAlpha:n.params.format.alpha,value:n.value,viewProps:n.viewProps})}});class al{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((i,r)=>{var s,a;return(a=(s=this.components[r])===null||s===void 0?void 0:s.constrain(i))!==null&&a!==void 0?a:i});return this.asm_.fromComponents(t)}}const bu=$e("pndtxt");class Jw{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(bu()),this.textViews.forEach(i=>{const r=e.createElement("div");r.classList.add(bu("a")),r.appendChild(i.element),this.element.appendChild(r)})}}function Qw(n,e,t){return new is(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",parser:e.parser,props:e.axes[t].textProps,value:rt(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class ll{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((i,r)=>Qw(e,t,r)),this.acs_.forEach((i,r)=>{_r({primary:this.value,secondary:i.value,forward:s=>t.assembly.toComponents(s)[r],backward:(s,a)=>{const o=t.assembly.toComponents(s);return o[r]=a,t.assembly.fromComponents(o)}})}),this.view=new Jw(e,{textViews:this.acs_.map(i=>i.view)})}get textControllers(){return this.acs_}}class ey extends Wr{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(e){this.controller.valueController.sliderController.props.set("max",e)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(e){this.controller.valueController.sliderController.props.set("min",e)}}function ty(n,e){const t=[],i=Cd(n,e);i&&t.push(i);const r=Ad(n);r&&t.push(r);const s=Qa(n.options);return s&&t.push(s),new es(t)}const ny=zt({id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=at(e,i=>Object.assign(Object.assign({},Rd(i)),{options:i.optional.custom(ns),readonly:i.optional.constant(!1)}));return t?{initialValue:n,params:t}:null},binding:{reader:n=>Md,constraint:n=>ty(n.params,n.initialValue),writer:n=>rs},controller:n=>{const e=n.value,t=n.constraint,i=t&&$s(t,ts);if(i)return new si(n.document,{props:new Ge({options:i.values.value("options")}),value:e,viewProps:n.viewProps});const r=Pd(n.params,e.rawValue),s=t&&$s(t,Zr);return s?new Ys(n.document,Object.assign(Object.assign({},$d(Object.assign(Object.assign({},r),{keyScale:rt(r.keyScale),max:s.values.value("max"),min:s.values.value("min")}))),{parser:On,value:e,viewProps:n.viewProps})):new is(n.document,{parser:On,props:Ge.fromObject(r),value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="number"?null:n.controller.valueController instanceof Ys?new ey(n.controller):n.controller.valueController instanceof si?new Za(n.controller):null}});class ii{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(et(e))return!1;const t=e.x,i=e.y;return!(typeof t!="number"||typeof i!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const vh={toComponents:n=>n.getComponents(),fromComponents:n=>new ii(...n)},Ki=$e("p2d");class iy{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ki()),t.viewProps.bindClassModifiers(this.element),In(t.expanded,mr(this.element,Ki(void 0,"expanded")));const i=e.createElement("div");i.classList.add(Ki("h")),this.element.appendChild(i);const r=e.createElement("button");r.classList.add(Ki("b")),r.appendChild(oo(e,"p2dpad")),t.viewProps.bindDisabled(r),i.appendChild(r),this.buttonElement=r;const s=e.createElement("div");if(s.classList.add(Ki("t")),i.appendChild(s),this.textElement=s,t.pickerLayout==="inline"){const a=e.createElement("div");a.classList.add(Ki("p")),this.element.appendChild(a),this.pickerElement=a}else this.pickerElement=null}}const jn=$e("p2dp");class ry{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=e.createElement("div"),this.element.classList.add(jn()),t.layout==="popup"&&this.element.classList.add(jn(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(jn("p")),t.viewProps.bindTabIndex(i),this.element.appendChild(i),this.padElement=i;const r=e.createElementNS(gn,"svg");r.classList.add(jn("g")),this.padElement.appendChild(r),this.svgElem_=r;const s=e.createElementNS(gn,"line");s.classList.add(jn("ax")),s.setAttributeNS(null,"x1","0"),s.setAttributeNS(null,"y1","50%"),s.setAttributeNS(null,"x2","100%"),s.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(s);const a=e.createElementNS(gn,"line");a.classList.add(jn("ax")),a.setAttributeNS(null,"x1","50%"),a.setAttributeNS(null,"y1","0"),a.setAttributeNS(null,"x2","50%"),a.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(a);const o=e.createElementNS(gn,"line");o.classList.add(jn("l")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(o),this.lineElem_=o;const l=e.createElement("div");l.classList.add(jn("m")),this.padElement.appendChild(l),this.markerElem_=l,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),i=this.props_.get("max"),r=Ze(e,-i,+i,0,100),s=Ze(t,-i,+i,0,100),a=this.props_.get("invertsY")?100-s:s;this.lineElem_.setAttributeNS(null,"x2",`${r}%`),this.lineElem_.setAttributeNS(null,"y2",`${a}%`),this.markerElem_.style.left=`${r}%`,this.markerElem_.style.top=`${a}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function wu(n,e,t){return[Ht(e[0],Fn(n)),Ht(e[1],Xr(n))*(t?1:-1)]}class sy{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new ry(e,{layout:t.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Ri(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const i=this.props.get("max"),r=Ze(e.point.x,0,e.bounds.width,-i,+i),s=Ze(this.props.get("invertsY")?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-i,+i);this.value.setRawValue(new ii(r,s),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Xd(e.key)&&e.preventDefault();const[t,i]=wu(e,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));t===0&&i===0||this.value.setRawValue(new ii(this.value.rawValue.x+t,this.value.rawValue.y+i),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,i]=wu(e,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));t===0&&i===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class oy{constructor(e,t){var i,r;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Qr.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Gd(e,{viewProps:this.viewProps}):null;const s=new sy(e,{layout:t.pickerLayout,props:new Ge({invertsY:rt(t.invertsY),max:rt(t.max),xKeyScale:t.axes[0].textProps.value("keyScale"),yKeyScale:t.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(a=>{a.addEventListener("blur",this.onPopupChildBlur_),a.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.textC_=new ll(e,{assembly:vh,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new iy(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(i=this.view.buttonElement)===null||i===void 0||i.addEventListener("blur",this.onPadButtonBlur_),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),_r({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:a=>a,backward:(a,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Ka(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,i=e.relatedTarget;(!i||!t.contains(i))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,i=Id(e);i&&t.contains(i)||i&&i===this.view.buttonElement&&!Wa(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}function ay(n){return ii.isObject(n)?new ii(n.x,n.y):new ii}function ly(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function cy(n,e){return new al({assembly:vh,components:[Dn(Object.assign(Object.assign({},n),n.x),e.x),Dn(Object.assign(Object.assign({},n),n.y),e.y)]})}function yu(n,e){var t,i;if(!et(n.min)||!et(n.max))return Math.max(Math.abs((t=n.min)!==null&&t!==void 0?t:0),Math.abs((i=n.max)!==null&&i!==void 0?i:0));const r=Sd(n);return Math.max(Math.abs(r)*10,Math.abs(e)*10)}function uy(n,e){var t,i;const r=yu(Mi(n,(t=n.x)!==null&&t!==void 0?t:{}),e.x),s=yu(Mi(n,(i=n.y)!==null&&i!==void 0?i:{}),e.y);return Math.max(r,s)}function dy(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const hy=zt({id:"input-point2d",type:"input",accept:(n,e)=>{if(!ii.isObject(n))return null;const t=at(e,i=>Object.assign(Object.assign({},$r(i)),{expanded:i.optional.boolean,picker:i.optional.custom(Yd),readonly:i.optional.constant(!1),x:i.optional.custom(Zn),y:i.optional.object(Object.assign(Object.assign({},$r(i)),{inverted:i.optional.boolean}))}));return t?{initialValue:n,params:t}:null},binding:{reader:()=>ay,constraint:n=>cy(n.params,n.initialValue),equals:ii.equals,writer:()=>ly},controller:n=>{var e,t;const i=n.document,r=n.value,s=n.constraint,a=[n.params.x,n.params.y];return new oy(i,{axes:r.rawValue.getComponents().map((o,l)=>{var c;return Ga({constraint:s.components[l],initialValue:o,params:Mi(n.params,(c=a[l])!==null&&c!==void 0?c:{})})}),expanded:(e=n.params.expanded)!==null&&e!==void 0?e:!1,invertsY:dy(n.params),max:uy(n.params,r.rawValue),parser:On,pickerLayout:(t=n.params.picker)!==null&&t!==void 0?t:"popup",value:r,viewProps:n.viewProps})}});class ir{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(et(e))return!1;const t=e.x,i=e.y,r=e.z;return!(typeof t!="number"||typeof i!="number"||typeof r!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const _h={toComponents:n=>n.getComponents(),fromComponents:n=>new ir(...n)};function py(n){return ir.isObject(n)?new ir(n.x,n.y,n.z):new ir}function fy(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function my(n,e){return new al({assembly:_h,components:[Dn(Object.assign(Object.assign({},n),n.x),e.x),Dn(Object.assign(Object.assign({},n),n.y),e.y),Dn(Object.assign(Object.assign({},n),n.z),e.z)]})}const gy=zt({id:"input-point3d",type:"input",accept:(n,e)=>{if(!ir.isObject(n))return null;const t=at(e,i=>Object.assign(Object.assign({},$r(i)),{readonly:i.optional.constant(!1),x:i.optional.custom(Zn),y:i.optional.custom(Zn),z:i.optional.custom(Zn)}));return t?{initialValue:n,params:t}:null},binding:{reader:n=>py,constraint:n=>my(n.params,n.initialValue),equals:ir.equals,writer:n=>fy},controller:n=>{const e=n.value,t=n.constraint,i=[n.params.x,n.params.y,n.params.z];return new ll(n.document,{assembly:_h,axes:e.rawValue.getComponents().map((r,s)=>{var a;return Ga({constraint:t.components[s],initialValue:r,params:Mi(n.params,(a=i[s])!==null&&a!==void 0?a:{})})}),parser:On,value:e,viewProps:n.viewProps})}});class rr{constructor(e=0,t=0,i=0,r=0){this.x=e,this.y=t,this.z=i,this.w=r}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(et(e))return!1;const t=e.x,i=e.y,r=e.z,s=e.w;return!(typeof t!="number"||typeof i!="number"||typeof r!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const xh={toComponents:n=>n.getComponents(),fromComponents:n=>new rr(...n)};function vy(n){return rr.isObject(n)?new rr(n.x,n.y,n.z,n.w):new rr}function _y(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function xy(n,e){return new al({assembly:xh,components:[Dn(Object.assign(Object.assign({},n),n.x),e.x),Dn(Object.assign(Object.assign({},n),n.y),e.y),Dn(Object.assign(Object.assign({},n),n.z),e.z),Dn(Object.assign(Object.assign({},n),n.w),e.w)]})}const by=zt({id:"input-point4d",type:"input",accept:(n,e)=>{if(!rr.isObject(n))return null;const t=at(e,i=>Object.assign(Object.assign({},$r(i)),{readonly:i.optional.constant(!1),w:i.optional.custom(Zn),x:i.optional.custom(Zn),y:i.optional.custom(Zn),z:i.optional.custom(Zn)}));return t?{initialValue:n,params:t}:null},binding:{reader:n=>vy,constraint:n=>xy(n.params,n.initialValue),equals:rr.equals,writer:n=>_y},controller:n=>{const e=n.value,t=n.constraint,i=[n.params.x,n.params.y,n.params.z,n.params.w];return new ll(n.document,{assembly:xh,axes:e.rawValue.getComponents().map((r,s)=>{var a;return Ga({constraint:t.components[s],initialValue:r,params:Mi(n.params,(a=i[s])!==null&&a!==void 0?a:{})})}),parser:On,value:e,viewProps:n.viewProps})}});function wy(n){const e=[],t=Qa(n.options);return t&&e.push(t),new es(e)}const yy=zt({id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const t=at(e,i=>({readonly:i.optional.constant(!1),options:i.optional.custom(ns)}));return t?{initialValue:n,params:t}:null},binding:{reader:n=>jd,constraint:n=>wy(n.params),writer:n=>rs},controller:n=>{const e=n.document,t=n.value,i=n.constraint,r=i&&$s(i,ts);return r?new si(e,{props:new Ge({options:r.values.value("options")}),value:t,viewProps:n.viewProps}):new jr(e,{parser:s=>s,props:Ge.fromObject({formatter:ba}),value:t,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="string"?null:n.controller.valueController instanceof si?new Za(n.controller):null}}),os={monitor:{defaultInterval:200,defaultRows:3}},Mu=$e("mll");class My{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Mu()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("textarea");i.classList.add(Mu("i")),i.style.height=`calc(var(${qd("containerUnitSize")}) * ${t.rows})`,i.readOnly=!0,t.viewProps.bindDisabled(i),this.element.appendChild(i),this.textareaElem_=i,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,i=[];this.value.rawValue.forEach(r=>{r!==void 0&&i.push(this.formatter_(r))}),e.textContent=i.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class cl{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new My(e,{formatter:t.formatter,rows:t.rows,value:this.value,viewProps:this.viewProps})}}const Eu=$e("sgl");class Ey{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Eu()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("input");i.classList.add(Eu("i")),i.readOnly=!0,i.type="text",t.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class ul{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ey(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const Sy=zt({id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const t=at(e,i=>({readonly:i.required.constant(!0),rows:i.optional.number}));return t?{initialValue:n,params:t}:null},binding:{reader:n=>Wd},controller:n=>{var e;return n.value.rawValue.length===1?new ul(n.document,{formatter:gu,value:n.value,viewProps:n.viewProps}):new cl(n.document,{formatter:gu,rows:(e=n.params.rows)!==null&&e!==void 0?e:os.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}});class Ty extends Wr{get max(){return this.controller.valueController.props.get("max")}set max(e){this.controller.valueController.props.set("max",e)}get min(){return this.controller.valueController.props.get("min")}set min(e){this.controller.valueController.props.set("min",e)}}const Xn=$e("grl");class Cy{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Xn()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const i=e.createElementNS(gn,"svg");i.classList.add(Xn("g")),i.style.height=`calc(var(${qd("containerUnitSize")}) * ${t.rows})`,this.element.appendChild(i),this.svgElem_=i;const r=e.createElementNS(gn,"polyline");this.svgElem_.appendChild(r),this.lineElem_=r;const s=e.createElement("div");s.classList.add(Xn("t"),$e("tt")()),this.element.appendChild(s),this.tooltipElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:e,clientHeight:t}=this.element,i=this.value.rawValue.length-1,r=this.props_.get("min"),s=this.props_.get("max"),a=[];this.value.rawValue.forEach((d,p)=>{if(d===void 0)return;const f=Ze(p,0,i,0,e),g=Ze(d,r,s,t,0);a.push([f,g].join(","))}),this.lineElem_.setAttributeNS(null,"points",a.join(" "));const o=this.tooltipElem_,l=this.value.rawValue[this.cursor_.rawValue];if(l===void 0){o.classList.remove(Xn("t","a"));return}const c=Ze(this.cursor_.rawValue,0,i,0,e),u=Ze(l,r,s,t,0);o.style.left=`${c}px`,o.style.top=`${u}px`,o.textContent=`${this.formatter_(l)}`,o.classList.contains(Xn("t","a"))||(o.classList.add(Xn("t","a"),Xn("t","in")),Xs(o),o.classList.remove(Xn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class bh{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=rt(-1),this.view=new Cy(e,{cursor:this.cursor_,formatter:t.formatter,rows:t.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!Wa(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const i=new Ri(this.view.element);i.emitter.on("down",this.onGraphPointerDown_),i.emitter.on("move",this.onGraphPointerMove_),i.emitter.on("up",this.onGraphPointerUp_)}}importProps(e){return Qt(e,null,t=>({max:t.required.number,min:t.required.number}),t=>(this.props.set("max",t.max),this.props.set("min",t.min),!0))}exportProps(){return en(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const{clientWidth:t}=this.view.element;this.cursor_.rawValue=Math.floor(Ze(e.offsetX,0,t,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Ze(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function wa(n){return et(n.format)?Wt(2):n.format}function Ay(n){var e;return n.value.rawValue.length===1?new ul(n.document,{formatter:wa(n.params),value:n.value,viewProps:n.viewProps}):new cl(n.document,{formatter:wa(n.params),rows:(e=n.params.rows)!==null&&e!==void 0?e:os.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}function Py(n){var e,t,i;return new bh(n.document,{formatter:wa(n.params),rows:(e=n.params.rows)!==null&&e!==void 0?e:os.monitor.defaultRows,props:Ge.fromObject({max:(t=n.params.max)!==null&&t!==void 0?t:100,min:(i=n.params.min)!==null&&i!==void 0?i:0}),value:n.value,viewProps:n.viewProps})}function Su(n){return n.view==="graph"}const Ry=zt({id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=at(e,i=>({format:i.optional.function,max:i.optional.number,min:i.optional.number,readonly:i.required.constant(!0),rows:i.optional.number,view:i.optional.string}));return t?{initialValue:n,params:t}:null},binding:{defaultBufferSize:n=>Su(n)?64:1,reader:n=>Md},controller:n=>Su(n.params)?Py(n):Ay(n),api:n=>n.controller.valueController instanceof bh?new Ty(n.controller):null}),Ly=zt({id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=at(e,i=>({multiline:i.optional.boolean,readonly:i.required.constant(!0),rows:i.optional.number}));return t?{initialValue:n,params:t}:null},binding:{reader:n=>jd},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||n.params.multiline?new cl(n.document,{formatter:ba,rows:(e=n.params.rows)!==null&&e!==void 0?e:os.monitor.defaultRows,value:t,viewProps:n.viewProps}):new ul(n.document,{formatter:ba,value:t,viewProps:n.viewProps})}});class Dy{constructor(){this.map_=new Map}get(e){var t;return(t=this.map_.get(e))!==null&&t!==void 0?t:null}has(e){return this.map_.has(e)}add(e,t){return this.map_.set(e,t),e.viewProps.handleDispose(()=>{this.map_.delete(e)}),t}}class Uy{constructor(e){this.target=e.target,this.reader_=e.reader,this.writer_=e.writer}read(){return this.reader_(this.target.read())}write(e){this.writer_(this.target,e)}inject(e){this.write(this.reader_(e))}}function Iy(n,e){var t;const i=n.accept(e.target.read(),e.params);if(et(i))return null;const r={target:e.target,initialValue:i.initialValue,params:i.params},s=at(e.params,d=>({disabled:d.optional.boolean,hidden:d.optional.boolean,label:d.optional.string,tag:d.optional.string})),a=n.binding.reader(r),o=n.binding.constraint?n.binding.constraint(r):void 0,l=new Uy({reader:a,target:e.target,writer:n.binding.writer(r)}),c=new vx(rt(a(i.initialValue),{constraint:o,equals:n.binding.equals}),l),u=n.controller({constraint:o,document:e.document,initialValue:i.initialValue,params:i.params,value:c,viewProps:Bn.create({disabled:s==null?void 0:s.disabled,hidden:s==null?void 0:s.hidden})});return new Dx(e.document,{blade:vr(),props:Ge.fromObject({label:"label"in e.params?(t=s==null?void 0:s.label)!==null&&t!==void 0?t:null:e.target.key}),tag:s==null?void 0:s.tag,value:c,valueController:u})}class Ny{constructor(e){this.target=e.target,this.reader_=e.reader}read(){return this.reader_(this.target.read())}}function Oy(n,e){return e===0?new fb:new mb(n,e??os.monitor.defaultInterval)}function Fy(n,e){var t,i,r;const s=n.accept(e.target.read(),e.params);if(et(s))return null;const a={target:e.target,initialValue:s.initialValue,params:s.params},o=at(e.params,p=>({bufferSize:p.optional.number,disabled:p.optional.boolean,hidden:p.optional.boolean,interval:p.optional.number,label:p.optional.string})),l=n.binding.reader(a),c=(i=(t=o==null?void 0:o.bufferSize)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(s.params))!==null&&i!==void 0?i:1,u=new Fx({binding:new Ny({reader:l,target:e.target}),bufferSize:c,ticker:Oy(e.document,o==null?void 0:o.interval)}),d=n.controller({document:e.document,params:s.params,value:u,viewProps:Bn.create({disabled:o==null?void 0:o.disabled,hidden:o==null?void 0:o.hidden})});return d.viewProps.bindDisabled(u.ticker),d.viewProps.handleDispose(()=>{u.ticker.dispose()}),new kx(e.document,{blade:vr(),props:Ge.fromObject({label:"label"in e.params?(r=o==null?void 0:o.label)!==null&&r!==void 0?r:null:e.target.key}),value:u,valueController:d})}class By{constructor(e){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=e}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e,t){if(!Ab(t.core))throw ut.notCompatible(e,t.id);t.type==="blade"?this.pluginsMap_.blades.unshift(t):t.type==="input"?this.pluginsMap_.inputs.unshift(t):t.type==="monitor"&&this.pluginsMap_.monitors.unshift(t)}createInput_(e,t,i){return this.pluginsMap_.inputs.reduce((r,s)=>r??Iy(s,{document:e,target:t,params:i}),null)}createMonitor_(e,t,i){return this.pluginsMap_.monitors.reduce((r,s)=>r??Fy(s,{document:e,params:i,target:t}),null)}createBinding(e,t,i){const r=t.read();if(et(r))throw new ut({context:{key:t.key},type:"nomatchingcontroller"});const s=this.createInput_(e,t,i);if(s)return s;const a=this.createMonitor_(e,t,i);if(a)return a;throw new ut({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const i=this.pluginsMap_.blades.reduce((r,s)=>r??pb(s,{document:e,params:t}),null);if(!i)throw new ut({type:"nomatchingview",context:{params:t}});return i}createInputBindingApi_(e){const t=this.pluginsMap_.inputs.reduce((i,r)=>{var s,a;return i||((a=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:e}))!==null&&a!==void 0?a:null)},null);return this.apiCache_.add(e,t??new Wr(e))}createMonitorBindingApi_(e){const t=this.pluginsMap_.monitors.reduce((i,r)=>{var s,a;return i||((a=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:e}))!==null&&a!==void 0?a:null)},null);return this.apiCache_.add(e,t??new Wr(e))}createBindingApi(e){if(this.apiCache_.has(e))return this.apiCache_.get(e);if(Ux(e))return this.createInputBindingApi_(e);if(Vx(e))return this.createMonitorBindingApi_(e);throw ut.shouldNeverHappen()}createApi(e){if(this.apiCache_.has(e))return this.apiCache_.get(e);if(Lx(e))return this.createBindingApi(e);const t=this.pluginsMap_.blades.reduce((i,r)=>i??r.api({controller:e,pool:this}),null);if(!t)throw ut.shouldNeverHappen();return this.apiCache_.add(e,t)}}const ky=new Dy;function Vy(){const n=new By(ky);return[hy,gy,by,yy,ny,Zw,Kw,jw,Db,Sy,Ly,Ry,jx,rb,Hd].forEach(e=>{n.register("core",e)}),n}class zy extends Pi{constructor(e){super(e),this.emitter_=new gt,this.controller.value.emitter.on("change",t=>{this.emitter_.emit("change",new Jr(this,t.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get options(){return this.controller.valueController.props.get("options")}set options(e){this.controller.valueController.props.set("options",e)}get value(){return this.controller.value.rawValue}set value(e){this.controller.value.rawValue=e}on(e,t){const i=t.bind(this);return this.emitter_.on(e,r=>{i(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}class Hy extends Pi{}class Gy extends Pi{constructor(e){super(e),this.emitter_=new gt,this.controller.value.emitter.on("change",t=>{this.emitter_.emit("change",new Jr(this,t.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(e){this.controller.valueController.sliderController.props.set("max",e)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(e){this.controller.valueController.sliderController.props.set("min",e)}get value(){return this.controller.value.rawValue}set value(e){this.controller.value.rawValue=e}on(e,t){const i=t.bind(this);return this.emitter_.on(e,r=>{i(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}class Wy extends Pi{constructor(e){super(e),this.emitter_=new gt,this.controller.value.emitter.on("change",t=>{this.emitter_.emit("change",new Jr(this,t.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(e){this.controller.valueController.props.set("formatter",e)}get value(){return this.controller.value.rawValue}set value(e){this.controller.value.rawValue=e}on(e,t){const i=t.bind(this);return this.emitter_.on(e,r=>{i(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}const jy=function(){return{id:"list",type:"blade",core:gr,accept(n){const e=at(n,t=>({options:t.required.custom(ns),value:t.required.raw,view:t.required.constant("list"),label:t.optional.string}));return e?{params:e}:null},controller(n){const e=new ts(Ja(n.params.options)),t=rt(n.params.value,{constraint:e}),i=new si(n.document,{props:new Ge({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Ei(n.document,{blade:n.blade,props:Ge.fromObject({label:n.params.label}),value:t,valueController:i})},api(n){return!(n.controller instanceof Ei)||!(n.controller.valueController instanceof si)?null:new zy(n.controller)}}}();class Xy extends Vd{constructor(e,t){super(e,t)}get element(){return this.controller.view.element}}class $y extends _a{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const Tu=$e("spr");class qy{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Tu()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("hr");i.classList.add(Tu("r")),this.element.appendChild(i)}}class Cu extends ao{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new qy(e,{viewProps:t.viewProps})}))}}const Yy={id:"separator",type:"blade",core:gr,accept(n){const e=at(n,t=>({view:t.required.constant("separator")}));return e?{params:e}:null},controller(n){return new Cu(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Cu?new Hy(n.controller):null}},Ky={id:"slider",type:"blade",core:gr,accept(n){const e=at(n,t=>({max:t.required.number,min:t.required.number,view:t.required.constant("slider"),format:t.optional.function,label:t.optional.string,value:t.optional.number}));return e?{params:e}:null},controller(n){var e,t;const i=(e=n.params.value)!==null&&e!==void 0?e:0,r=new Zr({max:n.params.max,min:n.params.min}),s=rt(i,{constraint:r}),a=new Ys(n.document,Object.assign(Object.assign({},$d({formatter:(t=n.params.format)!==null&&t!==void 0?t:hx,keyScale:rt(1),max:r.values.value("max"),min:r.values.value("min"),pointerScale:Td(n.params,i)})),{parser:On,value:s,viewProps:n.viewProps}));return new Ei(n.document,{blade:n.blade,props:Ge.fromObject({label:n.params.label}),value:s,valueController:a})},api(n){return!(n.controller instanceof Ei)||!(n.controller.valueController instanceof Ys)?null:new Gy(n.controller)}},Zy=function(){return{id:"text",type:"blade",core:gr,accept(n){const e=at(n,t=>({parse:t.required.function,value:t.required.raw,view:t.required.constant("text"),format:t.optional.function,label:t.optional.string}));return e?{params:e}:null},controller(n){var e;const t=rt(n.params.value),i=new jr(n.document,{parser:n.params.parse,props:Ge.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:r=>String(r)}),value:t,viewProps:n.viewProps});return new Ei(n.document,{blade:n.blade,props:Ge.fromObject({label:n.params.label}),value:t,valueController:i})},api(n){return!(n.controller instanceof Ei)||!(n.controller.valueController instanceof jr)?null:new Wy(n.controller)}}}();function Jy(n){const e=n.createElement("div");return e.classList.add($e("dfw")()),n.body&&n.body.appendChild(e),e}function Qy(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const i=n.createElement("style");i.dataset.tpStyle=e,i.textContent=t,n.head.appendChild(i)}class eM extends Xy{constructor(e){var t,i;const r=e??{},s=(t=r.document)!==null&&t!==void 0?t:Ex(),a=Vy(),o=new $y(s,{expanded:r.expanded,blade:vr(),props:Ge.fromObject({title:r.title}),viewProps:Bn.create()});super(o,a),this.pool_=a,this.containerElem_=(i=r.container)!==null&&i!==void 0?i:Jy(s),this.containerElem_.appendChild(this.element),this.doc_=s,this.usesDefaultWrapper_=!r.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw ut.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw ut.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){e.css&&Qy(this.document,`plugin-${e.id}`,e.css),("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(i=>{this.pool_.register(e.id,i)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[jy,Yy,Ky,Hd,Zy]})}}new kd("4.0.5");const tM={denesOriginal:{N:2.75,R:1.65,r0:.55,mode:"Exponential",k:.18,rMin:.015,h:0,epsilon:.08,twist:0,wallThickness:.1,uDiv:320,vDiv:96,projection:"Orthographic",renderStyle:"Wireframe",showMeridians:!0,showParallels:!0,showInnerSurface:!0,occludeInner:!0,lineWidth:1,outerColor:"#333333",innerColor:"#555555",backgroundColor:"#e8e8e8",showGrid:!1,showCrossSection:!1,crossSectionColor:"#ff3333",crossSectionSpokes:24,crossSectionCircles:3},denes:{N:2.75,R:1.65,r0:.55,mode:"Exponential",k:.18,rMin:.015,h:0,epsilon:.08,twist:0,wallThickness:.08,uDiv:240,vDiv:72,projection:"Orthographic",renderStyle:"Wireframe",showMeridians:!0,showParallels:!0,showInnerSurface:!0,occludeInner:!1,lineWidth:1,outerColor:"#3388ff",innerColor:"#ff8833",backgroundColor:"#1a1a1a",showGrid:!0,showCrossSection:!1,crossSectionColor:"#ff3333",crossSectionSpokes:24,crossSectionCircles:3},snail:{N:4,R:1.2,r0:.8,mode:"Exponential",k:.25,rMin:.01,h:.5,epsilon:.15,twist:.3,wallThickness:.1,uDiv:280,vDiv:64,projection:"Perspective",renderStyle:"Hidden-line",showMeridians:!0,showParallels:!0,showInnerSurface:!0,occludeInner:!0,lineWidth:1,outerColor:"#4444ff",innerColor:"#8888ff",backgroundColor:"#0a0a0a",showGrid:!1,showCrossSection:!1,crossSectionColor:"#ff3333",crossSectionSpokes:24,crossSectionCircles:3},wide:{N:1.5,R:2.5,r0:.4,mode:"Linear",alpha:.05,rMin:.05,h:0,epsilon:0,twist:0,wallThickness:.05,uDiv:200,vDiv:80,projection:"Orthographic",renderStyle:"Solid",showMeridians:!0,showParallels:!1,showInnerSurface:!1,occludeInner:!1,lineWidth:1,outerColor:"#6699cc",innerColor:"#99ccff",backgroundColor:"#1a1a1a",showGrid:!0,showCrossSection:!1,crossSectionColor:"#ff3333",crossSectionSpokes:24,crossSectionCircles:3},flat:{N:5,R:2,r0:.3,mode:"Exponential",k:.12,rMin:.02,h:-.2,epsilon:0,twist:0,wallThickness:.04,uDiv:320,vDiv:64,projection:"Orthographic",renderStyle:"Wireframe",showMeridians:!0,showParallels:!0,showInnerSurface:!0,occludeInner:!0,lineWidth:1,outerColor:"#ff6644",innerColor:"#ffaa88",backgroundColor:"#1a1a1a",showGrid:!0,showCrossSection:!1,crossSectionColor:"#ff3333",crossSectionSpokes:24,crossSectionCircles:3}};function Pr(n,e,t,i,r,s){const a=tM[n];a&&(Object.assign(e,a),r(e),a.projection&&s(a.projection),a.backgroundColor&&(t.background=new Se(a.backgroundColor)),a.showGrid!==void 0&&(i.visible=a.showGrid))}function nM(n,e,t,i){n.render(e,t),i.toBlob(r=>{if(!r)return;const s=URL.createObjectURL(r),a=document.createElement("a");a.href=s,a.download=`snail_pyramid_${Date.now()}.png`,a.click(),URL.revokeObjectURL(s)})}function iM(n,e,t,i,r){const s=window.innerWidth,a=window.innerHeight;n.render(e,t),t.updateMatrixWorld(),(t instanceof vt||t instanceof Un)&&t.updateProjectionMatrix(),i.updateMatrixWorld(!0);let o=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${s}" height="${a}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${a}">
<rect width="100%" height="100%" fill="${r.backgroundColor}"/>
<g id="mesh">
`;function l(f){const g=f.clone();g.project(t);const v=(g.x+1)/2*s,m=(-g.y+1)/2*a;return{x:v,y:m,z:-g.z}}const c=[];i.traverse(f=>{if(f instanceof Et&&f.material instanceof xi&&f.material.colorWrite===!1){const g=f.geometry,v=g.index,m=g.attributes.position;if(v)for(let h=0;h<v.count;h+=3){const w=new U(m.getX(v.getX(h)),m.getY(v.getX(h)),m.getZ(v.getX(h))).applyMatrix4(f.matrixWorld),_=new U(m.getX(v.getX(h+1)),m.getY(v.getX(h+1)),m.getZ(v.getX(h+1))).applyMatrix4(f.matrixWorld),A=new U(m.getX(v.getX(h+2)),m.getY(v.getX(h+2)),m.getZ(v.getX(h+2))).applyMatrix4(f.matrixWorld),C=l(w),P=l(_),S=l(A),L=(C.z+P.z+S.z)/3;c.push({type:"triangle",depth:L,p1:C,p2:P,p3:S})}}}),i.traverse(f=>{if(f instanceof Kt){if(!f.visible)return;const g=f.geometry.attributes.position,v=[];for(let L=0;L<g.count;L++){const x=new U(g.getX(L),g.getY(L),g.getZ(L));x.applyMatrix4(f.matrixWorld),v.push(x)}const m=f.material,h=m.color.getStyle(),w=m.opacity!==void 0?m.opacity:1,_=new Se(r.innerColor),A=new Se(r.crossSectionColor),C=m.color;if(C.getHex()===_.getHex()&&!r.showInnerSurface||C.getHex()===A.getHex()&&!r.showCrossSection)return;const P=1,S=v.map(L=>l(L));for(let L=0;L<S.length-1;L++){const x=S[L],M=S[L+1],O=(x.z+M.z)/2;c.push({type:"line",depth:O,p1:x,p2:M,color:h,opacity:w,lineWidth:P})}}}),c.sort((f,g)=>f.depth-g.depth),c.forEach(f=>{f.type==="triangle"&&f.p3?o+=`<polygon points="${f.p1.x.toFixed(2)},${f.p1.y.toFixed(2)} ${f.p2.x.toFixed(2)},${f.p2.y.toFixed(2)} ${f.p3.x.toFixed(2)},${f.p3.y.toFixed(2)}" fill="${r.backgroundColor}"/>
`:f.type==="line"&&(f.pathData?o+=`<path d="${f.pathData}" stroke="${f.color}" stroke-width="${f.lineWidth}" stroke-opacity="${f.opacity}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
`:o+=`<line x1="${f.p1.x.toFixed(2)}" y1="${f.p1.y.toFixed(2)}" x2="${f.p2.x.toFixed(2)}" y2="${f.p2.y.toFixed(2)}" stroke="${f.color}" stroke-width="${f.lineWidth}" stroke-opacity="${f.opacity}" stroke-linecap="round" stroke-linejoin="round"/>
`)}),o+=`</g>
</svg>`;const u=new Blob([o],{type:"image/svg+xml"}),d=URL.createObjectURL(u),p=document.createElement("a");p.href=d,p.download=`snail_pyramid_${Date.now()}.svg`,p.click(),URL.revokeObjectURL(d)}function rM(n,e,t){const i={...n};e&&t&&(i.cameraPosition={x:e.position.x,y:e.position.y,z:e.position.z},i.cameraTarget={x:t.target.x,y:t.target.y,z:t.target.z},e instanceof vt&&(i.cameraFov=e.fov),e instanceof Un&&(i.cameraOrthoSize=(e.top-e.bottom)/2));const r=JSON.stringify(i,null,2);navigator.clipboard.writeText(r),console.log("Preset copied to clipboard:",r)}function sM(n,e,t){const i={...n};e&&t&&(i.cameraPosition={x:e.position.x,y:e.position.y,z:e.position.z},i.cameraTarget={x:t.target.x,y:t.target.y,z:t.target.z},e instanceof vt&&(i.cameraFov=e.fov),e instanceof Un&&(i.cameraOrthoSize=(e.top-e.bottom)/2));const r=JSON.stringify(i,null,2),s=new Blob([r],{type:"application/json"}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=`snail_pyramid_preset_${Date.now()}.json`,o.click(),URL.revokeObjectURL(a)}function oM(n){const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=t=>{var s;const i=(s=t.target.files)==null?void 0:s[0];if(!i)return;const r=new FileReader;r.onload=a=>{var o;try{const l=JSON.parse((o=a.target)==null?void 0:o.result),c={};l.cameraPosition&&(c.position=l.cameraPosition,delete l.cameraPosition),l.cameraTarget&&(c.target=l.cameraTarget,delete l.cameraTarget),l.cameraFov!==void 0&&(c.fov=l.cameraFov,delete l.cameraFov),l.cameraOrthoSize!==void 0&&(c.orthoSize=l.cameraOrthoSize,delete l.cameraOrthoSize),n.onParamsLoad(l),n.onCameraLoad&&Object.keys(c).length>0&&n.onCameraLoad(c),console.log("Preset loaded successfully")}catch(l){console.error("Error loading preset:",l),alert("Error loading preset file")}},r.readAsText(i)},e.click()}const aM="modulepreload",lM=function(n){return"/"+n},Au={},cM=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=lM(l),l in Au)return;Au[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":aM,c||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((p,f)=>{d.addEventListener("load",p),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};class uM{parse(e,t={}){t=Object.assign({binary:!1},t);const i=t.binary,r=[];let s=0;e.traverse(function(h){if(h.isMesh){const w=h.geometry,_=w.index,A=w.getAttribute("position");s+=_!==null?_.count/3:A.count/3,r.push({object3d:h,geometry:w})}});let a,o=80;if(i===!0){const h=s*2+s*3*4*4+80+4,w=new ArrayBuffer(h);a=new DataView(w),a.setUint32(o,s,!0),o+=4}else a="",a+=`solid exported
`;const l=new U,c=new U,u=new U,d=new U,p=new U,f=new U;for(let h=0,w=r.length;h<w;h++){const _=r[h].object3d,A=r[h].geometry,C=A.index,P=A.getAttribute("position");if(C!==null)for(let S=0;S<C.count;S+=3){const L=C.getX(S+0),x=C.getX(S+1),M=C.getX(S+2);g(L,x,M,P,_)}else for(let S=0;S<P.count;S+=3){const L=S+0,x=S+1,M=S+2;g(L,x,M,P,_)}}return i===!1&&(a+=`endsolid exported
`),a;function g(h,w,_,A,C){l.fromBufferAttribute(A,h),c.fromBufferAttribute(A,w),u.fromBufferAttribute(A,_),C.isSkinnedMesh===!0&&(C.applyBoneTransform(h,l),C.applyBoneTransform(w,c),C.applyBoneTransform(_,u)),l.applyMatrix4(C.matrixWorld),c.applyMatrix4(C.matrixWorld),u.applyMatrix4(C.matrixWorld),v(l,c,u),m(l),m(c),m(u),i===!0?(a.setUint16(o,0,!0),o+=2):(a+=`		endloop
`,a+=`	endfacet
`)}function v(h,w,_){d.subVectors(_,w),p.subVectors(h,w),d.cross(p).normalize(),f.copy(d).normalize(),i===!0?(a.setFloat32(o,f.x,!0),o+=4,a.setFloat32(o,f.y,!0),o+=4,a.setFloat32(o,f.z,!0),o+=4):(a+="	facet normal "+f.x+" "+f.y+" "+f.z+`
`,a+=`		outer loop
`)}function m(h){i===!0?(a.setFloat32(o,h.x,!0),o+=4,a.setFloat32(o,h.y,!0),o+=4,a.setFloat32(o,h.z,!0),o+=4):a+="			vertex "+h.x+" "+h.y+" "+h.z+`
`}}}class dM{parse(e){let t="",i=0,r=0,s=0;const a=new U,o=new Se,l=new U,c=new Ue,u=[];function d(g){let v=0,m=0,h=0;const w=g.geometry,_=new He,A=w.getAttribute("position"),C=w.getAttribute("normal"),P=w.getAttribute("uv"),S=w.getIndex();if(t+="o "+g.name+`
`,g.material&&g.material.name&&(t+="usemtl "+g.material.name+`
`),A!==void 0)for(let L=0,x=A.count;L<x;L++,v++)a.fromBufferAttribute(A,L),a.applyMatrix4(g.matrixWorld),t+="v "+a.x+" "+a.y+" "+a.z+`
`;if(P!==void 0)for(let L=0,x=P.count;L<x;L++,h++)c.fromBufferAttribute(P,L),t+="vt "+c.x+" "+c.y+`
`;if(C!==void 0){_.getNormalMatrix(g.matrixWorld);for(let L=0,x=C.count;L<x;L++,m++)l.fromBufferAttribute(C,L),l.applyMatrix3(_).normalize(),t+="vn "+l.x+" "+l.y+" "+l.z+`
`}if(S!==null)for(let L=0,x=S.count;L<x;L+=3){for(let M=0;M<3;M++){const O=S.getX(L+M)+1;u[M]=i+O+(C||P?"/"+(P?r+O:"")+(C?"/"+(s+O):""):"")}t+="f "+u.join(" ")+`
`}else for(let L=0,x=A.count;L<x;L+=3){for(let M=0;M<3;M++){const O=L+M+1;u[M]=i+O+(C||P?"/"+(P?r+O:"")+(C?"/"+(s+O):""):"")}t+="f "+u.join(" ")+`
`}i+=v,r+=h,s+=m}function p(g){let v=0;const m=g.geometry,h=g.type,w=m.getAttribute("position");if(t+="o "+g.name+`
`,w!==void 0)for(let _=0,A=w.count;_<A;_++,v++)a.fromBufferAttribute(w,_),a.applyMatrix4(g.matrixWorld),t+="v "+a.x+" "+a.y+" "+a.z+`
`;if(h==="Line"){t+="l ";for(let _=1,A=w.count;_<=A;_++)t+=i+_+" ";t+=`
`}if(h==="LineSegments")for(let _=1,A=_+1,C=w.count;_<C;_+=2,A=_+1)t+="l "+(i+_)+" "+(i+A)+`
`;i+=v}function f(g){let v=0;const m=g.geometry,h=m.getAttribute("position"),w=m.getAttribute("color");if(t+="o "+g.name+`
`,h!==void 0){for(let _=0,A=h.count;_<A;_++,v++)a.fromBufferAttribute(h,_),a.applyMatrix4(g.matrixWorld),t+="v "+a.x+" "+a.y+" "+a.z,w!==void 0&&(o.fromBufferAttribute(w,_).convertLinearToSRGB(),t+=" "+o.r+" "+o.g+" "+o.b),t+=`
`;t+="p ";for(let _=1,A=h.count;_<=A;_++)t+=i+_+" ";t+=`
`}i+=v}return e.traverse(function(g){g.isMesh===!0&&d(g),g.isLine===!0&&p(g),g.isPoints===!0&&f(g)}),t}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Pu=function(n){return URL.createObjectURL(new Blob([n],{type:"text/javascript"}))};try{URL.revokeObjectURL(Pu(""))}catch{Pu=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var jt=Uint8Array,kt=Uint16Array,hr=Uint32Array,dl=new jt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),hl=new jt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ru=new jt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wh=function(n,e){for(var t=new kt(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new hr(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return[t,r]},yh=wh(dl,2),hM=yh[0],ya=yh[1];hM[28]=258,ya[258]=28;var pM=wh(hl,0),Lu=pM[1],Ma=new kt(32768);for(var it=0;it<32768;++it){var $n=(it&43690)>>>1|(it&21845)<<1;$n=($n&52428)>>>2|($n&13107)<<2,$n=($n&61680)>>>4|($n&3855)<<4,Ma[it]=(($n&65280)>>>8|($n&255)<<8)>>>1}var Or=function(n,e,t){for(var i=n.length,r=0,s=new kt(e);r<i;++r)++s[n[r]-1];var a=new kt(e);for(r=0;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new kt(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],d=a[n[r]-1]++<<u,p=d|(1<<u)-1;d<=p;++d)o[Ma[d]>>>l]=c}else for(o=new kt(i),r=0;r<i;++r)n[r]&&(o[r]=Ma[a[n[r]-1]++]>>>15-n[r]);return o},Ti=new jt(288);for(var it=0;it<144;++it)Ti[it]=8;for(var it=144;it<256;++it)Ti[it]=9;for(var it=256;it<280;++it)Ti[it]=7;for(var it=280;it<288;++it)Ti[it]=8;var Ks=new jt(32);for(var it=0;it<32;++it)Ks[it]=5;var fM=Or(Ti,9,0),mM=Or(Ks,5,0),Mh=function(n){return(n/8|0)+(n&7&&1)},Eh=function(n,e,t){(t==null||t>n.length)&&(t=n.length);var i=new(n instanceof kt?kt:n instanceof hr?hr:jt)(t-e);return i.set(n.subarray(e,t)),i},An=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>>8},Rr=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>>8,n[i+2]|=t>>>16},ia=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var r=t.length,s=t.slice();if(!r)return[Sh,0];if(r==1){var a=new jt(t[0].s+1);return a[t[0].s]=1,[a,1]}t.sort(function(C,P){return C.f-P.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],c=0,u=1,d=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};u!=r-1;)o=t[t[c].f<t[d].f?c++:d++],l=t[c!=u&&t[c].f<t[d].f?c++:d++],t[u++]={s:-1,f:o.f+l.f,l:o,r:l};for(var p=s[0].s,i=1;i<r;++i)s[i].s>p&&(p=s[i].s);var f=new kt(p+1),g=Ea(t[u-1],f,0);if(g>e){var i=0,v=0,m=g-e,h=1<<m;for(s.sort(function(P,S){return f[S.s]-f[P.s]||P.f-S.f});i<r;++i){var w=s[i].s;if(f[w]>e)v+=h-(1<<g-f[w]),f[w]=e;else break}for(v>>>=m;v>0;){var _=s[i].s;f[_]<e?v-=1<<e-f[_]++-1:++i}for(;i>=0&&v;--i){var A=s[i].s;f[A]==e&&(--f[A],++v)}g=e}return[new jt(f),g]},Ea=function(n,e,t){return n.s==-1?Math.max(Ea(n.l,e,t+1),Ea(n.r,e,t+1)):e[n.s]=t},Du=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new kt(++e),i=0,r=n[0],s=1,a=function(l){t[i++]=l},o=1;o<=e;++o)if(n[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=n[o]}return[t.subarray(0,i),e]},Lr=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},Sa=function(n,e,t){var i=t.length,r=Mh(e+2);n[r]=i&255,n[r+1]=i>>>8,n[r+2]=n[r]^255,n[r+3]=n[r+1]^255;for(var s=0;s<i;++s)n[r+s+4]=t[s];return(r+4+i)*8},Uu=function(n,e,t,i,r,s,a,o,l,c,u){An(e,u++,t),++r[256];for(var d=ia(r,15),p=d[0],f=d[1],g=ia(s,15),v=g[0],m=g[1],h=Du(p),w=h[0],_=h[1],A=Du(v),C=A[0],P=A[1],S=new kt(19),L=0;L<w.length;++L)S[w[L]&31]++;for(var L=0;L<C.length;++L)S[C[L]&31]++;for(var x=ia(S,7),M=x[0],O=x[1],G=19;G>4&&!M[Ru[G-1]];--G);var q=c+5<<3,T=Lr(r,Ti)+Lr(s,Ks)+a,I=Lr(r,p)+Lr(s,v)+a+14+3*G+Lr(S,M)+(2*S[16]+3*S[17]+7*S[18]);if(q<=T&&q<=I)return Sa(e,u,n.subarray(l,l+c));var V,$,X,j;if(An(e,u,1+(I<T)),u+=2,I<T){V=Or(p,f,0),$=p,X=Or(v,m,0),j=v;var Z=Or(M,O,0);An(e,u,_-257),An(e,u+5,P-1),An(e,u+10,G-4),u+=14;for(var L=0;L<G;++L)An(e,u+3*L,M[Ru[L]]);u+=3*G;for(var K=[w,C],ae=0;ae<2;++ae)for(var H=K[ae],L=0;L<H.length;++L){var Y=H[L]&31;An(e,u,Z[Y]),u+=M[Y],Y>15&&(An(e,u,H[L]>>>5&127),u+=H[L]>>>12)}}else V=fM,$=Ti,X=mM,j=Ks;for(var L=0;L<o;++L)if(i[L]>255){var Y=i[L]>>>18&31;Rr(e,u,V[Y+257]),u+=$[Y+257],Y>7&&(An(e,u,i[L]>>>23&31),u+=dl[Y]);var se=i[L]&31;Rr(e,u,X[se]),u+=j[se],se>3&&(Rr(e,u,i[L]>>>5&8191),u+=hl[se])}else Rr(e,u,V[i[L]]),u+=$[i[L]];return Rr(e,u,V[256]),u+$[256]},gM=new hr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Sh=new jt(0),vM=function(n,e,t,i,r,s){var a=n.length,o=new jt(i+a+5*(1+Math.ceil(a/7e3))+r),l=o.subarray(i,o.length-r),c=0;if(!e||a<8)for(var u=0;u<=a;u+=65535){var d=u+65535;d<a?c=Sa(l,c,n.subarray(u,d)):(l[u]=s,c=Sa(l,c,n.subarray(u,a)))}else{for(var p=gM[e-1],f=p>>>13,g=p&8191,v=(1<<t)-1,m=new kt(32768),h=new kt(v+1),w=Math.ceil(t/3),_=2*w,A=function(_e){return(n[_e]^n[_e+1]<<w^n[_e+2]<<_)&v},C=new hr(25e3),P=new kt(288),S=new kt(32),L=0,x=0,u=0,M=0,O=0,G=0;u<a;++u){var q=A(u),T=u&32767,I=h[q];if(m[T]=I,h[q]=T,O<=u){var V=a-u;if((L>7e3||M>24576)&&V>423){c=Uu(n,l,0,C,P,S,x,M,G,u-G,c),M=L=x=0,G=u;for(var $=0;$<286;++$)P[$]=0;for(var $=0;$<30;++$)S[$]=0}var X=2,j=0,Z=g,K=T-I&32767;if(V>2&&q==A(u-K))for(var ae=Math.min(f,V)-1,H=Math.min(32767,u),Y=Math.min(258,V);K<=H&&--Z&&T!=I;){if(n[u+X]==n[u+X-K]){for(var se=0;se<Y&&n[u+se]==n[u+se-K];++se);if(se>X){if(X=se,j=K,se>ae)break;for(var ge=Math.min(K,se-2),fe=0,$=0;$<ge;++$){var Ae=u-K+$+32768&32767,Pe=m[Ae],ye=Ae-Pe+32768&32767;ye>fe&&(fe=ye,I=Ae)}}}T=I,I=m[T],K+=T-I+32768&32767}if(j){C[M++]=268435456|ya[X]<<18|Lu[j];var ke=ya[X]&31,F=Lu[j]&31;x+=dl[ke]+hl[F],++P[257+ke],++S[F],O=u+X,++L}else C[M++]=n[u],++P[n[u]]}}c=Uu(n,l,s,C,P,S,x,M,G,u-G,c)}return Eh(o,0,i+Mh(c)+r)},_M=function(){for(var n=new hr(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&3988292384)^t>>>1;n[e]=t}return n}(),xM=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=_M[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}},bM=function(n,e,t,i,r){return vM(n,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):12+e.mem,t,i,!0)},Th=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t},At=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function wM(n,e){return bM(n,e||{},0,0)}var Ch=function(n,e,t,i){for(var r in n){var s=n[r],a=e+r;s instanceof jt?t[a]=[s,i]:Array.isArray(s)?t[a]=[s[0],Th(i,s[1])]:Ch(s,a+"/",t,i)}},Iu=typeof TextEncoder<"u"&&new TextEncoder,yM=typeof TextDecoder<"u"&&new TextDecoder,MM=0;try{yM.decode(Sh,{stream:!0}),MM=1}catch{}function Zs(n,e){var t;if(Iu)return Iu.encode(n);for(var i=n.length,r=new jt(n.length+(n.length>>1)),s=0,a=function(c){r[s++]=c},t=0;t<i;++t){if(s+5>r.length){var o=new jt(s+8+(i-t<<1));o.set(r),r=o}var l=n.charCodeAt(t);l<128||e?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|n.charCodeAt(++t)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return Eh(r,0,s)}var Ta=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;if(i>65535)throw"extra field too long";e+=i+4}return e},Nu=function(n,e,t,i,r,s,a,o){var l=i.length,c=t.extra,u=o&&o.length,d=Ta(c);At(n,e,a!=null?33639248:67324752),e+=4,a!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(s==null&&8),n[e++]=r&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var p=new Date(t.mtime==null?Date.now():t.mtime),f=p.getFullYear()-1980;if(f<0||f>119)throw"date not in range 1980-2099";if(At(n,e,f<<25|p.getMonth()+1<<21|p.getDate()<<16|p.getHours()<<11|p.getMinutes()<<5|p.getSeconds()>>>1),e+=4,s!=null&&(At(n,e,t.crc),At(n,e+4,s),At(n,e+8,t.size)),At(n,e+12,l),At(n,e+14,d),e+=16,a!=null&&(At(n,e,u),At(n,e+6,t.attrs),At(n,e+10,a),e+=14),n.set(i,e),e+=l,d)for(var g in c){var v=c[g],m=v.length;At(n,e,+g),At(n,e+2,m),n.set(v,e+4),e+=4+m}return u&&(n.set(o,e),e+=u),e},EM=function(n,e,t,i,r){At(n,e,101010256),At(n,e+8,t),At(n,e+10,t),At(n,e+12,i),At(n,e+16,r)};function SM(n,e){e||(e={});var t={},i=[];Ch(n,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],l=o[0],c=o[1],u=c.level==0?0:8,d=Zs(a),p=d.length,f=c.comment,g=f&&Zs(f),v=g&&g.length,m=Ta(c.extra);if(p>65535)throw"filename too long";var h=u?wM(l,c):l,w=h.length,_=xM();_.p(l),i.push(Th(c,{size:l.length,crc:_.d(),c:h,f:d,m:g,u:p!=a.length||g&&f.length!=v,o:r,compression:u})),r+=30+p+m+w,s+=76+2*(p+m)+(v||0)+w}for(var A=new jt(s+22),C=r,P=s-r,S=0;S<i.length;++S){var d=i[S];Nu(A,d.o,d,d.f,d.u,d.c.length);var L=30+d.f.length+Ta(d.extra);A.set(d.c,d.o+L),Nu(A,r,d,d.f,d.u,d.c.length,d.o,d.m),r+=16+L+(d.m?d.m.length:0)}return EM(A,r,i.length,P,C),A}let Dr,ra,Zi,Is;function TM(n,e=1/0,t=null){ra||(ra=new io(2,2,1,1)),Zi||(Zi=new ri({uniforms:{blitTexture:new Ba(n)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),Zi.uniforms.blitTexture.value=n,Zi.defines.IS_SRGB=n.colorSpace==Mt,Zi.needsUpdate=!0,Is||(Is=new Et(ra,Zi),Is.frustrumCulled=!1);const i=new vt,r=new gd;r.add(Is),t===null&&(t=Dr=new Ia({antialias:!1}));const s=Math.min(n.image.width,e),a=Math.min(n.image.height,e);t.setSize(s,a),t.clear(),t.render(r,i);const o=document.createElement("canvas"),l=o.getContext("2d");o.width=s,o.height=a,l.drawImage(t.domElement,0,0,s,a);const c=new o0(o);return c.minFilter=n.minFilter,c.magFilter=n.magFilter,c.wrapS=n.wrapS,c.wrapT=n.wrapT,c.name=n.name,Dr&&(Dr.forceContextLoss(),Dr.dispose(),Dr=null),c}class CM{async parse(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},quickLookCompatible:!1},t);const i={},r="model.usda";i[r]=null;let s=Ah();s+=PM(t);const a={},o={};e.traverseVisible(c=>{if(c.isMesh){const u=c.geometry,d=c.material;if(d.isMeshStandardMaterial){const p="geometries/Geometry_"+u.id+".usda";if(!(p in i)){const f=UM(u);i[p]=LM(f)}d.uuid in a||(a[d.uuid]=d),s+=DM(c,u,d)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(s+=HM(c))}),s+=RM(),s+=kM(a,o,t.quickLookCompatible),i[r]=Zs(s),s=null;for(const c in o){let u=o[c];u.isCompressedTexture===!0&&(u=TM(u));const d=AM(u.image,u.flipY),p=await new Promise(f=>d.toBlob(f,"image/png",1));i[`textures/Texture_${c}.png`]=new Uint8Array(await p.arrayBuffer())}let l=0;for(const c in i){const u=i[c],d=34+c.length;l+=d;const p=l&63;if(p!==4){const f=64-p,g=new Uint8Array(f);i[c]=[u,{extra:{12345:g}}]}l=u.length}return SM(i,{level:0})}}function AM(n,e){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const t=1024/Math.max(n.width,n.height),i=document.createElement("canvas");i.width=n.width*Math.min(1,t),i.height=n.height*Math.min(1,t);const r=i.getContext("2d");return e===!0&&(r.translate(0,i.height),r.scale(1,-1)),r.drawImage(n,0,0,i.width,i.height),i}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const Ut=7;function Ah(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function PM(n){return`def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{
		token preliminary:anchoring:type = "${n.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${n.ar.planeAnchoring.alignment}"

`}function RM(){return`
		}
	}
}

`}function LM(n){let e=Ah();return e+=n,Zs(e)}function DM(n,e,t){const i="Object_"+n.id,r=Ph(n.matrixWorld);return n.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n),`def Xform "${i}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${r}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${t.id}>
}

`}function Ph(n){const e=n.elements;return`( ${Ns(e,0)}, ${Ns(e,4)}, ${Ns(e,8)}, ${Ns(e,12)} )`}function Ns(n,e){return`(${n[e+0]}, ${n[e+1]}, ${n[e+2]}, ${n[e+3]})`}function UM(n){return`
def "Geometry"
{
${IM(n)}
}
`}function IM(n){const e="Geometry",t=n.attributes,i=t.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${NM(n)}]
		int[] faceVertexIndices = [${OM(n)}]
		normal3f[] normals = [${Ou(t.normal,i)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${Ou(t.position,i)}]
${BM(t)}
		uniform token subdivisionScheme = "none"
	}
`}function NM(n){const e=n.index!==null?n.index.count:n.attributes.position.count;return Array(e/3).fill(3).join(", ")}function OM(n){const e=n.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{const i=n.attributes.position.count;for(let r=0;r<i;r++)t.push(r)}return t.join(", ")}function Ou(n,e){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const t=[];for(let i=0;i<n.count;i++){const r=n.getX(i),s=n.getY(i),a=n.getZ(i);t.push(`(${r.toPrecision(Ut)}, ${s.toPrecision(Ut)}, ${a.toPrecision(Ut)})`)}return t.join(", ")}function FM(n){const e=[];for(let t=0;t<n.count;t++){const i=n.getX(t),r=n.getY(t);e.push(`(${i.toPrecision(Ut)}, ${1-r.toPrecision(Ut)})`)}return e.join(", ")}function BM(n){let e="";for(let t=0;t<4;t++){const i=t>0?t:"",r=n["uv"+i];r!==void 0&&(e+=`
		texCoord2f[] primvars:st${i} = [${FM(r)}] (
			interpolation = "vertex"
		)`)}return e}function kM(n,e,t=!1){const i=[];for(const r in n){const s=n[r];i.push(VM(s,e,t))}return`def "Materials"
{
${i.join("")}
}

`}function VM(n,e,t=!1){const i="			",r=[],s=[];function a(o,l,c){const u=o.source.id+"_"+o.flipY;e[u]=o;const d=o.channel>0?"st"+o.channel:"st",p={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),g=o.offset.clone(),v=o.rotation,m=Math.sin(v),h=Math.cos(v);return g.y=1-g.y-f.y,t?(g.x=g.x/f.x,g.y=g.y/f.y,g.x+=m/f.x,g.y+=h-1):(g.x+=m*f.x,g.y+=(1-h)*f.y),`
		def Shader "PrimvarReader_${l}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${d}"
			float2 outputs:result
		}

		def Shader "Transform2d_${l}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${l}.outputs:result>
			float inputs:rotation = ${(v*(180/Math.PI)).toFixed(Ut)}
			float2 inputs:scale = ${Bu(f)}
			float2 inputs:translation = ${Bu(g)}
			float2 outputs:result
		}

		def Shader "Texture_${o.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${u}.png@
			float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${l}.outputs:result>
			${c!==void 0?"float4 inputs:scale = "+zM(c):""}
			token inputs:sourceColorSpace = "${o.colorSpace===Jt?"raw":"sRGB"}"
			token inputs:wrapS = "${p[o.wrapS]}"
			token inputs:wrapT = "${p[o.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${n.transparent||n.alphaTest>0?"float outputs:a":""}
		}`}return n.side===Zt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n),n.map!==null?(r.push(`${i}color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?r.push(`${i}float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),r.push(`${i}float inputs:opacityThreshold = ${n.alphaTest}`)),s.push(a(n.map,"diffuse",n.color))):r.push(`${i}color3f inputs:diffuseColor = ${Fu(n.color)}`),n.emissiveMap!==null?(r.push(`${i}color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`),s.push(a(n.emissiveMap,"emissive"))):n.emissive.getHex()>0&&r.push(`${i}color3f inputs:emissiveColor = ${Fu(n.emissive)}`),n.normalMap!==null&&(r.push(`${i}normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),s.push(a(n.normalMap,"normal"))),n.aoMap!==null&&(r.push(`${i}float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`),s.push(a(n.aoMap,"occlusion"))),n.roughnessMap!==null&&n.roughness===1?(r.push(`${i}float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`),s.push(a(n.roughnessMap,"roughness"))):r.push(`${i}float inputs:roughness = ${n.roughness}`),n.metalnessMap!==null&&n.metalness===1?(r.push(`${i}float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`),s.push(a(n.metalnessMap,"metallic"))):r.push(`${i}float inputs:metallic = ${n.metalness}`),n.alphaMap!==null?(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),r.push(`${i}float inputs:opacityThreshold = 0.0001`),s.push(a(n.alphaMap,"opacity"))):r.push(`${i}float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial&&(r.push(`${i}float inputs:clearcoat = ${n.clearcoat}`),r.push(`${i}float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`),r.push(`${i}float inputs:ior = ${n.ior}`)),`
	def Material "Material_${n.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${r.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>

${s.join(`
`)}

	}
`}function Fu(n){return`(${n.r}, ${n.g}, ${n.b})`}function zM(n){return`(${n.r}, ${n.g}, ${n.b}, 1.0)`}function Bu(n){return`(${n.x}, ${n.y})`}function HM(n){const e=n.name?n.name:"Camera_"+n.id,t=Ph(n.matrixWorld);return n.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n),n.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${n.near.toPrecision(Ut)}, ${n.far.toPrecision(Ut)})
			float horizontalAperture = ${((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(Ut)}
			float verticalAperture = ${((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(Ut)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${n.near.toPrecision(Ut)}, ${n.far.toPrecision(Ut)})
			float focalLength = ${n.getFocalLength().toPrecision(Ut)}
			float focusDistance = ${n.focus.toPrecision(Ut)}
			float horizontalAperture = ${n.getFilmWidth().toPrecision(Ut)}
			token projection = "perspective"
			float verticalAperture = ${n.getFilmHeight().toPrecision(Ut)}
		}
	
	`}function co(n){const e=[];return n.traverse(t=>{if(t instanceof Et){const i=t.material;if(i instanceof xi&&i.colorWrite===!1)return;e.push(t)}}),e}function uo(n,e){const t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(t)}function GM(n){const e=new uM,t=co(n);if(t.length===0){alert("No meshes to export");return}try{const i=new Ln;t.forEach(o=>{const l=o.clone();l.updateMatrixWorld(!0),i.add(l)});const s=e.parse(i,{binary:!0}).buffer,a=new Blob([s],{type:"application/octet-stream"});uo(a,`spiral_mesh_${Date.now()}.stl`),console.log("STL export successful")}catch(i){console.error("Error exporting STL:",i),alert("Error exporting STL file")}}function WM(n){const e=new dM,t=co(n);if(t.length===0){alert("No meshes to export");return}try{const i=new Ln;t.forEach(a=>{const o=a.clone();o.updateMatrixWorld(!0),i.add(o)});const r=e.parse(i),s=new Blob([r],{type:"text/plain"});uo(s,`spiral_mesh_${Date.now()}.obj`),console.log("OBJ export successful")}catch(i){console.error("Error exporting OBJ:",i),alert("Error exporting OBJ file")}}async function jM(n){const e=new CM,t=co(n);if(t.length===0){alert("No meshes to export");return}try{const i=new Ln;t.forEach(o=>{const l=o.clone();l.updateMatrixWorld(!0),i.add(l)});const r=await e.parse(i),s=r instanceof Uint8Array?r.buffer:r,a=new Blob([s],{type:"application/octet-stream"});uo(a,`spiral_mesh_${Date.now()}.usdz`),console.log("USDZ export successful")}catch(i){console.error("Error exporting USDZ:",i),alert("Error exporting USDZ file. This format may not be fully supported in your browser.")}}async function XM(n){try{const{GLTFExporter:e}=await cM(async()=>{const{GLTFExporter:s}=await import("./GLTFExporter-Dtt3ARVf.js");return{GLTFExporter:s}},[]),t=new e,i=co(n);if(i.length===0){alert("No meshes to export");return}const r=new Ln;i.forEach(s=>{const a=s.clone();a.updateMatrixWorld(!0),r.add(a)}),t.parse(r,s=>{if(s instanceof ArrayBuffer){const a=new Blob([s],{type:"application/octet-stream"});uo(a,`spiral_mesh_${Date.now()}.glb`),console.log("GLB export successful")}},s=>{console.error("Error exporting GLB:",s),alert("Error exporting GLB file")},{binary:!0})}catch(e){console.error("Error loading GLTFExporter:",e),alert("Error exporting GLB file")}}function $M(n,e,t,i,r,s,a,o,l,c){const u=new eM({title:"Controls",expanded:!0}),d=u.addFolder({title:"Geometry",expanded:!0});d.addBinding(n,"N",{min:.5,max:6,step:.1,label:"Turns"}).on("change",()=>o.onParamsChange(n)),d.addBinding(n,"R",{min:.1,max:5,step:.05,label:"Major radius"}).on("change",()=>o.onParamsChange(n)),d.addBinding(n,"r0",{min:.02,max:1.5,step:.01,label:"Start tube radius"}).on("change",()=>o.onParamsChange(n));const p=u.addFolder({title:"Decay",expanded:!0}),f=p.addBinding(n,"mode",{options:{Exponential:"Exponential",Linear:"Linear"},label:"Decay type"}),g=p.addBinding(n,"k",{min:0,max:.6,step:.01,label:"Exponential rate"}).on("change",()=>o.onParamsChange(n)),v=p.addBinding(n,"alpha",{min:0,max:.2,step:.01,label:"Linear rate"}).on("change",()=>o.onParamsChange(n)),m=()=>{const T=n.mode==="Exponential";g.hidden=!T,v.hidden=T};f.on("change",()=>{m(),o.onParamsChange(n)}),m(),p.addBinding(n,"rMin",{min:0,max:.3,step:.005,label:"Min tube radius"}).on("change",()=>o.onParamsChange(n));const h=u.addFolder({title:"Shape",expanded:!0});h.addBinding(n,"h",{min:-2,max:2,step:.1,label:"Axial rise"}).on("change",()=>o.onParamsChange(n)),h.addBinding(n,"epsilon",{min:0,max:.5,step:.01,label:"Eccentricity"}).on("change",()=>o.onParamsChange(n)),h.addBinding(n,"twist",{min:-2*Math.PI,max:2*Math.PI,step:.1,label:"Cross-section twist"}).on("change",()=>o.onParamsChange(n)),h.addBinding(n,"wallThickness",{min:0,max:.3,step:.01,label:"Wall thickness"}).on("change",()=>o.onParamsChange(n));const w=u.addFolder({title:"Mesh",expanded:!0});w.addBinding(n,"uDiv",{min:16,max:480,step:8,label:"U divisions"}).on("change",()=>o.onParamsChange(n)),w.addBinding(n,"vDiv",{min:16,max:160,step:4,label:"V divisions"}).on("change",()=>o.onParamsChange(n));const _=u.addFolder({title:"Rendering",expanded:!0});_.addBinding(n,"projection",{options:{Orthographic:"Orthographic",Perspective:"Perspective"},label:"Projection"}).on("change",T=>{o.onProjectionChange(T.value)}),_.addBinding(n,"renderStyle",{options:{Wireframe:"Wireframe","Hidden-line":"Hidden-line",Solid:"Solid"},label:"Render style"}).on("change",()=>o.onParamsChange(n)),_.addBinding(n,"showMeridians",{label:"Show meridians"}).on("change",()=>o.onParamsChange(n)),_.addBinding(n,"showParallels",{label:"Show parallels"}).on("change",()=>o.onParamsChange(n)),_.addBinding(n,"showInnerSurface",{label:"Show inner surface"}).on("change",()=>o.onParamsChange(n)),_.addBinding(n,"occludeInner",{label:"Occlude inner mesh"}).on("change",()=>o.onParamsChange(n)),_.addBinding(n,"outerColor",{label:"Outer color"}).on("change",()=>o.onParamsChange(n)),_.addBinding(n,"innerColor",{label:"Inner color"}).on("change",()=>o.onParamsChange(n)),_.addBinding(n,"backgroundColor",{label:"Background"}).on("change",T=>{o.onBackgroundChange(T.value)}),_.addBinding(n,"showGrid",{label:"Show grid"}).on("change",T=>{o.onGridChange(T.value)});const A=u.addFolder({title:"Texture"});n.textureRepeat||(n.textureRepeat={u:1,v:1}),n.textureOffset||(n.textureOffset={u:0,v:0}),A.addButton({title:"Load Image"}).on("click",()=>{console.log("Load Image button clicked");const T=document.createElement("input");T.type="file",T.accept="image/*",T.style.position="fixed",T.style.top="-1000px",T.style.left="-1000px";const I=V=>{var Z;console.log("File input changed");const X=(Z=V.target.files)==null?void 0:Z[0];if(!X){console.log("No file selected"),document.body.removeChild(T);return}console.log("File selected:",X.name,X.type,X.size);const j=new FileReader;j.onerror=K=>{console.error("FileReader error:",K),alert("Error reading image file"),document.body.removeChild(T)},j.onload=K=>{var H;const ae=(H=K.target)==null?void 0:H.result;typeof ae=="string"?(console.log("File read successfully, data URL length:",ae.length),n.textureImage=ae,console.log("Setting textureImage, calling onParamsChange"),console.log("Current renderStyle:",n.renderStyle),n.renderStyle!=="Solid"&&console.warn('⚠️ Texture loaded but renderStyle is not "Solid". Switch to "Solid" mode to see the texture.'),o.onParamsChange(n),console.log("Texture should now be applied")):console.error("FileReader result is not a string"),document.body.removeChild(T)},j.readAsDataURL(X)};T.addEventListener("change",I),T.addEventListener("cancel",()=>{console.log("File selection cancelled"),document.body.removeChild(T)}),document.body.appendChild(T),console.log("Triggering file input click"),T.click()}),A.addButton({title:"Remove Texture"}).on("click",()=>{n.textureImage=void 0,o.onParamsChange(n),console.log("Texture removed")});const C={hasTexture:n.textureImage?"Yes":"No"},P=A.addBinding(C,"hasTexture",{label:"Texture loaded",readonly:!0}),S=o.onParamsChange;o.onParamsChange=T=>{var V;const I=!!T.textureImage;C.hasTexture=I?"Yes":"No",P&&"refresh"in P&&P.refresh(),console.log("Updating texture status:",I,"textureImage length:",((V=T.textureImage)==null?void 0:V.length)||0),S(T)},A.addBinding(n.textureRepeat,"u",{min:.1,max:10,step:.1,label:"Repeat U"}).on("change",()=>o.onParamsChange(n)),A.addBinding(n.textureRepeat,"v",{min:.1,max:10,step:.1,label:"Repeat V"}).on("change",()=>o.onParamsChange(n)),A.addBinding(n.textureOffset,"u",{min:-1,max:1,step:.01,label:"Offset U"}).on("change",()=>o.onParamsChange(n)),A.addBinding(n.textureOffset,"v",{min:-1,max:1,step:.01,label:"Offset V"}).on("change",()=>o.onParamsChange(n));const L=u.addFolder({title:"Views"});l&&(L.addBinding(n,"autoRotate",{label:"Auto Rotate"}).on("change",T=>{l&&(l.autoRotate=T.value),o.onAutoRotateChange&&o.onAutoRotateChange(T.value)}),L.addBinding(l,"autoRotateSpeed",{min:.1,max:5,step:.1,label:"Rotate Speed"})),r instanceof vt&&L.addBinding(n,"fov",{min:10,max:120,step:1,label:"Field of View"}).on("change",T=>{r instanceof vt&&(r.fov=T.value,r.updateProjectionMatrix())}),r instanceof Un&&L.addBinding(n,"orthoSize",{min:1,max:10,step:.1,label:"Ortho Size"}).on("change",T=>{if(r instanceof Un){const I=window.innerWidth/window.innerHeight;r.left=-T.value*I,r.right=T.value*I,r.top=T.value,r.bottom=-T.value,r.updateProjectionMatrix()}}),[{title:"Front",position:[0,0,5]},{title:"Side",position:[5,0,0]},{title:"Top",position:[0,5,0]},{title:"Isometric",position:[5,4,5]}].forEach(T=>{L.addButton({title:T.title}).on("click",()=>{l&&(l.target.set(0,0,0),r.position.set(T.position[0],T.position[1],T.position[2]),l.update())})}),l&&L.addButton({title:"Reset Camera"}).on("click",()=>{o.onCameraReset?o.onCameraReset():l.reset()});const M=u.addFolder({title:"Visualization"});c&&M.addBinding(n,"showAxes",{label:"Show Axes"}).on("change",T=>{c&&(c.visible=T.value),o.onAxesChange&&o.onAxesChange(T.value)});const O=u.addFolder({title:"Cross-Section"});O.addBinding(n,"showCrossSection",{label:"Show cross-section"}).on("change",()=>o.onParamsChange(n)),O.addBinding(n,"crossSectionSpokes",{min:4,max:48,step:1,label:"Radial spokes"}).on("change",()=>o.onParamsChange(n)),O.addBinding(n,"crossSectionCircles",{min:0,max:8,step:1,label:"Concentric circles"}).on("change",()=>o.onParamsChange(n)),O.addBinding(n,"crossSectionColor",{label:"Color"}).on("change",()=>o.onParamsChange(n));const G=u.addFolder({title:"Presets"});G.addButton({title:"Denes Original"}).on("click",()=>{Pr("denesOriginal",n,e,t,o.onParamsChange,o.onProjectionChange)}),G.addButton({title:"Denes-like"}).on("click",()=>{Pr("denes",n,e,t,o.onParamsChange,o.onProjectionChange)}),G.addButton({title:"Snail tight"}).on("click",()=>{Pr("snail",n,e,t,o.onParamsChange,o.onProjectionChange)}),G.addButton({title:"Wide torus"}).on("click",()=>{Pr("wide",n,e,t,o.onParamsChange,o.onProjectionChange)}),G.addButton({title:"Flat coil"}).on("click",()=>{Pr("flat",n,e,t,o.onParamsChange,o.onProjectionChange)});const q=u.addFolder({title:"Export"});return q.addButton({title:"PNG Screenshot"}).on("click",()=>{nM(i,e,r,a)}),q.addButton({title:"SVG Wireframe"}).on("click",()=>{iM(i,e,r,s,n)}),q.addButton({title:"STL (Binary)"}).on("click",()=>{GM(s)}),q.addButton({title:"OBJ Model"}).on("click",()=>{WM(s)}),q.addButton({title:"USDZ (Apple AR)"}).on("click",async()=>{await jM(s)}),q.addButton({title:"GLB Model"}).on("click",async()=>{await XM(s)}),q.addButton({title:"Copy JSON Config"}).on("click",()=>{rM(n,r,l),alert("Configuration copied to clipboard!")}),q.addButton({title:"Save JSON Config"}).on("click",()=>{sM(n,r,l)}),q.addButton({title:"Load JSON Config"}).on("click",()=>{oM({onParamsLoad:T=>{Object.assign(n,T),o.onParamsChange(n),T.projection&&o.onProjectionChange(T.projection),T.backgroundColor&&o.onBackgroundChange(T.backgroundColor),T.showGrid!==void 0&&o.onGridChange(T.showGrid)},onCameraLoad:T=>{if(T.position&&l&&r.position.set(T.position.x,T.position.y,T.position.z),T.target&&l&&l.target.set(T.target.x,T.target.y,T.target.z),T.fov&&r instanceof vt&&(r.fov=T.fov,r.updateProjectionMatrix()),T.orthoSize&&r instanceof Un){const I=window.innerWidth/window.innerHeight;r.left=-T.orthoSize*I,r.right=T.orthoSize*I,r.top=T.orthoSize,r.bottom=-T.orthoSize,r.updateProjectionMatrix()}l&&l.update()}})}),u}const qM={N:2.75,R:1.65,r0:.55,mode:"Exponential",k:.18,alpha:.1,rMin:.015,h:0,epsilon:.08,twist:0,wallThickness:.1,uDiv:320,vDiv:96,projection:"Orthographic",renderStyle:"Wireframe",showMeridians:!0,showParallels:!0,showInnerSurface:!0,occludeInner:!0,lineWidth:1,outerColor:"#333333",innerColor:"#555555",backgroundColor:"#e8e8e8",showGrid:!1,showCrossSection:!1,crossSectionColor:"#ff3333",crossSectionSpokes:24,crossSectionCircles:3,laserCutProjection:"Top",laserCutLayers:{outer:!0,inner:!0,crossSection:!1},pathSimplification:.5,optimizeCutOrder:!0,autoRotate:!1,cameraDistance:7.07,fov:50,orthoSize:3,ambientIntensity:.6,directionalIntensity:.8,showAxes:!1,showStats:!1};function YM(n){if(n.length<3)return[...n];const e=n.map(a=>({...a}));let t=0;for(let a=1;a<e.length;a++)(e[a].y<e[t].y||e[a].y===e[t].y&&e[a].x<e[t].x)&&(t=a);[e[0],e[t]]=[e[t],e[0]];const i=e[0],r=e.slice(1).sort((a,o)=>{const l=Math.atan2(a.y-i.y,a.x-i.x),c=Math.atan2(o.y-i.y,o.x-i.x);if(l!==c)return l-c;const u=(a.x-i.x)**2+(a.y-i.y)**2;return(o.x-i.x)**2+(o.y-i.y)**2-u}),s=[{...i}];for(const a of r){for(;s.length>1;){const o=s[s.length-2],l=s[s.length-1];if((l.x-o.x)*(a.y-o.y)-(l.y-o.y)*(a.x-o.x)<=0)s.pop();else break}s.push({...a})}return s}function KM(n,e){const t=e.laserCutProjection||"Top",i=[],r=new Set;if(n.traverse(s=>{if(s instanceof Et){const a=s.geometry,o=a.attributes.position;if(a.index){const c=(e.uDiv+1)*(e.vDiv+1);for(let u=0;u<Math.min(o.count,c);u++){const d=new U(o.getX(u),o.getY(u),o.getZ(u));d.applyMatrix4(s.matrixWorld);const p=Fr(d,t,e),f=`${p.x.toFixed(4)},${p.y.toFixed(4)}`;r.has(f)||(r.add(f),i.push(p))}}else for(let c=0;c<o.count;c++){const u=new U(o.getX(c),o.getY(c),o.getZ(c));u.applyMatrix4(s.matrixWorld);const d=Fr(u,t,e),p=`${d.x.toFixed(4)},${d.y.toFixed(4)}`;r.has(p)||(r.add(p),i.push(d))}}}),i.length===0){const a=fa(e).attributes.position,o=(e.uDiv+1)*(e.vDiv+1);for(let l=0;l<o;l++){const c=new U(a.getX(l),a.getY(l),a.getZ(l)),u=Fr(c,t,e);i.push(u)}}return YM(i)}function Js(n,e){if(n.length<=2)return n;let t=0,i=0;const r=n[0],s=n[n.length-1];for(let a=1;a<n.length-1;a++){const o=ZM(n[a],r,s);o>t&&(t=o,i=a)}if(t>e){const a=Js(n.slice(0,i+1),e),o=Js(n.slice(i),e);return[...a.slice(0,-1),...o]}else return[r,s]}function ZM(n,e,t){const i=n.x-e.x,r=n.y-e.y,s=t.x-e.x,a=t.y-e.y,o=i*s+r*a,l=s*s+a*a;let c=-1;l!==0&&(c=o/l);let u,d;c<0?(u=e.x,d=e.y):c>1?(u=t.x,d=t.y):(u=e.x+c*s,d=e.y+c*a);const p=n.x-u,f=n.y-d;return Math.sqrt(p*p+f*f)}function JM(n){const e=[],t=new Set;for(let i=0;i<n.length;i++){if(t.has(i))continue;const r={...n[i],points:[...n[i].points]};t.add(i);let s=!0;for(;s;){s=!1;for(let a=0;a<n.length;a++){if(t.has(a)||n[a].layer!==r.layer)continue;const o=n[a],l=r.points[0],c=r.points[r.points.length-1],u=o.points[0],d=o.points[o.points.length-1],p=.01;Jn(c,u)<p?(r.points.push(...o.points.slice(1)),t.add(a),s=!0):Jn(c,d)<p?(r.points.push(...o.points.slice(0,-1).reverse()),t.add(a),s=!0):Jn(l,d)<p?(r.points.unshift(...o.points.slice(0,-1).reverse()),t.add(a),s=!0):Jn(l,u)<p&&(r.points.unshift(...o.points.slice(1).reverse()),t.add(a),s=!0)}}e.push(r)}return e}function Jn(n,e){const t=n.x-e.x,i=n.y-e.y;return Math.sqrt(t*t+i*i)}function QM(n){if(n.length<=1)return n;const e=[],t=[...n];let i=t.shift();for(e.push(i);t.length>0;){let r=0,s=1/0;const a=i.points[i.points.length-1];for(let l=0;l<t.length;l++){const c=t[l],u=Jn(a,c.points[0]),d=Jn(a,c.points[c.points.length-1]),p=Math.min(u,d);p<s&&(s=p,r=l)}i=t.splice(r,1)[0];const o=e[e.length-1].points[e[e.length-1].points.length-1];Jn(o,i.points[i.points.length-1])<Jn(o,i.points[0])&&i.points.reverse(),e.push(i)}return e}function Fr(n,e,t){switch(e){case"Top":return{x:n.x,y:n.y};case"Side":return{x:n.x,y:n.z};case"Unrolled":const i=Math.atan2(n.y,n.x),r=2*Math.PI*t.N;return{x:(i<0?i+2*Math.PI:i)/(2*Math.PI)*r*t.R,y:n.z};default:return{x:n.x,y:n.y}}}function eE(n,e){const t=[],i=e.laserCutProjection||"Top",r=KM(n,e);if(r.length>0){const s=[...r,r[0]];t.push({points:s,layer:"outer",closed:!0})}return n.traverse(s=>{if(s instanceof Kt){const a=s.geometry.attributes.position,o=[];for(let u=0;u<a.count;u++){const d=new U(a.getX(u),a.getY(u),a.getZ(u));d.applyMatrix4(s.matrixWorld),o.push(d)}let l="inner";const c=s.material;if(c.color.getHex()===new Se(e.innerColor).getHex())l="inner";else if(c.color.getHex()===new Se(e.crossSectionColor).getHex())l="crossSection";else return;for(let u=0;u<o.length-1;u++){const d=Fr(o[u],i,e),p=Fr(o[u+1],i,e);t.push({points:[d,p],layer:l,closed:!1})}}}),t}function tE(n,e,t=1e3,i=1e3){const r=e.laserCutLayers||{outer:!0,inner:!0,crossSection:!1},s=n.filter(C=>C.layer==="outer"&&C.closed),a=n.filter(C=>C.layer==="outer"&&!C.closed?!1:C.layer==="outer"?r.outer:C.layer==="inner"?r.inner:C.layer==="crossSection"?r.crossSection:!0),o=e.pathSimplification||.5;let l=[];if(r.outer&&s.length>0){const C=s[0];if(o>0&&C.points.length>2){const P=o*.1,S=C.points.slice(0,-1),L=Js(S,P);l.push({...C,points:[...L,L[0]]})}else l.push(C)}o>0?a.forEach(C=>{l.push({...C,points:Js(C.points,o)})}):l.push(...a);const c=l.filter(C=>C.layer==="outer"&&C.closed),u=l.filter(C=>!(C.layer==="outer"&&C.closed));if(l=[...c,...JM(u)],e.optimizeCutOrder){const C=l.filter(S=>S.layer==="outer"&&S.closed),P=l.filter(S=>!(S.layer==="outer"&&S.closed));l=[...C,...QM(P)]}let d=1/0,p=1/0,f=-1/0,g=-1/0;l.forEach(C=>{C.points.forEach(P=>{d=Math.min(d,P.x),p=Math.min(p,P.y),f=Math.max(f,P.x),g=Math.max(g,P.y)})});const v=20,m=Math.min((t-2*v)/(f-d||1),(i-2*v)/(g-p||1)),h=-d*m+v,w=-p*m+v;let _=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="${t}" height="${i}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${t} ${i}">
  <!-- Laser cutting paths for 3D mesh spiral -->
`;const A={outer:[],inner:[],crossSection:[]};return l.forEach(C=>{A[C.layer].push(C)}),Object.entries(A).forEach(([C,P])=>{if(P.length===0)return;_+=`  <g id="layer-${C}" stroke="${C==="outer"?"#ff0000":C==="inner"?"#666666":"#ff0000"}" stroke-width="${C==="outer"?"0.2":"0.1"}" fill="none">
`,P.forEach(x=>{if(x.points.length<2)return;const M=x.points.map(G=>({x:G.x*m+h,y:G.y*m+w}));let O="";if(M.length>0)if(O=`M ${M[0].x.toFixed(3)} ${M[0].y.toFixed(3)}`,M.length>2)for(let G=1;G<M.length;G++){const q=M[G],T=M[G-1];if(G===M.length-1&&x.closed){const I=T.x+(q.x-T.x)*.5,V=T.y+(q.y-T.y)*.5;O+=` Q ${I.toFixed(3)} ${V.toFixed(3)} ${q.x.toFixed(3)} ${q.y.toFixed(3)}`}else if(G<M.length-1){const I=T.x+(q.x-T.x)*.5,V=T.y+(q.y-T.y)*.5;O+=` Q ${I.toFixed(3)} ${V.toFixed(3)} ${q.x.toFixed(3)} ${q.y.toFixed(3)}`}else O+=` L ${q.x.toFixed(3)} ${q.y.toFixed(3)}`}else for(let G=1;G<M.length;G++){const q=M[G];O+=` L ${q.x.toFixed(3)} ${q.y.toFixed(3)}`}x.closed?_+=`    <path d="${O} Z" stroke-linejoin="round" stroke-linecap="round"/>
`:_+=`    <path d="${O}" stroke-linejoin="round" stroke-linecap="round"/>
`}),_+=`  </g>
`}),_+="</svg>",_}function nE(n,e){const t=eE(n,e),i=tE(t,e),r=new Blob([i],{type:"image/svg+xml"}),s=URL.createObjectURL(r),a=document.createElement("a");a.href=s,a.download=`laser_cut_spiral_${Date.now()}.svg`,a.click(),URL.revokeObjectURL(s)}const pl=document.getElementById("canvas");if(!pl)throw new Error("Canvas element not found");const ho=A0(pl),{scene:xr,renderer:Rh,orthoCamera:Lh,perspCamera:Dh,orbitControls:sr,gridHelper:fl}=ho,ml=new S0(2);ml.visible=!1;xr.add(ml);const qr=new Ln;xr.add(qr);let mn={...qM};xr.background=new Se(mn.backgroundColor);fl.visible=mn.showGrid;let Qn=mn.projection==="Orthographic"?Lh:Dh;ho.camera=Qn;sr.object=Qn;xd(qr,mn);const iE={onParamsChange:n=>{mn=n,xd(qr,mn)},onProjectionChange:n=>{Qn=n==="Orthographic"?Lh:Dh,ho.camera=Qn,sr.object=Qn,Qn.position.copy(sr.target).add(new U(5,4,5)),sr.update(),mn.projection=n},onBackgroundChange:n=>{xr.background=new Se(n),mn.backgroundColor=n},onGridChange:n=>{fl.visible=n,mn.showGrid=n},onLaserCutExport:n=>{nE(qr,n)}};$M(mn,xr,fl,Rh,Qn,qr,pl,iE,sr,ml);function Uh(){requestAnimationFrame(Uh),sr.update(),Rh.render(xr,Qn)}Uh();window.addEventListener("resize",()=>{P0(ho)});export{vn as B,Se as C,Zt as D,rE as I,sn as L,mt as M,Jt as N,Je as P,yi as Q,hn as R,ed as S,U as V,oE as a,Jp as b,gd as c,TM as d,Mt as e,Bt as f,Al as g,vo as h,xp as i,Br as j,dn as k,ca as l,ua as m,sE as n};
