import React, { useState } from 'react';

// Page de Connexion
const LoginPage = ({ onNavigateToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', formData);
    // Logique de connexion ici
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f9fafb', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '1rem', 
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '28rem',
        padding: '2rem'
      }}>
        {/* Icon */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ 
            backgroundColor: '#2d8a4f', 
            borderRadius: '50%', 
            padding: '1rem'
          }}>
            <span style={{ color: 'white', fontSize: '1.5rem' }}>🏠</span>
          </div>
        </div>

        {/* Title */}
        <h1 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          color: '#1f2937',
          marginBottom: '0.5rem'
        }}>
          Connexion
        </h1>
        <p style={{ 
          textAlign: 'center', 
          color: '#6b7280',
          marginBottom: '2rem'
        }}>
          Connectez-vous pour publier une annonce
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Email */}
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.875rem', 
              fontWeight: '500', 
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Email
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{ 
                position: 'absolute', 
                left: '0.75rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#9ca3af'
              }}>📧</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                style={{ 
                  width: '90%',
                  paddingLeft: '2.5rem',
                  paddingRight: '1rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  outline: 'none'
                }}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.875rem', 
              fontWeight: '500', 
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Mot de passe
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{ 
                position: 'absolute', 
                left: '0.75rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#9ca3af'
              }}>🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                style={{ 
                  width: '83%',
                  paddingLeft: '2.5rem',
                  paddingRight: '3rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  outline: 'none'
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ 
                  position: 'absolute', 
                  right: '0.75rem', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#9ca3af',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Remember me & Forgot password */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                style={{ 
                  width: '1rem',
                  height: '1rem',
                  color: '#2d8a4f',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.25rem'
                }}
              />
              <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
                Se souvenir de moi
              </span>
            </label>
            <a href="#" style={{ fontSize: '0.875rem', color: '#2d8a4f' }}>
              Mot de passe oublié?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{ 
              width: '100%',
              backgroundColor: '#2d8a4f',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Se connecter
          </button>
        </form>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0' }}>
          <div style={{ flex: '1', borderTop: '1px solid #d1d5db' }}></div>
          <span style={{ padding: '0 1rem', fontSize: '0.875rem', color: '#6b7280' }}>ou</span>
          <div style={{ flex: '1', borderTop: '1px solid #d1d5db' }}></div>
        </div>

        {/* Social Login */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button 
          onClick={() => { window.location.href = "https://www.google.com";}}
          style={{ 
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '0.5rem',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}>
            <span>🔍</span>
            <span style={{ color: '#374151', fontWeight: '500' }}>Continuer avec Google</span>
          </button>

          <button 
           onClick={() => { window.location.href = "https://www.facebook.com"; }}
          style={{ 
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '0.5rem',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}>
            <span style={{ color: '#1877F2' }}>f</span>
            <span style={{ color: '#374151', fontWeight: '500' }}>Continuer avec Facebook</span>
          </button>
        </div>

        {/* Sign up link */}
        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#4b5563' }}>
          Vous n'avez pas de compte?{' '}
          <button
            onClick={onNavigateToSignup}
            style={{ 
              color: '#2d8a4f',
              fontWeight: '500',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Créer un compte
          </button>
        </p>
      </div>
    </div>
  );
};

// Page d'Inscription
const SignupPage = ({ onNavigateToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    acceptTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert('Veuillez accepter les conditions d\'utilisation');
      return;
    }
    console.log('Signup:', formData);
    // Logique d'inscription ici
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f9fafb', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '1rem', 
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '28rem',
        padding: '2rem'
      }}>
        {/* Icon */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ 
            backgroundColor: '#2d8a4f', 
            borderRadius: '50%', 
            padding: '1rem'
          }}>
            <span style={{ color: 'white', fontSize: '1.5rem' }}>👤</span>
          </div>
        </div>

        {/* Title */}
        <h1 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          color: '#1f2937',
          marginBottom: '0.5rem'
        }}>
          Créer un compte
        </h1>
        <p style={{ 
          textAlign: 'center', 
          color: '#6b7280',
          marginBottom: '2rem'
        }}>
          Rejoignez-nous dès aujourd'hui
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Name fields */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '0.875rem', 
                fontWeight: '500', 
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Prénom
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ 
                  position: 'absolute', 
                  left: '0.75rem', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#2d8a4f'
                }}>👤</span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  style={{ 
                    width: '70%',
                    paddingLeft: '2.5rem',
                    paddingRight: '1rem',
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    outline: 'none'
                  }}
                  required
                />
              </div>
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '0.875rem', 
                fontWeight: '500', 
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Nom
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ 
                  position: 'absolute', 
                  left: '0.75rem', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#2d8a4f'
                }}>👤</span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  style={{ 
                    width: '70%',
                    paddingLeft: '2.5rem',
                    paddingRight: '1rem',
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    outline: 'none'
                  }}
                  required
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.875rem', 
              fontWeight: '500', 
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Adresse email
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{ 
                position: 'absolute', 
                left: '0.75rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#2d8a4f'
              }}>📧</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                style={{ 
                  width: '90%',
                  paddingLeft: '2.5rem',
                  paddingRight: '1rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  outline: 'none'
                }}
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.875rem', 
              fontWeight: '500', 
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Téléphone
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{ 
                position: 'absolute', 
                left: '0.75rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#2d8a4f'
              }}>📞</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+33 6 12 34 56 78"
                style={{ 
                  width: '90%',
                  paddingLeft: '2.5rem',
                  paddingRight: '1rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  outline: 'none'
                }}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.875rem', 
              fontWeight: '500', 
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Mot de passe
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{ 
                position: 'absolute', 
                left: '0.75rem', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#2d8a4f'
              }}>🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Votre mot de passe"
                style={{ 
                  width: '83%',
                  paddingLeft: '2.5rem',
                  paddingRight: '3rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  outline: 'none'
                }}
                required
                minLength={8}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ 
                  position: 'absolute', 
                  right: '0.75rem', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#9ca3af',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
              Minimum 8 caractères
            </p>
          </div>

          {/* Terms */}
          <div>
            <label style={{ display: 'flex', alignItems: 'flex-start' }}>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                style={{ 
                  width: '1rem',
                  height: '1rem',
                  marginTop: '0.25rem',
                  color: '#2d8a4f',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.25rem'
                }}
                required
              />
              <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
                J'accepte les{' '}
                <a href="#" style={{ color: '#2d8a4f' }}>
                  conditions d'utilisation
                </a>
                {' '}et la{' '}
                <a href="#" style={{ color: '#2d8a4f' }}>
                  politique de confidentialité
                </a>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{ 
              width: '100%',
              backgroundColor: '#2d8a4f',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            <span>👤</span>
            Créer mon compte
          </button>
        </form>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0' }}>
          <div style={{ flex: '1', borderTop: '1px solid #d1d5db' }}></div>
          <span style={{ padding: '0 1rem', fontSize: '0.875rem', color: '#6b7280' }}>ou</span>
          <div style={{ flex: '1', borderTop: '1px solid #d1d5db' }}></div>
        </div>

        {/* Social Signup */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button 
           onClick={() => { window.location.href = "https://www.google.com";}}
          style={{ 
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '0.5rem',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}>
            <span>🔍</span>
            <span style={{ color: '#374151', fontWeight: '500' }}>Continuer avec Google</span>
          </button>

          <button 
          onClick={() => { window.location.href = "https://www.facebook.com"; }}
          style={{ 
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '0.5rem',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}>
            <span style={{ color: '#1877F2' }}>f</span>
            <span style={{ color: '#374151', fontWeight: '500' }}>Continuer avec Facebook</span>
          </button>
        </div>

        {/* Login link */}
        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#4b5563' }}>
          Vous avez déjà un compte?{' '}
          <button
            onClick={onNavigateToLogin}
            style={{ 
              color: '#2d8a4f',
              fontWeight: '500',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Se connecter
          </button>
        </p>
      </div>
    </div>
  );
};

// Composant principal d'authentification
function Auth() {
  const [currentPage, setCurrentPage] = useState('login'); // 'login' ou 'signup'

  return (
    <div>
      {currentPage === 'login' ? (
        <LoginPage onNavigateToSignup={() => setCurrentPage('signup')} />
      ) : (
        <SignupPage onNavigateToLogin={() => setCurrentPage('login')} />
      )}
    </div>
  );
}

export default Auth;