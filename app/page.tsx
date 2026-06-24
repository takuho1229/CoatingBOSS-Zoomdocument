import { Check } from "lucide-react";

const conceptImageUrl = "https://coating-boss.com/wp-content/uploads/2023/10/block_1-1024x768.jpg";

const strengths = [
  {
    number: "01",
    title: "毎日のお掃除をラクに、美しい仕上がりへ",
    body: "汚れがつきにくく、落としやすい状態をつくることで、日々のお手入れをラクにします。見た目にも美しく、清潔感のある仕上がりを保ちやすくします。",
  },
  {
    number: "02",
    title: "素材の質感をそのままに",
    body: "素材本来の見た目や質感を大きく変えず、自然な仕上がりを大切にしています。新築時の雰囲気を損なわずに施工できます。",
  },
  {
    number: "03",
    title: "UVカット効果",
    body: "紫外線による劣化や色あせを抑える効果が期待できます。窓ガラスや屋外まわりなど、日差しが気になる箇所にもおすすめです。",
  },
  {
    number: "04",
    title: "ほとんどの素材に施工可能",
    body: "浴室・キッチン・洗面・トイレなどの水まわりをはじめ、窓ガラスや外壁など、住まいのさまざまな素材に対応できます。",
  },
];

const services = [
  {
    en: "Bathroom",
    title: "浴室",
    body: "カビや皮脂汚れなどが気になりやすい浴室を、清潔感のある状態に保ちやすくします。",
    tags: ["浴槽", "壁", "床", "カウンター", "鏡"],
  },
  {
    en: "Kitchen",
    title: "キッチン",
    body: "毎日使うキッチンまわりを、気持ちよく使いやすい空間に整えます。",
    tags: ["キッチン天板", "シンク", "レンジフード", "キッチンパネル"],
  },
  {
    en: "Toilet / Washbasin",
    title: "トイレ・洗面",
    body: "日々何度も使う場所だからこそ、清潔感を保ちやすい状態に整えます。",
    tags: ["トイレ", "洗面台"],
  },
  {
    en: "Window / Exterior",
    title: "窓ガラス・屋外まわり",
    body: "窓ガラスや外壁・屋根など、住まいの外側まわりにも対応できます。",
    tags: ["窓ガラス", "外壁", "屋根"],
  },
];

const recommends = [
  "新築のきれいな状態を長く保ちたい",
  "水まわりの掃除をラクにしたい",
  "カビや日々の汚れをできるだけ防ぎたい",
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
        </div>
      </section>

      <section className="page-section concept-section">
        <div className="content-grid concept-grid">
          <div>
            <SectionTitle en="CONCEPT" ja="コーティングBOSSとは" />
            <h3 className="large-heading">上質を纏う、未来を守る</h3>
            <div className="body-copy">
              <p>コーティングBOSSは、大切な住空間をいつまでも美しく維持するための住宅コーティングサービスです。</p>
              <p>水まわりを中心に、日々のお手入れをしやすくし、汚れやカビなどが気になりやすい場所を美しく保ちやすくします。</p>
              <p>新築時のきれいな状態をできるだけ長く守りたい方におすすめのサービスです。</p>
            </div>
          </div>
          <figure className="concept-image">
            <img src={conceptImageUrl} alt="ブロックコーティング。コーティングBOSS｜住宅コーティング" />
          </figure>
        </div>
      </section>

      <section className="page-section origin-section">
        <div className="narrow-content">
          <SectionTitle en="ORIGIN" ja="私たちが大切にしていること" />
          <div className="body-copy strong-copy">
            <p>住宅は、購入して終わりではありません。</p>
            <p>毎日使う場所だからこそ、少しずつ汚れが蓄積し、気づいたときにはお手入れが大変になってしまいます。</p>
            <p>コーティングBOSSは、“住まいをきれいに使い続ける”という考え方を、住宅購入後の新しい選択肢として広げていきたいと考えています。</p>
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
          <p className="service-lead">
            水まわりを中心に、窓ガラスや屋外まわりまで、住まいのさまざまな箇所に施工できます。
          </p>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.en}>
                <p className="service-card-en">{service.en}</p>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-text">{service.body}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span className="service-tag" key={tag}>{tag}</span>
                  ))}
                </div>
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

      <section className="page-section closing-section">
        <div className="narrow-content">
          <h2>ご自宅の状態やご希望に合わせて、施工箇所を一緒に確認しながらご案内いたします。</h2>
        </div>
      </section>
    </main>
  );
}
