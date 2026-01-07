"use client";

import { motion } from 'framer-motion';
import { FaFlask, FaStethoscope, FaGraduationCap, FaPills } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Domains() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      <div className="max-w-6xl mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-green-800 mb-4">Our Domains</h1>
          <p className="text-xl text-gray-600">Comprehensive healthcare solutions through Ayurveda</p>
        </motion.div>

        {/* Research & Development */}
        <motion.section
          className="mb-12 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <FaFlask className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-semibold text-gray-800">Research & Development</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Healing for Today & Future Epidemics</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Mind life craft, we don't just sell medicines we craft them for you. Just as the ancient Vaidya would handpick each Dravya, prepare it with precision, and tailor it to the patient's unique needs, we begin with a personal consultation, source pristine raw materials, and create remedies designed exclusively for your body's requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our medicines go beyond removing disease, they awaken balance, vitality, and complete wellness.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Research Lab"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Novel Drug Delivery Approaches:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Nanoparticle based formulations for deeper cellular reach</li>
              <li>Liposomal & targeted drug carriers to enhance permeability</li>
              <li>Bioavailability boosted herb combinations rooted in classical wisdom</li>
              <li>Novel dosage forms for faster and more predictable results</li>
            </ul>
          </div>
        </motion.section>

        {/* Clinical Excellence */}
        <motion.section
          className="mb-12 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <FaStethoscope className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-semibold text-gray-800">Clinical Excellence</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            We deliver expert clinical care for complex chronic conditions through specialized services in musculoskeletal wellness, infertility & progeny, neuromuscular disorders, and Shalya Tantra (surgical excellence).
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Musculoskeletal Wellness</h3>
              <p className="text-sm text-gray-600">Restoring strength, flexibility & pain-free living</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Infertility & Progeny</h3>
              <p className="text-sm text-gray-600">Ayurvedic science for healthy progeny</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Neuromuscular Disorders</h3>
              <p className="text-sm text-gray-600">Reviving mobility and neurological harmony</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Shalya Tantra</h3>
              <p className="text-sm text-gray-600">Ancient surgical excellence</p>
            </div>
          </div>
        </motion.section>

        {/* Coaching and Counselling */}
        <motion.section
          className="mb-12 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <FaGraduationCap className="h-8 w-8 text-purple-600 mr-4" />
            <h2 className="text-3xl font-semibold text-gray-800">Coaching and Counselling</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Crack AIAPGET with Competence, Confidence and Clarity</h3>
              <p className="text-gray-700 leading-relaxed">
                Step into our Mindlifecraft coaching experience that's crafted for your success. At our AIAPGET training centre, we don't just teach we walk with you, guiding you through your preferred subjects and helping you explore your dream colleges with utmost clarity and confidence.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                In our training centre, each module ends with targeted mock tests and personalised performance insights, so you always know exactly where you stand and how to improve. As the exam nears, our power-packed revision plans ensure you enter the hall fully prepared and stress-free.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Coaching"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Pharmaceutical and Wellness Products */}
        <motion.section
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <FaPills className="h-8 w-8 text-yellow-600 mr-4" />
            <h2 className="text-3xl font-semibold text-gray-800">Pharmaceutical and Wellness Products</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Evidence-Based. Standardized. Clinically Oriented.</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our pharmaceutical and wellness division provides a comprehensive range of research backed formulations designed to support both disease management and preventive healthcare. Each product is developed using standardized plant extracts, validated nutraceuti cals, and clinically relevant active compounds to ensure consistency, safety, and therapeutic efficacy.
              </p>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Product Categories:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Metabolic & Hormonal Health</li>
                <li>Nutritional & Antioxidant Support</li>
                <li>Liver & Digestive Care</li>
                <li>Neuromuscular & Joint Support</li>
                <li>Preventive & General Wellness</li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Pharmaceutical Products"
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}