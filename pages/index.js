import Link from 'next/link'

const Index = () => (
  <div>
    <Link href='/about'>
      <a style={{ fontSize: 14 }}>About</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index
