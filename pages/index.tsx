import About from '@/components/About';
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

      <div className="container mx-auto">
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        {/* {EXPERIENCE} */}

        {/* {SKILLS} */}

        {/* {PROJECTS} */}

        {/* {CONTACT ME} */}
      </div>
    </div>
  );
}
