"use client"
import { useState } from "react";
import { Button } from "./ui/button";

import { Edit, Loader2 } from "lucide-react";
import { Dialog, DialogClose, DialogFooter, DialogTrigger } from "./ui/dialog";
import { DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { updateUser } from "@/libs/user";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";

export default function EditButton({id}: {id: string}) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = async () => {
        setLoading(true);
        try {
            await updateUser(id, { ...form, password: "" });
            setLoading(false);
            setOpen(false);
            toast.success("User updated successfully");
            router.refresh();
        } catch (error) {
            setLoading(false);
            toast.error("Failed to update user");
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Edit className="w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
            <DialogHeader>
                <DialogTitle>Edit User</DialogTitle>    
            </DialogHeader>
            <div className="text-sm text-gray-500 mb-4">
                Update the user information below.
            </div>
            <div className="flex flex-col gap-2">
                <Input type="text" placeholder="Name" value={form.name} onChange={handleChange} name="name" />
                <Input type="email" placeholder="Email" value={form.email} onChange={handleChange} name="email" />
            </div>
            <DialogFooter className="flex justify-center">
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
                  <Button variant="default" onClick={handleSubmit} disabled={loading}>{loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save"}</Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    );
}