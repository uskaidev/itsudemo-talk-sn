import Link from "next/link"
import Image from "next/image"

export function MainButton() {
  return (
    <Link href="/chat" className="block w-full">
      <div
        className={`
          relative w-full
          rounded-[30px] border-[4px] border-[#98996B]
          flex items-center
          transition-all duration-200
          bg-white shadow-[4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-gray-50 active:shadow-none active:translate-x-1 active:translate-y-1
          aspect-[3/1]
        `}
      >
        <div className="w-[35%] flex justify-center items-center">
          <div className="relative w-1/2 aspect-square">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon_talk-i8q3k6kkLhrKZCcpJV30aEmG92LEEF.svg"
              alt="アシスタントアイコン"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-[65%] pr-6">
          <span className="text-5xl font-bold text-black font-zen-maru-gothic">アシスタントと話す</span>
        </div>
      </div>
    </Link>
  )
}

