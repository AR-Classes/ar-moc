export default function Achievements() {
  // Array of student achievements - easily expandable
  const toppers = [
    {
      name: 'Siddhi Shete',
      class: '10th',
      percentage: '92.20',
      school: 'Jaihind High School',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Pradip Yadav',
      class: '10th',
      percentage: '87.20',
      school: 'Kilbil High School',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Tanishka Pawar',
      class: '10th',
      percentage: '87.20',
      school: 'Ganesh Eng. Med. School',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'Noorjahan Mulani',
      class: '10th',
      percentage: '91.60',
      school: 'Kilbil High School',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    },
    {
      name: 'Falguni Kamdi',
      class: '10th',
      percentage: '87.00',
      school: 'Kilbil High School',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    },
    {
      name: 'Burhanuddin Jawadwala',
      class: '10th',
      percentage: '84.60',
      school: 'Holly Eng Med. School',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Sandesh Rathod',
      class: '10th',
      percentage: '80.40',
      school: 'Kilbil High School',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    },
    {
      name: 'Abhishek Ingale',
      class: '10th',
      percentage: '79.80',
      school: 'Shri Sai Eng Med. School',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: 'Deepti Parse',
      class: '10th',
      percentage: '78.20',
      school: 'Sancheti High School',
      photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
    },
    {
      name: 'Tanmay Londhe',
      class: '10th',
      percentage: '77.60',
      school: 'Kendriya Vidyalaya',
      photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    },
    {
      name: 'Bhumika Kale',
      class: '10th',
      percentage: '76.40',
      school: 'Kilbil High School',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: 'Surbhi Gaikwad',
      class: '10th',
      percentage: '75.80',
      school: 'Marivanous High Sch.',
      photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-teal-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-teal-100 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Heartiest Congratulations
              </h2>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ⭐ Class 10th Toppers ⭐
            </h1>
          </div>
        </div>
      </div>

      {/* Students Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {toppers.map((student, index) => (
            <div key={index} className="text-center">
              {/* Student Photo */}
              <div className="mb-3">
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-full aspect-[3/4] object-cover rounded-lg border-3 border-teal-200 shadow-md"
                />
              </div>
              
              {/* Student Info */}
              <div>
                <h3 className="text-sm font-bold text-teal-700 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {student.name}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {student.percentage}%
                </p>
                <p className="text-xs text-gray-600 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {student.school}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Contact Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a 
            href="tel:9763852327"
            className="text-2xl font-bold mb-3 inline-block hover:text-teal-100 transition-colors" 
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Call: 9763852327
          </a>
          <p className="text-base mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Add: Sudarshan Nagar, Lane No. 02, Pimple Gurav, Pune - 61.
          </p>
          <a
            href="/contact"
            className="mt-6 bg-white text-teal-600 inline-block px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ADMISSIONS OPEN FOR STD 1st to 10th (State, CBSE, ICSE)
          </a>
        </div>
      </div>
    </div>
  );
}
