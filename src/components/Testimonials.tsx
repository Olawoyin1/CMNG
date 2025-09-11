// import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components for slider
const CustomPrevArrow = ({ onClick }: any) => (
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
    onClick={onClick}
  >
    <FaChevronLeft className="h-5 w-5 text-gray-600" />
  </button>
);

const CustomNextArrow = ({ onClick }: any) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
    onClick={onClick}
  >
    <FaChevronRight className="h-5 w-5 text-gray-600" />
  </button>
);

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "London",
    text: "Found a great mechanic within minutes. Fair pricing and excellent service!",
    rating: 5,
  },
  {
    name: "Mark Thompson",
    location: "Manchester",
    text: "Transparent quotes and professional mechanics. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emma Davis",
    location: "Birmingham",
    text: "Saved me time and money. The whole process was so simple.",
    rating: 5,
  },
  {
    name: "James Wilson",
    location: "Leeds",
    text: "Quick response and fair prices. My car was fixed the same day!",
    rating: 5,
  },
  {
    name: "Lisa Brown",
    location: "Bristol",
    text: "Professional service from start to finish. Will definitely use again.",
    rating: 5,
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // screens <= 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // screens <= 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // screens <= 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // optional: hide arrows on very small devices
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-[#f3f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real reviews from satisfied car owners
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <div className="bg-white rounded-xl shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="border-t border-gray-300 pt-4">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
