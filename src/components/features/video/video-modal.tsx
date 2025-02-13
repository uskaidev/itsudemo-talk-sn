"use client"
import { useRef } from "react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../../../components/ui/dialog"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoTitle: string
  videoSrc: string
}

export function VideoModal({ isOpen, onClose, videoTitle, videoSrc }: VideoModalProps) {
  const videoRef = useRef<HTMLIFrameElement>(null)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[98vw] h-[98vh] p-0 flex flex-col relative [&>button]:hidden border-0 overflow-hidden">
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
        <DialogTitle className="absolute w-1 h-1 overflow-hidden">{videoTitle}</DialogTitle>
        <DialogDescription className="absolute w-1 h-1 overflow-hidden">
          動画を再生・視聴するためのモーダルウィンドウです
        </DialogDescription>
        <div className="flex-1 min-h-0 w-full">
          <iframe
            ref={videoRef}
            className="w-full h-full"
            src={videoSrc}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="p-4 flex flex-col shrink-0">
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
