import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { NextAuthOptions } from "next-auth";

export const config: NextAuthOptions = {
  providers: [], // Rest of your NextAuth config
  // Add your NextAuth configuration here
};

export function auth(
  ...args: [
    GetServerSidePropsContext["req"],
    GetServerSidePropsContext["res"]
  ] | [NextApiRequest, NextApiResponse] | []
) {
  return getServerSession(...args, config);
}
