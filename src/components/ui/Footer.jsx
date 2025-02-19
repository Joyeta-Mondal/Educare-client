import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo/logo.png";

function Footer() {
  return (
    <div className="bg-secondary text-neutral p-8 sm:p-10 flex flex-col items-center">
      <footer className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 w-full max-w-7xl">
        {/* Brand Section */}
        <aside className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4 text-center sm:text-left">
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-0"
            src={logo}
            alt="EduCare Logo"
          />
          <div>
            <h2 className="text-2xl dark:text-gray-100 sm:text-3xl font-semibold">
              EduCare
            </h2>
            <p className="text-sm dark:text-gray-100 sm:text-base">
              A scholarship management platform
            </p>
          </div>
        </aside>

        {/* Contact Section */}
        <nav className="text-center lg:text-left">
          <h6 className="footer-title dark:text-gray-100 text-lg font-semibold mb-2">
            Contact Information
          </h6>
          <p className="text-sm dark:text-gray-100 sm:text-base">
            joyeta@gmail.com
          </p>
          <p className="text-sm dark:text-gray-100 sm:text-base">
            +880 1744444444
          </p>
          <p className="text-sm dark:text-gray-100 sm:text-base">
            Dhaka, Bangladesh
          </p>
        </nav>

        {/* Social Section */}
        <nav className="text-center lg:text-left">
          <h6 className="footer-title dark:text-gray-100 text-lg font-semibold mb-2">
            Get in touch
          </h6>
          <div className="flex flex-col items-center lg:items-start gap-2">
            <a
              href="https://www.linkedin.com/in/joyeta-mondal-kotha/"
              target="_blank"
              className="flex items-center gap-2 hover:text-accent dark:text-gray-100 transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href="https://x.com/KothaJoye1023"
              target="_blank"
              className="flex items-center gap-2 dark:text-gray-100 hover:text-accent transition"
            >
              <FaSquareXTwitter />
              Twitter
            </a>
            <a
              href="https://www.facebook.com/joyeta.mondal23"
              target="_blank"
              className="flex items-center dark:text-gray-100 gap-2 hover:text-accent transition"
            >
              <FaFacebook />
              Facebook
            </a>
          </div>
        </nav>
      </footer>

      {/* Footer Bottom */}
      <div className="mt-8 w-full max-w-7xl">
        <hr className="border-neutral opacity-30 mb-2" />
        <p className="text-center dark:text-gray-100 text-sm">
          &copy; 2025 EduCare. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
