import {Task} from "./types";

export function nextId(tasks: Task[]): number {
    return tasks.length === 0 ? 1 : Math.max(...tasks.map( t => t.id)) + 1;
}

export function nowISO(): string {
    return new Date().toISOString();
}

export function parseId(idArg?: string): number {
    const id = Number(idArg);
    if(!Number.isInteger(id) || id <= 0) {
        console.error("Error: valid numeric ID required.");
        process.exit(1);
    }
    return id;
}