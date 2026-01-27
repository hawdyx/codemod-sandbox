import { styleText } from "node:util";
import chalk from "chalk";
import { UserService } from "./services/user-service";
import { TaskManager } from "./services/task-manager";
import { Validator } from "./validators/validator";
import { printBanner, formatSuccess, formatError } from "./utils/formatter";
import { printConfig } from "./config/config";

console.log(styleText("blue", "Starting application..."));
console.log(chalk.cyan("Initializing with chalk..."));
printBanner("Task Management System");
printConfig();

const userService = new UserService();
const taskManager = new TaskManager();
const validator = new Validator();

// User operations
console.log(styleText("green", "\n--- User Management ---"));
console.log(chalk.bold.magenta("Managing users with chalk"));
const user1 = userService.createUser("John Doe", "john@example.com");
const user2 = userService.createUser("Jane Smith", "jane@example.com");
userService.listUsers();

// Validation
console.log(styleText("blue", "\n--- Validation ---"));
validator.validateEmail("test@example.com");
validator.validateEmail("invalid-email");
validator.validatePassword("securepass123");
validator.validatePassword("short");

// Task operations
console.log(styleText("green", "\n--- Task Management ---"));
const task1 = taskManager.addTask("Setup project");
const task2 = taskManager.addTask("Write tests");
const task3 = taskManager.addTask("Deploy application");

taskManager.updateStatus(task1.id, "completed");
taskManager.updateStatus(task2.id, "in-progress");
taskManager.updateStatus(task3.id, "pending");
taskManager.printSummary();

// Cleanup
console.log(styleText("blue", "\n--- Cleanup ---"));
userService.deleteUser(user1.id);
userService.listUsers();

// Comment goes here
console.log("webhook test pr #1");

console.log(formatSuccess("Application completed successfully"));
