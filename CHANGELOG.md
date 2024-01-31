# 🚦 CHANGELOG

## [1.3.2](https://github.com/qkrdkwl9090/nuxt3-movie-app/compare/v1.3.1...v1.3.2) (2024-01-31)


### ♻️ Refactor

* rename variable ([7a2e64e](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/7a2e64e0b7c22d22645dc49c8ae52acf1f3ebd56))

## [1.3.1](https://github.com/qkrdkwl9090/nuxt3-movie-app/compare/v1.3.0...v1.3.1) (2024-01-22)


### ♻️ Refactor

* **font:** font display swap ([ee9e754](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/ee9e754f4ef3d36ccb2a30086501060fb5727222))
* **font:** use dynamic subset ([26e72f2](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/26e72f270f7935f202036bbf37c9350b44d74f41))

## [1.3.0](https://github.com/qkrdkwl9090/nuxt3-movie-app/compare/v1.2.2...v1.3.0) (2024-01-18)


### 💫 CI/CD

* **deploy:** add deploy actions ([e16c074](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/e16c0744c5d630e1559fc80482274c7a786cf477))


### ♻️ Refactor

* change js to ts ([fe8ba71](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/fe8ba715ad99ef5ddc5a6790370a39c07625c8a3))
* convert js to ts ([a402f55](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/a402f553d775a26449cea9861dc0b3ea153429d5))
* **detail:** change dialog to page ([8932f0a](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/8932f0a67d2a14119a334e13bd6df2c971de510f))
* **detail:** detail info comp ([55218ae](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/55218aeb3501635b7f5431d1d8efe7660864d469))
* empty directory ([3b4abd0](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/3b4abd0353518aa7c2ca4ab0e330c622b4fa2f11))
* **home:** modify props name ([065db26](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/065db266a2ea5942b6e5942870722b8c8b70c456))
* modify mobile layout ([f11737f](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/f11737f2ab0623136d05883bf4e9c5b7e08c405f))
* remove movie detail store ([70074df](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/70074df6cb0508ef43b73a93559804d0731caeb7))
* use common movie container comp ([cdacf45](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/cdacf45b497b11f09691bb44a648a3503c900cf1))


### ✨ Features

* **config:** modify base URL ([99a5340](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/99a53406eb1db05b1be01a924f3cde93926ef647))
* **detail:** add description comp ([4151cbd](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/4151cbd057b4157c85f22e2a9f79fa874533d703))


### 🐛 Bug Fixes

* **ci:** github actions 동작 시, frozen lockfile로 인해 패키지 못찾아 수정 ([5de7ea0](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/5de7ea06d8bfdf39d6f9ac5faf389fb0652ba23a))
* **header:** modify event target window ([030b212](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/030b212e8dc3bee018eec67875c670f35de6c28e))
* **header:** 영화 선택 시 visible false ([c1f3d12](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/c1f3d12a6e0e637244fb83c7a67293fff567683c))
* **home:** use movie list cache ([3682f37](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/3682f3730d6ba747b853c48ef3a72a5fd066bedc))
* **home:** 유튜브 리소스가 없는 경우가 많아, 커버 이미지로 대체 ([b774a4f](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/b774a4fb9cc6005b9dc59f02f848eb47c6bb5837))
* **movie-container:** set max width ([b5773a8](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/b5773a890c8b12f4e7763114d06bfb176a8ae45f))
* **MovieList:** modify swiper props data type ([ce0f6a2](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/ce0f6a21143ecc15ea7750f4cf5234dfbe2b1785))
* **release:** only run on deploy branchgi ([0a9b689](https://github.com/qkrdkwl9090/nuxt3-movie-app/commit/0a9b68993582c5f92353f98ec7a99161822e76ae))

## [1.2.2](https://github.com/qkrdkwl9090/nuxt3_movie_app/compare/v1.2.1...v1.2.2) (2023-07-30)


### ♻️ Refactor

* **tag:** change click event tag ([6debd85](https://github.com/qkrdkwl9090/nuxt3_movie_app/commit/6debd85d763257784b66c8344a1e0171d7d41f42))

## [1.2.1](https://github.com/qkrdkwl9090/nuxt3_movie_app/compare/v1.2.0...v1.2.1) (2023-07-25)


### 🐛 Bug Fixes

* **movie-search:** nullable result ([0996083](https://github.com/qkrdkwl9090/nuxt3_movie_app/commit/0996083bebf5dd110fa06995edf8f83bce335420))
* **suggestions:** 영화 추천 클릭 시 상세가 바뀌지 않는 오류 수정 ([9a64c0a](https://github.com/qkrdkwl9090/nuxt3_movie_app/commit/9a64c0a79f7f8a58cc1fa7748df9fdc26e975a62))


### ♻️ Refactor

* **movielist:** breakpoints slidesPerView ([39d217e](https://github.com/qkrdkwl9090/nuxt3_movie_app/commit/39d217e8a810a64d4afba5342a1ed0627bbf37d8))

## [1.2.0](https://github.com/qkrdkwl9090/nuxt3_movie_app/compare/v1.1.0...v1.2.0) (2023-06-21)


### ✨ Features

* **header:** add movie search ([2044a6d](https://github.com/qkrdkwl9090/nuxt3_movie_app/commit/2044a6dcb22ee51af03b11eea4942dad2a4630cf))

## [1.1.0](https://github.com/qkrdkwl9090/nuxt3_movie_app/compare/v1.0.1...v1.1.0) (2023-06-13)


### ✨ Features

* **release:** add semantic release ([c17d718](https://github.com/qkrdkwl9090/nuxt3_movie_app/commit/c17d718f7f32efe70551ae6f2fe7b9d32b3c6456))
