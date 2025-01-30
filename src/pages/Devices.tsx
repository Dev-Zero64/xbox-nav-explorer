import Navbar from "../components/Navbar";

const Devices = () => {
    return (
        <div className="min-h-screen bg-xbox-black font-segoe text-white mt-10">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h1 className="text-6xl md:text-8xl font-bold text-center mb-4">
                    Dispositivos Xbox
                </h1>
                <p className="text-xl text-center mb-8">
                    Explore consoles, controles e acessórios para elevar sua experiência.
                </p>
                {/* Adicione aqui os dispositivos disponíveis */}
            </div>
        </div>
    );
};

export default Devices;