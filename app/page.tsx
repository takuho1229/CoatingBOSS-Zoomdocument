"use client";

import { CheckCircle2, ClipboardList, Clock3, Copy, FileText, Home, PenLine, Printer, Send, ShieldCheck, Sparkles, WalletCards } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Proposal = { customerName:string; title:string; summary:string; scopes:string; schedule:string; flow:string; estimate:string; estimateNote:string; confirmed:string; concerns:string; reasons:string; cautions:string; familyMemo:string; };

const initial: Proposal = {
  customerName: "お客様",
  title: "住宅コーティングBOSS ご家族相談メモ",
  summary: "Zoomでご説明した住宅コーティングの内容を、ご家族で確認しやすいように整理します。",
  scopes: "浴室一式｜施工範囲を確認してください\nキッチン｜施工範囲を確認してください\nトイレ｜施工範囲を確認してください\n洗面台｜施工範囲を確認してください",
  schedule: "施工日数と入居予定日から見た推奨スケジュールを確認してください。",
  flow: "当日の作業、使用可能になるタイミング、完全硬化までの期間を確認してください。",
  estimate: "総額と内訳は修正見積書で最終確認してください。",
  estimateNote: "出張費、土日料金、当日追加時の扱いなど、金額が変わる条件を確認してください。",
  confirmed: "Zoomで確認した事実を箇条書きで整理してください。",
  concerns: "お客様が気にしていた点を箇条書きで整理してください。",
  reasons: "おすすめした理由を、営業色を抑えて事実ベースで整理してください。",
  cautions: "施工後のお手入れ、避ける掃除道具、洗剤の注意点を整理してください。",
  familyMemo: "ご家族に共有すべき判断材料を箇条書きで整理してください。",
};

const splitLines = (text:string) => text.split("\n").map((line) => line.trim()).filter(Boolean);
const has = (source:string, words:string[]) => words.some((word) => source.includes(word));

function uniq(items:string[]) { return Array.from(new Set(items)).filter(Boolean); }

function extract(transcript:string): Proposal {
  const source = transcript;
  const scopes:string[] = [];
  const concerns:string[] = [];
  const reasons:string[] = [];
  const cautions:string[] = [];
  const confirmed:string[] = [];
  if (has(source,["浴室","シャワールーム"])) scopes.push("浴室一式｜会話内で説明された浴室・シャワールームの範囲を確認");
  if (source.includes("キッチン")) scopes.push("キッチン｜シンク、天板、パネル、レンジフードなど対象範囲を確認");
  if (source.includes("トイレ")) scopes.push("トイレ｜便器、床など対象範囲を確認");
  if (source.includes("洗面")) scopes.push("洗面台｜横幅、鏡、天板など対象範囲を確認");
  if (source.includes("玄関")) scopes.push("玄関タイル｜見た目の変化と効果を写真などで確認");
  if (source.includes("床")) scopes.push("室内床｜施工箇所と質感変化の有無を確認");
  if (source.includes("変色")) concerns.push("コーティング液剤による変色や素材との反応がないか。"), reasons.push("保証範囲や施工時トラブル時の対応を確認済みか見直す。");
  if (source.includes("保証")) confirmed.push("保証期間、保証範囲、対象外になる条件を確認する。");
  if (source.includes("保険")) confirmed.push("施工時の破損や傷が起きた場合の対応方法を確認する。");
  if (source.includes("ツヤ")) concerns.push("施工後にツヤや濡れ色など、見た目の変化が出る可能性がある。");
  if (source.includes("UV")) reasons.push("日焼けや劣化を抑える目的でUVカット効果を確認する。");
  if (has(source,["水垢","汚れ","落としやす"])) reasons.push("汚れや水垢を落としやすくし、日々の掃除負担を軽くする目的。 ");
  if (source.includes("トップコート")) cautions.push("トップコートの頻度、使う場所、追加購入の目安を家族で共有する。"), concerns.push("定期的なトップコートの手間が許容できるか。 ");
  if (has(source,["研磨剤","メラミン","酸性","アルカリ"])) cautions.push("研磨剤、メラミンスポンジ、強い酸性・アルカリ性洗剤など避けるものを確認する。");
  if (has(source,["2日","3日","硬化","2週間"])) confirmed.push("施工日数、使用可能になるタイミング、完全硬化までの期間を確認する。");
  if (has(source,["出張費","土日","追加料金","変わること"])) confirmed.push("見積金額から変わる条件、追加費用の有無を確認する。");
  const prices = source.match(/[0-9０-９.]+\s*万\s*円/g) || [];
  return { ...initial, scopes: scopes.length ? uniq(scopes).join("\n") : initial.scopes, estimate: prices.length ? `Zoom内で出た金額候補: ${uniq(prices).join("、")}。最終金額は修正見積書で確認してください。` : initial.estimate, confirmed: confirmed.length ? uniq(confirmed).join("\n") : initial.confirmed, concerns: concerns.length ? uniq(concerns).join("\n") : initial.concerns, reasons: reasons.length ? uniq(reasons).join("\n") : initial.reasons, cautions: cautions.length ? uniq(cautions).join("\n") : initial.cautions, familyMemo: "見積総額と施工範囲を修正見積書で確認する。\n見た目が変わる箇所は写真やサンプルで確認する。\n施工日程と入居予定日から、無理のない施工タイミングを確認する。\nお手入れ方法と避ける掃除道具を家族で共有する。" };
}

