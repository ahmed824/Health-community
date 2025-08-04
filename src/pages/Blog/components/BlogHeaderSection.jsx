import React from "react";
import Image from "next/image";
import { FaRegCalendarDays, FaRegClock, FaRegEye, FaRegHeart } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export default function BlogHeaderSection({ blog }) {
  return (
    <div className="mb-8">
      {/* Blog Image */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Blog Meta Information */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <FaRegCalendarDays className="text-primary" />
          <span>{blog.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegClock className="text-primary" />
          <span>{blog.readTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUser className="text-primary" />
          <span>{blog.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegEye className="text-primary" />
          <span>{blog.views} views</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegHeart className="text-primary" />
          <span>{blog.likes} likes</span>
        </div>
      </div>

      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
        {blog.title}
      </h1>

      {/* Category and Tags */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
          {blog.category}
        </span>
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
} 