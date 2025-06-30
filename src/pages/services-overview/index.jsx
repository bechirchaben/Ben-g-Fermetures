import React, { useState, useEffect } from 'react';

import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import SecurityAssessment from './components/SecurityAssessment';
import ServiceFilter from './components/ServiceFilter';
import ServiceComparison from './components/ServiceComparison';

const ServicesOverview = () => {
  const [filteredServices, setFilteredServices] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});
  const [showComparison, setShowComparison] = useState(false);
  const [selectedForComparison, setSelectedForComparison] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const services = [
    {
      id: 'À-lames-pleines',
      name: 'À lames pleines',
      category: 'Rideaux',
      shortDescription: 'Rideau métallique robuste avec lames pleines pour une sécurité optimale des vitrines et accès sensibles.',
      icon: 'Square',
      rating: 4.8,
      reviewCount: 127,
      emergency: false,
      images: [
        "/assets/images/lame pleines.png"
      ],
      keyFeatures: [
        'Haute résistance aux effractions',
        'Occultation totale',
        'Acier galvanisé ou thermolaqué',
        'Possibilité de motorisation'
      ],
      applications: ['Boutique', 'Entrepôt', 'Garage', 'Commerce de centre-ville'],
      technicalSpecs: [
        { label: 'Matériau', value: 'Acier galvanisé ou thermolaqué' },
        { label: 'Manœuvre', value: 'Manuelle ou motorisée' },
        { label: 'Garantie', value: '2 ans' }
      ],
      benefits: [
        'Sécurisation maximale',
        'Protection contre les regards et intrusions',
        'Durabilité en usage intensif',
        'Esthétique sobre et professionnelle'
      ]
    },
    {
      id: 'Micro-perforées',
      name: 'À lames Micro-perforée',
      category: 'Rideaux',
      shortDescription: 'Rideau métallique ajouré offrant visibilité et sécurité pour vitrines de commerces.',
      icon: 'Square',
      rating: 4.8,
      reviewCount: 119,
      emergency: false,
      images: [
        "/assets/images/micro perforé.png"
      ],
      keyFeatures: [
        'Lames ajourées micro-perforées',
        'Idéal pour vitrines',
        'Sécurité et visibilité combinées',
        'Motorisation possible'
      ],
      applications: ['Commerce de détail', 'Galerie marchande', 'Centre-ville', 'Zone piétonne'],
      technicalSpecs: [
        { label: 'Matériau', value: 'Acier galvanisé micro-perforé' },
        { label: 'Manœuvre', value: 'Manuelle ou motorisée' },
        { label: 'Garantie', value: '2 ans' }
      ],
      benefits: [
        'Visibilité du magasin même fermé',
        'Disuasion contre le vandalisme',
        'Esthétique moderne',
        'Ventilation naturelle possible'
      ]
    },
    {
      id: 'A-lames-transparents',
      name: 'À lames transparentes',
      category: 'Rideaux',
      shortDescription: 'Rideau en polycarbonate transparent pour allier sécurité et visibilité maximale.',
      icon: 'Square',
      rating: 4.8,
      reviewCount: 57,
      emergency: false,
      images: [
        "/assets/images/poly trensparent.png"
      ],
      keyFeatures: [
        'Lames en polycarbonate incassable',
        'Protection contre les UV',
        'Esthétique haut de gamme',
        'Sécurité anti-effraction renforcée'
      ],
      applications: ['Boutiques haut de gamme', 'Centres commerciaux', 'Musées', 'Banques'],
      technicalSpecs: [
        { label: 'Matériau', value: 'Polycarbonate transparent + profilés aluminium' },
        { label: 'Manœuvre', value: 'Motorisée avec télécommande' },
        { label: 'Garantie', value: '2 ans' }
      ],
      benefits: [
        'Sécurité et transparence totale',
        'Haute résistance aux chocs',
        'Effet vitrine permanent',
        'Silencieux et fluide à l’ouverture'
      ]
    },
    {
      id: 'Tubes-Ondulés',
      name: 'À tubes ondulés',
      category: 'Rideaux',
      shortDescription: 'Grille métallique ajourée en tubes ondulés pour une ventilation optimale et une visibilité totale.',
      icon: 'Square',
      rating: 4.8,
      reviewCount: 97,
      emergency: false,
      images: [
        "/assets/images/tubes ondule.png"
      ],
      keyFeatures: [
        'Structure en acier galvanisé ou inox',
        'Haute résistance mécanique',
        'Excellent rendu visuel',
        'Possibilité de grande largeur'
      ],
      applications: ['Commerces', 'Galeries marchandes', 'Locaux techniques', 'Aires de stationnement'],
      technicalSpecs: [
        { label: 'Matériau', value: 'Tubes acier ou inox ondulés' },
        { label: 'Manœuvre', value: 'Motorisée ou manuelle' },
        { label: 'Garantie', value: '2 ans' }
      ],
      benefits: [
        'Visibilité maximale en vitrine',
        'Ventilation naturelle',
        'Conforme aux normes de sécurité',
        'Esthétique urbaine et robuste'
      ]
    },
    {
      id: 'Grille-extensible',
      name: 'Grille extensible',
      category: 'Rideaux',
      shortDescription: 'Grille de sécurité pliable idéale pour les vitrines, fenêtres ou passages nécessitant une protection amovible.',
      icon: 'Square',
      rating: 4.8,
      reviewCount: 135,
      emergency: false,
      images: [
        "/assets/images/extensible.png"
      ],
      keyFeatures: [
        'Structure en acier laqué',
        'Système coulissant sur rail',
        'Verrouillage par serrure intégrée',
        'Stockage latéral peu encombrant'
      ],
      applications: ['Boutiques', 'Fenêtres de rez-de-chaussée', 'Locaux techniques', 'Portes secondaires'],
      technicalSpecs: [
        { label: 'Matériau', value: 'Acier galvanisé ou thermolaqué' },
        { label: 'Ouverture', value: 'Latérale simple ou double' },
        { label: 'Garantie', value: '2 ans' }
      ],
      benefits: [
        'Facilité d’utilisation et de rangement',
        'Protection dissuasive contre l’intrusion',
        'Aucune motorisation requise',
        'Pose murale ou encastrée selon contraintes'
      ]
    },
    {
      id: 'À-tubes-droits',
      name: 'À Tubes Droits',
      category: 'Rideaux',
      shortDescription: 'Grille métallique à tubes droits offrant une bonne visibilité et ventilation, idéale pour sécuriser les vitrines de commerces.',
      icon: 'Square',
      rating: 4.8,
      reviewCount: 74,
      emergency: false,
      images: [
        "/assets/images/tubes droites.png"
      ],
      keyFeatures: [
        'Structure ajourée pour visibilité maximale',
        'Tubes verticaux soudés',
        'Verrouillage centralisé',
        'Finition peinture thermolaquée'
      ],
      applications: ['Commerces', 'Centres commerciaux', 'Locaux industriels', 'Parkings'],
      technicalSpecs: [
        { label: 'Matériau', value: 'Acier galvanisé ou aluminium' },
        { label: 'Manœuvre', value: 'Motorisée ou manuelle' },
        { label: 'Garantie', value: '2 ans' }
      ],
      benefits: [
        'Sécurité dissuasive avec visibilité préservée',
        'Bonne aération des locaux fermés',
        'Entretien réduit',
        'Esthétique professionnelle'
      ]
    },
    {
      id: 'volets-roulants-manuel',
      name: 'Volet Roulant Manuel',
      category: 'VoletRoulants',
      shortDescription: 'Volets roulants manuels pour une protection optimale',
      icon: 'Shield',
      rating: 4.9,
      reviewCount: 203,
      emergency: true,
      images: [
        "/assets/images/Volet roulant manuel.png"
      ],
      keyFeatures: [
        'Protection anti-effraction',
        'Isolation thermique',
        'Motorisation disponible',
        'Commande à distance'
      ],
      applications: ['Maisons', 'Appartements', 'Commerces', 'Bureaux'],
      technicalSpecs: [
        { label: 'Matériau', value: 'Aluminium extrudé' },
        { label: 'Épaisseur', value: '8-14mm' },
        { label: 'Motorisation', value: 'Filaire/Radio' },
        { label: 'Résistance', value: 'Classe 2-3' }
      ],
      benefits: [
        'Sécurité 24h/24',
        'Régulation thermique',
        'Intimité préservée',
        'Réduction des nuisances sonores'
      ]
    },
    {
      id: 'volets-roulants-motorisé',
      name: 'Volet Roulant Motoroisé',
      category: 'VoletRoulants',
      shortDescription: 'Volet roulant motorisé économique, idéal pour les petites ouvertures et les budgets réduits.',
      icon: 'Shield',
      rating: 4.9,
      reviewCount: 104,
      emergency: true,
      images: [
        "/assets/images/Volet roulant motorise.png"
      ],
      keyFeatures: [
        'Manœuvre par sangle ou manivelle',
        'Isolation thermique de base',
        'Lames PVC ou aluminium',
        'Pose en façade ou tableau'
      ],
      applications: ['Maisons', 'Appartements', 'Locaux techniques', 'Cabanons'],
      technicalSpecs: [
        { label: 'Matériau', value: 'PVC ou aluminium' },
        { label: 'Largeur max.', value: '2 m' },
        { label: 'Type de manœuvre', value: 'Sangle ou manivelle' },
        { label: 'Garantie', value: '2 ans' }
      ],
      benefits: [
        'Coût d’installation réduit',
        'Fonctionnement simple et fiable',
        'Adapté aux petites ouvertures',
        'Aucune alimentation électrique requise'
      ]
    },
    {
      id: 'stores-bannes',
      name: 'Stores Bannes',
      category: 'Store bannes',
      shortDescription: 'Store extérieur pour ombrager terrasses et balcons, combinant confort et esthétisme.',
      icon: 'Sun',
      rating: 4.6,
      reviewCount: 156,
      emergency: false,
      images: [
        "/assets/images/store banne.png"
      ],
      keyFeatures: [
        'Protection solaire jusqu’à 95% des UV',
        'Armature résistante aux intempéries',
        'Toiles déperlantes et anti-moisissures',
        'Motorisation possible avec capteurs vent/soleil'
      ],
      applications: ['Terrasses', 'Balcons', 'Restaurants', 'Hôtels'],
      technicalSpecs: [
        { label: 'Toile', value: 'Acrylique teintée dans la masse (300g/m²)' },
        { label: 'Structure', value: 'Aluminium thermolaqué' },
        { label: 'Projection', value: '1,5 à 4 mètres' },
        { label: 'Largeur', value: '2 à 7 mètres' }
      ],
      benefits: [
        'Réduction de la chaleur intérieure',
        'Création d’un espace extérieur ombragé',
        'Valorisation esthétique de la façade',
        'Confort visuel et thermique en été'
      ]
    },
    {
      id: 'portails-battants',
      name: 'Portail battant',
      category: 'Portails',
      shortDescription: 'Portail battant motorisé pour entrée résidentielle ou professionnelle, alliant sécurité et élégance.',
      icon: 'DoorOpen',
      rating: 4.8,
      reviewCount: 101,
      emergency: true,
      images: [
        "/assets/images/portail battant.png"
      ],
      keyFeatures: [
        'Motorisation avec ouverture automatique',
        'Sécurité anti-écrasement intégrée',
        'Fabrication sur mesure en alu ou acier',
        'Commande via télécommande ou smartphone'
      ],
      applications: ['Maisons', 'Résidences privées', 'Bâtiments tertiaires', 'Collectivités'],
      technicalSpecs: [
        { label: 'Motorisation', value: 'Bras articulés ou vérins 24V' },
        { label: 'Matériau', value: 'Aluminium thermolaqué / Acier galvanisé' },
        { label: 'Ouverture', value: 'Vers l’intérieur ou l’extérieur, jusqu’à 120°' },
        { label: 'Largeur maximale', value: 'Jusqu’à 5 mètres' }
      ],
      benefits: [
        'Accès pratique sans descendre du véhicule',
        'Installation rapide et adaptable',
        'Compatible domotique',
        'Aspect moderne ou traditionnel au choix'
      ]
    },
    {
      id: 'portails-coulissants',
      name: 'Portail coulissant',
      category: 'Portails',
      shortDescription: 'Portail coulissant motorisé, idéal pour les accès restreints ou en pente, avec ouverture latérale fluide.',
      icon: 'DoorOpen',
      rating: 4.8,
      reviewCount: 64,
      emergency: true,
      images: [
        "/assets/images/portail coulissant.png"
      ],
      keyFeatures: [
        'Glissement latéral silencieux',
        'Motorisation intégrée ou enterrée',
        'Fabrication aluminium ou acier sur mesure',
        'Commandes à distance ou via domotique'
      ],
      applications: ['Habitations', 'Parkings collectifs', 'Sites industriels', 'Locaux professionnels'],
      technicalSpecs: [
        { label: 'Motorisation', value: 'Rails au sol ou autoporté, 230V ou 24V' },
        { label: 'Matériau', value: 'Aluminium laqué / Acier galvanisé' },
        { label: 'Largeur maximale', value: 'Jusqu’à 8 mètres' },
        { label: 'Sécurité', value: 'Détection d’obstacles et cellules photoélectriques' }
      ],
      benefits: [
        'Gain de place à l’ouverture',
        'Accès rapide et fluide',
        'Sécurisation efficace',
        'Esthétique moderne'
      ]
    },
    {
      id: 'portails-autoportant',
      name: 'Portail autoportant',
      category: 'Portails',
      shortDescription: 'Portail coulissant sans rail au sol, parfait pour les entrées avec dénivelé ou difficilement accessibles.',
      icon: 'DoorOpen',
      rating: 4.8,
      reviewCount: 88,
      emergency: true,
      images: [
        "/assets/images/portail-autoportant.png"
      ],
      keyFeatures: [
        'Pas de rail au sol',
        'Moins de maintenance',
        'Pose rapide sans génie civil',
        'Adapté aux accès en pente ou enneigés'
      ],
      applications: ['Maisons individuelles', 'Entrées difficiles', 'Sites industriels', 'Collectivités'],
      technicalSpecs: [
        { label: 'Motorisation', value: 'Autoportée 24V ou 230V' },
        { label: 'Structure', value: 'Aluminium renforcé ou acier galvanisé' },
        { label: 'Portée libre', value: 'Jusqu’à 6 mètres sans appui au sol' },
        { label: 'Sécurité', value: 'Détection d’obstacle, feu clignotant, arrêt d’urgence' }
      ],
      benefits: [
        'Aucune contrainte au sol',
        'Simplicité d’installation',
        'Fonctionne en conditions extrêmes',
        'Esthétique soignée et moderne'
      ]
    },
    {
      id: 'Porte-sectionnelle',
      name: 'Porte sectionnelle',
      category: 'Résidentielles',
      shortDescription: 'Porte de garage moderne, à ouverture verticale, optimisant l’espace intérieur et extérieur.',
      icon: 'DoorClosed',
      rating: 4.9,
      reviewCount: 93,
      emergency: true,
      images: [
        "/assets/images/porte-sectionnel.png"
      ],
      keyFeatures: [
        'Ouverture verticale sans débord',
        'Isolation thermique renforcée',
        'Sécurité anti-pince-doigts',
        'Design personnalisable (couleurs, hublots)'
      ],
      applications: ['Garages résidentiels', 'Maisons individuelles', 'Résidences sécurisées'],
      technicalSpecs: [
        { label: 'Panneaux', value: 'Sandwich acier 40 mm isolé mousse PU' },
        { label: 'Ouverture', value: 'Verticale avec rails au plafond' },
        { label: 'Étanchéité', value: 'Joints périphériques anti-intempéries' },
        { label: 'Motorisation', value: 'Compatible moteur Somfy/Hörmann' }
      ],
      benefits: [
        'Gain d’espace',
        'Excellente isolation thermique et phonique',
        'Utilisation silencieuse',
        'Valorisation de la façade'
      ]
    },
    {
      id: 'Porte-basculante',
      name: 'Porte basculante',
      category: 'Résidentielles',
      shortDescription: 'Porte de garage économique et robuste, idéale pour les garages traditionnels.',
      icon: 'DoorClosed',
      rating: 4.7,
      reviewCount: 126,
      emergency: false,
      images: [
        "/assets/images/porte-basculante.png"
      ],
      keyFeatures: [
        'Structure monobloc en acier',
        'Manœuvre manuelle ou motorisée',
        'Système anti-dégondage',
        'Disponible avec portillon intégré'
      ],
      applications: ['Maisons individuelles', 'Garages privatifs', 'Résidences secondaires'],
      technicalSpecs: [
        { label: 'Type d’ouverture', value: 'Basculante débordante ou non débordante' },
        { label: 'Matériau', value: 'Tôle acier galvanisée ou nervurée' },
        { label: 'Largeur max', value: 'Jusqu’à 3 m' },
        { label: 'Motorisation', value: 'Compatible moteur axial ou à bras' }
      ],
      benefits: [
        'Rapport qualité/prix excellent',
        'Installation simple et rapide',
        'Entretien réduit',
        'Adaptée aux ouvertures standards'
      ]
    },
    {
      id: 'Porte-enroulable',
      name: 'Porte enroulable',
      category: 'Résidentielles',
      shortDescription: 'Porte de garage compacte, motorisée, idéale pour les espaces restreints.',
      icon: 'AlignJustify',
      rating: 4.8,
      reviewCount: 141,
      emergency: false,
      images: [
        "/assets/images/porte-enroulable.png"
      ],
      keyFeatures: [
        'Gain d’espace intérieur et extérieur',
        'Motorisation intégrée',
        'Tablier en aluminium isolé',
        'Coffre compact discret'
      ],
      applications: ['Garages privés', 'Petites copropriétés', 'Résidences principales ou secondaires'],
      technicalSpecs: [
        { label: 'Type d’ouverture', value: 'Enroulement vertical dans un coffre' },
        { label: 'Matériau', value: 'Lames aluminium double paroi' },
        { label: 'Largeur max', value: 'Jusqu’à 4 m' },
        { label: 'Motorisation', value: 'Tubulaire intégrée avec télécommande' }
      ],
      benefits: [
        'Optimisation de l’espace',
        'Confort d’usage avec ouverture automatisée',
        'Bonne isolation thermique',
        'Esthétique épurée pour toutes les façades'
      ]
    },
    {
      id: 'Rideau-metalique',
      name: 'Rideau métallique',
      category: 'Résidentielles',
      shortDescription: 'Rideau métallique de garage robuste et motorisé pour une sécurité optimale.',
      icon: 'ShieldCheck',
      rating: 4.7,
      reviewCount: 112,
      emergency: true,
      images: [
        "/assets/images/rideau-metalique.png"
      ],
      keyFeatures: [
        'Structure en acier galvanisé',
        'Motorisation possible',
        'Verrouillage manuel ou automatique',
        'Pose intérieure ou extérieure'
      ],
      applications: ['Garages privatifs', 'Résidences secondaires', 'Locaux techniques'],
      technicalSpecs: [
        { label: 'Type de lames', value: 'Pleines ou micro-perforées' },
        { label: 'Motorisation', value: 'Centralisée ou tubulaire' },
        { label: 'Dimensions', value: 'Sur mesure jusqu’à 5 m de large' },
        { label: 'Finition', value: 'Thermolaquage en option' }
      ],
      benefits: [
        'Protection renforcée contre les intrusions',
        'Adapté aux zones urbaines',
        'Durabilité et peu d’entretien',
        'Conformité aux normes de sécurité'
      ]
    },
    {
      id: 'Porte-battante',
      name: 'Porte battante',
      category: 'Résidentielles',
      shortDescription: 'Porte d’entrée classique alliant sécurité, isolation et esthétique.',
      icon: 'DoorClosed',
      rating: 4.8,
      reviewCount: 81,
      emergency: false,
      images: [
        "/assets/images/porte-battante.png"
      ],
      keyFeatures: [
        'Structure en acier ou aluminium',
        'Ouverture vers l’intérieur ou l’extérieur',
        'Fermeture multipoints',
        'Isolation thermique et acoustique'
      ],
      applications: ['Maisons individuelles', 'Appartements', 'Locaux d’habitation'],
      technicalSpecs: [
        { label: 'Matériau', value: 'Acier galvanisé ou aluminium' },
        { label: 'Ouverture', value: '1 ou 2 vantaux' },
        { label: 'Serrure', value: 'Multipoints A2P' },
        { label: 'Finition', value: 'Laquée ou bois imitation' }
      ],
      benefits: [
        'Excellent rapport qualité/prix',
        'Adaptée aux rénovations et constructions neuves',
        'Haute résistance à l’effraction',
        'Confort et esthétique personnalisable'
      ]
    },
    {
      id: 'Porte-metalique',
      name: 'Porte métallique',
      category: 'Résidentielles',
      shortDescription: 'Porte d’entrée robuste en métal, idéale pour sécuriser votre habitat.',
      icon: 'ShieldCheck',
      rating: 4.7,
      reviewCount: 101,
      emergency: true,
      images: [
        "/assets/images/porte-metalique.png"
      ],
      keyFeatures: [
        'Structure en acier galvanisé',
        'Fermeture multipoints renforcée',
        'Haute résistance au feu et à l’effraction',
        'Isolation thermique intégrée'
      ],
      applications: ['Entrées de maison', 'Sous-sols', 'Caves', 'Garages'],
      technicalSpecs: [
        { label: 'Matériau', value: 'Acier galvanisé thermolaqué' },
        { label: 'Épaisseur', value: '40 à 60 mm' },
        { label: 'Serrure', value: 'Multipoints A2P' },
        { label: 'Couleurs disponibles', value: 'Blanc, gris, noir, sur demande' }
      ],
      benefits: [
        'Protection anti-intrusion optimale',
        'Durabilité supérieure aux portes classiques',
        'Peu d’entretien',
        'Compatible avec motorisation et contrôle d’accès'
      ]
    },
    {
      id: 'Porte-blindée',
      name: 'Porte blindée',
      category: 'Résidentielles',
      shortDescription: 'Porte d’entrée hautement sécurisée pour une protection optimale de votre domicile.',
      icon: 'Shield',
      rating: 4.9,
      reviewCount: 78,
      emergency: true,
      images: [
        "/assets/images/porte-blindee.png"
      ],
      keyFeatures: [
        'Blindage acier haute sécurité',
        'Serrure 5 à 7 points certifiée A2P',
        'Isolation thermique et acoustique',
        'Esthétique personnalisable (bois, métal, couleurs)'
      ],
      applications: ['Appartement', 'Maison individuelle', 'Cave sécurisée', 'Locaux sensibles'],
      technicalSpecs: [
        { label: 'Blindage', value: 'Acier haute résistance' },
        { label: 'Serrure', value: 'Multipoints A2P niveau 1 à 3' },
        { label: 'Certification', value: 'BP1, BP2, BP3' },
        { label: 'Isolation phonique', value: 'jusqu’à 42 dB' }
      ],
      benefits: [
        'Protection contre les intrusions certifiée',
        'Confort thermique et phonique renforcé',
        'Conformité assurances habitation',
        'Valorisation du bien immobilier'
      ]
    },
    {
      id: 'Portillon-entree',
      name: 'Portillon d’entrée',
      category: 'Résidentielles',
      shortDescription: 'Portillon sécurisé et élégant pour contrôler l’accès à votre propriété.',
      icon: 'Lock',
      rating: 4.7,
      reviewCount: 92,
      emergency: false,
      images: [
        "/assets/images/portillon-entree.png"
      ],
      keyFeatures: [
        'Structure robuste en aluminium ou acier',
        'Serrure multipoints manuelle ou électrique',
        'Design assorti au portail ou à la clôture',
        'Option visiophone ou interphone'
      ],
      applications: ['Entrées piétonnes', 'Jardins', 'Résidences sécurisées', 'Collectivités'],
      technicalSpecs: [
        { label: 'Matériau', value: 'Aluminium ou acier galvanisé' },
        { label: 'Serrure', value: '1 à 3 points manuelle ou électrique' },
        { label: 'Hauteur', value: '1.2 à 2 m' },
        { label: 'Largeur', value: '0.9 à 1.5 m' }
      ],
      benefits: [
        'Sécurise les accès piétons',
        'Complète l’esthétique du portail',
        'Adaptable à tous types d’accès',
        'Facile d’entretien'
      ]
    },
    {
      id: 'Porte-sectionnelle-industriel',
      name: 'Porte sectionnelle industrielle',
      category: 'industrielles',
      shortDescription: 'Porte robuste et isolante conçue pour les environnements industriels exigeants.',
      icon: 'Lock',
      rating: 4.9,
      reviewCount: 94,
      emergency: true,
      images: [
        "/assets/images/sectionnel-industrielle.png"
      ],
      keyFeatures: [
        'Isolation thermique et phonique optimale',
        'Ouverture verticale pour gain d’espace',
        'Panneaux sandwich renforcés',
        'Compatible avec motorisation industrielle'
      ],
      applications: ['Entrepôts', 'Ateliers', 'Halles industrielles', 'Garages professionnels'],
      technicalSpecs: [
        { label: 'Panneaux', value: 'Acier double paroi avec mousse PU 40 mm' },
        { label: 'Ouverture', value: 'Sectionnelle verticale' },
        { label: 'Motorisation', value: 'Industrielle triphasée ou manuelle' },
        { label: 'Isolation thermique', value: '0.5 W/m²K' }
      ],
      benefits: [
        'Optimisation de l’espace intérieur',
        'Sécurité des accès industriels',
        'Excellente durabilité',
        'Amélioration des performances énergétiques'
      ]
    },
    {
      id: 'Rideau-metalique-industrielle',
      name: 'Porte métallique industrielle',
      category: 'industrielles',
      shortDescription: 'Rideau métallique robuste pour la sécurité des sites industriels et commerciaux.',
      icon: 'Lock',
      rating: 4.9,
      reviewCount: 79,
      emergency: true,
      images: [
        "/assets/images/metalique-industriel.png"
      ],
      keyFeatures: [
        'Structure en acier galvanisé renforcé',
        'Fonctionnement manuel ou motorisé',
        'Conforme aux normes de sécurité',
        'Grande résistance aux chocs et intrusions'
      ],
      applications: ['Usines', 'Entrepôts', 'Zones logistiques', 'Bâtiments industriels'],
      technicalSpecs: [
        { label: 'Matériau', value: 'Acier galvanisé ou thermolaqué' },
        { label: 'Motorisation', value: 'Industrielle triphasée ou manuelle' },
        { label: 'Ouverture', value: 'Enroulable verticale' },
        { label: 'Dimensions', value: 'Jusqu\'à 12m de large' }
      ],
      benefits: [
        'Protection renforcée des locaux',
        'Adapté aux grands accès',
        'Fiabilité à long terme',
        'Facilité d’entretien'
      ]
    },
    {
      id: 'Porte-rapide-enroulable',
      name: 'Porte rapide enroulable',
      category: 'industrielles',
      shortDescription: 'Porte souple motorisée à ouverture rapide pour zones à fort passage.',
      icon: 'Lock',
      rating: 4.9,
      reviewCount: 66,
      emergency: true,
      images: [
        "/assets/images/rapide-enroulable.png"
      ],
      keyFeatures: [
        'Ouverture jusqu\'à 2 m/s',
        'Toile souple résistante au vent',
        'Motorisation silencieuse',
        'Capteurs de sécurité intégrés'
      ],
      applications: ['Industries agroalimentaires', 'Laboratoires', 'Logistique', 'Garages professionnels'],
      technicalSpecs: [
        { label: 'Toile', value: 'PVC renforcé 900 g/m²' },
        { label: 'Vitesse d\'ouverture', value: '1 à 2 m/s' },
        { label: 'Motorisation', value: 'Triphasée ou monophasée' },
        { label: 'Utilisation', value: 'Intérieur / Extérieur' }
      ],
      benefits: [
        'Gain de temps logistique',
        'Réduction des pertes d\'énergie',
        'Maintien de la température ambiante',
        'Hygiène et sécurité optimales'
      ]
    }
  ];

  useEffect(() => {
    let filtered = [...services];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.keyFeatures.some(feature =>
          feature.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Apply category filters
    Object.entries(activeFilters).forEach(([category, values]) => {
      if (values.length > 0) {
        filtered = filtered.filter(service => {
          switch (category) {
            case 'type':
              const categoryMap = {
                'Rideaux': 'Rideaux',
                'Portails': 'Portails',
                'VoletRoulants': 'VoletRoulants',
                'industrielles': 'industrielles',
                'Store Bannes': 'Store bannes',
                'Résidentielles': 'Résidentielles'
              };

              return values.some(value => service.category === categoryMap[value]);

            default:
              return true;
          }
        });
      }
    });


    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseInt(a.priceRange.split('€')[0]) - parseInt(b.priceRange.split('€')[0]);
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviewCount - a.reviewCount;
        default:
          return 0;
      }
    });

    setFilteredServices(filtered);
  }, [searchQuery, activeFilters, sortBy]);

  const handleFilterChange = (category, values) => {
    if (category === 'clear') {
      setActiveFilters({});
    } else {
      setActiveFilters(prev => ({
        ...prev,
        [category]: values
      }));
    }
  };

  const handleQuoteRequest = (service) => {
    window.location.href = `/contact-service-areas?service=${service.id}&type=quote`;
  };

  const handleAssessmentComplete = (recommendations) => {
    // Filter services based on recommendations
    const recommendedIds = recommendations.map(r =>
      services.find(s => s.name === r.service)?.id
    ).filter(Boolean);

    if (recommendedIds.length > 0) {
      setActiveFilters({
        recommended: recommendedIds
      });
    }
  };

  const toggleComparison = (service) => {
    setSelectedForComparison(prev => {
      const exists = prev.find(s => s.id === service.id);
      if (exists) {
        return prev.filter(s => s.id !== service.id);
      } else if (prev.length < 3) {
        return [...prev, service];
      }
      return prev;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-12 bg-gradient-to-br from-primary-50 via-background to-secondary-50">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
              Nos Services de
              <span className="text-gradient block">Protection & Fermetures</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Découvrez notre gamme complète de solutions de sécurité, du résidentiel à l'industriel.
              Chaque installation est conçue pour protéger ce qui compte le plus pour vous.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">23</div>
                <div className="text-sm text-text-secondary">Services Spécialisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-text-secondary">Service d'Urgence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">2</div>
                <div className="text-sm text-text-secondary">Ans de Garantie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">447</div>
                <div className="text-sm text-text-secondary">Clients Satisfaits</div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-4">
                <Icon name="Phone" size={24} />
                <div>
                  <div className="font-semibold">Urgence 24h/24 - 7j/7</div>
                  <div className="text-sm opacity-90">Intervention rapide garantie</div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = 'tel:+33782885505'}
                  className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary"
                >
                  Appeler Maintenant
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-12">
        <div className="container-max section-padding">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80 space-y-6">
              {/* Search */}
              <div className="bg-background border border-border rounded-xl p-4">
                <div className="relative">
                  <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                  <input
                    type="text"
                    placeholder="Rechercher un service..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              {/* Filters */}
              <ServiceFilter
                onFilterChange={handleFilterChange}
                activeFilters={activeFilters}
              />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary">
                    {filteredServices.length} Service{filteredServices.length !== 1 ? 's' : ''} Disponible{filteredServices.length !== 1 ? 's' : ''}
                  </h2>
                  {Object.keys(activeFilters).length > 0 && (
                    <p className="text-text-secondary mt-1">
                      Résultats filtrés selon vos critères
                    </p>
                  )}
                </div>
              </div>

              {/* Services Grid */}
              {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredServices.map((service) => (
                    <div key={service.id} className="relative">
                      <ServiceCard
                        service={service}
                        onQuoteRequest={handleQuoteRequest}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Aucun service trouvé
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Essayez de modifier vos critères de recherche ou vos filtres
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery('');
                      setActiveFilters({});
                    }}
                    iconName="RotateCcw"
                    iconPosition="left"
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Besoin d'Aide pour Choisir ?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Nos experts sont là pour vous conseiller et vous accompagner dans le choix
            de la solution de protection parfaite pour votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = 'tel:+33782885505'}
              iconName="Phone"
              iconPosition="left"
              className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary"
            >
              Appeler un Expert
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/contact-service-areas?type=consultation'}
              iconName="Calendar"
              iconPosition="left"
              className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary"
            >
              Prendre RDV
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Modal */}
      {showComparison && (
        <ServiceComparison
          services={selectedForComparison}
          onClose={() => setShowComparison(false)}
        />
      )}

      {/* Mobile Emergency Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-security border-t border-border z-40">
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.location.href = '/contact-service-areas?type=quote'}
            iconName="Calculator"
            className="flex-1 text-secondary border-secondary"
          >
            Devis Gratuit
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.location.href = 'tel:+33782885505'}
            iconName="Phone"
            className="flex-1 animate-pulse-emergency"
          >
            Urgence 24/7
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;