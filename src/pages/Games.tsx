import Navbar from "../components/Navbar";

const Games = () => {
    return (
        <div className="min-h-screen bg-xbox-black font-segoe text-white">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16 mt-10">
                <h1 className="text-6xl md:text-8xl font-bold text-center mb-4">
                    Jogos Xbox
                </h1>
                <p className="text-xl text-center mb-8">
                    Descubra os melhores jogos disponíveis para Xbox
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {/* Featured Games */}
                    <div className="bg-xbox-black-light p-6 rounded-lg hover:scale-105 transition-transform duration-200">
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.33953.13806078025361171.9723cf5e-1e29-4d9d-ad0a-cc37a95bb75d.afabb748-2c30-4a7e-8072-2809a222192d?q=90&w=336&h=200"
                            alt="Forza Horizon 5"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Forza Horizon 5</h3>
                        <p className="text-gray-300">Explore um mundo aberto vibrante no México</p>
                    </div>

                    <div className="bg-xbox-black-light p-6 rounded-lg hover:scale-105 transition-transform duration-200">
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.50670.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.d205e025-5444-4eb1-ae46-571ae6895928?q=90&w=336&h=200"
                            alt="Halo Infinite"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Halo Infinite</h3>
                        <p className="text-gray-300">A nova aventura épica do Master Chief</p>
                    </div>

                    <div className="bg-xbox-black-light p-6 rounded-lg hover:scale-105 transition-transform duration-200">
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.6948.13567343664224659.80549498-60fd-43e8-8e69-6dbaf57c5b6d.89a9232c-6540-405d-8d75-db5f91e3d63b?q=90&w=320&h=180"
                            alt="Starfield"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Starfield</h3>
                        <p className="text-gray-300">Explore o espaço nesta nova aventura épica</p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button className="bg-xbox-green hover:bg-opacity-90 text-white px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105">
                        Ver todos os jogos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Games;