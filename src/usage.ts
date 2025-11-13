export function printUsage(): void {
    console.log(`
    Useage:
      task-cli add "Description"
      task-cli update <id> "New Description"
      task-cli delete <id>
      task-cli mark-in-progress <id>
      task-cli mark-done <id>
      task-cli list [all|todo|in-progress|done]

    Notes:
      - ID must be a number.
      - When listing, no argument or "all" shows all tasks.
    `)
}