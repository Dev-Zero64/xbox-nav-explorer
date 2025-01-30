import Navbar from "../components/Navbar";

const Gamepass = () => {
    return (
        <div className="min-h-screen bg-xbox-black font-segoe text-white mt-10">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h1 className="text-6xl md:text-8xl font-bold text-center mb-4">
                    Game Pass
                </h1>
                <p className="text-xl text-center mb-8">
                    Faça a maratona de jogos com o Xbox Game Pass.
                </p>
                {/* Adicione opções de jogos e detalhes do Game Pass aqui */}
            </div>
        </div>
    );
};

export default Gamepass;