import React from 'react';
import { Target, Users, Award, TrendingUp, Globe, Heart } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transforming Visions Into Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              We are a team of passionate innovators, designers, and developers dedicated to turning your ideas into successful digital products that drive real business results.
            </p>
          </div>
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Conquermark, we exist to empower businesses of all sizes to achieve their digital transformation goals. We believe that every great idea deserves exceptional execution, and every business deserves a technology partner who truly cares about their success.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is built on three core pillars that guide everything we do, from the first consultation to long-term partnership and growth.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                  <Target className="w-16 h-16 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our North Star</h3>
                  <p className="text-gray-700">
                    To be the most trusted technology partner for businesses worldwide, delivering solutions that not only meet expectations but exceed them in every measurable way.
                  </p>
                </div>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We stay ahead of technology trends and continuously explore new tools, frameworks, and methodologies to deliver cutting-edge solutions. Innovation is not just about using the latest technology but about finding the right solution for your unique challenges.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership</h3>
                <p className="text-gray-700 leading-relaxed">
                  We do not see ourselves as just a vendor or service provider. We are your partner in success. Your goals become our goals, your challenges become our challenges, and your victories become our victories. We invest in your success because we believe in building long-term relationships.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Excellence is not a destination but a continuous journey. We hold ourselves to the highest standards in code quality, design aesthetics, project management, and client communication. Every project, regardless of size, receives our full commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide our decisions, actions, and relationships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Client-First',
                  description: 'Every decision we make starts with one question: What is best for our client? We prioritize your needs, timeline, and budget above all else.',
                  icon: Heart,
                  color: 'red'
                },
                {
                  title: 'Transparency',
                  description: 'No hidden fees, no surprises, no excuses. We believe in honest communication, clear timelines, and realistic expectations from day one.',
                  icon: Globe,
                  color: 'blue'
                },
                {
                  title: 'Innovation',
                  description: 'We embrace change and constantly explore new technologies, methodologies, and approaches to deliver better results faster.',
                  icon: TrendingUp,
                  color: 'green'
                },
                {
                  title: 'Integrity',
                  description: 'We do what we say we will do. Our word is our bond, and we take pride in delivering on our promises consistently.',
                  icon: Award,
                  color: 'purple'
                },
                {
                  title: 'Collaboration',
                  description: 'Great results come from great teamwork. We work closely with you, treating your team as an extension of ours.',
                  icon: Users,
                  color: 'orange'
                },
                {
                  title: 'Excellence',
                  description: 'Good enough is never good enough. We push ourselves to deliver exceptional quality in every aspect of our work.',
                  icon: Target,
                  color: 'indigo'
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                >
                  <div className={`w-12 h-12 bg-${value.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className={`w-7 h-7 text-${value.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600">
                Meet the people driving Conquermark's vision forward
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Rajesh Kumar',
                  role: 'CEO & Founder',
                  bio: '15+ years in product development and business strategy. Previously led digital transformation at Fortune 500 companies.',
                  initial: 'RK'
                },
                {
                  name: 'Sarah Chen',
                  role: 'CTO',
                  bio: 'Former senior engineer at Google. Expert in scalable architecture and AI/ML integration with 12 years of experience.',
                  initial: 'SC'
                },
                {
                  name: 'Michael Torres',
                  role: 'Creative Director',
                  bio: 'Award-winning designer with a passion for user-centered design. 10+ years creating beautiful, functional interfaces.',
                  initial: 'MT'
                },
                {
                  name: 'Priya Sharma',
                  role: 'Head of Strategy',
                  bio: 'Growth marketing expert who has helped 100+ startups scale. MBA from Stanford, data-driven approach to growth.',
                  initial: 'PS'
                }
              ].map((leader, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4 mx-auto w-32 h-32">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-105 transition-transform">
                      {leader.initial}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{leader.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '500+', label: 'Projects Delivered' },
                { number: '50+', label: 'Team Members' },
                { number: '15+', label: 'Countries Served' },
                { number: '98%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help you build and launch your product.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all shadow-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
