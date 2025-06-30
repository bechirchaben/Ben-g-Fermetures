import React, { useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import emailjs from 'emailjs-com';

const PhotoUploadSystem = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    Array.from(files).forEach((file, index) => {
      if (file.type.startsWith('image/')) {
        const fileId = Date.now() + index;
        const reader = new FileReader();

        reader.onload = (e) => {
          const newFile = {
            id: fileId,
            file: file,
            preview: e.target.result,
            name: file.name,
            size: file.size,
            uploaded: false
          };

          setUploadedFiles(prev => [...prev, newFile]);
          simulateUpload(fileId);
        };

        reader.readAsDataURL(file);
      }
    });
  };

  const simulateUpload = (fileId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploadedFiles(prev =>
          prev.map(file =>
            file.id === fileId ? { ...file, uploaded: true } : file
          )
        );
        setUploadProgress(prev => ({ ...prev, [fileId]: 100 }));
      } else {
        setUploadProgress(prev => ({ ...prev, [fileId]: Math.floor(progress) }));
      }
    }, 200);
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  const sendPhotosByEmail = async () => {
    const photoListHtml = uploadedFiles.map(file => (
      `<div style="margin-bottom:10px">
      <strong>${file.name}</strong><br/>
      <img src="${file.preview}" alt="${file.name}" style="max-width:300px; border:1px solid #ddd; border-radius:4px"/>
    </div>`
    )).join('');

    try {
      const result = await emailjs.send('service_1x1qhqd', 'template_z2qe2tq', {
        from_name: 'Client',
        photo_list_html: photoListHtml
      }, 'HctVtpfHyAchE1Plb');

      console.log('Email sent:', result.text);
      alert("Photos envoyées par email !");
    } catch (error) {
      console.error('EmailJS error:', error);
      alert("Erreur lors de l'envoi par email.");
    }
  };
  const uploadTips = [
    {
      icon: 'Camera',
      title: 'Photos Claires',
      description: 'Prenez des photos nettes et bien éclairées'
    },
    {
      icon: 'Maximize',
      title: 'Vue d\'Ensemble',
      description: 'Montrez le problème dans son contexte'
    },
    {
      icon: 'Focus',
      title: 'Détails Importants',
      description: 'Zoomez sur les parties endommagées'
    },
    {
      icon: 'Layers',
      title: 'Plusieurs Angles',
      description: 'Photographiez sous différents angles'
    }
  ];

  return (
    <div className="bg-white py-12 lg:py-16" id="photo-upload">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
            Partagez des Photos du Problème
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Aidez-nous à mieux comprendre votre situation en envoyant des photos.
            Cela nous permet de préparer l'intervention et d'apporter les bons outils.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Upload Zone */}
          <div
            className={`relative border-2 border-dashed rounded-xl p-8 lg:p-12 text-center transition-all duration-300 ${dragActive
                ? 'border-primary bg-primary-50 scale-105' : 'border-border hover:border-primary hover:bg-surface'
              }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />

            <div className="flex flex-col items-center space-y-4">
              <div className={`flex items-center justify-center w-16 h-16 rounded-full transition-colors ${dragActive ? 'bg-primary text-white' : 'bg-surface text-text-secondary'
                }`}>
                <Icon name="Upload" size={32} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Glissez vos photos ici
                </h3>
                <p className="text-text-secondary mb-4">
                  ou cliquez pour sélectionner des fichiers
                </p>
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  iconName="Image"
                  iconPosition="left"
                >
                  Choisir des Photos
                </Button>
              </div>

              <div className="text-sm text-text-muted">
                Formats acceptés: JPG, PNG, WEBP • Taille max: 10MB par photo
              </div>
            </div>
          </div>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Photos Téléchargées ({uploadedFiles.length})
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {uploadedFiles.map((file) => (
                  <div key={file.id} className="bg-surface rounded-lg p-4 relative">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
                      <img
                        src={file.preview}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-text-primary truncate">
                          {file.name}
                        </span>
                        <button
                          onClick={() => removeFile(file.id)}
                          className="text-text-muted hover:text-error transition-colors"
                        >
                          <Icon name="X" size={16} />
                        </button>
                      </div>

                      <div className="text-xs text-text-secondary">
                        {formatFileSize(file.size)}
                      </div>

                      {!file.uploaded && (
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-text-secondary">Téléchargement...</span>
                            <span className="text-text-secondary">
                              {uploadProgress[file.id] || 0}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div
                              className="bg-primary h-1 rounded-full transition-all duration-300"
                              style={{ width: `${uploadProgress[file.id] || 0}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {file.uploaded && (
                        <div className="flex items-center space-x-1 text-success">
                          <Icon name="Check" size={14} />
                          <span className="text-xs">Téléchargé</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upload Tips */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-text-primary mb-6 text-center">
              Conseils pour de Meilleures Photos
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {uploadTips.map((tip, index) => (
                <div key={index} className="bg-surface rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg mx-auto mb-3">
                    <Icon name={tip.icon} size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    {tip.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          {uploadedFiles.length > 0 && (
            <div className="mt-8 text-center">
              <div className="bg-success-50 border border-success-100 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center space-x-2 text-success">
                  <Icon name="Check" size={20} />
                  <span className="font-semibold">
                    Photos reçues ! Nos techniciens peuvent maintenant mieux préparer l'intervention.
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.location.href = 'tel:+33782885505'}
                >
                  Appeler Maintenant
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Mail"
                  iconPosition="left"
                  onClick={sendPhotosByEmail}
                >
                  Envoyer par Email
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoUploadSystem;