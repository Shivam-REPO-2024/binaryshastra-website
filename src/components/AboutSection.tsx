import { Code2, GraduationCap, Lightbulb, Smartphone, Database, Flame } from "lucide-react";

const AboutSection = () => {
  const techStack = [
    { name: "Python", icon: Code2 },
    { name: "Java", icon: Code2 },
    { name: "Kotlin", icon: Smartphone },
    { name: "C", icon: Code2 },
    { name: "Firebase", icon: Flame },
    { name: "SQL", icon: Database },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="slide-up">
            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Meet Your Tutor</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text neon-text">Shivam Kumar Mishra</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Python Programming Tutor</span> with 
              over 2 years of experience helping students master programming. I specialize in teaching 
              CBSE, ICSE, and WB Board syllabus for classes 9 to 12. Covered langugaes are JAVA, PYTHON and C.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My teaching approach focuses on <span className="text-primary">simple explanations</span>, 
              <span className="text-primary"> strong logic building</span>, and 
              <span className="text-primary"> real coding practice</span>. I believe every student can become 
              a confident coder with the right guidance.
            </p>

            {/* Android Developer Badge */}
            <div className="glass-panel neon-border p-6 rounded-2xl mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Also an Android Developer</h3>
                  <p className="text-muted-foreground text-sm">Building next-gen mobile experiences</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full text-sm"
                  >
                    <tech.icon className="w-3 h-3 text-primary" />
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Code2, text: "Python Specialist" },
                { icon: GraduationCap, text: "CBSE/ICSE/WB Expert" },
                { icon: Lightbulb, text: "Logic-First Teaching" },
                { icon: Flame, text: "2+ Years Experience" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-panel neon-border p-8 rounded-3xl relative overflow-hidden">
              {/* Code snippet decoration */}
              <div className="font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                
                <pre className="text-muted-foreground">
                  <code>
{`class Tutor:
    def __init__(self):
        self.name = `}<span className="text-primary">"Shivam Kumar Mishra"</span>{`
        self.role = `}<span className="text-primary">"Programming Educator"</span>{`
        self.experience = `}<span className="text-primary">"2+ years"</span>{`
        self.boards = [`}<span className="text-primary">"CBSE"</span>{`, `}<span className="text-primary">"ICSE"</span>{`, `}<span className="text-primary">"WB"</span>{`]
        self.skills = [`}
{`            `}<span className="text-primary">"Python"</span>{`,
            `}<span className="text-primary">"Android Development"</span>{`,
            `}<span className="text-primary">"Logic Building"</span>{`,
              `}<span className="text-primary">"DSA Solving"</span>{`
        ]
    
    def teach(self, student):
        `}<span className="text-green-400"># Making coding simple!</span>{`
        return student.`}<span className="text-yellow-400">become_confident</span>{`()
`}
                  </code>
                </pre>
              </div>

              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
