"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"
import { BottomNavigation } from "@/components/features/navigation/bottom-navigation"

const activities = [
  {
    id: 1,
    title: "日常のお買い物サポート",
    duration: "1-2時間程度",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sC3Vrru9iowWykn1SvNVidwFjxllwR.png",
    category: "日常支援",
    description: "このアクティビティでは、専門のガイドがサポートします。安心して楽しい時間をお過ごしください。",
  },
  {
    id: 2,
    title: "公園でのお散歩サポート",
    duration: "30分-1時間程度",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FIgRAcu2OheYeLlXL5XDPtN0RNoTNf.png",
    category: "日常支援",
    description: "このアクティビティでは、専門のガイドがサポートします。安心して楽しい時間をお過ごしください。",
  },
  {
    id: 3,
    title: "美術館見学ツアー",
    duration: "2-3時間程度",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1tcvFAceTfghzxosp5dwFyCGv8Ilp0.png",
    category: "文化活動",
    description: "このアクティビティでは、専門のガイドがサポートします。安心して楽しい時間をお過ごしください。",
  },
  {
    id: 4,
    title: "季節の観光スポット巡り",
    duration: "3-4時間程度",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tcM14HUPi99Cl5JLqqK77nbaJfI2jk.png",
    category: "文化活動",
    description: "このアクティビティでは、専門のガイドがサポートします。安心して楽しい時間をお過ごしください。",
  },
]

export default function OutdoorActivities() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-6 flex flex-col overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-IEK9jkEGKcIyrpkGkwd5uDSoSbj9lf.svg"
              alt="いつでもトーク"
              width={240}
              height={72}
            />
          </Link>
          <h1 className="text-4xl font-bold font-zen-maru-gothic text-center flex-grow">外出する</h1>
          <div className="w-[240px]"></div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-4 w-full max-w-[1800px]">
            {activities.map((activity) => (
              <Card
                key={activity.id}
                className="overflow-hidden bg-white shadow-lg flex flex-col cursor-pointer transition-transform duration-200 hover:scale-105 h-[600px]"
              >
                <div className="relative w-full h-[280px]">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 px-3 py-1 rounded-full text-lg font-medium">
                    {activity.category}
                  </div>
                </div>

                <CardContent className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold font-zen-maru-gothic mb-2">{activity.title}</h2>
                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                      <Clock className="w-5 h-5" />
                      <span className="text-lg">{activity.duration}</span>
                    </div>
                    <p className="text-lg text-gray-600 font-zen-maru-gothic">{activity.description}</p>
                  </div>

                  <Link href="/outside/details" passHref>
                    <button className="w-full py-3 text-xl bg-[#276204] hover:bg-[#1E4A03] text-white font-zen-maru-gothic rounded-xl transition-colors mt-4">
                      詳細を見る
                    </button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}

