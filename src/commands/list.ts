import { readTasks } from "../utils/files";
import { Task } from "../utils/types";

export function listCommand(filter?: string): void {
  const tasks = readTasks();
  let filtered: Task[] = tasks;

  switch (filter) {
    case undefined:
    case "all":
      break;
    case "todo":
    case "in-progress":
    case "done":
      filtered = tasks.filter(t => t.status === filter);
      break;
    default:
      console.error(`Error: invalid filter "${filter}". Use: all, todo, in-progress, done`);
      process.exit(1);
  }

  if (filtered.length === 0) {
    console.log("No tasks found.");
    return;
  }

  for (const t of filtered) {
    console.log(`ID: ${t.id}`);
    console.log(`  Description: ${t.description}`);
    console.log(`  Status: ${t.status}`);
    console.log(`  Created: ${t.createdAt}`);
    console.log(`  Updated: ${t.updatedAt}\n`);
  }
}
