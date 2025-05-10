// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
          <p className="text-xl text-gray-600">Start building your amazing project here!</p>
        </div>
  
  import { ArrowRight, Code, Globe, Zap } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { Link } from "react-router-dom";
  import { useEffect } from "react
  import { ArrowRight, Code, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  // Add scroll animation for sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-show');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.fade-in').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Crafting Digital Experiences That Inspire
              </h1>
              <p className="text-xl text-blue-100">
                We build beautiful, responsive websites that help businesses grow and succeed in the digital landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link to="/projects">View Our Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Person using laptop" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end web development solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md fade-in">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Globe className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Design</h3>
              <p className="text-gray-600 mb-4">
                Beautiful, intuitive designs that engage your audience and represent your brand.
              </p>
              <a href="#" className="text-blue-700 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md fade-in">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Code className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Clean, efficient code that brings your designs to life with flawless functionality.
              </p>
              <a href="#" className="text-blue-700 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md fade-in">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Zap className="text-blue-700 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
              <p className="text-gray-600 mb-4">
                Speed up your site and improve user experience with our optimization techniques.
              </p>
              <a href="#" className="text-blue-700 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent work and see how we've helped businesses achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group rounded-lg overflow-hidden shadow-md bg-white fade-in">
                <div className="overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee15${item+5}`}
                    alt={`Project ${item}`} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {item}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project, highlighting key features and technologies used.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/projects">View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help bring your vision to life with a website that stands out.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
