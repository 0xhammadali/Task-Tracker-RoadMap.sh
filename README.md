# Task-Tracker-CLI

A command-line task manager application built with TypeScript. This tool allows you to create, update, delete, and manage tasks with different statuses (todo, in-progress, done).
## Project URL
https://roadmap.sh/projects/task-tracker
## Features

- ✅ Add new tasks
- ✏️ Update existing tasks
- 🗑️ Delete tasks
- 📋 List tasks with filtering options
- 🏷️ Mark tasks as in-progress or done
- 💾 Persistent storage using JSON files
- 🕐 Automatic timestamp tracking (created and updated dates)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd task-tracker-cli
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. (Optional) Install globally:
```bash
npm link
```

## Usage

### Commands

#### Add a Task
```bash
task-cli add "Your task description"
```
Adds a new task with status "todo".

#### Update a Task
```bash
task-cli update <id> "New description"
```
Updates the description of an existing task by ID.

#### Delete a Task
```bash
task-cli delete <id>
```
Removes a task by ID.

#### Mark Task as In-Progress
```bash
task-cli mark-in-progress <id>
```
Changes task status to "in-progress".

#### Mark Task as Done
```bash
task-cli mark-done <id>
```
Changes task status to "done".

#### List Tasks
```bash
task-cli list [filter]
```
Lists tasks with optional filtering:
- `all` or no argument: Show all tasks
- `todo`: Show tasks with "todo" status
- `in-progress`: Show tasks with "in-progress" status
- `done`: Show tasks with "done" status

#### Help
```bash
task-cli --help
# or
task-cli -h
```
Displays usage information.

## Task Structure

Each task has the following properties:
- `id` (number): Unique identifier for the task
- `description` (string): Task description
- `status` (string): One of "todo", "in-progress", or "done"
- `createdAt` (string): ISO timestamp of when the task was created
- `updatedAt` (string): ISO timestamp of when the task was last updated

## Development

### Available Scripts

- `npm run build`: Compile TypeScript to JavaScript
- `npm run dev`: Run TypeScript compiler in watch mode
- `npm start`: Run the compiled application

### Project Structure

```
src/
├── index.ts              # Main entry point and command router
├── usage.ts              # Help and usage information
├── commands/
│   ├── add.ts           # Add command implementation
│   ├── delete.ts        # Delete command implementation
│   ├── list.ts          # List command implementation
│   ├── mark.ts          # Mark command implementation
│   └── update.ts        # Update command implementation
└── utils/
    ├── files.ts         # File I/O operations
    ├── helpers.ts       # Utility helper functions
    └── types.ts         # TypeScript type definitions
```

## License

ISC