# 📋 Task Management Dashboard

> A modern, full-stack web application for creating, managing, updating, and tracking tasks with a beautiful and intuitive interface.

<div align="center">

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.6-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-336791?style=flat-square&logo=postgresql)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[Live Demo](#deployment) • [Documentation](#-documentation) • [Getting Started](#-getting-started)

</div>

---

## ✨ Features

### 🎯 Core Functionality

| Feature | Description |
|---------|-------------|
| ✅ **Create Tasks** | Add new tasks with title, description, status, and due date |
| ✅ **View Tasks** | Display all tasks in an elegant dashboard with filtering options |
| ✅ **Update Tasks** | Edit existing task details seamlessly |
| ✅ **Delete Tasks** | Remove tasks with confirmation dialog for safety |
| ✅ **Status Management** | Cycle through Todo → In Progress → Completed with one click |
| ✅ **Due Date Tracking** | Set deadlines and get visual indicators for overdue tasks |
| ✅ **Smart Filtering** | Filter tasks by status with real-time task counts |

### 🎨 User Experience

- 🌐 Clean, modern, and responsive design
- ⚡ Real-time task updates without page refresh
- 🎭 Visual status indicators with intuitive color coding
- ⏰ Overdue task warnings with calendar icons
- ✔️ User-friendly form with real-time validation
- 📱 Mobile-optimized responsive layout

## 🛠️ Tech Stack

### Frontend Architecture

<table>
<tr>
<td>

**Framework & Language**
- Next.js 16.2.6 (React 19)
- TypeScript 5
- App Router Pattern

</td>
<td>

**Styling & UI**
- Tailwind CSS 4
- Lucide React Icons
- Responsive Grid Layout

</td>
<td>

**Form & State**
- React Hook Form
- Zod Validation
- React Hooks

</td>
</tr>
</table>

### Backend Infrastructure

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **API** | Next.js API Routes | RESTful endpoints with TypeScript |
| **ORM** | Prisma 6.19.3 | Type-safe database queries |
| **Runtime** | Node.js | Server-side execution |
| **Language** | TypeScript | Type safety across backend |

### Database Layer

| Component | Technology | Details |
|-----------|-----------|---------|
| **Provider** | Supabase | Managed PostgreSQL |
| **Database** | PostgreSQL | Relational database |
| **Connection** | Pooler | Connection pooling for performance |
| **Schema** | Relational | User & Task models with relations |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

| Requirement | Version | Link |
|-------------|---------|------|
| **Node.js** | 18.0+ | [Download](https://nodejs.org/) |
| **npm** or **yarn** | Latest | Included with Node.js |
| **Git** | Latest | [Download](https://git-scm.com/) |
| **Supabase Account** | Free | [Sign Up](https://supabase.com) |

> 💡 **Tip**: Use `node --version` and `npm --version` in your terminal to verify installations.

---

## 🚀 Quick Start

### Step 1️⃣ – Clone & Navigate

```bash
git clone <your-repo-url>
cd task-management-dashboard
```

### Step 2️⃣ – Install Dependencies

```bash
npm install
```

The following key packages will be installed:
- `next` - React framework
- `@prisma/client` - Database ORM
- `react-hook-form` - Form management
- `tailwindcss` - Styling
- `lucide-react` - Icons

### Step 3️⃣ – Configure Environment Variables

Create a `.env.local` file in the project root with:

```env
# Database Connection (from Supabase)
DATABASE_URL="postgresql://postgres.[PROJECT_REF]:[PASSWORD]@aws-0-[region].pooler.supabase.com:5432/postgres?sslmode=require"
DIRECT_URL="postgresql://postgres.[PROJECT_REF]:[PASSWORD]@db.[PROJECT_REF].supabase.co:5432/postgres"

# Authentication
JWT_SECRET="your-secure-random-string-min-32-characters-long"

# API Configuration
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

#### 🔑 Getting Your Supabase Connection String

1. Navigate to [supabase.com](https://supabase.com)
2. Sign in or create a free account
3. Create a new project (or use existing)
4. Go to **Settings** → **Database** → **Connection Pooler**
5. Copy the connection string
6. Paste into `.env.local` and replace `[PASSWORD]` with your database password

> ⚠️ **Security**: Never commit `.env.local` to version control

### Step 4️⃣ – Initialize Database

```bash
# Sync Prisma schema with Supabase
npx prisma db push

# Generate Prisma Client for TypeScript
npx prisma generate

# (Optional) View data visually
npx prisma studio
```

### Step 5️⃣ – Start Development Server

```bash
npm run dev
```

🎉 Open your browser to **[http://localhost:3000](http://localhost:3000)**

---

## 📁 Project Structure

```
task-management-dashboard/
│
├─ 🎨 Frontend (Client-Side)
│  ├── components/
│  │   ├── TaskCard.tsx          ← Individual task display component
│  │   ├── TaskForm.tsx          ← Create/Edit task form
│  │   ├── TaskList.tsx          ← Task list with filtering
│  │   └── Navbar.tsx            ← Navigation bar
│  │
│  ├── app/
│  │   ├── page.tsx              ← Main dashboard (client component)
│  │   ├── layout.tsx            ← Root layout wrapper
│  │   └── globals.css           ← Global Tailwind styles
│
├─ 🔧 Backend (Server-Side)
│  ├── app/api/
│  │   └── tasks/
│  │       ├── route.ts          ← GET all, POST create tasks
│  │       └── [id]/
│  │           └── route.ts      ← GET, PUT, DELETE single task
│
├─ 💾 Database & ORM
│  ├── prisma/
│  │   ├── schema.prisma         ← Database schema definition
│  │   └── migrations/           ← Database version history
│
├─ 📦 Utilities & Config
│  ├── lib/
│  │   ├── prisma.ts            ← Prisma client singleton
│  │   ├── utils.ts             ← Helper functions
│  │   └── constants.ts         ← App constants
│  │
│  ├── types/
│  │   └── index.ts             ← TypeScript interfaces
│
├─ ⚙️ Configuration Files
│  ├── .env.local                ← Environment variables (gitignored)
│  ├── .env.example              ← Template for env vars
│  ├── package.json              ← Dependencies & scripts
│  ├── tsconfig.json             ← TypeScript config
│  ├── tailwind.config.js        ← Tailwind CSS config
│  └── next.config.js            ← Next.js config
│
└── README.md                    ← This file
```

### Component Hierarchy

```
<RootLayout>
  <Navbar />
  <page (Dashboard)>
    <TaskForm />
    <TaskList>
      <TaskCard /> (multiple)
    </TaskList>
  </page>
</RootLayout>
```

---

## 📚 API Documentation

### REST Endpoints Overview

| Method | Endpoint | Status | Description |
|:------:|----------|:------:|-------------|
| **GET** | `/api/tasks` | ✅ | Retrieve all tasks |
| **POST** | `/api/tasks` | ✅ | Create a new task |
| **GET** | `/api/tasks/[id]` | ✅ | Get single task by ID |
| **PUT** | `/api/tasks/[id]` | ✅ | Update task details |
| **DELETE** | `/api/tasks/[id]` | ✅ | Delete task permanently |

### Detailed Endpoint Specifications

#### 1️⃣ Create Task

```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete project proposal",
  "description": "Finish the project proposal for Q2",
  "status": "TODO",
  "dueDate": "2024-06-30",
  "userId": "demo-user"
}
```

**Response** (201 Created)
```json
{
  "success": true,
  "data": {
    "id": "cuid123abc...",
    "title": "Complete project proposal",
    "description": "Finish the project proposal for Q2",
    "status": "TODO",
    "dueDate": "2024-06-30T00:00:00Z",
    "userId": "demo-user",
    "createdAt": "2024-05-24T10:30:00Z",
    "updatedAt": "2024-05-24T10:30:00Z"
  }
}
```

#### 2️⃣ Get All Tasks

```http
GET /api/tasks
```

**Response** (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "id": "cuid123abc...",
      "title": "Complete project proposal",
      "description": "Finish the project proposal for Q2",
      "status": "TODO",
      "dueDate": "2024-06-30T00:00:00Z",
      "userId": "demo-user",
      "createdAt": "2024-05-24T10:30:00Z",
      "updatedAt": "2024-05-24T10:30:00Z"
    }
  ]
}
```

#### 3️⃣ Update Task

```http
PUT /api/tasks/[id]
Content-Type: application/json

{
  "title": "Complete project proposal - Updated",
  "status": "IN_PROGRESS",
  "dueDate": "2024-07-15"
}
```

#### 4️⃣ Delete Task

```http
DELETE /api/tasks/[id]
```

**Response** (200 OK)
```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

### Status Code Reference

| Code | Meaning | Description |
|:----:|---------|-------------|
| 200 | ✅ OK | Request successful |
| 201 | ✅ Created | Resource created successfully |
| 400 | ❌ Bad Request | Invalid input parameters |
| 404 | ❌ Not Found | Resource not found |
| 500 | ❌ Server Error | Internal server error |

---

## 🗄️ Database Schema

### Entity Relationship Diagram

```
┌─────────────────────┐
│       Users         │
├─────────────────────┤
│ id: CUID (PK)       │
│ email: String (Unique)
│ password: String    │
│ name: String        │
│ createdAt: DateTime │
│ updatedAt: DateTime │
└──────────┬──────────┘
           │
           │ 1:N (One User has Many Tasks)
           │
┌──────────▼──────────┐
│       Tasks         │
├─────────────────────┤
│ id: CUID (PK)       │
│ title: String       │
│ description: String?│
│ status: String      │
│ dueDate: DateTime?  │
│ userId: CUID (FK)   │
│ createdAt: DateTime │
│ updatedAt: DateTime │
└─────────────────────┘
```

### Users Table Schema

```typescript
model User {
  id        String     @id @default(cuid())
  email     String     @unique
  password  String
  name      String?
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  
  // Relations
  tasks     Task[]
  
  @@index([email])
}
```

| Field | Type | Constraint | Notes |
|-------|------|-----------|-------|
| `id` | CUID | Primary Key | Auto-generated |
| `email` | String | Unique | User identifier |
| `password` | String | - | Hashed password |
| `name` | String? | Optional | User display name |
| `createdAt` | DateTime | - | Account creation timestamp |
| `updatedAt` | DateTime | - | Last update timestamp |

### Tasks Table Schema

```typescript
model Task {
  id          String    @id @default(cuid())
  title       String
  description String?
  status      String    @default("TODO")
  dueDate     DateTime?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  // Relations
  userId      String
  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@index([userId])
  @@index([status])
}
```

| Field | Type | Constraint | Notes |
|-------|------|-----------|-------|
| `id` | CUID | Primary Key | Auto-generated |
| `title` | String | Required | Task name |
| `description` | String? | Optional | Detailed description |
| `status` | String | Default: "TODO" | TODO, IN_PROGRESS, COMPLETED |
| `dueDate` | DateTime? | Optional | Task deadline |
| `userId` | CUID | Foreign Key | Links to User (Cascade Delete) |
| `createdAt` | DateTime | - | Creation timestamp |
| `updatedAt` | DateTime | - | Last modification timestamp |

### Task Status Values

```typescript
type TaskStatus = "TODO" | "IN_PROGRESS" | "COMPLETED"
```

| Status | Color | Description |
|--------|-------|-------------|
| `TODO` | 🔵 Blue | Not started |
| `IN_PROGRESS` | 🟡 Yellow | Currently working on |
| `COMPLETED` | 🟢 Green | Finished |

---

## 🎨 Design System

### Color Palette

<table>
<tr>
<td width="50%">

**Primary Colors**

| Color | Hex | Usage |
|-------|-----|-------|
| Blue | `#3b82f6` | Buttons, links, active states |
| Green | `#10b981` | Success, completed tasks |
| Yellow | `#f59e0b` | Warning, in progress |
| Red | `#ef4444` | Danger, delete, overdue |

</td>
<td width="50%">

**Neutral Colors**

| Color | Hex | Usage |
|-------|-----|-------|
| Gray-50 | `#f9fafb` | Background |
| Gray-100 | `#f3f4f6` | Light backgrounds |
| Gray-700 | `#374151` | Text |
| Gray-900 | `#111827` | Dark text |

</td>
</tr>
</table>

### Design Features

- ✨ **Modern UI** - Clean, minimalist aesthetic
- 📱 **Responsive** - Mobile, tablet, and desktop optimized
- ♿ **Accessible** - WCAG compliance with semantic HTML
- 🌙 **Consistent** - Unified design language throughout
- ⚡ **Performance** - Optimized for fast rendering

### Component Styling

- **Framework**: Tailwind CSS v4
- **Icons**: Lucide React (24+ icons)
- **Spacing**: 8px grid system
- **Typography**: System fonts with 4 weight levels

---

## 🔧 Available Commands

### Development Commands

```bash
# Start dev server with hot reload
npm run dev

# Run TypeScript type checking
npx tsc --noEmit

# Run ESLint for code quality
npm run lint
```

### Build & Production Commands

```bash
# Build for production
npm run build

# Start production server
npm start

# Analyze bundle size
npx next build --analyze
```

### Database Commands

```bash
# Sync schema with database
npx prisma db push

# Generate Prisma Client
npx prisma generate

# Create a migration
npx prisma migrate dev --name "add_field"

# Open Prisma Studio UI
npx prisma studio

# Reset database (caution!)
npx prisma migrate reset
```

### Utility Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install all dependencies |
| `npm update` | Update dependencies |
| `npm audit` | Check for security vulnerabilities |
| `npm dedupe` | Remove duplicate dependencies |

---

## 📖 Usage Guide

### Creating a New Task

<div style="background-color: #f0f9ff; padding: 12px; border-radius: 8px; margin: 10px 0;">

1. Click the **"New Task"** button (top-right)
2. **Enter task details**:
   - **Title** (required) - Brief task name
   - **Description** (optional) - Additional details
   - **Status** (default: "To Do") - Select from dropdown
   - **Due Date** (optional) - Set deadline
3. Click **"Create Task"** button
4. Task appears in dashboard immediately

</div>

### Updating an Existing Task

<div style="background-color: #f0f9ff; padding: 12px; border-radius: 8px; margin: 10px 0;">

1. Click the **Edit** (pencil) icon on task card
2. Form opens with task pre-filled
3. Modify any task details
4. Click **"Update Task"** button
5. Changes sync to database instantly

</div>

### Changing Task Status

<div style="background-color: #f0f9ff; padding: 12px; border-radius: 8px; margin: 10px 0;">

#### Method 1: Quick Toggle
- Click the **status icon** (circle) on task card
- Status cycles: Todo → In Progress → Completed

#### Method 2: Edit Form
- Open edit form and select new status from dropdown

</div>

### Deleting a Task

<div style="background-color: #ffe0e0; padding: 12px; border-radius: 8px; margin: 10px 0;">

1. Click the **Delete** (trash) icon
2. Confirmation dialog appears
3. Click **"OK"** to confirm deletion
4. Task is removed permanently

⚠️ **Warning**: Deletion is permanent and cannot be undone

</div>

### Filtering Tasks

<div style="background-color: #f0f9ff; padding: 12px; border-radius: 8px; margin: 10px 0;">

Use the **filter tabs** above task list:

| Tab | Shows | Count Badge |
|-----|-------|-------------|
| **All** | All tasks | Total count |
| **To Do** | Pending tasks | Todo count |
| **In Progress** | Active tasks | In-progress count |
| **Completed** | Finished tasks | Completed count |

Click any tab to filter tasks by status.

</div>

---

## 🚀 Deployment Guide

### Deploying to Vercel (Recommended)

Vercel is the optimal platform for Next.js applications with seamless GitHub integration.

#### Step 1️⃣ – Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2️⃣ – Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub account
3. Click **"New Project"**
4. Select your GitHub repository
5. Click **"Import"**

#### Step 3️⃣ – Configure Environment Variables

In Vercel Dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

```env
DATABASE_URL=postgresql://postgres.[REF]:PASSWORD@aws-0-region.pooler.supabase.com:5432/postgres?sslmode=require
DIRECT_URL=postgresql://postgres.[REF]:PASSWORD@db.[REF].supabase.co:5432/postgres
JWT_SECRET=your-32-character-secret-here
NEXT_PUBLIC_API_URL=https://your-app.vercel.app
```

3. Click **"Save"**

#### Step 4️⃣ – Deploy

1. Click **"Deploy"** button
2. Wait for build to complete (2-3 minutes)
3. Get your live URL (e.g., `https://task-dashboard.vercel.app`)
4. Done! 🎉

### Alternative: Deploy to Other Platforms

#### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy
```

#### Railway

1. Go to [railway.app](https://railway.app)
2. Create new project
3. Connect GitHub repository
4. Configure environment variables
5. Deploy

#### Self-Hosted (VPS/EC2)

```bash
# Build application
npm run build

# Start production server
npm start

# For persistent background running, use PM2:
npm install -g pm2
pm2 start npm --name "task-dashboard" -- start
pm2 save
```

### Post-Deployment Checklist

- ✅ Test all CRUD operations on live site
- ✅ Verify environment variables are set
- ✅ Check database connection works
- ✅ Monitor performance metrics
- ✅ Set up error logging/monitoring
- ✅ Configure custom domain (optional)

---

---

## 🚀 Future Enhancements

Potential features for future versions:

<table>
<tr>
<td width="50%">

**User Features**
- 🔐 User authentication (signup/login)
- 👥 Task sharing with team members
- 🔔 Task reminders & notifications
- 💬 Task comments & discussions
- 📎 Attachments support

</td>
<td width="50%">

**Task Management**
- ⭐ Task priorities (High/Medium/Low)
- 🏷️ Categories & tags
- 🔄 Recurring tasks
- 📋 Task templates
- 📅 Subtasks & dependencies

</td>
</tr>
<tr>
<td>

**UI/UX Enhancements**
- 🌙 Dark mode support
- 📱 Mobile app (React Native)
- 📊 Task statistics dashboard
- 🎨 Custom themes

</td>
<td>

**Export & Integration**
- 📄 Export to CSV/PDF
- 🔗 Calendar integration
- 🤖 AI task suggestions
- 📧 Email notifications

</td>
</tr>
</table>

---

## 🤖 AI Tools Used

- 🤖 **GitHub Copilot** - Code generation, debugging, and assistance
- 🧠 **Claude AI** - Architecture planning, problem-solving

## 📚 Learning Resources

Comprehensive resources to learn more about the technologies used:

| Resource | Topic | Link |
|----------|-------|------|
| Next.js Docs | Framework & deployment | [nextjs.org/docs](https://nextjs.org/docs) |
| Prisma Docs | Database & ORM | [prisma.io/docs](https://www.prisma.io/docs) |
| Tailwind CSS | Styling & utilities | [tailwindcss.com/docs](https://tailwindcss.com/docs) |
| Supabase Guides | Database setup & auth | [supabase.com/docs](https://supabase.com/docs) |
| TypeScript Handbook | Type safety | [typescriptlang.org/docs](https://www.typescriptlang.org/docs) |
| React Documentation | Frontend framework | [react.dev](https://react.dev) |

---

## 🐛 Troubleshooting

### ❌ Database Connection Issues

**Problem**: Cannot connect to database
```
Error: Can't reach database server at [host]:5432
```

**Solutions**:
1. Verify `DATABASE_URL` in `.env.local`
2. Check Supabase project is active and not paused
3. Confirm password is correct (case-sensitive)
4. Test connection with: `npx prisma db execute --stdin < query.sql`

### ❌ Prisma Client Not Found

**Problem**: Prisma client not generated
```
Error: @prisma/client did not initialize
```

**Solutions**:
```bash
# Regenerate Prisma Client
npx prisma generate

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npx prisma generate
```

### ❌ Port 3000 Already in Use

**Problem**: Address already in use
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solutions**:
```bash
# Use different port
npm run dev -- -p 3001

# Find and kill process using port 3000
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -i :3000
kill -9 <PID>
```

### ❌ Build Errors

**Problem**: Compilation errors during build
```
Error: Module not found
```

**Solutions**:
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Clear Node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### ❌ TypeScript Errors

**Problem**: Type checking fails
```
error TS2304: Cannot find name 'X'
```

**Solutions**:
```bash
# Check types
npx tsc --noEmit

# Generate types from schema
npx prisma generate

# Update types
npm run lint -- --fix
```

### ❌ Form Submission Fails

**Problem**: Tasks won't create or update
```
Error: Failed to create task
```

**Solutions**:
1. Check browser console for error details
2. Verify API endpoint is accessible
3. Check database connection
4. Validate form data format
5. Review `.env.local` variables

---

## 🚨 Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Tasks not persisting | DB not connected | Check `DATABASE_URL` |
| Slow performance | N+1 queries | Add pagination/caching |
| High memory usage | Memory leak in hooks | Profile with React DevTools |
| CORS errors | API origin mismatch | Update `NEXT_PUBLIC_API_URL` |

---

## 📞 Support & Contact

- 📧 **Email**: support@taskdashboard.dev
- 🐛 **Issues**: Report on GitHub Issues
- 💬 **Discussions**: Use GitHub Discussions
- 📖 **Docs**: Read the documentation above

---

## 📄 License & Attribution

This project is created for **screening/evaluation purposes**.

### Project Status

- ✅ **Status**: Production Ready
- ✅ **Version**: 1.0.0
- 📅 **Created**: May 24, 2026
- 📅 **Last Updated**: May 24, 2026

### Technologies Attribution

- [Next.js](https://nextjs.org/) - React Framework
- [Supabase](https://supabase.com/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Prisma](https://www.prisma.io/) - ORM
- [React Hook Form](https://react-hook-form.com/) - Forms
- [Lucide React](https://lucide.dev/) - Icons

---

<div align="center">

**Made with ❤️ using Next.js and modern web technologies**

⭐ If you found this helpful, please consider starring the repository!

</div>
