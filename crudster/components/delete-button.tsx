"use client"
import { deleteUser } from "@/libs/user";
import { Button } from "./ui/button";
import { Loader2, Trash } from "lucide-react";
import { useState } from "react";
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
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function DeleteButton({id}: {id: string}) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
        const handleDelete = async () => {
        setLoading(true);
        await deleteUser(id);
        setLoading(false);
        toast.error("User deleted successfully");
        router.refresh();
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" disabled={loading}>
                    <Trash className="w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete User</DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-sm text-gray-500">Are you sure you want to delete this user? This action cannot be undone.
                </DialogDescription>
                <DialogFooter className="flex justify-center">
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="destructive" onClick={handleDelete} disabled={loading}>{loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Delete"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}