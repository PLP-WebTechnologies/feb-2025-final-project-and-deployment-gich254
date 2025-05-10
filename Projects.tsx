import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  technologies: string[];
  link: string;
}

const Projects = () => {
  const allProjects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with product catalog, cart functionality, and secure checkout process.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      categories: ["E-commerce", "Web App"],
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Corporate Website Redesign",
      description: "Complete redesign of a financial services company website with improved UX and responsive design.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      categories: ["Corporate", "Redesign"],
      technologies: ["HTML5", "CSS3", "JavaScript"],
      link: "#"
    },
    {
      id: 3,
      title: "Travel Blog Platform",
      description: "Custom blog platform for travel writers with location tagging, photo galleries, and social sharing.",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
      categories: ["Blog", "Content"],
      technologies: ["WordPress", "PHP", "MySQL"],
      link: "#"
    },
    {
      id: 4,
      title: "Real Estate Listings App",
      description: "Mobile-responsive web application for browsing property listings with advanced search and filtering.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      categories: ["Real Estate", "Web App"],
      technologies: ["Vue.js", "Firebase", "Google Maps API"],
      link: "#"
    },
    {
      id: 5,
      title: "Health & Fitness Dashboard",
      description: "Interactive dashboard for tracking workouts, nutrition, and health metrics with data visualization.",
      image: "https://images.unsplash.com/photo-1594882645126-14020914d58d",
      categories: ["Health", "Dashboard"],
      technologies: ["React", "Chart.js", "Express"],
      link: "#"
    },
    {
      id: 6,
      title: "Educational Platform",
      description: "Online learning platform with course management, video lessons, quizzes, and progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      categories: ["Education", "Web App"],
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "#"
    }
  ];

  const categories = Array.from(new Set(allProjects.flatMap(project => project.categories)));
  
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [projects, setProjects] = useState<Project[]>(allProjects);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    if (category === "All") {
      setProjects(allProjects);
    } else {
      const filtered = allProjects.filter(project => project.categories.includes(category));
      setProjects(filtered);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our portfolio of work across various industries and technologies.
          </p>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Controls */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <Button
              variant={activeFilter === "All" ? "default" : "outline"}
              className="rounded-full"
              onClick={() => handleFilterChange("All")}
            >
              All Projects
            </Button>
            
            {categories.map(category => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className="rounded-full"
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.categories.map((category) => (
                      <Badge key={category} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                      View Project <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
