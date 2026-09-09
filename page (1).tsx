 "use client";
import {useState} from "react"; import {useRouter} from "next/navigation";
export default function Redeem(){const [code,setCode]=useState("");const [msg,setMsg]=useState("");const router=useRouter();
 function submit(e:React.FormEvent){e.preventDefault(); if(!code.trim()){setMsg("请输入卡密");return;} if(code.trim().toUpperCase()==="DEMO-VALID"){router.push("/result?status=success&order=DEMO-001")}else setMsg("演示环境：请输入 DEMO-VALID 测试兑换。")}
 return <><nav className="nav"><div className="logo">CardHub</div><div className="navlinks"><a href="/">商品</a></div></nav><main className="wrap"><form className="form" onSubmit={submit}><h1>卡密兑换</h1><p className="muted">请输入你获得的卡密。</p><input className="input" value={code} onChange={e=>setCode(e.target.value)} placeholder="例如：XXXX-XXXX-XXXX"/>{msg&&<div className="notice error">{msg}</div>}<button className="btn" type="submit">验证并兑换</button><div className="notice">演示卡密：<b>DEMO-VALID</b></div></form></main></>}
