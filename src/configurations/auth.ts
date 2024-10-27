import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Nodemailer from "next-auth/providers/nodemailer";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
//   callbacks: {
//     async session({ session, token, user }) {
//       if (user) {
//         session.user.id = user.id;
//         session.user.name = user.name;
//         session.user.email = user.email;
//         session.user.image = user.image;
//         session.user.emailVerified = user.emailVerified;
//         token;
//         user;
//       }

//       return session;
//     },
//   },
  adapter: PrismaAdapter(prisma),
});
