"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";


export default function CreatePost() {
  const modalOpener = () => {
    
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className= "h-12 w-12 rounded-2xl" variant="outline">Add</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center space-x-2 mb-4">
              <SchoolIcon className="text-red-600 h-6 w-6" />
              <div>
                <h1 className="text-lg font-semibold">The Robot Club</h1>
                <p className="text-sm text-gray-500">MIT, Texas</p>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <Input
          id="name"
          type="text"
          placeholder="What's on your mind!!"
          style={{
            padding: 0,
            textAlign: "top",
            height: "200px",
            paddingLeft: "0.5rem",
            backgroundColor: "white",
          }}
        />
        <DialogFooter className="flex justify-between">
          <div className="flex space-x-4">
            <Button className="flex items-center space-x-2" variant="ghost">
              <PaperclipIcon className="h-5 w-5" />
              <span>Attach</span>
            </Button>
            <Button className="flex items-center space-x-2" variant="ghost">
              <CameraIcon className="h-5 w-5" />
              <span>Image</span>
            </Button>
          </div>
          <Button>Create Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function PaperclipIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 6 8-4 8 4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 5v17" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}
