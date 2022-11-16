import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
    <h1>Pagina de apresentação do projeto</h1>
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
