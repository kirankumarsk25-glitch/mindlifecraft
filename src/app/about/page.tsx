"use client";

import { motion } from 'framer-motion';
import { FaLeaf, FaHeartbeat } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-green-800 mb-4">About Mind Life Craft</h1>
          <p className="text-xl text-gray-600">From Roots to Remedies - Wellness for you</p>
        </motion.div>

        {/* Vision */}
        <motion.section
          className="mb-12 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center justify-center">
            <FaLeaf className="mr-3 text-green-600" />
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg text-center">
            To lead a global transformation in holistic healthcare by harmonizing ancient Ayurvedic wisdom with scientific innovations empowering every individual to live vibrantly, heal deeply, and thrive with purpose.
          </p>
        </motion.section>

        {/* Mission */}
        <motion.section
          className="mb-12 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center justify-center">
            <FaHeartbeat className="mr-3 text-red-600" />
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6 text-center">
            We do research and craft authentic Ayurvedic medicines, deliver expert clinical care for complex chronic conditions, nurture the next generation of Ayurvedic physicians through high impact education, and provide best plant based products that nourish from within. Through compassion, knowledge, and innovation, we strive to build a healthier world one life renewed at a time.
          </p>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Core Values</h3>
            <ul className="list-none space-y-2 text-lg">
              <li className="flex items-center justify-center">
                <span className="text-2xl mr-2">♠</span> We heal with nature.
              </li>
              <li className="flex items-center justify-center">
                <span className="text-2xl mr-2">♠</span> We treat with expertise.
              </li>
              <li className="flex items-center justify-center">
                <span className="text-2xl mr-2">♠</span> We teach with passion.
              </li>
              <li className="flex items-center justify-center">
                <span className="text-2xl mr-2">♠</span> We nourish with purity.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* What We Do */}
        <motion.section
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-lg mb-4">
                <FaLeaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Research & Development</h3>
                <p className="text-gray-600">Crafting authentic Ayurvedic medicines with scientific precision</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-lg mb-4">
                <FaHeartbeat className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Clinical Excellence</h3>
                <p className="text-gray-600">Delivering expert care for complex chronic conditions</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
                <p className="text-gray-600">Nurturing the next generation of Ayurvedic physicians</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Wellness Products</h3>
                <p className="text-gray-600">Providing plant-based products that nourish from within</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}