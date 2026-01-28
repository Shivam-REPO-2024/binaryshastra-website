import { ArrowRight, Play } from "lucide-react";
import tutorPhoto from "@/assets/tutor-photo.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden circuit-bg pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl floating" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left slide-up">
            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for New Students</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text neon-text">Future-Ready</span>
              <br />
              Python Learning for
              <br />
              <span className="text-primary neon-text">CBSE, ICSE & WB</span>
              <br />
              Students
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              From school fundamentals to real-world coding — learn Python the smart way with 
              <span className="text-primary font-semibold"> Shivam Kumar Mishra</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="neon-button px-8 py-4 rounded-full text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 group"
              >
                Start Learning
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://youtube.com/@binaryshastra"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel neon-border px-8 py-4 rounded-full text-foreground font-semibold inline-flex items-center justify-center gap-2 hover:bg-primary/10 transition-all duration-300"
              >
                <Play className="w-5 h-5 text-primary" />
                Watch YouTube Lessons
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "9-12", label: "Class Range" },
                { value: "3", label: "Boards Covered" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text neon-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tutor Photo */}
          <div className="relative flex justify-center fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
              
              {/* Main image container */}
              <div className="relative glass-panel neon-border-strong p-2 rounded-3xl overflow-hidden floating">
                <img
                  src={tutorPhoto}
                  alt="Shivam Kumar Mishra - Python Tutor"
                  className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary rounded-full pulse-glow" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full pulse-glow" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-panel neon-border px-4 py-2 rounded-xl">
                <span className="text-sm font-semibold text-primary">Python Expert</span>
              </div>
              <div className="absolute -top-0 -left-10 glass-panel neon-border px-4 py-2 rounded-xl">
                <span className="text-sm font-semibold text-primary">Android Developer</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
