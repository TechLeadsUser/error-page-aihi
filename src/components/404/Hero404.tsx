import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";
import { Link } from "react-router-dom";
import techBg from "@/assets/tech-circuit-bg.jpg";
const Hero404 = () => {
  return <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-12 overflow-hidden" style={{
    backgroundImage: `url(${techBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-float" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-secondary rounded-full animate-float" style={{
        animationDelay: '0.5s'
      }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* 404 Number with glitch effect */}
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold text-primary tracking-extra-tight animate-glitch leading-none lg:text-9xl xl:text-9xl">
            404
          </h1>
        </div>

        {/* Main content */}
        <div className="mb-12 space-y-6">
          <h2 className="text-3xl sm:text-4xl xl:text-6xl font-semibold text-text-primary tracking-tight leading-tight lg:text-3xl">
            Page not found.
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed lg:text-xl">
            The link may be broken or the page may have moved. Let's get you back on track.
          </p>
        </div>

        {/* Action buttons */}
        <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg" asChild>
            <Link to="/">
              Go to Homepage
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            
          </Button>
          
        </div>

        {/* Search */}
        
      </div>
    </section>;
};
export default Hero404;