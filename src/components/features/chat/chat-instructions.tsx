export function ChatInstructions() {
  return (
    <div className="mt-12 max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-4xl font-bold mb-6 font-zen-maru-gothic">使い方</h2>
      <ol className="space-y-6">
        <li className="flex items-start">
          <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#276204] text-white rounded-full text-3xl font-bold mr-4">
            1
          </span>
          <p className="text-2xl font-zen-maru-gothic">
            中央の「Chat now」ボタンをタップして、言語選択で「Japanese」を選択
          </p>
        </li>
        <li className="flex items-start">
          <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#276204] text-white rounded-full text-3xl font-bold mr-4">
            2
          </span>
          <p className="text-2xl font-zen-maru-gothic">「Start new chat」ボタンをタップしてください</p>
        </li>
        <li className="flex items-start">
          <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#276204] text-white rounded-full text-3xl font-bold mr-4">
            3
          </span>
          <p className="text-2xl font-zen-maru-gothic">普段お話するのと同じように、自由にお話してみてください</p>
        </li>
        <li className="flex items-start">
          <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#276204] text-white rounded-full text-3xl font-bold mr-4">
            4
          </span>
          <p className="text-2xl font-zen-maru-gothic">
            会話を終了するには、アシスタントの画面右上の×ボタンを押してください
          </p>
        </li>
      </ol>
    </div>
  )
}

