import Link from "next/link";
const products=[{id:"gpt-1m",name:"GPT 服务 1 个月",price:"¥39",desc:"适用于合法授权的 GPT 服务兑换。"}];
export default function Home(){
 return <><nav className="nav"><div className="logo">CardHub</div><div className="navlinks"><Link href="/">商品</Link><Link href="/redeem">卡密兑换</Link></div></nav>
 <main><section className="hero"><h1>简单、快速的卡密兑换</h1><p>购买或获得卡密后，在网站输入卡密即可兑换对应服务。简洁的页面，清晰的兑换流程。</p><Link className="btn" href="/redeem">立即兑换</Link></section>
 <section className="wrap"><div className="section-title"><h2>热门商品</h2><Link href="/redeem">兑换卡密 →</Link></div><div className="grid">{products.map(p=><div className="card" key={p.id}><h3>{p.name}</h3><p className="muted">{p.desc}</p><div className="price">{p.price}</div><Link className="btn" href={`/product/${p.id}`}>查看详情</Link></div>)}</div>
 <h2 style={{marginTop:55}}>兑换流程</h2><div className="steps"><div className="step"><b>01 · 获取卡密</b><p className="muted">从正规渠道获得对应商品卡密。</p></div><div className="step"><b>02 · 输入卡密</b><p className="muted">进入兑换页面并提交卡密。</p></div><div className="step"><b>03 · 完成兑换</b><p className="muted">系统验证后生成兑换记录。</p></div></div></section></main>
 <footer className="footer">© 2026 CardHub · 卡密兑换平台</footer></>}
}