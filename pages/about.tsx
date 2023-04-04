import Layout from '@/components/layout'
import Link from 'next/link'


const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
      Go home
      </Link>
    </p>
  </Layout>
)

export default AboutPage