import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-slate-200 h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Jan Dočekal - personal portfolio</title>
      </Head>
      <Header />

      {/* {HERO} */}
      <section id="hero" className="container mx-auto snap-center">
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
