import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Saud12131',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sayyed-saud-a6128129b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      href: 'https://x.com/yourusername',
      color: 'hover:text-blue-500'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'saudsayyedofficial@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section className="text-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactLinks.map(({ icon: Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${color}`}
              >
                <Icon className="w-8 h-8" />
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}