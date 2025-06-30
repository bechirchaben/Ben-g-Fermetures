import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import emailjs from 'emailjs-com';


const EmergencyForm = () => {
  const [formData, setFormData] = useState({
    urgencyLevel: '',
    problemType: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    description: '',
    preferredTime: '',
    hasPhotos: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const urgencyLevels = [
    { value: 'critical', label: 'Critique', description: 'Sécurité compromise', color: 'text-red-600', icon: 'AlertTriangle' },
    { value: 'high', label: 'Haute', description: 'Intervention aujourd\'hui', color: 'text-orange-600', icon: 'Clock' },
    { value: 'medium', label: 'Moyenne', description: 'Dans les 24h', color: 'text-blue-600', icon: 'Calendar' }
  ];

  const problemTypes = [
    'Volet roulant bloqué',
    'Porte de sécurité',
    'Portail automatique',
    'Rideau métallique',
    'Store banne',
    'Serrure défaillante',
    'Dégâts tempête',
    'Autre problème'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const serviceId = 'service_hjfwk5v';
  const templateId = 'template_rzpfgyi';
  const publicKey = 'GjWZ52696UoSA17uw';

  try {
    await emailjs.send(serviceId, templateId, formData, publicKey);

    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      document.getElementById('form-success')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  } catch (error) {
    console.error('Erreur envoi EmailJS:', error);
    alert("Une erreur s'est produite. Veuillez réessayer.");
    setIsSubmitting(false);
  }
};


  const getEstimatedResponse = () => {
    switch (formData.urgencyLevel) {
      case 'critical': return '15-20 minutes';
      case 'high': return '30-45 minutes';
      case 'medium': return '1-2 heures';
      default: return 'Selon urgence';
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-success-50 py-12 lg:py-16" id="form-success">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-success rounded-full mx-auto mb-6">
              <Icon name="Check" size={40} className="text-white" />
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Demande d'Urgence Reçue !
            </h2>
            
            <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div>
                  <div className="text-sm text-text-secondary">Numéro de demande</div>
                  <div className="font-semibold text-text-primary">URG-{Date.now().toString().slice(-6)}</div>
                </div>
                <div>
                  <div className="text-sm text-text-secondary">Temps de réponse estimé</div>
                  <div className="font-semibold text-success">{getEstimatedResponse()}</div>
                </div>
                <div>
                  <div className="text-sm text-text-secondary">Contact</div>
                  <div className="font-semibold text-text-primary">{formData.firstName} {formData.lastName}</div>
                </div>
                <div>
                  <div className="text-sm text-text-secondary">Téléphone</div>
                  <div className="font-semibold text-text-primary">{formData.phone}</div>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-text-secondary mb-8">
              Un technicien va vous contacter dans les plus brefs délais pour confirmer l'intervention. 
              Vous recevrez un SMS de confirmation avec les détails.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.location.href = 'tel:+33782885505'}
              >
                Appeler si Très Urgent
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface py-12 lg:py-16" id="emergency-form">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
            Formulaire d'Urgence Détaillé
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Remplissez ce formulaire pour une intervention rapide et ciblée. 
            Plus vous donnez de détails, mieux nous pouvons vous aider.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
            {/* Urgency Level */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-text-primary mb-4">
                Niveau d'Urgence *
              </label>
              <div className="grid sm:grid-cols-3 gap-4">
                {urgencyLevels.map((level) => (
                  <div
                    key={level.value}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      formData.urgencyLevel === level.value
                        ? 'border-primary bg-primary-50' :'border-border hover:border-primary hover:bg-surface'
                    }`}
                    onClick={() => handleInputChange('urgencyLevel', level.value)}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon name={level.icon} size={20} className={level.color} />
                      <span className="font-semibold text-text-primary">{level.label}</span>
                    </div>
                    <p className="text-sm text-text-secondary">{level.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem Type */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-text-primary mb-3">
                Type de Problème *
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {problemTypes.map((type) => (
                  <div
                    key={type}
                    className={`border rounded-lg p-3 cursor-pointer transition-all duration-200 ${
                      formData.problemType === type
                        ? 'border-primary bg-primary-50 text-primary' :'border-border hover:border-primary hover:bg-surface text-text-secondary'
                    }`}
                    onClick={() => handleInputChange('problemType', type)}
                  >
                    <span className="text-sm font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Informations de Contact
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Prénom *"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
                <Input
                  type="text"
                  placeholder="Nom *"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Téléphone *"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
            </div>

            {/* Address */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Adresse d'Intervention
              </h3>
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Adresse complète *"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Ville *"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Code postal *"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-lg font-semibold text-text-primary mb-3">
                Description du Problème *
              </label>
              <textarea
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                rows="4"
                placeholder="Décrivez en détail votre problème : que s'est-il passé ? depuis quand ? avez-vous essayé quelque chose ?"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                required
              />
            </div>

            {/* Preferred Time */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-text-primary mb-3">
                Créneau Préféré (si possible)
              </label>
              <Input
                type="datetime-local"
                value={formData.preferredTime}
                onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                min={new Date().toISOString().slice(0, 16)}
              />
              <p className="text-sm text-text-muted mt-2">
                Pour les urgences critiques, nous interviendrons dès que possible
              </p>
            </div>

            {/* Estimated Response */}
            {formData.urgencyLevel && (
              <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-blue-600" />
                  <div>
                    <div className="font-semibold text-blue-900">
                      Temps de réponse estimé : {getEstimatedResponse()}
                    </div>
                    <div className="text-sm text-blue-700">
                      Basé sur le niveau d'urgence sélectionné
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting || !formData.urgencyLevel || !formData.problemType || !formData.firstName || !formData.phone}
                loading={isSubmitting}
                iconName={isSubmitting ? "Loader" : "Send"}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer la Demande d\'Urgence'}
              </Button>
              
              <p className="text-sm text-text-muted mt-4">
                En envoyant ce formulaire, vous acceptez d'être contacté par BENG Fermetures pour traiter votre demande d'urgence.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmergencyForm;