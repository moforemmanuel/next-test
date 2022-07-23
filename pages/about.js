import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Codevolution</title>
        <meta name="description" content="about page" />
      </Head>
      <h1>About Page Hahah</h1>;
      <Image
        src="/img.png"
        alt="ss"
        placeholder="blur"
        layout="fill"
        blurDataURL="/img.png"
      />
    </>
  );
}

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
