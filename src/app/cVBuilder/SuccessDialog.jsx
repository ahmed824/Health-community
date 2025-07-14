import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const SuccessDialog = ({ open, onClose, onDownload }) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>CV Created Successfully!</DialogTitle>
        <DialogDescription>
          Your CV has been created. You can now download it as a PDF.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <button
          className="px-6 py-2 rounded-lg font-medium bg-[#076A60] text-white hover:bg-[#05543e]"
          onClick={() => {
            onDownload();
            onClose(false);
          }}
        >
          Download Your CV
        </button>
        <DialogClose asChild>
          <button className="px-6 py-2 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-gray-300">
            Close
          </button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default React.memo(SuccessDialog); 