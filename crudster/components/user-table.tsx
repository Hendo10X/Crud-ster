import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getUsers } from "@/libs/user";
import { Button } from "./ui/button";
import { Edit, Trash } from "lucide-react";

export default async function UserTable() {
  const users = await getUsers();
  return (
    <Table>
        <TableCaption>
          <p className="text-sm text-gray-500">List of Invoices</p>
        </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.createdAt?.toLocaleString()}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" className="mr-2">
                <Edit className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash className="w-4 h-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}

      </TableBody>
    </Table>
  );
}