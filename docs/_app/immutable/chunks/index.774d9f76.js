function E(){}const at=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function _t(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function U(t){return t()}function G(){return Object.create(null)}function k(t){t.forEach(U)}function F(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Ht(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function dt(t){return Object.keys(t).length===0}function V(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t){let e;return V(t,n=>e=n)(),e}function Gt(t,e,n){t.$$.on_destroy.push(V(e,n))}function Jt(t,e,n,r){if(t){const i=X(t,e,n,r);return t[0](i)}}function X(t,e,n,r){return t[1]&&r?ft(n.ctx.slice(),t[1](r(e))):n.ctx}function Kt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],c=Math.max(e.dirty.length,i.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|i[s];return o}return e.dirty|i}return e.dirty}function Qt(t,e,n,r,i,o){if(i){const c=X(e,n,r,o);t.p(c,i)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const Y=typeof window<"u";let ht=Y?()=>window.performance.now():()=>Date.now(),I=Y?t=>requestAnimationFrame(t):E;const v=new Set;function Z(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&I(Z)}function mt(t){let e;return v.size===0&&I(Z),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let P=!1;function pt(){P=!0}function yt(){P=!1}function gt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=u?i+1:gt(1,i,d=>e[n[d]].claim_order,u))-1;r[l]=n[f]+1;const a=f+1;n[a]=l,i=Math.max(a,i)}const o=[],c=[];let s=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(c[l],f)}}function xt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=nt("style");return vt(tt(t),e),e.sheet}function vt(t,e){return xt(t.head||t,e),e.sheet}function wt(t,e){if(P){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){P&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function et(t){t.parentNode&&t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Yt(){return H(" ")}function Zt(){return H("")}function te(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ee(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ne(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,r,i=!1){Nt(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function it(t,e,n,r){return rt(t,i=>i.nodeName===e,i=>{const o=[];for(let c=0;c<i.attributes.length;c++){const s=i.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>i.removeAttribute(c))},()=>r(e))}function re(t,e,n){return it(t,e,n,nt)}function ie(t,e,n){return it(t,e,n,Et)}function At(t,e){return rt(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>H(e),!0)}function ce(t){return At(t," ")}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function le(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ue(t,e,n){for(let r=0;r<t.options.length;r+=1){const i=t.options[r];if(i.__value===e){i.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function ct(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function oe(t,e){return new t(e)}const M=new Map;let D=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:$t(e),rules:{}};return M.set(t,n),n}function J(t,e,n,r,i,o,c,s=0){const l=16.666/r;let u=`{
`;for(let g=0;g<=1;g+=l){const b=e+(n-e)*o(g);u+=g*100+`%{${c(b,1-b)}}
`}const f=u+`100% {${c(n,1-n)}}
}`,a=`__svelte_${Ct(f)}_${s}`,d=tt(t),{stylesheet:_,rules:h}=M.get(d)||St(d,t);h[a]||(h[a]=!0,_.insertRule(`@keyframes ${a} ${f}`,_.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${r}ms linear ${i}ms 1 both`,D+=1,a}function jt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),D-=i,D||Mt())}function Mt(){I(()=>{D||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&et(e)}),M.clear())})}let A;function p(t){A=t}function q(){if(!A)throw new Error("Function called outside component initialization");return A}function ae(t){q().$$.on_mount.push(t)}function fe(t){q().$$.after_update.push(t)}function _e(){const t=q();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const o=ct(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const $=[],K=[];let w=[];const Q=[],st=Promise.resolve();let T=!1;function lt(){T||(T=!0,st.then(W))}function de(){return lt(),st}function O(t){w.push(t)}const B=new Set;let x=0;function W(){if(x!==0)return;const t=A;do{try{for(;x<$.length;){const e=$[x];x++,p(e),Dt(e.$$)}}catch(e){throw $.length=0,x=0,e}for(p(null),$.length=0,x=0;K.length;)K.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];B.has(n)||(B.add(n),n())}w.length=0}while($.length);for(;Q.length;)Q.pop()();T=!1,B.clear(),p(t)}function Dt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function Ot(t){const e=[],n=[];w.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),w=e}let N;function Pt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function L(t,e,n){t.dispatchEvent(ct(`${e?"intro":"outro"}${n}`))}const j=new Set;let y;function qt(){y={r:0,c:[],p:y}}function Rt(){y.r||k(y.c),y=y.p}function ut(t,e){t&&t.i&&(j.delete(t),t.i(e))}function zt(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),y.c.push(()=>{j.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Bt={duration:0};function he(t,e,n,r){const i={direction:"both"};let o=e(t,n,i),c=r?0:1,s=null,l=null,u=null;function f(){u&&jt(t,u)}function a(_,h){const m=_.b-c;return h*=Math.abs(m),{a:c,b:_.b,d:m,duration:h,start:_.start,end:_.start+h,group:_.group}}function d(_){const{delay:h=0,duration:m=300,easing:g=at,tick:b=E,css:R}=o||Bt,z={start:ht()+h,b:_};_||(z.group=y,y.r+=1),s||l?l=z:(R&&(f(),u=J(t,c,_,m,h,g,R)),_&&b(0,1),s=a(z,m),O(()=>L(t,_,"start")),mt(C=>{if(l&&C>l.start&&(s=a(l,m),l=null,L(t,s.b,"start"),R&&(f(),u=J(t,c,s.b,s.duration,0,g,o.css))),s){if(C>=s.end)b(c=s.b,1-c),L(t,s.b,"end"),l||(s.b?f():--s.group.r||k(s.group.c)),s=null;else if(C>=s.start){const ot=C-s.start;c=s.a+s.d*g(ot/s.duration),b(c,1-c)}}return!!(s||l)}))}return{run(_){F(o)?Pt().then(()=>{o=o(i),d(_)}):d(_)},end(){f(),s=l=null}}}function me(t,e){const n=e.token={};function r(i,o,c,s){if(e.token!==n)return;e.resolved=s;let l=e.ctx;c!==void 0&&(l=l.slice(),l[c]=s);const u=i&&(e.current=i)(l);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==o&&a&&(qt(),zt(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),Rt())}):e.block.d(1),u.c(),ut(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[o]=u),f&&W()}if(_t(t)){const i=q();if(t.then(o=>{p(i),r(e.then,1,e.value,o),p(null)},o=>{if(p(i),r(e.catch,2,e.error,o),p(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function pe(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}function ye(t){t&&t.c()}function ge(t,e){t&&t.l(e)}function Lt(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||O(()=>{const c=t.$$.on_mount.map(U).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...c):k(c),t.$$.on_mount=[]}),o.forEach(O)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(Ot(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&($.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function be(t,e,n,r,i,o,c,s=[-1]){const l=A;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:E,not_equal:i,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:G(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};c&&c(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,d,..._)=>{const h=_.length?_[0]:d;return u.ctx&&i(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&Ft(t,a)),d}):[],u.update(),f=!0,k(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){pt();const a=kt(e.target);u.fragment&&u.fragment.l(a),a.forEach(et)}else u.fragment&&u.fragment.c();e.intro&&ut(t.$$.fragment),Lt(t,e.target,e.anchor,e.customElement),yt(),W()}p(l)}class xe{$destroy(){Tt(this,1),this.$destroy=E}$on(e,n){if(!F(n))return E;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Lt as A,Tt as B,wt as C,E as D,Gt as E,Et as F,ie as G,ue as H,te as I,Xt as J,_e as K,ee as L,O as M,he as N,Jt as O,me as P,Qt as Q,Ut as R,xe as S,Kt as T,pe as U,Wt as V,Ht as W,V as X,k as Y,F as Z,Yt as a,Vt as b,ce as c,zt as d,Zt as e,Rt as f,ut as g,et as h,be as i,fe as j,nt as k,re as l,kt as m,ne as n,ae as o,le as p,H as q,At as r,It as s,de as t,se as u,qt as v,K as w,oe as x,ye as y,ge as z};
