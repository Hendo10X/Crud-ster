import UserTable from "@/components/user-table";

export default function Home() {
    return (
    <div className="flex flex-col gap-4 max-w-7xl p-4 md:p-24">
      <h1 className="text-2xl font-bold">Users</h1>
     <UserTable/> 
    </div>
  );
}