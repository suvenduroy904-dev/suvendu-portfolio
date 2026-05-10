// CREATE THESE FILES IN YOUR GITHUB REPOSITORY

// FILE: package.json
{
  "name": "suvendu-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}

// FILE: next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// FILE: app/layout.js
export const metadata = {
  title: 'Suvendu Roy Portfolio',
  description: 'Education and Development Professional',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// FILE: app/page.js

export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Suvendu Roy</h1>
          <p className="text-xl mb-6">
            Education & Development Professional
          </p>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            Experienced education professional with around 10 years of work in
            teacher training, FLN, ECCE, field coordination, community
            engagement, and program implementation.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I have worked with organizations such as Pratham Education
            Foundation and EduWeave Foundation. My experience includes teacher
            training, classroom support, stakeholder coordination, monitoring,
            reporting, and field implementation.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I am passionate about strengthening foundational learning,
            supporting teachers, and improving classroom practices through
            community-based and field-driven approaches.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

          <div className="grid gap-8">
            <div className="bg-white rounded-3xl shadow-md p-6">
              <h3 className="text-2xl font-semibold">
                EduWeave Foundation
              </h3>
              <p className="text-blue-700 font-medium mt-2">
                Field Associate | UNICEF-supported Programme
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-lg">
                <li>Supported teacher training and state-level orientations</li>
                <li>Coordinated field implementation and school visits</li>
                <li>Worked on reporting, documentation, and data tracking</li>
                <li>Supported classroom practices and stakeholder engagement</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-6">
              <h3 className="text-2xl font-semibold">
                Pratham Education Foundation
              </h3>
              <p className="text-blue-700 font-medium mt-2">
                Education & Field Coordination
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-lg">
                <li>
                  Worked extensively in FLN and ECCE-related interventions
                </li>
                <li>
                  Supported structured learning approaches and community
                  engagement
                </li>
                <li>
                  Formed Mothers’ Groups and promoted low-cost TLM activities
                </li>
                <li>
                  Conducted student learning tracking and reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <div className="bg-blue-50 rounded-2xl p-5">
              Teacher Training & Academic Support
            </div>
            <div className="bg-blue-50 rounded-2xl p-5">
              FLN & ECCE Programme Implementation
            </div>
            <div className="bg-blue-50 rounded-2xl p-5">
              Field Coordination & Monitoring
            </div>
            <div className="bg-blue-50 rounded-2xl p-5">
              Community Engagement
            </div>
            <div className="bg-blue-50 rounded-2xl p-5">
              Documentation & Reporting
            </div>
            <div className="bg-blue-50 rounded-2xl p-5">
              Stakeholder Coordination
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="text-xl mb-3">Suvendu Roy</p>
          <p className="text-lg mb-2">Phone: 7001719773</p>
          <p className="text-lg">Email: suvenduroy904@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
