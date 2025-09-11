import { Link } from "react-router-dom";
// import { FaArrowRight, FaWrench, FaSearch, FaFileAlt, FaCarBattery } from "react-icons/fa";
import { BsSpeedometer2, BsDisc, BsArrowRight } from "react-icons/bs";
import { RiSettings3Line } from "react-icons/ri";
import { GiAutoRepair } from "react-icons/gi";
import { RiFlashlightLine } from "react-icons/ri";
import { TbSettingsSearch } from "react-icons/tb";


const services = [
  {
    name: "Repairs",
    description: "Expert repairs for all makes and models",
    icon: GiAutoRepair,
  },
  {
    name: "Diagnostics",
    description: "Advanced diagnostic equipment and expertise",
    icon: TbSettingsSearch,
  },
  {
      name: "MOT",
      description: "MOT testing at convenient locations",
      icon: BsSpeedometer2,
},
{
    name: "Servicing",
    description: "Regular maintenance to keep you on the road",
    icon: RiSettings3Line,
},
  {
    name: "Tyres",
    description: "Professional tyre fitting and balancing",
    icon: BsDisc,
  },
  {
    name: "Pre-purchase Inspections",
    description: "Thorough checks before you buy",
    icon: RiFlashlightLine,
  },
];

const Services = () => {
  return (
    <div className="bg-[#F3F5F7]">
      {/* Our Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All the ways we can help
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-start">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-gray-600 ">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-service"
                className="inline-flex items-center justify-center px-7 py-3 text-lg  text-white bg-[#8B865C] rounded hover:bg-primary/90 transition"
              >
                Get a Quote Now
                <BsArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/mechanics"
                className="inline-flex items-center justify-center px-6 py-3 text-lg  border border-gray-300 rounded hover:bg-gray-100 transition"
              >
                Browse Local Mechanics
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
