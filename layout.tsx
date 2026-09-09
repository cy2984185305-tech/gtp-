import "./globals.css";
export const metadata = { title: "CardHub", description: "卡密兑换商城" };
export default function Layout({children}:{children:React.ReactNode}) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}