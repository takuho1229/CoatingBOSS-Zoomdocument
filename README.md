# CoatingBOSS Zoomdocument

住宅コーティングBOSSのZoom商談用LPです。

お客様とのZoom商談中に画面共有し、コーティングBOSSのサービス概要・考え方・強み・施工できる箇所を説明するための1ページLPとして作成しています。

最終更新: Zoom商談用LP版

## 公開URL

GitHub Pagesを有効化すると、以下のURLで公開されます。

https://takuho1229.github.io/CoatingBOSS-Zoomdocument/

GitHubの `Settings > Pages` で、Sourceを `GitHub Actions` にしてください。その後、`Actions` タブの `Deploy to GitHub Pages` が成功すると公開されます。

## 目的

Zoom商談中に画面共有しながら、以下の内容を上品で見やすい1ページで説明することです。

- コーティングBOSSの考え方
- 住宅コーティングの価値
- BOSSの強み
- 施工できる主な箇所
- 水まわりの施工イメージ
- どのようなお客様におすすめか
- 無料見積り・施工箇所相談への導線

## デザイン方針

- 白、黒、グレー、ゴールド系を基調にした高級感のある住宅サービスらしいトーン
- PCでのZoom画面共有を優先した大きめの文字サイズ
- セクションごとに余白を広く取り、説明の区切りがわかりやすい構成
- PDFとして出力しやすい印刷用CSS
- 動画、Instagram、外部SNS埋め込みは使用しない
- 画像は `public/images/concept-block.jpg` の1枚のみ使用

## 運用ルール

CTAボタンのリンク先は仮で `#contact` にしています。実際のLINE、問い合わせフォーム、予約導線を使う場合は、公開前にリンクを差し替えてください。

このリポジトリには、お客様名、実際のZoom文字起こし、見積詳細などの個人情報・商談情報を保存しないでください。

## ローカル開発

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。
