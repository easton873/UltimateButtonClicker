'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "452cc467e40ca7b22fc3cd0efa3ed418",
"version.json": "6a6db891e4bf00cb12b12af4b3992e43",
"splash/img/light-2x.png": "6cb8b1b51ca7e7835b35511e851f75c7",
"splash/img/dark-4x.png": "a522dd39c34a260bdda058a24e675827",
"splash/img/light-3x.png": "1cc7240c82eca3a68b151e1d4af664a3",
"splash/img/dark-3x.png": "1cc7240c82eca3a68b151e1d4af664a3",
"splash/img/light-4x.png": "a522dd39c34a260bdda058a24e675827",
"splash/img/dark-2x.png": "6cb8b1b51ca7e7835b35511e851f75c7",
"splash/img/dark-1x.png": "c42e17ad23871bf84f4a06a0bbf58f2a",
"splash/img/light-1x.png": "c42e17ad23871bf84f4a06a0bbf58f2a",
"index.html": "b60c350a459b449f3489bd60ebb43acb",
"/": "b60c350a459b449f3489bd60ebb43acb",
"main.dart.js": "b3108ef018c48d85fa35c729275ab82f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8bb0c28c6d2775243d9408ae010ad39b",
"assets/AssetManifest.json": "e48dec5c7176bdd1c3cb49dba3513d09",
"assets/NOTICES": "d88efd3d43f387b6cc1d739dca6fc751",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "16053d82880392eb28727df0f929c8ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "abbb3b913e8f1d66d52d7605b73cf055",
"assets/fonts/MaterialIcons-Regular.otf": "cf9d7212c5eaf04f88abda987885abc7",
"assets/assets/images/popcorn.png": "075614acdd70b3b0c8792aa64376fc9a",
"assets/assets/images/tutorial_bg.png": "8110c05c6ea6fc7fa6989b099871a431",
"assets/assets/images/communism_bg.png": "a10bb87ae82fa322a4b05cd794b4fc51",
"assets/assets/images/pirate.png": "25c18b9722d6c90e2cd819cf6cfe7cec",
"assets/assets/images/crypto.png": "8dfa53a48f26e0673685a84961f0dabc",
"assets/assets/images/custom_bg.png": "b31cbd25f59d77c23553c552e04ad218",
"assets/assets/images/castle.png": "570340212e0d7653224aa1518bd5c82f",
"assets/assets/images/custom.png": "4cc558e7857e21403820e0703f29eaac",
"assets/assets/images/number.png": "db70f724a39557f2d0d9790bd9947e53",
"assets/assets/images/communism.png": "96d9eeced25bb469749ca94d62726ce5",
"assets/assets/images/arcade.png": "6e1fa68e426390b9db84aa1747bf5bd1",
"assets/assets/images/farm.png": "22e53db8b20f78f3ec75915c4c41a3f1",
"assets/assets/images/bakery_bg.png": "e478f2267ed38c9853095041ab42a991",
"assets/assets/images/poker.png": "6fd546fedb5187a0665bf53b6a4b588c",
"assets/assets/images/arcade_bg.png": "22e273660e9f8a36173c0851a0a94624",
"assets/assets/images/sun_bg.png": "f79b9be5c8b1b5c1b30ef388a027fb79",
"assets/assets/images/wizard.png": "c01265b4cc722fc197206a3c6816c573",
"assets/assets/images/crypto_bg.png": "bb0d628ff10ab0e3520dd3342cb9f5e6",
"assets/assets/images/medicine_bg.png": "a4cc8aed28f4825749311ea52b505d2e",
"assets/assets/images/bakery.png": "674393629e5a7e84a325d65f4da8971f",
"assets/assets/images/button_bg.png": "22c81a0526a222c3a9ad4740d048df1c",
"assets/assets/images/lumber_bg.png": "6f49f093bac19dcbcb42d069170abc16",
"assets/assets/images/money_bg.png": "158a82967e7d376ff1132461cb468662",
"assets/assets/images/unlock_point.png": "f954933850c93eda0416dde141d62163",
"assets/assets/images/reset.png": "64eaed3e4a02f4dae46fc5a251020496",
"assets/assets/images/medicine.png": "a0634dd354d0411866c81372151a1749",
"assets/assets/images/startup_bg.png": "f6dbbd65af9ac8d915f92acb619a8e96",
"assets/assets/images/dinosaur.png": "12db58497a158954d0675da23dc82e5b",
"assets/assets/images/theater_bg.png": "913c9c3fc095d1aae7a7120620aab126",
"assets/assets/images/castle_bg.png": "507637ed3f2b8f86c4ac9fc73a23cec7",
"assets/assets/images/tutorial.png": "ed14a1b16e13a90aa316855573616bb9",
"assets/assets/images/airplane.png": "bd136b98cfaa92b81e48e6509e1471a1",
"assets/assets/images/crystal.png": "141ddee619a9b3632ec2937985d76146",
"assets/assets/images/lumber.png": "d6657ec23b07826e3c4c714d8c4aa3e9",
"assets/assets/images/poker_bg.png": "4f84e40811548b611809710a9af84dda",
"assets/assets/images/number_bg.png": "e209eef31d71f4b93cbdee1a548aa0de",
"assets/assets/images/jet.png": "9d8985342d85e396a294ee01386c01b9",
"assets/assets/images/business_bg.png": "630f4594433c7b8fd66f93ea79a12e06",
"assets/assets/images/dinosaur_bg.png": "e4b4a43b3342b40d2fface312d460799",
"assets/assets/images/farm_bg.png": "dcb9e3f27c5597e076f68b8a13e74714",
"assets/assets/images/money.png": "c72c4cc6ccdcc18d1ce551952098ddba",
"assets/assets/images/business.png": "344892aba3b48df99358e957e4b4c645",
"assets/assets/images/startup.png": "9c975432f54053c06370cdda10a060c3",
"assets/assets/images/football.png": "9c5364ce1fd1fc8d3bba048645076d7a",
"assets/assets/images/upgrades.jpeg": "0b3bc92480b6ae7c6cfe8f7e2addfb95",
"assets/assets/images/pirate_bg.png": "82455815287d575e5832a22b7761529d",
"assets/assets/images/sun.png": "4e6ca8a8a6fee62a97df69a66e8de7a5",
"assets/assets/images/jet_bg.png": "91e00ba18c985852627b3491d0352786",
"assets/assets/images/popcorn_bg.png": "31862eeb3d052c33619780e8cd956351",
"assets/assets/images/theater.png": "6126818f7fc29aec02eae2c0f60120aa",
"assets/assets/images/wizard_bg.png": "cce6f5747c9cbbaaddae5d31d7e8aef1",
"assets/assets/images/airplane_bg.png": "b01d3e9c07ac4346d761aebeea66c266",
"assets/assets/images/button.png": "7360087bca253e4c7df8ea50e4f6d908",
"assets/assets/images/football_bg.png": "a1899e6cffeb29e2f1acdf7095af0113",
"assets/assets/loadouts/new_loadout.json": "4a13690d319c63cd0e52c4ab78dbad4e",
"assets/assets/loadouts/notes.txt": "9d37d82edd6c0ae6f07c3a09c3fa2f52",
"assets/assets/loadouts/loadouts.json": "2db4a4b7e372e7c7229a9d25b7a6efb8",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
