import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Content Calendar | Blog Writer",
  description: "Manage your content calendar and schedule posts",
};

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl p-4 md:p-6 text-white">
        <h1 className="text-xl md:text-2xl font-bold mb-2">📅 Content Calendar</h1>
        <p className="text-indigo-100 text-sm md:text-base">
          Plan and schedule your blog content with our content calendar
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <p className="text-gray-600 dark:text-gray-300">Calendar functionality coming soon...</p>
      </div>
    </div>
  );
}
