'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b52582de621ef932475ffab092663cad",
".git/config": "6ac0ab908aae6f2c5021a7a19a98c04d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "42550d649d8b215aa40b76f10d040ebf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c48ce1427f2194b983f54f2ed3999ec8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "57cbfc2779ddd1fce7915657b20552e2",
".git/logs/refs/heads/main": "0c08af785649e991385cc5979bf9d3cf",
".git/logs/refs/remotes/origin/main": "b97117bfad74f8d57be3689e5bc56806",
".git/objects/04/46b6231ef8239a40ad68a697f9f935d8ea92a9": "29ce73ac2d4bed7df6771099a5cb5597",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/14/e727799fd13445d4c899a0a78e41201a293d14": "110a521148fd312f0873f4edf247af4f",
".git/objects/18/393dff66af741e29ddc1eb8ebebcfa55a1d91e": "91ae3c1d31df75cc8b06e8afbe95b08e",
".git/objects/1a/83d12e6e253ca9c9e3b7e1c458da0332ba96d0": "579e27739c5a50534bbd159bc1cd8b35",
".git/objects/1e/d798368834368d602a469fefe7a772b7b8b54a": "34eb13080546d63f9f7de5bc7a30e2dd",
".git/objects/33/362bedb0dc5922b5a189838b899dbbb454d830": "750690304f25cf219f110f716d8102ad",
".git/objects/38/0ceed6eb24167a44a0b9028a3e48591330f416": "336cab76f32057fba634a549f052bc5a",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/44/3458acaa4545b2ef5cb4f9eac634768187d973": "ae9782e27ada77cdf76b63b96d133617",
".git/objects/45/8c8244386030df66f47b58d7c0fce6c4bf4774": "299dd562b5c1b04ef34426c4e5178fb9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/c6e640b2a82283700d7d20ccedf359558aac2f": "9f8c240dc38ad39e234a804dcb4c6acf",
".git/objects/49/8162c5fad6dba59c5add354064b8f07b4ccd0c": "18fe92825a8c2bb5b73deb06767732c1",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/58/a91c93b9bd05970066b6e5a3c31d383f3f8959": "76015be555d03bca12c9dc5d6ce9c7a5",
".git/objects/5b/1a2a23e43a0a97661ae49d2863170a5179a01d": "cd916ec749b9d22c3d1f50c384f0a42b",
".git/objects/65/0ef21ce064c685ce315eacbd45d3dbe42f8a91": "cf5cda7150ca10040a3ae998a8fe57f6",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/f9197d917ff02b73bc7d6b1d5ae6ab0a5cbd24": "bf62fe17e9985f9c3792555a317c6be4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/e789ba0455a7c175c3f3fd93a3aba6ed721df8": "1c92e4112cb144514d389ba446ffea0a",
".git/objects/6d/219e80ff9b1afec83cf86c400ae140c5537439": "95c795bb34c5cea73d6cd0b70ccf4c07",
".git/objects/6d/da34e8ec7a1b55d2592e8ea44b615d43eff7ad": "ddb16101b87c2a98d5ba85985527429a",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/79/bb14d9372e32f3eaed2e734e624f63e0816f63": "437fe3c9105eaa64073d011d413d0993",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/d52451e352d5bb658b1637b510b6167c8b0bba": "8c34230ca635af09b767ddd089870d1c",
".git/objects/81/8a6c94c96541cab24541101f59b4703f0dce92": "db438a13b9e367b8cdde66d110592c83",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/1b90c5dfc4fb9f761d16c20736cacae145d696": "9fb3264eccd832d31a22337b631c0bac",
".git/objects/93/06697004c5e6b02269bc20744a18ed27225bfb": "d67b2897b46642e578c13c24ef95752e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/79420a0cf03cc8c77906a4ee6cd796145aa629": "31c0018f134dcace710ae33350cd02b8",
".git/objects/a0/ad59a9b63ba504b1e966e9944a81f25930e5f1": "82502ebd3560a70391a2cf285a5c40a4",
".git/objects/a4/629db89c7e33f7ad69028fd4e5a3e440029046": "b977e557165615b944b363b543d707c2",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/aa/fcf35f19db59ef9f5c0752ffce8f4d17a3b085": "c38309177a8ec2dfb6641bf64709c220",
".git/objects/ad/a063fac1482d31122eb79d00a86c70c9ba9159": "4e8e25d5df2ed91f183ba4173b542d3e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b5/6c732fe90892a77478aac38eb838ffe5d68bb2": "734f8919934cd17eb989bbf4be7efd15",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bd/7a8565918818bc05973e58f1426ec2423ac389": "7a7c7ed468b720f0f21bd5e498b4ea37",
".git/objects/c5/6376177256fba6d37cec7f49710b2556da936a": "bd7decec23841a7af490926029bad763",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d1/0340affeee47444fff6cb59a85a996ba7101b8": "d89be596944ec2a72d71dcea3d20b1d9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/adaebd97a7ccd67cd769b9335f2e73d7e8bb2a": "6b2c2ac407b79e847a2afce4176d86c3",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/99d60d6852120363219b37053a349feea0b065": "486195fcd58a93ba281f1644250277ea",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/f0/4700190113125628f46c1d412bb13dcc95d6d0": "2353eef747d417b181ae0abe7e8144dd",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fc/b1b57b5980ffcfe8c2de219303bc4c5fe64f66": "fba86694ef7b07665a12eba3600f4d0d",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "69f0ce815cb602b2fa6116116db5e9b8",
".git/refs/remotes/origin/main": "69f0ce815cb602b2fa6116116db5e9b8",
"assets/AssetManifest.bin": "b4a97bc9c66d13b45926da5119d21c3e",
"assets/AssetManifest.bin.json": "3a4bb4576e11ef641b5f119dfac5bd0f",
"assets/assets/images/avatar.jpg": "8d5607046177a4ade6e4fedce487f991",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2e791fb6e1e94f89f249c13d0451cb06",
"assets/NOTICES": "0f886d9b055ddcf2966fb1509a9c0f07",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "6c213fdc54a014cb6dcd39ebc7866c6b",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "af4e2b071e94fa7013469705da266462",
"icons/Icon-192.png": "3d099acbe632698df5915da4afd28d03",
"icons/Icon-512.png": "70d5a3d3351f59e7d4f92db7b00a7100",
"icons/Icon-maskable-192.png": "3d099acbe632698df5915da4afd28d03",
"icons/Icon-maskable-512.png": "70d5a3d3351f59e7d4f92db7b00a7100",
"index.html": "3d9a39b25c81184e404469837de62743",
"/": "3d9a39b25c81184e404469837de62743",
"main.dart.js": "220dccd1b3a2fd573fb769a333d02046",
"manifest.json": "fe14d15e03ef7412f10694224092f24d",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
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
