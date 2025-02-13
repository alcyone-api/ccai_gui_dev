import { Link } from 'react-router-dom';
import PoweredBySection from './PoweredBySection/PoweredBySection';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-primary overflow-hidden flex flex-col justify-center items-center pt-16 pb-24">
      {/* Added pt-16 for padding-top and pb-24 for padding-bottom */}
      <div className="relative z-40 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl space-y-6 md:space-y-14">
          <h1 className="font-tomorrow text-5xl sm:text-6xl md:text-7xl font-bold text-gray-100 leading-tight animate-fade-in-up">
            Create the next <br />
            <span className="font-tomorrow bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent"> big thing.</span>
          </h1>
          <p className="font-tomorrow text-xl md:text-2xl text-textPrimary/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Dream it. Deploy it. Unleash your creativity with CodeCraft AI, the ultimate team of AI-powered coding agents.
          </p>
          <PoweredBySection />
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full animate-fade-in-up delay-300">
            <Link
              to="/prompt"
              className="w-full sm:w-auto font-tomorrow bg-accent hover:bg-accent/90 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 text-center"
            >
              Get Started
            </Link>
            <Link
              to="/docs"
              className="w-full sm:w-auto font-tomorrow bg-transparent border-2 border-accent text-accent hover:bg-accent/10 px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;