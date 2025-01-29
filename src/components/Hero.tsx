import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-xbox-black text-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-center mb-4">
          CONSOLES XBOX
        </h1>
        
        {/* CTA Button */}
        <div className="text-center mb-16">
          <Link
            to="/consoles"
            className="inline-block bg-xbox-green hover:bg-opacity-90 text-white px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105"
          >
            COMPRE CONSOLES
          </Link>
        </div>

        {/* Consoles Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Xbox Series X */}
          <div className="text-center space-y-6">
            <img
              src="/lovable-uploads/ac692133-ca10-48ca-84dc-37a3e7da930d.png"
              alt="Xbox Series X"
              className="mx-auto max-w-[400px] w-full h-[300px] object-contain"
            />
            <h2 className="text-3xl font-bold">XBOX SERIES X</h2>
            <p className="text-xl text-gray-300">
              O Xbox mais rápido e potente de todos os tempos.
            </p>
            <Link
              to="/consoles/series-x"
              className="inline-block text-xbox-green hover:underline"
            >
              SAIBA MAIS
            </Link>
          </div>

          {/* Xbox Series S */}
          <div className="text-center space-y-6">
            <img
              src="/lovable-uploads/8d5795dd-5212-4910-8366-ebcaed8c91a5.png"
              alt="Xbox Series S"
              className="mx-auto max-w-[400px] w-full h-[300px] object-contain"
            />
            <h2 className="text-3xl font-bold">XBOX SERIES S</h2>
            <p className="text-xl text-gray-300">
              O melhor valor em jogos.
            </p>
            <Link
              to="/consoles/series-s"
              className="inline-block text-xbox-green hover:underline"
            >
              SAIBA MAIS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;