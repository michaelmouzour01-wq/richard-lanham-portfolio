import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Technical Elegance
 * - Deep navy (#0F1419) background with teal (#00D9FF) accents
 * - Playfair Display serif for headings, Inter for body text
 * - Asymmetric layouts with strategic whitespace
 * - Smooth scroll animations and hover effects
 */

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: "seismic-imaging",
      title: "3D Seismic Imaging & Wave-Equation Inversion",
      description: "Led interpretation of 3D seismic datasets to map subsea strata in the Gulf of Mexico. Applied advanced wave-equation inversion methods to correct velocity anomalies associated with complex salt bodies.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/5FdKVDFH8DGztDGtCv8ccq/project-card-acoustic-analysis-hkzHC55mDv2FMc5TDtbA9U.webp",
      tags: ["Seismic Imaging", "Wave Propagation", "Gulf of Mexico", "Fugro"],
      achievement: "Improved velocity model accuracy by 20%"
    },
    {
      id: "signal-processing",
      title: "FFT-Based Noise Attenuation Filter",
      description: "Developed and implemented an FFT-based noise-attenuation filter to remove drilling interference from real-time survey data, significantly improving signal-to-noise ratio in acoustic measurements.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/5FdKVDFH8DGztDGtCv8ccq/hero-seismic-visualization-a9Va8FWpQVey3JoJKb25iX.webp",
      tags: ["Signal Processing", "FFT", "Noise Reduction", "Real-time"],
      achievement: "SNR improved by 20%"
    },
    {
      id: "qgis-geospatial",
      title: "QGIS Geospatial Analysis & Visualization",
      description: "Utilized QGIS for spatial visualization and analysis of seismic survey layouts and interpreted geological features. Integrated diverse geospatial data to refine exploration targets and operational planning.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/5FdKVDFH8DGztDGtCv8ccq/project-card-qgis-mapping-LKQX2sWHEisebH9ytedJh7.webp",
      tags: ["QGIS", "GIS", "Geospatial", "Data Integration"],
      achievement: "Enhanced exploration targeting accuracy"
    },
    {
      id: "python-automation",
      title: "Python Automation & Data Processing",
      description: "Automated processing of acoustic sonic logs using Python (NumPy, SciPy, Pandas), reducing manual handling time by 40% while maintaining 99.9% accuracy. Developed Monte Carlo simulations for neutron transport modeling.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/5FdKVDFH8DGztDGtCv8ccq/project-card-python-automation-HAPUbEwrgk4Zaw64SZkAMq.webp",
      tags: ["Python", "Automation", "Data Science", "Monte Carlo"],
      achievement: "40% reduction in processing time"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <div className="text-2xl font-bold font-serif text-accent">RL</div>
          <nav className="flex gap-8 items-center">
            <a href="#about" className="text-sm hover:text-accent transition-colors">About</a>
            <a href="#projects" className="text-sm hover:text-accent transition-colors">Projects</a>
            <a href="#video" className="text-sm hover:text-accent transition-colors">Tutorial</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/5FdKVDFH8DGztDGtCv8ccq/hero-seismic-visualization-a9Va8FWpQVey3JoJKb25iX.webp"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-accent text-sm font-mono tracking-widest">GEOPHYSICIST & SIGNAL PROCESSING SPECIALIST</p>
                <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight">
                  Richard Lanham, <span className="text-accent">PhD</span>
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Transforming noisy physical measurements into high-fidelity subsurface and remote-sensing datasets for informed decision-making in the energy sector. Expertise in seismic imaging, signal processing, and geospatial analysis.
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  View Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-96 rounded-lg overflow-hidden border border-accent/30">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483126481/5FdKVDFH8DGztDGtCv8ccq/hero-seismic-visualization-a9Va8FWpQVey3JoJKb25iX.webp"
                  alt="Seismic visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50 border-y border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-serif font-bold mb-8">Professional Background</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                With a PhD in Physics from Louisiana State University and over 6 years of professional experience, I specialize in converting complex physical measurements into actionable insights for the energy sector. My expertise spans seismic imaging, acoustic signal processing, and geospatial data analysis.
              </p>
              <p>
                Currently serving as Senior Geophysicist at Fugro, I lead interpretation of 3D seismic datasets and oversee deployment of advanced acoustic systems. Previously, as a Quantitative Analyst at Schlumberger, I developed automated processing pipelines that reduced manual handling time by 40% while maintaining exceptional accuracy.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="p-4 bg-background rounded border border-border">
                  <div className="text-2xl font-bold text-accent">6+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="p-4 bg-background rounded border border-border">
                  <div className="text-2xl font-bold text-accent">PhD</div>
                  <div className="text-sm text-muted-foreground">Physics</div>
                </div>
                <div className="p-4 bg-background rounded border border-border">
                  <div className="text-2xl font-bold text-accent">20%</div>
                  <div className="text-sm text-muted-foreground">SNR Improvement</div>
                </div>
                <div className="p-4 bg-background rounded border border-border">
                  <div className="text-2xl font-bold text-accent">99.9%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-serif font-bold mb-4">Featured Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent mb-12"></div>
          
          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "lg:grid-cols-2" : ""}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {idx % 2 === 0 ? (
                  <>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-serif font-bold">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-border">
                        <p className="text-accent font-mono text-sm">✓ {project.achievement}</p>
                      </div>
                    </div>
                    <div className="relative h-80 rounded-lg overflow-hidden border border-accent/30 transform transition-transform duration-300 hover:scale-105">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative h-80 rounded-lg overflow-hidden border border-accent/30 transform transition-transform duration-300 hover:scale-105">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-serif font-bold">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-border">
                        <p className="text-accent font-mono text-sm">✓ {project.achievement}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section id="video" className="py-20 bg-card/50 border-y border-border">
        <div className="container">
          <h2 className="text-4xl font-serif font-bold mb-4">QGIS Tutorial</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent mb-12"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold">Clipping Vector Data in QGIS</h3>
              <p className="text-muted-foreground leading-relaxed">
                This tutorial demonstrates advanced geospatial data manipulation techniques using QGIS. Learn how to efficiently clip vector datasets to specific regions of interest, a fundamental skill in GIS analysis and spatial data management.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">Vector Data Clipping</p>
                    <p className="text-sm text-muted-foreground">Efficiently subset spatial datasets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">Spatial Analysis</p>
                    <p className="text-sm text-muted-foreground">Extract meaningful geographic insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">GIS Workflows</p>
                    <p className="text-sm text-muted-foreground">Professional geospatial data management</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-accent/30 bg-background">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/az1wbce5gyk"
                title="Clip Vector data in QGIS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-serif font-bold mb-4">Technical Expertise</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border hover:border-accent transition-colors">
              <h3 className="text-lg font-serif font-bold mb-4 text-accent">Geophysics</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Seismic Imaging & Interpretation</li>
                <li>• Wave Propagation Analysis</li>
                <li>• Acoustic Signal Processing</li>
                <li>• Wireline Logging Analysis</li>
                <li>• Reservoir Characterization</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-card border-border hover:border-accent transition-colors">
              <h3 className="text-lg font-serif font-bold mb-4 text-accent">Software & Tools</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Python (NumPy, SciPy, Pandas)</li>
                <li>• MATLAB</li>
                <li>• QGIS & ArcGIS</li>
                <li>• Digital Signal Processing</li>
                <li>• Monte Carlo Simulations</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-card border-border hover:border-accent transition-colors">
              <h3 className="text-lg font-serif font-bold mb-4 text-accent">Specializations</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Data Automation & Pipelines</li>
                <li>• Geospatial Analysis</li>
                <li>• Algorithm Development</li>
                <li>• Real-time Data Processing</li>
                <li>• Technical Leadership</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50 border-y border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Let's Connect</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm interested in discussing geophysics projects, signal processing challenges, and collaborative opportunities in the energy and tech sectors.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                <Mail className="h-4 w-4" />
                Email Me
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border text-center text-muted-foreground text-sm">
        <div className="container">
          <p>© 2026 Richard Lanham, PhD. All rights reserved.</p>
          <p className="mt-2">Geophysicist | Signal Processing Specialist | Geospatial Analyst</p>
        </div>
      </footer>
    </div>
  );
}
