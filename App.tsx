import React, { useState, useCallback } from 'react';
import { FaFire, FaCog } from 'react-icons/fa';
import { CALCULATION_RATES } from './constants';
import type { CalculationInputs, CalculationResults, CalculationRates } from './types';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import SettingsForm from './components/SettingsForm';

const App: React.FC = () => {
  const [inputs, setInputs] = useState<CalculationInputs>({
    men: 2,
    women: 2,
    children: 1,
    drinksBeer: true,
    drinksSoda: true,
    drinksWater: true,
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  const [rates, setRates] = useState<CalculationRates>(() => {
    try {
      const savedRates = localStorage.getItem('bbqRates');
      return savedRates ? JSON.parse(savedRates) : CALCULATION_RATES;
    } catch (error) {
      console.error("Failed to parse rates from localStorage", error);
      return CALCULATION_RATES;
    }
  });

  const handleSaveSettings = (newRates: CalculationRates) => {
    setRates(newRates);
    try {
      localStorage.setItem('bbqRates', JSON.stringify(newRates));
    } catch (error) {
       console.error("Failed to save rates to localStorage", error);
    }
    setShowSettings(false);
  };


  const handleCalculate = useCallback(() => {
    const { men, women, children, drinksBeer, drinksSoda, drinksWater } = inputs;

    const totalMeat = 
      (men * rates.beef.man) + (women * rates.beef.woman) + (children * rates.beef.child) +
      (men * rates.sausage.man) + (women * rates.sausage.woman) + (children * rates.sausage.child);

    const calculatedResults: CalculationResults = {
      beef: (men * rates.beef.man) + (women * rates.beef.woman) + (children * rates.beef.child),
      sausage: (men * rates.sausage.man) + (women * rates.sausage.woman) + (children * rates.sausage.child),
      garlicBread: (men * rates.garlicBread.man) + (women * rates.garlicBread.woman) + (children * rates.garlicBread.child),
      beer: drinksBeer ? (men * rates.beer.man) + (women * rates.beer.woman) : 0,
      soda: drinksSoda ? (men * rates.soda.man) + (women * rates.soda.woman) + (children * rates.soda.child) : 0,
      water: drinksWater ? (men * rates.water.man) + (women * rates.water.woman) + (children * rates.water.child) : 0,
      charcoal: Math.ceil(totalMeat / 1000 / rates.charcoal.kgPerKgMeat),
    };

    setResults(calculatedResults);
  }, [inputs, rates]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 font-sans">
      <main className="w-full max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="text-center mb-8 relative">
               <div className="flex justify-center items-center gap-3">
                 <FaFire className="w-10 h-10 text-brand-secondary" />
                 <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white tracking-tight">
                    Calculadora de Churrasco
                 </h1>
                 <FaFire className="w-10 h-10 text-brand-secondary" />
               </div>
               <p className="mt-2 text-gray-500 dark:text-gray-400">
                Planeje seu churrasco com a quantidade certa de comida e bebida!
               </p>
               <button
                onClick={() => setShowSettings(!showSettings)}
                className="absolute top-0 right-0 p-2 text-gray-500 hover:text-brand-primary dark:hover:text-brand-primary transition duration-300"
                aria-label="Ajustar configurações"
               >
                <FaCog className="w-7 h-7" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <CalculatorForm 
                inputs={inputs}
                setInputs={setInputs}
                onCalculate={handleCalculate}
              />
              <ResultsDisplay results={results} />
            </div>

            {showSettings && (
              <SettingsForm
                currentRates={rates}
                onSave={handleSaveSettings}
                onClose={() => setShowSettings(false)}
              />
            )}
          </div>
        </div>
        <footer className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Smart BBQ Calculator. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;