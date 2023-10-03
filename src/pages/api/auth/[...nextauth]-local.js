// auth/[...nextauth].js
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { MySQLAdapter } from '@next-auth/mysql-adapter'

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                // Validate credentials against your SQL database
                const user = await findUserByCredentials(credentials)
                if (user) {
                    // If user is found, return the user data
                    return Promise.resolve(user)
                } else {
                    return Promise.resolve(null)
                }
            },
        }),
    ],
    adapter: MySQLAdapter({
        // Your MySQL database configuration
        host: 'localhost',
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }),
})
