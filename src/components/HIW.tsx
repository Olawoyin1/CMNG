
const HIW = () => {
  return (
    <div>
      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get your car fixed in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-8">
                <img 
                  src="../../Images/one.jpg"
                  alt="Enter car details" 
                  className="w-45 h-45 mx-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Enter Details</h3>
              <p className="text-muted-foreground">
                Enter your car registration and postcode, then describe the problem
              </p>
            </div>

            <div className="text-center">
              <div className="mb-8">
                <img 
                  src="../../Images/two.jpg"
                  alt="Upload photos" 
                  className="w-45 h-45 mx-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Upload Photos</h3>
              <p className="text-muted-foreground">
                Take photos of the issue to help mechanics provide accurate quotes
              </p>
            </div>

            <div className="text-center">
              <div className="mb-8">
                <img 
                  src="../../Images/three.jpg"
                  alt="Compare quotes" 
                  className="w-45 h-45 mx-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Compare & Book</h3>
              <p className="text-muted-foreground">
                Compare quotes from local mechanics and book the best option
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HIW
