'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f4b1b6a4fc327cb473e5c094b4c5c5b8",
"index.html": "70bf4c9e3f3ab254f31da4c1a86ed35f",
"/": "70bf4c9e3f3ab254f31da4c1a86ed35f",
"main.dart.js": "9d2ccc1a346498fb77336adfc6535546",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bc2e58b8781eff1fb3c17c5a7ab9d632",
".git/config": "522eac745c50f926b44fbb709827905b",
".git/objects/61/66fb647a9e11e80014c0df3f65be93e23bc47a": "1e5d58982fe55681f2f42a139a8d6d9f",
".git/objects/50/ddf4e37eb78db38c3ec4e0786af3435c8a8a17": "5c6e6680fd11bcc38a4007ccb5316699",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/fc43a9c35e687cd964b36ced05bc0464b1b8e9": "bd9ceb4b24c5364b21faa373171ba306",
".git/objects/3c/5d92fc6f426ed98be392830bc9656b784e3333": "82c8c0891dddf29da566e5c8f1308bb2",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/60/da7fcfc4a8cfe037193bbd041acea037088d91": "7d46ad1bd745babe27e12b325fbd2587",
".git/objects/33/6a1f50cec8fb80e675bbddc33a8718d4b79271": "e2949fb59722f20d5d214e03146d934c",
".git/objects/05/c565803b87ea6a332da8b40e8533baa7813f46": "1aa4a752bc4b78c0144fd82ae17f84bb",
".git/objects/a3/ca4059c82eb9e4315dd494e9449895502b0a08": "2d984d9914f6adb250e22893f666112a",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/ebf3b112a06aa6ecb52f6325c03c1c0c93c907": "b50a77b78a2267fe719e97ff5e323597",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d1be1195aeef8d64374e961f29ac26b7da2c75": "6f58888399885605c63cae31e579b85a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/f21fa8f894eea09f68a6332483c2e0bf5bc649": "d25d50df8ff73793657bfec35b9800b9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/20/95f71befd83d9a05a47436edcc9c3422f1046e": "d272c1230411a650f210923585df9c25",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/668971c32620419de0ebfcdaad9e89fe98ac72": "3c0dd5ed0a118571ee667990418cd1ce",
".git/objects/21/d0c328b156498d73693ae2cb6fc64168fd16de": "7e64c1c1f5af1d6406e3842a5611cb43",
".git/objects/43/79643715c5b0ae6a94698381a2235cdc08d45b": "d4141b0cf9f351cdd6d7753839ab2021",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/5b/5f7cb9817cbf00a585f4f619747318af62adb6": "5c9c694b7657904eb0a4baaa062d18d8",
".git/objects/55/346afa175d398c9c7cacde745a9d130aa55b30": "c53071182d11c9739764ac56bb85aa5f",
".git/objects/97/912b972e5e61b1e50acaf3d5a12606ad0878bc": "f495b7b6334adfcd421c850fbc180433",
".git/objects/0f/c43ecc8f0423698ebf670e74d56dd0e05accff": "6b9324071fbd73f987cecd7d051b4bbf",
".git/objects/0a/b878fa5933aa4048e8d45a93b001049d7a861f": "c87bf081c90e89bb524d3a6a5e0842ce",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/ea153c7c09f6f4e9fe341afe918f65f3c7ce18": "9d839e2b9cbf4f84bf0a519a3ef057eb",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/371900fe852ab91a9e02105a59d908d2be64ff": "f1897b264460cdce33e0acf21fab910a",
".git/objects/b0/0b326024e5466b1484a7c3dad9dd50fddf3b90": "15fc69ebb5318b00d510498f1a23c71b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/40c6d52f9fd4bcf1688ed4b9f03d6900b57e77": "eea33231bfde61660294e6d24750f4d6",
".git/objects/ef/317f2195654c2fb49089127a94f9f79695e149": "148e215257750d6ad7f12acb6a441c0c",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ff/0fcbd804a3c425cc3186737d36ddf6a9099675": "1024105d574464b8e135d790da0988be",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c2/f1c49fae3c51cca1f04048db2dd1d99b176121": "777cc3a7ddaaa1a763fe364add56af1c",
".git/objects/f1/3d72ec316f07f3fcb22b989de814239c0962d1": "0ab5418c3ccfbba3bbae345f84d39390",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/0462c109cc8a3fd1f86923173c7a9105176ee5": "4c9551db016f86f32640f750379e5f1a",
".git/objects/83/b74eadd7681c430b081fca00573b131653d982": "6884e382543bfc807c35d6f242e0e5e6",
".git/objects/77/e1239031f5c2a9681600152a3fc0f9481b7e0d": "3d05a858bf687c2392fb314a6f6b42a8",
".git/objects/1e/332cf9dce872af44be353aa0b2b83e88eaeec9": "b57905e103aae5dfcc565e5a926c99f4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/63f0ff57f437842239ad3e7c842e949ad76bf9": "9a0ca99b619e7895c4eb32a72f6fad8f",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/2b/8d23c11314ab09b222664a64de6b86d10a18d9": "eaddf5357b1878bcbaa6d04dae154f21",
".git/objects/8e/89a5e096ed0e267c5fdb6411990f5a371dd079": "ddf1455baf08d6badc0bfd3c872c516a",
".git/objects/25/b6582fceb510355f358a90299f59e340102560": "058642c0ebf1f388d6c783b29e192db4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4166d7dc16494b558b849b9b36fe61ad",
".git/logs/refs/heads/main": "68feaed42d25927236b1c0f2a34aa8b7",
".git/logs/refs/remotes/origin/main": "0f7fce4e6a247bfe33cb176746d06192",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "63190098a5581354f38c9bf593ef8f5f",
".git/refs/remotes/origin/main": "63190098a5581354f38c9bf593ef8f5f",
".git/index": "a7b9ed17c0870771e90fec3403a77265",
".git/COMMIT_EDITMSG": "69103e5af80118b578d06c61e33a05da",
"assets/AssetManifest.json": "658e087b5dc2be06d0f26da796512552",
"assets/NOTICES": "7573185208c365625958ab41fb435900",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6b21ecc95632d3804d729eaff40df6fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e997c327facb8408cb3d1b436590ccf5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "26d83ef965c2ccfef759a87fa73e6478",
"assets/fonts/MaterialIcons-Regular.otf": "7b9fc57c7778485f7e18855dd6635312",
"assets/assets/account-login-line-icon-new-user-register_.jpg": "ed6558d7392d279b66be2535caa2c1e9",
"assets/assets/viewuser.jpeg": "7da2e1bf7034eb2a0e2bd172902d2fb1",
"assets/assets/children.jpg": "bd4a0719893096cee9234cbd8bd6e137",
"assets/assets/logo-removebg-preview.png": "b6298e95496434ac1ad7e283eb9bce5a",
"assets/assets/logo.png": "bff716a8eb0afd86448aa920d0947700",
"assets/assets/kid.webp": "3f4451f12add19796162a89c428ab1e3",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
