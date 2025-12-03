import { BookOpen, GraduationCap, Globe, Monitor, Home, FileText, ClipboardCheck } from 'lucide-react';

export default function Courses() {
  const standards = [
    { range: '1st - 3rd', color: 'from-pink-500 to-rose-500', description: 'Foundation building with focus on basics' },
    { range: '4th - 5th', color: 'from-orange-500 to-amber-500', description: 'Strengthening core concepts' },
    { range: '6th - 7th', color: 'from-blue-500 to-cyan-500', description: 'Advanced learning and skill development' },
    { range: '8th - 10th', color: 'from-teal-500 to-green-500', description: 'Board exam preparation' },
  ];

  const boards = [
    {
      name: 'CBSE',
      icon: <BookOpen className="w-12 h-12" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      description: 'Central Board of Secondary Education curriculum with NCERT-based teaching',
    },
    {
      name: 'ICSE',
      icon: <GraduationCap className="w-12 h-12" />,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      description: 'Indian Certificate of Secondary Education with comprehensive syllabus',
    },
    {
      name: 'State Board',
      icon: <Globe className="w-12 h-12" />,
      color: 'bg-gradient-to-br from-teal-500 to-teal-600',
      description: 'State Board syllabus with local curriculum expertise',
    },
  ];

  const modes = [
    {
      title: 'Online Coaching',
      icon: <Monitor className="w-10 h-10 text-blue-600" />,
      features: ['Live interactive classes', 'Screen sharing and digital board', 'Recorded sessions available', 'Online doubt clearing'],
    },
    {
      title: 'Offline Coaching',
      icon: <Home className="w-10 h-10 text-teal-600" />,
      features: ['Face-to-face learning', 'Personal attention', 'Classroom environment', 'Immediate doubt resolution'],
    },
    {
      title: 'Home Assignments',
      icon: <FileText className="w-10 h-10 text-purple-600" />,
      features: ['Regular practice work', 'Chapter-wise assignments', 'Timely submission tracking', 'Detailed feedback'],
    },
    {
      title: 'Weekly Tests',
      icon: <ClipboardCheck className="w-10 h-10 text-orange-600" />,
      features: ['Regular assessments', 'Progress tracking', 'Performance analysis', 'Improvement guidance'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-100 via-blue-50 to-sky-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1600&h=900&fit=crop"
            alt="Education background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Courses
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive coaching programs designed for academic excellence across all major educational boards
            </p>
          </div>
        </div>
      </section>

      {/* Standards Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Standards Offered
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Separate batches for each grade level with age-appropriate teaching methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${standard.color} p-8 text-white`}>
                  <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {standard.range}
                  </div>
                  <div className="text-sm opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Standard
                  </div>
                </div>
                <div className="bg-white p-6">
                  <p className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {standard.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Curriculum */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Board Curriculum Assisted
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Expert coaching for all major educational boards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {boards.map((board, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`${board.color} p-8 text-white flex items-center justify-center`}>
                  {board.icon}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {board.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {board.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Flexible Learning Modes
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Choose the learning approach that works best for your child
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modes.map((mode, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-sky-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0">{mode.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {mode.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {mode.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                      <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Learning in Action
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              See our students engaged in interactive learning experiences
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <img
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop"
              alt="Students learning"
              className="rounded-2xl shadow-lg object-cover w-full h-48 hover:shadow-xl transition-shadow duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop"
              alt="Classroom teaching"
              className="rounded-2xl shadow-lg object-cover w-full h-48 hover:shadow-xl transition-shadow duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop"
              alt="Group study"
              className="rounded-2xl shadow-lg object-cover w-full h-48 hover:shadow-xl transition-shadow duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
              alt="Individual attention"
              className="rounded-2xl shadow-lg object-cover w-full h-48 hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Find the Perfect Course for Your Child
          </h2>
          <p className="text-xl text-teal-50 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Contact us to discuss your child's educational needs and find the right program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Enroll Now
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
