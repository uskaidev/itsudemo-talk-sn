import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full bg-[#276204] text-white disabled:opacity-50"
      >
        <ChevronLeft size={32} />
      </button>
      <span className="text-2xl font-bold font-zen-maru-gothic">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full bg-[#276204] text-white disabled:opacity-50"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  )
}

