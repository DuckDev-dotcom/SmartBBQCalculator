import React, { useState } from 'react';
import type { CalculationRates } from '../types';
import { CALCULATION_RATES } from '../constants';
import { FaSave, FaSyncAlt, FaTimes } from 'react-icons/fa';

interface SettingsFormProps {
  currentRates: CalculationRates;
  onSave: (newRates: CalculationRates) => void;
  onClose: () => void;
}

const SettingsInput: React.FC<{
    label: string;
    value: number;
    onChange: (value: number) => void;
    unit: string;
}> = ({ label, value, onChange, unit }) => (
    <div className="flex items-center justify-between">
        <label className="text-gray-600 dark:text-gray-400">{label}</label>
        <div className="flex items-center space-x-2">
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                className="w-24 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-1.5 text-right focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
            />
            <span className="text-sm text-gray-500 w-10">{unit}</span>
        </div>
    </div>
);

const SettingsCategory: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">{title}</h4>
        <div className="space-y-3">
            {children}
        </div>
    </div>
);

const SettingsForm: React.FC<SettingsFormProps> = ({ currentRates, onSave, onClose }) => {
    const [rates, setRates] = useState(currentRates);

    const handleRateChange = (category: keyof CalculationRates, key: string, value: number) => {
        setRates(prev => ({
            ...prev,
            [category]: {
                ...(prev[category] as any),
                [key]: value
            }
        }));
    };

    const handleSave = () => {
        onSave(rates);
    };

    const handleReset = () => {
        setRates(CALCULATION_RATES);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-gray-50 dark:bg-gray-900/95 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Ajustar Valores de Cálculo</h3>
                <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition">
                    <FaTimes className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <SettingsCategory title="Carne Bovina">
                      <SettingsInput label="Homem" value={rates.beef.man} onChange={v => handleRateChange('beef', 'man', v)} unit="g" />
                      <SettingsInput label="Mulher" value={rates.beef.woman} onChange={v => handleRateChange('beef', 'woman', v)} unit="g" />
                      <SettingsInput label="Criança" value={rates.beef.child} onChange={v => handleRateChange('beef', 'child', v)} unit="g" />
                  </SettingsCategory>
                  <SettingsCategory title="Linguiça">
                      <SettingsInput label="Homem" value={rates.sausage.man} onChange={v => handleRateChange('sausage', 'man', v)} unit="g" />
                      <SettingsInput label="Mulher" value={rates.sausage.woman} onChange={v => handleRateChange('sausage', 'woman', v)} unit="g" />
                      <SettingsInput label="Criança" value={rates.sausage.child} onChange={v => handleRateChange('sausage', 'child', v)} unit="g" />
                  </SettingsCategory>
                  <SettingsCategory title="Pão de Alho">
                      <SettingsInput label="Homem" value={rates.garlicBread.man} onChange={v => handleRateChange('garlicBread', 'man', v)} unit="unid." />
                      <SettingsInput label="Mulher" value={rates.garlicBread.woman} onChange={v => handleRateChange('garlicBread', 'woman', v)} unit="unid." />
                      <SettingsInput label="Criança" value={rates.garlicBread.child} onChange={v => handleRateChange('garlicBread', 'child', v)} unit="unid." />
                  </SettingsCategory>
                  <SettingsCategory title="Cerveja">
                      <SettingsInput label="Homem" value={rates.beer.man} onChange={v => handleRateChange('beer', 'man', v)} unit="latas" />
                      <SettingsInput label="Mulher" value={rates.beer.woman} onChange={v => handleRateChange('beer', 'woman', v)} unit="latas" />
                  </SettingsCategory>
                  <SettingsCategory title="Refrigerante">
                      <SettingsInput label="Homem" value={rates.soda.man} onChange={v => handleRateChange('soda', 'man', v)} unit="L" />
                      <SettingsInput label="Mulher" value={rates.soda.woman} onChange={v => handleRateChange('soda', 'woman', v)} unit="L" />
                      <SettingsInput label="Criança" value={rates.soda.child} onChange={v => handleRateChange('soda', 'child', v)} unit="L" />
                  </SettingsCategory>
                   <SettingsCategory title="Água">
                      <SettingsInput label="Homem" value={rates.water.man} onChange={v => handleRateChange('water', 'man', v)} unit="L" />
                      <SettingsInput label="Mulher" value={rates.water.woman} onChange={v => handleRateChange('water', 'woman', v)} unit="L" />
                      <SettingsInput label="Criança" value={rates.water.child} onChange={v => handleRateChange('water', 'child', v)} unit="L" />
                  </SettingsCategory>
                  <div className="md:col-span-2 lg:col-span-3">
                      <SettingsCategory title="Carvão">
                          <SettingsInput label="kg por kg de carne" value={rates.charcoal.kgPerKgMeat} onChange={v => handleRateChange('charcoal', 'kgPerKgMeat', v)} unit="kg" />
                      </SettingsCategory>
                  </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
                  <button onClick={handleReset} className="flex items-center justify-center px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition">
                      <FaSyncAlt className="w-5 h-5 mr-2" />
                      Redefinir Padrões
                  </button>
                  <button onClick={handleSave} className="flex items-center justify-center px-4 py-2 bg-brand-secondary hover:bg-orange-600 text-white font-bold rounded-lg transition">
                      <FaSave className="w-5 h-5 mr-2" />
                      Salvar e Fechar
                  </button>
              </div>
          </div>
        </div>
    );
};

export default SettingsForm;