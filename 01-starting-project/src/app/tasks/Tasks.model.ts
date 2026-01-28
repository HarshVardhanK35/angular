export type TaskStatus = "OPEN" | "IN_PROGRESS" | "DONE"

export interface Task {
  id: string;
  status: TaskStatus;
  title: string;
  description: string;
}