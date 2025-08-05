import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarDays, FaRegEye } from "react-icons/fa6";

export default function BlogSidebarSection() {
  const relatedBlogs = [
    {
      id: "2",
      title: "Mental Health Awareness: Breaking the Stigma",
      image: "/images/hand.png",
      date: "12 May 2025",
      views: 892,
      link: "/blog/2",
    },
    {
      id: "3",
      title: "Preventive Medicine: The Key to Long-term Health",
      image: "/images/hand.png",
      date: "11 May 2025",
      views: 1563,
      link: "/blog/3",
    },
  ];

  const categories = [
    { name: "Technology", count: 15 },
    { name: "Mental Health", count: 12 },
    { name: "Preventive Care", count: 8 },
    { name: "Research", count: 6 },
    { name: "Wellness", count: 10 },
  ];

  const popularTags = [
    "Healthcare", "Technology", "AI", "Mental Health", "Prevention", 
    "Wellness", "Research", "Innovation", "Patient Care", "Medical"
  ];

  return (
    <div className="lg:w-80 space-y-6">
      {/* Related Blogs */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-primary mb-4">Related Blogs</h3>
        <div className="space-y-4">
          {relatedBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={blog.link}
              className="block group hover:bg-gray-50 rounded-lg p-3 transition-colors"
            >
              <div className="flex gap-3">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 text-sm">
                    {blog.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaRegCalendarDays />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegEye />
                      {blog.views}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-primary mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/blogs/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-primary transition-colors">
                {category.name}
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-primary mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <Link
              key={index}
              href={`/blogs/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup
      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
        <p className="text-white/90 text-sm mb-4">
          Get the latest healthcare insights and blog updates delivered to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <button className="w-full bg-white text-primary font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div> */}
    </div>
  );
} 