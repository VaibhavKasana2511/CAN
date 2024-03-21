import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import URL from '../../utils/services/endpoints';

const BASE_URL = 'http://54.190.192.105:9185/angel';

export const apiClient = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    reducerPath: 'apiClient',
    prepareHeaders: async (headers, {getState, endpoint}) => {
      const userToken = getState().auth.user?.Token;
      console.log('TOKEN ===>', userToken);
      if (userToken) {
        headers.set('Authorization', userToken);
        headers.set('Content-Type', 'application/json');
      } else {
        headers.set('Content-Type', 'application/json');
      }
      return headers;
    },
  }),
  endpoints: builder => ({}),
});
