import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';
import { getSession } from 'next-auth/client';
import Footer from '../components/Footer';
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon Pro</title>
        <link rel='icon' href='/Amazon_icon.png' />
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
        <ProductFeed products={products} />
      </main>
      <Footer/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
}