import { Button } from "@/components/ui/button";
import UserTable from "@/components/user-table";
import { UserPlus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UserForm from "@/components/user-form";

export default function Home() {
    return (
    <div className="flex flex-col gap-4 max-w-7xl p-4 md:p-24 mx-auto items-center">
      <h1 className="text-2xl font-bold">Users</h1>
      <div className="flex gap-2 justify-end items-center w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add User <UserPlus className="w-4 h-4" /></Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <UserForm />
        </DialogContent>
      </Dialog>
      </div>
     <UserTable/> 
    </div>
  );
}