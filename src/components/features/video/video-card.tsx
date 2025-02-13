import Image from "next/image"
import { Play } from "lucide-react"

interface VideoCardProps {
  title: string
  duration: string
  onClick?: () => void
  thumbnailUrl: string
}

export function VideoCard({ title, duration, onClick, thumbnailUrl }: VideoCardProps) {
  return (
    <div
      className="group flex flex-col h-full rounded-xl border-2 border-[#276204] bg-white overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105"
      onClick={onClick}
    >
      <div className="relative w-full aspect-video">
        <Image src={thumbnailUrl || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col flex-grow p-4 justify-between">
        <div>
          <h3 className="font-bold text-2xl mb-2 line-clamp-2 font-zen-maru-gothic">{title}</h3>
          <p className="text-gray-600 text-xl font-zen-maru-gothic">{duration}</p>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          className="mt-4 w-full bg-[#276204] group-hover:bg-[#1E4A03] text-white py-3 rounded-xl text-xl font-bold transition-colors font-zen-maru-gothic flex items-center justify-center"
        >
          <Play className="mr-2" size={24} />
          再生する
        </button>
      </div>
    </div>
  )
}
