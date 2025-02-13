import Image from "next/image"
import Link from "next/link"
import { BottomNavigation } from "@/components/features/navigation/bottom-navigation"

export default function OutsideDetailsPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 bg-[#FAFFD4] p-6 flex flex-col">
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
          <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-12">
            <h2 className="text-4xl font-bold mb-8 text-center font-zen-maru-gothic">外出支援サービス</h2>
            <p className="text-3xl text-center font-zen-maru-gothic leading-relaxed">
              本サービスは実証実験中です。
              <br />
              外出支援サービスはサービス開始後に
              <br />
              提供させていただきます。
            </p>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}

