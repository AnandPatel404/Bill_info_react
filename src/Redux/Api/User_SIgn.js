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
        verifyUser: builder.mutation({
            query: (verifyUser) => {
                return {
                    url: "/otp_verify",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: verifyUser,
                };
            },
        }),
        userPassword: builder.mutation({
            query: (userDetails) => {
                return {
                    url: "/register_set_password",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: userDetails,
                };
            },
        }),
        UserLogIn: builder.mutation({
            query: (userDetails) => {
                return {
                    url: "/login",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: userDetails,
                };
            },
        }),
    }),
});

export const {
    useGetUserMutation,
    useVerifyUserMutation,
    useUserPasswordMutation,
    useUserLogInMutation,
} = SignInSlice;
