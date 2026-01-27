import { styleText } from "node:util";
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
    console.log(styleText("green", `Task added: ${title}`));
    return task;
  }

  updateStatus(id: string, status: TaskStatus): void {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      console.log(styleText("red", `Task not found: ${id}`));
      return;
    }

    task.status = status;
    const statusColors: Record<TaskStatus, (text: string) => string> = {
      pending: (text) => styleText("yellow", text),
      "in-progress": (text) => styleText("blue", text),
      completed: (text) => styleText("green", text),
      failed: (text) => styleText("red", text),
    };

    console.log(statusColors[status](`Task ${id} status: ${status}`));
  }

  getTasksByStatus(status: TaskStatus): Task[] {
    return this.tasks.filter((t) => t.status === status);
  }

  printSummary(): void {
    console.log(styleText("blue", "=== Task Summary ==="));
    const summary = this.tasks.reduce(
      (acc, task) => {
        acc[task.status] = (acc[task.status] || 0) + 1;
        return acc;
      },
      {} as Record<TaskStatus, number>,
    );

    console.log(styleText("yellow", `Pending: ${summary.pending || 0}`));
    console.log(
      styleText("blue", `In Progress: ${summary["in-progress"] || 0}`),
    );
    console.log(styleText("green", `Completed: ${summary.completed || 0}`));
    console.log(styleText("red", `Failed: ${summary.failed || 0}`));
  }
}
