import React from 'react';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';

const SkillSection = ({ title, icon: Icon, skills }: { title: string; icon: React.ElementType; skills: string[] }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-6 h-6 text-blue-400" />
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div key={skill} className="flex items-center gap-2 p-3 rounded-lg border-2 border-slate-50 hover:border-blue-500 transition-colors">
          <img
            src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${skill.toLowerCase()}/${skill.toLowerCase()}.png`}
            alt={skill}
            className="w-5 h-5 object-contain"
            onError={(e) => {
              e.currentTarget.src = "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png";
            }}
          />
          <span className="font-bold">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

export function Skills() {
  const skillCategories = {
    Languages: ['C++', 'C', 'JavaScript', 'TypeScript'],
    Frontend: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Acternity UI'],
    Backend: ['Node', 'Express', 'Serverless Architecture', 'Cloudflare Workers', 'Hono'],
    Database: ['MongoDB', 'PostgreSQL', 'Prisma'],
    Tools: ['VS Code', 'Git', 'GitHub', 'Postman API']
  };

  return (
    <section className="text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-12 text-center">Technical Skills</h1>

        <div className="space-y-12">
          <SkillSection title="Languages" icon={Code2} skills={skillCategories.Languages} />
          <SkillSection title="Frontend" icon={Layout} skills={skillCategories.Frontend} />
          <SkillSection title="Backend" icon={Server} skills={skillCategories.Backend} />
          <SkillSection title="Database" icon={Database} skills={skillCategories.Database} />
          <SkillSection title="Tools" icon={Wrench} skills={skillCategories.Tools} />
        </div>
      </div>
    </section>
  );
}