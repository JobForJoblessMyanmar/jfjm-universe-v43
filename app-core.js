(() => {
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const css=document.createElement('link'),js=document.createElement('script');css.rel='stylesheet';css.href='../universe-fx.css';js.src='../universe-fx.js';document.head.append(css);document.addEventListener('DOMContentLoaded',()=>document.body.append(js),{once:true});}
  const url = window.JFJM_SUPABASE_URL, key = window.JFJM_SUPABASE_PUBLISHABLE_KEY, tokenKey = 'jfjm-premium-token';
  const api = (path, options={}) => fetch(`${url}${path}`,{...options,headers:{apikey:key,'Content-Type':'application/json',...(options.headers||{})}});
  const user = async () => { const token=localStorage.getItem(tokenKey); if(!token)return null; const r=await api('/auth/v1/user',{headers:{Authorization:`Bearer ${token}`}}); return r.ok?r.json():null; };
  const auth = () => localStorage.getItem(tokenKey)||'';
  const esc = value => { const e=document.createElement('span');e.textContent=value??'';return e.innerHTML; };
  window.JFJM_CORE={api,user,auth,esc,signOut:()=>localStorage.removeItem(tokenKey)};
})();
