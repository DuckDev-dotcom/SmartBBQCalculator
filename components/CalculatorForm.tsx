import React from 'react';
import type { CalculationInputs } from '../types';
import { FaMale, FaFemale, FaChild, FaBeer, FaGlassMartiniAlt, FaTint, FaCalculator } from 'react-icons/fa';

interface CalculatorFormProps {
  inputs: CalculationInputs;
  setInputs: React.Dispatch<React.SetStateAction<CalculationInputs>>;
  onCalculate: () => void;
}

const NumberInput: React.FC<{
    id: string;
    label: string;
    value: number;
    onChange: (value: number) => void;
    icon: React.ReactNode;
}> = ({ id, label, value, onChange, icon }) => (
    <div>
        <label htmlFor={id} className="flex items-center text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            {icon}
            <span className="ml-2">{label}</span>
        </label>
        <input
            type="number"
            id={id}
            name={id}
            value={value}
            onChange={(e) => onChange(Math.max(0, parseInt(e.target.value, 10) || 0))}
            min="0"
            className="w-full bg-gray-100 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg p-3 text-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition"
        />
    </div>
);

const CheckboxInput: React.FC<{
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    icon: React.ReactNode;
}> = ({ id, label, checked, onChange, icon }) => (
    <label htmlFor={id} className="flex items-center space-x-3 cursor-pointer p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition">
        <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="h-5 w-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
        />
        {icon}
        <span className="text-gray-800 dark:text-gray-200 font-medium">{label}</span>
    </label>
);


const CalculatorForm: React.FC<CalculatorFormProps> = ({ inputs, setInputs, onCalculate }) => {
  const handleInputChange = (field: keyof CalculationInputs, value: number | boolean) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <NumberInput 
            id="men"
            label="Homens"
            value={inputs.men}
            onChange={(val) => handleInputChange('men', val)}
            icon={<FaMale className="w-6 h-6 text-blue-500" />}
        />
        <NumberInput
            id="women"
            label="Mulheres"
            value={inputs.women}
            onChange={(val) => handleInputChange('women', val)}
            icon={<FaFemale className="w-6 h-6 text-pink-500" />}
        />
        <NumberInput
            id="children"
            label="Crianças"
            value={inputs.children}
            onChange={(val) => handleInputChange('children', val)}
            icon={<FaChild className="w-6 h-6 text-yellow-500" />}
        />
      </div>
      
      <div className="space-y-3 pt-4">
         <CheckboxInput
            id="drinksBeer"
            label="Bebem Cerveja?"
            checked={inputs.drinksBeer}
            onChange={(val) => handleInputChange('drinksBeer', val)}
            icon={<FaBeer className="w-6 h-6 text-yellow-600" />}
         />
         <CheckboxInput
            id="drinksSoda"
            label="Bebem Refrigerante?"
            checked={inputs.drinksSoda}
            onChange={(val) => handleInputChange('drinksSoda', val)}
            icon={<FaGlassMartiniAlt className="w-6 h-6 text-red-500" />}
        />
         <CheckboxInput
            id="drinksWater"
            label="Bebem Água?"
            checked={inputs.drinksWater}
            onChange={(val) => handleInputChange('drinksWater', val)}
            icon={<FaTint className="w-6 h-6 text-blue-400" />}
        />
      </div>

      <button
        onClick={onCalculate}
        className="w-full flex items-center justify-center bg-brand-primary hover:bg-green-600 text-white font-bold py-4 px-4 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 shadow-lg"
      >
        CALCULAR
        <FaCalculator className="ml-3" />
      </button>
    </div>
  );
};

export default CalculatorForm;