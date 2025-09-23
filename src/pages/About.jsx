const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] py-16 px-4 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        
       
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          About Us
        </h2>

   
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          At <span className="font-semibold">Jarurat Care Foundation</span>, we understand that facing cancer can be overwhelming, and no one should have to go through it alone. That’s why we’ve made it our mission to stand by those affected by cancer, offering unwavering support every step of the way.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          We’re a community-driven NGO dedicated to bringing hope, care, and strength to patients, caregivers, and healthcare professionals across India. Our focus is on creating a warm and inclusive space where everyone’s needs are heard and met.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          Whether it’s providing a comforting word, nutritional advice, or practical help, we’re here to make the journey a little easier. We work closely with healthcare providers, volunteers, and generous donors to reach those who need us most, ensuring that no one is left without the support they deserve.
        </p>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left mt-8">
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
            <h3 className="font-semibold text-lg mb-2">Patient Support</h3>
            <p className="text-gray-600">Providing care, comfort, and guidance to patients every step of the way.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
            <h3 className="font-semibold text-lg mb-2">Community Driven</h3>
            <p className="text-gray-600">Working with volunteers and donors to make a meaningful impact.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300">
            <h3 className="font-semibold text-lg mb-2">Healthcare Collaboration</h3>
            <p className="text-gray-600">Partnering with healthcare professionals for effective patient care.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
