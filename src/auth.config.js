import Google from "next-auth/providers/google"
 
/**
 * @type {import("next-auth").NextAuthConfig}
 */
export default {
  providers: [Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",  
      },
    }
  })],
}
