import withLayout from '../lib/layout'

const Post = (props) => (
  <section>
    <h1>{ props.url.query.title }</h1>
    <p>This is the blog post content.</p>
  </section>
)

export default withLayout(Post)
