import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { signOut, getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: currentUser } = useCurrentUser();

  return (
    <>
      <h1 className="text-4xl text-green-500">Netflix clone</h1>
      <p className="text-white">Loggedn in as a : {currentUser?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>Logout</button>
    </>
  );
}
