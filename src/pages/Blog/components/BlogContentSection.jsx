import React from "react";
import { FaRegBookmark, FaRegComment } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";

export default function BlogContentSection({ blog }) {
  return (
    <div className="flex-1 lg:max-w-3xl">
      {/* Blog Content */}
      <article className="prose prose-lg max-w-none">
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
          {/* Content */}
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg leading-8">{blog.content}</p>

            {/* Additional content sections can be added here */}
            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Key Takeaways
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Understanding the latest developments in healthcare
                    technology
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Importance of staying updated with medical advancements
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    How technology is improving patient care and outcomes
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-8">
              As we continue to explore the intersection of technology and
              healthcare, it's crucial for medical professionals to stay
              informed about these developments. The future of healthcare lies
              in the successful integration of human expertise with
              technological innovation.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <FaRegComment className="text-lg" />
                <span>Comment</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <FaRegShareFromSquare className="text-lg" />
                <span>Share</span>
              </button>
            </div>
            <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <FaRegBookmark className="text-lg" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
