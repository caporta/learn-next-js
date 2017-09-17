import Link from 'next/link'

export default (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{ props.name }</a>
    </Link>
  </li>
)
