import React from 'react';
import type { CalculationResults } from '../types';
import { FaDrumstickBite, FaHotdog, FaBreadSlice, FaBeer, FaGlassMartiniAlt, FaFireAlt, FaTint } from 'react-icons/fa';

interface ResultsDisplayProps {
  results: CalculationResults | null;
}

const ResultItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
    <div className="flex-shrink-0">{icon}</div>
    <div className="ml-4">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-lg font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
  </div>
);

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8 h-full min-h-[300px] border-2 border-dashed border-gray-300 dark:border-gray-600">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Seu Resultado Aparecerá Aqui</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-center">
          Preencha os campos e clique em "Calcular" para ver as estimativas.
        </p>
      </div>
    );
  }

  const formatGramsToKg = (grams: number) => {
    if (grams < 1000) return `${grams} g`;
    return `${(grams / 1000).toFixed(2)} kg`;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Lista para o Churrasco</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ResultItem
          icon={<FaDrumstickBite className="w-8 h-8 text-red-600" />}
          label="Carne Bovina/Frango"
          value={formatGramsToKg(results.beef)}
        />
        <ResultItem
          icon={<FaHotdog className="w-8 h-8 text-orange-600" />}
          label="Linguiça"
          value={formatGramsToKg(results.sausage)}
        />
        <ResultItem
          icon={<FaBreadSlice className="w-8 h-8 text-yellow-700" />}
          label="Pão de Alho"
          value={`${results.garlicBread} unidades`}
        />
        <ResultItem
          icon={<FaBeer className="w-8 h-8 text-yellow-500" />}
          label="Cerveja"
          value={`${results.beer} latas (350ml)`}
        />
        <ResultItem
          icon={<FaGlassMartiniAlt className="w-8 h-8 text-red-500" />}
          label="Refrigerante"
          value={`${results.soda.toFixed(1)} litros`}
        />
        <ResultItem
          icon={<FaTint className="w-8 h-8 text-blue-400" />}
          label="Água"
          value={`${results.water.toFixed(1)} litros`}
        />
        <ResultItem
          icon={<FaFireAlt className="w-8 h-8 text-gray-600 dark:text-gray-400" />}
          label="Carvão"
          value={`${results.charcoal} kg`}
        />
      </div>
    </div>
  );
};

export default ResultsDisplay;