import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const adminUser = {
    email: "admin@codefiy.com",
    password: "123456"
}
export const authOptions = {
    secret:'codefiy',
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // 'Sign in with Credentials'
            name: 'Email and Password',
            //form input
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter Your Email" },
                password: { label: "Password", type: "password", placeholder: "Enter Your Password" },
            },
            async authorize(credentials, req) {

                //login logic
                if (credentials.email === adminUser.email && credentials.password === adminUser.password) {
                    return adminUser
                }
                return null
            }
        })
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Logout redirect → Home
            if (url.includes("/api/auth/signout")) {
                return "/";
            }
            // Login redirect → Services page
            return "/services";
        },
    },
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }