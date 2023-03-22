import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Item = {
    name: string;
    title: string;
    bid: string;
    image: string;
};

type Response = {
    success: boolean;
    message: string;
    data: Item[];
};

export const itemApi = createApi({
    reducerPath: "itemsApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b",
    }),
    endpoints: (builder) => ({
        getItems: builder.query<Response, null>({
            query: () => "items",
        }),
    }),
});

export const { useGetItemsQuery } = itemApi;
