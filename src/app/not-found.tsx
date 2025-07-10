import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="font-sans bg-gradient-to-b from-white to-comfy min-h-screen relative">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}