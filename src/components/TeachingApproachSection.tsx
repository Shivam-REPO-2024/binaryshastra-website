import { Lightbulb, FileCode, Code2, Dumbbell, ArrowRight, MessageCircleQuestion } from "lucide-react";

const TeachingApproachSection = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Concept",
      description: "Clear explanation of the fundamental concept with real-life examples",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FileCode,
      title: "Example",
      description: "Visual examples and step-by-step walkthroughs to understand application",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code2,
      title: "Code",
      description: "Write actual code together with proper syntax and best practices",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Dumbbell,
      title: "Practice",
      description: "Hands-on exercises and problems to reinforce learning",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-24 relative circuit-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">How I Teach</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text neon-text">Teaching Approach</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven 4-step methodology that helps students understand, remember, 
            and apply programming concepts effectively
          </p>
        </div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Connection line - visible on larger screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Arrow between cards on large screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
                
                <div className="glass-panel neon-border p-6 rounded-2xl h-full transition-all duration-300 hover:neon-border-strong hover:-translate-y-2">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${step.color}`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: MessageCircleQuestion,
              title: "Doubt Clearing",
              description: "Dedicated doubt-clearing sessions for complete understanding",
            },
            {
              icon: Lightbulb,
              title: "Student-Friendly",
              description: "Simple language and relatable examples for easy learning",
            },
            {
              icon: Code2,
              title: "Logic First",
              description: "Build strong logical thinking before syntax memorization",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-xl flex items-start gap-4 hover:neon-border transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingApproachSection;
