#!/usr/bin/env node
import { printUsage } from "./usage";
import { addCommand } from "./commands/add";
import { updateCommand } from "./commands/update";
import { deleteCommand } from "./commands/delete";
import { markCommand } from "./commands/mark";
import { listCommand } from "./commands/list";

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    printUsage();
    process.exit(0);
  }

  const [cmd, ...rest] = args;
  switch (cmd) {
    case "add":
      addCommand(rest);
      break;
    case "update":
      updateCommand(rest[0], rest.slice(1));
      break;
    case "delete":
      deleteCommand(rest[0]);
      break;
    case "mark-in-progress":
      markCommand(rest[0], "in-progress");
      break;
    case "mark-done":
      markCommand(rest[0], "done");
      break;
    case "list":
      listCommand(rest[0]);
      break;
    case "--help":
    case "-h":
      printUsage();
      break;
    default:
      console.error(`Unknown command: ${cmd}`);
      printUsage();
      process.exit(1);
  }
}

main();
