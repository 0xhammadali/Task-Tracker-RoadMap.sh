import { readTasks,writeTasks } from "../utils/files";
import {nextId, nowISO} from "../utils/helpers";
import { Task } from "../utils/types";

export function addCommand(descParts: string[]): void {
    const description = descParts.join(" ").trim();
    if(!description){
        console.error("Error: description required.");
        process.exit(1);
    }

    const tasks = readTasks();
    const id = nextId(tasks);
    const newTask: Task = {
        id,
        description,
        status: "todo",
        createdAt: nowISO(),
        updatedAt: nowISO()
    };

    tasks.push(newTask);
    writeTasks(tasks);
    console.log(`Task added successfully (ID: ${id})`);

}