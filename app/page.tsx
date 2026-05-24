"use client";

import React, { useState, useEffect } from "react";
import { Plus, Loader } from "lucide-react";
import type { Task } from "@/types";
import { TaskList } from "@/components/TaskList";
import { TaskForm } from "@/components/TaskForm";
import { API_ROUTES } from "@/lib/constants";

interface TaskWithoutUser extends Omit<Task, 'user'> {}

export default function Home() {
  const [tasks, setTasks] = useState<TaskWithoutUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState<TaskWithoutUser | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Use a demo userId (in production, get from auth)
  const DEMO_USER_ID = "demo-user";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_ROUTES.TASKS);
      const data = await response.json();

      if (data.success) {
        // Filter tasks for demo user
        const userTasks = data.data.filter((task: Task) => task.userId === DEMO_USER_ID);
        setTasks(userTasks);
      }
    } catch (err) {
      setError("Failed to load tasks");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (formData: any) => {
    try {
      setIsSubmitting(true);
      setError("");

      const response = await fetch(API_ROUTES.TASKS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          userId: DEMO_USER_ID,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setTasks([data.data, ...tasks]);
        setShowForm(false);
      } else {
        setError(data.error || "Failed to create task");
      }
    } catch (err) {
      setError("Failed to create task");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateTask = async (formData: any) => {
    if (!editingTask) return;

    try {
      setIsSubmitting(true);
      setError("");

      const response = await fetch(API_ROUTES.TASK_BY_ID(editingTask.id), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setTasks(tasks.map((t) => (t.id === editingTask.id ? data.data : t)));
        setEditingTask(null);
        setShowForm(false);
      } else {
        setError(data.error || "Failed to update task");
      }
    } catch (err) {
      setError("Failed to update task");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteTask = async (id: string) => {
    if (!confirm("Are you sure you want to delete this task?")) return;

    try {
      const response = await fetch(API_ROUTES.TASK_BY_ID(id), {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        setTasks(tasks.filter((t) => t.id !== id));
      } else {
        setError(data.error || "Failed to delete task");
      }
    } catch (err) {
      setError("Failed to delete task");
      console.error(err);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const response = await fetch(API_ROUTES.TASK_BY_ID(id), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();

      if (data.success) {
        setTasks(tasks.map((t) => (t.id === id ? data.data : t)));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tasks Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage and track your tasks</p>
        </div>
        <button
          onClick={() => {
            setEditingTask(null);
            setShowForm(!showForm);
          }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Task
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
          <button
            onClick={() => setError("")}
            className="ml-2 font-medium underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Form Section */}
      {showForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {editingTask ? "Edit Task" : "Create New Task"}
            </h2>
            <button
              onClick={() => {
                setShowForm(false);
                setEditingTask(null);
              }}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          <TaskForm
            task={editingTask}
            onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
            isLoading={isSubmitting}
            userId={DEMO_USER_ID}
          />
        </div>
      )}

      {/* Tasks Section */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader className="w-8 h-8 text-blue-600 animate-spin" />
        </div>
      ) : (
        <TaskList
          tasks={tasks}
          onEdit={(task) => {
            setEditingTask(task);
            setShowForm(true);
          }}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
        />
      )}
    </main>
  );
}
