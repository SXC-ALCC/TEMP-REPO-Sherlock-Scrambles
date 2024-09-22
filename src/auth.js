import { FirestoreAdapter } from "@auth/firebase-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { db } from "./lib/firestore"
import authConfig from "./auth.config"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: FirestoreAdapter(db),
  callbacks: {
    async signIn({  account, profile }) {
      if (account.provider === "google" && profile.email_verified === true && profile.email.endsWith("@sxc.edu.np")) {
        return true
      }
      return false
    }
  },
  session: { strategy: "jwt" },
  ...authConfig
})
