import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { FaSpinner } from "react-icons/fa6";
import { isFormValid } from "./cvUtils";
import { IoDocumentText } from "react-icons/io5";
import { RxDownload } from "react-icons/rx";

const SuccessDialog = ({
  open,
  onClose,
  downloadPDF,
  isGenerating,
  cvData,
}) => (
  <Dialog className="relative " open={open} onOpenChange={onClose}>
    <DialogContent>
      <div className="absolute rotate-[104deg] -top-42 -left-38 w-[396px] h-[396px] rounded-full flex items-center justify-center bg-custom-gradient p-[110px] rotate-angle">
        <div className="w-full h-full bg-white rounded-full" />
      </div>

      <DialogHeader>
        <div className="w-28 h-28   rounded-full bg-[#F3F7F7] flex items-center justify-center">
          <IoDocumentText className="text-5xl text-primary" />
        </div>
        <DialogTitle
          className={
            "text-primary text-center text-[52px] font-bold leading-tight my-4 "
          }
        >
          Great job! <br />
          Your CV is ready.
        </DialogTitle>
        <DialogDescription
          className={"text-[#617A78] text-[18px] capitalize text-center"}
        >
          Make the most of it by applying to top opportunities with one click.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <button
          onClick={downloadPDF}
          disabled={!isFormValid(cvData) || isGenerating}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white cursor-pointer rounded-full hover:bg-[#076a60e6] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isGenerating ? "Generating..." : "Download PDF"}
          {isGenerating ? (
            <FaSpinner className="w-4 h-4 animate-spin" />
          ) : (
            <RxDownload className="w-4 h-4" />
          )}
        </button>
      </DialogFooter>
      <div className="absolute -bottom-50 -right-38 rotate-[312deg] w-[396px] h-[396px] rounded-full flex items-center justify-center bg-custom-gradient p-[110px] rotate-angle">
        <div className="w-full h-full bg-white rounded-full" />
      </div>
    </DialogContent>
  </Dialog>
);

export default React.memo(SuccessDialog);
