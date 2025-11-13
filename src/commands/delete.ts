import { readTasks, writeTasks } from "../utils/files";
import { parseId } from "../utils/helpers";

export function deleteCommand(idArg: string | undefined): void {
  const id = parseId(idArg);
  const tasks = readTasks();
  const filtered = tasks.filter(t => t.id !== id);

  if (filtered.length === tasks.length) {
    console.error(`Error: task ${id} not found.`);
    process.exit(1);
  }

  writeTasks(filtered);
  console.log(`Task ${id} deleted successfully.`);
}
