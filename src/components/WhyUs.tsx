// import { FaShieldAlt, FaStar, FaClock } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";

const WhyUs = () => {
  return (
    <div>
      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose MConnectC UK?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make car repairs simple, transparent, and trustworthy
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <IoShieldOutline className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Verified Mechanics</h3>
              <p className="text-gray-600">
                All mechanics are verified, insured, and rated by real customers.
                Your car is in safe hands.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <IoStarOutline className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees or surprise charges. Get clear, upfront quotes
                before any work begins.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <AiOutlineClockCircle className="h-12 w-12 text-success mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
              <p className="text-gray-600">
                Get quotes within hours, not days. Most jobs can be booked within
                24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
