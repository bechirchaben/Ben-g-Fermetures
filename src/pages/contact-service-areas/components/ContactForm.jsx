import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    type: 'general',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    subject: '',
    message: '',
    urgency: 'normal',
    preferredContact: 'email',
    preferredTime: '',
    attachments: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inquiryTypes = [
    { id: 'emergency', label: 'Urgence', icon: 'AlertTriangle', color: 'primary' },
    { id: 'quote', label: 'Devis', icon: 'Calculator', color: 'secondary' },
    { id: 'maintenance', label: 'Maintenance', icon: 'Settings', color: 'accent' },
    { id: 'general', label: 'Information', icon: 'MessageCircle', color: 'text-secondary' }
  ];

  const urgencyLevels = [
    { id: 'emergency', label: 'Urgence (< 2h)', color: 'primary' },
    { id: 'high', label: 'Prioritaire (< 24h)', color: 'warning' },
    { id: 'normal', label: 'Normal (< 48h)', color: 'accent' },
    { id: 'low', label: 'Pas pressé (< 1 semaine)', color: 'text-secondary' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_1x1qhqd';
    const templateId = 'template_ctasxqg';
    const userId = 'HctVtpfHyAchE1Plb';

    try {
      await emailjs.send(serviceId, templateId, formData, userId);

      setSubmitStatus('success');
      setFormData({
        type: 'general',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        subject: '',
        message: '',
        urgency: 'normal',
        preferredContact: 'email',
        preferredTime: '',
        attachments: null
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="py-16 bg-surface">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Formulaire de Contact
            </h2>
            <p className="text-xl text-text-secondary">
              Décrivez votre besoin en détail pour une réponse personnalisée et rapide
            </p>
          </div>

          <div className="bg-background rounded-2xl shadow-lg border border-border overflow-hidden">
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Inquiry Type Selection */}
              <div>
                <label className="block text-lg font-semibold text-text-primary mb-4">
                  Type de demande *
                </label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, type: type.id }))}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${formData.type === type.id
                          ? `border-${type.color} bg-${type.color === 'text-secondary' ? 'surface' : type.color}-50`
                          : 'border-border hover:border-surface-300'
                        }`}
                    >
                      <Icon
                        name={type.icon}
                        size={24}
                        className={`mx-auto mb-2 ${formData.type === type.id ? `text-${type.color}` : 'text-text-secondary'
                          }`}
                      />
                      <div className={`font-medium ${formData.type === type.id ? `text-${type.color}` : 'text-text-secondary'
                        }`}>
                        {type.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Prénom *
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Nom *
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Téléphone *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="01 23 45 67 89"
                    required
                  />
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Adresse du projet
                  </label>
                  <Input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Numéro et nom de rue"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Ville
                    </label>
                    <Input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Votre ville"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Code postal
                    </label>
                    <Input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="75000"
                    />
                  </div>
                </div>
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-4">
                  Niveau d'urgence
                </label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {urgencyLevels.map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, urgency: level.id }))}
                      className={`p-3 rounded-lg border-2 text-sm transition-all duration-200 ${formData.urgency === level.id
                          ? `border-${level.color} bg-${level.color === 'text-secondary' ? 'surface' : level.color}-50 text-${level.color}`
                          : 'border-border hover:border-surface-300 text-text-secondary'
                        }`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject and Message */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Sujet *
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Résumé de votre demande"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Message détaillé *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                  placeholder="Décrivez votre projet ou problème en détail..."
                  required
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Pièces jointes (optionnel)
                </label>
                <Input
                  type="file"
                  name="attachments"
                  onChange={handleInputChange}
                  accept="image/*,.pdf,.doc,.docx"
                  multiple
                />
                <p className="text-xs text-text-secondary mt-1">
                  Photos, plans, documents (max 10MB par fichier)
                </p>
              </div>

              {/* Contact Preferences */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Moyen de contact préféré
                  </label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Téléphone</option>
                    <option value="both">Email et téléphone</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Créneau préféré
                  </label>
                  <Input
                    type="text"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    placeholder="Ex: matin, après-midi, soir"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-success-50 border border-success-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-success" />
                      <div>
                        <div className="font-medium text-success">Message envoyé avec succès!</div>
                        <div className="text-sm text-success-700">
                          Nous vous répondrons dans les plus brefs délais selon l'urgence indiquée.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-error-50 border border-error-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="AlertCircle" size={20} className="text-error" />
                      <div>
                        <div className="font-medium text-error">Erreur lors de l'envoi</div>
                        <div className="text-sm text-error-700">
                          Veuillez réessayer ou nous contacter directement par téléphone.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </Button>

                <p className="text-xs text-text-secondary text-center mt-4">
                  En soumettant ce formulaire, vous acceptez que BEN-G Fermetures traite vos données
                  pour répondre à votre demande. Vos informations ne seront jamais partagées avec des tiers.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;