import React from "react";
import Image from "next/image";

function ImagePreviewModal({ filePreview }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button
        type="button"
        className="text-xs text-blue-600 underline ml-2 flex items-center gap-1"
        onClick={() => setOpen(true)}
      >
        Image Preview
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-lg font-bold mb-4">Certificate Image</h2>
            <div className="flex justify-center">
              <Image
                src={filePreview}
                alt="Certificate Preview"
                width={500}
                height={350}
                className="max-w-full max-h-[70vh] mx-auto"
                unoptimized
              />
            </div>
            <button
              className="px-4 py-2 rounded bg-gray-200 mt-4"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ImagePreviewModal; 