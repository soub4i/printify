
import Link from 'next/link';
import { useRouter } from 'next/router';

 const currentLink=({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} active-link`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
export default currentLink;