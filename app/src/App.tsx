import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ClusteringSection } from './sections/ClusteringSection';
import { IngestionSection } from './sections/IngestionSection';
import { ExpertsSection } from './sections/ExpertsSection';
import { CTASection } from './sections/CTASection';
import { Footer } from './sections/Footer';
import { UnicornFooterBackground } from './components/UnicornFooterBackground';

function App() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      {/* Layer 1: Unicorn Studio WebGL Background (Bottom Layer) */}
      <div className="fixed inset-0 z-0">
        <UnicornFooterBackground />
      </div>

      {/* Frosted Glass Container (Content inside, scrolls with page) */}
      <div
        className="relative z-10 pointer-events-auto mt-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-24 2xl:mx-[160px]"
        style={{
          marginBottom: '0px',
          background: 'rgba(255, 255, 255, 0.003)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <Navbar />
        <main className="bg-transparent">
          <HeroSection />
          <ClusteringSection />
          <IngestionSection />
          <ExpertsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
