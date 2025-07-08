"use client";
import React from "react";
import BreadCramp from "../../../components/layout/BreadCramp";
import BlogCard from "./BlogCard";

const blogs = [
  {
    date: "13 May 2025",
    title: "Demo Title Of This Blog Written In Two Lines .Blog Written In Two Lines ",
    image: "/images/hand.png",
    link: "/blog/1",
  },
  {
    date: "13 May 2025",
    title: "Demo Title Of This Blog Written In Two Lines Blog Written In Two Lines",
    image: "/images/hand.png",
    link: "/blog/2",
  },
  {
    date: "13 May 2025",
    title: "Demo Title Of This Blog Written In Two Lines .Blog Written In Two Lines",
    image: "/images/hand.png",
    link: "/blog/3",
  },
  {
    date: "13 May 2025",
    title: "Demo Title Of This Blog Written In Two Lines .Blog Written In Two Lines ",
    image: "/images/hand.png",
    link: "/blog/1",
  },
  {
    date: "13 May 2025",
    title: "Demo Title Of This Blog Written In Two Lines Blog Written In Two Lines",
    image: "/images/hand.png",
    link: "/blog/2",
  },
  {
    date: "13 May 2025",
    title: "Demo Title Of This Blog Written In Two Lines .Blog Written In Two Lines",
    image: "/images/hand.png",
    link: "/blog/3",
  },
];

export default function Blog() {
  return (
    <>
      <BreadCramp
        heading={"Login"}
        paragraph={
          "Fill in your details and let us craft a professional resume just for you"
        }
        image={"clipboard.png"}
        imageClass={"bottom-9 right-40"}
      />
      

       
      <div className="mx-auto container my-10  p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      </div>
    </>
  );
}
