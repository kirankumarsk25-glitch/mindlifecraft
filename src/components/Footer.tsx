import Image from 'next/image';
import { FaLeaf, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Image src="./logo1.png" alt="Mind Life Craft Logo" width={50} height={50} className="bg-white" />
              <h3 className="text-xl font-bold">Mind Life Craft</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              From Roots to Remedies - Wellness for you. Transforming holistic healthcare through ancient Ayurvedic wisdom and modern scientific innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="/domains" className="text-gray-300 hover:text-green-400 transition-colors">Our Domains</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhone className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-gray-300">+91 1234567891</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-gray-300">info@mindlifecraft.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-gray-300">India</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Mind Life Craft. All rights reserved. | From Roots to Remedies - Wellness for you
          </p>
        </div>
      </div>
    </footer>
  );
}
