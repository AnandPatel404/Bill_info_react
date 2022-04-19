import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const SignInSlice = createApi({
    reducerPath: "SignIn",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/auth" }),
    endpoints: (builder) => ({
        getUser: builder.mutation({
            query: (NewUser) => {
                return {
                    url: "/send_otp",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: NewUser,
                };
            },
        }),
    }),
});

export const { useGetUserMutation } = SignInSlice;
