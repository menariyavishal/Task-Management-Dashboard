export const TASK_STATUSES = [
  { value: "TODO", label: "To Do", color: "bg-gray-100 text-gray-800" },
  {
    value: "IN_PROGRESS",
    label: "In Progress",
    color: "bg-blue-100 text-blue-800",
  },
  {
    value: "COMPLETED",
    label: "Completed",
    color: "bg-green-100 text-green-800",
  },
];

export const TASK_STATUS_COLORS: Record<string, string> = {
  TODO: "bg-gray-100 text-gray-800",
  IN_PROGRESS: "bg-blue-100 text-blue-800",
  COMPLETED: "bg-green-100 text-green-800",
};

export const API_ROUTES = {
  TASKS: "/api/tasks",
  TASK_BY_ID: (id: string) => `/api/tasks/${id}`,
};
