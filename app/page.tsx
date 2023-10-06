
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
export default async function Home() {
  const session = await getServerSession();

  return (
  <>
   getServerSession Result 
   {session?.user?.email ? (<div>{session?.user?.email}</div>) : (<div>Not logged in</div>)}
  </>
  );
}
