"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { MainButton } from "@/components/common/main-button"

export function BottomNavigation() {
  const pathname = usePathname()

  return (
    <div className="w-full bg-white shadow-[0px_-4px_15px_rgba(0,0,0,0.25)] z-10 flex justify-around items-center p-2">
      <BottomNavButton
        href="/chat"
        icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon_talk-i8q3k6kkLhrKZCcpJV30aEmG92LEEF.svg"
        text="アシスタントと話す"
        isActive={pathname === "/chat"}
      />
      <BottomNavButton
        href="/exercise"
        icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon_sport-hPGCTl8opRXeHLu5FLJ2SexForfzoO.svg"
        text="運動する"
        isActive={pathname === "/exercise"}
      />
      <BottomNavButton
        href="/games"
        icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon_game-OddmG7i1RFI7BRKkCdKX7UjWjCASUP.svg"
        text="ゲーム／脳トレをする"
        isActive={pathname === "/games"}
      />
      <BottomNavButton
        href="/outside"
        icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon_outside-RlaVSMbEqRPd0jKaUF8Qw1JcXDk3dl.svg"
        text="外出する"
        isActive={pathname === "/outside"}
      />
    </div>
  )
}

interface BottomNavButtonProps {
  href: string
  icon: string
  text: string
  isActive: boolean
}

function BottomNavButton({ href, icon, text, isActive }: BottomNavButtonProps) {
  return (
    <Link href={href} className="block w-full max-w-[450px]">
      <div
        className={`
          relative w-full
          rounded-[30px] border-[4px] border-[#98996B]
          flex items-center
          transition-all duration-200
          ${
            isActive
              ? "bg-[#F0F0E2] shadow-[inset_0_4px_8px_rgba(0,0,0,0.25)]"
              : "bg-white shadow-[4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-gray-50"
          }
          h-[180px]
        `}
      >
        <div className="w-[40%] flex justify-center items-center pl-4">
          <div className="relative w-32 h-32">
            <Image src={icon || "/placeholder.svg"} alt={text} fill className="object-contain" />
          </div>
        </div>
        <div className="w-[60%] pr-6">
          <span className="text-4xl font-bold text-black font-zen-maru-gothic leading-tight">{text}</span>
        </div>
      </div>
    </Link>
  )
}

