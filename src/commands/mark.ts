import { readTasks, writeTasks } from "../utils/files";
import { parseId, nowISO } from "../utils/helpers";
import { Status } from "../utils/types";

export function markCommand(idArg: string | undefined, newStatus: Status): void {
  const id = parseId(idArg);
  const tasks = readTasks();
  const task = tasks.find(t => t.id === id);

  if (!task) {
    console.error(`Error: task ${id} not found.`);
    process.exit(1);
  }

  task.status = newStatus;
  task.updatedAt = nowISO();
  writeTasks(tasks);
  console.log(`Task ${id} marked as ${newStatus}.`);
}
