import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do you provide study material?',
      answer: 'Yes, we provide comprehensive study materials including detailed notes, practice worksheets, and reference materials for all subjects. These materials are carefully prepared by our experienced faculty to align with the respective board curriculum (CBSE, ICSE, or State Board). Students also receive regular assignments and test papers to reinforce their learning.',
    },
    {
      question: 'How many students per batch?',
      answer: 'We maintain small batch sizes to ensure personalized attention for each student. Typically, our batches have 10-15 students, allowing teachers to focus on individual learning needs, clear doubts effectively, and monitor progress closely. This approach helps us maintain high teaching quality and better learning outcomes.',
    },
    {
      question: 'What are the timings?',
      answer: 'We offer flexible batch timings to accommodate different school schedules. Morning batches are available from 7:00 AM to 9:00 AM, and evening batches run from 4:00 PM to 9:00 PM. Our center remains open till 9:00 PM daily. Specific timings for each standard can be discussed during admission. Weekend batches are also available for certain courses.',
    },
    {
      question: 'Do you offer personalized 1-to-1 sessions?',
      answer: 'Yes, we offer personalized one-on-one tutoring sessions for students who need extra attention or prefer individual learning. These sessions can be scheduled based on mutual convenience and are particularly helpful for students preparing for important exams or those who need to catch up on missed topics. Please contact us to discuss availability and fees for individual sessions.',
    },
    {
      question: 'How to locate A R Classes?',
      answer: 'We are located at Vighnaharta Apartment, opposite Hari Om Super Market, Sudarshan Nagar, Lane 2, Pimple Gurav, Pune - 411061. The location is easily accessible by local transport. You can call us at +91 9763852327 for detailed directions. We recommend visiting our center before admission to see our facilities and meet our faculty.',
    },
    {
      question: 'What subjects do you teach?',
      answer: 'We provide coaching for all major subjects including Mathematics, Science (Physics, Chemistry, Biology), English, Social Studies, and languages as per the student\'s board curriculum. Our subject coverage is comprehensive and aligned with CBSE, ICSE, and State Board syllabi for standards 1st through 10th.',
    },
    {
      question: 'How do you track student progress?',
      answer: 'We have a comprehensive progress tracking system that includes weekly tests, monthly assessments, and continuous evaluation of class participation and homework completion. Detailed performance reports are shared with parents regularly. We also conduct parent-teacher meetings monthly to discuss the student\'s progress and areas that need attention.',
    },
    {
      question: 'Is online coaching available?',
      answer: 'Yes, we offer both online and offline coaching options. Our online classes are conducted through interactive platforms with features like screen sharing, digital whiteboard, and live doubt clearing. Recorded sessions are also available for revision. Students can choose the mode that suits them best or opt for a hybrid approach combining both online and offline sessions.',
    },
    {
      question: 'What is the admission process?',
      answer: 'The admission process is simple. You can visit our center or call us at +91 9763852327 to schedule a meeting. During the meeting, we discuss your child\'s educational needs, current academic level, and goals. We then recommend the appropriate batch and course. You can complete the admission formalities on the same day. We also offer trial classes so students can experience our teaching methodology before enrollment.',
    },
    {
      question: 'What are the fees and payment options?',
      answer: 'Our fees are competitive and structured based on the standard and subjects chosen. We offer flexible payment options including monthly, quarterly, and yearly payment plans. Discounts are available for siblings and annual payments. For detailed fee structure, please contact us directly or visit our center. We believe in transparent pricing with no hidden charges.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-100 via-blue-50 to-sky-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&h=900&fit=crop"
            alt="FAQ background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Find answers to common questions about A R Classes, our courses, and admission process
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Still Have Questions?
            </h2>
            <p className="text-xl text-teal-50 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              We're here to help! Contact us for any additional information or clarifications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Send a Message
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
        </div>
      </section>
    </div>
  );
}
