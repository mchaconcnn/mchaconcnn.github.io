(()=>{var As="175";var al=0,to=1,ol=2;var no=1,ll=2,un=3,wn=0,wt=1,fn=2,Rn=0,ei=1,io=2,ro=3,so=4,cl=5,Vn=100,hl=101,ul=102,fl=103,dl=104,pl=200,ml=201,gl=202,_l=203,es=204,ts=205,vl=206,xl=207,yl=208,Ml=209,Sl=210,bl=211,El=212,wl=213,Tl=214,Cs=0,Rs=1,Is=2,ti=3,Ps=4,Ls=5,Ds=6,Us=7,ao=0,Al=1,Cl=2,In=0,Rl=1,Il=2,Pl=3,Ll=4,Dl=5,Ul=6,Nl=7;var oo=300,ri=301,si=302,ai=303,Ns=304,_r=306,ns=1e3,on=1001,is=1002,Nt=1003,Fl=1004;var vr=1005;var Tt=1006,Fs=1007;var Pn=1008;var dn=1009,lo=1010,co=1011,Ni=1012,Os=1013,qn=1014,Bt=1015,en=1016,Bs=1017,zs=1018,Fi=1020,ho=35902,uo=1021,fo=1022,zt=1023,po=1024,mo=1025,Ai=1026,Oi=1027,xr=1028,ks=1029,go=1030,Vs=1031;var Hs=1033,yr=33776,Mr=33777,Sr=33778,br=33779,Gs=35840,Ws=35841,Xs=35842,qs=35843,Ys=36196,Zs=37492,Js=37496,$s=37808,Ks=37809,Qs=37810,js=37811,ea=37812,ta=37813,na=37814,ia=37815,ra=37816,sa=37817,aa=37818,oa=37819,la=37820,ca=37821,Er=36492,ha=36494,ua=36495,_o=36283,fa=36284,da=36285,pa=36286;var er=2300,rs=2301,jr=2302,Ya=2400,Za=2401,Ja=2402;var Ol=3200,Bl=3201;var zl=0,kl=1,tn="",Lt="srgb",Xt="srgb-linear",tr="linear",at="srgb";var Qn=7680;var $a=519,Vl=512,Hl=513,Gl=514,vo=515,Wl=516,Xl=517,ql=518,Yl=519,Ka=35044;var xo="300 es",ln=2e3,nr=2001;var Tn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wa=Math.PI/180,ss=180/Math.PI;function wr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Oc(i,e){return(i%e+e)%e}function Ta(i,e,t){return(1-t)*i+t*e}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var lt=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class i{constructor(e,t,n,r,s,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],m=n[2],g=n[5],x=n[8],b=r[0],_=r[3],p=r[6],L=r[1],R=r[4],w=r[7],z=r[2],U=r[5],O=r[8];return s[0]=a*b+o*L+c*z,s[3]=a*_+o*R+c*U,s[6]=a*p+o*w+c*O,s[1]=l*b+u*L+h*z,s[4]=l*_+u*R+h*U,s[7]=l*p+u*w+h*O,s[2]=m*b+g*L+x*z,s[5]=m*_+g*R+x*U,s[8]=m*p+g*w+x*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,m=o*c-u*s,g=l*s-a*c,x=t*h+n*m+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=h*b,e[1]=(r*l-u*n)*b,e[2]=(o*n-r*a)*b,e[3]=m*b,e[4]=(u*t-r*c)*b,e[5]=(r*s-o*t)*b,e[6]=g*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Aa=new We;function yo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zl(){let i=ir("canvas");return i.style.display="block",i}var Go={};function Tr(i){i in Go||(Go[i]=!0,console.warn(i))}function Jl(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function $l(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kl(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Wo=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xo=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bc(){let i={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=En(r.r),r.g=En(r.g),r.b=En(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tn?tr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xt]:{primaries:e,whitePoint:n,transfer:tr,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}var et=Bc();function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pi,as=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pi===void 0&&(pi=ir("canvas")),pi.width=e.width,pi.height=e.height;let r=pi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ir("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=En(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(En(t[n]/255)*255):t[n]=En(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zc=0,Ci=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ca(r[a].image)):s.push(Ca(r[a]))}else s=Ca(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?as.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kc=0,Ft=class i extends Tn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=on,r=on,s=Tt,a=Pn,o=zt,c=dn,l=i.DEFAULT_ANISOTROPY,u=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=wr(),this.name="",this.source=new Ci(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=oo;Ft.DEFAULT_ANISOTROPY=1;var mt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],m=c[1],g=c[5],x=c[9],b=c[2],_=c[6],p=c[10];if(Math.abs(u-m)<.01&&Math.abs(h-b)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+m)<.1&&Math.abs(h+b)<.1&&Math.abs(x+_)<.1&&Math.abs(l+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,w=(g+1)/2,z=(p+1)/2,U=(u+m)/4,O=(h+b)/4,H=(x+_)/4;return R>w&&R>z?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=U/n,s=O/n):w>z?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=U/r,s=H/r):z<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(z),n=O/s,r=H/s),this.set(n,r,s,t),this}let L=Math.sqrt((_-x)*(_-x)+(h-b)*(h-b)+(m-u)*(m-u));return Math.abs(L)<.001&&(L=1),this.x=(_-x)/L,this.y=(h-b)/L,this.z=(m-u)/L,this.w=Math.acos((l+g+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},os=class extends Tn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Ft(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ci(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends os{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rr=class extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ls=class extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var An=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],m=s[a+0],g=s[a+1],x=s[a+2],b=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=m,e[t+1]=g,e[t+2]=x,e[t+3]=b;return}if(h!==b||c!==m||l!==g||u!==x){let _=1-o,p=c*m+l*g+u*x+h*b,L=p>=0?1:-1,R=1-p*p;if(R>Number.EPSILON){let z=Math.sqrt(R),U=Math.atan2(z,p*L);_=Math.sin(_*U)/z,o=Math.sin(o*U)/z}let w=o*L;if(c=c*_+m*w,l=l*_+g*w,u=u*_+x*w,h=h*_+b*w,_===1-o){let z=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=z,l*=z,u*=z,h*=z}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],m=s[a+1],g=s[a+2],x=s[a+3];return e[t]=o*x+u*h+c*g-l*m,e[t+1]=c*x+u*m+l*h-o*g,e[t+2]=l*x+u*g+o*m-c*h,e[t+3]=u*x-o*h-c*m-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),m=c(n/2),g=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=m*u*h+l*g*x,this._y=l*g*h-m*u*x,this._z=l*u*x+m*g*h,this._w=l*u*h-m*g*x;break;case"YXZ":this._x=m*u*h+l*g*x,this._y=l*g*h-m*u*x,this._z=l*u*x-m*g*h,this._w=l*u*h+m*g*x;break;case"ZXY":this._x=m*u*h-l*g*x,this._y=l*g*h+m*u*x,this._z=l*u*x+m*g*h,this._w=l*u*h-m*g*x;break;case"ZYX":this._x=m*u*h-l*g*x,this._y=l*g*h+m*u*x,this._z=l*u*x-m*g*h,this._w=l*u*h+m*g*x;break;case"YZX":this._x=m*u*h+l*g*x,this._y=l*g*h+m*u*x,this._z=l*u*x-m*g*h,this._w=l*u*h-m*g*x;break;case"XZY":this._x=m*u*h-l*g*x,this._y=l*g*h-m*u*x,this._z=l*u*x+m*g*h,this._w=l*u*h+m*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],m=n+o+h;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(u-c)*g,this._y=(s-l)*g,this._z=(a-r)*g}else if(n>o&&n>h){let g=2*Math.sqrt(1+n-o-h);this._w=(u-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+l)/g}else if(o>h){let g=2*Math.sqrt(1+o-n-h);this._w=(s-l)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+u)/g}else{let g=2*Math.sqrt(1+h-n-o);this._w=(a-r)/g,this._x=(s+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,m=Math.sin(t*u)/l;return this._w=a*h+this._w*m,this._x=n*h+this._x*m,this._y=r*h+this._y*m,this._z=s*h+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ra=new W,qo=new An,Hn=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(s,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Fr.subVectors(this.max,$i),mi.subVectors(e.a,$i),gi.subVectors(e.b,$i),_i.subVectors(e.c,$i),Un.subVectors(gi,mi),Nn.subVectors(_i,gi),Zn.subVectors(mi,_i);let t=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Zn.z,Zn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Zn.z,0,-Zn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Zn.y,Zn.x,0];return!Ia(t,mi,gi,_i,Fr)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,mi,gi,_i,Fr))?!1:(Or.crossVectors(Un,Nn),t=[Or.x,Or.y,Or.z],Ia(t,mi,gi,_i,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},_n=[new W,new W,new W,new W,new W,new W,new W,new W],$t=new W,Nr=new Hn,mi=new W,gi=new W,_i=new W,Un=new W,Nn=new W,Zn=new W,$i=new W,Fr=new W,Or=new W,Jn=new W;function Ia(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Jn.fromArray(i,s);let o=r.x*Math.abs(Jn.x)+r.y*Math.abs(Jn.y)+r.z*Math.abs(Jn.z),c=e.dot(Jn),l=t.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Vc=new Hn,Ki=new W,Pa=new W,Ri=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);let t=Ki.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ki,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(Pa)),this.expandByPoint(Ki.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vn=new W,La=new W,Br=new W,Fn=new W,Da=new W,zr=new W,Ua=new W,cs=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){La.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(La);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=Fn.dot(this.direction),c=-Fn.dot(Br),l=Fn.lengthSq(),u=Math.abs(1-a*a),h,m,g,x;if(u>0)if(h=a*c-o,m=a*o-c,x=s*u,h>=0)if(m>=-x)if(m<=x){let b=1/u;h*=b,m*=b,g=h*(h+a*m+2*o)+m*(a*h+m+2*c)+l}else m=s,h=Math.max(0,-(a*m+o)),g=-h*h+m*(m+2*c)+l;else m=-s,h=Math.max(0,-(a*m+o)),g=-h*h+m*(m+2*c)+l;else m<=-x?(h=Math.max(0,-(-a*s+o)),m=h>0?-s:Math.min(Math.max(-s,-c),s),g=-h*h+m*(m+2*c)+l):m<=x?(h=0,m=Math.min(Math.max(-s,-c),s),g=m*(m+2*c)+l):(h=Math.max(0,-(a*s+o)),m=h>0?s:Math.min(Math.max(-s,-c),s),g=-h*h+m*(m+2*c)+l);else m=a>0?-s:s,h=Math.max(0,-(a*m+o)),g=-h*h+m*(m+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(La).addScaledVector(Br,m),g}intersectSphere(e,t){vn.subVectors(e.center,this.origin);let n=vn.dot(this.direction),r=vn.dot(vn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,m=this.origin;return l>=0?(n=(e.min.x-m.x)*l,r=(e.max.x-m.x)*l):(n=(e.max.x-m.x)*l,r=(e.min.x-m.x)*l),u>=0?(s=(e.min.y-m.y)*u,a=(e.max.y-m.y)*u):(s=(e.max.y-m.y)*u,a=(e.min.y-m.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-m.z)*h,c=(e.max.z-m.z)*h):(o=(e.max.z-m.z)*h,c=(e.min.z-m.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,r,s){Da.subVectors(t,e),zr.subVectors(n,e),Ua.crossVectors(Da,zr);let a=this.direction.dot(Ua),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,e);let c=o*this.direction.dot(zr.crossVectors(Fn,zr));if(c<0)return null;let l=o*this.direction.dot(Da.cross(Fn));if(l<0||c+l>a)return null;let u=-o*Fn.dot(Ua);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_t=class i{constructor(e,t,n,r,s,a,o,c,l,u,h,m,g,x,b,_){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,m,g,x,b,_)}set(e,t,n,r,s,a,o,c,l,u,h,m,g,x,b,_){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=m,p[3]=g,p[7]=x,p[11]=b,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/vi.setFromMatrixColumn(e,0).length(),s=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let m=a*u,g=a*h,x=o*u,b=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=g+x*l,t[5]=m-b*l,t[9]=-o*c,t[2]=b-m*l,t[6]=x+g*l,t[10]=a*c}else if(e.order==="YXZ"){let m=c*u,g=c*h,x=l*u,b=l*h;t[0]=m+b*o,t[4]=x*o-g,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=g*o-x,t[6]=b+m*o,t[10]=a*c}else if(e.order==="ZXY"){let m=c*u,g=c*h,x=l*u,b=l*h;t[0]=m-b*o,t[4]=-a*h,t[8]=x+g*o,t[1]=g+x*o,t[5]=a*u,t[9]=b-m*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let m=a*u,g=a*h,x=o*u,b=o*h;t[0]=c*u,t[4]=x*l-g,t[8]=m*l+b,t[1]=c*h,t[5]=b*l+m,t[9]=g*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let m=a*c,g=a*l,x=o*c,b=o*l;t[0]=c*u,t[4]=b-m*h,t[8]=x*h+g,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=g*h+x,t[10]=m-b*h}else if(e.order==="XZY"){let m=a*c,g=a*l,x=o*c,b=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=m*h+b,t[5]=a*u,t[9]=g*h-x,t[2]=x*h-g,t[6]=o*u,t[10]=b*h+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hc,e,Gc)}lookAt(e,t,n){let r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),On.crossVectors(n,Vt),On.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),On.crossVectors(n,Vt)),On.normalize(),kr.crossVectors(Vt,On),r[0]=On.x,r[4]=kr.x,r[8]=Vt.x,r[1]=On.y,r[5]=kr.y,r[9]=Vt.y,r[2]=On.z,r[6]=kr.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],m=n[9],g=n[13],x=n[2],b=n[6],_=n[10],p=n[14],L=n[3],R=n[7],w=n[11],z=n[15],U=r[0],O=r[4],H=r[8],T=r[12],M=r[1],N=r[5],$=r[9],Y=r[13],Q=r[2],le=r[6],K=r[10],ce=r[14],J=r[3],pe=r[7],ge=r[11],Ce=r[15];return s[0]=a*U+o*M+c*Q+l*J,s[4]=a*O+o*N+c*le+l*pe,s[8]=a*H+o*$+c*K+l*ge,s[12]=a*T+o*Y+c*ce+l*Ce,s[1]=u*U+h*M+m*Q+g*J,s[5]=u*O+h*N+m*le+g*pe,s[9]=u*H+h*$+m*K+g*ge,s[13]=u*T+h*Y+m*ce+g*Ce,s[2]=x*U+b*M+_*Q+p*J,s[6]=x*O+b*N+_*le+p*pe,s[10]=x*H+b*$+_*K+p*ge,s[14]=x*T+b*Y+_*ce+p*Ce,s[3]=L*U+R*M+w*Q+z*J,s[7]=L*O+R*N+w*le+z*pe,s[11]=L*H+R*$+w*K+z*ge,s[15]=L*T+R*Y+w*ce+z*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],m=e[10],g=e[14],x=e[3],b=e[7],_=e[11],p=e[15];return x*(+s*c*h-r*l*h-s*o*m+n*l*m+r*o*g-n*c*g)+b*(+t*c*g-t*l*m+s*a*m-r*a*g+r*l*u-s*c*u)+_*(+t*l*h-t*o*g-s*a*h+n*a*g+s*o*u-n*l*u)+p*(-r*o*u-t*c*h+t*o*m+r*a*h-n*a*m+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],m=e[10],g=e[11],x=e[12],b=e[13],_=e[14],p=e[15],L=h*_*l-b*m*l+b*c*g-o*_*g-h*c*p+o*m*p,R=x*m*l-u*_*l-x*c*g+a*_*g+u*c*p-a*m*p,w=u*b*l-x*h*l+x*o*g-a*b*g-u*o*p+a*h*p,z=x*h*c-u*b*c-x*o*m+a*b*m+u*o*_-a*h*_,U=t*L+n*R+r*w+s*z;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/U;return e[0]=L*O,e[1]=(b*m*s-h*_*s-b*r*g+n*_*g+h*r*p-n*m*p)*O,e[2]=(o*_*s-b*c*s+b*r*l-n*_*l-o*r*p+n*c*p)*O,e[3]=(h*c*s-o*m*s-h*r*l+n*m*l+o*r*g-n*c*g)*O,e[4]=R*O,e[5]=(u*_*s-x*m*s+x*r*g-t*_*g-u*r*p+t*m*p)*O,e[6]=(x*c*s-a*_*s-x*r*l+t*_*l+a*r*p-t*c*p)*O,e[7]=(a*m*s-u*c*s+u*r*l-t*m*l-a*r*g+t*c*g)*O,e[8]=w*O,e[9]=(x*h*s-u*b*s-x*n*g+t*b*g+u*n*p-t*h*p)*O,e[10]=(a*b*s-x*o*s+x*n*l-t*b*l-a*n*p+t*o*p)*O,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*g-t*o*g)*O,e[12]=z*O,e[13]=(u*b*r-x*h*r+x*n*m-t*b*m-u*n*_+t*h*_)*O,e[14]=(x*o*r-a*b*r-x*n*c+t*b*c+a*n*_-t*o*_)*O,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*m+t*o*m)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,m=s*l,g=s*u,x=s*h,b=a*u,_=a*h,p=o*h,L=c*l,R=c*u,w=c*h,z=n.x,U=n.y,O=n.z;return r[0]=(1-(b+p))*z,r[1]=(g+w)*z,r[2]=(x-R)*z,r[3]=0,r[4]=(g-w)*U,r[5]=(1-(m+p))*U,r[6]=(_+L)*U,r[7]=0,r[8]=(x+R)*O,r[9]=(_-L)*O,r[10]=(1-(m+b))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=vi.set(r[0],r[1],r[2]).length(),a=vi.set(r[4],r[5],r[6]).length(),o=vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);let l=1/s,u=1/a,h=1/o;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=h,Kt.elements[9]*=h,Kt.elements[10]*=h,t.setFromRotationMatrix(Kt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=ln){let c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),m=(n+r)/(n-r),g,x;if(o===ln)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===nr)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ln){let c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(a-s),m=(t+e)*l,g=(n+r)*u,x,b;if(o===ln)x=(a+s)*h,b=-2*h;else if(o===nr)x=s*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=b,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vi=new W,Kt=new _t,Hc=new W(0,0,0),Gc=new W(1,1,1),On=new W,kr=new W,Vt=new W,Yo=new _t,Zo=new An,hn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zo.setFromEuler(this),this.setFromQuaternion(Zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wc=0,Jo=new W,xi=new An,xn=new _t,Vr=new W,Qi=new W,Xc=new W,qc=new An,$o=new W(1,0,0),Ko=new W(0,1,0),Qo=new W(0,0,1),jo={type:"added"},Yc={type:"removed"},yi={type:"childadded",child:null},Na={type:"childremoved",child:null},Ot=class i extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new W,t=new hn,n=new An,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new We}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis($o,e)}rotateY(e){return this.rotateOnAxis(Ko,e)}rotateZ(e){return this.rotateOnAxis(Qo,e)}translateOnAxis(e,t){return Jo.copy(e).applyQuaternion(this.quaternion),this.position.add(Jo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($o,e)}translateY(e){return this.translateOnAxis(Ko,e)}translateZ(e){return this.translateOnAxis(Qo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vr.copy(e):Vr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Qi,Vr,this.up):xn.lookAt(Vr,Qi,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),xi.setFromRotationMatrix(xn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jo),yi.child=e,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yc),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jo),yi.child=e,this.dispatchEvent(yi),yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Xc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,qc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),m=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ot.DEFAULT_UP=new W(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=new W,yn=new W,Fa=new W,Mn=new W,Mi=new W,Si=new W,el=new W,Oa=new W,Ba=new W,za=new W,ka=new mt,Va=new mt,Ha=new mt,kn=class i{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qt.subVectors(e,t),r.cross(Qt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Qt.subVectors(r,t),yn.subVectors(n,t),Fa.subVectors(e,t);let a=Qt.dot(Qt),o=Qt.dot(yn),c=Qt.dot(Fa),l=yn.dot(yn),u=yn.dot(Fa),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;let m=1/h,g=(l*c-o*u)*m,x=(a*u-o*c)*m;return s.set(1-g-x,x,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mn.x),c.addScaledVector(a,Mn.y),c.addScaledVector(o,Mn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return ka.setScalar(0),Va.setScalar(0),Ha.setScalar(0),ka.fromBufferAttribute(e,t),Va.fromBufferAttribute(e,n),Ha.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ka,s.x),a.addScaledVector(Va,s.y),a.addScaledVector(Ha,s.z),a}static isFrontFacing(e,t,n,r){return Qt.subVectors(n,t),yn.subVectors(e,t),Qt.cross(yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Qt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Mi.subVectors(r,n),Si.subVectors(s,n),Oa.subVectors(e,n);let c=Mi.dot(Oa),l=Si.dot(Oa);if(c<=0&&l<=0)return t.copy(n);Ba.subVectors(e,r);let u=Mi.dot(Ba),h=Si.dot(Ba);if(u>=0&&h<=u)return t.copy(r);let m=c*h-u*l;if(m<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Mi,a);za.subVectors(e,s);let g=Mi.dot(za),x=Si.dot(za);if(x>=0&&g<=x)return t.copy(s);let b=g*l-c*x;if(b<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Si,o);let _=u*x-g*h;if(_<=0&&h-u>=0&&g-x>=0)return el.subVectors(s,r),o=(h-u)/(h-u+(g-x)),t.copy(r).addScaledVector(el,o);let p=1/(_+b+m);return a=b*p,o=m*p,t.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function Ga(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=et.workingColorSpace){if(e=Oc(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ga(a,s,e+1/3),this.g=Ga(a,s,e),this.b=Ga(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=Ql[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return et.fromWorkingColorSpace(Ct.copy(this),e),Math.round($e(Ct.r*255,0,255))*65536+Math.round($e(Ct.g*255,0,255))*256+Math.round($e(Ct.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Ct.copy(this),t);let n=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Lt){et.fromWorkingColorSpace(Ct.copy(this),e);let t=Ct.r,n=Ct.g,r=Ct.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Hr);let n=Ta(Bn.h,Hr.h,t),r=Ta(Bn.s,Hr.s,t),s=Ta(Bn.l,Hr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new tt;tt.NAMES=Ql;var Zc=0,ni=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=ei,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=es,this.blendDst=ts,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==es&&(n.blendSrc=this.blendSrc),this.blendDst!==ts&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Gn=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bn=Jc();function Jc(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function $c(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=$e(i,-65504,65504),bn.floatView[0]=i;let e=bn.uint32View[0],t=e>>23&511;return bn.baseTable[t]+((e&8388607)>>bn.shiftTable[t])}function Kc(i){let e=i>>10;return bn.uint32View[0]=bn.mantissaTable[bn.offsetTable[e]+(i&1023)]+bn.exponentTable[e],bn.floatView[0]}var Ii=class{static toHalfFloat(e){return $c(e)}static fromHalfFloat(e){return Kc(e)}},gt=new W,Gr=new lt,Qc=0,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=Bt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ka&&(e.usage=this.usage),e}};var ar=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var or=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Wt=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},jc=0,Yt=new _t,Wa=new Ot,bi=new W,Ht=new Hn,ji=new Hn,Et=new W,Cn=class i extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yo(e)?or:ar)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Ht.min,ji.min),Ht.expandByPoint(Et),Et.addVectors(Ht.max,ji.max),Ht.expandByPoint(Et)):(Ht.expandByPoint(ji.min),Ht.expandByPoint(ji.max))}Ht.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Et.fromBufferAttribute(o,l),c&&(bi.fromBufferAttribute(e,l),Et.add(bi)),r=Math.max(r,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let H=0;H<n.count;H++)o[H]=new W,c[H]=new W;let l=new W,u=new W,h=new W,m=new lt,g=new lt,x=new lt,b=new W,_=new W;function p(H,T,M){l.fromBufferAttribute(n,H),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),m.fromBufferAttribute(s,H),g.fromBufferAttribute(s,T),x.fromBufferAttribute(s,M),u.sub(l),h.sub(l),g.sub(m),x.sub(m);let N=1/(g.x*x.y-x.x*g.y);isFinite(N)&&(b.copy(u).multiplyScalar(x.y).addScaledVector(h,-g.y).multiplyScalar(N),_.copy(h).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(N),o[H].add(b),o[T].add(b),o[M].add(b),c[H].add(_),c[T].add(_),c[M].add(_))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let H=0,T=L.length;H<T;++H){let M=L[H],N=M.start,$=M.count;for(let Y=N,Q=N+$;Y<Q;Y+=3)p(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}let R=new W,w=new W,z=new W,U=new W;function O(H){z.fromBufferAttribute(r,H),U.copy(z);let T=o[H];R.copy(T),R.sub(z.multiplyScalar(z.dot(T))).normalize(),w.crossVectors(U,T);let N=w.dot(c[H])<0?-1:1;a.setXYZW(H,R.x,R.y,R.z,N)}for(let H=0,T=L.length;H<T;++H){let M=L[H],N=M.start,$=M.count;for(let Y=N,Q=N+$;Y<Q;Y+=3)O(e.getX(Y+0)),O(e.getX(Y+1)),O(e.getX(Y+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let r=new W,s=new W,a=new W,o=new W,c=new W,l=new W,u=new W,h=new W;if(e)for(let m=0,g=e.count;m<g;m+=3){let x=e.getX(m+0),b=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,_),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,_),o.add(u),c.add(u),l.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,m=new l.constructor(c.length*u),g=0,x=0;for(let b=0,_=c.length;b<_;b++){o.isInterleavedBufferAttribute?g=c[b]*o.data.stride+o.offset:g=c[b]*u;for(let p=0;p<u;p++)m[x++]=l[g++]}return new Gt(m,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){let m=l[u],g=e(m,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,m=l.length;h<m;h++){let g=l[h];u.push(g.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let m=0,g=h.length;m<g;m++)u.push(h[m].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tl=new _t,$n=new cs,Wr=new Ri,nl=new W,Xr=new W,qr=new W,Yr=new W,Xa=new W,Zr=new W,il=new W,Jr=new W,Dt=class extends Ot{constructor(e=new Cn,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Zr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],h=s[c];u!==0&&(Xa.fromBufferAttribute(h,e),a?Zr.addScaledVector(Xa,u):Zr.addScaledVector(Xa.sub(t),u))}t.add(Zr)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),$n.copy(e.ray).recast(e.near),!(Wr.containsPoint($n.origin)===!1&&($n.intersectSphere(Wr,nl)===null||$n.origin.distanceToSquared(nl)>(e.far-e.near)**2))&&(tl.copy(s).invert(),$n.copy(e.ray).applyMatrix4(tl),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,m=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=m.length;x<b;x++){let _=m[x],p=a[_.materialIndex],L=Math.max(_.start,g.start),R=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let w=L,z=R;w<z;w+=3){let U=o.getX(w),O=o.getX(w+1),H=o.getX(w+2);r=$r(this,p,e,n,l,u,h,U,O,H),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let x=Math.max(0,g.start),b=Math.min(o.count,g.start+g.count);for(let _=x,p=b;_<p;_+=3){let L=o.getX(_),R=o.getX(_+1),w=o.getX(_+2);r=$r(this,a,e,n,l,u,h,L,R,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,b=m.length;x<b;x++){let _=m[x],p=a[_.materialIndex],L=Math.max(_.start,g.start),R=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let w=L,z=R;w<z;w+=3){let U=w,O=w+1,H=w+2;r=$r(this,p,e,n,l,u,h,U,O,H),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let x=Math.max(0,g.start),b=Math.min(c.count,g.start+g.count);for(let _=x,p=b;_<p;_+=3){let L=_,R=_+1,w=_+2;r=$r(this,a,e,n,l,u,h,L,R,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}};function eh(i,e,t,n,r,s,a,o){let c;if(e.side===wt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===wn,o),c===null)return null;Jr.copy(o),Jr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Jr);return l<t.near||l>t.far?null:{distance:l,point:Jr.clone(),object:i}}function $r(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Xr),i.getVertexPosition(c,qr),i.getVertexPosition(l,Yr);let u=eh(i,e,t,n,Xr,qr,Yr,il);if(u){let h=new W;kn.getBarycoord(il,Xr,qr,Yr,h),r&&(u.uv=kn.getInterpolatedAttribute(r,o,c,l,h,new lt)),s&&(u.uv1=kn.getInterpolatedAttribute(s,o,c,l,h,new lt)),a&&(u.normal=kn.getInterpolatedAttribute(a,o,c,l,h,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let m={a:o,b:c,c:l,normal:new W,materialIndex:0};kn.getNormal(Xr,qr,Yr,m.normal),u.face=m,u.barycoord=h}return u}var Pi=class i extends Cn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],h=[],m=0,g=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(h,2));function x(b,_,p,L,R,w,z,U,O,H,T){let M=w/O,N=z/H,$=w/2,Y=z/2,Q=U/2,le=O+1,K=H+1,ce=0,J=0,pe=new W;for(let ge=0;ge<K;ge++){let Ce=ge*N-Y;for(let Be=0;Be<le;Be++){let Ye=Be*M-$;pe[b]=Ye*L,pe[_]=Ce*R,pe[p]=Q,l.push(pe.x,pe.y,pe.z),pe[b]=0,pe[_]=0,pe[p]=U>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(Be/O),h.push(1-ge/H),ce+=1}}for(let ge=0;ge<H;ge++)for(let Ce=0;Ce<O;Ce++){let Be=m+Ce+le*ge,Ye=m+Ce+le*(ge+1),j=m+(Ce+1)+le*(ge+1),ue=m+(Ce+1)+le*ge;c.push(Be,Ye,ue),c.push(Ye,j,ue),J+=6}o.addGroup(g,J,T),g+=J,m+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function oi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function It(i){let e={};for(let t=0;t<i.length;t++){let n=oi(i[t]);for(let r in n)e[r]=n[r]}return e}function th(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mo(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var jl={clone:oi,merge:It},nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jt=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nh,this.fragmentShader=ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oi(e.uniforms),this.uniformsGroups=th(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},lr=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zn=new W,rl=new lt,sl=new lt,Rt=class extends lr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,rl,sl),t.subVectors(sl,rl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ei=-90,wi=1,hs=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Rt(Ei,wi,e,t);r.layers=this.layers,this.add(r);let s=new Rt(Ei,wi,e,t);s.layers=this.layers,this.add(s);let a=new Rt(Ei,wi,e,t);a.layers=this.layers,this.add(a);let o=new Rt(Ei,wi,e,t);o.layers=this.layers,this.add(o);let c=new Rt(Ei,wi,e,t);c.layers=this.layers,this.add(c);let l=new Rt(Ei,wi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,m,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},cr=class extends Ft{constructor(e=[],t=ri,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},us=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new cr(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pi(5,5,5),s=new jt({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:Rn});s.uniforms.tEquirect.value=t;let a=new Dt(r,s),o=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Tt),new hs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},jn=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},rh={type:"move"},Li=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let _=t.getJointPose(b,n),p=this._getHandJoint(l,b);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],m=u.position.distanceTo(h.position),g=.02,x=.005;l.inputState.pinching&&m>g+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=g-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rh)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var hr=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var fs=class extends Ft{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Nt,u=Nt,h,m){super(null,a,o,c,l,u,r,s,h,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qa=new W,sh=new W,ah=new We,an=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=qa.subVectors(n,t).cross(sh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(qa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ah.getNormalMatrix(e),r=this.coplanarPoint(qa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Kn=new Ri,Kr=new W,ur=class{constructor(e=new an,t=new an,n=new an,r=new an,s=new an,a=new an){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],m=r[7],g=r[8],x=r[9],b=r[10],_=r[11],p=r[12],L=r[13],R=r[14],w=r[15];if(n[0].setComponents(c-s,m-l,_-g,w-p).normalize(),n[1].setComponents(c+s,m+l,_+g,w+p).normalize(),n[2].setComponents(c+a,m+u,_+x,w+L).normalize(),n[3].setComponents(c-a,m-u,_-x,w-L).normalize(),n[4].setComponents(c-o,m-h,_-b,w-R).normalize(),t===ln)n[5].setComponents(c+o,m+h,_+b,w+R).normalize();else if(t===nr)n[5].setComponents(o,h,b,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Kr.x=r.normal.x>0?e.max.x:e.min.x,Kr.y=r.normal.y>0?e.max.y:e.min.y,Kr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fr=class extends Ft{constructor(e,t,n=qn,r,s,a,o=Nt,c=Nt,l,u=Ai){if(u!==Ai&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ci(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var dr=class i extends Cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,m=t/c,g=[],x=[],b=[],_=[];for(let p=0;p<u;p++){let L=p*m-a;for(let R=0;R<l;R++){let w=R*h-s;x.push(w,-L,0),b.push(0,0,1),_.push(R/o),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let L=0;L<o;L++){let R=L+l*p,w=L+l*(p+1),z=L+1+l*(p+1),U=L+1+l*p;g.push(R,w,U),g.push(w,z,U)}this.setIndex(g),this.setAttribute("position",new Wt(x,3)),this.setAttribute("normal",new Wt(b,3)),this.setAttribute("uv",new Wt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Di=class i extends Cn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new W,m=new W,g=[],x=[],b=[],_=[];for(let p=0;p<=n;p++){let L=[],R=p/n,w=0;p===0&&a===0?w=.5/t:p===n&&c===Math.PI&&(w=-.5/t);for(let z=0;z<=t;z++){let U=z/t;h.x=-e*Math.cos(r+U*s)*Math.sin(a+R*o),h.y=e*Math.cos(a+R*o),h.z=e*Math.sin(r+U*s)*Math.sin(a+R*o),x.push(h.x,h.y,h.z),m.copy(h).normalize(),b.push(m.x,m.y,m.z),_.push(U+w,1-R),L.push(l++)}u.push(L)}for(let p=0;p<n;p++)for(let L=0;L<t;L++){let R=u[p][L+1],w=u[p][L],z=u[p+1][L],U=u[p+1][L+1];(p!==0||a>0)&&g.push(R,w,U),(p!==n-1||c<Math.PI)&&g.push(w,z,U)}this.setIndex(g),this.setAttribute("position",new Wt(x,3)),this.setAttribute("normal",new Wt(b,3)),this.setAttribute("uv",new Wt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ds=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ol,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ps=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function oh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ii=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ms=class extends ii{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ya,endingEnd:Ya}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Za:s=e,o=2*t-n;break;case Ja:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Za:a=e,c=2*n-t;break;case Ja:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,m=this._weightPrev,g=this._weightNext,x=(n-t)/(r-t),b=x*x,_=b*x,p=-m*_+2*m*b-m*x,L=(1+m)*_+(-1.5-2*m)*b+(-.5+m)*x+1,R=(-1-g)*_+(1.5+g)*b+.5*x,w=g*_-g*b;for(let z=0;z!==o;++z)s[z]=p*a[u+z]+L*a[l+z]+R*a[c+z]+w*a[h+z];return s}},gs=class extends ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),h=1-u;for(let m=0;m!==o;++m)s[m]=a[l+m]*h+a[c+m]*u;return s}},_s=class extends ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qt=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qr(t,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qr(e.times,Array),values:Qr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _s(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ms(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case er:t=this.InterpolantFactoryMethodDiscrete;break;case rs:t=this.InterpolantFactoryMethodLinear;break;case jr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return rs;case this.InterpolantFactoryMethodSmooth:return jr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&oh(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===jr,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,m=h-n,g=h+n;for(let x=0;x!==n;++x){let b=t[h+x];if(b!==t[m+x]||b!==t[g+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,m=a*n;for(let g=0;g!==n;++g)t[m+g]=t[h+g]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};qt.prototype.ValueTypeName="";qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=rs;var Wn=class extends qt{constructor(e,t,n){super(e,t,n)}};Wn.prototype.ValueTypeName="bool";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=er;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends qt{constructor(e,t,n,r){super(e,t,n,r)}};vs.prototype.ValueTypeName="color";var xs=class extends qt{constructor(e,t,n,r){super(e,t,n,r)}};xs.prototype.ValueTypeName="number";var ys=class extends ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let u=l+o;l!==u;l+=4)An.slerpFlat(s,0,a,l-o,a,l,c);return s}},pr=class extends qt{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ys(this.times,this.values,this.getValueSize(),e)}};pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends qt{constructor(e,t,n){super(e,t,n)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=er;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends qt{constructor(e,t,n,r){super(e,t,n,r)}};Ms.prototype.ValueTypeName="vector";var Qa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ss=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,m=l.length;h<m;h+=2){let g=l[h],x=l[h+1];if(g.global&&(g.lastIndex=0),g.test(u))return x}return null}}},ec=new Ss,Ui=class{constructor(e){this.manager=e!==void 0?e:ec,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sn={},ja=class extends Error{constructor(e,t){super(e),this.response=t}},bs=class extends Ui{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Qa.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Sn[e]!==void 0){Sn[e].push({onLoad:t,onProgress:n,onError:r});return}Sn[e]=[],Sn[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Sn[e],h=l.body.getReader(),m=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),g=m?parseInt(m):0,x=g!==0,b=0,_=new ReadableStream({start(p){L();function L(){h.read().then(({done:R,value:w})=>{if(R)p.close();else{b+=w.byteLength;let z=new ProgressEvent("progress",{lengthComputable:x,loaded:b,total:g});for(let U=0,O=u.length;U<O;U++){let H=u[U];H.onProgress&&H.onProgress(z)}p.enqueue(w),L()}},R=>{p.error(R)})}}});return new Response(_)}else throw new ja(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),m=h&&h[1]?h[1].toLowerCase():void 0,g=new TextDecoder(m);return l.arrayBuffer().then(x=>g.decode(x))}}}).then(l=>{Qa.add(e,l);let u=Sn[e];delete Sn[e];for(let h=0,m=u.length;h<m;h++){let g=u[h];g.onLoad&&g.onLoad(l)}}).catch(l=>{let u=Sn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Sn[e];for(let h=0,m=u.length;h<m;h++){let g=u[h];g.onError&&g.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var mr=class extends Ui{constructor(e){super(e)}load(e,t,n,r){let s=this,a=new fs,o=new bs(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:on,a.wrapT=l.wrapT!==void 0?l.wrapT:on,a.magFilter=l.magFilter!==void 0?l.magFilter:Tt,a.minFilter=l.minFilter!==void 0?l.minFilter:Tt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Pn),l.mipmapCount===1&&(a.minFilter=Tt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,r),a}};var Es=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},gr=class extends Es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}};var ws=class extends lr{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ts=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var So="\\[\\]\\.:\\/",lh=new RegExp("["+So+"]","g"),bo="[^"+So+"]",ch="[^"+So.replace("\\.","")+"]",hh=/((?:WC+[\/:])*)/.source.replace("WC",bo),uh=/(WCOD+)?/.source.replace("WCOD",ch),fh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bo),dh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bo),ph=new RegExp("^"+hh+uh+fh+dh+"$"),mh=["material","materials","bones","map"],eo=class{constructor(e,t,n){let r=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lh,"")}static parseTrackName(e){let t=ph.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);mh.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=eo;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hm=new Float32Array(1);function Eo(i,e,t,n){let r=gh(n);switch(t){case uo:return i*e;case po:return i*e;case mo:return i*e*2;case xr:return i*e/r.components*r.byteLength;case ks:return i*e/r.components*r.byteLength;case go:return i*e*2/r.components*r.byteLength;case Vs:return i*e*2/r.components*r.byteLength;case fo:return i*e*3/r.components*r.byteLength;case zt:return i*e*4/r.components*r.byteLength;case Hs:return i*e*4/r.components*r.byteLength;case yr:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sr:case br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ws:case qs:return Math.max(i,16)*Math.max(e,8)/4;case Gs:case Xs:return Math.max(i,8)*Math.max(e,8)/2;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case js:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Er:case ha:case ua:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _o:case fa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case da:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gh(i){switch(i){case dn:case lo:return{byteLength:1,components:1};case Ni:case co:case en:return{byteLength:2,components:1};case Bs:case zs:return{byteLength:2,components:4};case qn:case Os:case Bt:return{byteLength:4,components:1};case ho:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:As}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=As);function Ec(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function _h(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,l,u),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((g,x)=>g.start-x.start);let m=0;for(let g=1;g<h.length;g++){let x=h[m],b=h[g];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++m,h[m]=b)}h.length=m+1;for(let g=0,x=h.length;g<x;g++){let b=h[g];i.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xh=`#ifdef USE_ALPHAHASH
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
#endif`,yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eh=`#ifdef USE_AOMAP
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
#endif`,wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Th=`#ifdef USE_BATCHING
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
#endif`,Ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ih=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ph=`#ifdef USE_IRIDESCENCE
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
#endif`,Lh=`#ifdef USE_BUMPMAP
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
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vh=`#define PI 3.141592653589793
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
} // validated`,Hh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gh=`vec3 transformedNormal = objectNormal;
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
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$h=`#ifdef USE_ENVMAP
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
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eu=`#ifdef USE_ENVMAP
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
#endif`,tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,su=`#ifdef USE_GRADIENTMAP
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
}`,au=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cu=`uniform bool receiveShadow;
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
#endif`,hu=`#ifdef USE_ENVMAP
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
#endif`,uu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,du=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mu=`PhysicalMaterial material;
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
#endif`,gu=`struct PhysicalMaterial {
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
}`,_u=`
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
#endif`,vu=`#if defined( RE_IndirectDiffuse )
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
#endif`,xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Au=`#if defined( USE_POINTS_UV )
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
#endif`,Cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Du=`#ifdef USE_MORPHTARGETS
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
#endif`,Uu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ku=`#ifdef USE_NORMALMAP
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
#endif`,Vu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ju=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$u=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nf=`float getShadowMask() {
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
}`,rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sf=`#ifdef USE_SKINNING
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
#endif`,af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,of=`#ifdef USE_SKINNING
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
#endif`,lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ff=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#ifdef USE_TRANSMISSION
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xf=`uniform sampler2D t2D;
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`#include <common>
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
}`,wf=`#if DEPTH_PACKING == 3200
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
}`,Tf=`#define DISTANCE
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
}`,Af=`#define DISTANCE
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`uniform float scale;
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Lf=`#include <common>
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
}`,Df=`uniform vec3 diffuse;
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
}`,Uf=`#define LAMBERT
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
}`,Nf=`#define LAMBERT
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
}`,Ff=`#define MATCAP
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
}`,Of=`#define MATCAP
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
}`,Bf=`#define NORMAL
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
}`,zf=`#define NORMAL
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
}`,kf=`#define PHONG
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
}`,Vf=`#define PHONG
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
}`,Hf=`#define STANDARD
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
}`,Gf=`#define STANDARD
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
}`,Wf=`#define TOON
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
}`,Xf=`#define TOON
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
}`,qf=`uniform float size;
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
}`,Yf=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Jf=`uniform vec3 color;
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
}`,$f=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Kf=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:vh,alphahash_pars_fragment:xh,alphamap_fragment:yh,alphamap_pars_fragment:Mh,alphatest_fragment:Sh,alphatest_pars_fragment:bh,aomap_fragment:Eh,aomap_pars_fragment:wh,batching_pars_vertex:Th,batching_vertex:Ah,begin_vertex:Ch,beginnormal_vertex:Rh,bsdfs:Ih,iridescence_fragment:Ph,bumpmap_pars_fragment:Lh,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Uh,clipping_planes_pars_vertex:Nh,clipping_planes_vertex:Fh,color_fragment:Oh,color_pars_fragment:Bh,color_pars_vertex:zh,color_vertex:kh,common:Vh,cube_uv_reflection_fragment:Hh,defaultnormal_vertex:Gh,displacementmap_pars_vertex:Wh,displacementmap_vertex:Xh,emissivemap_fragment:qh,emissivemap_pars_fragment:Yh,colorspace_fragment:Zh,colorspace_pars_fragment:Jh,envmap_fragment:$h,envmap_common_pars_fragment:Kh,envmap_pars_fragment:Qh,envmap_pars_vertex:jh,envmap_physical_pars_fragment:hu,envmap_vertex:eu,fog_vertex:tu,fog_pars_vertex:nu,fog_fragment:iu,fog_pars_fragment:ru,gradientmap_pars_fragment:su,lightmap_pars_fragment:au,lights_lambert_fragment:ou,lights_lambert_pars_fragment:lu,lights_pars_begin:cu,lights_toon_fragment:uu,lights_toon_pars_fragment:fu,lights_phong_fragment:du,lights_phong_pars_fragment:pu,lights_physical_fragment:mu,lights_physical_pars_fragment:gu,lights_fragment_begin:_u,lights_fragment_maps:vu,lights_fragment_end:xu,logdepthbuf_fragment:yu,logdepthbuf_pars_fragment:Mu,logdepthbuf_pars_vertex:Su,logdepthbuf_vertex:bu,map_fragment:Eu,map_pars_fragment:wu,map_particle_fragment:Tu,map_particle_pars_fragment:Au,metalnessmap_fragment:Cu,metalnessmap_pars_fragment:Ru,morphinstance_vertex:Iu,morphcolor_vertex:Pu,morphnormal_vertex:Lu,morphtarget_pars_vertex:Du,morphtarget_vertex:Uu,normal_fragment_begin:Nu,normal_fragment_maps:Fu,normal_pars_fragment:Ou,normal_pars_vertex:Bu,normal_vertex:zu,normalmap_pars_fragment:ku,clearcoat_normal_fragment_begin:Vu,clearcoat_normal_fragment_maps:Hu,clearcoat_pars_fragment:Gu,iridescence_pars_fragment:Wu,opaque_fragment:Xu,packing:qu,premultiplied_alpha_fragment:Yu,project_vertex:Zu,dithering_fragment:Ju,dithering_pars_fragment:$u,roughnessmap_fragment:Ku,roughnessmap_pars_fragment:Qu,shadowmap_pars_fragment:ju,shadowmap_pars_vertex:ef,shadowmap_vertex:tf,shadowmask_pars_fragment:nf,skinbase_vertex:rf,skinning_pars_vertex:sf,skinning_vertex:af,skinnormal_vertex:of,specularmap_fragment:lf,specularmap_pars_fragment:cf,tonemapping_fragment:hf,tonemapping_pars_fragment:uf,transmission_fragment:ff,transmission_pars_fragment:df,uv_pars_fragment:pf,uv_pars_vertex:mf,uv_vertex:gf,worldpos_vertex:_f,background_vert:vf,background_frag:xf,backgroundCube_vert:yf,backgroundCube_frag:Mf,cube_vert:Sf,cube_frag:bf,depth_vert:Ef,depth_frag:wf,distanceRGBA_vert:Tf,distanceRGBA_frag:Af,equirect_vert:Cf,equirect_frag:Rf,linedashed_vert:If,linedashed_frag:Pf,meshbasic_vert:Lf,meshbasic_frag:Df,meshlambert_vert:Uf,meshlambert_frag:Nf,meshmatcap_vert:Ff,meshmatcap_frag:Of,meshnormal_vert:Bf,meshnormal_frag:zf,meshphong_vert:kf,meshphong_frag:Vf,meshphysical_vert:Hf,meshphysical_frag:Gf,meshtoon_vert:Wf,meshtoon_frag:Xf,points_vert:qf,points_frag:Yf,shadow_vert:Zf,shadow_frag:Jf,sprite_vert:$f,sprite_frag:Kf},_e={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},pn={basic:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:It([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:It([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:It([_e.points,_e.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:It([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:It([_e.common,_e.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:It([_e.sprite,_e.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:It([_e.common,_e.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:It([_e.lights,_e.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};pn.physical={uniforms:It([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var ma={r:0,b:0,g:0},li=new hn,Qf=new _t;function jf(i,e,t,n,r,s,a){let o=new tt(0),c=s===!0?0:1,l,u,h=null,m=0,g=null;function x(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?t:e).get(w)),w}function b(R){let w=!1,z=x(R);z===null?p(o,c):z&&z.isColor&&(p(z,1),w=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(R,w){let z=x(w);z&&(z.isCubeTexture||z.mapping===_r)?(u===void 0&&(u=new Dt(new Pi(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:oi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,O,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),li.copy(w.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=z,u.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qf.makeRotationFromEuler(li)),u.material.toneMapped=et.getTransfer(z.colorSpace)!==at,(h!==z||m!==z.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=z,m=z.version,g=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):z&&z.isTexture&&(l===void 0&&(l=new Dt(new dr(2,2),new jt({name:"BackgroundMaterial",uniforms:oi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=z,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=et.getTransfer(z.colorSpace)!==at,z.matrixAutoUpdate===!0&&z.updateMatrix(),l.material.uniforms.uvTransform.value.copy(z.matrix),(h!==z||m!==z.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,h=z,m=z.version,g=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function p(R,w){R.getRGB(ma,Mo(i)),n.buffers.color.setClear(ma.r,ma.g,ma.b,w,a)}function L(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,w=1){o.set(R),c=w,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,p(o,c)},render:b,addToRenderList:_,dispose:L}}function ed(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null),s=r,a=!1;function o(M,N,$,Y,Q){let le=!1,K=h(Y,$,N);s!==K&&(s=K,l(s.object)),le=g(M,Y,$,Q),le&&x(M,Y,$,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(le||a)&&(a=!1,w(M,N,$,Y),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,N,$){let Y=$.wireframe===!0,Q=n[M.id];Q===void 0&&(Q={},n[M.id]=Q);let le=Q[N.id];le===void 0&&(le={},Q[N.id]=le);let K=le[Y];return K===void 0&&(K=m(c()),le[Y]=K),K}function m(M){let N=[],$=[],Y=[];for(let Q=0;Q<t;Q++)N[Q]=0,$[Q]=0,Y[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:$,attributeDivisors:Y,object:M,attributes:{},index:null}}function g(M,N,$,Y){let Q=s.attributes,le=N.attributes,K=0,ce=$.getAttributes();for(let J in ce)if(ce[J].location>=0){let ge=Q[J],Ce=le[J];if(Ce===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(Ce=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(Ce=M.instanceColor)),ge===void 0||ge.attribute!==Ce||Ce&&ge.data!==Ce.data)return!0;K++}return s.attributesNum!==K||s.index!==Y}function x(M,N,$,Y){let Q={},le=N.attributes,K=0,ce=$.getAttributes();for(let J in ce)if(ce[J].location>=0){let ge=le[J];ge===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));let Ce={};Ce.attribute=ge,ge&&ge.data&&(Ce.data=ge.data),Q[J]=Ce,K++}s.attributes=Q,s.attributesNum=K,s.index=Y}function b(){let M=s.newAttributes;for(let N=0,$=M.length;N<$;N++)M[N]=0}function _(M){p(M,0)}function p(M,N){let $=s.newAttributes,Y=s.enabledAttributes,Q=s.attributeDivisors;$[M]=1,Y[M]===0&&(i.enableVertexAttribArray(M),Y[M]=1),Q[M]!==N&&(i.vertexAttribDivisor(M,N),Q[M]=N)}function L(){let M=s.newAttributes,N=s.enabledAttributes;for(let $=0,Y=N.length;$<Y;$++)N[$]!==M[$]&&(i.disableVertexAttribArray($),N[$]=0)}function R(M,N,$,Y,Q,le,K){K===!0?i.vertexAttribIPointer(M,N,$,Q,le):i.vertexAttribPointer(M,N,$,Y,Q,le)}function w(M,N,$,Y){b();let Q=Y.attributes,le=$.getAttributes(),K=N.defaultAttributeValues;for(let ce in le){let J=le[ce];if(J.location>=0){let pe=Q[ce];if(pe===void 0&&(ce==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),ce==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),pe!==void 0){let ge=pe.normalized,Ce=pe.itemSize,Be=e.get(pe);if(Be===void 0)continue;let Ye=Be.buffer,j=Be.type,ue=Be.bytesPerElement,fe=j===i.INT||j===i.UNSIGNED_INT||pe.gpuType===Os;if(pe.isInterleavedBufferAttribute){let me=pe.data,Re=me.stride,Ze=pe.offset;if(me.isInstancedInterleavedBuffer){for(let ze=0;ze<J.locationSize;ze++)p(J.location+ze,me.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ze=0;ze<J.locationSize;ze++)_(J.location+ze);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let ze=0;ze<J.locationSize;ze++)R(J.location+ze,Ce/J.locationSize,j,ge,Re*ue,(Ze+Ce/J.locationSize*ze)*ue,fe)}else{if(pe.isInstancedBufferAttribute){for(let me=0;me<J.locationSize;me++)p(J.location+me,pe.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let me=0;me<J.locationSize;me++)_(J.location+me);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let me=0;me<J.locationSize;me++)R(J.location+me,Ce/J.locationSize,j,ge,Ce*ue,Ce/J.locationSize*me*ue,fe)}}else if(K!==void 0){let ge=K[ce];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(J.location,ge);break;case 3:i.vertexAttrib3fv(J.location,ge);break;case 4:i.vertexAttrib4fv(J.location,ge);break;default:i.vertexAttrib1fv(J.location,ge)}}}}L()}function z(){H();for(let M in n){let N=n[M];for(let $ in N){let Y=N[$];for(let Q in Y)u(Y[Q].object),delete Y[Q];delete N[$]}delete n[M]}}function U(M){if(n[M.id]===void 0)return;let N=n[M.id];for(let $ in N){let Y=N[$];for(let Q in Y)u(Y[Q].object),delete Y[Q];delete N[$]}delete n[M.id]}function O(M){for(let N in n){let $=n[N];if($[M.id]===void 0)continue;let Y=$[M.id];for(let Q in Y)u(Y[Q].object),delete Y[Q];delete $[M.id]}}function H(){T(),a=!0,s!==r&&(s=r,l(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:H,resetDefaultState:T,dispose:z,releaseStatesOfGeometry:U,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:_,disableUnusedAttributes:L}}function td(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];t.update(g,n,1)}function c(l,u,h,m){if(h===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<l.length;x++)a(l[x],u[x],m[x]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,u,0,m,0,h);let x=0;for(let b=0;b<h;b++)x+=u[b]*m[b];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function nd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(O){return!(O!==zt&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(O){let H=O===en&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==dn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Bt&&!H)}function c(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=x>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:L,maxVaryings:R,maxFragmentUniforms:w,vertexTextures:z,maxSamples:U}}function id(i){let e=this,t=null,n=0,r=!1,s=!1,a=new an,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,m){let g=h.length!==0||m||n!==0||r;return r=m,n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,m){t=u(h,m,0)},this.setState=function(h,m,g){let x=h.clippingPlanes,b=h.clipIntersection,_=h.clipShadows,p=i.get(h);if(!r||x===null||x.length===0||s&&!_)s?u(null):l();else{let L=s?0:n,R=L*4,w=p.clippingState||null;c.value=w,w=u(x,m,R,g);for(let z=0;z!==R;++z)w[z]=t[z];p.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,m,g,x){let b=h!==null?h.length:0,_=null;if(b!==0){if(_=c.value,x!==!0||_===null){let p=g+b*4,L=m.matrixWorldInverse;o.getNormalMatrix(L),(_===null||_.length<p)&&(_=new Float32Array(p));for(let R=0,w=g;R!==b;++R,w+=4)a.copy(h[R]).applyMatrix4(L,o),a.normal.toArray(_,w),_[w+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}function rd(i){let e=new WeakMap;function t(a,o){return o===ai?a.mapping=ri:o===Ns&&(a.mapping=si),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ai||o===Ns)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new us(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var zi=4,tc=[.125,.215,.35,.446,.526,.582],ui=20,wo=new ws,nc=new tt,To=null,Ao=0,Co=0,Ro=!1,hi=(1+Math.sqrt(5))/2,Bi=1/hi,ic=[new W(-hi,Bi,0),new W(hi,Bi,0),new W(-Bi,0,hi),new W(Bi,0,hi),new W(0,hi,-Bi),new W(0,hi,Bi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],sd=new W,va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=sd}=s;To=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(To,Ao,Co),this._renderer.xr.enabled=Ro,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),To=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:en,format:zt,colorSpace:Xt,depthBuffer:!1},r=rc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ad(s)),this._blurMaterial=od(s,e,t)}return r}_compileMaterial(e){let t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,wo)}_sceneToCubeUV(e,t,n,r,s){let c=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,g=h.toneMapping;h.getClearColor(nc),h.toneMapping=In,h.autoClear=!1;let x=new Gn({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),b=new Dt(new Pi,x),_=!1,p=e.background;p?p.isColor&&(x.color.copy(p),e.background=null,_=!0):(x.color.copy(nc),_=!0);for(let L=0;L<6;L++){let R=L%3;R===0?(c.up.set(0,l[L],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[L],s.y,s.z)):R===1?(c.up.set(0,0,l[L]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[L],s.z)):(c.up.set(0,l[L],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[L]));let w=this._cubeSize;ga(r,R*w,L>2?w:0,w,w),h.setRenderTarget(r),_&&h.render(b,c),h.render(e,c)}b.geometry.dispose(),b.material.dispose(),h.toneMapping=g,h.autoClear=m,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ri||e.mapping===si;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new Dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;ga(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,wo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ic[(r-s-1)%ic.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Dt(this._lodPlanes[r],l),m=l.uniforms,g=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ui-1),b=s/x,_=isFinite(s)?1+Math.floor(u*b):ui;_>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ui}`);let p=[],L=0;for(let O=0;O<ui;++O){let H=O/b,T=Math.exp(-H*H/2);p.push(T),O===0?L+=T:O<_&&(L+=2*T)}for(let O=0;O<p.length;O++)p[O]=p[O]/L;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=p,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);let{_lodMax:R}=this;m.dTheta.value=x,m.mipInt.value=R-n;let w=this._sizeLods[r],z=3*w*(r>R-zi?r-R+zi:0),U=4*(this._cubeSize-w);ga(t,z,U,3*w,2*w),c.setRenderTarget(t),c.render(h,wo)}};function ad(i){let e=[],t=[],n=[],r=i,s=i-zi+1+tc.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let c=1/o;a>i-zi?c=tc[a-i+zi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,m=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,x=6,b=3,_=2,p=1,L=new Float32Array(b*x*g),R=new Float32Array(_*x*g),w=new Float32Array(p*x*g);for(let U=0;U<g;U++){let O=U%3*2/3-1,H=U>2?0:-1,T=[O,H,0,O+2/3,H,0,O+2/3,H+1,0,O,H,0,O+2/3,H+1,0,O,H+1,0];L.set(T,b*x*U),R.set(m,_*x*U);let M=[U,U,U,U,U,U];w.set(M,p*x*U)}let z=new Cn;z.setAttribute("position",new Gt(L,b)),z.setAttribute("uv",new Gt(R,_)),z.setAttribute("faceIndex",new Gt(w,p)),e.push(z),r>zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rc(i,e,t){let n=new cn(i,e,t);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function od(i,e,t){let n=new Float32Array(ui),r=new W(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function sc(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ac(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}function ld(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===ai||c===Ns,u=c===ri||c===si;if(l||u){let h=e.get(o),m=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new va(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let g=o.image;return l&&g&&g.height>0||u&&g&&r(g)?(t===null&&(t=new va(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cd(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Tr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function hd(i,e,t,n){let r={},s=new WeakMap;function a(h){let m=h.target;m.index!==null&&e.remove(m.index);for(let x in m.attributes)e.remove(m.attributes[x]);m.removeEventListener("dispose",a),delete r[m.id];let g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(h,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function c(h){let m=h.attributes;for(let g in m)e.update(m[g],i.ARRAY_BUFFER)}function l(h){let m=[],g=h.index,x=h.attributes.position,b=0;if(g!==null){let L=g.array;b=g.version;for(let R=0,w=L.length;R<w;R+=3){let z=L[R+0],U=L[R+1],O=L[R+2];m.push(z,U,U,O,O,z)}}else if(x!==void 0){let L=x.array;b=x.version;for(let R=0,w=L.length/3-1;R<w;R+=3){let z=R+0,U=R+1,O=R+2;m.push(z,U,U,O,O,z)}}else return;let _=new(yo(m)?or:ar)(m,1);_.version=b;let p=s.get(h);p&&e.remove(p),s.set(h,_)}function u(h){let m=s.get(h);if(m){let g=h.index;g!==null&&m.version<g.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function ud(i,e,t){let n;function r(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function c(m,g){i.drawElements(n,g,s,m*a),t.update(g,n,1)}function l(m,g,x){x!==0&&(i.drawElementsInstanced(n,g,s,m*a,x),t.update(g,n,x))}function u(m,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,x);let _=0;for(let p=0;p<x;p++)_+=g[p];t.update(_,n,1)}function h(m,g,x,b){if(x===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<m.length;p++)l(m[p]/a,g[p],b[p]);else{_.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,b,0,x);let p=0;for(let L=0;L<x;L++)p+=g[L]*b[L];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function fd(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function dd(i,e,t){let n=new WeakMap,r=new mt;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,m=n.get(o);if(m===void 0||m.count!==h){let T=function(){O.dispose(),n.delete(o),o.removeEventListener("dispose",T)};m!==void 0&&m.texture.dispose();let g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],L=o.morphAttributes.color||[],R=0;g===!0&&(R=1),x===!0&&(R=2),b===!0&&(R=3);let w=o.attributes.position.count*R,z=1;w>e.maxTextureSize&&(z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let U=new Float32Array(w*z*4*h),O=new rr(U,w,z,h);O.type=Bt,O.needsUpdate=!0;let H=R*4;for(let M=0;M<h;M++){let N=_[M],$=p[M],Y=L[M],Q=w*z*4*M;for(let le=0;le<N.count;le++){let K=le*H;g===!0&&(r.fromBufferAttribute(N,le),U[Q+K+0]=r.x,U[Q+K+1]=r.y,U[Q+K+2]=r.z,U[Q+K+3]=0),x===!0&&(r.fromBufferAttribute($,le),U[Q+K+4]=r.x,U[Q+K+5]=r.y,U[Q+K+6]=r.z,U[Q+K+7]=0),b===!0&&(r.fromBufferAttribute(Y,le),U[Q+K+8]=r.x,U[Q+K+9]=r.y,U[Q+K+10]=r.z,U[Q+K+11]=Y.itemSize===4?r.w:1)}}m={count:h,texture:O,size:new lt(w,z)},n.set(o,m),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let b=0;b<l.length;b++)g+=l[b];let x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function pd(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==l&&(m.update(),r.set(m,l))}return h}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var wc=new Ft,oc=new fr(1,1),Tc=new rr,Ac=new ls,Cc=new cr,lc=[],cc=[],hc=new Float32Array(16),uc=new Float32Array(9),fc=new Float32Array(4);function Vi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=lc[r];if(s===void 0&&(s=new Float32Array(r),lc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ya(i,e){let t=cc[e];t===void 0&&(t=new Int32Array(e),cc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function md(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function _d(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function vd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function xd(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;fc.set(n),i.uniformMatrix2fv(this.addr,!1,fc),Mt(t,n)}}function yd(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;uc.set(n),i.uniformMatrix3fv(this.addr,!1,uc),Mt(t,n)}}function Md(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),Mt(t,n)}}function Sd(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Ed(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function wd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function Td(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ad(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Cd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function Rd(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function Id(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(oc.compareFunction=vo,s=oc):s=wc,t.setTexture2D(e||s,r)}function Pd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ac,r)}function Ld(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Cc,r)}function Dd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Tc,r)}function Ud(i){switch(i){case 5126:return md;case 35664:return gd;case 35665:return _d;case 35666:return vd;case 35674:return xd;case 35675:return yd;case 35676:return Md;case 5124:case 35670:return Sd;case 35667:case 35671:return bd;case 35668:case 35672:return Ed;case 35669:case 35673:return wd;case 5125:return Td;case 36294:return Ad;case 36295:return Cd;case 36296:return Rd;case 35678:case 36198:case 36298:case 36306:case 35682:return Id;case 35679:case 36299:case 36307:return Pd;case 35680:case 36300:case 36308:case 36293:return Ld;case 36289:case 36303:case 36311:case 36292:return Dd}}function Nd(i,e){i.uniform1fv(this.addr,e)}function Fd(i,e){let t=Vi(e,this.size,2);i.uniform2fv(this.addr,t)}function Od(i,e){let t=Vi(e,this.size,3);i.uniform3fv(this.addr,t)}function Bd(i,e){let t=Vi(e,this.size,4);i.uniform4fv(this.addr,t)}function zd(i,e){let t=Vi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kd(i,e){let t=Vi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vd(i,e){let t=Vi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hd(i,e){i.uniform1iv(this.addr,e)}function Gd(i,e){i.uniform2iv(this.addr,e)}function Wd(i,e){i.uniform3iv(this.addr,e)}function Xd(i,e){i.uniform4iv(this.addr,e)}function qd(i,e){i.uniform1uiv(this.addr,e)}function Yd(i,e){i.uniform2uiv(this.addr,e)}function Zd(i,e){i.uniform3uiv(this.addr,e)}function Jd(i,e){i.uniform4uiv(this.addr,e)}function $d(i,e,t){let n=this.cache,r=e.length,s=ya(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||wc,s[a])}function Kd(i,e,t){let n=this.cache,r=e.length,s=ya(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ac,s[a])}function Qd(i,e,t){let n=this.cache,r=e.length,s=ya(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Cc,s[a])}function jd(i,e,t){let n=this.cache,r=e.length,s=ya(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Tc,s[a])}function ep(i){switch(i){case 5126:return Nd;case 35664:return Fd;case 35665:return Od;case 35666:return Bd;case 35674:return zd;case 35675:return kd;case 35676:return Vd;case 5124:case 35670:return Hd;case 35667:case 35671:return Gd;case 35668:case 35672:return Wd;case 35669:case 35673:return Xd;case 5125:return qd;case 36294:return Yd;case 36295:return Zd;case 36296:return Jd;case 35678:case 36198:case 36298:case 36306:case 35682:return $d;case 35679:case 36299:case 36307:return Kd;case 35680:case 36300:case 36308:case 36293:return Qd;case 36289:case 36303:case 36311:case 36292:return jd}}var Po=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ud(t.type)}},Lo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ep(t.type)}},Do=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Io=/(\w+)(\])?(\[|\.)?/g;function dc(i,e){i.seq.push(e),i.map[e.id]=e}function tp(i,e,t){let n=i.name,r=n.length;for(Io.lastIndex=0;;){let s=Io.exec(n),a=Io.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){dc(t,l===void 0?new Po(o,i,e):new Lo(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Do(o),dc(t,h)),t=h}}}var ki=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);tp(s,a,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function pc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var np=37297,ip=0;function rp(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var mc=new We;function sp(i){et._getMatrix(mc,et.workingColorSpace,i);let e=`mat3( ${mc.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case tr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+rp(i.getShaderSource(e),a)}else return r}function ap(i,e){let t=sp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function op(i,e){let t;switch(e){case Rl:t="Linear";break;case Il:t="Reinhard";break;case Pl:t="Cineon";break;case Ll:t="ACESFilmic";break;case Ul:t="AgX";break;case Nl:t="Neutral";break;case Dl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _a=new W;function lp(){et.getLuminanceCoefficients(_a);let i=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function hp(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function up(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ar(i){return i!==""}function _c(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(i){return i.replace(fp,pp)}var dp=new Map;function pp(i,e){let t=qe[e];if(t===void 0){let n=dp.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uo(t)}var mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(mp,gp)}function gp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _p(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===no?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ll?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function vp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ri:case si:e="ENVMAP_TYPE_CUBE";break;case _r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case si:e="ENVMAP_MODE_REFRACTION";break}return e}function yp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ao:e="ENVMAP_BLENDING_MULTIPLY";break;case Al:e="ENVMAP_BLENDING_MIX";break;case Cl:e="ENVMAP_BLENDING_ADD";break}return e}function Mp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Sp(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=_p(t),l=vp(t),u=xp(t),h=yp(t),m=Mp(t),g=cp(t),x=hp(s),b=r.createProgram(),_,p,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ar).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(_=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?qe.tonemapping_pars_fragment:"",t.toneMapping!==In?op("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,ap("linearToOutputTexel",t.outputColorSpace),lp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),a=Uo(a),a=_c(a,t),a=vc(a,t),o=Uo(o),o=_c(o,t),o=vc(o,t),a=xc(a),o=xc(o),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=L+_+a,w=L+p+o,z=pc(r,r.VERTEX_SHADER,R),U=pc(r,r.FRAGMENT_SHADER,w);r.attachShader(b,z),r.attachShader(b,U),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function O(N){if(i.debug.checkShaderErrors){let $=r.getProgramInfoLog(b).trim(),Y=r.getShaderInfoLog(z).trim(),Q=r.getShaderInfoLog(U).trim(),le=!0,K=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(le=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,z,U);else{let ce=gc(r,z,"vertex"),J=gc(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+$+`
`+ce+`
`+J)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(Y===""||Q==="")&&(K=!1);K&&(N.diagnostics={runnable:le,programLog:$,vertexShader:{log:Y,prefix:_},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(z),r.deleteShader(U),H=new ki(r,b),T=up(r,b)}let H;this.getUniforms=function(){return H===void 0&&O(this),H};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(b,np)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ip++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=z,this.fragmentShader=U,this}var bp=0,No=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fo(e),t.set(e,n)),n}},Fo=class{constructor(e){this.id=bp++,this.code=e,this.usedTimes=0}};function Ep(i,e,t,n,r,s,a){let o=new sr,c=new No,l=new Set,u=[],h=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return l.add(T),T===0?"uv":`uv${T}`}function _(T,M,N,$,Y){let Q=$.fog,le=Y.geometry,K=T.isMeshStandardMaterial?$.environment:null,ce=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),J=ce&&ce.mapping===_r?ce.image.height:null,pe=x[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));let ge=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ce=ge!==void 0?ge.length:0,Be=0;le.morphAttributes.position!==void 0&&(Be=1),le.morphAttributes.normal!==void 0&&(Be=2),le.morphAttributes.color!==void 0&&(Be=3);let Ye,j,ue,fe;if(pe){let it=pn[pe];Ye=it.vertexShader,j=it.fragmentShader}else Ye=T.vertexShader,j=T.fragmentShader,c.update(T),ue=c.getVertexShaderID(T),fe=c.getFragmentShaderID(T);let me=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Ze=Y.isInstancedMesh===!0,ze=Y.isBatchedMesh===!0,ct=!!T.map,ot=!!T.matcap,Xe=!!ce,D=!!T.aoMap,Pt=!!T.lightMap,Ke=!!T.bumpMap,Je=!!T.normalMap,Ue=!!T.displacementMap,ht=!!T.emissiveMap,Le=!!T.metalnessMap,A=!!T.roughnessMap,v=T.anisotropy>0,G=T.clearcoat>0,ie=T.dispersion>0,ae=T.iridescence>0,ee=T.sheen>0,Ie=T.transmission>0,ve=v&&!!T.anisotropyMap,Me=G&&!!T.clearcoatMap,Qe=G&&!!T.clearcoatNormalMap,de=G&&!!T.clearcoatRoughnessMap,be=ae&&!!T.iridescenceMap,Ae=ae&&!!T.iridescenceThicknessMap,Pe=ee&&!!T.sheenColorMap,Se=ee&&!!T.sheenRoughnessMap,ke=!!T.specularMap,Ne=!!T.specularColorMap,Ve=!!T.specularIntensityMap,B=Ie&&!!T.transmissionMap,X=Ie&&!!T.thicknessMap,Z=!!T.gradientMap,re=!!T.alphaMap,ye=T.alphaTest>0,xe=!!T.alphaHash,He=!!T.extensions,dt=In;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(dt=i.toneMapping);let St={shaderID:pe,shaderType:T.type,shaderName:T.name,vertexShader:Ye,fragmentShader:j,defines:T.defines,customVertexShaderID:ue,customFragmentShaderID:fe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ze,batchingColor:ze&&Y._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&Y.instanceColor!==null,instancingMorph:Ze&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Xt,alphaToCoverage:!!T.alphaToCoverage,map:ct,matcap:ot,envMap:Xe,envMapMode:Xe&&ce.mapping,envMapCubeUVHeight:J,aoMap:D,lightMap:Pt,bumpMap:Ke,normalMap:Je,displacementMap:m&&Ue,emissiveMap:ht,normalMapObjectSpace:Je&&T.normalMapType===kl,normalMapTangentSpace:Je&&T.normalMapType===zl,metalnessMap:Le,roughnessMap:A,anisotropy:v,anisotropyMap:ve,clearcoat:G,clearcoatMap:Me,clearcoatNormalMap:Qe,clearcoatRoughnessMap:de,dispersion:ie,iridescence:ae,iridescenceMap:be,iridescenceThicknessMap:Ae,sheen:ee,sheenColorMap:Pe,sheenRoughnessMap:Se,specularMap:ke,specularColorMap:Ne,specularIntensityMap:Ve,transmission:Ie,transmissionMap:B,thicknessMap:X,gradientMap:Z,opaque:T.transparent===!1&&T.blending===ei&&T.alphaToCoverage===!1,alphaMap:re,alphaTest:ye,alphaHash:xe,combine:T.combine,mapUv:ct&&b(T.map.channel),aoMapUv:D&&b(T.aoMap.channel),lightMapUv:Pt&&b(T.lightMap.channel),bumpMapUv:Ke&&b(T.bumpMap.channel),normalMapUv:Je&&b(T.normalMap.channel),displacementMapUv:Ue&&b(T.displacementMap.channel),emissiveMapUv:ht&&b(T.emissiveMap.channel),metalnessMapUv:Le&&b(T.metalnessMap.channel),roughnessMapUv:A&&b(T.roughnessMap.channel),anisotropyMapUv:ve&&b(T.anisotropyMap.channel),clearcoatMapUv:Me&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Se&&b(T.sheenRoughnessMap.channel),specularMapUv:ke&&b(T.specularMap.channel),specularColorMapUv:Ne&&b(T.specularColorMap.channel),specularIntensityMapUv:Ve&&b(T.specularIntensityMap.channel),transmissionMapUv:B&&b(T.transmissionMap.channel),thicknessMapUv:X&&b(T.thicknessMap.channel),alphaMapUv:re&&b(T.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Je||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!le.attributes.uv&&(ct||re),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Re,skinning:Y.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:ct&&T.map.isVideoTexture===!0&&et.getTransfer(T.map.colorSpace)===at,decodeVideoTextureEmissive:ht&&T.emissiveMap.isVideoTexture===!0&&et.getTransfer(T.emissiveMap.colorSpace)===at,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===fn,flipSided:T.side===wt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function p(T){let M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(let N in T.defines)M.push(N),M.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(L(M,T),R(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function L(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function R(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function w(T){let M=x[T.type],N;if(M){let $=pn[M];N=jl.clone($.uniforms)}else N=T.uniforms;return N}function z(T,M){let N;for(let $=0,Y=u.length;$<Y;$++){let Q=u[$];if(Q.cacheKey===M){N=Q,++N.usedTimes;break}}return N===void 0&&(N=new Sp(i,M,T,s),u.push(N)),N}function U(T){if(--T.usedTimes===0){let M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function O(T){c.remove(T)}function H(){c.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:w,acquireProgram:z,releaseProgram:U,releaseShaderCache:O,programs:u,dispose:H}}function wp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Tp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sc(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,m,g,x,b,_){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:m,material:g,groupOrder:x,renderOrder:h.renderOrder,z:b,group:_},i[e]=p):(p.id=h.id,p.object=h,p.geometry=m,p.material=g,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=b,p.group=_),e++,p}function o(h,m,g,x,b,_){let p=a(h,m,g,x,b,_);g.transmission>0?n.push(p):g.transparent===!0?r.push(p):t.push(p)}function c(h,m,g,x,b,_){let p=a(h,m,g,x,b,_);g.transmission>0?n.unshift(p):g.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,m){t.length>1&&t.sort(h||Tp),n.length>1&&n.sort(m||Mc),r.length>1&&r.sort(m||Mc)}function u(){for(let h=e,m=i.length;h<m;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Ap(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new Sc,i.set(n,[a])):r>=s.length?(a=new Sc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new tt};break;case"SpotLight":t={position:new W,direction:new W,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function Rp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ip=0;function Pp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lp(i){let e=new Cp,t=Rp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);let r=new W,s=new _t,a=new _t;function o(l){let u=0,h=0,m=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let g=0,x=0,b=0,_=0,p=0,L=0,R=0,w=0,z=0,U=0,O=0;l.sort(Pp);for(let T=0,M=l.length;T<M;T++){let N=l[T],$=N.color,Y=N.intensity,Q=N.distance,le=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=$.r*Y,h+=$.g*Y,m+=$.b*Y;else if(N.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(N.sh.coefficients[K],Y);O++}else if(N.isDirectionalLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ce=N.shadow,J=t.get(N);J.shadowIntensity=ce.intensity,J.shadowBias=ce.bias,J.shadowNormalBias=ce.normalBias,J.shadowRadius=ce.radius,J.shadowMapSize=ce.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=le,n.directionalShadowMatrix[g]=N.shadow.matrix,L++}n.directional[g]=K,g++}else if(N.isSpotLight){let K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy($).multiplyScalar(Y),K.distance=Q,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,n.spot[b]=K;let ce=N.shadow;if(N.map&&(n.spotLightMap[z]=N.map,z++,ce.updateMatrices(N),N.castShadow&&U++),n.spotLightMatrix[b]=ce.matrix,N.castShadow){let J=t.get(N);J.shadowIntensity=ce.intensity,J.shadowBias=ce.bias,J.shadowNormalBias=ce.normalBias,J.shadowRadius=ce.radius,J.shadowMapSize=ce.mapSize,n.spotShadow[b]=J,n.spotShadowMap[b]=le,w++}b++}else if(N.isRectAreaLight){let K=e.get(N);K.color.copy($).multiplyScalar(Y),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=K,_++}else if(N.isPointLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){let ce=N.shadow,J=t.get(N);J.shadowIntensity=ce.intensity,J.shadowBias=ce.bias,J.shadowNormalBias=ce.normalBias,J.shadowRadius=ce.radius,J.shadowMapSize=ce.mapSize,J.shadowCameraNear=ce.camera.near,J.shadowCameraFar=ce.camera.far,n.pointShadow[x]=J,n.pointShadowMap[x]=le,n.pointShadowMatrix[x]=N.shadow.matrix,R++}n.point[x]=K,x++}else if(N.isHemisphereLight){let K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(Y),K.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[p]=K,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=m;let H=n.hash;(H.directionalLength!==g||H.pointLength!==x||H.spotLength!==b||H.rectAreaLength!==_||H.hemiLength!==p||H.numDirectionalShadows!==L||H.numPointShadows!==R||H.numSpotShadows!==w||H.numSpotMaps!==z||H.numLightProbes!==O)&&(n.directional.length=g,n.spot.length=b,n.rectArea.length=_,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=w+z-U,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=O,H.directionalLength=g,H.pointLength=x,H.spotLength=b,H.rectAreaLength=_,H.hemiLength=p,H.numDirectionalShadows=L,H.numPointShadows=R,H.numSpotShadows=w,H.numSpotMaps=z,H.numLightProbes=O,n.version=Ip++)}function c(l,u){let h=0,m=0,g=0,x=0,b=0,_=u.matrixWorldInverse;for(let p=0,L=l.length;p<L;p++){let R=l[p];if(R.isDirectionalLight){let w=n.directional[h];w.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),h++}else if(R.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),g++}else if(R.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(_),a.identity(),s.copy(R.matrixWorld),s.premultiply(_),a.extractRotation(s),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(R.isPointLight){let w=n.point[m];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(_),m++}else if(R.isHemisphereLight){let w=n.hemi[b];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(_),b++}}}return{setup:o,setupView:c,state:n}}function bc(i){let e=new Lp(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Dp(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new bc(i),e.set(r,[o])):s>=a.length?(o=new bc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Up=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Np=`uniform sampler2D shadow_pass;
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
}`;function Fp(i,e,t){let n=new ur,r=new lt,s=new lt,a=new mt,o=new ds({depthPacking:Bl}),c=new ps,l={},u=t.maxTextureSize,h={[wn]:wt,[wt]:wn,[fn]:fn},m=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Up,fragmentShader:Np}),g=m.clone();g.defines.HORIZONTAL_PASS=1;let x=new Cn;x.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Dt(x,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let p=this.type;this.render=function(U,O,H){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||U.length===0)return;let T=i.getRenderTarget(),M=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Rn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let Y=p!==un&&this.type===un,Q=p===un&&this.type!==un;for(let le=0,K=U.length;le<K;le++){let ce=U[le],J=ce.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);let pe=J.getFrameExtents();if(r.multiply(pe),s.copy(J.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,J.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,J.mapSize.y=s.y)),J.map===null||Y===!0||Q===!0){let Ce=this.type!==un?{minFilter:Nt,magFilter:Nt}:{};J.map!==null&&J.map.dispose(),J.map=new cn(r.x,r.y,Ce),J.map.texture.name=ce.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let ge=J.getViewportCount();for(let Ce=0;Ce<ge;Ce++){let Be=J.getViewport(Ce);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),$.viewport(a),J.updateMatrices(ce,Ce),n=J.getFrustum(),w(O,H,J.camera,ce,this.type)}J.isPointLightShadow!==!0&&this.type===un&&L(J,H),J.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(T,M,N)};function L(U,O){let H=e.update(b);m.defines.VSM_SAMPLES!==U.blurSamples&&(m.defines.VSM_SAMPLES=U.blurSamples,g.defines.VSM_SAMPLES=U.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new cn(r.x,r.y)),m.uniforms.shadow_pass.value=U.map.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(O,null,H,m,b,null),g.uniforms.shadow_pass.value=U.mapPass.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(O,null,H,g,b,null)}function R(U,O,H,T){let M=null,N=H.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(N!==void 0)M=N;else if(M=H.isPointLight===!0?c:o,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){let $=M.uuid,Y=O.uuid,Q=l[$];Q===void 0&&(Q={},l[$]=Q);let le=Q[Y];le===void 0&&(le=M.clone(),Q[Y]=le,O.addEventListener("dispose",z)),M=le}if(M.visible=O.visible,M.wireframe=O.wireframe,T===un?M.side=O.shadowSide!==null?O.shadowSide:O.side:M.side=O.shadowSide!==null?O.shadowSide:h[O.side],M.alphaMap=O.alphaMap,M.alphaTest=O.alphaTest,M.map=O.map,M.clipShadows=O.clipShadows,M.clippingPlanes=O.clippingPlanes,M.clipIntersection=O.clipIntersection,M.displacementMap=O.displacementMap,M.displacementScale=O.displacementScale,M.displacementBias=O.displacementBias,M.wireframeLinewidth=O.wireframeLinewidth,M.linewidth=O.linewidth,H.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let $=i.properties.get(M);$.light=H}return M}function w(U,O,H,T,M){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&M===un)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,U.matrixWorld);let Y=e.update(U),Q=U.material;if(Array.isArray(Q)){let le=Y.groups;for(let K=0,ce=le.length;K<ce;K++){let J=le[K],pe=Q[J.materialIndex];if(pe&&pe.visible){let ge=R(U,pe,T,M);U.onBeforeShadow(i,U,O,H,Y,ge,J),i.renderBufferDirect(H,null,Y,ge,U,J),U.onAfterShadow(i,U,O,H,Y,ge,J)}}}else if(Q.visible){let le=R(U,Q,T,M);U.onBeforeShadow(i,U,O,H,Y,le,null),i.renderBufferDirect(H,null,Y,le,U,null),U.onAfterShadow(i,U,O,H,Y,le,null)}}let $=U.children;for(let Y=0,Q=$.length;Y<Q;Y++)w($[Y],O,H,T,M)}function z(U){U.target.removeEventListener("dispose",z);for(let H in l){let T=l[H],M=U.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}var Op={[Cs]:Rs,[Is]:Ds,[Ps]:Us,[ti]:Ls,[Rs]:Cs,[Ds]:Is,[Us]:Ps,[Ls]:ti};function Bp(i,e){function t(){let B=!1,X=new mt,Z=null,re=new mt(0,0,0,0);return{setMask:function(ye){Z!==ye&&!B&&(i.colorMask(ye,ye,ye,ye),Z=ye)},setLocked:function(ye){B=ye},setClear:function(ye,xe,He,dt,St){St===!0&&(ye*=dt,xe*=dt,He*=dt),X.set(ye,xe,He,dt),re.equals(X)===!1&&(i.clearColor(ye,xe,He,dt),re.copy(X))},reset:function(){B=!1,Z=null,re.set(-1,0,0,0)}}}function n(){let B=!1,X=!1,Z=null,re=null,ye=null;return{setReversed:function(xe){if(X!==xe){let He=e.get("EXT_clip_control");xe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),X=xe;let dt=ye;ye=null,this.setClear(dt)}},getReversed:function(){return X},setTest:function(xe){xe?me(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(xe){Z!==xe&&!B&&(i.depthMask(xe),Z=xe)},setFunc:function(xe){if(X&&(xe=Op[xe]),re!==xe){switch(xe){case Cs:i.depthFunc(i.NEVER);break;case Rs:i.depthFunc(i.ALWAYS);break;case Is:i.depthFunc(i.LESS);break;case ti:i.depthFunc(i.LEQUAL);break;case Ps:i.depthFunc(i.EQUAL);break;case Ls:i.depthFunc(i.GEQUAL);break;case Ds:i.depthFunc(i.GREATER);break;case Us:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=xe}},setLocked:function(xe){B=xe},setClear:function(xe){ye!==xe&&(X&&(xe=1-xe),i.clearDepth(xe),ye=xe)},reset:function(){B=!1,Z=null,re=null,ye=null,X=!1}}}function r(){let B=!1,X=null,Z=null,re=null,ye=null,xe=null,He=null,dt=null,St=null;return{setTest:function(it){B||(it?me(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(it){X!==it&&!B&&(i.stencilMask(it),X=it)},setFunc:function(it,kt,Jt){(Z!==it||re!==kt||ye!==Jt)&&(i.stencilFunc(it,kt,Jt),Z=it,re=kt,ye=Jt)},setOp:function(it,kt,Jt){(xe!==it||He!==kt||dt!==Jt)&&(i.stencilOp(it,kt,Jt),xe=it,He=kt,dt=Jt)},setLocked:function(it){B=it},setClear:function(it){St!==it&&(i.clearStencil(it),St=it)},reset:function(){B=!1,X=null,Z=null,re=null,ye=null,xe=null,He=null,dt=null,St=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,u={},h={},m=new WeakMap,g=[],x=null,b=!1,_=null,p=null,L=null,R=null,w=null,z=null,U=null,O=new tt(0,0,0),H=0,T=!1,M=null,N=null,$=null,Y=null,Q=null,le=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ce=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=ce>=1):J.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=ce>=2);let pe=null,ge={},Ce=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Ye=new mt().fromArray(Ce),j=new mt().fromArray(Be);function ue(B,X,Z,re){let ye=new Uint8Array(4),xe=i.createTexture();i.bindTexture(B,xe),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<Z;He++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(X,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(X+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return xe}let fe={};fe[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(ti),Ke(!1),Je(to),me(i.CULL_FACE),D(Rn);function me(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function Re(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Ze(B,X){return h[B]!==X?(i.bindFramebuffer(B,X),h[B]=X,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=X),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=X),!0):!1}function ze(B,X){let Z=g,re=!1;if(B){Z=m.get(X),Z===void 0&&(Z=[],m.set(X,Z));let ye=B.textures;if(Z.length!==ye.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,He=ye.length;xe<He;xe++)Z[xe]=i.COLOR_ATTACHMENT0+xe;Z.length=ye.length,re=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,re=!0);re&&i.drawBuffers(Z)}function ct(B){return x!==B?(i.useProgram(B),x=B,!0):!1}let ot={[Vn]:i.FUNC_ADD,[hl]:i.FUNC_SUBTRACT,[ul]:i.FUNC_REVERSE_SUBTRACT};ot[fl]=i.MIN,ot[dl]=i.MAX;let Xe={[pl]:i.ZERO,[ml]:i.ONE,[gl]:i.SRC_COLOR,[es]:i.SRC_ALPHA,[Sl]:i.SRC_ALPHA_SATURATE,[yl]:i.DST_COLOR,[vl]:i.DST_ALPHA,[_l]:i.ONE_MINUS_SRC_COLOR,[ts]:i.ONE_MINUS_SRC_ALPHA,[Ml]:i.ONE_MINUS_DST_COLOR,[xl]:i.ONE_MINUS_DST_ALPHA,[bl]:i.CONSTANT_COLOR,[El]:i.ONE_MINUS_CONSTANT_COLOR,[wl]:i.CONSTANT_ALPHA,[Tl]:i.ONE_MINUS_CONSTANT_ALPHA};function D(B,X,Z,re,ye,xe,He,dt,St,it){if(B===Rn){b===!0&&(Re(i.BLEND),b=!1);return}if(b===!1&&(me(i.BLEND),b=!0),B!==cl){if(B!==_||it!==T){if((p!==Vn||w!==Vn)&&(i.blendEquation(i.FUNC_ADD),p=Vn,w=Vn),it)switch(B){case ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFunc(i.ONE,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}L=null,R=null,z=null,U=null,O.set(0,0,0),H=0,_=B,T=it}return}ye=ye||X,xe=xe||Z,He=He||re,(X!==p||ye!==w)&&(i.blendEquationSeparate(ot[X],ot[ye]),p=X,w=ye),(Z!==L||re!==R||xe!==z||He!==U)&&(i.blendFuncSeparate(Xe[Z],Xe[re],Xe[xe],Xe[He]),L=Z,R=re,z=xe,U=He),(dt.equals(O)===!1||St!==H)&&(i.blendColor(dt.r,dt.g,dt.b,St),O.copy(dt),H=St),_=B,T=!1}function Pt(B,X){B.side===fn?Re(i.CULL_FACE):me(i.CULL_FACE);let Z=B.side===wt;X&&(Z=!Z),Ke(Z),B.blending===ei&&B.transparent===!1?D(Rn):D(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);let re=B.stencilWrite;o.setTest(re),re&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ht(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function Je(B){B!==al?(me(i.CULL_FACE),B!==N&&(B===to?i.cullFace(i.BACK):B===ol?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),N=B}function Ue(B){B!==$&&(K&&i.lineWidth(B),$=B)}function ht(B,X,Z){B?(me(i.POLYGON_OFFSET_FILL),(Y!==X||Q!==Z)&&(i.polygonOffset(X,Z),Y=X,Q=Z)):Re(i.POLYGON_OFFSET_FILL)}function Le(B){B?me(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function A(B){B===void 0&&(B=i.TEXTURE0+le-1),pe!==B&&(i.activeTexture(B),pe=B)}function v(B,X,Z){Z===void 0&&(pe===null?Z=i.TEXTURE0+le-1:Z=pe);let re=ge[Z];re===void 0&&(re={type:void 0,texture:void 0},ge[Z]=re),(re.type!==B||re.texture!==X)&&(pe!==Z&&(i.activeTexture(Z),pe=Z),i.bindTexture(B,X||fe[B]),re.type=B,re.texture=X)}function G(){let B=ge[pe];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Qe(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(B){Ye.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ye.copy(B))}function Se(B){j.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),j.copy(B))}function ke(B,X){let Z=l.get(X);Z===void 0&&(Z=new WeakMap,l.set(X,Z));let re=Z.get(B);re===void 0&&(re=i.getUniformBlockIndex(X,B.name),Z.set(B,re))}function Ne(B,X){let re=l.get(X).get(B);c.get(X)!==re&&(i.uniformBlockBinding(X,re,B.__bindingPointIndex),c.set(X,re))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},pe=null,ge={},h={},m=new WeakMap,g=[],x=null,b=!1,_=null,p=null,L=null,R=null,w=null,z=null,U=null,O=new tt(0,0,0),H=0,T=!1,M=null,N=null,$=null,Y=null,Q=null,Ye.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:me,disable:Re,bindFramebuffer:Ze,drawBuffers:ze,useProgram:ct,setBlending:D,setMaterial:Pt,setFlipSided:Ke,setCullFace:Je,setLineWidth:Ue,setPolygonOffset:ht,setScissorTest:Le,activeTexture:A,bindTexture:v,unbindTexture:G,compressedTexImage2D:ie,compressedTexImage3D:ae,texImage2D:be,texImage3D:Ae,updateUBOMapping:ke,uniformBlockBinding:Ne,texStorage2D:Qe,texStorage3D:de,texSubImage2D:ee,texSubImage3D:Ie,compressedTexSubImage2D:ve,compressedTexSubImage3D:Me,scissor:Pe,viewport:Se,reset:Ve}}function zp(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,u=new WeakMap,h,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,v){return g?new OffscreenCanvas(A,v):ir("canvas")}function b(A,v,G){let ie=1,ae=Le(A);if((ae.width>G||ae.height>G)&&(ie=G/Math.max(ae.width,ae.height)),ie<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ee=Math.floor(ie*ae.width),Ie=Math.floor(ie*ae.height);h===void 0&&(h=x(ee,Ie));let ve=v?x(ee,Ie):h;return ve.width=ee,ve.height=Ie,ve.getContext("2d").drawImage(A,0,0,ee,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ee+"x"+Ie+")."),ve}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),A;return A}function _(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function L(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(A,v,G,ie,ae=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=v;if(v===i.RED&&(G===i.FLOAT&&(ee=i.R32F),G===i.HALF_FLOAT&&(ee=i.R16F),G===i.UNSIGNED_BYTE&&(ee=i.R8)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.R8UI),G===i.UNSIGNED_SHORT&&(ee=i.R16UI),G===i.UNSIGNED_INT&&(ee=i.R32UI),G===i.BYTE&&(ee=i.R8I),G===i.SHORT&&(ee=i.R16I),G===i.INT&&(ee=i.R32I)),v===i.RG&&(G===i.FLOAT&&(ee=i.RG32F),G===i.HALF_FLOAT&&(ee=i.RG16F),G===i.UNSIGNED_BYTE&&(ee=i.RG8)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.RG8UI),G===i.UNSIGNED_SHORT&&(ee=i.RG16UI),G===i.UNSIGNED_INT&&(ee=i.RG32UI),G===i.BYTE&&(ee=i.RG8I),G===i.SHORT&&(ee=i.RG16I),G===i.INT&&(ee=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),G===i.UNSIGNED_INT&&(ee=i.RGB32UI),G===i.BYTE&&(ee=i.RGB8I),G===i.SHORT&&(ee=i.RGB16I),G===i.INT&&(ee=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),G===i.UNSIGNED_INT&&(ee=i.RGBA32UI),G===i.BYTE&&(ee=i.RGBA8I),G===i.SHORT&&(ee=i.RGBA16I),G===i.INT&&(ee=i.RGBA32I)),v===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),v===i.RGBA){let Ie=ae?tr:et.getTransfer(ie);G===i.FLOAT&&(ee=i.RGBA32F),G===i.HALF_FLOAT&&(ee=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ee=Ie===at?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function w(A,v){let G;return A?v===null||v===qn||v===Fi?G=i.DEPTH24_STENCIL8:v===Bt?G=i.DEPTH32F_STENCIL8:v===Ni&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===qn||v===Fi?G=i.DEPTH_COMPONENT24:v===Bt?G=i.DEPTH_COMPONENT32F:v===Ni&&(G=i.DEPTH_COMPONENT16),G}function z(A,v){return _(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==Tt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function U(A){let v=A.target;v.removeEventListener("dispose",U),H(v),v.isVideoTexture&&u.delete(v)}function O(A){let v=A.target;v.removeEventListener("dispose",O),M(v)}function H(A){let v=n.get(A);if(v.__webglInit===void 0)return;let G=A.source,ie=m.get(G);if(ie){let ae=ie[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&T(A),Object.keys(ie).length===0&&m.delete(G)}n.remove(A)}function T(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let G=A.source,ie=m.get(G);delete ie[v.__cacheKey],a.memory.textures--}function M(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(v.__webglFramebuffer[ie]))for(let ae=0;ae<v.__webglFramebuffer[ie].length;ae++)i.deleteFramebuffer(v.__webglFramebuffer[ie][ae]);else i.deleteFramebuffer(v.__webglFramebuffer[ie]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ie])}else{if(Array.isArray(v.__webglFramebuffer))for(let ie=0;ie<v.__webglFramebuffer.length;ie++)i.deleteFramebuffer(v.__webglFramebuffer[ie]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ie=0;ie<v.__webglColorRenderbuffer.length;ie++)v.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ie]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let G=A.textures;for(let ie=0,ae=G.length;ie<ae;ie++){let ee=n.get(G[ie]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(G[ie])}n.remove(A)}let N=0;function $(){N=0}function Y(){let A=N;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),N+=1,A}function Q(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function le(A,v){let G=n.get(A);if(A.isVideoTexture&&Ue(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){let ie=A.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,A,v);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function K(A,v){let G=n.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function ce(A,v){let G=n.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,v);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function J(A,v){let G=n.get(A);if(A.version>0&&G.__version!==A.version){ue(G,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let pe={[ns]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[is]:i.MIRRORED_REPEAT},ge={[Nt]:i.NEAREST,[Fl]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[Fs]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},Ce={[Vl]:i.NEVER,[Yl]:i.ALWAYS,[Hl]:i.LESS,[vo]:i.LEQUAL,[Gl]:i.EQUAL,[ql]:i.GEQUAL,[Wl]:i.GREATER,[Xl]:i.NOTEQUAL};function Be(A,v){if(v.type===Bt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Tt||v.magFilter===Fs||v.magFilter===vr||v.magFilter===Pn||v.minFilter===Tt||v.minFilter===Fs||v.minFilter===vr||v.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,pe[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,pe[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,pe[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ge[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nt||v.minFilter!==vr&&v.minFilter!==Pn||v.type===Bt&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ye(A,v){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",U));let ie=v.source,ae=m.get(ie);ae===void 0&&(ae={},m.set(ie,ae));let ee=Q(v);if(ee!==A.__cacheKey){ae[ee]===void 0&&(ae[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ae[ee].usedTimes++;let Ie=ae[A.__cacheKey];Ie!==void 0&&(ae[A.__cacheKey].usedTimes--,Ie.usedTimes===0&&T(v)),A.__cacheKey=ee,A.__webglTexture=ae[ee].texture}return G}function j(A,v,G){let ie=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ie=i.TEXTURE_3D);let ae=Ye(A,v),ee=v.source;t.bindTexture(ie,A.__webglTexture,i.TEXTURE0+G);let Ie=n.get(ee);if(ee.version!==Ie.__version||ae===!0){t.activeTexture(i.TEXTURE0+G);let ve=et.getPrimaries(et.workingColorSpace),Me=v.colorSpace===tn?null:et.getPrimaries(v.colorSpace),Qe=v.colorSpace===tn||ve===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let de=b(v.image,!1,r.maxTextureSize);de=ht(v,de);let be=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type),Pe=R(v.internalFormat,be,Ae,v.colorSpace,v.isVideoTexture);Be(ie,v);let Se,ke=v.mipmaps,Ne=v.isVideoTexture!==!0,Ve=Ie.__version===void 0||ae===!0,B=ee.dataReady,X=z(v,de);if(v.isDepthTexture)Pe=w(v.format===Oi,v.type),Ve&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,Pe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Pe,de.width,de.height,0,be,Ae,null));else if(v.isDataTexture)if(ke.length>0){Ne&&Ve&&t.texStorage2D(i.TEXTURE_2D,X,Pe,ke[0].width,ke[0].height);for(let Z=0,re=ke.length;Z<re;Z++)Se=ke[Z],Ne?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Se.width,Se.height,be,Ae,Se.data):t.texImage2D(i.TEXTURE_2D,Z,Pe,Se.width,Se.height,0,be,Ae,Se.data);v.generateMipmaps=!1}else Ne?(Ve&&t.texStorage2D(i.TEXTURE_2D,X,Pe,de.width,de.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,be,Ae,de.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,de.width,de.height,0,be,Ae,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ne&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,X,Pe,ke[0].width,ke[0].height,de.depth);for(let Z=0,re=ke.length;Z<re;Z++)if(Se=ke[Z],v.format!==zt)if(be!==null)if(Ne){if(B)if(v.layerUpdates.size>0){let ye=Eo(Se.width,Se.height,v.format,v.type);for(let xe of v.layerUpdates){let He=Se.data.subarray(xe*ye/Se.data.BYTES_PER_ELEMENT,(xe+1)*ye/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,xe,Se.width,Se.height,1,be,He)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Se.width,Se.height,de.depth,be,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Pe,Se.width,Se.height,de.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Se.width,Se.height,de.depth,be,Ae,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Pe,Se.width,Se.height,de.depth,0,be,Ae,Se.data)}else{Ne&&Ve&&t.texStorage2D(i.TEXTURE_2D,X,Pe,ke[0].width,ke[0].height);for(let Z=0,re=ke.length;Z<re;Z++)Se=ke[Z],v.format!==zt?be!==null?Ne?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Se.width,Se.height,be,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Pe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Se.width,Se.height,be,Ae,Se.data):t.texImage2D(i.TEXTURE_2D,Z,Pe,Se.width,Se.height,0,be,Ae,Se.data)}else if(v.isDataArrayTexture)if(Ne){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,X,Pe,de.width,de.height,de.depth),B)if(v.layerUpdates.size>0){let Z=Eo(de.width,de.height,v.format,v.type);for(let re of v.layerUpdates){let ye=de.data.subarray(re*Z/de.data.BYTES_PER_ELEMENT,(re+1)*Z/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,de.width,de.height,1,be,Ae,ye)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,be,Ae,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,de.width,de.height,de.depth,0,be,Ae,de.data);else if(v.isData3DTexture)Ne?(Ve&&t.texStorage3D(i.TEXTURE_3D,X,Pe,de.width,de.height,de.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,be,Ae,de.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,de.width,de.height,de.depth,0,be,Ae,de.data);else if(v.isFramebufferTexture){if(Ve)if(Ne)t.texStorage2D(i.TEXTURE_2D,X,Pe,de.width,de.height);else{let Z=de.width,re=de.height;for(let ye=0;ye<X;ye++)t.texImage2D(i.TEXTURE_2D,ye,Pe,Z,re,0,be,Ae,null),Z>>=1,re>>=1}}else if(ke.length>0){if(Ne&&Ve){let Z=Le(ke[0]);t.texStorage2D(i.TEXTURE_2D,X,Pe,Z.width,Z.height)}for(let Z=0,re=ke.length;Z<re;Z++)Se=ke[Z],Ne?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,be,Ae,Se):t.texImage2D(i.TEXTURE_2D,Z,Pe,be,Ae,Se);v.generateMipmaps=!1}else if(Ne){if(Ve){let Z=Le(de);t.texStorage2D(i.TEXTURE_2D,X,Pe,Z.width,Z.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Ae,de)}else t.texImage2D(i.TEXTURE_2D,0,Pe,be,Ae,de);_(v)&&p(ie),Ie.__version=ee.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ue(A,v,G){if(v.image.length!==6)return;let ie=Ye(A,v),ae=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);let ee=n.get(ae);if(ae.version!==ee.__version||ie===!0){t.activeTexture(i.TEXTURE0+G);let Ie=et.getPrimaries(et.workingColorSpace),ve=v.colorSpace===tn?null:et.getPrimaries(v.colorSpace),Me=v.colorSpace===tn||Ie===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Qe=v.isCompressedTexture||v.image[0].isCompressedTexture,de=v.image[0]&&v.image[0].isDataTexture,be=[];for(let re=0;re<6;re++)!Qe&&!de?be[re]=b(v.image[re],!0,r.maxCubemapSize):be[re]=de?v.image[re].image:v.image[re],be[re]=ht(v,be[re]);let Ae=be[0],Pe=s.convert(v.format,v.colorSpace),Se=s.convert(v.type),ke=R(v.internalFormat,Pe,Se,v.colorSpace),Ne=v.isVideoTexture!==!0,Ve=ee.__version===void 0||ie===!0,B=ae.dataReady,X=z(v,Ae);Be(i.TEXTURE_CUBE_MAP,v);let Z;if(Qe){Ne&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,X,ke,Ae.width,Ae.height);for(let re=0;re<6;re++){Z=be[re].mipmaps;for(let ye=0;ye<Z.length;ye++){let xe=Z[ye];v.format!==zt?Pe!==null?Ne?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye,0,0,xe.width,xe.height,Pe,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye,ke,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye,0,0,xe.width,xe.height,Pe,Se,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye,ke,xe.width,xe.height,0,Pe,Se,xe.data)}}}else{if(Z=v.mipmaps,Ne&&Ve){Z.length>0&&X++;let re=Le(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,X,ke,re.width,re.height)}for(let re=0;re<6;re++)if(de){Ne?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,be[re].width,be[re].height,Pe,Se,be[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ke,be[re].width,be[re].height,0,Pe,Se,be[re].data);for(let ye=0;ye<Z.length;ye++){let He=Z[ye].image[re].image;Ne?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye+1,0,0,He.width,He.height,Pe,Se,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye+1,ke,He.width,He.height,0,Pe,Se,He.data)}}else{Ne?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe,Se,be[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ke,Pe,Se,be[re]);for(let ye=0;ye<Z.length;ye++){let xe=Z[ye];Ne?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye+1,0,0,Pe,Se,xe.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye+1,ke,Pe,Se,xe.image[re])}}}_(v)&&p(i.TEXTURE_CUBE_MAP),ee.__version=ae.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function fe(A,v,G,ie,ae,ee){let Ie=s.convert(G.format,G.colorSpace),ve=s.convert(G.type),Me=R(G.internalFormat,Ie,ve,G.colorSpace),Qe=n.get(v),de=n.get(G);if(de.__renderTarget=v,!Qe.__hasExternalTextures){let be=Math.max(1,v.width>>ee),Ae=Math.max(1,v.height>>ee);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ee,Me,be,Ae,v.depth,0,Ie,ve,null):t.texImage2D(ae,ee,Me,be,Ae,0,Ie,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Je(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ae,de.__webglTexture,0,Ke(v)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ae,de.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(A,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let ie=v.depthTexture,ae=ie&&ie.isDepthTexture?ie.type:null,ee=w(v.stencilBuffer,ae),Ie=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=Ke(v);Je(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,ee,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ee,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ee,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,A)}else{let ie=v.textures;for(let ae=0;ae<ie.length;ae++){let ee=ie[ae],Ie=s.convert(ee.format,ee.colorSpace),ve=s.convert(ee.type),Me=R(ee.internalFormat,Ie,ve,ee.colorSpace),Qe=Ke(v);G&&Je(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Me,v.width,v.height):Je(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,Me,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Me,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ie=n.get(v.depthTexture);ie.__renderTarget=v,(!ie.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),le(v.depthTexture,0);let ae=ie.__webglTexture,ee=Ke(v);if(v.depthTexture.format===Ai)Je(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(v.depthTexture.format===Oi)Je(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ze(A){let v=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let ie=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ie){let ae=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ie.removeEventListener("dispose",ae)};ie.addEventListener("dispose",ae),v.__depthDisposeCallback=ae}v.__boundDepthTexture=ie}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Re(v.__webglFramebuffer,A)}else if(G){v.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ie]),v.__webglDepthbuffer[ie]===void 0)v.__webglDepthbuffer[ie]=i.createRenderbuffer(),me(v.__webglDepthbuffer[ie],A,!1);else{let ae=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),me(v.__webglDepthbuffer,A,!1);else{let ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(A,v,G){let ie=n.get(A);v!==void 0&&fe(ie.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ze(A)}function ct(A){let v=A.texture,G=n.get(A),ie=n.get(v);A.addEventListener("dispose",O);let ae=A.textures,ee=A.isWebGLCubeRenderTarget===!0,Ie=ae.length>1;if(Ie||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=v.version,a.memory.textures++),ee){G.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[ve]=[];for(let Me=0;Me<v.mipmaps.length;Me++)G.__webglFramebuffer[ve][Me]=i.createFramebuffer()}else G.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let ve=0;ve<v.mipmaps.length;ve++)G.__webglFramebuffer[ve]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let ve=0,Me=ae.length;ve<Me;ve++){let Qe=n.get(ae[ve]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Je(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ve=0;ve<ae.length;ve++){let Me=ae[ve];G.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ve]);let Qe=s.convert(Me.format,Me.colorSpace),de=s.convert(Me.type),be=R(Me.internalFormat,Qe,de,Me.colorSpace,A.isXRRenderTarget===!0),Ae=Ke(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,be,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,G.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),me(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Be(i.TEXTURE_CUBE_MAP,v);for(let ve=0;ve<6;ve++)if(v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)fe(G.__webglFramebuffer[ve][Me],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Me);else fe(G.__webglFramebuffer[ve],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);_(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ve=0,Me=ae.length;ve<Me;ve++){let Qe=ae[ve],de=n.get(Qe);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),Be(i.TEXTURE_2D,Qe),fe(G.__webglFramebuffer,A,Qe,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),_(Qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ve=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ie.__webglTexture),Be(ve,v),v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)fe(G.__webglFramebuffer[Me],A,v,i.COLOR_ATTACHMENT0,ve,Me);else fe(G.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,ve,0);_(v)&&p(ve),t.unbindTexture()}A.depthBuffer&&Ze(A)}function ot(A){let v=A.textures;for(let G=0,ie=v.length;G<ie;G++){let ae=v[G];if(_(ae)){let ee=L(A),Ie=n.get(ae).__webglTexture;t.bindTexture(ee,Ie),p(ee),t.unbindTexture()}}}let Xe=[],D=[];function Pt(A){if(A.samples>0){if(Je(A)===!1){let v=A.textures,G=A.width,ie=A.height,ae=i.COLOR_BUFFER_BIT,ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(A),ve=v.length>1;if(ve)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Me]);let Qe=n.get(v[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,G,ie,0,0,G,ie,ae,i.NEAREST),c===!0&&(Xe.length=0,D.length=0,Xe.push(i.COLOR_ATTACHMENT0+Me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Xe.push(ee),D.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Me]);let Qe=n.get(v[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ke(A){return Math.min(r.maxSamples,A.samples)}function Je(A){let v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ue(A){let v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function ht(A,v){let G=A.colorSpace,ie=A.format,ae=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Xt&&G!==tn&&(et.getTransfer(G)===at?(ie!==zt||ae!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),v}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=$,this.setTexture2D=le,this.setTexture2DArray=K,this.setTexture3D=ce,this.setTextureCube=J,this.rebindTextures=ze,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Je}function kp(i,e){function t(n,r=tn){let s,a=et.getTransfer(r);if(n===dn)return i.UNSIGNED_BYTE;if(n===Bs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ho)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lo)return i.BYTE;if(n===co)return i.SHORT;if(n===Ni)return i.UNSIGNED_SHORT;if(n===Os)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Bt)return i.FLOAT;if(n===en)return i.HALF_FLOAT;if(n===uo)return i.ALPHA;if(n===fo)return i.RGB;if(n===zt)return i.RGBA;if(n===po)return i.LUMINANCE;if(n===mo)return i.LUMINANCE_ALPHA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===xr)return i.RED;if(n===ks)return i.RED_INTEGER;if(n===go)return i.RG;if(n===Vs)return i.RG_INTEGER;if(n===Hs)return i.RGBA_INTEGER;if(n===yr||n===Mr||n===Sr||n===br)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gs||n===Ws||n===Xs||n===qs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ws)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ys||n===Zs||n===Js)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ys||n===Zs)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Js)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$s||n===Ks||n===Qs||n===js||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===la||n===ca)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$s)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ks)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qs)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===js)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===na)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ra)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===la)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===ha||n===ua)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Er)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ua)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_o||n===fa||n===da||n===pa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Er)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Vp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hp=`
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

}`,Oo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Ft,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jt({vertexShader:Vp,fragmentShader:Hp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bo=class extends Tn{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,m=null,g=null,x=null,b=new Oo,_=t.getContextAttributes(),p=null,L=null,R=[],w=[],z=new lt,U=null,O=new Rt;O.viewport=new mt;let H=new Rt;H.viewport=new mt;let T=[O,H],M=new Ts,N=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ue=R[j];return ue===void 0&&(ue=new Li,R[j]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(j){let ue=R[j];return ue===void 0&&(ue=new Li,R[j]=ue),ue.getGripSpace()},this.getHand=function(j){let ue=R[j];return ue===void 0&&(ue=new Li,R[j]=ue),ue.getHandSpace()};function Y(j){let ue=w.indexOf(j.inputSource);if(ue===-1)return;let fe=R[ue];fe!==void 0&&(fe.update(j.inputSource,j.frame,l||a),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function Q(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",le);for(let j=0;j<R.length;j++){let ue=w[j];ue!==null&&(w[j]=null,R[j].disconnect(ue))}N=null,$=null,b.reset(),e.setRenderTarget(p),g=null,m=null,h=null,r=null,L=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",le),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,me=null,Re=null;_.depth&&(Re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=_.stencil?Oi:Ai,me=_.stencil?Fi:qn);let Ze={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};h=new XRWebGLBinding(r,t),m=h.createProjectionLayer(Ze),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),L=new cn(m.textureWidth,m.textureHeight,{format:zt,type:dn,depthTexture:new fr(m.textureWidth,m.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{let fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),L=new cn(g.framebufferWidth,g.framebufferHeight,{format:zt,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function le(j){for(let ue=0;ue<j.removed.length;ue++){let fe=j.removed[ue],me=w.indexOf(fe);me>=0&&(w[me]=null,R[me].disconnect(fe))}for(let ue=0;ue<j.added.length;ue++){let fe=j.added[ue],me=w.indexOf(fe);if(me===-1){for(let Ze=0;Ze<R.length;Ze++)if(Ze>=w.length){w.push(fe),me=Ze;break}else if(w[Ze]===null){w[Ze]=fe,me=Ze;break}if(me===-1)break}let Re=R[me];Re&&Re.connect(fe)}}let K=new W,ce=new W;function J(j,ue,fe){K.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(fe.matrixWorld);let me=K.distanceTo(ce),Re=ue.projectionMatrix.elements,Ze=fe.projectionMatrix.elements,ze=Re[14]/(Re[10]-1),ct=Re[14]/(Re[10]+1),ot=(Re[9]+1)/Re[5],Xe=(Re[9]-1)/Re[5],D=(Re[8]-1)/Re[0],Pt=(Ze[8]+1)/Ze[0],Ke=ze*D,Je=ze*Pt,Ue=me/(-D+Pt),ht=Ue*-D;if(ue.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ht),j.translateZ(Ue),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Re[10]===-1)j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let Le=ze+Ue,A=ct+Ue,v=Ke-ht,G=Je+(me-ht),ie=ot*ct/A*Le,ae=Xe*ct/A*Le;j.projectionMatrix.makePerspective(v,G,ie,ae,Le,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function pe(j,ue){ue===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ue.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ue=j.near,fe=j.far;b.texture!==null&&(b.depthNear>0&&(ue=b.depthNear),b.depthFar>0&&(fe=b.depthFar)),M.near=H.near=O.near=ue,M.far=H.far=O.far=fe,(N!==M.near||$!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,$=M.far),O.layers.mask=j.layers.mask|2,H.layers.mask=j.layers.mask|4,M.layers.mask=O.layers.mask|H.layers.mask;let me=j.parent,Re=M.cameras;pe(M,me);for(let Ze=0;Ze<Re.length;Ze++)pe(Re[Ze],me);Re.length===2?J(M,O,H):M.projectionMatrix.copy(O.projectionMatrix),ge(j,M,me)};function ge(j,ue,fe){fe===null?j.matrix.copy(ue.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ue.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ss*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(m===null&&g===null))return c},this.setFoveation=function(j){c=j,m!==null&&(m.fixedFoveation=j),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(M)};let Ce=null;function Be(j,ue){if(u=ue.getViewerPose(l||a),x=ue,u!==null){let fe=u.views;g!==null&&(e.setRenderTargetFramebuffer(L,g.framebuffer),e.setRenderTarget(L));let me=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let ze=0;ze<fe.length;ze++){let ct=fe[ze],ot=null;if(g!==null)ot=g.getViewport(ct);else{let D=h.getViewSubImage(m,ct);ot=D.viewport,ze===0&&(e.setRenderTargetTextures(L,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(L))}let Xe=T[ze];Xe===void 0&&(Xe=new Rt,Xe.layers.enable(ze),Xe.viewport=new mt,T[ze]=Xe),Xe.matrix.fromArray(ct.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ct.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ot.x,ot.y,ot.width,ot.height),ze===0&&(M.matrix.copy(Xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(Xe)}let Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){let ze=h.getDepthInformation(fe[0]);ze&&ze.isValid&&ze.texture&&b.init(e,ze,r.renderState)}}for(let fe=0;fe<R.length;fe++){let me=w[fe],Re=R[fe];me!==null&&Re!==void 0&&Re.update(me,ue,l||a)}Ce&&Ce(j,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),x=null}let Ye=new Ec;Ye.setAnimationLoop(Be),this.setAnimationLoop=function(j){Ce=j},this.dispose=function(){}}},ci=new hn,Gp=new _t;function Wp(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Mo(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,L,R,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),h(_,p)):p.isMeshPhongMaterial?(s(_,p),u(_,p)):p.isMeshStandardMaterial?(s(_,p),m(_,p),p.isMeshPhysicalMaterial&&g(_,p,w)):p.isMeshMatcapMaterial?(s(_,p),x(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),b(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&o(_,p)):p.isPointsMaterial?c(_,p,L,R):p.isSpriteMaterial?l(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===wt&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===wt&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);let L=e.get(p),R=L.envMap,w=L.envMapRotation;R&&(_.envMap.value=R,ci.copy(w),ci.x*=-1,ci.y*=-1,ci.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),_.envMapRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(ci)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function o(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,L,R){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*L,_.scale.value=R*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function l(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function h(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function m(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function g(_,p,L){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wt&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=L.texture,_.transmissionSamplerSize.value.set(L.width,L.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,p){p.matcap&&(_.matcap.value=p.matcap)}function b(_,p){let L=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(L.matrixWorld),_.nearDistance.value=L.shadow.camera.near,_.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Xp(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(L,R){let w=R.program;n.uniformBlockBinding(L,w)}function l(L,R){let w=r[L.id];w===void 0&&(x(L),w=u(L),r[L.id]=w,L.addEventListener("dispose",_));let z=R.program;n.updateUBOMapping(L,z);let U=e.render.frame;s[L.id]!==U&&(m(L),s[L.id]=U)}function u(L){let R=h();L.__bindingPointIndex=R;let w=i.createBuffer(),z=L.__size,U=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,z,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,w),w}function h(){for(let L=0;L<o;L++)if(a.indexOf(L)===-1)return a.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(L){let R=r[L.id],w=L.uniforms,z=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let U=0,O=w.length;U<O;U++){let H=Array.isArray(w[U])?w[U]:[w[U]];for(let T=0,M=H.length;T<M;T++){let N=H[T];if(g(N,U,T,z)===!0){let $=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value],Q=0;for(let le=0;le<Y.length;le++){let K=Y[le],ce=b(K);typeof K=="number"||typeof K=="boolean"?(N.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,$+Q,N.__data)):K.isMatrix3?(N.__data[0]=K.elements[0],N.__data[1]=K.elements[1],N.__data[2]=K.elements[2],N.__data[3]=0,N.__data[4]=K.elements[3],N.__data[5]=K.elements[4],N.__data[6]=K.elements[5],N.__data[7]=0,N.__data[8]=K.elements[6],N.__data[9]=K.elements[7],N.__data[10]=K.elements[8],N.__data[11]=0):(K.toArray(N.__data,Q),Q+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(L,R,w,z){let U=L.value,O=R+"_"+w;if(z[O]===void 0)return typeof U=="number"||typeof U=="boolean"?z[O]=U:z[O]=U.clone(),!0;{let H=z[O];if(typeof U=="number"||typeof U=="boolean"){if(H!==U)return z[O]=U,!0}else if(H.equals(U)===!1)return H.copy(U),!0}return!1}function x(L){let R=L.uniforms,w=0,z=16;for(let O=0,H=R.length;O<H;O++){let T=Array.isArray(R[O])?R[O]:[R[O]];for(let M=0,N=T.length;M<N;M++){let $=T[M],Y=Array.isArray($.value)?$.value:[$.value];for(let Q=0,le=Y.length;Q<le;Q++){let K=Y[Q],ce=b(K),J=w%z,pe=J%ce.boundary,ge=J+pe;w+=pe,ge!==0&&z-ge<ce.storage&&(w+=z-ge),$.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=w,w+=ce.storage}}}let U=w%z;return U>0&&(w+=z-U),L.__size=w,L.__cache={},this}function b(L){let R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),R}function _(L){let R=L.target;R.removeEventListener("dispose",_);let w=a.indexOf(R.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function p(){for(let L in r)i.deleteBuffer(r[L]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}var xa=class{constructor(e={}){let{canvas:t=Zl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=new Uint32Array(4),b=new Int32Array(4),_=null,p=null,L=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,z=!1;this._outputColorSpace=Lt;let U=0,O=0,H=null,T=-1,M=null,N=new mt,$=new mt,Y=null,Q=new tt(0),le=0,K=t.width,ce=t.height,J=1,pe=null,ge=null,Ce=new mt(0,0,K,ce),Be=new mt(0,0,K,ce),Ye=!1,j=new ur,ue=!1,fe=!1,me=new _t,Re=new _t,Ze=new W,ze=new mt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function Xe(){return H===null?J:1}let D=n;function Pt(d,S){return t.getContext(d,S)}try{let d={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${As}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",xe,!1),D===null){let S="webgl2";if(D=Pt(S,d),D===null)throw Pt(S)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(d){throw console.error("THREE.WebGLRenderer: "+d.message),d}let Ke,Je,Ue,ht,Le,A,v,G,ie,ae,ee,Ie,ve,Me,Qe,de,be,Ae,Pe,Se,ke,Ne,Ve,B;function X(){Ke=new cd(D),Ke.init(),Ne=new kp(D,Ke),Je=new nd(D,Ke,e,Ne),Ue=new Bp(D,Ke),Je.reverseDepthBuffer&&m&&Ue.buffers.depth.setReversed(!0),ht=new fd(D),Le=new wp,A=new zp(D,Ke,Ue,Le,Je,Ne,ht),v=new rd(w),G=new ld(w),ie=new _h(D),Ve=new ed(D,ie),ae=new hd(D,ie,ht,Ve),ee=new pd(D,ae,ie,ht),Pe=new dd(D,Je,A),de=new id(Le),Ie=new Ep(w,v,G,Ke,Je,Ve,de),ve=new Wp(w,Le),Me=new Ap,Qe=new Dp(Ke),Ae=new jf(w,v,G,Ue,ee,g,c),be=new Fp(w,ee,Je),B=new Xp(D,ht,Je,Ue),Se=new td(D,Ke,ht),ke=new ud(D,Ke,ht),ht.programs=Ie.programs,w.capabilities=Je,w.extensions=Ke,w.properties=Le,w.renderLists=Me,w.shadowMap=be,w.state=Ue,w.info=ht}X();let Z=new Bo(w,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let d=Ke.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){let d=Ke.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(d){d!==void 0&&(J=d,this.setSize(K,ce,!1))},this.getSize=function(d){return d.set(K,ce)},this.setSize=function(d,S,E=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=d,ce=S,t.width=Math.floor(d*J),t.height=Math.floor(S*J),E===!0&&(t.style.width=d+"px",t.style.height=S+"px"),this.setViewport(0,0,d,S)},this.getDrawingBufferSize=function(d){return d.set(K*J,ce*J).floor()},this.setDrawingBufferSize=function(d,S,E){K=d,ce=S,J=E,t.width=Math.floor(d*E),t.height=Math.floor(S*E),this.setViewport(0,0,d,S)},this.getCurrentViewport=function(d){return d.copy(N)},this.getViewport=function(d){return d.copy(Ce)},this.setViewport=function(d,S,E,P){d.isVector4?Ce.set(d.x,d.y,d.z,d.w):Ce.set(d,S,E,P),Ue.viewport(N.copy(Ce).multiplyScalar(J).round())},this.getScissor=function(d){return d.copy(Be)},this.setScissor=function(d,S,E,P){d.isVector4?Be.set(d.x,d.y,d.z,d.w):Be.set(d,S,E,P),Ue.scissor($.copy(Be).multiplyScalar(J).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(d){Ue.setScissorTest(Ye=d)},this.setOpaqueSort=function(d){pe=d},this.setTransparentSort=function(d){ge=d},this.getClearColor=function(d){return d.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(d=!0,S=!0,E=!0){let P=0;if(d){let C=!1;if(H!==null){let F=H.texture.format;C=F===Hs||F===Vs||F===ks}if(C){let F=H.texture.type,k=F===dn||F===qn||F===Ni||F===Fi||F===Bs||F===zs,V=Ae.getClearColor(),q=Ae.getClearAlpha(),ne=V.r,te=V.g,se=V.b;k?(x[0]=ne,x[1]=te,x[2]=se,x[3]=q,D.clearBufferuiv(D.COLOR,0,x)):(b[0]=ne,b[1]=te,b[2]=se,b[3]=q,D.clearBufferiv(D.COLOR,0,b))}else P|=D.COLOR_BUFFER_BIT}S&&(P|=D.DEPTH_BUFFER_BIT),E&&(P|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ae.dispose(),Me.dispose(),Qe.dispose(),Le.dispose(),v.dispose(),G.dispose(),ee.dispose(),Ve.dispose(),B.dispose(),Ie.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Pr),Z.removeEventListener("sessionend",Lr),mn.stop()};function re(d){d.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;let d=ht.autoReset,S=be.enabled,E=be.autoUpdate,P=be.needsUpdate,C=be.type;X(),ht.autoReset=d,be.enabled=S,be.autoUpdate=E,be.needsUpdate=P,be.type=C}function xe(d){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function He(d){let S=d.target;S.removeEventListener("dispose",He),dt(S)}function dt(d){St(d),Le.remove(d)}function St(d){let S=Le.get(d).programs;S!==void 0&&(S.forEach(function(E){Ie.releaseProgram(E)}),d.isShaderMaterial&&Ie.releaseShaderCache(d))}this.renderBufferDirect=function(d,S,E,P,C,F){S===null&&(S=ct);let k=C.isMesh&&C.matrixWorld.determinant()<0,V=ba(d,S,E,P,C);Ue.setMaterial(P,k);let q=E.index,ne=1;if(P.wireframe===!0){if(q=ae.getWireframeAttribute(E),q===void 0)return;ne=2}let te=E.drawRange,se=E.attributes.position,oe=te.start*ne,he=(te.start+te.count)*ne;F!==null&&(oe=Math.max(oe,F.start*ne),he=Math.min(he,(F.start+F.count)*ne)),q!==null?(oe=Math.max(oe,0),he=Math.min(he,q.count)):se!=null&&(oe=Math.max(oe,0),he=Math.min(he,se.count));let we=he-oe;if(we<0||we===1/0)return;Ve.setup(C,P,V,E,q);let Fe,De=Se;if(q!==null&&(Fe=ie.get(q),De=ke,De.setIndex(Fe)),C.isMesh)P.wireframe===!0?(Ue.setLineWidth(P.wireframeLinewidth*Xe()),De.setMode(D.LINES)):De.setMode(D.TRIANGLES);else if(C.isLine){let Ee=P.linewidth;Ee===void 0&&(Ee=1),Ue.setLineWidth(Ee*Xe()),C.isLineSegments?De.setMode(D.LINES):C.isLineLoop?De.setMode(D.LINE_LOOP):De.setMode(D.LINE_STRIP)}else C.isPoints?De.setMode(D.POINTS):C.isSprite&&De.setMode(D.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)Tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))De.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{let Ee=C._multiDrawStarts,Ge=C._multiDrawCounts,Te=C._multiDrawCount,rt=q?ie.get(q).bytesPerElement:1,vt=Le.get(P).currentProgram.getUniforms();for(let nt=0;nt<Te;nt++)vt.setValue(D,"_gl_DrawID",nt),De.render(Ee[nt]/rt,Ge[nt])}else if(C.isInstancedMesh)De.renderInstances(oe,we,C.count);else if(E.isInstancedBufferGeometry){let Ee=E._maxInstanceCount!==void 0?E._maxInstanceCount:1/0,Ge=Math.min(E.instanceCount,Ee);De.renderInstances(oe,we,Ge)}else De.render(oe,we)};function it(d,S,E){d.transparent===!0&&d.side===fn&&d.forceSinglePass===!1?(d.side=wt,d.needsUpdate=!0,di(d,S,E),d.side=wn,d.needsUpdate=!0,di(d,S,E),d.side=fn):di(d,S,E)}this.compile=function(d,S,E=null){E===null&&(E=d),p=Qe.get(E),p.init(S),R.push(p),E.traverseVisible(function(C){C.isLight&&C.layers.test(S.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),d!==E&&d.traverseVisible(function(C){C.isLight&&C.layers.test(S.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),p.setupLights();let P=new Set;return d.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;let F=C.material;if(F)if(Array.isArray(F))for(let k=0;k<F.length;k++){let V=F[k];it(V,E,C),P.add(V)}else it(F,E,C),P.add(F)}),p=R.pop(),P},this.compileAsync=function(d,S,E=null){let P=this.compile(d,S,E);return new Promise(C=>{function F(){if(P.forEach(function(k){Le.get(k).currentProgram.isReady()&&P.delete(k)}),P.size===0){C(d);return}setTimeout(F,10)}Ke.get("KHR_parallel_shader_compile")!==null?F():setTimeout(F,10)})};let kt=null;function Jt(d){kt&&kt(d)}function Pr(){mn.stop()}function Lr(){mn.start()}let mn=new Ec;mn.setAnimationLoop(Jt),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(d){kt=d,Z.setAnimationLoop(d),d===null?mn.stop():mn.start()},Z.addEventListener("sessionstart",Pr),Z.addEventListener("sessionend",Lr),this.render=function(d,S){if(S!==void 0&&S.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(S),S=Z.getCamera()),d.isScene===!0&&d.onBeforeRender(w,d,S,H),p=Qe.get(d,R.length),p.init(S),R.push(p),Re.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),j.setFromProjectionMatrix(Re),fe=this.localClippingEnabled,ue=de.init(this.clippingPlanes,fe),_=Me.get(d,L.length),_.init(),L.push(_),Z.enabled===!0&&Z.isPresenting===!0){let F=w.xr.getDepthSensingMesh();F!==null&&Xi(F,S,-1/0,w.sortObjects)}Xi(d,S,0,w.sortObjects),_.finish(),w.sortObjects===!0&&_.sort(pe,ge),ot=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ot&&Ae.addToRenderList(_,d),this.info.render.frame++,ue===!0&&de.beginShadows();let E=p.state.shadowsArray;be.render(E,d,S),ue===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let P=_.opaque,C=_.transmissive;if(p.setupLights(),S.isArrayCamera){let F=S.cameras;if(C.length>0)for(let k=0,V=F.length;k<V;k++){let q=F[k];Dr(P,C,d,q)}ot&&Ae.render(d);for(let k=0,V=F.length;k<V;k++){let q=F[k];qi(_,d,q,q.viewport)}}else C.length>0&&Dr(P,C,d,S),ot&&Ae.render(d),qi(_,d,S);H!==null&&O===0&&(A.updateMultisampleRenderTarget(H),A.updateRenderTargetMipmap(H)),d.isScene===!0&&d.onAfterRender(w,d,S),Ve.resetDefaultState(),T=-1,M=null,R.pop(),R.length>0?(p=R[R.length-1],ue===!0&&de.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,L.pop(),L.length>0?_=L[L.length-1]:_=null};function Xi(d,S,E,P){if(d.visible===!1)return;if(d.layers.test(S.layers)){if(d.isGroup)E=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(S);else if(d.isLight)p.pushLight(d),d.castShadow&&p.pushShadow(d);else if(d.isSprite){if(!d.frustumCulled||j.intersectsSprite(d)){P&&ze.setFromMatrixPosition(d.matrixWorld).applyMatrix4(Re);let k=ee.update(d),V=d.material;V.visible&&_.push(d,k,V,E,ze.z,null)}}else if((d.isMesh||d.isLine||d.isPoints)&&(!d.frustumCulled||j.intersectsObject(d))){let k=ee.update(d),V=d.material;if(P&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),ze.copy(d.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),ze.copy(k.boundingSphere.center)),ze.applyMatrix4(d.matrixWorld).applyMatrix4(Re)),Array.isArray(V)){let q=k.groups;for(let ne=0,te=q.length;ne<te;ne++){let se=q[ne],oe=V[se.materialIndex];oe&&oe.visible&&_.push(d,k,oe,E,ze.z,se)}}else V.visible&&_.push(d,k,V,E,ze.z,null)}}let F=d.children;for(let k=0,V=F.length;k<V;k++)Xi(F[k],S,E,P)}function qi(d,S,E,P){let C=d.opaque,F=d.transmissive,k=d.transparent;p.setupLightsView(E),ue===!0&&de.setGlobalState(w.clippingPlanes,E),P&&Ue.viewport(N.copy(P)),C.length>0&&fi(C,S,E),F.length>0&&fi(F,S,E),k.length>0&&fi(k,S,E),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Dr(d,S,E,P){if((E.isScene===!0?E.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[P.id]===void 0&&(p.state.transmissionRenderTarget[P.id]=new cn(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?en:dn,minFilter:Pn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let F=p.state.transmissionRenderTarget[P.id],k=P.viewport||N;F.setSize(k.z*w.transmissionResolutionScale,k.w*w.transmissionResolutionScale);let V=w.getRenderTarget();w.setRenderTarget(F),w.getClearColor(Q),le=w.getClearAlpha(),le<1&&w.setClearColor(16777215,.5),w.clear(),ot&&Ae.render(E);let q=w.toneMapping;w.toneMapping=In;let ne=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),p.setupLightsView(P),ue===!0&&de.setGlobalState(w.clippingPlanes,P),fi(d,E,P),A.updateMultisampleRenderTarget(F),A.updateRenderTargetMipmap(F),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let se=0,oe=S.length;se<oe;se++){let he=S[se],we=he.object,Fe=he.geometry,De=he.material,Ee=he.group;if(De.side===fn&&we.layers.test(P.layers)){let Ge=De.side;De.side=wt,De.needsUpdate=!0,Ur(we,E,P,Fe,De,Ee),De.side=Ge,De.needsUpdate=!0,te=!0}}te===!0&&(A.updateMultisampleRenderTarget(F),A.updateRenderTargetMipmap(F))}w.setRenderTarget(V),w.setClearColor(Q,le),ne!==void 0&&(P.viewport=ne),w.toneMapping=q}function fi(d,S,E){let P=S.isScene===!0?S.overrideMaterial:null;for(let C=0,F=d.length;C<F;C++){let k=d[C],V=k.object,q=k.geometry,ne=k.group,te=k.material;te.allowOverride===!0&&P!==null&&(te=P),V.layers.test(E.layers)&&Ur(V,S,E,q,te,ne)}}function Ur(d,S,E,P,C,F){d.onBeforeRender(w,S,E,P,C,F),d.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),C.onBeforeRender(w,S,E,P,d,F),C.transparent===!0&&C.side===fn&&C.forceSinglePass===!1?(C.side=wt,C.needsUpdate=!0,w.renderBufferDirect(E,S,P,C,d,F),C.side=wn,C.needsUpdate=!0,w.renderBufferDirect(E,S,P,C,d,F),C.side=fn):w.renderBufferDirect(E,S,P,C,d,F),d.onAfterRender(w,S,E,P,C,F)}function di(d,S,E){S.isScene!==!0&&(S=ct);let P=Le.get(d),C=p.state.lights,F=p.state.shadowsArray,k=C.state.version,V=Ie.getParameters(d,C.state,F,S,E),q=Ie.getProgramCacheKey(V),ne=P.programs;P.environment=d.isMeshStandardMaterial?S.environment:null,P.fog=S.fog,P.envMap=(d.isMeshStandardMaterial?G:v).get(d.envMap||P.environment),P.envMapRotation=P.environment!==null&&d.envMap===null?S.environmentRotation:d.envMapRotation,ne===void 0&&(d.addEventListener("dispose",He),ne=new Map,P.programs=ne);let te=ne.get(q);if(te!==void 0){if(P.currentProgram===te&&P.lightsStateVersion===k)return Zi(d,V),te}else V.uniforms=Ie.getUniforms(d),d.onBeforeCompile(V,w),te=Ie.acquireProgram(V,q),ne.set(q,te),P.uniforms=V.uniforms;let se=P.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&(se.clippingPlanes=de.uniform),Zi(d,V),P.needsLights=Dn(d),P.lightsStateVersion=k,P.needsLights&&(se.ambientLightColor.value=C.state.ambient,se.lightProbe.value=C.state.probe,se.directionalLights.value=C.state.directional,se.directionalLightShadows.value=C.state.directionalShadow,se.spotLights.value=C.state.spot,se.spotLightShadows.value=C.state.spotShadow,se.rectAreaLights.value=C.state.rectArea,se.ltc_1.value=C.state.rectAreaLTC1,se.ltc_2.value=C.state.rectAreaLTC2,se.pointLights.value=C.state.point,se.pointLightShadows.value=C.state.pointShadow,se.hemisphereLights.value=C.state.hemi,se.directionalShadowMap.value=C.state.directionalShadowMap,se.directionalShadowMatrix.value=C.state.directionalShadowMatrix,se.spotShadowMap.value=C.state.spotShadowMap,se.spotLightMatrix.value=C.state.spotLightMatrix,se.spotLightMap.value=C.state.spotLightMap,se.pointShadowMap.value=C.state.pointShadowMap,se.pointShadowMatrix.value=C.state.pointShadowMatrix),P.currentProgram=te,P.uniformsList=null,te}function Yi(d){if(d.uniformsList===null){let S=d.currentProgram.getUniforms();d.uniformsList=ki.seqWithValue(S.seq,d.uniforms)}return d.uniformsList}function Zi(d,S){let E=Le.get(d);E.outputColorSpace=S.outputColorSpace,E.batching=S.batching,E.batchingColor=S.batchingColor,E.instancing=S.instancing,E.instancingColor=S.instancingColor,E.instancingMorph=S.instancingMorph,E.skinning=S.skinning,E.morphTargets=S.morphTargets,E.morphNormals=S.morphNormals,E.morphColors=S.morphColors,E.morphTargetsCount=S.morphTargetsCount,E.numClippingPlanes=S.numClippingPlanes,E.numIntersection=S.numClipIntersection,E.vertexAlphas=S.vertexAlphas,E.vertexTangents=S.vertexTangents,E.toneMapping=S.toneMapping}function ba(d,S,E,P,C){S.isScene!==!0&&(S=ct),A.resetTextureUnits();let F=S.fog,k=P.isMeshStandardMaterial?S.environment:null,V=H===null?w.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Xt,q=(P.isMeshStandardMaterial?G:v).get(P.envMap||k),ne=P.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,te=!!E.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),se=!!E.morphAttributes.position,oe=!!E.morphAttributes.normal,he=!!E.morphAttributes.color,we=In;P.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(we=w.toneMapping);let Fe=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,De=Fe!==void 0?Fe.length:0,Ee=Le.get(P),Ge=p.state.lights;if(ue===!0&&(fe===!0||d!==M)){let ut=d===M&&P.id===T;de.setState(P,d,ut)}let Te=!1;P.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ge.state.version||Ee.outputColorSpace!==V||C.isBatchedMesh&&Ee.batching===!1||!C.isBatchedMesh&&Ee.batching===!0||C.isBatchedMesh&&Ee.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&Ee.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&Ee.instancing===!1||!C.isInstancedMesh&&Ee.instancing===!0||C.isSkinnedMesh&&Ee.skinning===!1||!C.isSkinnedMesh&&Ee.skinning===!0||C.isInstancedMesh&&Ee.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&Ee.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&Ee.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&Ee.instancingMorph===!1&&C.morphTexture!==null||Ee.envMap!==q||P.fog===!0&&Ee.fog!==F||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==de.numPlanes||Ee.numIntersection!==de.numIntersection)||Ee.vertexAlphas!==ne||Ee.vertexTangents!==te||Ee.morphTargets!==se||Ee.morphNormals!==oe||Ee.morphColors!==he||Ee.toneMapping!==we||Ee.morphTargetsCount!==De)&&(Te=!0):(Te=!0,Ee.__version=P.version);let rt=Ee.currentProgram;Te===!0&&(rt=di(P,S,C));let vt=!1,nt=!1,je=!1,Oe=rt.getUniforms(),pt=Ee.uniforms;if(Ue.useProgram(rt.program)&&(vt=!0,nt=!0,je=!0),P.id!==T&&(T=P.id,nt=!0),vt||M!==d){Ue.buffers.depth.getReversed()?(me.copy(d.projectionMatrix),$l(me),Kl(me),Oe.setValue(D,"projectionMatrix",me)):Oe.setValue(D,"projectionMatrix",d.projectionMatrix),Oe.setValue(D,"viewMatrix",d.matrixWorldInverse);let xt=Oe.map.cameraPosition;xt!==void 0&&xt.setValue(D,Ze.setFromMatrixPosition(d.matrixWorld)),Je.logarithmicDepthBuffer&&Oe.setValue(D,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&Oe.setValue(D,"isOrthographic",d.isOrthographicCamera===!0),M!==d&&(M=d,nt=!0,je=!0)}if(C.isSkinnedMesh){Oe.setOptional(D,C,"bindMatrix"),Oe.setOptional(D,C,"bindMatrixInverse");let ut=C.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),Oe.setValue(D,"boneTexture",ut.boneTexture,A))}C.isBatchedMesh&&(Oe.setOptional(D,C,"batchingTexture"),Oe.setValue(D,"batchingTexture",C._matricesTexture,A),Oe.setOptional(D,C,"batchingIdTexture"),Oe.setValue(D,"batchingIdTexture",C._indirectTexture,A),Oe.setOptional(D,C,"batchingColorTexture"),C._colorsTexture!==null&&Oe.setValue(D,"batchingColorTexture",C._colorsTexture,A));let bt=E.morphAttributes;if((bt.position!==void 0||bt.normal!==void 0||bt.color!==void 0)&&Pe.update(C,E,rt),(nt||Ee.receiveShadow!==C.receiveShadow)&&(Ee.receiveShadow=C.receiveShadow,Oe.setValue(D,"receiveShadow",C.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(pt.envMap.value=q,pt.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1),P.isMeshStandardMaterial&&P.envMap===null&&S.environment!==null&&(pt.envMapIntensity.value=S.environmentIntensity),nt&&(Oe.setValue(D,"toneMappingExposure",w.toneMappingExposure),Ee.needsLights&&gn(pt,je),F&&P.fog===!0&&ve.refreshFogUniforms(pt,F),ve.refreshMaterialUniforms(pt,P,J,ce,p.state.transmissionRenderTarget[d.id]),ki.upload(D,Yi(Ee),pt,A)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(ki.upload(D,Yi(Ee),pt,A),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&Oe.setValue(D,"center",C.center),Oe.setValue(D,"modelViewMatrix",C.modelViewMatrix),Oe.setValue(D,"normalMatrix",C.normalMatrix),Oe.setValue(D,"modelMatrix",C.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){let ut=P.uniformsGroups;for(let xt=0,Ea=ut.length;xt<Ea;xt++){let Yn=ut[xt];B.update(Yn,rt),B.bind(Yn,rt)}}return rt}function gn(d,S){d.ambientLightColor.needsUpdate=S,d.lightProbe.needsUpdate=S,d.directionalLights.needsUpdate=S,d.directionalLightShadows.needsUpdate=S,d.pointLights.needsUpdate=S,d.pointLightShadows.needsUpdate=S,d.spotLights.needsUpdate=S,d.spotLightShadows.needsUpdate=S,d.rectAreaLights.needsUpdate=S,d.hemisphereLights.needsUpdate=S}function Dn(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(d,S,E){let P=Le.get(d);P.__autoAllocateDepthBuffer=d.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),Le.get(d.texture).__webglTexture=S,Le.get(d.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:E,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(d,S){let E=Le.get(d);E.__webglFramebuffer=S,E.__useDefaultFramebuffer=S===void 0};let f=D.createFramebuffer();this.setRenderTarget=function(d,S=0,E=0){H=d,U=S,O=E;let P=!0,C=null,F=!1,k=!1;if(d){let q=Le.get(d);if(q.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(D.FRAMEBUFFER,null),P=!1;else if(q.__webglFramebuffer===void 0)A.setupRenderTarget(d);else if(q.__hasExternalTextures)A.rebindTextures(d,Le.get(d.texture).__webglTexture,Le.get(d.depthTexture).__webglTexture);else if(d.depthBuffer){let se=d.depthTexture;if(q.__boundDepthTexture!==se){if(se!==null&&Le.has(se)&&(d.width!==se.image.width||d.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(d)}}let ne=d.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(k=!0);let te=Le.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(te[S])?C=te[S][E]:C=te[S],F=!0):d.samples>0&&A.useMultisampledRTT(d)===!1?C=Le.get(d).__webglMultisampledFramebuffer:Array.isArray(te)?C=te[E]:C=te,N.copy(d.viewport),$.copy(d.scissor),Y=d.scissorTest}else N.copy(Ce).multiplyScalar(J).floor(),$.copy(Be).multiplyScalar(J).floor(),Y=Ye;if(E!==0&&(C=f),Ue.bindFramebuffer(D.FRAMEBUFFER,C)&&P&&Ue.drawBuffers(d,C),Ue.viewport(N),Ue.scissor($),Ue.setScissorTest(Y),F){let q=Le.get(d.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+S,q.__webglTexture,E)}else if(k){let q=Le.get(d.texture),ne=S;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.__webglTexture,E,ne)}else if(d!==null&&E!==0){let q=Le.get(d.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,q.__webglTexture,E)}T=-1},this.readRenderTargetPixels=function(d,S,E,P,C,F,k){if(!(d&&d.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V=Le.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&k!==void 0&&(V=V[k]),V){Ue.bindFramebuffer(D.FRAMEBUFFER,V);try{let q=d.texture,ne=q.format,te=q.type;if(!Je.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}S>=0&&S<=d.width-P&&E>=0&&E<=d.height-C&&D.readPixels(S,E,P,C,Ne.convert(ne),Ne.convert(te),F)}finally{let q=H!==null?Le.get(H).__webglFramebuffer:null;Ue.bindFramebuffer(D.FRAMEBUFFER,q)}}},this.readRenderTargetPixelsAsync=async function(d,S,E,P,C,F,k){if(!(d&&d.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V=Le.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&k!==void 0&&(V=V[k]),V)if(S>=0&&S<=d.width-P&&E>=0&&E<=d.height-C){Ue.bindFramebuffer(D.FRAMEBUFFER,V);let q=d.texture,ne=q.format,te=q.type;if(!Je.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.bufferData(D.PIXEL_PACK_BUFFER,F.byteLength,D.STREAM_READ),D.readPixels(S,E,P,C,Ne.convert(ne),Ne.convert(te),0);let oe=H!==null?Le.get(H).__webglFramebuffer:null;Ue.bindFramebuffer(D.FRAMEBUFFER,oe);let he=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Jl(D,he,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,F),D.deleteBuffer(se),D.deleteSync(he),F}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(d,S=null,E=0){let P=Math.pow(2,-E),C=Math.floor(d.image.width*P),F=Math.floor(d.image.height*P),k=S!==null?S.x:0,V=S!==null?S.y:0;A.setTexture2D(d,0),D.copyTexSubImage2D(D.TEXTURE_2D,E,0,0,k,V,C,F),Ue.unbindTexture()};let y=D.createFramebuffer(),I=D.createFramebuffer();this.copyTextureToTexture=function(d,S,E=null,P=null,C=0,F=null){F===null&&(C!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),F=C,C=0):F=0);let k,V,q,ne,te,se,oe,he,we,Fe=d.isCompressedTexture?d.mipmaps[F]:d.image;if(E!==null)k=E.max.x-E.min.x,V=E.max.y-E.min.y,q=E.isBox3?E.max.z-E.min.z:1,ne=E.min.x,te=E.min.y,se=E.isBox3?E.min.z:0;else{let bt=Math.pow(2,-C);k=Math.floor(Fe.width*bt),V=Math.floor(Fe.height*bt),d.isDataArrayTexture?q=Fe.depth:d.isData3DTexture?q=Math.floor(Fe.depth*bt):q=1,ne=0,te=0,se=0}P!==null?(oe=P.x,he=P.y,we=P.z):(oe=0,he=0,we=0);let De=Ne.convert(S.format),Ee=Ne.convert(S.type),Ge;S.isData3DTexture?(A.setTexture3D(S,0),Ge=D.TEXTURE_3D):S.isDataArrayTexture||S.isCompressedArrayTexture?(A.setTexture2DArray(S,0),Ge=D.TEXTURE_2D_ARRAY):(A.setTexture2D(S,0),Ge=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,S.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,S.unpackAlignment);let Te=D.getParameter(D.UNPACK_ROW_LENGTH),rt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),vt=D.getParameter(D.UNPACK_SKIP_PIXELS),nt=D.getParameter(D.UNPACK_SKIP_ROWS),je=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ne),D.pixelStorei(D.UNPACK_SKIP_ROWS,te),D.pixelStorei(D.UNPACK_SKIP_IMAGES,se);let Oe=d.isDataArrayTexture||d.isData3DTexture,pt=S.isDataArrayTexture||S.isData3DTexture;if(d.isDepthTexture){let bt=Le.get(d),ut=Le.get(S),xt=Le.get(bt.__renderTarget),Ea=Le.get(ut.__renderTarget);Ue.bindFramebuffer(D.READ_FRAMEBUFFER,xt.__webglFramebuffer),Ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ea.__webglFramebuffer);for(let Yn=0;Yn<q;Yn++)Oe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.get(d).__webglTexture,C,se+Yn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.get(S).__webglTexture,F,we+Yn)),D.blitFramebuffer(ne,te,k,V,oe,he,k,V,D.DEPTH_BUFFER_BIT,D.NEAREST);Ue.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(C!==0||d.isRenderTargetTexture||Le.has(d)){let bt=Le.get(d),ut=Le.get(S);Ue.bindFramebuffer(D.READ_FRAMEBUFFER,y),Ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,I);for(let xt=0;xt<q;xt++)Oe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.__webglTexture,C,se+xt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bt.__webglTexture,C),pt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ut.__webglTexture,F,we+xt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ut.__webglTexture,F),C!==0?D.blitFramebuffer(ne,te,k,V,oe,he,k,V,D.COLOR_BUFFER_BIT,D.NEAREST):pt?D.copyTexSubImage3D(Ge,F,oe,he,we+xt,ne,te,k,V):D.copyTexSubImage2D(Ge,F,oe,he,ne,te,k,V);Ue.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pt?d.isDataTexture||d.isData3DTexture?D.texSubImage3D(Ge,F,oe,he,we,k,V,q,De,Ee,Fe.data):S.isCompressedArrayTexture?D.compressedTexSubImage3D(Ge,F,oe,he,we,k,V,q,De,Fe.data):D.texSubImage3D(Ge,F,oe,he,we,k,V,q,De,Ee,Fe):d.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,oe,he,k,V,De,Ee,Fe.data):d.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,oe,he,Fe.width,Fe.height,De,Fe.data):D.texSubImage2D(D.TEXTURE_2D,F,oe,he,k,V,De,Ee,Fe);D.pixelStorei(D.UNPACK_ROW_LENGTH,Te),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vt),D.pixelStorei(D.UNPACK_SKIP_ROWS,nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,je),F===0&&S.generateMipmaps&&D.generateMipmap(Ge),Ue.unbindTexture()},this.copyTextureToTexture3D=function(d,S,E=null,P=null,C=0){return Tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(d,S,E,P,C)},this.initRenderTarget=function(d){Le.get(d).__webglFramebuffer===void 0&&A.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?A.setTextureCube(d,0):d.isData3DTexture?A.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?A.setTexture2DArray(d,0):A.setTexture2D(d,0),Ue.unbindTexture()},this.resetState=function(){U=0,O=0,H=null,Ue.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var Hi=class i{static createButton(e,t={}){let n=document.createElement("button");function r(){let l=null;async function u(g){g.addEventListener("end",h),await e.xr.setSession(g),n.textContent="EXIT VR",l=g}function h(){l.removeEventListener("end",h),n.textContent="ENTER VR",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";let m={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",m).then(u):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",m).then(u).catch(g=>{console.warn(g)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",m).then(u).catch(g=>{console.warn(g)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){s(),n.textContent="VR NOT SUPPORTED"}function o(l){s(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="VR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?r():a(),l&&i.xrSessionIsGranted&&n.click()}).catch(o),n;{let l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{i.xrSessionIsGranted=!0})}}};Hi.xrSessionIsGranted=!1;Hi.registerSessionGrantedListener();var Zt=Uint8Array,Gi=Uint16Array,Yp=Int32Array,Rc=new Zt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ic=new Zt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Zp=new Zt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Pc=function(i,e){for(var t=new Gi(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Yp(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Lc=Pc(Rc,2),Dc=Lc.b,Jp=Lc.r;Dc[28]=258,Jp[258]=28;var Uc=Pc(Ic,0),$p=Uc.b,F_=Uc.r,Ho=new Gi(32768);for(st=0;st<32768;++st)Ln=(st&43690)>>1|(st&21845)<<1,Ln=(Ln&52428)>>2|(Ln&13107)<<2,Ln=(Ln&61680)>>4|(Ln&3855)<<4,Ho[st]=((Ln&65280)>>8|(Ln&255)<<8)>>1;var Ln,st,Cr=function(i,e,t){for(var n=i.length,r=0,s=new Gi(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new Gi(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new Gi(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=e-i[r],h=a[i[r]-1]++<<u,m=h|(1<<u)-1;h<=m;++h)o[Ho[h]>>c]=l}else for(o=new Gi(n),r=0;r<n;++r)i[r]&&(o[r]=Ho[a[i[r]-1]++]>>15-i[r]);return o},Rr=new Zt(288);for(st=0;st<144;++st)Rr[st]=8;var st;for(st=144;st<256;++st)Rr[st]=9;var st;for(st=256;st<280;++st)Rr[st]=7;var st;for(st=280;st<288;++st)Rr[st]=8;var st,Nc=new Zt(32);for(st=0;st<32;++st)Nc[st]=5;var st;var Kp=Cr(Rr,9,1);var Qp=Cr(Nc,5,1),ko=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},nn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Vo=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},jp=function(i){return(i+7)/8|0},em=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Zt(i.subarray(e,t))};var tm=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],rn=function(i,e,t){var n=new Error(e||tm[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,rn),!t)throw n;return n},nm=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new Zt(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new Zt(r*3));var l=function(ct){var ot=t.length;if(ct>ot){var Xe=new Zt(Math.max(ot*2,ct));Xe.set(t),t=Xe}},u=e.f||0,h=e.p||0,m=e.b||0,g=e.l,x=e.d,b=e.m,_=e.n,p=r*8;do{if(!g){u=nn(i,h,1);var L=nn(i,h+1,3);if(h+=3,L)if(L==1)g=Kp,x=Qp,b=9,_=5;else if(L==2){var U=nn(i,h,31)+257,O=nn(i,h+10,15)+4,H=U+nn(i,h+5,31)+1;h+=14;for(var T=new Zt(H),M=new Zt(19),N=0;N<O;++N)M[Zp[N]]=nn(i,h+N*3,7);h+=O*3;for(var $=ko(M),Y=(1<<$)-1,Q=Cr(M,$,1),N=0;N<H;){var le=Q[nn(i,h,Y)];h+=le&15;var R=le>>4;if(R<16)T[N++]=R;else{var K=0,ce=0;for(R==16?(ce=3+nn(i,h,3),h+=2,K=T[N-1]):R==17?(ce=3+nn(i,h,7),h+=3):R==18&&(ce=11+nn(i,h,127),h+=7);ce--;)T[N++]=K}}var J=T.subarray(0,U),pe=T.subarray(U);b=ko(J),_=ko(pe),g=Cr(J,b,1),x=Cr(pe,_,1)}else rn(1);else{var R=jp(h)+4,w=i[R-4]|i[R-3]<<8,z=R+w;if(z>r){c&&rn(0);break}o&&l(m+w),t.set(i.subarray(R,z),m),e.b=m+=w,e.p=h=z*8,e.f=u;continue}if(h>p){c&&rn(0);break}}o&&l(m+131072);for(var ge=(1<<b)-1,Ce=(1<<_)-1,Be=h;;Be=h){var K=g[Vo(i,h)&ge],Ye=K>>4;if(h+=K&15,h>p){c&&rn(0);break}if(K||rn(2),Ye<256)t[m++]=Ye;else if(Ye==256){Be=h,g=null;break}else{var j=Ye-254;if(Ye>264){var N=Ye-257,ue=Rc[N];j=nn(i,h,(1<<ue)-1)+Dc[N],h+=ue}var fe=x[Vo(i,h)&Ce],me=fe>>4;fe||rn(3),h+=fe&15;var pe=$p[me];if(me>3){var ue=Ic[me];pe+=Vo(i,h)&(1<<ue)-1,h+=ue}if(h>p){c&&rn(0);break}o&&l(m+131072);var Re=m+j;if(m<pe){var Ze=s-pe,ze=Math.min(pe,Re);for(Ze+m<0&&rn(3);m<ze;++m)t[m]=n[Ze+m]}for(;m<Re;++m)t[m]=t[m-pe]}}e.l=g,e.p=Be,e.b=m,e.f=u,g&&(u=1,e.m=b,e.d=x,e.n=_)}while(!u);return m!=t.length&&a?em(t,0,m):t.subarray(0,m)};var im=new Zt(0);var rm=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&rn(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&rn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Ir(i,e){return nm(i.subarray(rm(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var sm=typeof TextDecoder<"u"&&new TextDecoder,am=0;try{sm.decode(im,{stream:!0}),am=1}catch{}var Ma=class extends mr{constructor(e){super(e),this.type=en}parse(e){let T=Math.pow(2.7182818,2.2);function M(f,y){let I=0;for(let S=0;S<65536;++S)(S==0||f[S>>3]&1<<(S&7))&&(y[I++]=S);let d=I-1;for(;I<65536;)y[I++]=0;return d}function N(f){for(let y=0;y<16384;y++)f[y]={},f[y].len=0,f[y].lit=0,f[y].p=null}let $={l:0,c:0,lc:0};function Y(f,y,I,d,S){for(;I<f;)y=y<<8|Se(d,S),I+=8;I-=f,$.l=y>>I&(1<<f)-1,$.c=y,$.lc=I}let Q=new Array(59);function le(f){for(let I=0;I<=58;++I)Q[I]=0;for(let I=0;I<65537;++I)Q[f[I]]+=1;let y=0;for(let I=58;I>0;--I){let d=y+Q[I]>>1;Q[I]=y,y=d}for(let I=0;I<65537;++I){let d=f[I];d>0&&(f[I]=d|Q[d]++<<6)}}function K(f,y,I,d,S,E){let P=y,C=0,F=0;for(;d<=S;d++){if(P.value-y.value>I)return!1;Y(6,C,F,f,P);let k=$.l;if(C=$.c,F=$.lc,E[d]=k,k==63){if(P.value-y.value>I)throw new Error("Something wrong with hufUnpackEncTable");Y(8,C,F,f,P);let V=$.l+6;if(C=$.c,F=$.lc,d+V>S+1)throw new Error("Something wrong with hufUnpackEncTable");for(;V--;)E[d++]=0;d--}else if(k>=59){let V=k-59+2;if(d+V>S+1)throw new Error("Something wrong with hufUnpackEncTable");for(;V--;)E[d++]=0;d--}}le(E)}function ce(f){return f&63}function J(f){return f>>6}function pe(f,y,I,d){for(;y<=I;y++){let S=J(f[y]),E=ce(f[y]);if(S>>E)throw new Error("Invalid table entry");if(E>14){let P=d[S>>E-14];if(P.len)throw new Error("Invalid table entry");if(P.lit++,P.p){let C=P.p;P.p=new Array(P.lit);for(let F=0;F<P.lit-1;++F)P.p[F]=C[F]}else P.p=new Array(1);P.p[P.lit-1]=y}else if(E){let P=0;for(let C=1<<14-E;C>0;C--){let F=d[(S<<14-E)+P];if(F.len||F.p)throw new Error("Invalid table entry");F.len=E,F.lit=y,P++}}}return!0}let ge={c:0,lc:0};function Ce(f,y,I,d){f=f<<8|Se(I,d),y+=8,ge.c=f,ge.lc=y}let Be={c:0,lc:0};function Ye(f,y,I,d,S,E,P,C,F){if(f==y){d<8&&(Ce(I,d,S,E),I=ge.c,d=ge.lc),d-=8;let k=I>>d;if(k=new Uint8Array([k])[0],C.value+k>F)return!1;let V=P[C.value-1];for(;k-- >0;)P[C.value++]=V}else if(C.value<F)P[C.value++]=f;else return!1;Be.c=I,Be.lc=d}function j(f){return f&65535}function ue(f){let y=j(f);return y>32767?y-65536:y}let fe={a:0,b:0};function me(f,y){let I=ue(f),S=ue(y),E=I+(S&1)+(S>>1),P=E,C=E-S;fe.a=P,fe.b=C}function Re(f,y){let I=j(f),d=j(y),S=I-(d>>1)&65535,E=d+S-32768&65535;fe.a=E,fe.b=S}function Ze(f,y,I,d,S,E,P){let C=P<16384,F=I>S?S:I,k=1,V,q;for(;k<=F;)k<<=1;for(k>>=1,V=k,k>>=1;k>=1;){q=0;let ne=q+E*(S-V),te=E*k,se=E*V,oe=d*k,he=d*V,we,Fe,De,Ee;for(;q<=ne;q+=se){let Ge=q,Te=q+d*(I-V);for(;Ge<=Te;Ge+=he){let rt=Ge+oe,vt=Ge+te,nt=vt+oe;C?(me(f[Ge+y],f[vt+y]),we=fe.a,De=fe.b,me(f[rt+y],f[nt+y]),Fe=fe.a,Ee=fe.b,me(we,Fe),f[Ge+y]=fe.a,f[rt+y]=fe.b,me(De,Ee),f[vt+y]=fe.a,f[nt+y]=fe.b):(Re(f[Ge+y],f[vt+y]),we=fe.a,De=fe.b,Re(f[rt+y],f[nt+y]),Fe=fe.a,Ee=fe.b,Re(we,Fe),f[Ge+y]=fe.a,f[rt+y]=fe.b,Re(De,Ee),f[vt+y]=fe.a,f[nt+y]=fe.b)}if(I&k){let rt=Ge+te;C?me(f[Ge+y],f[rt+y]):Re(f[Ge+y],f[rt+y]),we=fe.a,f[rt+y]=fe.b,f[Ge+y]=we}}if(S&k){let Ge=q,Te=q+d*(I-V);for(;Ge<=Te;Ge+=he){let rt=Ge+oe;C?me(f[Ge+y],f[rt+y]):Re(f[Ge+y],f[rt+y]),we=fe.a,f[rt+y]=fe.b,f[Ge+y]=we}}V=k,k>>=1}return q}function ze(f,y,I,d,S,E,P,C,F){let k=0,V=0,q=P,ne=Math.trunc(d.value+(S+7)/8);for(;d.value<ne;)for(Ce(k,V,I,d),k=ge.c,V=ge.lc;V>=14;){let se=k>>V-14&16383,oe=y[se];if(oe.len)V-=oe.len,Ye(oe.lit,E,k,V,I,d,C,F,q),k=Be.c,V=Be.lc;else{if(!oe.p)throw new Error("hufDecode issues");let he;for(he=0;he<oe.lit;he++){let we=ce(f[oe.p[he]]);for(;V<we&&d.value<ne;)Ce(k,V,I,d),k=ge.c,V=ge.lc;if(V>=we&&J(f[oe.p[he]])==(k>>V-we&(1<<we)-1)){V-=we,Ye(oe.p[he],E,k,V,I,d,C,F,q),k=Be.c,V=Be.lc;break}}if(he==oe.lit)throw new Error("hufDecode issues")}}let te=8-S&7;for(k>>=te,V-=te;V>0;){let se=y[k<<14-V&16383];if(se.len)V-=se.len,Ye(se.lit,E,k,V,I,d,C,F,q),k=Be.c,V=Be.lc;else throw new Error("hufDecode issues")}return!0}function ct(f,y,I,d,S,E){let P={value:0},C=I.value,F=Pe(y,I),k=Pe(y,I);I.value+=4;let V=Pe(y,I);if(I.value+=4,F<0||F>=65537||k<0||k>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let q=new Array(65537),ne=new Array(16384);N(ne);let te=d-(I.value-C);if(K(f,I,te,F,k,q),V>8*(d-(I.value-C)))throw new Error("Something wrong with hufUncompress");pe(q,F,k,ne),ze(q,ne,f,I,V,k,E,S,P)}function ot(f,y,I){for(let d=0;d<I;++d)y[d]=f[y[d]]}function Xe(f){for(let y=1;y<f.length;y++){let I=f[y-1]+f[y]-128;f[y]=I}}function D(f,y){let I=0,d=Math.floor((f.length+1)/2),S=0,E=f.length-1;for(;!(S>E||(y[S++]=f[I++],S>E));)y[S++]=f[d++]}function Pt(f){let y=f.byteLength,I=new Array,d=0,S=new DataView(f);for(;y>0;){let E=S.getInt8(d++);if(E<0){let P=-E;y-=P+1;for(let C=0;C<P;C++)I.push(S.getUint8(d++))}else{let P=E;y-=2;let C=S.getUint8(d++);for(let F=0;F<P+1;F++)I.push(C)}}return I}function Ke(f,y,I,d,S,E){let P=new DataView(E.buffer),C=I[f.idx[0]].width,F=I[f.idx[0]].height,k=3,V=Math.floor(C/8),q=Math.ceil(C/8),ne=Math.ceil(F/8),te=C-(q-1)*8,se=F-(ne-1)*8,oe={value:0},he=new Array(k),we=new Array(k),Fe=new Array(k),De=new Array(k),Ee=new Array(k);for(let Te=0;Te<k;++Te)Ee[Te]=y[f.idx[Te]],he[Te]=Te<1?0:he[Te-1]+q*ne,we[Te]=new Float32Array(64),Fe[Te]=new Uint16Array(64),De[Te]=new Uint16Array(q*64);for(let Te=0;Te<ne;++Te){let rt=8;Te==ne-1&&(rt=se);let vt=8;for(let je=0;je<q;++je){je==q-1&&(vt=te);for(let Oe=0;Oe<k;++Oe)Fe[Oe].fill(0),Fe[Oe][0]=S[he[Oe]++],Je(oe,d,Fe[Oe]),Ue(Fe[Oe],we[Oe]),ht(we[Oe]);k==3&&Le(we);for(let Oe=0;Oe<k;++Oe)A(we[Oe],De[Oe],je*64)}let nt=0;for(let je=0;je<k;++je){let Oe=I[f.idx[je]].type;for(let pt=8*Te;pt<8*Te+rt;++pt){nt=Ee[je][pt];for(let bt=0;bt<V;++bt){let ut=bt*64+(pt&7)*8;P.setUint16(nt+0*2*Oe,De[je][ut+0],!0),P.setUint16(nt+1*2*Oe,De[je][ut+1],!0),P.setUint16(nt+2*2*Oe,De[je][ut+2],!0),P.setUint16(nt+3*2*Oe,De[je][ut+3],!0),P.setUint16(nt+4*2*Oe,De[je][ut+4],!0),P.setUint16(nt+5*2*Oe,De[je][ut+5],!0),P.setUint16(nt+6*2*Oe,De[je][ut+6],!0),P.setUint16(nt+7*2*Oe,De[je][ut+7],!0),nt+=8*2*Oe}}if(V!=q)for(let pt=8*Te;pt<8*Te+rt;++pt){let bt=Ee[je][pt]+8*V*2*Oe,ut=V*64+(pt&7)*8;for(let xt=0;xt<vt;++xt)P.setUint16(bt+xt*2*Oe,De[je][ut+xt],!0)}}}let Ge=new Uint16Array(C);P=new DataView(E.buffer);for(let Te=0;Te<k;++Te){I[f.idx[Te]].decoded=!0;let rt=I[f.idx[Te]].type;if(I[Te].type==2)for(let vt=0;vt<F;++vt){let nt=Ee[Te][vt];for(let je=0;je<C;++je)Ge[je]=P.getUint16(nt+je*2*rt,!0);for(let je=0;je<C;++je)P.setFloat32(nt+je*2*rt,X(Ge[je]),!0)}}}function Je(f,y,I){let d,S=1;for(;S<64;)d=y[f.value],d==65280?S=64:d>>8==255?S+=d&255:(I[S]=d,S++),f.value++}function Ue(f,y){y[0]=X(f[0]),y[1]=X(f[1]),y[2]=X(f[5]),y[3]=X(f[6]),y[4]=X(f[14]),y[5]=X(f[15]),y[6]=X(f[27]),y[7]=X(f[28]),y[8]=X(f[2]),y[9]=X(f[4]),y[10]=X(f[7]),y[11]=X(f[13]),y[12]=X(f[16]),y[13]=X(f[26]),y[14]=X(f[29]),y[15]=X(f[42]),y[16]=X(f[3]),y[17]=X(f[8]),y[18]=X(f[12]),y[19]=X(f[17]),y[20]=X(f[25]),y[21]=X(f[30]),y[22]=X(f[41]),y[23]=X(f[43]),y[24]=X(f[9]),y[25]=X(f[11]),y[26]=X(f[18]),y[27]=X(f[24]),y[28]=X(f[31]),y[29]=X(f[40]),y[30]=X(f[44]),y[31]=X(f[53]),y[32]=X(f[10]),y[33]=X(f[19]),y[34]=X(f[23]),y[35]=X(f[32]),y[36]=X(f[39]),y[37]=X(f[45]),y[38]=X(f[52]),y[39]=X(f[54]),y[40]=X(f[20]),y[41]=X(f[22]),y[42]=X(f[33]),y[43]=X(f[38]),y[44]=X(f[46]),y[45]=X(f[51]),y[46]=X(f[55]),y[47]=X(f[60]),y[48]=X(f[21]),y[49]=X(f[34]),y[50]=X(f[37]),y[51]=X(f[47]),y[52]=X(f[50]),y[53]=X(f[56]),y[54]=X(f[59]),y[55]=X(f[61]),y[56]=X(f[35]),y[57]=X(f[36]),y[58]=X(f[48]),y[59]=X(f[49]),y[60]=X(f[57]),y[61]=X(f[58]),y[62]=X(f[62]),y[63]=X(f[63])}function ht(f){let y=.5*Math.cos(.7853975),I=.5*Math.cos(3.14159/16),d=.5*Math.cos(3.14159/8),S=.5*Math.cos(3*3.14159/16),E=.5*Math.cos(5*3.14159/16),P=.5*Math.cos(3*3.14159/8),C=.5*Math.cos(7*3.14159/16),F=new Array(4),k=new Array(4),V=new Array(4),q=new Array(4);for(let ne=0;ne<8;++ne){let te=ne*8;F[0]=d*f[te+2],F[1]=P*f[te+2],F[2]=d*f[te+6],F[3]=P*f[te+6],k[0]=I*f[te+1]+S*f[te+3]+E*f[te+5]+C*f[te+7],k[1]=S*f[te+1]-C*f[te+3]-I*f[te+5]-E*f[te+7],k[2]=E*f[te+1]-I*f[te+3]+C*f[te+5]+S*f[te+7],k[3]=C*f[te+1]-E*f[te+3]+S*f[te+5]-I*f[te+7],V[0]=y*(f[te+0]+f[te+4]),V[3]=y*(f[te+0]-f[te+4]),V[1]=F[0]+F[3],V[2]=F[1]-F[2],q[0]=V[0]+V[1],q[1]=V[3]+V[2],q[2]=V[3]-V[2],q[3]=V[0]-V[1],f[te+0]=q[0]+k[0],f[te+1]=q[1]+k[1],f[te+2]=q[2]+k[2],f[te+3]=q[3]+k[3],f[te+4]=q[3]-k[3],f[te+5]=q[2]-k[2],f[te+6]=q[1]-k[1],f[te+7]=q[0]-k[0]}for(let ne=0;ne<8;++ne)F[0]=d*f[16+ne],F[1]=P*f[16+ne],F[2]=d*f[48+ne],F[3]=P*f[48+ne],k[0]=I*f[8+ne]+S*f[24+ne]+E*f[40+ne]+C*f[56+ne],k[1]=S*f[8+ne]-C*f[24+ne]-I*f[40+ne]-E*f[56+ne],k[2]=E*f[8+ne]-I*f[24+ne]+C*f[40+ne]+S*f[56+ne],k[3]=C*f[8+ne]-E*f[24+ne]+S*f[40+ne]-I*f[56+ne],V[0]=y*(f[ne]+f[32+ne]),V[3]=y*(f[ne]-f[32+ne]),V[1]=F[0]+F[3],V[2]=F[1]-F[2],q[0]=V[0]+V[1],q[1]=V[3]+V[2],q[2]=V[3]-V[2],q[3]=V[0]-V[1],f[0+ne]=q[0]+k[0],f[8+ne]=q[1]+k[1],f[16+ne]=q[2]+k[2],f[24+ne]=q[3]+k[3],f[32+ne]=q[3]-k[3],f[40+ne]=q[2]-k[2],f[48+ne]=q[1]-k[1],f[56+ne]=q[0]-k[0]}function Le(f){for(let y=0;y<64;++y){let I=f[0][y],d=f[1][y],S=f[2][y];f[0][y]=I+1.5747*S,f[1][y]=I-.1873*d-.4682*S,f[2][y]=I+1.8556*d}}function A(f,y,I){for(let d=0;d<64;++d)y[I+d]=Ii.toHalfFloat(v(f[d]))}function v(f){return f<=1?Math.sign(f)*Math.pow(Math.abs(f),2.2):Math.sign(f)*Math.pow(T,Math.abs(f)-1)}function G(f){return new DataView(f.array.buffer,f.offset.value,f.size)}function ie(f){let y=f.viewer.buffer.slice(f.offset.value,f.offset.value+f.size),I=new Uint8Array(Pt(y)),d=new Uint8Array(I.length);return Xe(I),D(I,d),new DataView(d.buffer)}function ae(f){let y=f.array.slice(f.offset.value,f.offset.value+f.size),I=Ir(y),d=new Uint8Array(I.length);return Xe(I),D(I,d),new DataView(d.buffer)}function ee(f){let y=f.viewer,I={value:f.offset.value},d=new Uint16Array(f.columns*f.lines*(f.inputChannels.length*f.type)),S=new Uint8Array(8192),E=0,P=new Array(f.inputChannels.length);for(let se=0,oe=f.inputChannels.length;se<oe;se++)P[se]={},P[se].start=E,P[se].end=P[se].start,P[se].nx=f.columns,P[se].ny=f.lines,P[se].size=f.type,E+=P[se].nx*P[se].ny*P[se].size;let C=Z(y,I),F=Z(y,I);if(F>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(C<=F)for(let se=0;se<F-C+1;se++)S[se+C]=ke(y,I);let k=new Uint16Array(65536),V=M(S,k),q=Pe(y,I);ct(f.array,y,I,q,d,E);for(let se=0;se<f.inputChannels.length;++se){let oe=P[se];for(let he=0;he<P[se].size;++he)Ze(d,oe.start+he,oe.nx,oe.size,oe.ny,oe.nx*oe.size,V)}ot(k,d,E);let ne=0,te=new Uint8Array(d.buffer.byteLength);for(let se=0;se<f.lines;se++)for(let oe=0;oe<f.inputChannels.length;oe++){let he=P[oe],we=he.nx*he.size,Fe=new Uint8Array(d.buffer,he.end*2,we*2);te.set(Fe,ne),ne+=we*2,he.end+=we}return new DataView(te.buffer)}function Ie(f){let y=f.array.slice(f.offset.value,f.offset.value+f.size),I=Ir(y),d=f.inputChannels.length*f.lines*f.columns*f.totalBytes,S=new ArrayBuffer(d),E=new DataView(S),P=0,C=0,F=new Array(4);for(let k=0;k<f.lines;k++)for(let V=0;V<f.inputChannels.length;V++){let q=0;switch(f.inputChannels[V].pixelType){case 1:F[0]=P,F[1]=F[0]+f.columns,P=F[1]+f.columns;for(let te=0;te<f.columns;++te){let se=I[F[0]++]<<8|I[F[1]++];q+=se,E.setUint16(C,q,!0),C+=2}break;case 2:F[0]=P,F[1]=F[0]+f.columns,F[2]=F[1]+f.columns,P=F[2]+f.columns;for(let te=0;te<f.columns;++te){let se=I[F[0]++]<<24|I[F[1]++]<<16|I[F[2]++]<<8;q+=se,E.setUint32(C,q,!0),C+=4}break}}return E}function ve(f){let y=f.viewer,I={value:f.offset.value},d=new Uint8Array(f.columns*f.lines*(f.inputChannels.length*f.type*2)),S={version:Ne(y,I),unknownUncompressedSize:Ne(y,I),unknownCompressedSize:Ne(y,I),acCompressedSize:Ne(y,I),dcCompressedSize:Ne(y,I),rleCompressedSize:Ne(y,I),rleUncompressedSize:Ne(y,I),rleRawSize:Ne(y,I),totalAcUncompressedCount:Ne(y,I),totalDcUncompressedCount:Ne(y,I),acCompression:Ne(y,I)};if(S.version<2)throw new Error("EXRLoader.parse: "+gn.compression+" version "+S.version+" is unsupported");let E=new Array,P=Z(y,I)-2;for(;P>0;){let oe=Me(y.buffer,I),he=ke(y,I),we=he>>2&3,Fe=(he>>4)-1,De=new Int8Array([Fe])[0],Ee=ke(y,I);E.push({name:oe,index:De,type:Ee,compression:we}),P-=oe.length+3}let C=gn.channels,F=new Array(f.inputChannels.length);for(let oe=0;oe<f.inputChannels.length;++oe){let he=F[oe]={},we=C[oe];he.name=we.name,he.compression=0,he.decoded=!1,he.type=we.pixelType,he.pLinear=we.pLinear,he.width=f.columns,he.height=f.lines}let k={idx:new Array(3)};for(let oe=0;oe<f.inputChannels.length;++oe){let he=F[oe];for(let we=0;we<E.length;++we){let Fe=E[we];he.name==Fe.name&&(he.compression=Fe.compression,Fe.index>=0&&(k.idx[Fe.index]=oe),he.offset=oe)}}let V,q,ne;if(S.acCompressedSize>0)switch(S.acCompression){case 0:V=new Uint16Array(S.totalAcUncompressedCount),ct(f.array,y,I,S.acCompressedSize,V,S.totalAcUncompressedCount);break;case 1:let oe=f.array.slice(I.value,I.value+S.totalAcUncompressedCount),he=Ir(oe);V=new Uint16Array(he.buffer),I.value+=S.totalAcUncompressedCount;break}if(S.dcCompressedSize>0){let oe={array:f.array,offset:I,size:S.dcCompressedSize};q=new Uint16Array(ae(oe).buffer),I.value+=S.dcCompressedSize}if(S.rleRawSize>0){let oe=f.array.slice(I.value,I.value+S.rleCompressedSize),he=Ir(oe);ne=Pt(he.buffer),I.value+=S.rleCompressedSize}let te=0,se=new Array(F.length);for(let oe=0;oe<se.length;++oe)se[oe]=new Array;for(let oe=0;oe<f.lines;++oe)for(let he=0;he<F.length;++he)se[he].push(te),te+=F[he].width*f.type*2;Ke(k,se,F,V,q,d);for(let oe=0;oe<F.length;++oe){let he=F[oe];if(!he.decoded)switch(he.compression){case 2:let we=0,Fe=0;for(let De=0;De<f.lines;++De){let Ee=se[oe][we];for(let Ge=0;Ge<he.width;++Ge){for(let Te=0;Te<2*he.type;++Te)d[Ee++]=ne[Fe+Te*he.width*he.height];Fe++}we++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(d.buffer)}function Me(f,y){let I=new Uint8Array(f),d=0;for(;I[y.value+d]!=0;)d+=1;let S=new TextDecoder().decode(I.slice(y.value,y.value+d));return y.value=y.value+d+1,S}function Qe(f,y,I){let d=new TextDecoder().decode(new Uint8Array(f).slice(y.value,y.value+I));return y.value=y.value+I,d}function de(f,y){let I=Ae(f,y),d=Pe(f,y);return[I,d]}function be(f,y){let I=Pe(f,y),d=Pe(f,y);return[I,d]}function Ae(f,y){let I=f.getInt32(y.value,!0);return y.value=y.value+4,I}function Pe(f,y){let I=f.getUint32(y.value,!0);return y.value=y.value+4,I}function Se(f,y){let I=f[y.value];return y.value=y.value+1,I}function ke(f,y){let I=f.getUint8(y.value);return y.value=y.value+1,I}let Ne=function(f,y){let I;return"getBigInt64"in DataView.prototype?I=Number(f.getBigInt64(y.value,!0)):I=f.getUint32(y.value+4,!0)+Number(f.getUint32(y.value,!0)<<32),y.value+=8,I};function Ve(f,y){let I=f.getFloat32(y.value,!0);return y.value+=4,I}function B(f,y){return Ii.toHalfFloat(Ve(f,y))}function X(f){let y=(f&31744)>>10,I=f&1023;return(f>>15?-1:1)*(y?y===31?I?NaN:1/0:Math.pow(2,y-15)*(1+I/1024):6103515625e-14*(I/1024))}function Z(f,y){let I=f.getUint16(y.value,!0);return y.value+=2,I}function re(f,y){return X(Z(f,y))}function ye(f,y,I,d){let S=I.value,E=[];for(;I.value<S+d-1;){let P=Me(y,I),C=Ae(f,I),F=ke(f,I);I.value+=3;let k=Ae(f,I),V=Ae(f,I);E.push({name:P,pixelType:C,pLinear:F,xSampling:k,ySampling:V})}return I.value+=1,E}function xe(f,y){let I=Ve(f,y),d=Ve(f,y),S=Ve(f,y),E=Ve(f,y),P=Ve(f,y),C=Ve(f,y),F=Ve(f,y),k=Ve(f,y);return{redX:I,redY:d,greenX:S,greenY:E,blueX:P,blueY:C,whiteX:F,whiteY:k}}function He(f,y){let I=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],d=ke(f,y);return I[d]}function dt(f,y){let I=Ae(f,y),d=Ae(f,y),S=Ae(f,y),E=Ae(f,y);return{xMin:I,yMin:d,xMax:S,yMax:E}}function St(f,y){let I=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],d=ke(f,y);return I[d]}function it(f,y){let I=["ENVMAP_LATLONG","ENVMAP_CUBE"],d=ke(f,y);return I[d]}function kt(f,y){let I=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],d=["ROUND_DOWN","ROUND_UP"],S=Pe(f,y),E=Pe(f,y),P=ke(f,y);return{xSize:S,ySize:E,levelMode:I[P&15],roundingMode:d[P>>4]}}function Jt(f,y){let I=Ve(f,y),d=Ve(f,y);return[I,d]}function Pr(f,y){let I=Ve(f,y),d=Ve(f,y),S=Ve(f,y);return[I,d,S]}function Lr(f,y,I,d,S){if(d==="string"||d==="stringvector"||d==="iccProfile")return Qe(y,I,S);if(d==="chlist")return ye(f,y,I,S);if(d==="chromaticities")return xe(f,I);if(d==="compression")return He(f,I);if(d==="box2i")return dt(f,I);if(d==="envmap")return it(f,I);if(d==="tiledesc")return kt(f,I);if(d==="lineOrder")return St(f,I);if(d==="float")return Ve(f,I);if(d==="v2f")return Jt(f,I);if(d==="v3f")return Pr(f,I);if(d==="int")return Ae(f,I);if(d==="rational")return de(f,I);if(d==="timecode")return be(f,I);if(d==="preview")return I.value+=S,"skipped";I.value+=S}function mn(f,y){let I=Math.log2(f);return y=="ROUND_DOWN"?Math.floor(I):Math.ceil(I)}function Xi(f,y,I){let d=0;switch(f.levelMode){case"ONE_LEVEL":d=1;break;case"MIPMAP_LEVELS":d=mn(Math.max(y,I),f.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return d}function qi(f,y,I,d){let S=new Array(f);for(let E=0;E<f;E++){let P=1<<E,C=y/P|0;d=="ROUND_UP"&&C*P<y&&(C+=1);let F=Math.max(C,1);S[E]=(F+I-1)/I|0}return S}function Dr(){let f=this,y=f.offset,I={value:0};for(let d=0;d<f.tileCount;d++){let S=Ae(f.viewer,y),E=Ae(f.viewer,y);y.value+=8,f.size=Pe(f.viewer,y);let P=S*f.blockWidth,C=E*f.blockHeight;f.columns=P+f.blockWidth>f.width?f.width-P:f.blockWidth,f.lines=C+f.blockHeight>f.height?f.height-C:f.blockHeight;let F=f.columns*f.totalBytes,V=f.size<f.lines*F?f.uncompress(f):G(f);y.value+=f.size;for(let q=0;q<f.lines;q++){let ne=q*f.columns*f.totalBytes;for(let te=0;te<f.inputChannels.length;te++){let se=gn.channels[te].name,oe=f.channelByteOffsets[se]*f.columns,he=f.decodeChannels[se];if(he===void 0)continue;I.value=ne+oe;let we=(f.height-(1+C+q))*f.outLineWidth;for(let Fe=0;Fe<f.columns;Fe++){let De=we+(Fe+P)*f.outputChannels+he;f.byteArray[De]=f.getter(V,I)}}}}}function fi(){let f=this,y=f.offset,I={value:0};for(let d=0;d<f.height/f.blockHeight;d++){let S=Ae(f.viewer,y)-gn.dataWindow.yMin;f.size=Pe(f.viewer,y),f.lines=S+f.blockHeight>f.height?f.height-S:f.blockHeight;let E=f.columns*f.totalBytes,C=f.size<f.lines*E?f.uncompress(f):G(f);y.value+=f.size;for(let F=0;F<f.blockHeight;F++){let k=d*f.blockHeight,V=F+f.scanOrder(k);if(V>=f.height)continue;let q=F*E,ne=(f.height-1-V)*f.outLineWidth;for(let te=0;te<f.inputChannels.length;te++){let se=gn.channels[te].name,oe=f.channelByteOffsets[se]*f.columns,he=f.decodeChannels[se];if(he!==void 0){I.value=q+oe;for(let we=0;we<f.columns;we++){let Fe=ne+we*f.outputChannels+he;f.byteArray[Fe]=f.getter(C,I)}}}}}}function Ur(f,y,I){let d={};if(f.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");d.version=f.getUint8(4);let S=f.getUint8(5);d.spec={singleTile:!!(S&2),longName:!!(S&4),deepFormat:!!(S&8),multiPart:!!(S&16)},I.value=8;let E=!0;for(;E;){let P=Me(y,I);if(P==="")E=!1;else{let C=Me(y,I),F=Pe(f,I),k=Lr(f,y,I,C,F);k===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${C}'.`):d[P]=k}}if(S&-7)throw console.error("THREE.EXRHeader:",d),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return d}function di(f,y,I,d,S){let E={size:0,viewer:y,array:I,offset:d,width:f.dataWindow.xMax-f.dataWindow.xMin+1,height:f.dataWindow.yMax-f.dataWindow.yMin+1,inputChannels:f.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Xt};switch(f.compression){case"NO_COMPRESSION":E.blockHeight=1,E.uncompress=G;break;case"RLE_COMPRESSION":E.blockHeight=1,E.uncompress=ie;break;case"ZIPS_COMPRESSION":E.blockHeight=1,E.uncompress=ae;break;case"ZIP_COMPRESSION":E.blockHeight=16,E.uncompress=ae;break;case"PIZ_COMPRESSION":E.blockHeight=32,E.uncompress=ee;break;case"PXR24_COMPRESSION":E.blockHeight=16,E.uncompress=Ie;break;case"DWAA_COMPRESSION":E.blockHeight=32,E.uncompress=ve;break;case"DWAB_COMPRESSION":E.blockHeight=256,E.uncompress=ve;break;default:throw new Error("EXRLoader.parse: "+f.compression+" is unsupported")}let P={};for(let V of f.channels)switch(V.name){case"Y":case"R":case"G":case"B":case"A":P[V.name]=!0,E.type=V.pixelType}let C=!1;if(P.R&&P.G&&P.B)C=!P.A,E.outputChannels=4,E.decodeChannels={R:0,G:1,B:2,A:3};else if(P.Y)E.outputChannels=1,E.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(E.type==1)switch(S){case Bt:E.getter=re;break;case en:E.getter=Z;break}else if(E.type==2)switch(S){case Bt:E.getter=Ve;break;case en:E.getter=B}else throw new Error("EXRLoader.parse: unsupported pixelType "+E.type+" for "+f.compression+".");E.columns=E.width;let F=E.width*E.height*E.outputChannels;switch(S){case Bt:E.byteArray=new Float32Array(F),C&&E.byteArray.fill(1,0,F);break;case en:E.byteArray=new Uint16Array(F),C&&E.byteArray.fill(15360,0,F);break;default:console.error("THREE.EXRLoader: unsupported type: ",S);break}let k=0;for(let V of f.channels)E.decodeChannels[V.name]!==void 0&&(E.channelByteOffsets[V.name]=k),k+=V.pixelType*2;if(E.totalBytes=k,E.outLineWidth=E.width*E.outputChannels,f.lineOrder==="INCREASING_Y"?E.scanOrder=V=>V:E.scanOrder=V=>E.height-1-V,E.outputChannels==4?(E.format=zt,E.colorSpace=Xt):(E.format=xr,E.colorSpace=tn),f.spec.singleTile){E.blockHeight=f.tiles.ySize,E.blockWidth=f.tiles.xSize;let V=Xi(f.tiles,E.width,E.height),q=qi(V,E.width,f.tiles.xSize,f.tiles.roundingMode),ne=qi(V,E.height,f.tiles.ySize,f.tiles.roundingMode);E.tileCount=q[0]*ne[0];for(let te=0;te<V;te++)for(let se=0;se<ne[te];se++)for(let oe=0;oe<q[te];oe++)Ne(y,d);E.decode=Dr.bind(E)}else{E.blockWidth=E.width;let V=Math.ceil(E.height/E.blockHeight);for(let q=0;q<V;q++)Ne(y,d);E.decode=fi.bind(E)}return E}let Yi={value:0},Zi=new DataView(e),ba=new Uint8Array(e),gn=Ur(Zi,e,Yi),Dn=di(gn,Zi,ba,Yi,this.type);return Dn.decode(),{header:gn,width:Dn.width,height:Dn.height,data:Dn.byteArray,format:Dn.format,colorSpace:Dn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=Tt,a.magFilter=Tt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,n,r)}};var Sa=new hr,Wi=new Rt(75,window.innerWidth/window.innerHeight,.1,2e3);Wi.position.z=0;Wi.layers.enable(0);var sn=new xa({antialias:!0});sn.setSize(window.innerWidth,window.innerHeight);sn.setPixelRatio(window.devicePixelRatio);sn.outputEncoding=Lt;document.body.appendChild(sn.domElement);var Fc=new Ma;Fc.load("vr/day/TBEXR/0000_L.exr",i=>{i.mapping=ai,i.colorSpace=Xt;let e=new Di(500,60,40),t=new Gn({map:i,side:wt}),n=new Dt(e,t);n.layers.set(1),Sa.add(n)});Fc.load("vr/day/TBEXR/0000_R.exr",i=>{i.mapping=ai,i.colorSpace=Xt;let e=new Di(500,60,40),t=new Gn({map:i,side:wt}),n=new Dt(e,t);n.layers.set(2),Sa.add(n)});var lm=new gr(16777215,4473924,1);Sa.add(lm);sn.xr.enabled=!0;document.body.appendChild(Hi.createButton(sn));sn.xr.addEventListener("sessionstart",()=>{let i=sn.xr.getCamera(Wi);if(i&&i.cameras&&i.cameras.length>=2){let[e,t]=i.cameras;e.layers.set(1),t.layers.set(2)}});window.addEventListener("resize",()=>{Wi.aspect=window.innerWidth/window.innerHeight,Wi.updateProjectionMatrix(),sn.setSize(window.innerWidth,window.innerHeight)});function cm(){sn.setAnimationLoop(()=>{sn.render(Sa,Wi)})}cm();})();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/
//# sourceMappingURL=debug.js.map
