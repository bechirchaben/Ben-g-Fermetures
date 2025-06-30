import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import emailjs from 'emailjs-com';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', problem: '', withTech: '' });
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const quickProblems = [
    'Volet roulant bloqué',
    'Porte ne s\'ouvre plus',
    'Problème de serrure',
    'Portail automatique en panne',
    'Dégâts suite à tempête'
  ];

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages]);

  useEffect(() => {
    if (step === 0) {
      addBotMessage("Bonjour ! Je suis là pour vous aider avec votre urgence. Quel est votre prénom ?");
    }
  }, [step]);

  const addBotMessage = (msg) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      sender: 'bot',
      message: msg,
      timestamp: new Date()
    }]);
  };

  const handleUserInput = (text) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), sender: 'user', message: text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setNewMessage('');

    setTimeout(() => handleBotStep(text), 500);
  };

  const handleBotStep = (input) => {
    const update = (key, value, nextStep, nextQuestion) => {
      setForm(prev => ({ ...prev, [key]: value }));
      setStep(nextStep);
      addBotMessage(nextQuestion);
    };

    switch (step) {
      case 0:
        update('firstName', input, 1, 'Merci ! Et votre nom ?');
        break;
      case 1:
        update('lastName', input, 2, 'Parfait. Quel est votre numéro de téléphone ?');
        break;
      case 2:
        const phone = input.replace(/\s/g, '');
        if (!/^\d{10,}$/.test(phone)) {
          addBotMessage("Le numéro n'est pas valide. Veuillez saisir un numéro à 10 chiffres minimum.");
          return;
        }
        update('phone', phone, 3, 'Quel est le type de problème ? Choisissez une option ci-dessous :');
        break;
      case 4:
        const response = input.trim().toLowerCase();
        if (response === 'oui') {
          update('withTech', response, 5, 'Merci pour votre confirmation. Nous traitons votre demande.');
          sendFinalData();
        } else if (response === 'non') {
          setForm(prev => ({ ...prev, withTech: response }));
          setStep(6);
          addBotMessage("Souhaitez-vous que je vous propose une solution rapide adaptée à votre problème ? (Oui / Non)");
        } else {
          addBotMessage("Merci de répondre par Oui ou Non. Souhaitez-vous être mis en relation avec un technicien ?");
        }
        break;
      case 6:
        const followUp = input.trim().toLowerCase();
        if (followUp === 'oui') {
          addBotMessage("✅ Voici une solution rapide : essayez de couper le courant 10 secondes et relancer le mécanisme. Si le problème persiste, un technicien est nécessaire.");
          setStep(7);
        } else if (followUp === 'non') {
          addBotMessage("Nous vous conseillons de nous appeler ou de remplir le formulaire détaillé pour mieux cibler votre problème.");
          setStep(7);
        } else {
          addBotMessage("Merci de répondre par Oui ou Non. Souhaitez-vous une solution rapide adaptée ?");
        }
        break;
      default:
        break;
    }
  };

  const handleProblemChoice = (problem) => {
    setForm(prev => ({ ...prev, problem }));
    setStep(4);
    addBotMessage("Souhaitez-vous être mis en relation avec un technicien ? (Oui / Non)");
  };

  const sendFinalData = () => {
    const templateParams = {
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      problemType: form.problem,
      urgencyLevel: form.withTech.toLowerCase() === 'oui' ? 'Élevée' : 'Normale'
    };

    emailjs.send('service_hjfwk5v', 'template_jv4w8bf', templateParams, 'GjWZ52696UoSA17uw')
      .then(() => {
        addBotMessage(`✅ Merci ${form.firstName}, votre demande a été envoyée avec succès ! Un technicien vous contactera rapidement.`);
      })
      .catch(() => {
        addBotMessage(`❌ Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous appeler directement.`);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleUserInput(newMessage);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-primary text-white rounded-full shadow-lg flex items-center justify-center">
          <Icon name={isOpen ? "X" : "MessageCircle"} size={24} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-xl shadow-lg border flex flex-col z-50">
          <div className="bg-primary text-white p-4 rounded-t-xl">Chat Urgence BEN-G</div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`text-sm ${msg.sender === 'user' ? 'text-right text-primary' : 'text-left'}`}>
                <div className="inline-block px-3 py-2 bg-gray-100 rounded-lg">{msg.message}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {step === 3 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickProblems.map((item, idx) => (
                <button key={idx} onClick={() => handleProblemChoice(item)} className="px-3 py-1 bg-surface rounded-full text-xs">
                  {item}
                </button>
              ))}
            </div>
          )}

          {step !== 3 && step < 7 && (
            <div className="p-4 border-t flex space-x-2">
              <Input
                placeholder="Écrivez ici..."
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1"
              />
              <Button onClick={() => handleUserInput(newMessage)} iconName="Send" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;
