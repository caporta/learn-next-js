import Link from 'next/link'
import PostLink from '../components/PostLink'

import withLayout from '../lib/layout'

const Index = () => (
  <section>
    <h1>My Blog</h1>
    <ul>
      <PostLink slug='hello-nextjs' title='Hello Next.js'/>
      <PostLink slug='learn-nextjs' title='Learn Next.js is awesome'/>
      <PostLink slug='deploy-nextjs' title='Deploy apps with Zeit'/>
    </ul>
  </section>
)

export default withLayout(Index)
