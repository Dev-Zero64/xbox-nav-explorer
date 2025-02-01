import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Simple icon components using SVG
const IconWrapper = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-green-500"
  >
    {children}
  </svg>
);

const Icons = {
  Trophy: () => (
    <IconWrapper>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </IconWrapper>
  ),
  UserGroup: () => (
    <IconWrapper>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </IconWrapper>
  ),
  MessageSquare: () => (
    <IconWrapper>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </IconWrapper>
  ),
  Calendar: () => (
    <IconWrapper>
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </IconWrapper>
  ),
};

// Simple navbar component
const SimpleNavbar = () => (
  <nav className="bg-xbox-black p-4">
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div className="text-white text-xl font-bold">Xbox</div>
      <div className="space-x-6">
        {['Home', 'Games', 'Community', 'Support'].map(item => (
          <button key={item} className="text-white hover:text-green-500">
            {item}
          </button>
        ))}
      </div>
    </div>
  </nav>
);

const CommunityCard = ({ title, description, icon: Icon }) => (
  <Card className="bg-xbox-black border-green-500 border hover:scale-105 transition-transform duration-300">
    <CardHeader>
      <div className="flex items-center gap-4">
        <Icon />
        <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <img
        src="/api/placeholder/400/300"
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-300 text-lg">{description}</p>
    </CardContent>
  </Card>
);

const Community = () => {
  const communityFeatures = [
    {
      title: "Eventos e Torneios",
      description: "Participe de competições emocionantes e eventos exclusivos organizados pela comunidade Xbox. Ganhe prêmios e reconhecimento!",
      icon: Icons.Trophy,
    },
    {
      title: "Grupos de Jogadores",
      description: "Encontre jogadores com interesses similares e forme equipes para suas aventuras favoritas.",
      icon: Icons.UserGroup,
    },
    {
      title: "Fóruns de Discussão",
      description: "Compartilhe dicas, estratégias e participe de discussões sobre seus jogos favoritos.",
      icon: Icons.MessageSquare,
    },
    {
      title: "Calendário de Eventos",
      description: "Fique por dentro de todos os eventos, lançamentos e transmissões ao vivo da comunidade.",
      icon: Icons.Calendar,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-xbox-black to-green-900">
      <SimpleNavbar />
      
      <div className="max-w-7xl mx-auto px-6 py-16 text-white">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
            Comunidade Xbox
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Junte-se a milhões de jogadores, participe de eventos exclusivos e faça parte da maior comunidade gaming do Brasil.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300">
            Participar Agora
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {communityFeatures.map((feature, index) => (
            <CommunityCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold mb-8">Estatísticas da Comunidade</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Membros Ativos", value: "2M+" },
              { label: "Grupos", value: "50K+" },
              { label: "Eventos Mensais", value: "100+" },
              { label: "Países", value: "20+" }
            ].map((stat, index) => (
              <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-green-500 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;