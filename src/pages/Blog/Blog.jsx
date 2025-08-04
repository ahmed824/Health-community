"use client";
import React from "react";
import BreadCramp from "../../../components/layout/BreadCramp";
import BlogCard from "./BlogCard";
import { useTranslation } from "react-i18next";

const blogs = [
  {
    date: "13 May 2025",
    title:
      "Demo Title Of This Blog Written In Two Lines .Blog Written In Two Lines ",
    image: "/images/hand.png",
    link: "/blogs/1",
  },
  {
    date: "13 May 2025",
    title:
      "Demo Title Of This Blog Written In Two Lines Blog Written In Two Lines",
    image: "/images/hand.png",
    link: "/blogs/2",
  },
  {
    date: "13 May 2025",
    title:
      "Demo Title Of This Blog Written In Two Lines .Blog Written In Two Lines",
    image: "/images/hand.png",
    link: "/blogs/3",
  },
  {
    date: "13 May 2025",
    title:
      "Demo Title Of This Blog Written In Two Lines .Blog Written In Two Lines ",
    image: "/images/hand.png",
    link: "/blogs/1",
  },
  {
    date: "13 May 2025",
    title:
      "Demo Title Of This Blog Written In Two Lines Blog Written In Two Lines",
    image: "/images/hand.png",
    link: "/blogs/2",
  },
  {
    date: "13 May 2025",
    title:
      "Demo Title Of This Blog Written In Two Lines .Blog Written In Two Lines",
    image: "/images/hand.png",
    link: "/blogs/3",
  },
];

export default function Blog() {
  const { i18n } = useTranslation();
  const localizedBlogs = blogs.map((blog) => ({
    ...blog,
    link: `/${i18n.language}${blog.link}`,
  }));
  return (
    <>
      <BreadCramp
        heading={"our blogs"}
        paragraph={
          "Fill in your details and let us craft a professional resume just for you"
        }
        image={"clipboard.png"}
        imageClass={"bottom-9 right-40"}
      />

      <div className="mx-auto container my-10  p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {localizedBlogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      </div>
    </>
  );
}
