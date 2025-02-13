"use client"
import { useEffect, useRef } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoTitle: string
  videoSrc: string
}

export function VideoModal({ isOpen, onClose, videoTitle, videoSrc }: VideoModalProps) {
  const videoRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      // Add autoplay=1 and mute=1 to ensure autoplay works
      const newSrc = `${videoSrc}&autoplay=1&mute=1`
      videoRef.current.src = newSrc
    }
  }, [isOpen, videoSrc])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-4 flex flex-col">
        <button
          onClick={onClose}
          className="absolute -right-2 -top-2 bg-[#276204] rounded-md p-3 hover:bg-[#1E4A03] transition-colors z-10"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <div className="h-[70vh] w-full">
          <iframe
            ref={videoRef}
            className="w-full h-full"
            src={videoSrc}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="mt-4 flex flex-col">
          <h2 className="text-3xl font-bold mb-3 line-clamp-1 font-zen-maru-gothic">{videoTitle}</h2>
          <button
            className="w-full bg-[#276204] hover:bg-[#1E4A03] text-white py-4 rounded-xl text-2xl font-bold transition-colors font-zen-maru-gothic"
            onClick={onClose}
          >
            動画を閉じる
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

