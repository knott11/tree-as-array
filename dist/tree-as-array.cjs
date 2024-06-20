"use strict";const T={mapTree(p,l,t={children:"children",id:"id"}){return p.flatMap(i=>{const r=l(i),c=i!=null&&i[t.children]&&(i==null?void 0:i[t.children].length)>0?T.mapTree(i==null?void 0:i[t.children],l,t):[];return[r,...c]})},filterTree(p,l,t={children:"children",id:"id"}){const i=[];function r(c){for(let u of c)l(u)&&i.push(u),u!=null&&u[t.children]&&r(u==null?void 0:u[t.children])}return r(p),i},findTree(p,l,t={children:"children",id:"id"}){for(const i of p){if(l(i))return i;if(i!=null&&i[t.children]){const r=T.findTree(i==null?void 0:i[t.children],l,t);if(r)return r}}return null},pushTree(p,l,t,i={children:"children",id:"id"}){function r(c,u,h,f){return c.some(n=>(n==null?void 0:n[f.id])===u?(n!=null&&n[f.children]||(n[f.children]=[]),n==null||n[f.children].push(h),!0):n!=null&&n[f.children]?r(n[f.children],u,h,f):!1)}r(p,l,t,i)||console.error(`Node with ID ${l} not found in the tree.`)},unshiftTree(p,l,t,i={children:"children",id:"id"}){function r(c,u,h,f){return c.some(n=>(n==null?void 0:n[f.id])===u?(n!=null&&n[f.children]||(n[f.children]=[]),n==null||n[f.children].unshift(h),!0):n!=null&&n[f.children]?r(n[f.children],u,h,f):!1)}r(p,l,t,i)||console.error(`Node with ID ${l} not found in the tree.`)},popTree(p,l,t={children:"children",id:"id"}){function i(r,c,u){return r.some(h=>(h==null?void 0:h[u.id])===c?(h!=null&&h[u.children]&&(h==null?void 0:h[u.children].length)>0&&(h==null||h[u.children].pop()),!0):h!=null&&h[u.children]?i(h[u.children],c,u):!1)}i(p,l,t)||console.error(`Node with ID ${l} not found in the tree, or it has no children to pop.`)},shiftTree(p,l,t={children:"children",id:"id"}){function i(r,c,u){return r.some(h=>(h==null?void 0:h[u.id])===c?(h!=null&&h[u.children]&&(h==null?void 0:h[u.children].length)>0&&(h==null||h[u.children].shift()),!0):h!=null&&h[u.children]?i(h[u.children],c,u):!1)}i(p,l,t)||console.error(`Node with ID ${l} not found in the tree, or it has no children to shift.`)},someTree(p,l,t={children:"children",id:"id"}){function i(r){for(let c of r)if(l(c)||c!=null&&c[t.children]&&i(c==null?void 0:c[t.children]))return!0;return!1}return i(p)},everyTree(p,l,t={children:"children",id:"id"}){function i(r){for(let c of r)if(!l(c)||c!=null&&c[t.children]&&!i(c==null?void 0:c[t.children]))return!1;return!0}return i(p)},atTree(p,l,t,i={children:"children",id:"id"}){for(const r of p){if((r==null?void 0:r[i.id])===l){let c=t>=0?t:(r==null?void 0:r[i.children].length)+t;return r!=null&&r[i.children]&&c>=0&&c<(r==null?void 0:r[i.children].length)?r==null?void 0:r[i.children][c]:null}if(r!=null&&r[i.children]){const c=this.atTree(r==null?void 0:r[i.children],l,t,i);if(c)return c}}return null},indexOfTree(p,l,t={children:"children",id:"id"}){function i(r,c,u=[]){for(const h of r){const f=[...u,r.indexOf(h)];if((h==null?void 0:h[t.id])===c)return f;if(h!=null&&h[t.children]){const n=i(h==null?void 0:h[t.children],c,f);if(n)return n}}return null}return i(p,l)},atIndexOfTree(p,l,t={children:"children",id:"id"}){function i(r,c,u){if(!r||c.length===0)return null;const h=c[0],f=r[h];return f?c.length===1?f:f!=null&&f[u.children]?i(f==null?void 0:f[u.children],c.slice(1),u):null:null}return i(p,l,t)},nodeDepthMap(p,l={children:"children",id:"id"}){const t={};function i(r,c=1){if(t[r==null?void 0:r[l.id]]=c,r!=null&&r[l.children])for(const u of r==null?void 0:r[l.children])i(u,c+1)}for(const r of p)i(r);return t}};module.exports=T;