import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const values = [
    {
      icon: "Shield",
      title: "Protection",
      description: "Nous protégeons ce qui compte le plus pour vous - votre famille, votre entreprise, votre tranquillité d\'esprit."
    },
    {
      icon: "Wrench",
      title: "Artisanat",
      description: "Chaque installation reflète notre engagement envers l\'excellence technique et la précision artisanale."
    },
    {
      icon: "Heart",
      title: "Confiance",
      description: "Nous bâtissons des relations durables basées sur la transparence, la fiabilité et le service personnalisé."
    },
    {
      icon: "Clock",
      title: "Disponibilité",
      description: "Notre service d\'urgence 24/7 garantit que vous n\'êtes jamais seul face à un problème de sécurité."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Notre Mission & Nos Valeurs
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            BEN-G Fermetures incarne l'intersection entre sécurité, artisanat et sérénité. 
            Nous ne sommes pas seulement des installateurs, nous sommes vos gardiens de confiance.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Notre Mission</h3>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Transformer les solutions de sécurité traditionnelles en expériences premium centrées sur la confiance. 
                Nous créons des sanctuaires où les familles se sentent protégées et où les entreprises opèrent en toute confiance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span className="text-text-primary">Expertise technique de pointe</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span className="text-text-primary">Service client personnalisé</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span className="text-text-primary">Engagement communautaire local</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-background rounded-xl p-6 shadow-lg border border-border">
                <blockquote className="text-lg italic text-text-primary mb-4">
                  "Votre protection est notre précision. L'artisanat sur lequel vous pouvez compter, 
                  le service en qui vous pouvez avoir confiance."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">BEN-G Fermetures</div>
                    <div className="text-sm text-text-secondary">Devise de l'entreprise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl mb-6">
                <Icon name={value.icon} size={24} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold text-text-primary mb-4">{value.title}</h4>
              <p className="text-text-secondary leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Company Evolution */}
        <div className="mt-16 bg-surface rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8 text-center">
            Notre Évolution
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 mx-auto">
                <Icon name="Home" size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Fondation Locale</h4>
              <p className="text-text-secondary">
                Créée par des artisans passionnés, BEN-G a commencé comme une entreprise familiale 
                dédiée à la protection des foyers locaux.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4 mx-auto">
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Expansion Expertise</h4>
              <p className="text-text-secondary">
                Développement de notre gamme de services pour inclure les solutions commerciales 
                et industrielles avancées.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4 mx-auto">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Leader Régional</h4>
              <p className="text-text-secondary">
                Aujourd'hui, nous sommes reconnus comme l'autorité définitive en solutions 
                de sécurité résidentielles et commerciales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;