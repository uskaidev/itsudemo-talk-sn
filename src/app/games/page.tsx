"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BottomNavigation } from "@/components/features/navigation/bottom-navigation"
import { VideoCard } from "@/components/features/video/video-card"
import { VideoModal } from "@/components/features/video/video-modal"

const games = [
  {
    id: 1,
    title: "色読みクイズ",
    duration: "所要時間7分",
    thumbnailUrl: "https://img.youtube.com/vi/3FDLWRf7DBU/0.jpg",
    videoSrc: "https://www.youtube.com/embed/3FDLWRf7DBU?autoplay=1",
  },
  {
    id: 2,
    title: "旗揚げゲーム",
    duration: "所要時間10分",
    thumbnailUrl: "https://img.youtube.com/vi/QvOMIN5a_w4/0.jpg",
    videoSrc: "https://www.youtube.com/embed/QvOMIN5a_w4?autoplay=1",
  },
  {
    id: 3,
    title: "メロディクイズ",
    duration: "所要時間15分",
    thumbnailUrl: "https://img.youtube.com/vi/sKUf48AVj5o/0.jpg",
    videoSrc: "https://www.youtube.com/embed/sKUf48AVj5o?autoplay=1",
  },
]

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<(typeof games)[0] | null>(null)

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
          <h1 className="text-5xl font-bold font-zen-maru-gothic text-center flex-grow">ゲーム/脳トレをする</h1>
          <div className="w-[300px]"></div> {/* This empty div balances the logo on the left */}
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-8 w-full max-w-[1800px]">
            {games.map((game) => (
              <VideoCard
                key={game.id}
                title={game.title}
                duration={game.duration}
                thumbnailUrl={game.thumbnailUrl}
                onClick={() => setSelectedGame(game)}
              />
            ))}
          </div>
        </div>

        {selectedGame && (
          <VideoModal
            isOpen={!!selectedGame}
            onClose={() => setSelectedGame(null)}
            videoTitle={selectedGame.title}
            videoSrc={selectedGame.videoSrc}
          />
        )}
      </div>
      <BottomNavigation />
    </div>
  )
}
