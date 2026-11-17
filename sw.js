/* Die Versdetektei – Offline-Cache
   Bei Internet: immer die neueste Version laden (und im Cache ablegen).
   Ohne Internet: die zuletzt geladene Version aus dem Cache zeigen.
   Nach größeren Änderungen VERSION erhöhen, damit alte Dateien gelöscht werden. */
const VERSION = "versdetektei-v4";
const FILES = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png",
  "./apple-touch-icon.png", "./favicon-32.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("versdetektei-") && k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if(res.ok){
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => {
        if(r) return r;
        if(e.request.mode === "navigate") return caches.match("./index.html");
        return Response.error();
      }))
  );
});
