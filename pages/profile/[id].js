import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>userName: {router.query.id}</p>
}