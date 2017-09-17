import fetch from 'isomorphic-fetch'

import withLayout from '../lib/layout'

const Post = (props) => (
  <section>
    <h1>{ props.show.name }</h1>
    <p>{ props.show.summary.replace(/<[/]?p>/g, '') }</p>
    <img src={ props.show.image.medium } />
  </section>
)

const PostPage = withLayout(Post)

PostPage.getInitialProps = async context => {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default PostPage
