const CACHE = "jfjm-universe-v43-hyper-motion";
try { importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js"); } catch (_) {}
const ASSETS = [
  "./","./index.html","./enhancements.css","./universe.css","./universe-engine.js","./universe-fx.css","./universe-fx.js","./universe-motion.css","./app.js","./card-export.js","./analytics.js","./onesignal-init.js","./config.js","./robots.txt","./sitemap.xml",
  "./data/sharings.js","./data/daily-motivation.js","./data/career-advice.js","./manifest.webmanifest","./app-core.js","./cv-builder/","./cv-builder/index.html","./cv-builder/app.js","./cv-builder/app.css","./cv-builder/universe-studio.css","./cv-builder/features.css","./cv-builder/compact.css","./cv-builder/type-modes.css","./cv-builder/templates.css","./premium/","./premium/index.html","./premium/premium.css","./premium/premium.js","./universe/","./universe/index.html","./universe/universe-app.css","./universe/universe-app.js","./jobs/","./jobs/index.html","./jobs/jobs.css","./jobs/jobs.js","./employer/","./employer/index.html","./employer/employer.css","./employer/employer.js",
  "./assets/jfjm-logo-new.jpg","./assets/icon-192.png","./assets/icon-512.png","./assets/icon-maskable-192.png","./assets/icon-maskable-512.png","./assets/html2canvas.min.js",
  "./assets/facebook.svg","./assets/telegram.svg","./assets/tiktok.svg","./assets/viber.svg","./assets/viber-official-icon.png","./admin/index.html","./admin/admin.css","./admin/v20.css","./admin/admin.js","./reset-password/index.html","./reset-password/reset.css","./reset-password/reset.js","./reader/index.html","./reader/reader.css","./reader/reader.js"
];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch", event => {
  if(event.request.method!=="GET") return;
  event.respondWith(caches.match(event.request).then(hit=>hit || fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));}return response;}).catch(()=>event.request.mode==="navigate"?caches.match("./index.html"):Response.error())));
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  const url = event.notification.data?.url || "./reader/?section=advice&sharing=next";
  event.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => {
    const client = list[0];
    if (client) { client.focus(); return client.navigate(url); }
    return clients.openWindow(url);
  }));
});
