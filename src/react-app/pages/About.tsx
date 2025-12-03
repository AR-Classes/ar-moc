import { MapPin, Users, Target, Heart, Award, BookOpen, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="w-12 h-12 text-teal-600" />,
      title: 'Our Mission',
      description: 'To provide quality education and personalized attention to every student, helping them achieve academic excellence and develop a strong foundation for their future.',
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: 'Student-Focused',
      description: 'We believe in creating a supportive and nurturing environment where students feel comfortable asking questions and exploring concepts without hesitation.',
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: 'Experienced Faculty',
      description: 'Our team of qualified and dedicated educators brings years of teaching experience, ensuring effective learning outcomes for students of all capabilities.',
    },
  ];

  const highlights = [
    {
      icon: <Award className="w-10 h-10 text-teal-600" />,
      stat: '500+',
      label: 'Students Taught',
    },
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      stat: '3 Boards',
      label: 'CBSE, ICSE, State',
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-purple-600" />,
      stat: '92%+',
      label: 'Top Results',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-100 via-blue-50 to-sky-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&h=900&fit=crop"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              About A R Classes
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Your trusted partner in academic excellence for students from 1st to 10th standard
            </p>
          </div>
        </div>
      </section>

      {/* Stats Highlights */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-4 bg-gradient-to-br from-sky-50 to-teal-50 p-6 rounded-2xl shadow-md"
              >
                <div className="flex-shrink-0">{highlight.icon}</div>
                <div>
                  <div className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {highlight.stat}
                  </div>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {highlight.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop"
                alt="Classroom environment"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
              />
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=300&fit=crop"
                alt="Students studying"
                className="rounded-2xl shadow-lg object-cover w-full h-[250px]"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Building Futures Through Education
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                A R Classes was established with a vision to provide comprehensive and quality coaching to students 
                from 1st to 10th standard. We understand that every child is unique, with different learning needs 
                and capabilities. Our approach is centered around personalized attention, ensuring that each student 
                receives the support they need to excel.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                We cater to students following CBSE, ICSE, and State Board curricula, providing specialized guidance 
                for each board's requirements. Our experienced faculty members are dedicated to making learning 
                engaging, effective, and enjoyable.
              </p>
              <div className="pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-sky-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Teaching Methodology */}
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 text-white mb-20 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Teaching Methodology
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Comprehensive Curriculum
                </h3>
                <p className="text-teal-50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We follow a structured curriculum that covers all topics thoroughly while maintaining alignment 
                  with board requirements. Regular practice sessions and concept clarification ensure deep understanding.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Interactive Learning
                </h3>
                <p className="text-teal-50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Our classes are interactive and engaging, encouraging students to participate actively. 
                  We use real-life examples and practical applications to make concepts relatable and memorable.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Regular Assessments
                </h3>
                <p className="text-teal-50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Weekly tests and monthly assessments help track student progress. We provide detailed feedback 
                  and work on areas that need improvement, ensuring continuous growth.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Parent Engagement
                </h3>
                <p className="text-teal-50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We believe in keeping parents informed about their child's progress through regular meetings 
                  and updates. This collaborative approach ensures the best outcomes for students.
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 bg-gradient-to-br from-sky-50 to-teal-50">
                <MapPin className="w-12 h-12 text-teal-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Visit Our Center
                </h2>
                <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p className="text-lg font-semibold">
                    Address:
                  </p>
                  <p className="leading-relaxed">
                    Vighnaharta Apartment,<br />
                    Opp. Hari Om Super Market,<br />
                    Sudarshan Nagar, Lane 2,<br />
                    Pimple Gurav, Pune - 411061
                  </p>
                  <p className="text-lg font-semibold pt-4">
                    Contact:
                  </p>
                  <a href="tel:9763852327" className="text-teal-600 hover:text-teal-700 transition-colors text-lg font-medium">
                    +91 9763852327
                  </a>
                  <p className="text-lg font-semibold pt-4">
                    Hours:
                  </p>
                  <p>Monday - Sunday: 7:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="h-[400px] md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                  alt="Study environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get Started Now
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
