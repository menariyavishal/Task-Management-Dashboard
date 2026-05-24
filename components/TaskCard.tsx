"use client";

import React from "react";
import { Trash2, Edit2, CheckCircle, Circle, AlertCircle } from "lucide-react";
import type { Task } from "@/types";
import { TASK_STATUS_COLORS } from "@/lib/constants";
import { formatDate, isOverdue } from "@/lib/utils";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  const getStatusIcon = () => {
    switch (task.status) {
      case "COMPLETED":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "IN_PROGRESS":
        return <Circle className="w-5 h-5 text-blue-600" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const showOverdueWarning = isOverdue(task.dueDate) && task.status !== "COMPLETED";

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={() => {
                const statuses = ["TODO", "IN_PROGRESS", "COMPLETED"];
                const nextStatus =
                  statuses[(statuses.indexOf(task.status) + 1) % statuses.length];
                onStatusChange(task.id, nextStatus);
              }}
              className="hover:opacity-70 transition-opacity"
              title="Click to change status"
            >
              {getStatusIcon()}
            </button>
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {task.title}
            </h3>
          </div>

          {task.description && (
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
              {task.description}
            </p>
          )}

          <div className="flex items-center gap-4 text-sm">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                TASK_STATUS_COLORS[task.status] || "bg-gray-100 text-gray-800"
              }`}
            >
              {task.status === "IN_PROGRESS"
                ? "In Progress"
                : task.status === "COMPLETED"
                  ? "Completed"
                  : "To Do"}
            </span>

            {task.dueDate && (
              <div className="flex items-center gap-1">
                {showOverdueWarning && (
                  <AlertCircle className="w-4 h-4 text-red-600" />
                )}
                <span className={showOverdueWarning ? "text-red-600 font-medium" : "text-gray-500"}>
                  {formatDate(task.dueDate)}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
            title="Edit task"
          >
            <Edit2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
            title="Delete task"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
