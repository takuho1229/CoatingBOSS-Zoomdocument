"use client";

import {
  Bath,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileText,
  Home,
  Printer,
  ShieldCheck,
  Sparkles,
  SprayCan,
  WalletCards,
} from "lucide-react";

const waterAreas = [
  ["浴室・シャワールーム", "浴槽、壁、床、カウンター、水栓まわりなど、日々水を使う箇所を中心に施工します。"],
  ["キッチン", "シンク、天板、キッチンパネル、レンジフードなど、油汚れや水垢が気になりやすい箇所が対象です。"],
  ["トイレ", "便器まわりを中心に、汚れを落としやすくする目的で施工します。床の施工もご相談可能です。"],
  ["洗面台", "ボウル、天板、水栓まわりなど、手洗いや身支度で水が残りやすい箇所に対応します。"],
];

const otherAreas = [
  ["玄関タイル", "紫外線による劣化を抑え、汚れを落としやすくします。素材によってはツヤが出るため、見た目の確認がおすすめです。"],
  ["室内フローリング", "キッチンまわり、トイレ床、洗面所など、水や汚れが気になりやすい床に施工できます。"],
  ["ガラス・鏡", "水垢や汚れの落としやすさを重視したい箇所に対応できます。素材や状態により確認が必要です。"],
  ["その他の素材", "基本的には多くの素材に対応可能ですが、素材・状態・メーカー仕様を確認したうえで判断します。"],
];

const checkpoints = [
  "どの箇所を施工するか、優先順位を決める",
  "見積書の総額と、各項目の施工範囲を確認する",
  "玄関タイルなど、見た目が変わる可能性のある箇所を施工するか確認する",
  "入居日・引き渡し日から逆算して、施工日程に無理がないか確認する",
  "施工後のお手入れ方法を家族で共有できそうか確認する",
];

const careNotes = [
  "研磨剤入りの洗剤やメラミンスポンジは、コーティングを削る可能性があるため避けてください。",
  "強い酸性・アルカリ性の業務用洗剤は、使用前に確認してください。",
  "アルコール除菌は使用できる場合がありますが、吹きかけたまま長時間放置しないでください。",
  "水回りは、トップコートを定期的に使うことで撥水効果を保ちやすくなります。",
  "判断に迷う洗剤や掃除方法がある場合は、事前にご相談ください。",
];

function CardList({ items }: { items: string[][] }) {
  return (
    <ul className="list">
      {items.map(([title, body]) => (
        <li key={title}>
          <strong>{title}</strong>
          {body}
        </li>
      ))}
    </ul>
  );
}

function TextList({ items }: { items: string[] }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="sec">
      <h3 className="title">
        {icon}
        {title}
      </h3>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <main className="shell">
      <header className="top">
        <div className="brand">
          <div className="mark">
            <Sparkles size={22} />
          </div>
          <div>
            <strong>住宅コーティングBOSS</strong>
            <p className="muted">ご家族で検討いただくためのまとめ</p>
          </div>
        </div>
        <button className="btn" onClick={() => window.print()} type="button">
          <Printer size={18} />
          PDF印刷
        </button>
      </header>

      <article className="preview" style={{ position: "static" }}>
        <section className="hero">
          <p className="eyebrow">Zoom後のご家族相談用ページ</p>
          <h2>住宅コーティングをご検討中のお客様へ</h2>
          <p className="lead">
            このページは、住宅コーティングの内容を、ご家族で相談しやすいように整理したものです。特定のお見積内容ではなく、施工できる箇所、期待できる効果、注意点、確認すべきポイントをまとめています。
          </p>
          <div className="summary">
            <div>
              <span>目的</span>
              <strong>きれいを保ちやすく</strong>
            </div>
            <div>
              <span>検討軸</span>
              <strong>施工範囲・金額・日程</strong>
            </div>
            <div>
              <span>共有方法</span>
              <strong>URLまたはPDF</strong>
            </div>
          </div>
        </section>

        <Section icon={<Home size={18} />} title="1. 住宅コーティングとは">
          <p className="lead">
            住宅コーティングは、水回りや床、タイルなどの表面にコーティング層を作り、汚れや水垢を落としやすくするための施工です。汚れがまったく付かなくなるものではなく、日々のお掃除をしやすくし、新築時のきれいな状態を長く保ちやすくすることを目的としています。
          </p>
        </Section>

        <Section icon={<Bath size={18} />} title="2. 水回りで施工できる箇所">
          <CardList items={waterAreas} />
        </Section>

        <Section icon={<ClipboardList size={18} />} title="3. 水回り以外で施工できる箇所">
          <CardList items={otherAreas} />
        </Section>

        <Section icon={<ShieldCheck size={18} />} title="4. 期待できる効果">
          <TextList
            items={[
              "水垢、皮脂汚れ、油汚れなどを落としやすくする",
              "素材に水や汚れが染み込みにくい状態を目指す",
              "日々の掃除にかかる負担を軽くする",
              "玄関タイルなどは、紫外線による劣化を抑える効果が期待できる",
              "新築時のきれいな印象を長く保ちやすくする",
            ]}
          />
        </Section>

        <Section icon={<Sparkles size={18} />} title="5. 見た目の変化について">
          <p className="lead">
            水回りや室内床は、質感を大きく変えないように施工するケースが多いです。一方で、玄関タイルなど厚めのコーティングを行う箇所は、ツヤが出たり、色が少し深く見える場合があります。マットな質感を重視される場合は、写真やサンプルで見た目を確認してから判断するのがおすすめです。
          </p>
        </Section>

        <Section icon={<Clock3 size={18} />} title="6. 施工日数とスケジュール">
          <p className="lead">
            施工日数は、施工箇所や面積によって変わります。水回りをまとめて施工する場合は、複数日かかることがあります。作業後すぐに水が使える段階と、洗剤に強くなる完全硬化の段階は別です。入居前施工の場合は、入居日から逆算して余裕を持った日程にすることをおすすめします。
          </p>
        </Section>

        <Section icon={<WalletCards size={18} />} title="7. 金額を見るときのポイント">
          <div className="amount">
            <span>確認すべきこと</span>
            <strong>総額だけでなく範囲も確認</strong>
          </div>
          <p className="fine">
            コーティングの金額は、施工箇所、素材、サイズ、施工範囲によって変わります。ご家族で相談される際は、総額だけでなく「どこまで含まれているか」「追加したい箇所はあるか」「当日追加の場合に金額が変わるか」を確認すると判断しやすくなります。
          </p>
        </Section>

        <Section icon={<SprayCan size={18} />} title="8. 施工後のお手入れ">
          <TextList items={careNotes} />
        </Section>

        <Section icon={<CheckCircle2 size={18} />} title="9. 保証・万が一の対応">
          <p className="lead">
            保証内容は、施工箇所やコーティングの種類によって異なります。確認しておきたいのは、保証期間、保証範囲、対象外になるケース、施工時に傷や不具合が起きた場合の対応です。契約前に見積書や説明内容とあわせて確認しておくと安心です。
          </p>
        </Section>

        <Section icon={<FileText size={18} />} title="10. ご家族で確認いただきたいこと">
          <TextList items={checkpoints} />
          <p className="fine">
            このページは、すぐに決めていただくためのものではありません。ご家族で施工箇所・金額・日程・お手入れ方法を確認し、納得できる内容かどうかをご検討ください。
          </p>
        </Section>
      </article>
    </main>
  );
}
