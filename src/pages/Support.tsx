import Navbar from "../components/Navbar";

const Support = () => {
    return (
        <div className="min-h-screen bg-xbox-black font-segoe text-white">
            <Navbar />
            
            <div className="max-w-7xl mx-auto px-6 py-16 mt-10">
                <h1 className="text-6xl md:text-8xl font-bold text-center mb-4">
                    Suporte Xbox
                </h1>
                <p className="text-xl text-center mb-8">
                    Encontre ajuda e recursos para todas as suas necessidades Xbox
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-xbox-black-light p-6 rounded-lg hover:scale-105 transition-transform duration-200">
                        <img
                            src="https://cms-assets.xboxservices.com/assets/34/4d/344d0e61-f7d2-475f-9e88-2f1bbedb3d5f.png?n=HeroAndImageCard-large-l-794x447-16x9-01.png"
                            alt="Suporte ao Console"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Suporte ao Console</h3>
                        <p className="text-gray-300">Solução de problemas e guias para seu console Xbox</p>
                    </div>

                    <div className="bg-xbox-black-light p-6 rounded-lg hover:scale-105 transition-transform duration-200">
                        <img
                            src="https://assets.xboxservices.com/assets/1d/e9/1de988c2-f32f-4434-a541-f9a4b353ee78.jpg?n=Accessories-Hub_Content-Placement-0_2020-Controller-White_788x444.jpg"
                            alt="Ajuda com Acessórios"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Ajuda com Acessórios</h3>
                        <p className="text-gray-300">Suporte para controles e outros acessórios Xbox</p>
                    </div>

                    <div className="bg-xbox-black-light p-6 rounded-lg hover:scale-105 transition-transform duration-200">
                        <img
                            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XGP-CP-Game-Pass-Logo.png?wid=834&hei=470&fit=crop"
                            alt="Game Pass e Conta"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Game Pass e Conta</h3>
                        <p className="text-gray-300">Ajuda com sua conta Xbox e serviços Game Pass</p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button className="bg-xbox-green hover:bg-opacity-90 text-white px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105">
                        Contatar Suporte
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Support;