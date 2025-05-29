
// Mortality Rate Table (per ₹1,000 SA)
const MORTALITY_RATES = {
  0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0,
  7: 0.72, 8: 0.72, 9: 0.75, 10: 0.77, 11: 0.85, 12: 0.96,
  13: 1.02, 14: 1.08, 15: 1.13, 16: 1.17, 17: 1.22, 18: 1.26,
  19: 1.29, 20: 1.33, 21: 1.35, 22: 1.38, 23: 1.4, 24: 1.42,
  25: 1.43, 26: 1.45, 27: 1.45, 28: 1.46, 29: 1.46, 30: 1.46,
  31: 1.49, 32: 1.53, 33: 1.59, 34: 1.66, 35: 1.75, 36: 1.86,
  37: 1.98, 38: 2.12, 39: 2.3, 40: 2.48, 41: 2.65, 42: 2.82,
  43: 3.04, 44: 3.31, 45: 3.62, 46: 3.98, 47: 4.39, 48: 4.85,
  49: 5.35, 50: 5.91, 51: 6.51, 52: 7.15, 53: 7.85, 54: 8.6,
  55: 9.39, 56: 10.23, 57: 10.93, 58: 11.83, 59: 12.93,
  60: 14.21, 61: 15.69, 62: 17.37, 63: 19.25, 64: 21.32,
  65: 22.42, 66: 25.3, 67: 28.51, 68: 32.09, 69: 36.08,
  70: 40.51, 71: 45.44, 72: 50.92, 73: 57.00, 74: 63.75,
  75: 71.25, 76: 79.58, 77: 88.81, 78: 99.06, 79: 110.44,
  80: 123.07, 81: 137.10, 82: 152.68, 83: 168.04, 84: 182.77,
  85: 198.73, 86: 216.02, 87: 234.76, 88: 255.06, 89: 277.03,
  90: 300.83, 91: 326.58, 92: 354.45, 93: 384.6, 94: 417.21,
  95: 452.46, 96: 490.56, 97: 531.72, 98: 576.18, 99: 623.3
};

// Provider-specific values
const PROVIDERS = {
  "ICICI Prudential": { B: 1.20, R: 0.005 },
  "HDFC Life": { B: 1.15, R: 0.006 },
  "Max Life": { B: 1.10, R: 0.007 },
  "SBI Life": { B: 1.25, R: 0.004 },
  "LIC": { B: 1.30, R: 0.0035 }
};

export interface PremiumResult {
  provider: string;
  annualPremium: number;
  monthlyPremium: number;
}

export function calculatePremiums(
  age: number, 
  gender: "male" | "female", 
  sumAssured: number, 
  termYears: number, 
  isSmoker: boolean
): PremiumResult[] {
  const MR = MORTALITY_RATES[age as keyof typeof MORTALITY_RATES] || 0;
  const S = isSmoker ? 1.2 : 1.0; // 20% loading for smokers

  const results: PremiumResult[] = [];

  for (const [provider, { B, R }] of Object.entries(PROVIDERS)) {
    const F = B * (1 + termYears * R);
    const annualPremium = sumAssured * (MR / 1000) * F * S;
    const monthlyPremium = annualPremium / 12;

    results.push({
      provider,
      annualPremium: Math.round(annualPremium),
      monthlyPremium: Math.round(monthlyPremium)
    });
  }

  // Sort by annual premium (lowest first)
  return results.sort((a, b) => a.annualPremium - b.annualPremium);
}
