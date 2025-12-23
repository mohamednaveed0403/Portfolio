import { personalInfo, skills, projects } from '../data'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
        <p className="text-xl mt-2">{personalInfo.title}</p>
        <p className="mt-4 max-w-xl mx-auto">{personalInfo.bio}</p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map(skill => (
            <span key={skill} className="bg-white/20 px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(proj => (
            <div key={proj.name} className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-bold text-xl">{proj.name}</h3>
              <p className="mt-2">{proj.description}</p>
              <p className="mt-2 text-sm">Tech: {proj.tech.join(", ")}</p>
              <div className="mt-2 flex gap-4">
                <a href={proj.github} target="_blank" className="underline">GitHub</a>
                <a href={proj.live} target="_blank" className="underline">Live</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href={`mailto:${personalInfo.email}`} className="underline">{personalInfo.email}</a></p>
        <p>Phone: {personalInfo.phone}</p>
        <p>
          <a href={personalInfo.linkedin} className="underline mr-4">LinkedIn</a>
          <a href={personalInfo.github} className="underline">GitHub</a>
        </p>
      </section>
    </div>
  )
}
