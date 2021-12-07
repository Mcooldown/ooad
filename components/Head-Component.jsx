import Head from 'next/head';

function HeadComponent({title, description}){
  return(
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Lman - Management Student Service' />
      <meta property='og:description' content='Management Student Service For Indonesia School' />
      <meta property='og:site_name' content='Lman - Management Student Service' />
      <meta property='og:url' content='http://127.0.0.1/' />
      <meta property='og:image' content='https://mobileapi.scproperty.id/softpro_files/essence-logo.png' />
      <link rel="icon" href="/logo.webp" type={"image/webp"}/>
    </Head>
  )
}

export default HeadComponent