import { auth } from "@/auth";
import { Button } from "@/components/ui/Button";

export default async function TripsPage() {
  const session = await auth();
  if(!session) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        {" "}
        User not signed in.
      </div>
    )
  }

  return (
    <div className="space-y-6 container mx-auto px-4 py-8">
      {" "}
      <h1>Dashboard</h1>
      <Button>New Trip</Button>
    </div>
  )

}