import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Publishing | Blog Writer",
  description: "Publish and manage your blog posts",
};

export default function PublishingPage() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-xl p-4 md:p-6 text-white">
        <h1 className="text-xl md:text-2xl font-bold mb-2">🚀 Publishing</h1>
        <p className="text-orange-100 text-sm md:text-base">
          Publish and manage your blog posts across platforms
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <p className="text-gray-600 dark:text-gray-300">Publishing tools coming soon...</p>
      </div>
    </div>
  );
}
