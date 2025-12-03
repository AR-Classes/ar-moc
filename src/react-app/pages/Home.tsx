import { Link } from 'react-router';
import { Phone, Star, BookOpen, Users, Award, Clock, CheckCircle } from 'lucide-react';

export default function Home() {
  const highlights = [
    {
      icon: <BookOpen className="w-8 h-8 text-teal-600" />,
      title: 'Study Materials Provided',
      description: 'Comprehensive study materials and notes for all subjects',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Doubt-Solving',
      description: 'Personal attention to clear every doubt instantly',
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: 'Weekly Tests',
      description: 'Regular assessments to track student progress',
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: 'Experienced Faculty',
      description: 'Learn from qualified and dedicated teachers',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: 'Personalized Support',
      description: 'Individual attention for every student',
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      title: 'Flexible Timings',
      description: 'Online and offline coaching at convenient hours',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-blue-50 to-sky-100 opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  4.8 ★ Google Rating (153 Reviews)
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Quality Coaching for 1st to 10th Standard Students
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                CBSE | ICSE | State Board • Online + Offline Coaching
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Enroll Now
                </Link>
                <a
                  href="tel:9763852327"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 border-2 border-teal-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Phone size={20} />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
                alt="Students studying in classroom"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              About A R Classes
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              We are a dedicated coaching center focused on providing quality education to students from 1st to 10th standard. 
              Our experienced faculty ensures personalized attention to each student, helping them excel in their academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-teal-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                1st - 10th
              </div>
              <p className="text-gray-700 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                Standard Coverage
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                3 Boards
              </div>
              <p className="text-gray-700 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                CBSE | ICSE | State
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Expert
              </div>
              <p className="text-gray-700 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                Faculty Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Choose A R Classes?
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive support for your child's academic success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ Our Achievers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Celebrating Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto italic leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              "The beautiful thing about learning is that no one can take it away from you."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
                alt="Achievement 1"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-800/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    92.2%
                  </p>
                  <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Class 10th State Board Topper
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop"
                alt="Achievement 2"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    12+
                  </p>
                  <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Students Scored Above 90%
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Achievement 3"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-800/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    100%
                  </p>
                  <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Student Success Rate
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/achievements"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Award className="w-5 h-5 mr-2" />
              View All Our Toppers
            </Link>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 italic leading-relaxed mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            "Education is the most powerful weapon which you can use to change the world."
          </blockquote>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            — Nelson Mandela
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-teal-50 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Join A R Classes today and experience quality education with personalized attention
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
