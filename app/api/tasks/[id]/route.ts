import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { UpdateTaskInput, ApiResponse } from "@/types";

// GET single task
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const task = await prisma.task.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!task) {
      return NextResponse.json(
        { success: false, error: "Task not found" } as ApiResponse<null>,
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: task } as ApiResponse<typeof task>,
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/tasks/[id] error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch task" } as ApiResponse<null>,
      { status: 500 }
    );
  }
}

// PUT update task
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = (await request.json()) as UpdateTaskInput;

    // Check if task exists
    const existingTask = await prisma.task.findUnique({
      where: { id },
    });

    if (!existingTask) {
      return NextResponse.json(
        { success: false, error: "Task not found" } as ApiResponse<null>,
        { status: 404 }
      );
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data: {
        ...(body.title && { title: body.title }),
        ...(body.description !== undefined && { description: body.description }),
        ...(body.status && { status: body.status }),
        ...(body.dueDate && { dueDate: new Date(body.dueDate) }),
      },
      include: { user: true },
    });

    return NextResponse.json(
      { success: true, data: updatedTask } as ApiResponse<typeof updatedTask>,
      { status: 200 }
    );
  } catch (error) {
    console.error("PUT /api/tasks/[id] error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update task" } as ApiResponse<null>,
      { status: 500 }
    );
  }
}

// DELETE task
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Check if task exists
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return NextResponse.json(
        { success: false, error: "Task not found" } as ApiResponse<null>,
        { status: 404 }
      );
    }

    await prisma.task.delete({
      where: { id },
    });

    return NextResponse.json(
      { success: true, data: { id } } as ApiResponse<{ id: string }>,
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE /api/tasks/[id] error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete task" } as ApiResponse<null>,
      { status: 500 }
    );
  }
}
