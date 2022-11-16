'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ff0f43991729a6e062b9a4cb031818bb",
"index.html": "12c175a23ab4d8b40bba4de0e8a0573b",
"/": "12c175a23ab4d8b40bba4de0e8a0573b",
"main.dart.js": "a8379486e8c02cd030af29075cff55ca",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "be4405e0a167d57b26b4ba635a67e5f0",
"assets/AssetManifest.json": "e2d15ff66c5695cbecc879013f38f99d",
"assets/NOTICES": "76eae707fcf135e10a9115810a71d0b8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/survey.png": "85dff5aff0fbc906ca8b3f42136d53e8",
"assets/assets/images/landmark.png": "bc4250a022d067043a16517e1f77b653",
"assets/assets/images/Inspection.jpg": "25dcb9464b2c71b2f7e82e5a2d15f75e",
"assets/assets/images/breadth.png": "59b160fbe2b219792399b1e246a8895f",
"assets/assets/images/west.png": "a3359e4c1412b857e06b501725e21222",
"assets/assets/images/offsite_bg.jpg": "89082a8afd7a25e5f7db29655662f226",
"assets/assets/images/nothingParticulars.png": "16b86188a715c283f0f116bd63f3f432",
"assets/assets/images/emal.png": "a2f55c56634cb4f51944af525bd7aeff",
"assets/assets/images/north.png": "439ea791c3d09fc2a5cdab6635dc8c02",
"assets/assets/images/remark.png": "0630212f6f2f71e639d956e248db9536",
"assets/assets/images/address.png": "95a106e83fd8d01838d2cd9b707ed5c2",
"assets/assets/images/east.png": "c1a6a2dff5ed58bf0e436d6fdb82b2a0",
"assets/assets/images/offSite.png": "9215fe5fe1bd59bde179fb88411673f6",
"assets/assets/images/dispatchNotice.jpg": "86f5ee8b7f5c36b0c4c3e9cbe32083e7",
"assets/assets/images/south.png": "2b101b558c6d5b9a7b1f999f88e1f956",
"assets/assets/images/house.png": "c8dcd5cf5482b278e4d025f1dc619f37",
"assets/assets/images/background.jpg": "004ffbea35837c579a4fd663502e72f6",
"assets/assets/images/inward.png": "8308d5b443369c0e0c518ec0034257d4",
"assets/assets/images/misbg.jpg": "716287e90a2ac5b169c5c1572bbfeb82",
"assets/assets/images/commercial.png": "51fd13fff70cdcd962eb358b06a4ac27",
"assets/assets/images/id.png": "321ec42d4ed0c2c1ab4c999f391ede65",
"assets/assets/images/complaint.png": "1d34d1a4e1835c93dd7736f324310bc5",
"assets/assets/images/AddComplaintbg.jpg": "b54dcffd8cd35aa69c84eb7ed9643dc1",
"assets/assets/images/logo.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/images/earth.flr": "a1a4778742df72f09bb1425a714d802f",
"assets/assets/images/description.png": "bca1d098444a110dd9b083e728b12c3a",
"assets/assets/images/calendar.png": "6d36374818415bbee1ca36c05597fa58",
"assets/assets/images/electric-meter.png": "ea45bdee85320bc94148ea2e34427042",
"assets/assets/images/comment.png": "850b848ac1a39ee2d7c734c57be03832",
"assets/assets/images/mobile.png": "da17bd3812b748b57071f25b6d3c8b83",
"assets/assets/images/location.png": "a23093fbfc09d373ba3e73bfee764a7b",
"assets/assets/images/success.png": "ddfced56f97627ebb7b0803f881981e6",
"assets/assets/images/floor.png": "4f3cd6f526ba258e8b2ce8985b941553",
"assets/assets/images/height.png": "759eb71bbe9f331f96b582b05fc96382",
"assets/assets/images/delete.png": "6de05df02ead1400f83799d851d06faa",
"assets/assets/images/village.png": "f7aff51b4a5c9fbc7f7b89fd50264e31",
"assets/assets/images/length.png": "9f424a58db54e391b344edce300df652",
"assets/assets/images/complaintAddress.png": "64d9aaeffbc4064d52fff5e46e701af3",
"assets/assets/images/sitevisitbg.jpg": "da2737932aa9fb34a7a9d44b1b601b92",
"assets/assets/images/notice.png": "7426530eb0a9f407a5e91dc8c63eb4d2",
"assets/assets/images/name.png": "4953032249285af0e455c5a106edfdf9",
"assets/assets/images/addimage.png": "443287e18ddd6726ffaa4fcd9f66f708",
"assets/assets/images/printer.png": "2cdbe9331909ce94483141d21e25608c",
"assets/assets/images/onsite.png": "32a23571687b8e81cc29e5df45c4ff5f",
"assets/assets/images/residential.png": "2644bebe4f1dd5e6a7bfd2c53b5091ef",
"assets/assets/images/international.png": "e7cca28d11222f58a8a582e7e0feec1f",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
