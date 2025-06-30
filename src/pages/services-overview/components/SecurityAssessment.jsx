import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SecurityAssessment = ({ onAssessmentComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const questions = [
    {
      id: 'propertyType',
      question: 'Quel type de propriété souhaitez-vous sécuriser ?',
      options: [
       { value: 'Rideaux', label: 'Rideaux et grilles', icon: 'Home' },
        { value: 'industrielles', label: 'Portes industrielles', icon: 'Factory' },
        { value: 'résidentielles', label: 'Portes résidentielles', icon: 'Home' },
        { value: 'Portails', label: 'Portails', icon: 'Home' },
        { value: 'VoletRoulants', label: 'Volets roulants', icon: 'Home' },
        { value: 'Store Bannes', label: 'Store Bannes', icon: 'Home' }
      ]
    },
    {
      id: 'location',
      question: 'Dans quel environnement se trouve votre propriété ?',
      options: [
        { value: 'urban', label: 'Urbain', icon: 'MapPin' },
        { value: 'suburban', label: 'Périurbain', icon: 'TreePine' },
        { value: 'rural', label: 'Rural', icon: 'Mountain' },
        { value: 'coastal', label: 'Côtier', icon: 'Waves' }
      ]
    },
    {
      id: 'securityConcerns',
      question: 'Quelles sont vos principales préoccupations sécuritaires ?',
      multiple: true,
      options: [
        { value: 'burglary', label: 'Cambriolage', icon: 'Shield' },
        { value: 'privacy', label: 'Intimité', icon: 'Eye' },
        { value: 'weather', label: 'Intempéries', icon: 'Cloud' },
        { value: 'energy', label: 'Économie d\'énergie', icon: 'Zap' },
        { value: 'noise', label: 'Nuisances sonores', icon: 'Volume2' },
        { value: 'vandalism', label: 'Vandalisme', icon: 'AlertTriangle' }
      ]
    },

    {
      id: 'timeline',
      question: 'Dans quels délais souhaitez-vous réaliser les travaux ?',
      options: [
        { value: 'urgent', label: 'Urgent (moins d\'1 mois)', icon: 'Clock' },
        { value: 'soon', label: 'Prochainement (1-3 mois)', icon: 'Calendar' },
        { value: 'planned', label: 'Planifié (3-6 mois)', icon: 'CalendarDays' },
        { value: 'future', label: 'Futur (plus de 6 mois)', icon: 'CalendarRange' }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    const question = questions.find(q => q.id === questionId);

    if (question.multiple) {
      const currentAnswers = answers[questionId] || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter(a => a !== value)
        : [...currentAnswers, value];

      setAnswers(prev => ({
        ...prev,
        [questionId]: newAnswers
      }));
    } else {
      setAnswers(prev => ({
        ...prev,
        [questionId]: value
      }));
    }
  };

  const canProceed = () => {
    const currentQuestion = questions[currentStep];
    const answer = answers[currentQuestion.id];

    if (currentQuestion.multiple) {
      return answer && answer.length > 0;
    }
    return answer !== undefined;
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete assessment
      const recommendations = generateRecommendations(answers);
      onAssessmentComplete(recommendations);
      setIsOpen(false);
      setCurrentStep(0);
      setAnswers({});
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateRecommendations = (userAnswers) => {
    const recommendations = [];

    // Logic to generate recommendations based on answers
    if (userAnswers.securityConcerns?.includes('burglary')) {
      recommendations.push({
        service: 'Volets Roulants',
        priority: 'high',
        reason: 'Protection anti-effraction renforcée'
      });
    }

    if (userAnswers.propertyType === 'commercial') {
      recommendations.push({
        service: 'Rideaux Métalliques',
        priority: 'high',
        reason: 'Sécurité commerciale optimale'
      });
    }

    if (userAnswers.securityConcerns?.includes('energy')) {
      recommendations.push({
        service: 'Stores Bannes',
        priority: 'medium',
        reason: 'Économies d\'énergie et confort thermique'
      });
    }

    return recommendations;
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (!isOpen) {
    return (
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Shield" size={24} />
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">
            Évaluation Sécuritaire Personnalisée
          </h3>
          <p className="text-text-secondary mb-6">
            Découvrez les solutions de protection adaptées à vos besoins spécifiques en quelques questions simples.
          </p>
          <Button
            variant="primary"
            onClick={() => setIsOpen(true)}
            iconName="ArrowRight"
            iconPosition="right"
          >
            Commencer l'évaluation
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background rounded-xl shadow-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Évaluation Sécuritaire</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={16} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2">
          <div
            className="bg-white h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm mt-2 opacity-90">
          <span>Question {currentStep + 1} sur {questions.length}</span>
          <span>{Math.round(progress)}% complété</span>
        </div>
      </div>

      {/* Question Content */}
      <div className="p-6">
        <h4 className="text-lg font-semibold text-text-primary mb-6">
          {currentQuestion.question}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {currentQuestion.options.map((option) => {
            const isSelected = currentQuestion.multiple
              ? answers[currentQuestion.id]?.includes(option.value)
              : answers[currentQuestion.id] === option.value;

            return (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${isSelected
                    ? 'border-primary bg-primary-50 text-primary' : 'border-border hover:border-primary-300 hover:bg-surface'
                  }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? 'bg-primary text-white' : 'bg-surface text-text-secondary'
                    }`}>
                    <Icon name={option.icon} size={20} />
                  </div>
                  <span className="font-medium">{option.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            iconName="ChevronLeft"
            iconPosition="left"
          >
            Précédent
          </Button>

          <Button
            variant="primary"
            onClick={nextStep}
            disabled={!canProceed()}
            iconName={currentStep === questions.length - 1 ? "Check" : "ChevronRight"}
            iconPosition="right"
          >
            {currentStep === questions.length - 1 ? 'Terminer' : 'Suivant'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecurityAssessment;