import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-base-100 py-12">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">

        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-primary">CodeFiy</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Building modern, scalable, and high-performance digital solutions for everyone.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left - Image */}
          <div>
            <Image
              src="https://i.ibb.co.com/7J7gW8pM/aiony-haust-3-TLl-97HNJo-unsplash.jpg"
              alt="Team"
              className="rounded-2xl shadow-lg"
              width={500}
              height={500}
            />
          </div>

          {/* Right - Text */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              CodeFiy Bangladesh is a web development, digital service, and tech solution provider company.
              We help individuals and businesses bring their ideas to life through modern technology,
              fast performance, and stunning UI/UX.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to make technology easier, smarter, and accessible for everyone —
              from students and startups to corporate clients. We deliver reliable services that create
              real impact.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What We Provide</h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Modern Web Development</li>
              <li>UI/UX Design</li>
              <li>Portfolio & Branding Services</li>
              <li>Tech Consultancy</li>
              <li>API Integration & Full-Stack Solutions</li>
            </ul>
          </div>

        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 text-center">
          <div className="p-6 bg-base-200 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-primary">150+</h3>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>
          <div className="p-6 bg-base-200 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-primary">95%</h3>
            <p className="text-gray-600 mt-2">Client Satisfaction</p>
          </div>
          <div className="p-6 bg-base-200 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-primary">3+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="/contact" className="btn btn-primary text-lg px-8">
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
}
