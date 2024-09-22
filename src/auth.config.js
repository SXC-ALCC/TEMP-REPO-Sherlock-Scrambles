import Google from "next-auth/providers/google"
 
/**
 * @type {import("next-auth").NextAuthConfig}
 */
export default {
  providers: [Google({
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    }
  })],
}
