import { Suspense } from "react";
import Loading from "@/app/loading";
import MyConfetti from "@/components/my-confetti";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback={<Loading />}>
        <GetUser />
      </Suspense>
    </div>
  );
}

const UserCard = ({ user }: { user: { name: string; email: string } }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-gray-700 font-bold">{user.name}</h2>
      <p className="text-gray-700">{user.email}</p>
    </div>
  );
};

const GetUser = async () => {
  const response = await fetch(`${process.env.NEXT_API_URL}/user`);
  const user = await response.json();

  return (
    <MyConfetti>
      <UserCard user={user} />
    </MyConfetti>
  );
};
