import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div>
      <div className="bg-gray-200 py-24">
        <div
          className="text-center mx-auto pb-12"
          style={{ maxWidth: "800px" }}
          data-aos="fade-up"
        >
          <h4 className="text-blue-500">About Us</h4>
          <h1 className="text-5xl mb-4">Empowering Tomorrow's Tech Innovators</h1>
          <p className="mb-0 m-5">
            Welcome to the MPI Computer Club! We are a passionate community of
            students and tech enthusiasts dedicated to learning, creating, and
            sharing knowledge about the latest in computer science, programming,
            and technology. Our mission is to foster collaboration, growth, and
            hands-on experience in software development, hardware projects, and
            much more.
          </p>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side - Text Section */}
            <div
              className="bg-white p-8 rounded-lg shadow-md"
              data-aos="fade-right"
            >
              <h4 className="text-blue-500 font-semibold" data-aos="fade-up">
                About Our Club
              </h4>
              <h1 className="text-4xl font-bold text-gray-800 my-4" data-aos="fade-up">
                Innovate, Learn, and Grow Together
              </h1>
              <p className="text-gray-600 mb-4" data-aos="fade-up">
                At the MPI Computer Club, we believe that the future belongs to
                those who can master technology. Our club provides a platform
                for members to work on exciting projects, attend workshops, and
                participate in hackathons. We aim to inspire curiosity and
                creativity in the field of computing.
              </p>
              <p className="text-gray-600 mb-4" data-aos="fade-up">
                Join us to collaborate on projects, learn new skills, and become
                a part of a vibrant community of future tech leaders.
              </p>

              <div className="mb-6">
                <p className="text-gray-700 mb-2" data-aos="fade-up">
                  <i className="fa fa-check text-blue-500 mr-2"></i>Weekly
                  coding challenges and competitions.
                </p>
                <p
                  className="text-gray-700 mb-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="fa fa-check text-blue-500 mr-2"></i>Workshops on
                  the latest programming languages and technologies.
                </p>
                <p
                  className="text-gray-700 mb-2"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="fa fa-check text-blue-500 mr-2"></i>Networking
                  events with industry experts and alumni.
                </p>
                <p
                  className="text-gray-700 mb-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="fa fa-check text-blue-500 mr-2"></i>Hackathons
                  and hands-on project collaborations.
                </p>
                <p
                  className="text-gray-700 mb-2"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="fa fa-check text-blue-500 mr-2"></i>Resources
                  for learning web development, AI, data science, and more.
                </p>
              </div>
              <a
                className="inline-block bg-blue-500 text-white font-semibold rounded-full px-6 py-3"
                href="#"
                data-aos="fade-up"
              >
                Learn More
              </a>
            </div>

            {/* Right Side - Image and Stats Section */}
            <div
              className="bg-white p-8 rounded-lg shadow-md"
              data-aos="fade-left"
            >
              <div className="mb-6 flex justify-center" data-aos="zoom-in">
                <img
                  src="images/ima-about.png"
                  className="w-96 h-auto rounded-lg"
                  alt="Computer Club"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="bg-gray-100 p-4 rounded-lg text-center"
                  data-aos="fade-up"
                >
                  <span className="text-blue-500 text-2xl font-bold">
                    100+
                  </span>
                  <h4 className="text-gray-800 font-semibold mt-2">
                    Active Members
                  </h4>
                </div>
                <div
                  className="bg-gray-100 p-4 rounded-lg text-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span className="text-blue-500 text-2xl font-bold">20+</span>
                  <h4 className="text-gray-800 font-semibold mt-2">
                    Workshops and Events
                  </h4>
                </div>
                <div
                  className="bg-gray-100 p-4 rounded-lg text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="text-blue-500 text-2xl font-bold">10+</span>
                  <h4 className="text-gray-800 font-semibold mt-2">
                    Ongoing Projects
                  </h4>
                </div>
                <div
                  className="bg-gray-100 p-4 rounded-lg text-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <span className="text-blue-500 text-2xl font-bold">50+</span>
                  <h4 className="text-gray-800 font-semibold mt-2">
                    Competitions Participated
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
