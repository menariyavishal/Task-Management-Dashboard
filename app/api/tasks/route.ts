import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { CreateTaskInput, ApiResponse } from "@/types";

// GET all tasks
export async function GET(request: NextRequest) {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: true },
    });

    return NextResponse.json(
      { success: true, data: tasks } as ApiResponse<typeof tasks>,
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/tasks error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch tasks" } as ApiResponse<null>,
      { status: 500 }
    );
  }
}

// POST create task
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateTaskInput & { userId: string };

    if (!body.title || !body.userId) {
      return NextResponse.json(
        { success: false, error: "Title and userId are required" } as ApiResponse<null>,
        { status: 400 }
      );
    }

    // Ensure demo user exists
    let user = await prisma.user.findUnique({
      where: { id: body.userId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          id: body.userId,
          email: `${body.userId}@demo.local`,
          password: "demo",
          name: "Demo User",
        },
      });
    }

    const task = await prisma.task.create({
      data: {
        title: body.title,
        description: body.description || null,
        status: body.status || "TODO",
        dueDate: body.dueDate ? new Date(body.dueDate) : null,
        userId: body.userId,
      },
      include: { user: true },
    });

    return NextResponse.json(
      { success: true, data: task } as ApiResponse<typeof task>,
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/tasks error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create task" } as ApiResponse<null>,
      { status: 500 }
    );
  }
}