function encode(data:Proposal) { return btoa(unescape(encodeURIComponent(JSON.stringify(data)))).replaceAll("+","-").replaceAll("/","_").replaceAll("=",""); }
function decode(value:string): Proposal | null { try { const base64 = value.replaceAll("-","+").replaceAll("_","/").padEnd(Math.ceil(value.length/4)*4,"="); return { ...initial, ...JSON.parse(decodeURIComponent(escape(atob(base64)))) }; } catch { return null; } }

function Field({label,value,onChange,full,single}:{label:string;value:string;onChange:(value:string)=>void;full?:boolean;single?:boolean}) { return <div className={`field ${full ? "full" : ""}`}><label>{label}</label>{single ? <input value={value} onChange={(e)=>onChange(e.target.value)} /> : <textarea value={value} onChange={(e)=>onChange(e.target.value)} />}</div>; }
function Section({title,icon,children}:{title:string;icon:React.ReactNode;children:React.ReactNode}) { return <section className="sec"><h3 className="title">{icon}{title}</h3>{children}</section>; }
function Preview({data}:{data:Proposal}) { const scopes = splitLines(data.scopes).map((line)=>{ const [place,...rest]=line.split("｜"); return { place, range: rest.join("｜") || "施工範囲を確認してください。" }; }); const notes = [...splitLines(data.confirmed),...splitLines(data.concerns),...splitLines(data.reasons),...splitLines(data.cautions)]; return <article className="lp"><section className="hero"><p className="eyebrow">住宅コーティングBOSS</p><h2>{data.title}</h2><p className="lead">{data.customerName}へのご提案内容を、ご家族で確認しやすい形に整理しました。</p><div className="summary"><div><span>施工日数</span><strong>要確認</strong></div><div><span>用途</span><strong>Zoom後の家族相談</strong></div><div><span>公開前確認</span><strong>スタッフ確認済み</strong></div></div></section><Section icon={<Home size={18}/>} title="1. 本日のご提案内容"><p className="lead">{data.summary}</p></Section><Section icon={<ClipboardList size={18}/>} title="2. 施工箇所と施工範囲"><ul className="list">{scopes.map((item)=><li key={item.place+item.range}><strong>{item.place}</strong>{item.range}</li>)}</ul></Section><Section icon={<Clock3 size={18}/>} title="3. 施工日数・当日の流れ"><p className="lead">{data.schedule}</p><p className="fine">{data.flow}</p></Section><Section icon={<WalletCards size={18}/>} title="4. 金額"><div className="amount"><span>見積確認</span><strong>修正見積書で最終確認</strong></div><p className="fine">{data.estimate}</p><p className="fine">{data.estimateNote}</p></Section><Section icon={<ShieldCheck size={18}/>} title="5. Zoomで確認した内容"><ul className="list">{notes.map((item)=><li key={item}>{item}</li>)}</ul></Section><Section icon={<FileText size={18}/>} title="6. ご家族への共有メモ"><ul className="list">{splitLines(data.familyMemo).map((item)=><li key={item}>{item}</li>)}</ul></Section></article>; }

