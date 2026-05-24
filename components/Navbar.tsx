"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <CheckCircle2 className="w-6 h-6 text-blue-600" />
          TaskDash
        </Link>
        <div className="text-sm text-gray-600">
          Manage your tasks efficiently
        </div>
      </div>
    </nav>
  );
};
