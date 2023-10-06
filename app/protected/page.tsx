import SignOut from "@/app/components/sign-out";
import Test from "@/app/components/test";
import { getServerSession } from "next-auth";
import { Redirect } from "next";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession()
  if(!session || !session.user){
    redirect('/login')
  }
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
       <h1 className="text-white"> This is a protected route </h1> 
        <Test />
        <SignOut />
      </div>
    </div>
  );
}
