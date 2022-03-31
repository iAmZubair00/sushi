import Container from 'app/components/Container'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Token() {
  const router = useRouter()
  const { id } = router.query
  return (
    <Container id={`token-${id}-page`} className="py-4 md:py-8 lg:py-12" maxWidth="2xl">
      <Head>
        <title>Token {id} | DXX</title>
        <meta key="description" name="description" content="SushiSwap tokens." />
        <meta key="twitter:description" name="twitter:description" content="SushiSwap tokens." />
        <meta key="og:description" property="og:description" content="SushiSwap tokens." />
      </Head>
    </Container>
  )
}
