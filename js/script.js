!function(e){function t(t){for(var i,o,s=t[0],c=t[1],u=t[2],l=0,h=[];l<s.length;l++)o=s[l],r[o]&&h.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(f&&f(t);h.length;)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={0:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var f=c;a.push([7,1]),n()}([,,,function(e,t,n){"use strict";(function(e){function i(){var t=navigator.userAgent.toLowerCase(),n=navigator.appVersion.toLowerCase(),i="",r="";i=-1!==t.indexOf("iphone")?"iphone":-1!==t.indexOf("ipad")?"ipad":-1!==t.indexOf("android")?"android":-1!==t.indexOf("win")?"windows":-1!==t.indexOf("mac")?"mac":"unknown",r=-1!==t.indexOf("msie")?-1!==n.indexOf("msie 9.")?"ie9":-1!==n.indexOf("msie 10.")?"ie10":"ie":-1!==t.indexOf("trident/7")?"ie11":-1!==t.indexOf("edge")?"edge":-1!==t.indexOf("chrome")?"chrome":-1!==t.indexOf("safari")?"safari":-1!==t.indexOf("firefox")?"firefox":"unknown",e("body").addClass([i,r].join(" "))}n.d(t,"a",function(){return i})}).call(this,n(1))},,,function(e,t,n){"use strict";var i=n(0);
/*!
 * VERSION: 0.2.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/i.e._gsDefine("easing.CustomEase",["easing.Ease"],function(){var e=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,t=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,n=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,r=/[cLlsS]/g,a="CustomEase only accepts Cubic Bezier data.",o=function e(t,n,i,r,a,o,s,c,u,f,l){var h,d=(t+i)/2,p=(n+r)/2,x=(i+a)/2,g=(r+o)/2,v=(a+s)/2,y=(o+c)/2,O=(d+x)/2,m=(p+g)/2,b=(x+v)/2,w=(g+y)/2,M=(O+b)/2,E=(m+w)/2,I=s-t,C=c-n,k=Math.abs((i-s)*C-(r-c)*I),D=Math.abs((a-s)*C-(o-c)*I);return f||(f=[{x:t,y:n},{x:s,y:c}],l=1),f.splice(l||f.length-1,0,{x:M,y:E}),(k+D)*(k+D)>u*(I*I+C*C)&&(h=f.length,e(t,n,d,p,O,m,M,E,u,f,l),e(M,E,b,w,v,y,s,c,u,f,l+1+(f.length-h))),f},s=function(e){var t=this.lookup[e*this.l|0]||this.lookup[this.l-1];return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy},c=function(e,t,n){this._calcEnd=!0,this.id=e,e&&(i.b.map[e]=this),this.getRatio=s,this.setData(t,n)},u=c.prototype=new i.b;return u.constructor=c,u.setData=function(i,s){var c,u,f,l,h,d,p,x,g,v,y=(i=i||"0,0,1,1").match(e),O=1,m=[];if(v=(s=s||{}).precision||1,this.data=i,this.lookup=[],this.points=m,this.fast=v<=1,(r.test(i)||-1!==i.indexOf("M")&&-1===i.indexOf("C"))&&(y=function(e){var i,r,o,s,c,u,f,l,h,d,p,x=(e+"").replace(n,function(e){var t=+e;return t<1e-4&&t>-1e-4?0:t}).match(t)||[],g=[],v=0,y=0,O=x.length,m=2;for(i=0;i<O;i++)if(h=s,isNaN(x[i])?c=(s=x[i].toUpperCase())!==x[i]:i--,r=+x[i+1],o=+x[i+2],c&&(r+=v,o+=y),i||(f=r,l=o),"M"===s)u&&u.length<8&&(g.length-=1,m=0),v=f=r,y=l=o,u=[r,o],m=2,g.push(u),i+=2,s="L";else if("C"===s)u||(u=[0,0]),u[m++]=r,u[m++]=o,c||(v=y=0),u[m++]=v+1*x[i+3],u[m++]=y+1*x[i+4],u[m++]=v+=1*x[i+5],u[m++]=y+=1*x[i+6],i+=6;else if("S"===s)"C"===h||"S"===h?(d=v-u[m-4],p=y-u[m-3],u[m++]=v+d,u[m++]=y+p):(u[m++]=v,u[m++]=y),u[m++]=r,u[m++]=o,c||(v=y=0),u[m++]=v+=1*x[i+3],u[m++]=y+=1*x[i+4],i+=4;else{if("L"!==s&&"Z"!==s)throw a;"Z"===s&&(r=f,o=l,u.closed=!0),("L"===s||Math.abs(v-r)>.5||Math.abs(y-o)>.5)&&(u[m++]=v+(r-v)/3,u[m++]=y+(o-y)/3,u[m++]=v+2*(r-v)/3,u[m++]=y+2*(o-y)/3,u[m++]=r,u[m++]=o,"L"===s&&(i+=2)),v=r,y=o}return g[0]}(i)),4===(c=y.length))y.unshift(0,0),y.push(1,1),c=8;else if((c-2)%6)throw a;for(0==+y[0]&&1==+y[c-2]||function(e,t,n){n||0===n||(n=Math.max(+e[e.length-1],+e[1]));var i,r=-1*+e[0],a=-n,o=e.length,s=1/(+e[o-2]+r),c=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?function(e){var t,n=e.length,i=999999999999;for(t=1;t<n;t+=6)+e[t]<i&&(i=+e[t]);return i}(e)+a:+e[o-1]+a);for(c=c?1/c:-s,i=0;i<o;i+=2)e[i]=(+e[i]+r)*s,e[i+1]=(+e[i+1]+a)*c}(y,s.height,s.originY),this.rawBezier=y,l=2;l<c;l+=6)u={x:+y[l-2],y:+y[l-1]},f={x:+y[l+4],y:+y[l+5]},m.push(u,f),o(u.x,u.y,+y[l],+y[l+1],+y[l+2],+y[l+3],f.x,f.y,1/(2e5*v),m,m.length-1);for(c=m.length,l=0;l<c;l++)p=m[l],x=m[l-1]||p,p.x>x.x||x.y!==p.y&&x.x===p.x||p===x?(x.cx=p.x-x.x,x.cy=p.y-x.y,x.n=p,x.nx=p.x,this.fast&&l>1&&Math.abs(x.cy/x.cx-m[l-2].cy/m[l-2].cx)>2&&(this.fast=!1),x.cx<O&&(x.cx?O=x.cx:(x.cx=.001,l===c-1&&(x.x-=.001,O=Math.min(O,.001),this.fast=!1)))):(m.splice(l--,1),c--);if(c=1/O+1|0,this.l=c,h=1/c,d=0,p=m[0],this.fast){for(l=0;l<c;l++)g=l*h,p.nx<g&&(p=m[++d]),u=p.y+(g-p.x)/p.cx*p.cy,this.lookup[l]={x:g,cx:h,y:u,cy:0,nx:9},l&&(this.lookup[l-1].cy=u-this.lookup[l-1].y);this.lookup[c-1].cy=m[m.length-1].y-u}else{for(l=0;l<c;l++)p.nx<l*h&&(p=m[++d]),this.lookup[l]=p;d<m.length-1&&(this.lookup[l-1]=m[m.length-2])}return this._calcEnd=1!==m[m.length-1].y||0!==m[0].y,this},u.getRatio=s,u.getSVGData=function(e){return c.getSVGData(this,e)},c.create=function(e,t,n){return new c(e,t,n)},c.version="0.2.2",c.bezierToPoints=o,c.get=function(e){return i.b.map[e]},c.getSVGData=function(e,t){var n,r,a,o,s,c,u,f,l,h,d=(t=t||{}).width||100,p=t.height||100,x=t.x||0,g=(t.y||0)+p,v=t.path;if(t.invert&&(p=-p,g=0),(e=e.getRatio?e:i.b.map[e]||console.log("No ease found: ",e)).rawBezier){for(n=[],u=e.rawBezier.length,a=0;a<u;a+=2)n.push((1e3*(x+e.rawBezier[a]*d)|0)/1e3+","+(1e3*(g+e.rawBezier[a+1]*-p)|0)/1e3);n[0]="M"+n[0],n[1]="C"+n[1]}else for(n=["M"+x+","+g],o=1/(u=Math.max(5,200*(t.precision||1))),f=5/(u+=2),l=(1e3*(x+o*d)|0)/1e3,r=((h=(1e3*(g+e.getRatio(o)*-p)|0)/1e3)-g)/(l-x),a=2;a<u;a++)s=(1e3*(x+a*o*d)|0)/1e3,c=(1e3*(g+e.getRatio(a*o)*-p)|0)/1e3,(Math.abs((c-h)/(s-l)-r)>f||a===u-1)&&(n.push(l+","+h),r=(c-h)/(s-l)),l=s,h=c;return v&&("string"==typeof v?document.querySelector(v):v).setAttribute("d",n.join(" ")),n.join(" ")},c},!0);var r=i.g.CustomEase;function a(){r.create("linear","0.250, 0.250, 0.750, 0.750"),r.create("ease","0.250, 0.100, 0.250, 1.000"),r.create("easeIn","0.420, 0.000, 1.000, 1.000"),r.create("easeOut","0.000, 0.000, 0.580, 1.000"),r.create("easeInOut","0.420, 0.000, 0.580, 1.000"),r.create("easeInQuad","0.550, 0.085, 0.680, 0.530"),r.create("easeInCubic","0.550, 0.055, 0.675, 0.190"),r.create("easeInQuart","0.895, 0.030, 0.685, 0.220"),r.create("easeInQuint","0.755, 0.050, 0.855, 0.060"),r.create("easeInSine","0.470, 0.000, 0.745, 0.715"),r.create("easeInExpo","0.950, 0.050, 0.795, 0.035"),r.create("easeInCirc","0.600, 0.040, 0.980, 0.335"),r.create("easeInBack",".600, -0.280, 0.735, 0.045"),r.create("easeOutQuad","0.250, 0.460, 0.450, 0.940"),r.create("easeOutCubic","0.215, 0.610, 0.355, 1.000"),r.create("easeOutQuart","0.165, 0.840, 0.440, 1.000"),r.create("easeOutQuint","0.230, 1.000, 0.320, 1.000"),r.create("easeOutSine","0.390, 0.575, 0.565, 1.000"),r.create("easeOutExpo","0.190, 1.000, 0.220, 1.000"),r.create("easeOutCirc","0.075, 0.820, 0.165, 1.000"),r.create("easeOutBack","0.175, 0.885, 0.320, 1.275"),r.create("easeInOutQuad","0.455, 0.030, 0.515, 0.955"),r.create("easeInOutCubic","0.645, 0.045, 0.355, 1.000"),r.create("easeInOutQuart","0.770, 0.000, 0.175, 1.000"),r.create("easeInOutQuint","0.860, 0.000, 0.070, 1.000"),r.create("easeInOutSine","0.445, 0.050, 0.550, 0.950"),r.create("easeInOutExpo","1.000, 0.000, 0.000, 1.000"),r.create("easeInOutCirc","0.785, 0.135, 0.150, 0.860"),r.create("easeInOutBack",".680, -0.550, 0.265, 1.550")}n.d(t,"a",function(){return a})},function(e,t,n){"use strict";n.r(t),function(e){n(11);var t=n(2),i=n(3),r=n(6);n(10),t.a;e(function(){Object(i.a)(),Object(r.a)(),function(){var e=0,t=0,n=0;document.getElementById("request_permission").addEventListener("click",function(){DeviceMotionEvent&&DeviceMotionEvent.requestPermission&&"function"==typeof DeviceMotionEvent.requestPermission&&DeviceMotionEvent.requestPermission(),DeviceOrientationEvent&&DeviceOrientationEvent.requestPermission&&"function"==typeof DeviceOrientationEvent.requestPermission&&DeviceOrientationEvent.requestPermission()}),DeviceOrientationEvent.requestPermission().then(function(i){"granted"===i&&window.addEventListener("deviceorientation",function(i){e=i.alpha,t=i.beta,n=i.gamma,document.getElementById("txt2").innerHTML="moved!!"},!1)}).catch(console.error);!function i(){document.getElementById("txt").innerHTML="alpha: "+e+"<br>beta:  "+t+"<br>gamma: "+n,console.log("test"),window.requestAnimationFrame(i)}()}()})}.call(this,n(1))},,,function(e,t,n){"use strict";(function(e){n(4),n(5)}).call(this,n(1))}]);