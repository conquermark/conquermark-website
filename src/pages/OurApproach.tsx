import React from 'react';
import { Search, Palette, Code, Rocket, BarChart, Users, Clock, DollarSign } from 'lucide-react';

const OurApproach = () => {
  const methodology = [
    {
      phase: '1',
      title: 'Discovery & Strategy',
      duration: 'Week 1-2',
      icon: Search,
      description: 'We start by deeply understanding your business, target audience, and goals. Through workshops and research, we define the product strategy and roadmap.',
      deliverables: [
        'Market research and competitive analysis',
        'User personas and journey mapping',
        'Product requirements document',
        'Technical feasibility assessment',
        'Project timeline and milestones'
      ]
    },
    {
      phase: '2',
      title: 'Design & Prototyping',
      duration: 'Week 3-4',
      icon: Palette,
      description: 'Our designers create intuitive, beautiful interfaces that users love. We prototype and test with real users before writing a single line of code.',
      deliverables: [
        'Wireframes and user flows',
        'High-fidelity UI designs',
        'Interactive prototypes',
        'Design system and style guide',
        'Usability testing results'
      ]
    },
    {
      phase: '3',
      title: 'Development & Testing',
      duration: 'Week 5-10',
      icon: Code,
      description: 'Our developers build your product using modern, scalable technologies. We follow agile methodology with weekly sprints and continuous testing.',
      deliverables: [
        'Clean, documented codebase',
        'Automated testing suite',
        'Weekly demo sessions',
        'Bug fixes and refinements',
        'Performance optimization'
      ]
    },
    {
      phase: '4',
      title: 'Launch & Deployment',
      duration: 'Week 11-12',
      icon: Rocket,
      description: 'We handle everything from server setup to app store submissions. Your product launches smoothly with monitoring and support in place.',
      deliverables: [
        'Production deployment',
        'App store submissions (if applicable)',
        'Analytics and monitoring setup',
        'Launch marketing support',
        'Documentation and training'
      ]
    },
    {
      phase: '5',
      title: 'Growth & Optimization',
      duration: 'Ongoing',
      icon: BarChart,
      description: 'Post-launch, we help you grow through data-driven optimization, A/B testing, and continuous improvements based on user feedback.',
      deliverables: [
        'Performance monitoring',
        'A/B testing and experiments',
        'Feature enhancements',
        'Conversion rate optimization',
        'Monthly growth reports'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Agile & Flexible',
      description: 'We adapt to your needs and timeline. No rigid processes, just smart collaboration that gets results.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Built to grow with you. Our architecture handles 10 users or 10 million without breaking a sweat.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprises. You know exactly what you are paying for and why.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect your timeline. 98% of our projects launch on schedule or early.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Partner from Concept to Launch
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We have refined our process over 500+ projects to deliver exceptional results consistently. Here is exactly how we work with you to turn your idea into a successful product.
            </p>
          </div>
        </div>
        
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </section>

      {/* Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Methodology</h2>
              <p className="text-xl text-gray-600">
                A systematic approach refined through hundreds of successful projects
              </p>
            </div>

            <div className="space-y-12">
              {methodology.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Phase Number */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        {step.phase}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                          <step.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-gray-700 leading-relaxed mb-6">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {step.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <span className="text-blue-600 mt-1">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < methodology.length - 1 && (
                    <div className="hidden md:block absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-blue-300 to-purple-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Startups Choose Us</h2>
              <p className="text-xl text-gray-600">
                What makes Conquermark different from other agencies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
              <p className="text-xl text-gray-600">
                We use modern, proven technologies to build scalable products
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: 'Frontend',
                  technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js']
                },
                {
                  category: 'Backend',
                  technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis']
                },
                {
                  category: 'Cloud & DevOps',
                  technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD']
                },
                {
                  category: 'Mobile',
                  technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA']
                },
                {
                  category: 'AI & ML',
                  technologies: ['OpenAI', 'TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face']
                },
                {
                  category: 'Tools',
                  technologies: ['Figma', 'Git', 'Jira', 'Slack', 'Analytics']
                }
              ].map((stack, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your idea and create a custom roadmap for success.
            </p>
            <button className="bg-white text-blue-600 px-12 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg">
              Schedule Strategy Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurApproach;
