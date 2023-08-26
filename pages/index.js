import Link from "next/link";



export default function Home() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/about/clients">Clients</Link></li>
      </ul>
   
    </div>
  )
}


