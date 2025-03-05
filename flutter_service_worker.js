'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dd92c809b4d2ae02625733df8e501afd",
"assets/AssetManifest.bin.json": "005b127157e3c11bdf2ee7e131ec7e23",
"assets/AssetManifest.json": "3787da1910a1e901c4ad3e5962e8727f",
"assets/assets/images/balance.webp": "2b22811c8ca3b8e3d7ac247f3ed16291",
"assets/assets/images/court.jpg": "4fa1e04ba0f4058e9752670cd9971b2f",
"assets/assets/images/lawyer.webp": "999c476cd62130147583ad771b2242e1",
"assets/assets/images/logo.png": "410884a20e55af6e22339fb07472a93b",
"assets/assets/images/profile_pic.jpg": "ffb0dd63a42feb4bde36b32c953b26bd",
"assets/assets/images/roman.jpg": "83ce51cf5e0a522bbfdda777a559097c",
"assets/assets/images/team.jpg": "fdaed2b377d3a304762eca3e9e89617e",
"assets/assets/lotties/404.json": "f2064e9268601141848dc77194047d83",
"assets/assets/svgs/balance.svg": "0c0d146d2d15941ce473bb799e06b330",
"assets/assets/svgs/certificate.svg": "add0d3a8c5f1fd067459b7fde13c3b29",
"assets/assets/svgs/court.svg": "c1fdce6046ed32a07ba2b4f26c9daa72",
"assets/assets/svgs/hammer.svg": "c49f4bb04b91e4691a89971682b87e37",
"assets/assets/svgs/handcuffs.svg": "a40304541723a05a56328d96d8ac3831",
"assets/assets/svgs/handshake.svg": "4b32ef0ffec14a4c272d6191a4a7635e",
"assets/assets/svgs/law_book.svg": "22759c020345d47171df072b95f1732a",
"assets/assets/svgs/menu.svg": "64ae3e7d0667d73b0dc07f1c653a82b0",
"assets/assets/svgs/phone.svg": "890a5fac246977c44c565722493372df",
"assets/assets/svgs/shield.svg": "b68e3b50d95b4ac8768e84022ad00415",
"assets/assets/svgs/stars.svg": "df9a184863bc9cbe4f35b0a462dea325",
"assets/assets/svgs/whatsapp.svg": "83b5287afccfec306109ff0344e3f981",
"assets/assets/svgs/whatsapp_light.svg": "fc88d996eb2f27eef807b3c02f8dd98c",
"assets/FontManifest.json": "a29ce8d2e45014327f2588c5d7e72a23",
"assets/fonts/MaterialIcons-Regular.otf": "4e02d3728a7e89eda7092da8f78365fc",
"assets/NOTICES": "22587b795873eb6f75459b3ce0bde303",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a8ed796b29a8348c74ed9729491e1810",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/simple_circular_progress_bar/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "b1b1f6d22cd69742bf28463b46f4b710",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "80e33300147dadd2f30d010b872af0bf",
"/": "80e33300147dadd2f30d010b872af0bf",
"main.dart.js": "14ab7e4d1cbdec37a02a9ace4a1f9b7e",
"main.dart.js_1.part.js": "80bfe64308b6080462a911e0b5bfeba4",
"main.dart.js_10.part.js": "4ac1682d4d521061a441c3ce677608e4",
"main.dart.js_4.part.js": "7d389f05f8bc2717d832dd6a396f8ec3",
"main.dart.js_5.part.js": "c9e0cb29eb7f47f73921ae161ac23883",
"main.dart.js_6.part.js": "e0d38916ed3126b1959b42e5db25755a",
"main.dart.js_7.part.js": "f1e24cd7f86e3eda3fcc1413bdd682ad",
"main.dart.js_8.part.js": "0bb067e28d6f809b50f3d1c260ef930d",
"main.dart.js_9.part.js": "f56b4c4df9c986efad5d14a33821c4c8",
"manifest.json": "e02c8603629c27bdb3084f3091eb530e",
"splash/img/dark-1x.png": "86060ae0e7ba0c9a3dd3bddab52ea2ec",
"splash/img/dark-2x.png": "6bfbf82403d9c47fd7fed9fe5a343846",
"splash/img/dark-3x.png": "de5aabefb1a4ca5c549c3dc5f9315571",
"splash/img/dark-4x.png": "ce4e6203e7bbdaef6758eded8407ac5d",
"splash/img/light-1x.png": "86060ae0e7ba0c9a3dd3bddab52ea2ec",
"splash/img/light-2x.png": "6bfbf82403d9c47fd7fed9fe5a343846",
"splash/img/light-3x.png": "de5aabefb1a4ca5c549c3dc5f9315571",
"splash/img/light-4x.png": "ce4e6203e7bbdaef6758eded8407ac5d",
"version.json": "359c8f0692808b49e29f7b0d4e9d8073"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
