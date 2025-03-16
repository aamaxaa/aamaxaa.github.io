/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, ExternalLink, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Grid background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ff00ff' fillOpacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Gradient overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-purple-900/30 via-fuchsia-600/20 to-cyan-500/30" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-fuchsia-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-transparent bg-clip-text"
          >
            MAXINE SHI
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 border-b border-fuchsia-500/30"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center z-10"
      >
        <div className="container mx-auto px-4 pt-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="block text-fuchsia-500">Hello,</span>
                <span className="block text-white">
                  I'm{" "}
                  <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-transparent bg-clip-text">
                    Maxine Shi
                  </span>
                </span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                A passionate programmer who loves to learn about new
                technologies and simplifying tasks through code
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white border border-fuchsia-400"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact Me
                </Button>
              </div>
              <div className="flex gap-4 mt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-fuchsia-400 hover:bg-white/5"
                  onClick={() =>
                    window.open("https://github.com/aamaxaa", "_blank")
                  }
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-fuchsia-400 hover:bg-white/5"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/maxine-s-a95298133/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-fuchsia-400 hover:bg-white/5"
                  onClick={() =>
                    (window.location.href = "mailto:maxine.shi1@outlook.com")
                  }
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-fuchsia-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/40 to-cyan-500/40" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="./Maxine-Desk.jpg"
                    width="300"
                    height="300"
                    alt="Developer Portrait"
                    className="w-64 h-64 object-cover rounded-full border-4 border-cyan-400/50"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-5 -right-5 w-20 h-20 border-t-2 border-r-2 border-fuchsia-500" />
              <div className="absolute -bottom-5 -left-5 w-20 h-20 border-b-2 border-l-2 border-cyan-400" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative min-h-screen flex items-center z-10 pt-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-transparent bg-clip-text">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-400 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-[550px] rounded-lg overflow-hidden border border-fuchsia-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-fuchsia-500/40" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-black/50 backdrop-blur-sm p-8 border border-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                        Education
                      </h3>
                      <div className="space-y-4 w-full">
                        {[
                          {
                            school: "Worcester Polytechnic Institute",
                            degree: "B.S. in Computer Science",
                            year: "2019-2023",
                            logo: "/wpi-logo.png", // Replace with actual logo path
                          },
                          {
                            school: "Worcester Polytechnic Institute",
                            degree: "M.S. in Computer Science",
                            year: "2021-2023",
                            logo: "/wpi-logo.png", // Replace with actual logo path
                          },
                        ].map((edu, index) => (
                          <div
                            key={index}
                            className="flex items-center bg-white/10 rounded-lg p-4 backdrop-blur-sm w-full"
                          >
                            {/* Logo on the Left */}
                            <img
                              src={"./wpi-logo.png"}
                              width="50"
                              height="50"
                              alt={`${edu.school} Logo`}
                              className="w-12 h-12 object-contain mr-4"
                            />

                            {/* Education Details */}
                            <div>
                              <h4 className="text-lg font-semibold text-white">
                                {edu.school}
                              </h4>
                              <p className="text-gray-300">{edu.degree}</p>
                              <p className="text-gray-400">{edu.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-5 -left-5 w-20 h-20 border-t-2 border-l-2 border-fuchsia-500" />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 border-b-2 border-r-2 border-cyan-400" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">Who I Am</h3>
              <p className="text-gray-300 mb-6">
                I’m a software engineer with a love for building, breaking, and
                fixing things—whether it’s a full-stack app, a tricky bug, or a
                piece of pixel art. I enjoy coding intuitive applications,
                automating tedious tasks, and digging into data to make sense of
                the chaos. My toolbox includes Python, JavaScript, SQL, and C++,
                and I’m always up for learning something new.
              </p>
              <p className="text-gray-300 mb-6">
                When I’m not at my keyboard, I’m probably sketching pixels,
                traveling, or figuring out why my latest project just broke
                (again). If you're into tech, design, or just love geeking out
                about cool projects, let's connect!
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div>
                  <h4 className="text-fuchsia-400 font-bold mb-2">Language</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>Java</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>Typescript</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-bold mb-2">Framework</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>Node.js</li>
                    <li>React / Next.js</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-fuchsia-400 font-bold mb-2">Tools</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>Git</li>
                    <li>Pandas</li>
                    <li>Pytorch</li>
                    <li>AWS (S3, Lambda)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative min-h-screen flex items-center z-10 pt-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-transparent bg-clip-text">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-400 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fullstack Platform",
                desc: "E-commerce platform for luxury watches with custom product data formatting and optimization.",
                tech: ["React", "MongoDB", "Node.js"],
              },
              {
                title: "U.S. Census Data Analysis",
                desc: "Big data analysis of multi-year U.S. Census datasets for demographic insights.",
                tech: ["Python", "Spark", "Power BI"],
              },
              {
                title: "IoT Device Security Analysis",
                desc: "Network security assessment using Wireshark and Nmap to identify vulnerabilities in IoT devices.",
                tech: ["Wireshark", "Nmap", "Python"],
              },
              {
                title: "Meeting Calendar Voting Tool",
                desc: "Developed a dynamic voting tool to facilitate decision-making in team meetings.",
                tech: ["JavaScript", "HTML", "AWS Lambda", "SQL", "MongoDB"],
              },
              {
                title: "Autonomous Robotic Arm Polishing",
                desc: "Developed an AI-driven algorithm for autonomous car surface polishing using a robotic arm.",
                tech: [
                  "Python",
                  "PyTorch",
                  "Intel Realsense",
                  "Image Processing",
                ],
              },
              {
                title: "Portfolio Website",
                desc: "Custom-built portfolio with interactive UI and project showcases.",
                tech: ["Next.js", "Tailwind CSS", "Vercel"],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-fuchsia-500/30 bg-black/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/40 to-cyan-500/40" />
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        backgroundSize: "30px 30px",
                      }}
                    />
                    {/* <Image
                      src={`/file.svg`}
                      height={300}
                      width={500}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-70"
                    /> */}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-fuchsia-500/20 text-fuchsia-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Button
                        variant="ghost"
                        className="text-cyan-400 hover:text-cyan-300 p-0 hover:bg-transparent"
                      >
                        View Details
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:text-fuchsia-400 hover:bg-white/5"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative min-h-screen flex items-center z-10 pt-20 pb-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-transparent bg-clip-text">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-400 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">
                Say Hi, Let's Connect!
              </h3>
              <p className="text-gray-300 mb-8">
                I love talking about tech, design, and creative problem-solving.
                Whether you have a project in mind or just want to geek out over
                cool ideas, drop me a message!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-fuchsia-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-300">maxine.shi1@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center"
                    onClick={() =>
                      window.open("https://github.com/aamaxaa", "_blank")
                    }
                  >
                    <Github className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">GitHub</h4>
                    <p className="text-gray-300">github.com/aamaxaa</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/maxine-s",
                        "_blank"
                      )
                    }
                  >
                    <Linkedin className="h-5 w-5 text-fuchsia-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <p className="text-gray-300">
                      www.linkedin.com/in/maxine-s
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-fuchsia-500/30 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-transparent bg-clip-text mb-4 md:mb-0">
              MAXINE SHI
            </div>

            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-fuchsia-400 hover:bg-white/5"
                onClick={() =>
                  window.open("https://github.com/aamaxaa", "_blank")
                }
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-fuchsia-400 hover:bg-white/5"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/maxine-s",
                    "_blank"
                  )
                }
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-fuchsia-400 hover:bg-white/5"
                onClick={() =>
                  (window.location.href = "mailto:maxine.shi1@outlook.com")
                }
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Maxine Shi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
