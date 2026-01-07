"use client";

import { motion } from 'framer-motion';
import { FaLeaf, FaHeartbeat, FaFlask, FaStethoscope, FaGraduationCap, FaPills } from 'react-icons/fa';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      {/* Hero Section */}
      <motion.section
        className="mb-12 text-center py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="h-64 bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center mx-4"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'
          }}
        >
          <div className="bg-black bg-opacity-50 rounded-lg p-6 text-white">
            <h1 className="text-5xl font-bold mb-2">Mind Life Craft</h1>
            <p className="text-xl">From Roots to Remedies - Wellness for you</p>
          </div>
        </div>
      </motion.section>

      {/* Welcome Section */}
      <motion.section
        className="max-w-4xl mx-auto mb-12 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Mind Life Craft</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are dedicated to transforming holistic healthcare by blending ancient Ayurvedic wisdom with modern scientific innovation.
            Our mission is to empower individuals to live vibrantly, heal deeply, and thrive with purpose through authentic Ayurvedic solutions.
          </p>
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section
        className="max-w-6xl mx-auto mb-12 px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/about" className="block">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
              <FaLeaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">About Us</h3>
              <p className="text-gray-600">Learn about our vision and mission</p>
            </div>
          </Link>
          <Link href="/domains" className="block">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
              <FaFlask className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Domains</h3>
              <p className="text-gray-600">Explore our comprehensive services</p>
            </div>
          </Link>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <FaStethoscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Clinical Care</h3>
            <p className="text-gray-600">Expert treatment for chronic conditions</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <FaPills className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Wellness Products</h3>
            <p className="text-gray-600">Natural, evidence-based formulations</p>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="max-w-4xl mx-auto mb-12 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-lg">
                <span className="text-4xl mb-4 block">♠</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Heal with Nature</h3>
                <p className="text-gray-600">Harnessing the power of natural remedies</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-lg">
                <span className="text-4xl mb-4 block">♠</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Treat with Expertise</h3>
                <p className="text-gray-600">Combining ancient wisdom with modern science</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-lg">
                <span className="text-4xl mb-4 block">♠</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Teach with Passion</h3>
                <p className="text-gray-600">Educating the next generation of healers</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 p-6 rounded-lg">
                <span className="text-4xl mb-4 block">♠</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Nourish with Purity</h3>
                <p className="text-gray-600">Providing pure, authentic wellness solutions</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="max-w-4xl mx-auto px-4 pb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-green-800 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Health?</h2>
          <p className="text-xl mb-6">Discover how Mind Life Craft can help you achieve holistic wellness</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More About Us
            </Link>
            <Link href="/domains" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Explore Our Services
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
    <Footer />
    </>
  );
}
