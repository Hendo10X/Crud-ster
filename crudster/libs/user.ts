"use server";
import { db } from "@/db/drizzle";
import { users, User } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUsers() {
 try {
  const allUsers = await db.select().from(users);
  return allUsers;
 } catch (error) {  
  console.error(error, "Error fetching users");
  return null;
 }
}

export async function createUser(user: Omit< User, "id"|"createdAt"|"updatedAt">) {
  try {
    const [newUser] = await db.insert(users).values(user).returning();
    return newUser;
  } catch (error) {
    console.error(error, "Error creating user");
    return null;
  }
}

export async function updateUser(id: string, user: Omit<User, "id"|"createdAt"|"updatedAt">) {
  try {
    const [updatedUser] = await db.update(users).set(user).where(eq(users.id, id)).returning();
    return updatedUser;
  } catch (error) {
    console.error(error, "Error updating user");
    return null;
  }
}

export async function deleteUser(id: string) {
  try {
    await db.delete(users).where(eq(users.id, id));
  } catch (error) {
    console.error(error, "Error deleting user");
    return null;
  }
}


