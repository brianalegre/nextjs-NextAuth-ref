// // auth/[...nextauth].js
// import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'

// const options = {
//     providers: [
//         Providers.Github({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET,
//         }),
//         // Providers.Email({
//         //     server: {
//         //         host: '',
//         //         port: '',
//         //         auth: {
//         //             user: '',
//         //             pass: '',
//         //         }
//         //     },
//         //     from: '',
//         // }),
//     ],
// };

// export default (req, res) => NextAuth(req, res, options);

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)