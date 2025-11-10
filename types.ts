export interface CalculationInputs {
  men: number;
  women: number;
  children: number;
  drinksBeer: boolean;
  drinksSoda: boolean;
  drinksWater: boolean;
}

export interface CalculationResults {
  beef: number;
  sausage: number;
  garlicBread: number;
  beer: number;
  soda: number;
  water: number;
  charcoal: number;
}

export interface CalculationRates {
  beef: { man: number; woman: number; child: number };
  sausage: { man: number; woman: number; child: number };
  garlicBread: { man: number; woman: number; child: number };
  beer: { man: number; woman: number };
  soda: { man: number; woman: number; child: number };
  water: { man: number; woman: number; child: number };
  charcoal: { kgPerKgMeat: number };
}
