import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/db'


export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes:['image', 'location', 'order'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    getProduct: builder.query({
      query: (id)=> `products/${id}.json`
    }),
    getCategories: builder.query({
      query: () => `categories.json`
    }),
    postProfileImage: builder.mutation({
      query: ({localId,image}) => ({
        url:`profileImage/${localId}.json`,
        method:"PUT",
        body:{image}
      }),
      invalidatesTags:["image"]
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImage/${localId}.json`,
      providesTags:["image"]
    }),
    postUserLocation: builder.mutation({
      query: ({localId,locationFormatted}) => ({
        url:`userLocation/${localId}.json`,
        method:"PUT",
        body:locationFormatted
      }),
      invalidatesTags:["location"]
    }),
    getUserLocation: builder.query({
      query: (localId) => `userLocation/${localId}.json`,
      providesTags:["location"]
    }),
    getOrders: builder.query({
      query: (localId) => `orders/${localId}.json`,
      transformResponse:(response) => {
       if(!response) return []
       const data = Object.keys(response).map(key =>({id:key,...response[key]}))
       return data
      },
      providesTags:["order"]
    }),
    postOrders: builder.mutation({
      query: ({localId,order}) => ({
        url:`orders/${localId}.json`,
        method:"POST",
        body:order
      }),
      invalidatesTags:["order"]
     
  }),
    deleteOrder: builder.mutation({
      query: ({ localId, orderId }) => ({
        url: `orders/${localId}/${orderId}.json`, 
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
  }),
  }),
})


export const { useGetOrdersQuery, useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery, usePostProfileImageMutation, useGetProfileImageQuery, useGetUserLocationQuery, usePostUserLocationMutation, usePostOrdersMutation, useDeleteOrderMutation } = shopApi