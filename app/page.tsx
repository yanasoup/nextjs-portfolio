import { BentoGridSection } from '@/components/BentoGridSection';
import Clients from '@/components/Clients';
import { Experience } from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { RecentProjects } from '@/components/RecentProjects';
import { Services } from '@/components/Services';
import { TechStack } from '@/components/TechStack';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <BentoGridSection />
        <Experience />
        <Services />
        <TechStack />
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
