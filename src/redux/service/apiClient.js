import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import URL from '../../utils/services/endpoints';

const BASE_URL = 'http://54.190.192.105:9185/angel';

export const apiClient = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    reducerPath: 'apiClient',
    prepareHeaders: async (headers, {getState, endpoint}) => {
      const userToken = getState().root.auth.user?.Token;
      console.log('TOKEN ===>', userToken);
      if (userToken) {
        headers.set('Authorization', userToken);
        headers.set('Content-Type', 'application/json');
      } else {
        // headers.set('Content-Type', 'application/json');
      }
      return headers;
      // console.log('BODY CONTENT:', endpoint.body);
      // console.log('HEADER==>', endpoint.body instanceof FormData);
      // if (endpoint.body instanceof FormData) {
      //   headers.set('Content-Type', 'multipart/form-data'); // Set Content-Type header
      // } else {
      //   headers.set('Content-Type', 'application/json'); // Set Content-Type to JSON
      // }

      // // Set Authorization header if userToken is available
      // if (userToken) {
      //   headers.set('Authorization', userToken);
      // }
      // return headers;
    },
  }),
  endpoints: builder => ({}),
});
