import Navbar from "../components/Navbar";

const Community = () => {
    return (
        <div className="min-h-screen bg-xbox-black font-segoe">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16 text-white mt-10">
                <h1 className="text-6xl md:text-8xl font-bold text-center mb-4">
                    Comunidade Xbox
                </h1>
                <p className="text-xl text-center mb-8">
                    Junte-se à comunidade Xbox e conecte-se com jogadores de todo o mundo.
                </p>
                <div className="grid md:grid-cols-2 gap-12 mt-12">
                    <div className="text-center space-y-6">
                        <img
                            src="https://assets.xboxservices.com/assets/fa/ed/faed284a-7b32-434d-b0fa-a2f635376b5c.jpg?n=G4E-Hub_Content-Placement-0_Community-Standards_788x444.jpg"
                            alt="Comunidade Xbox"
                            className="mx-auto max-w-[400px] w-full h-[300px] object-contain"
                        />
                        <h2 className="text-3xl font-bold">Eventos e Torneios</h2>
                        <p className="text-xl text-gray-300">
                            Participe de eventos e torneios exclusivos da comunidade Xbox.
                        </p>
                    </div>
                    <div className="text-center space-y-6">
                        <img
                            src="https://cms-assets.xboxservices.com/assets/ba/70/ba70ff27-234a-40c3-824c-f63ab19fbf05.jpg?n=G4E-Hub_Feature-768_Inclusive_800x1000.jpg"
                            alt="Comunidade Xbox"
                            className="mx-auto max-w-[400px] w-full h-[300px] object-contain"
                        />
                        <h2 className="text-3xl font-bold">Fóruns e Grupos</h2>
                        <p className="text-xl text-gray-300">
                            Conecte-se com outros jogadores em fóruns e grupos dedicados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;