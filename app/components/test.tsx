"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";

export default function Test() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  async function handleClick (){
  const session = await getServerSession();
   console.log(session)
    
  }
  return (
    <div>
      <button onClick={handleClick}>
        hello
      </button>
    </div>
  );
}
