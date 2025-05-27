import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ContactForm from '../ui/ContactForm';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Let's discuss your project or opportunity" 
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div>
            <motion.div
              className="bg-primary-50 dark:bg-dark-700 p-6 rounded-xl h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Wardha, IN</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</h4>
                    <a href="mailto:atharvawaghale25@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
                      atharvawaghale25@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone</h4>
                    <a href="tel:+91 9545894212" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
                      (+91) 9545894212
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Preferred Contact Method
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Email is the best way to reach me for project inquiries and collaboration opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;