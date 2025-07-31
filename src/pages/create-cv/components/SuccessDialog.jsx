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

const SuccessDialog = ({ open, onClose }) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>CV Created Successfully!</DialogTitle>
        <DialogDescription>
          Your CV has been created. 
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
         
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