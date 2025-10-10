import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Post Analytics | Blog Writer",
  description: "View detailed analytics for your blog posts",
};

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-700 rounded-xl p-4 md:p-6 text-white">
        <h1 className="text-xl md:text-2xl font-bold mb-2">📊 Post Analytics</h1>
        <p className="text-purple-100 text-sm md:text-base">
          Track your blog performance with detailed analytics and insights
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <p className="text-gray-600 dark:text-gray-300">Analytics dashboard coming soon...</p>
      </div>
    </div>
  );
}
