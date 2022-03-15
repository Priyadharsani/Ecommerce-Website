import Head from 'next/head'
import { Typography } from '@mui/material'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ecommerce Website</title>
        <meta name="description" content="The Best Quality Products in Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant='h1' component='h1'> 
        Ecommerce Website
      </Typography>
    </div>
  )
}
