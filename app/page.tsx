const conceptImageUrl = "https://coating-boss.com/wp-content/uploads/2023/10/block_1-1024x768.jpg";

const services = [
  {
    en: "Water Area",
    title: "水まわり",
    body: "日々の汚れがたまりやすく、目につきやすいキッチンや浴室などのお手入れをラクに。清潔感を保ちやすくし、仕上がりもより美しく整えます。",
    tags: "浴室 / キッチン / トイレ / 洗面台 / 床 など",
  },
  {
    en: "Exterior",
    title: "外壁・屋根",
    body: "紫外線や風雨など、住まいの外側が受けるさまざまなダメージから強固にガード。劣化を抑え、美しい外観を長く保ちやすくします。",
    tags: "外壁 / 屋根 など",
  },
  {
    en: "Concrete Floor",
    title: "土間",
    body: "玄関や駐車場など、汚れが染み込みやすく傷みやすい箇所を、簡単なお掃除で整えやすい状態へ。日常の清掃性を高め、美観を保ちやすくします。",
    tags: "駐車場土間 / 玄関土間 など",
  },
  {
    en: "Window Glass",
    title: "窓ガラス",
    body: "黒ずみや花粉などの付着を大幅に軽減し、日々のお手入れをしやすくします。水拭きで透明感のあるきれいな状態を維持しやすくします。",
    tags: "窓ガラス など",
  },
];

const qualities = [
  {
    en: "Nationwide",
    title: "全国対応",
    body: "全国の施工ネットワークにより、地域を問わずご相談いただけます。各エリアの施工スタッフが、ご自宅の状況に合わせて丁寧に対応いたします。",
  },
  {
    en: "Durability",
    title: "超高耐久",
    body: "日々使用する住まいの環境を考え、長く美しさを保ちやすい高耐久コーティングを採用しています。水まわりから屋外まわりまで、暮らしに寄り添う耐久性を追求しています。",
  },
  {
    en: "Warranty",
    title: "長期保証",
    body: "施工後も安心してお使いいただけるよう、保証体制を整えています。万が一気になる点がある場合も、内容を確認したうえで適切にご案内いたします。",
  },
  {
    en: "Difference",
    title: "他との違い",
    body: "見た目の美しさだけでなく、素材の質感を活かした自然な仕上がりと、お手入れのしやすさを大切にしています。住まい全体を長くきれいに使うためのコーティングをご提案します。",
  },
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

      <section className="page-section service-section">
        <div className="wide-content">
          <SectionTitle en="SERVICE" ja="施工できる主な箇所" />
          <p className="service-lead">
            水まわりから外壁・屋根、土間、窓ガラスまで、住まいのさまざまな箇所に施工できます。
          </p>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.en}>
                <p className="service-card-en">{service.en}</p>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-text">{service.body}</p>
                <p className="service-card-tags">{service.tags}</p>
              </article>
            ))}
          </div>
          <div className="section-divider" />
        </div>
      </section>

      <section className="page-section quality-section">
        <div className="wide-content">
          <SectionTitle en="BOSS QUALITY" ja="安心してお任せいただける理由" />
          <p className="quality-lead">
            コーティングBOSSは、施工品質・対応エリア・耐久性・保証体制にこだわり、大切な住まいを長く美しく保つための施工をご提供しています。
          </p>
          <div className="quality-grid">
            {qualities.map((quality) => (
              <article className="quality-card" key={quality.en}>
                <p className="quality-card-en">{quality.en}</p>
                <h3 className="quality-card-title">{quality.title}</h3>
                <p className="quality-card-text">{quality.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section closing-section">
        <div className="narrow-content">
          <SectionTitle en="CLOSING" ja="ご自宅に合わせて、最適な施工箇所をご案内します" />
          <p className="closing-copy">ご自宅の状況やご希望に合わせて、必要な施工箇所や施工範囲を一緒に確認しながらご案内いたします。</p>
        </div>
      </section>
    </main>
  );
}
