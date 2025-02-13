"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BottomNavigation } from "@/components/features/navigation/bottom-navigation"


export default function ChatPage() {
  const avatarContainerRef = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const host = "https://labs.heygen.com"
    const url =
      host +
      "/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJXYXluZV8yMDI0MDcxMSIsInByZXZpZXdJ%0D%0AbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzL2EzZmRiMGM2NTIwMjRmNzk5%0D%0AODRhYWVjMTFlYmYyNjk0XzM0MzUwL3ByZXZpZXdfdGFyZ2V0LndlYnAiLCJuZWVkUmVtb3ZlQmFj%0D%0Aa2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6Ijk3YWMzYzdkY2I1NzQyY2RiZTU3MmFi%0D%0AOWQ4Mzc5MzQyIiwidXNlcm5hbWUiOiI0MmM2ZGJkNjMyYjc0MGE3OGY4OWE1OTg2ZjkyNzZkMSJ9&inIFrame=1"

    const wrapDiv = document.createElement("div")
    wrapDiv.id = "heygen-streaming-embed"

    const container = document.createElement("div")
    container.id = "heygen-streaming-container"

    const stylesheet = document.createElement("style")
    stylesheet.innerHTML = `
      #heygen-streaming-embed {
        position: relative !important;
        width: 100% !important;
        height: 100% !important;
        overflow: hidden;
        background: transparent;
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s ease;
        max-width: 1920px;
        max-height: 1080px;
        margin: 0 auto;
      }
      #heygen-streaming-embed.show {
        opacity: 1;
        visibility: visible;
      }
      #heygen-streaming-embed.expand {
        aspect-ratio: 16/9;
      }
      #heygen-streaming-container {
        width: 100% !important;
        height: 100% !important;
        position: relative;
      }
      #heygen-streaming-container iframe {
        width: 100% !important;
        height: 100% !important;
        border: 0;
        position: absolute;
        top: 0;
        left: 0;
      }
    `

    const iframe = document.createElement("iframe")
    iframe.allow = "camera; microphone; fullscreen; display-capture"
    iframe.allowFullscreen = true
    iframe.title = "Heygen Streaming Embed"
    iframe.src = url

    const handleMessage = (event: MessageEvent) => {
      if (event.origin === host && event.data?.type === "streaming-embed") {
        switch (event.data.action) {
          case "init":
            setIsVisible(true)
            wrapDiv.classList.add("show")
            break
          case "show":
            setIsExpanded(true)
            wrapDiv.classList.add("expand")
            break
          case "hide":
            setIsExpanded(false)
            wrapDiv.classList.remove("expand")
            break
        }
      }
    }

    window.addEventListener("message", handleMessage)
    container.appendChild(iframe)
    wrapDiv.appendChild(stylesheet)
    wrapDiv.appendChild(container)

    if (avatarContainerRef.current) {
      avatarContainerRef.current.appendChild(wrapDiv)
    }

    return () => {
      window.removeEventListener("message", handleMessage)
      const avatarElement = document.getElementById("heygen-streaming-embed")
      if (avatarElement && avatarContainerRef.current) {
        avatarContainerRef.current.removeChild(avatarElement)
      }
    }
  }, [])

  return (
    <div className="flex flex-col h-screen w-screen bg-[#FAFFD4]">
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-IEK9jkEGKcIyrpkGkwd5uDSoSbj9lf.svg"
              alt="いつでもトーク"
              width={240}
              height={72}
            />
          </Link>
          <h1 className="text-4xl font-bold font-zen-maru-gothic text-center flex-grow">アシスタントと話す</h1>
          <div className="w-[240px]"></div>
        </div>
        <div className="flex-1 relative flex items-center justify-center">
          <div
            ref={avatarContainerRef}
            className={`w-full h-full max-w-[1920px] max-h-[1080px] bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            } ${isExpanded ? "scale-100" : "scale-95"}`}
          />
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}

