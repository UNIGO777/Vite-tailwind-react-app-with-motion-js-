import React, { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};

export const ContactProvider = ({ children }) => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const openContactPopup = () => {
    setIsContactPopupOpen(true);
  };

  const closeContactPopup = () => {
    setIsContactPopupOpen(false);
  };

  const value = {
    isContactPopupOpen,
    openContactPopup,
    closeContactPopup
  };

  return (
    <ContactContext.Provider value={value}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;