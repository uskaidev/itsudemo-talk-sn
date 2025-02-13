"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BottomNavigation } from "@/components/features/navigation/bottom-navigation"
import { VideoCard } from "@/components/features/video/video-card"
import { VideoModal } from "@/components/features/video/video-modal"

const exerciseVideos = [
  {
    id: 1,
    title: "スローエアロビック",
    duration: "所要時間10分",
    thumbnailUrl: "https://img.youtube.com/vi/d2EDVVBj7qE/0.jpg",
    videoSrc: "https://www.youtube.com/embed/d2EDVVBj7qE?autoplay=1",
  },
  {
    id: 2,
    title: "スポーツ体操",
    duration: "所要時間5分",
    thumbnailUrl: "https://img.youtube.com/vi/mHzN0IEsUcs/0.jpg",
    videoSrc: "https://www.youtube.com/embed/mHzN0IEsUcs?autoplay=1",
  },
  {
    id: 3,
    title: "うた体操〜スキーの歌〜",
    duration: "所要時間10分",
    thumbnailUrl: "https://img.youtube.com/vi/R2PsFGPN6-k/0.jpg",
    videoSrc: "https://www.youtube.com/embed/R2PsFGPN6-k?autoplay=1",
  },
]

export default function ExercisePage() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof exerciseVideos)[0] | null>(null)

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-8 flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-IEK9jkEGKcIyrpkGkwd5uDSoSbj9lf.svg"
              alt="いつでもトーク"
              width={300}
              height={90}
            />
          </Link>
          <h1 className="text-5xl font-bold font-zen-maru-gothic text-center flex-grow">運動する</h1>
          <div className="w-[300px]"></div> {/* This empty div balances the logo on the left */}
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-8 w-full max-w-[1800px]">
            {exerciseVideos.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                duration={video.duration}
                thumbnailUrl={video.thumbnailUrl}
                onClick={() => setSelectedVideo(video)}
              />
            ))}
          </div>
        </div>

        {selectedVideo && (
          <VideoModal
            isOpen={!!selectedVideo}
            onClose={() => setSelectedVideo(null)}
            videoTitle={selectedVideo.title}
            videoSrc={selectedVideo.videoSrc}
          />
        )}
      </div>
      <BottomNavigation />
    </div>
  )
}
