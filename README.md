<div align="center">

[![Visit Rotten tomatoes](./header.png)](https://developer.fandango.com&#x2F;rotten_tomatoes)

# [Rotten tomatoes](https://developer.fandango.com&#x2F;rotten_tomatoes)<a id="rotten-tomatoes"></a>

Test our API services using I/O Docs.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`rottentomatoes.dvdLists.getCurrentReleases`](#rottentomatoesdvdlistsgetcurrentreleases)
  * [`rottentomatoes.dvdLists.getNewReleasesJson`](#rottentomatoesdvdlistsgetnewreleasesjson)
  * [`rottentomatoes.dvdLists.getTopRentalsJson`](#rottentomatoesdvdlistsgettoprentalsjson)
  * [`rottentomatoes.dvdLists.getUpcomingDvds`](#rottentomatoesdvdlistsgetupcomingdvds)
  * [`rottentomatoes.detailedInfo.findSimilarMovies`](#rottentomatoesdetailedinfofindsimilarmovies)
  * [`rottentomatoes.detailedInfo.getClipById`](#rottentomatoesdetailedinfogetclipbyid)
  * [`rottentomatoes.detailedInfo.getMovieAliasInfo`](#rottentomatoesdetailedinfogetmoviealiasinfo)
  * [`rottentomatoes.detailedInfo.getMovieByIdJson`](#rottentomatoesdetailedinfogetmoviebyidjson)
  * [`rottentomatoes.detailedInfo.getMovieCast`](#rottentomatoesdetailedinfogetmoviecast)
  * [`rottentomatoes.detailedInfo.getMovieReviews`](#rottentomatoesdetailedinfogetmoviereviews)
  * [`rottentomatoes.movieLists.getBoxOfficeJson`](#rottentomatoesmovielistsgetboxofficejson)
  * [`rottentomatoes.movieLists.getIntheaterMovies`](#rottentomatoesmovielistsgetintheatermovies)
  * [`rottentomatoes.movieLists.getOpeningMovies`](#rottentomatoesmovielistsgetopeningmovies)
  * [`rottentomatoes.movieLists.getUpcomingMovies`](#rottentomatoesmovielistsgetupcomingmovies)
  * [`rottentomatoes.search.moviesJson`](#rottentomatoessearchmoviesjson)
  * [`rottentomatoes.topLevelLists.getData`](#rottentomatoestoplevellistsgetdata)
  * [`rottentomatoes.topLevelLists.getDvds`](#rottentomatoestoplevellistsgetdvds)
  * [`rottentomatoes.topLevelLists.getMoviesJson`](#rottentomatoestoplevellistsgetmoviesjson)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Rotten%20Tomatoes&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { RottenTomatoes } from "rotten-tomatoes-typescript-sdk";

const rottentomatoes = new RottenTomatoes({
  // Defining the base path is optional and defaults to http://api.rottentomatoes.com/api/public/v1.0
  // basePath: "http://api.rottentomatoes.com/api/public/v1.0",
  apiKey: "API_KEY",
});

const getCurrentReleasesResponse =
  await rottentomatoes.dvdLists.getCurrentReleases({
    pageLimit: "16",
    page: "1",
    country: "us",
  });

console.log(getCurrentReleasesResponse);
```

## Reference<a id="reference"></a>


### `rottentomatoes.dvdLists.getCurrentReleases`<a id="rottentomatoesdvdlistsgetcurrentreleases"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCurrentReleasesResponse =
  await rottentomatoes.dvdLists.getCurrentReleases({
    pageLimit: "16",
    page: "1",
    country: "us",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageLimit: `string`<a id="pagelimit-string"></a>

The amount of new release dvds to show per page

##### page: `string`<a id="page-string"></a>

The selected page of current DVD releases

##### country: `string`<a id="country-string"></a>

Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/dvds/current_releases.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.dvdLists.getNewReleasesJson`<a id="rottentomatoesdvdlistsgetnewreleasesjson"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNewReleasesJsonResponse =
  await rottentomatoes.dvdLists.getNewReleasesJson({
    pageLimit: "16",
    page: "1",
    country: "us",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageLimit: `string`<a id="pagelimit-string"></a>

The amount of new release dvds to show per page

##### page: `string`<a id="page-string"></a>

The selected page of new release DVDs

##### country: `string`<a id="country-string"></a>

Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/dvds/new_releases.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.dvdLists.getTopRentalsJson`<a id="rottentomatoesdvdlistsgettoprentalsjson"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTopRentalsJsonResponse =
  await rottentomatoes.dvdLists.getTopRentalsJson({
    limit: "10",
    country: "us",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

Limits the number of top rentals returned

##### country: `string`<a id="country-string"></a>

Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/dvds/top_rentals.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.dvdLists.getUpcomingDvds`<a id="rottentomatoesdvdlistsgetupcomingdvds"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUpcomingDvdsResponse = await rottentomatoes.dvdLists.getUpcomingDvds({
  pageLimit: "16",
  page: "1",
  country: "us",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageLimit: `string`<a id="pagelimit-string"></a>

The amount of upcoming dvds to show per page

##### page: `string`<a id="page-string"></a>

The selected page of upcoming DVDs

##### country: `string`<a id="country-string"></a>

Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/dvds/upcoming.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.detailedInfo.findSimilarMovies`<a id="rottentomatoesdetailedinfofindsimilarmovies"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findSimilarMoviesResponse =
  await rottentomatoes.detailedInfo.findSimilarMovies({
    id: "770672122",
    limit: "5",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID

##### limit: `string`<a id="limit-string"></a>

Limit the number of similar movies to show

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/movies/{id}/similar.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.detailedInfo.getClipById`<a id="rottentomatoesdetailedinfogetclipbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getClipByIdResponse = await rottentomatoes.detailedInfo.getClipById({
  id: "770672122",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/movies/{id}/clips.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.detailedInfo.getMovieAliasInfo`<a id="rottentomatoesdetailedinfogetmoviealiasinfo"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMovieAliasInfoResponse =
  await rottentomatoes.detailedInfo.getMovieAliasInfo({
    id: "0031381",
    type: "imdb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID

##### type: `string`<a id="type-string"></a>

Only supports imdb lookup at this time

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/movie_alias.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.detailedInfo.getMovieByIdJson`<a id="rottentomatoesdetailedinfogetmoviebyidjson"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMovieByIdJsonResponse =
  await rottentomatoes.detailedInfo.getMovieByIdJson({
    id: "770672122",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/movies/{id}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.detailedInfo.getMovieCast`<a id="rottentomatoesdetailedinfogetmoviecast"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMovieCastResponse = await rottentomatoes.detailedInfo.getMovieCast({
  id: "770672122",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/movies/{id}/cast.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.detailedInfo.getMovieReviews`<a id="rottentomatoesdetailedinfogetmoviereviews"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMovieReviewsResponse =
  await rottentomatoes.detailedInfo.getMovieReviews({
    id: "770672122",
    reviewType: "top_critic",
    pageLimit: "20",
    page: "1",
    country: "us",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID

##### reviewType: `string`<a id="reviewtype-string"></a>

3 different review types are possible: \'all\', \'top_critic\' and \'dvd\'. \'top_critic\' shows all the Rotten Tomatoes designated top critics. \'dvd\' pulls the reviews given on the DVD of the movie. \'all\' as the name implies retrieves all reviews.

##### pageLimit: `string`<a id="pagelimit-string"></a>

The number of reviews to show per page

##### page: `string`<a id="page-string"></a>

The selected page of reviews

##### country: `string`<a id="country-string"></a>

Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/movies/{id}/reviews.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.movieLists.getBoxOfficeJson`<a id="rottentomatoesmovielistsgetboxofficejson"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBoxOfficeJsonResponse =
  await rottentomatoes.movieLists.getBoxOfficeJson({
    limit: "16",
    country: "us",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

Limits the number of movies returned

##### country: `string`<a id="country-string"></a>

Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/movies/box_office.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.movieLists.getIntheaterMovies`<a id="rottentomatoesmovielistsgetintheatermovies"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getIntheaterMoviesResponse =
  await rottentomatoes.movieLists.getIntheaterMovies({
    pageLimit: "16",
    page: "1",
    country: "us",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageLimit: `string`<a id="pagelimit-string"></a>

The amount of movies in theaters to show per page

##### page: `string`<a id="page-string"></a>

The selected page of in theaters movies

##### country: `string`<a id="country-string"></a>

Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/movies/in_theaters.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.movieLists.getOpeningMovies`<a id="rottentomatoesmovielistsgetopeningmovies"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOpeningMoviesResponse =
  await rottentomatoes.movieLists.getOpeningMovies({
    limit: "16",
    country: "us",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

Limits the number of opening movies returned

##### country: `string`<a id="country-string"></a>

Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/movies/opening.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.movieLists.getUpcomingMovies`<a id="rottentomatoesmovielistsgetupcomingmovies"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUpcomingMoviesResponse =
  await rottentomatoes.movieLists.getUpcomingMovies({
    pageLimit: "16",
    page: "1",
    country: "us",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageLimit: `string`<a id="pagelimit-string"></a>

The amount of upcoming movies to show per page

##### page: `string`<a id="page-string"></a>

The selected page of upcoming movies

##### country: `string`<a id="country-string"></a>

Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/movies/upcoming.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.search.moviesJson`<a id="rottentomatoessearchmoviesjson"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const moviesJsonResponse = await rottentomatoes.search.moviesJson({
  pageLimit: "10",
  page: "1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

The plain text search query to search for a movie. Remember to URI encode this!

##### pageLimit: `string`<a id="pagelimit-string"></a>

The amount of movie search results to show per page

##### page: `string`<a id="page-string"></a>

The selected page of movie search results

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/movies.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.topLevelLists.getData`<a id="rottentomatoestoplevellistsgetdata"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDataResponse = await rottentomatoes.topLevelLists.getData();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.topLevelLists.getDvds`<a id="rottentomatoestoplevellistsgetdvds"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDvdsResponse = await rottentomatoes.topLevelLists.getDvds();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/dvds.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `rottentomatoes.topLevelLists.getMoviesJson`<a id="rottentomatoestoplevellistsgetmoviesjson"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMoviesJsonResponse =
  await rottentomatoes.topLevelLists.getMoviesJson();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/movies.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
