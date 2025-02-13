import Image from "next/image"
import { MainButton } from "@/components/common/main-button"

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#FAFFD4] p-8 flex flex-col justify-between overflow-hidden">
      <div className="max-w-[1920px] w-full mx-auto flex flex-col items-center justify-between flex-1">
        {/* ヘッダー部分 */}
        <div className="text-center w-full">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative w-[420px] h-[120px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-IEK9jkEGKcIyrpkGkwd5uDSoSbj9lf.svg"
                alt="いつでもトーク"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-5xl font-medium font-zen-maru-gothic">は、</p>
          </div>

          {/* 説明文 */}
          <div className="mb-10">
            <p className="text-5xl font-medium leading-relaxed font-zen-maru-gothic">
              みなさんとお話したり、
              <br />
              自由にアクティビティを行うサポートをします
            </p>
          </div>
        </div>

        {/* メインボタン */}
        <div className="w-full max-w-[1080px] my-12">
          <MainButton />
        </div>

        {/* フッター説明文 */}
        <div className="text-center w-full max-w-[1350px]">
          <p className="text-5xl font-medium leading-relaxed text-center font-zen-maru-gothic">
            まずは「アシスタントと話す」ボタンを
            <br />
            タッチして、お話してみましょう！
          </p>
        </div>
      </div>
    </div>
  )
}

