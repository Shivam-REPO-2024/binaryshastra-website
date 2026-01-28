import { BookOpen, Brain, Rocket, Code, Trophy, Target } from "lucide-react";

const SpecializationsSection = () => {
  const specializations = [
    {
      icon: BookOpen,
      title: "Python for School Exams",
      description: "Complete coverage of CBSE, ICSE & WB Board syllabus with exam-focused preparation",
      highlight: "CBSE • ICSE • WB",
    },
    {
      icon: Brain,
      title: "Logic Building & Problem Solving",
      description: "Develop strong analytical thinking and step-by-step problem-solving skills",
      highlight: "Foundation First",
    },
    {
      icon: Rocket,
      title: "Beginner to Advanced Python",
      description: "Progressive learning path from basics to advanced concepts at your own pace",
      highlight: "All Levels",
    },
    {
      icon: Code,
      title: "Real-World Coding Examples",
      description: "Learn through practical projects and real-world applications of Python",
      highlight: "Hands-on Practice",
    },
    {
      icon: Trophy,
      title: "Exam-Oriented Learning",
      description: "Focused preparation with previous year questions and marking scheme insights",
      highlight: "Score Better",
    },
    {
      icon: Target,
      title: "Practical Learning Approach",
      description: "Learn by doing with interactive coding sessions and immediate feedback",
      highlight: "Learn by Doing",
    },
  ];

  return (
    <section id="specializations" className="py-24 relative circuit-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">What You'll Learn</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text neon-text">Specializations</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Python education designed to help you excel in school exams 
            while building real programming skills
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="group glass-panel neon-border p-6 rounded-2xl transition-all duration-300 hover:neon-border-strong hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <spec.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Highlight Badge */}
              <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {spec.highlight}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {spec.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {spec.description}
              </p>

              {/* Decorative line */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
