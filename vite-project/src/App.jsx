import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import LanguageSelector from './components/language-selector';

function App() {
  const { t } = useTranslation();

  const line1 = t('description.line1');
  const line2 = t('description.line2');
  
  console.log(line1, line2);

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t('greeting')}</h1>
      <p>{line1}</p>
      <span>{line2}</span>
    </div>
  );
}

export default App;
