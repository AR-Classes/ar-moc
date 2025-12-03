import { HelpCircle, ClipboardList, BookOpen, Wifi, Shield, Users, TrendingUp, Award } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      icon: <HelpCircle className="w-12 h-12 text-teal-600" />,
      title: 'Doubt Clearing Sessions',
      description: 'Dedicated time for students to ask questions and clear their doubts with personalized attention from our faculty.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    },
    {
      icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
      title: 'Weekly & Monthly Assessments',
      description: 'Regular testing to track progress, identify weak areas, and ensure continuous improvement throughout the academic year.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    },
    {
      icon: <BookOpen className="w-12 h-12 text-purple-600" />,
      title: 'Comprehensive Study Material',
      description: 'Well-structured notes, practice sheets, and reference materials covering all subjects and topics in the curriculum.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
    },
    {
      icon: <Wifi className="w-12 h-12 text-orange-600" />,
      title: 'Online Resources',
      description: 'Access to digital learning materials, recorded lectures, and online practice tests for flexible learning.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: 'Safe Classroom Environment',
      description: 'Clean, well-ventilated classrooms with proper safety measures ensuring a secure learning atmosphere for all students.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop',
    },
    {
      icon: <Users className="w-12 h-12 text-pink-600" />,
      title: 'Parent–Teacher Meetings',
      description: 'Regular interactions with parents to discuss student progress, challenges, and collaborative strategies for improvement.',
      image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=300&fit=crop',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-indigo-600" />,
      title: 'Progress Tracking',
      description: 'Detailed monitoring of each student\'s academic journey with regular feedback and personalized improvement plans.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    },
    {
      icon: <Award className="w-12 h-12 text-red-600" />,
      title: 'Performance Recognition',
      description: 'Acknowledging and celebrating student achievements to boost motivation and encourage academic excellence.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-100 via-blue-50 to-sky-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop"
            alt="Classroom facilities"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Facilities
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Everything your child needs for a successful learning experience under one roof
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex-shrink-0">{facility.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our commitment to excellence goes beyond standard teaching
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-teal-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Small
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Batch Sizes
              </p>
              <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                Limited students per batch ensuring individual attention and better learning outcomes
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Flexible
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Timings
              </p>
              <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                Morning and evening batches available to accommodate different school schedules
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Modern
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Infrastructure
              </p>
              <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                Well-equipped classrooms with comfortable seating and proper lighting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Experience Our Facilities First-Hand
          </h2>
          <p className="text-xl text-teal-50 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Visit our center to see how we create the perfect learning environment for students
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Schedule a Visit
            </a>
            <a
              href="tel:9763852327"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-teal-800 transform hover:-translate-y-0.5 transition-all duration-200 border-2 border-white"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
