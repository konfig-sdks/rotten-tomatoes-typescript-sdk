/* tslint:disable */
/* eslint-disable */
/*
Rotten Tomatoes

Test our API services using I/O Docs.

The version of the OpenAPI document: 1.0
Contact: mike.ralphson@gmail.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DetailedInfoApi - axios parameter creator
 * @export
 */
export const DetailedInfoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 
         * @param {string} id Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
         * @param {string} [limit] Limit the number of similar movies to show
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findSimilarMovies: async (id: string, limit?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('findSimilarMovies', 'id', id)
            const localVarPath = `/movies/{id}/similar.json`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "apikey", keyParamName: "key", configuration})
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/movies/{id}/similar.json',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 
         * @param {string} id Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClipById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getClipById', 'id', id)
            const localVarPath = `/movies/{id}/clips.json`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "apikey", keyParamName: "key", configuration})

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/movies/{id}/clips.json',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 
         * @param {string} [id] Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
         * @param {string} [type] Only supports imdb lookup at this time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMovieAliasInfo: async (id?: string, type?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/movie_alias.json`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "apikey", keyParamName: "key", configuration})
            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/movie_alias.json',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 
         * @param {string} id Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMovieByIdJson: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getMovieByIdJson', 'id', id)
            const localVarPath = `/movies/{id}.json`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "apikey", keyParamName: "key", configuration})

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/movies/{id}.json',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 
         * @param {string} id Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMovieCast: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getMovieCast', 'id', id)
            const localVarPath = `/movies/{id}/cast.json`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "apikey", keyParamName: "key", configuration})

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/movies/{id}/cast.json',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 
         * @param {string} id Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
         * @param {string} [reviewType] 3 different review types are possible: \&#39;all\&#39;, \&#39;top_critic\&#39; and \&#39;dvd\&#39;. \&#39;top_critic\&#39; shows all the Rotten Tomatoes designated top critics. \&#39;dvd\&#39; pulls the reviews given on the DVD of the movie. \&#39;all\&#39; as the name implies retrieves all reviews.
         * @param {string} [pageLimit] The number of reviews to show per page
         * @param {string} [page] The selected page of reviews
         * @param {string} [country] Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMovieReviews: async (id: string, reviewType?: string, pageLimit?: string, page?: string, country?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getMovieReviews', 'id', id)
            const localVarPath = `/movies/{id}/reviews.json`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "apikey", keyParamName: "key", configuration})
            if (reviewType !== undefined) {
                localVarQueryParameter['review_type'] = reviewType;
            }

            if (pageLimit !== undefined) {
                localVarQueryParameter['page_limit'] = pageLimit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (country !== undefined) {
                localVarQueryParameter['country'] = country;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/movies/{id}/reviews.json',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DetailedInfoApi - functional programming interface
 * @export
 */
export const DetailedInfoApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DetailedInfoApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 
         * @param {DetailedInfoApiFindSimilarMoviesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findSimilarMovies(requestParameters: DetailedInfoApiFindSimilarMoviesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findSimilarMovies(requestParameters.id, requestParameters.limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 
         * @param {DetailedInfoApiGetClipByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getClipById(requestParameters: DetailedInfoApiGetClipByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getClipById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 
         * @param {DetailedInfoApiGetMovieAliasInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMovieAliasInfo(requestParameters: DetailedInfoApiGetMovieAliasInfoRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMovieAliasInfo(requestParameters.id, requestParameters.type, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 
         * @param {DetailedInfoApiGetMovieByIdJsonRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMovieByIdJson(requestParameters: DetailedInfoApiGetMovieByIdJsonRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMovieByIdJson(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 
         * @param {DetailedInfoApiGetMovieCastRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMovieCast(requestParameters: DetailedInfoApiGetMovieCastRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMovieCast(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 
         * @param {DetailedInfoApiGetMovieReviewsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMovieReviews(requestParameters: DetailedInfoApiGetMovieReviewsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMovieReviews(requestParameters.id, requestParameters.reviewType, requestParameters.pageLimit, requestParameters.page, requestParameters.country, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DetailedInfoApi - factory interface
 * @export
 */
export const DetailedInfoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DetailedInfoApiFp(configuration)
    return {
        /**
         * 
         * @summary 
         * @param {DetailedInfoApiFindSimilarMoviesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findSimilarMovies(requestParameters: DetailedInfoApiFindSimilarMoviesRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.findSimilarMovies(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 
         * @param {DetailedInfoApiGetClipByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getClipById(requestParameters: DetailedInfoApiGetClipByIdRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getClipById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 
         * @param {DetailedInfoApiGetMovieAliasInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMovieAliasInfo(requestParameters: DetailedInfoApiGetMovieAliasInfoRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getMovieAliasInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 
         * @param {DetailedInfoApiGetMovieByIdJsonRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMovieByIdJson(requestParameters: DetailedInfoApiGetMovieByIdJsonRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getMovieByIdJson(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 
         * @param {DetailedInfoApiGetMovieCastRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMovieCast(requestParameters: DetailedInfoApiGetMovieCastRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getMovieCast(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 
         * @param {DetailedInfoApiGetMovieReviewsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMovieReviews(requestParameters: DetailedInfoApiGetMovieReviewsRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getMovieReviews(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for findSimilarMovies operation in DetailedInfoApi.
 * @export
 * @interface DetailedInfoApiFindSimilarMoviesRequest
 */
export type DetailedInfoApiFindSimilarMoviesRequest = {
    
    /**
    * Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
    * @type {string}
    * @memberof DetailedInfoApiFindSimilarMovies
    */
    readonly id: string
    
    /**
    * Limit the number of similar movies to show
    * @type {string}
    * @memberof DetailedInfoApiFindSimilarMovies
    */
    readonly limit?: string
    
}

/**
 * Request parameters for getClipById operation in DetailedInfoApi.
 * @export
 * @interface DetailedInfoApiGetClipByIdRequest
 */
export type DetailedInfoApiGetClipByIdRequest = {
    
    /**
    * Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
    * @type {string}
    * @memberof DetailedInfoApiGetClipById
    */
    readonly id: string
    
}

/**
 * Request parameters for getMovieAliasInfo operation in DetailedInfoApi.
 * @export
 * @interface DetailedInfoApiGetMovieAliasInfoRequest
 */
export type DetailedInfoApiGetMovieAliasInfoRequest = {
    
    /**
    * Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
    * @type {string}
    * @memberof DetailedInfoApiGetMovieAliasInfo
    */
    readonly id?: string
    
    /**
    * Only supports imdb lookup at this time
    * @type {string}
    * @memberof DetailedInfoApiGetMovieAliasInfo
    */
    readonly type?: string
    
}

/**
 * Request parameters for getMovieByIdJson operation in DetailedInfoApi.
 * @export
 * @interface DetailedInfoApiGetMovieByIdJsonRequest
 */
export type DetailedInfoApiGetMovieByIdJsonRequest = {
    
    /**
    * Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
    * @type {string}
    * @memberof DetailedInfoApiGetMovieByIdJson
    */
    readonly id: string
    
}

/**
 * Request parameters for getMovieCast operation in DetailedInfoApi.
 * @export
 * @interface DetailedInfoApiGetMovieCastRequest
 */
export type DetailedInfoApiGetMovieCastRequest = {
    
    /**
    * Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
    * @type {string}
    * @memberof DetailedInfoApiGetMovieCast
    */
    readonly id: string
    
}

/**
 * Request parameters for getMovieReviews operation in DetailedInfoApi.
 * @export
 * @interface DetailedInfoApiGetMovieReviewsRequest
 */
export type DetailedInfoApiGetMovieReviewsRequest = {
    
    /**
    * Movie ID. You can use the movies search endpoint or peruse the lists of movies/dvds to get the Movie ID
    * @type {string}
    * @memberof DetailedInfoApiGetMovieReviews
    */
    readonly id: string
    
    /**
    * 3 different review types are possible: \'all\', \'top_critic\' and \'dvd\'. \'top_critic\' shows all the Rotten Tomatoes designated top critics. \'dvd\' pulls the reviews given on the DVD of the movie. \'all\' as the name implies retrieves all reviews.
    * @type {string}
    * @memberof DetailedInfoApiGetMovieReviews
    */
    readonly reviewType?: string
    
    /**
    * The number of reviews to show per page
    * @type {string}
    * @memberof DetailedInfoApiGetMovieReviews
    */
    readonly pageLimit?: string
    
    /**
    * The selected page of reviews
    * @type {string}
    * @memberof DetailedInfoApiGetMovieReviews
    */
    readonly page?: string
    
    /**
    * Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data.
    * @type {string}
    * @memberof DetailedInfoApiGetMovieReviews
    */
    readonly country?: string
    
}

/**
 * DetailedInfoApiGenerated - object-oriented interface
 * @export
 * @class DetailedInfoApiGenerated
 * @extends {BaseAPI}
 */
export class DetailedInfoApiGenerated extends BaseAPI {
    /**
     * 
     * @summary 
     * @param {DetailedInfoApiFindSimilarMoviesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DetailedInfoApiGenerated
     */
    public findSimilarMovies(requestParameters: DetailedInfoApiFindSimilarMoviesRequest, options?: AxiosRequestConfig) {
        return DetailedInfoApiFp(this.configuration).findSimilarMovies(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 
     * @param {DetailedInfoApiGetClipByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DetailedInfoApiGenerated
     */
    public getClipById(requestParameters: DetailedInfoApiGetClipByIdRequest, options?: AxiosRequestConfig) {
        return DetailedInfoApiFp(this.configuration).getClipById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 
     * @param {DetailedInfoApiGetMovieAliasInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DetailedInfoApiGenerated
     */
    public getMovieAliasInfo(requestParameters: DetailedInfoApiGetMovieAliasInfoRequest = {}, options?: AxiosRequestConfig) {
        return DetailedInfoApiFp(this.configuration).getMovieAliasInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 
     * @param {DetailedInfoApiGetMovieByIdJsonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DetailedInfoApiGenerated
     */
    public getMovieByIdJson(requestParameters: DetailedInfoApiGetMovieByIdJsonRequest, options?: AxiosRequestConfig) {
        return DetailedInfoApiFp(this.configuration).getMovieByIdJson(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 
     * @param {DetailedInfoApiGetMovieCastRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DetailedInfoApiGenerated
     */
    public getMovieCast(requestParameters: DetailedInfoApiGetMovieCastRequest, options?: AxiosRequestConfig) {
        return DetailedInfoApiFp(this.configuration).getMovieCast(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 
     * @param {DetailedInfoApiGetMovieReviewsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DetailedInfoApiGenerated
     */
    public getMovieReviews(requestParameters: DetailedInfoApiGetMovieReviewsRequest, options?: AxiosRequestConfig) {
        return DetailedInfoApiFp(this.configuration).getMovieReviews(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
