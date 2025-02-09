"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface FilePreviewerProps {
  fileURL: string;
}

function getFileType(fileURL: string): string {
  if (fileURL.endsWith(".pdf")) {
    return "pdf";
  } else if (fileURL.endsWith(".png") || fileURL.endsWith(".jpg") || fileURL.endsWith(".jpeg") || fileURL.endsWith(".bmp") || fileURL.endsWith(".webp")) {
    return "image";
  }
  return "unknown";
};

export default function FilePreviewer({ fileURL }: FilePreviewerProps) {
  const [fileType, setFileType] = useState(getFileType(fileURL));
  const [isLinkBroken, setIsLinkBroken] = useState(false);

  const handleError = () => {
    setIsLinkBroken(true);
  };

  useEffect(() => {
    setFileType(getFileType(fileURL));
  }, [fileURL]);

  return fileURL === "" ? (
    <div className="flex flex-col justify-center items-start h-full w-full">
      <div className="border flex items-center justify-center overflow-hidden rounded-md aspect-square h-full w-full">
        <img src="/placeholder-file-icon.png" alt={fileURL} className="h-[50%] object-cover" />
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-start h-full w-full">
      <Link to={fileURL} target="_blank" className="h-full w-full">
        <div className="border border-mid-accent flex items-center justify-center overflow-hidden rounded-md aspect-square h-full w-full">
          {fileType === "pdf" ? (
            <img src="/pdf-icon.png" alt={fileURL} className="h-[50%] object-cover" />
          ) : fileType === "image" ? (
            <>
              {!isLinkBroken ? (
                <img src={fileURL} alt={fileURL} className="h-full object-cover" onError={handleError} />
              ) : (
                <img src="/placeholder-file-icon.png" alt={fileURL} className="h-[50%] object-cover" />
              )}
            </>
          ) : (
            <img src="/placeholder-file-icon.png" alt={fileURL} className="h-[50%] object-cover" />
          )}
        </div>
      </Link>
    </div>
  );
};