export default function Page() {
  const [transcript,setTranscript]=useState("");
  const [data,setData]=useState<Proposal>(initial);
  const [checked,setChecked]=useState(false);
  const [url,setUrl]=useState("");
  const [copied,setCopied]=useState(false);
  useEffect(()=>{ const hit=window.location.hash.match(/proposal=([^&]+)/)?.[1]; const decoded=hit ? decode(hit) : null; if(decoded){ setData(decoded); setChecked(true); } },[]);
  const status=useMemo(()=>checked ? "確認済み" : "未確認の下書き",[checked]);
  const update=(key:keyof Proposal,value:string)=>{ setData((current)=>({...current,[key]:value})); setChecked(false); setUrl(""); };
  const publish=()=>{ const encoded=encode(data); const nextUrl=`${window.location.origin}${window.location.pathname}#proposal=${encoded}`; setUrl(nextUrl); window.history.replaceState(null,"",`#proposal=${encoded}`); };
  const copy=async()=>{ if(!url) return; await navigator.clipboard.writeText(url); setCopied(true); setTimeout(()=>setCopied(false),1600); };
  return <main className="shell"><header className="top"><div className="brand"><div className="mark"><Sparkles size={22}/></div><div><strong>住宅コーティングBOSS</strong><p className="muted">家族相談用ページ作成</p></div></div><button className="btn" onClick={()=>window.print()}><Printer size={18}/>PDF印刷</button></header><section className="panel intro"><p className="eyebrow">Zoom後の持ち帰り検討をサポート</p><h1>文字起こしから、家族に正しく共有できる1ページLPを作成します。</h1><p className="lead">AI抽出結果はそのまま公開せず、スタッフが施工範囲・金額・注意点を確認してからURL共有する設計です。入力内容はブラウザ内で処理され、GitHubには保存されません。</p><div className="steps"><div className="step"><strong>1. 文字起こし入力</strong><span>Zoomの会話を貼り付けて要点の下書きを作ります。</span></div><div className="step"><strong>2. 確認・修正</strong><span>スタッフが編集し、公開前チェックを行います。</span></div><div className="step"><strong>3. URL/PDF共有</strong><span>家族相談用URLを発行し、PDF印刷もできます。</span></div></div></section><div className="grid"><div className="stack"><section className="panel"><div className="head"><div><p className="eyebrow">Input</p><h2>Zoom文字起こし</h2><p className="muted">全文を貼り付けて抽出ボタンを押します。</p></div><button className="btn primary" onClick={()=>{setData(extract(transcript));setChecked(false);setUrl("");}}><Sparkles size={18}/>AI抽出</button></div><div className="field"><label>文字起こしテキスト</label><textarea className="big" value={transcript} onChange={(e)=>setTranscript(e.target.value)} placeholder="Zoom文字起こしをここに貼り付け" /></div></section><section className="panel"><div className="head"><div><p className="eyebrow">Editor</p><h2>抽出結果の確認・修正</h2><p className="muted">公開前に必ず施工範囲、見積金額、注意事項を確認してください。</p></div><span className={`status ${checked ? "ready" : ""}`}>{checked ? <CheckCircle2 size={15}/> : <PenLine size={15}/>}{status}</span></div><div className="fields"><Field label="お客様名" value={data.customerName} onChange={(v)=>update("customerName",v)} single/><Field label="ページタイトル" value={data.title} onChange={(v)=>update("title",v)} single/><Field label="本日のご提案内容" value={data.summary} onChange={(v)=>update("summary",v)} full/><Field label="施工箇所と施工範囲（箇所｜範囲）" value={data.scopes} onChange={(v)=>update("scopes",v)} full/><Field label="施工日数" value={data.schedule} onChange={(v)=>update("schedule",v)}/><Field label="当日の流れ" value={data.flow} onChange={(v)=>update("flow",v)}/><Field label="見積金額" value={data.estimate} onChange={(v)=>update("estimate",v)} full/><Field label="金額の補足" value={data.estimateNote} onChange={(v)=>update("estimateNote",v)} full/><Field label="Zoomで確認した内容" value={data.confirmed} onChange={(v)=>update("confirmed",v)}/><Field label="お客様が気にしていた点" value={data.concerns} onChange={(v)=>update("concerns",v)}/><Field label="おすすめ理由" value={data.reasons} onChange={(v)=>update("reasons",v)}/><Field label="注意事項" value={data.cautions} onChange={(v)=>update("cautions",v)}/><Field label="ご家族に共有すべき要点" value={data.familyMemo} onChange={(v)=>update("familyMemo",v)} full/></div></section><section className="panel"><p className="eyebrow">Publish</p><h2>確認後に公開用URLを作成</h2><label className="check"><input checked={checked} onChange={(e)=>setChecked(e.target.checked)} type="checkbox"/>施工範囲・金額・注意事項を確認し、家族相談用ページとして共有してよい内容です。</label><div className="action-row" style={{marginTop:14}}><button className="btn ok" disabled={!checked} onClick={publish}><Send size={18}/>公開用URLを作成</button><button className="btn" onClick={()=>window.print()}><Printer size={18}/>PDF印刷</button></div>{url ? <div className="share"><strong>共有URL</strong><div className="url">{url}</div><button className="btn" onClick={copy}><Copy size={18}/>{copied ? "コピーしました" : "URLをコピー"}</button></div> : null}</section></div><aside className="preview"><div className="bar"><div><strong>スマホLPプレビュー</strong><p className="muted">この部分が共有・印刷されます。</p></div><button className="btn ghost" onClick={()=>window.print()}><Printer size={18}/></button></div><Preview data={data}/></aside></div></main>;
}
