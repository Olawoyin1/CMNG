

import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-hover to-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-hover/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-0 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image first on mobile, second on desktop */}
            <div className="order-1 lg:order-2 lg:flex justify-center">
              <img 
                src="https://img.freepik.com/free-vector/roadside-service-abstract-concept-illustration_335657-4927.jpg" 
                alt="Illustration" 
                className="w-full max-w-lg h-auto"
              />
            </div>

            {/* Text second on mobile, first on desktop */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your trusted platform for
                <span className=""> fast & reliable solutions</span>
              </h1>
              <p className="text-sm md:text-xl mb-7 text-primary-foreground/90">
                Connect with experts, book services instantly, and enjoy a seamless experience designed for your convenience.
              </p>

              {/* CTA Button */}
              <div className="mb-7 inline-block">
                <Link to="/get-started">
                  <button className="flex  cursor-pointer items-center bg-[#8B865C] text-white font-semibold px-8 py-3 rounded shadow-lg hover:bg-accent/90 transition text-lg">
                    Get Started Now
                    <BsArrowRight className="ml-3 h-5 w-5" />
                  </button>
                </Link>
              </div>

              {/* Stats Section */}
              <div className="flex items-center gap-8 flex-wrap">
                <div className="text-center">
                  <div className="text-2xl font-bold">10,000+</div>
                  <div className="text-sm text-primary-foreground/80">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-2xl font-bold">4.9</span>
                    <FaStar className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="text-sm text-primary-foreground/80">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-primary-foreground/80">Verified Experts</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-2xl font-bold">99%</span>
                    <FaStar className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="text-sm text-primary-foreground/80">Satisfaction Rate</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
