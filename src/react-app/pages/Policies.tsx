import { Clock, Users, FileText, Handshake, Shield } from 'lucide-react';

export default function Policies() {
  const policies = [
    {
      icon: <Clock className="w-10 h-10 text-teal-600" />,
      title: 'Attendance Policy',
      points: [
        'Regular attendance is mandatory for optimal learning outcomes',
        'Minimum 75% attendance required for appearing in internal assessments',
        'Parents will be notified if attendance falls below the required percentage',
        'Make-up classes available for genuine absences with prior intimation',
        'Punctuality is expected - classes start on time',
      ],
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: 'Student Behavior Code',
      points: [
        'Maintain respectful behavior towards faculty and fellow students',
        'Use of mobile phones during class hours is strictly prohibited',
        'Complete assignments and homework on time',
        'Participate actively in class discussions and activities',
        'Any form of misbehavior or indiscipline will result in parent consultation',
      ],
    },
    {
      icon: <FileText className="w-10 h-10 text-purple-600" />,
      title: 'Assessment System',
      points: [
        'Weekly tests conducted to evaluate topic understanding',
        'Monthly comprehensive assessments covering multiple chapters',
        'Continuous evaluation through class participation and assignments',
        'Detailed performance reports shared with parents regularly',
        'Remedial classes provided for students needing extra support',
      ],
    },
    {
      icon: <Handshake className="w-10 h-10 text-orange-600" />,
      title: 'Parent Engagement',
      points: [
        'Regular parent-teacher meetings scheduled monthly',
        'Open communication channel for discussing student progress',
        'Parents encouraged to monitor homework and assignment completion',
        'Timely updates on student performance and areas of improvement',
        'Collaboration between parents and teachers for student success',
      ],
    },
    {
      icon: <Shield className="w-10 h-10 text-green-600" />,
      title: 'Safety & Security',
      points: [
        'Safe and secure classroom environment maintained at all times',
        'Proper hygiene and cleanliness standards followed',
        'Emergency contact information kept updated',
        'Students must be picked up by authorized persons only',
        'Any health issues or allergies must be communicated to faculty',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-100 via-blue-50 to-sky-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop"
            alt="Policies background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Policies
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Guidelines and policies ensuring a structured and effective learning environment for all students
            </p>
          </div>
        </div>
      </section>

      {/* Policies Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0">{policy.icon}</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {policy.title}
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    {policy.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                        <span className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-teal-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Important Information
            </h3>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="leading-relaxed">
                All policies are designed with the student's best interest in mind. We believe that a structured 
                environment with clear guidelines helps students focus on learning and achieve their full potential.
              </p>
              <p className="leading-relaxed">
                Parents and students are expected to familiarize themselves with these policies. Any questions or 
                concerns regarding our policies can be discussed during admission or at any parent-teacher meeting.
              </p>
              <p className="leading-relaxed">
                We value open communication and are always willing to work with families to ensure the best 
                learning experience for every student at A R Classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Have Questions About Our Policies?
          </h2>
          <p className="text-xl text-teal-50 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Contact us for any clarifications or additional information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact Us
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
