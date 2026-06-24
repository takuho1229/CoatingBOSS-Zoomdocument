import { ArrowRight, Check, MessageCircle } from "lucide-react";

const strengths = [
  {
    number: "01",
    title: "新築時の美しさを長く守る",
    body: "水まわりのきれいな状態を保ちやすくし、毎日のお手入れをラクにします。",
  },
  {
    number: "02",
    title: "高級感のある仕上がり",
    body: "浴室・キッチン・洗面・トイレなど、毎日使う場所に上質感をプラスします。",
  },
  {
    number: "03",
    title: "全国対応の施工体制",
    body: "各地域の施工店と連携し、全国のお客様に対応しています。",
  },
  {
    number: "04",
    title: "水まわりをまとめて施工できる",
    body: "浴室、キッチン、洗面、トイレなど、住まいの気になる箇所をまとめて相談できます。",
  },
];

const services = [
  "浴室",
  "キッチン天板",
  "シンク",
  "レンジフード",
  "キッチンパネル",
  "洗面台",
  "トイレ",
  "窓ガラス",
  "フローリング",
  "玄関まわり",
  "外壁・屋根",
];

const areas = [
  {
    en: "Bathroom",
    ja: "浴室コーティング",
    body: "浴室は水垢・カビ・皮脂汚れが気になりやすい場所。コーティングにより、清潔感と高級感を保ちやすくします。",
  },
  {
    en: "Kitchen",
    ja: "キッチンコーティング",
    body: "毎日使うキッチンを、気持ちよく快適な空間へ。シンクや天板まわりのお手入れをしやすくします。",
  },
  {
    en: "Toilet / Washstand",
    ja: "トイレ・洗面コーティング",
    body: "日々何度も使う場所だからこそ、清潔感が大切。水まわりの美しさを保ちやすくします。",
  },
];

const recommends = [
  "新築のきれいな状態を長く保ちたい",
  "水まわりの掃除をラクにしたい",
  "水垢やカビ汚れをできるだけ防ぎたい",
  "せっかくの新居を大切に使いたい",
  "入居前にまとめて施工しておきたい",
];

function SectionTitle({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="section-title">
      <p>{en}</p>
      <h2>{ja}</h2>
    </div>
  );
}

function CtaButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "cta-actions compact" : "cta-actions"}>
      <a className="button primary" href="#contact">
        {compact ? <MessageCircle size={20} /> : null}
        {compact ? "LINEで無料見積り" : "無料見積りはこちら"}
        <ArrowRight size={18} />
      </a>
      <a className="button secondary" href="#contact">
        施工箇所を相談する
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <section className="hero-section page-section">
        <div className="hero-inner">
          <p className="brand-label">住宅コーティング</p>
          <h1>COATING BOSS</h1>
          <p className="hero-copy">住まいは人生最大級の資産である</p>
          <p className="hero-subcopy">
            上質を纏う、未来を守る。<br />
            住宅の美しさと清潔感を、長く保つための住宅コーティング。
          </p>
          <CtaButtons />
        </div>
      </section>

      <section className="page-section concept-section">
        <div className="content-grid concept-grid">
          <div>
            <SectionTitle en="CONCEPT" ja="コーティングBOSSとは" />
            <h3 className="large-heading">上質を纏う、未来を守る</h3>
            <div className="body-copy">
              <p>
                コーティングBOSSは、大切な住空間をいつまでも美しく維持するための住宅コーティングサービスです。
              </p>
              <p>
                水まわりを中心に、日々のお手入れをしやすくし、汚れ・水垢・カビなどが気になりやすい場所を美しく保ちやすくします。
              </p>
              <p>
                新築時のきれいな状態をできるだけ長く守りたい方におすすめのサービスです。
              </p>
            </div>
          </div>
          <figure className="concept-image">
            <img src="images/concept-block.jpg" alt="ブロックコーティングのイメージ" />
          </figure>
        </div>
      </section>

      <section className="page-section origin-section">
        <div className="narrow-content">
          <SectionTitle en="ORIGIN" ja="私たちが大切にしていること" />
          <div className="body-copy strong-copy">
            <p>住宅は、購入して終わりではありません。</p>
            <p>
              毎日使う場所だからこそ、少しずつ汚れや水垢が蓄積し、気づいたときにはお手入れが大変になってしまいます。
            </p>
            <p>
              コーティングBOSSは、“住まいをきれいに使い続ける”という考え方を、住宅購入後の新しい選択肢として広げていきたいと考えています。
            </p>
          </div>
        </div>
      </section>

      <section className="page-section strength-section">
        <div className="wide-content">
          <SectionTitle en="STRENGTH" ja="BOSSの強み" />
          <div className="strength-grid">
            {strengths.map((item) => (
              <article className="strength-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section service-section">
        <div className="wide-content">
          <SectionTitle en="SERVICE" ja="施工できる主な箇所" />
          <ul className="service-list">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section area-section">
        <div className="wide-content">
          <SectionTitle en="COATING AREA" ja="毎日使う場所を、もっと美しく、もっと快適に" />
          <div className="area-grid">
            {areas.map((area) => (
              <article className="area-block" key={area.en}>
                <p>{area.en}</p>
                <h3>{area.ja}</h3>
                <span />
                <p className="area-body">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section recommend-section">
        <div className="content-grid recommend-grid">
          <SectionTitle en="RECOMMEND" ja="こんな方におすすめです" />
          <ul className="recommend-list">
            {recommends.map((item) => (
              <li key={item}>
                <Check size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section final-cta" id="contact">
        <div className="narrow-content">
          <h2>まずは施工箇所を一緒に確認し、ご自宅に合った内容でお見積りいたします。</h2>
          <CtaButtons compact />
        </div>
      </section>
    </main>
  );
}
