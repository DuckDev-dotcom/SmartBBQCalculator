import type { CalculationRates } from './types';

export const CALCULATION_RATES: CalculationRates = {
  beef: {
    man: 400,   // grams
    woman: 300, // grams
    child: 200, // grams
  },
  sausage: {
    man: 200,   // grams
    woman: 150, // grams
    child: 100, // grams
  },
  garlicBread: {
    man: 2,     // units
    woman: 1,   // unit
    child: 1,   // unit
  },
  beer: {
    man: 4,     // 350ml cans
    woman: 2,   // 350ml cans
  },
  soda: {
    man: 1,     // liters
    woman: 1,   // liters
    child: 0.5, // liters
  },
  water: {
    man: 1,     // liters
    woman: 1,   // liters
    child: 0.5, // liters
  },
  charcoal: {
    kgPerKgMeat: 3.5, // 1kg of charcoal for every 3.5kg of meat
  }
};
