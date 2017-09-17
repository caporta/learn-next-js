import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import PostLink from '../components/PostLink'
import withLayout from '../lib/layout'

const Index = (props) => (
  <section>
    <h1>Batman TV Shows</h1>
    <ul>
      { props.shows.map(({show}) => (
        <PostLink key={show.id} id={show.id} name={show.name} />
      )) }
    </ul>
  </section>
)

const IndexPage = withLayout(Index)

IndexPage.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return { shows: data }
}

export default IndexPage
