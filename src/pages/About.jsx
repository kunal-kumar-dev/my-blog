import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I started learning programming a few years ago and gradually developed a strong interest
          in frontend development, where I enjoy turning ideas into clean, usable interfaces.
          I am currently pursuing my B.Tech in Computer Science.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 h-full">
          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            My focus is on frontend development, where I work with modern tools and frameworks
            to build responsive and user-friendly web applications.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            This space reflects my learning journey. I use it to share projects, explore new concepts,
            and continuously improve my fundamentals along with real-world development skills.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Skills & Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Python', 'Git'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-12 text-center">
        <h2 className="text-2xl font-bold mb-8">Let's Connect</h2>
        <div className="flex justify-center gap-8">
          <a href="https://github.com/kunal-kumar-dev" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/kunal-kumar-rajak/" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-700 hover:text-white transition">
            <Linkedin size={24} />
          </a>
          <a href="mailto:thetechkunal@gmail.com" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-red-500 hover:text-white transition">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
