import Link from "next/link";
export default async function Product({params}:{params:Promise<{id:string}>}){
 const {id}=await params;
 return <><nav className="nav"><div className="logo">CardHub</div><div className="navlinks"><Link href="/">商品</Link><Link href="/redeem">卡密兑换</Link></div></nav>
 <main className="wrap"><div className="card"><p className="muted">商品编号：{id}</p><h1>GPT 服务 1 个月</h1><div className="price">¥39</div><p className="muted">这是商品详情页示例。实际商品名称、价格、说明可以从数据库动态读取。</p><div className="notice">请确保卡密来自合法、授权的供应渠道。</div><Link className="btn" href="/redeem">输入卡密兑换</Link></div></main></>}
