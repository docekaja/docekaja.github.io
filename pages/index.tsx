import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen container my-auto">
      <Head>
        <title>Jan Dočekal - personal portfolio</title>
      </Head>
      <Header />

      {/* {HERO} */}
      <section id="hero">
        <Hero />
      </section>

      {/* {ABOUT} */}

      {/* {EXPERIENCE} */}

      {/* {SKILLS} */}

      {/* {PROJECTS} */}

      {/* {CONTACT ME} */}
    </div>
  );
}
