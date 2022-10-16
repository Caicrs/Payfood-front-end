import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
    <div>
    <Link href="/login">Go to login</Link>
    </div>
    <br></br>
    <div>
    <Link href="/register">Go to register</Link>
    </div>
  
    </>
  )
}

export default Home
