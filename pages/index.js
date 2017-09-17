import Link from 'next/link'
import PostLink from '../components/PostLink'

import withLayout from '../lib/layout'

const Index = () => (
  <section>
    <h1>My Blog</h1>
    <ul>
      <PostLink title='Hello Next.js'/>
      <PostLink title='Learn Next.js is awesome'/>
      <PostLink title='Deploy apps with Zeit'/>
    </ul>
  </section>
)

export default withLayout(Index)
