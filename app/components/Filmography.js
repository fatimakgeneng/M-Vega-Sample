"use client";

const projects = [
  { title: 'Lorem Ipsum Dolor', role: 'Lorem. Ipsum', year: '2025' },
  { title: 'Lorem Ipsum', role: 'Lorem', year: '2024' },
  { title: 'Lorem Ipsum Dolor', role: 'Lorem Ipsum Dolor', year: '2023' }
];

export default function Filmography({ refProp }) {
  return (
    <section 
      id="filmography" 
      className="py-20 px-4 opacity-0 transition-all duration-1000"
      ref={refProp}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Filmography
        </h2>
        <ul className="space-y-6">
          {projects.map((project, index) => (
            <li 
              key={index} 
              className="flex justify-between items-start border-b border-neutral-800 pb-4 transition-all duration-500 hover:bg-neutral-900/30 hover:px-4 hover:py-2 rounded-lg cursor-pointer hover:translate-x-2"
            >
              <div>
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-neutral-400">{project.role}</p>
              </div>
              <span className="text-neutral-400">{project.year}</span>
            </li>
          ))}
        </ul>
        <div className="text-center mt-8">
          <a 
            href="https://www.imdb.com/name/nm8746509/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-neutral-400 hover:text-white underline transition-all duration-500 hover:scale-105"
          >
            View Full IMDb
          </a>
        </div>
      </div>
    </section>
  );
}