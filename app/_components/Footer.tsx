import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
      description: "How we protect your health data",
    },
    {
      name: "Terms of Use",
      href: "/terms-of-use",
      description: "Usage terms and conditions",
    },
    {
      name: "Contact",
      href: "/contact",
      description: "Get in touch with our team",
    },
  ];

  return (
    <footer className="bg-neutral-200 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-2 md:py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* App Branding */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="AI Medical Voice Agent"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  AI Medical Voice Agent
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Revolutionizing healthcare with AI-powered voice intelligence
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
              Experience the future of healthcare with our cutting-edge AI
              medical voice agents. Get instant access to specialized doctors
              and personalized care recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Legal & Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Important Notice
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">
              This application is for educational and demonstration purposes. It
              should not be used as a replacement for professional medical
              advice. Always consult with qualified healthcare professionals for
              medical concerns.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-500 dark:text-neutral-500">
              © {currentYear} AI Medical Voice Agent. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-neutral-500 dark:text-neutral-500">
              <span>Made with ❤️ for better healthcare</span>
              <span>•</span>
              <span>HIPAA Compliant</span>
              <span>•</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
