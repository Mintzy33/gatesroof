// Aggregates Census + FEMA data for a given city slug
// Used by neighborhood pages to inject real, unique data

import censusData from "./census-zips.json";
import femaData from "./fema-counties.json";
import { cityCountyMap } from "./city-counties";
import { cityZipMap } from "./city-zips";

const census = censusData as unknown as Record<
  string,
  {
    medianYearBuilt?: number | null;
    medianHomeValue?: number | null;
    ownerOccupied?: number | null;
    renterOccupied?: number | null;
    population?: number | null;
  }
>;

const fema = femaData as unknown as Record<
  string,
  { hailRiskRating?: string; hailRiskScore?: number }
>;

export interface CityData {
  county: string | undefined;
  zips: string[];
  medianYearBuilt: number | null;
  medianHomeValue: number | null;
  population: number;
  ownerOccupied: number;
  renterOccupied: number;
  hailRiskRating: string | null;
  hailRiskScore: number | null;
}

export function getCityData(citySlug: string): CityData {
  const county = cityCountyMap[citySlug];
  const zips = cityZipMap[citySlug] || [];

  let yearSum = 0;
  let valueSum = 0;
  let totalPop = 0;
  let totalOwner = 0;
  let totalRenter = 0;
  let countYear = 0;
  let countValue = 0;

  for (const zip of zips) {
    const d = census[zip];
    if (!d) continue;
    if (d.medianYearBuilt) {
      yearSum += d.medianYearBuilt;
      countYear++;
    }
    if (d.medianHomeValue) {
      valueSum += d.medianHomeValue;
      countValue++;
    }
    if (d.population) totalPop += d.population;
    if (d.ownerOccupied) totalOwner += d.ownerOccupied;
    if (d.renterOccupied) totalRenter += d.renterOccupied;
  }

  const femaEntry = county ? fema[county] : undefined;

  return {
    county,
    zips,
    medianYearBuilt: countYear > 0 ? Math.round(yearSum / countYear) : null,
    medianHomeValue: countValue > 0 ? Math.round(valueSum / countValue) : null,
    population: totalPop,
    ownerOccupied: totalOwner,
    renterOccupied: totalRenter,
    hailRiskRating: femaEntry?.hailRiskRating ?? null,
    hailRiskScore: femaEntry?.hailRiskScore ?? null,
  };
}

// Determine housing era bucket from median year built
export type HousingEra = "historic" | "established" | "modern" | "new";

export function getHousingEra(medianYearBuilt: number | null): HousingEra {
  if (!medianYearBuilt || medianYearBuilt < 1960) return "historic";
  if (medianYearBuilt < 1990) return "established";
  if (medianYearBuilt < 2010) return "modern";
  return "new";
}

// Determine home value tier
export type ValueTier = "entry" | "mid" | "premium";

export function getValueTier(medianHomeValue: number | null): ValueTier {
  if (!medianHomeValue || medianHomeValue < 400000) return "entry";
  if (medianHomeValue < 700000) return "mid";
  return "premium";
}

// Determine hail risk level
export type HailLevel = "moderate" | "high" | "very-high";

export function getHailLevel(rating: string | null): HailLevel {
  if (!rating) return "moderate";
  const lower = rating.toLowerCase();
  if (lower.includes("very high")) return "very-high";
  if (lower.includes("high")) return "high";
  return "moderate";
}

// Format dollar amount
export function formatDollars(value: number): string {
  return "$" + value.toLocaleString("en-US");
}

// Format population with commas
export function formatPopulation(pop: number): string {
  return pop.toLocaleString("en-US");
}
