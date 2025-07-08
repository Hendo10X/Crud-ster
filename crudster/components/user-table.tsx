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
import DeleteButton from "./delete-button";
import EditButton from "./edit-button";

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
                <EditButton id={user.id} />
                <DeleteButton id={user.id} />
            </TableCell>
          </TableRow>
        ))}

      </TableBody>
    </Table>
  );
}