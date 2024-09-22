import { FirestoreAdapter } from "@auth/firebase-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    }
  })],
  adapter: FirestoreAdapter(),
  callbacks: {
    async signIn({  account, profile }) {
      if (account.provider === "google" && profile.email_verified === true && profile.email.endsWith("@sxc.edu.np")) {
        return true
      }
      return false
    }
  }
})
