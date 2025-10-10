import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SEO Tools | Blog Writer",
  description: "Optimize your blog posts for search engines",
};

export default function SEOPage() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-xl p-4 md:p-6 text-white">
        <h1 className="text-xl md:text-2xl font-bold mb-2">🔍 SEO Tools</h1>
        <p className="text-green-100 text-sm md:text-base">
          Optimize your content for better search engine visibility
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <p className="text-gray-600 dark:text-gray-300">SEO optimization tools coming soon...</p>
      </div>
    </div>
  );
}
