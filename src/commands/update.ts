import { readTasks, writeTasks } from "../utils/files";
import { parseId, nowISO } from "../utils/helpers";

export function updateCommand(idArg: string | undefined, descParts: string[]): void{
    const id = parseId(idArg);
    const newDesc = descParts.join(" ").trim();
    if(!newDesc) {
        console.error("Error: new description required.");
        process.exit(1);
    }

    const tasks = readTasks();
    const task = tasks.find(t => t.id === id);
    if(!task) {
    console.error(`Error: task ${id} not found.`);
    process.exit(1);
    }
    task.description = newDesc;
    task.updatedAt = nowISO();
    writeTasks(tasks);
    console.log(`Task ${id} updated successfully.`);
}