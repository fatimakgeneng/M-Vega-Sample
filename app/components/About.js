"use client";

export default function About({ refProp }) {
  return (
    <section 
      id="about" 
      className="py-20 px-4 opacity-0 transition-all duration-1000"
      ref={refProp}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          About
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* PLACEHOLDER: Replace with another good photo of Mark */}
          <div className="flex-1 overflow-hidden rounded-lg transition-all duration-700 hover:scale-105">
            <img 
              src="https://i.pinimg.com/1200x/08/70/18/08701807a97a0fcdf63837d653f56750.jpg" 
              alt="Mark Vega" 
              className="rounded-lg shadow-2xl transition-transform duration-700 hover:scale-105" 
            />
          </div>
          <div className="flex-1">
            <p className="text-lg mb-4 transition-all duration-500 hover:translate-x-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium 
            </p>
            <p className="text-lg mb-4 transition-all duration-500 hover:translate-x-2">
              quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. 
            </p>
            <p className="text-lg mb-4 transition-all duration-500 hover:translate-x-2">
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}