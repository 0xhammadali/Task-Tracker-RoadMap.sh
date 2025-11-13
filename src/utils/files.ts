import * as fs from "fs";
import * as path from "path";
import { Task } from "./types";

const TASK_FILENAME= "tasks.json";

function tasksFilePath(): string {
        return path.join(process.cwd(),TASK_FILENAME);
}

export function readTasks(): Task[]{
    const file = tasksFilePath();
    if(!fs.existsSync(file)) return[];

    try {
        const data = fs.readFileSync(file, "utf8");
        if(!data.trim()) return [];
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? (parsed as Task[]): [];
    } catch {
        console.warn("Warning: failed to read or parse tasks.json. Starting fresh.");
        return [];
    }
}

export function writeTasks(tasks: Task[]): void {
    fs.writeFileSync(tasksFilePath(), JSON.stringify(tasks, null, 2), "utf8");

}