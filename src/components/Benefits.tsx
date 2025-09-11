// import { FaUsers, FaAward, FaBolt, FaHandshake, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiUsersThree } from "react-icons/pi";
import { LiaAwardSolid } from "react-icons/lia";
import { IoFlashOutline } from "react-icons/io5";
import { PiHandshakeLight } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";

const Benefits = () => {
  const benefits = [
    {
      name: "Network Coverage",
      description: "Over 2,000 verified mechanics across the UK",
      icon: PiUsersThree,
      stat: "2,000+",
    },
    {
      name: "Quality Assured",
      description: "Only certified and insured professionals",
      icon: LiaAwardSolid,
      stat: "100%",
    },
    {
      name: "Fast Response",
      description: "Average quote response time under 2 hours",
      icon: IoFlashOutline,
      stat: "<2hrs",
    },
    {
      name: "Customer Satisfaction",
      description: "Rated excellent by thousands of car owners",
      icon: PiHandshakeLight,
      stat: "4.9★",
    },
  ];

  return (
    <div>
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-background via-[#3182ed]/5 to-[#f97415]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          
          {/* Heading */}
          <div className="text-center mb-20">
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join the UK's fastest-growing car repair community with verified mechanics and satisfied customers nationwide
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center h-full bg-white/60 backdrop-blur-sm border border-gray-300 rounded-2xl p-5 hover:border-[#3182ed]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group"
              >
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-[#3182ed]/10 to-[#f97415]/10 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="h-11 w-11 text-[#3a516f]" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3182ed]/5 to-[#f97415]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-3xl font-bold text-[#3a516f] mb-3 group-hover:scale-105 transition-transform duration-300">
                  {benefit.stat}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#3182ed]/10 via-[#f97415]/5 to-[#3182ed]/10 rounded-3xl p-8 backdrop-blur-sm border border-[#3182ed]/20">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Ready to experience the difference?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get started today and join thousands of satisfied customers who trust us with their car repairs
                </p>
                <Link to="/request-service">
                  <button className="inline-flex items-center bg-[#8B865C] cursor-pointer text-white font-semibold px-6 py-3 rounded shadow-lg hover:bg-[#f97415]/90 transition">
                    Start Your Repair Journey
                    <BsArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Benefits;
