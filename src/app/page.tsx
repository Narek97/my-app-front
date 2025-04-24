import { Suspense } from "react";
import Loading from "@/app/loading";
import MyConfetti from "@/components/my-confetti";
import UserCard from "@/components/user-card";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback={<Loading />}>
        <GetUser />
      </Suspense>
    </div>
  );
}

const GetUser = async () => {
  const response = await fetch(`http://localhost:5001/user`);
  const user = await response.json();

  return (
    <MyConfetti>
      <UserCard user={user} />
    </MyConfetti>
  );
};
