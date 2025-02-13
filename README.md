# いつでもトーク (Itsudemo Talk)

インタラクティブなコミュニケーションプラットフォーム。チャット、エクササイズ、ゲームなどの機能を提供します。

## 機能

- 💬 チャット機能
- 🏃‍♂️ エクササイズ
- 🎮 ゲーム
- 🌍 アウトドア活動

## 技術スタック

- [Next.js](https://nextjs.org/) - Reactフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な開発
- [Tailwind CSS](https://tailwindcss.com/) - スタイリング
- ESLint - コード品質管理

## 開発環境のセットアップ

```bash
# パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

[http://localhost:3000](http://localhost:3000)にアクセスして開発版を確認できます。

## プロジェクト構造

```
src/
├── app/              # ページコンポーネント
├── components/       # 再利用可能なコンポーネント
│   ├── common/      # 共通コンポーネント
│   ├── features/    # 機能別コンポーネント
│   └── ui/          # UIコンポーネント
├── hooks/           # カスタムフック
└── lib/             # ユーティリティ関数
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
