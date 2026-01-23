import chalk from "chalk";
import { Logger } from "../utils/logger";

export type TaskStatus = "pending" | "in-progress" | "completed" | "failed";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: Date;
}

export class TaskManager {
  private logger: Logger;
  private tasks: Task[];

  constructor() {
    this.logger = new Logger("TaskManager");
    this.tasks = [];
  }

  addTask(title: string): Task {
    const task: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      status: "pending",
      createdAt: new Date(),
    };

    this.tasks.push(task);
    console.log(chalk.green(`Task added: ${title}`));
    return task;
  }

  updateStatus(id: string, status: TaskStatus): void {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      console.log(chalk.red(`Task not found: ${id}`));
      return;
    }

    task.status = status;
    const statusColors: Record<TaskStatus, any> = {
      pending: chalk.yellow,
      "in-progress": chalk.blue,
      completed: chalk.green,
      failed: chalk.red,
    };

    console.log(statusColors[status](`Task ${id} status: ${status}`));
  }

  printSummary(): void {
    console.log(chalk.blue("=== Task Summary ==="));
    const summary = this.tasks.reduce(
      (acc, task) => {
        acc[task.status] = (acc[task.status] || 0) + 1;
        return acc;
      },
      {} as Record<TaskStatus, number>,
    );

    console.log(chalk.yellow(`Pending: ${summary.pending || 0}`));
    console.log(chalk.blue(`In Progress: ${summary["in-progress"] || 0}`));
    console.log(chalk.green(`Completed: ${summary.completed || 0}`));
    console.log(chalk.red(`Failed: ${summary.failed || 0}`));
  }
}
