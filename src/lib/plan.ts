export type TripVibe = 'romantic' | 'adventure' | 'relaxed' | 'foodie'
export type BudgetLevel = 'low' | 'mid' | 'high'

export interface PlannerInput {
  destination: string
  vibe: TripVibe
  duration: number
  budget: BudgetLevel
}

export interface DayPlan {
  title: string
  description: string
}

export interface TripBlueprint {
  title: string
  summary: string
  highlights: string[]
  days: DayPlan[]
}

const vibeCopy: Record<TripVibe, { title: string; summary: string; highlights: string[] }> = {
  romantic: {
    title: 'A candlelit escape',
    summary: 'A romantic itinerary with sunset views, intimate dining, and slow luxury.',
    highlights: ['Cliffside suites', 'Private tasting', 'Golden hour boat ride'],
  },
  adventure: {
    title: 'An active frontier',
    summary: 'A high-energy trip built around exploration, movement, and memorable landscapes.',
    highlights: ['Guided hikes', 'Scenic drives', 'Local adventure picks'],
  },
  relaxed: {
    title: 'A restorative reset',
    summary: 'A calm itinerary shaped around wellness, comfort, and unhurried mornings.',
    highlights: ['Spa rituals', 'Slow breakfasts', 'Oceanfront downtime'],
  },
  foodie: {
    title: 'A culinary immersion',
    summary: 'A food-first journey filled with tasting menus, markets, and neighborhood gems.',
    highlights: ['Chef-led dinners', 'Street food crawl', 'Market tastings'],
  },
}

const budgetCopy: Record<BudgetLevel, string> = {
  low: 'budget-conscious',
  mid: 'balanced',
  high: 'luxury-forward',
}

export function buildTripBlueprint(input: PlannerInput): TripBlueprint {
  const base = vibeCopy[input.vibe]
  const dayCount = Math.max(3, Math.min(7, input.duration))
  const dayTemplates = [
    'Arrival & sunset harbor walk',
    'Morning discovery and lunch stop',
    'Afternoon reset and local immersion',
    'Evening tasting or special dinner',
    'Slow start and scenic viewpoint',
    'Market browse and neighborhood favorite',
    'Departure with one final ritual',
  ]

  return {
    title: `${input.destination} • ${base.title}`,
    summary: `${input.destination} becomes a ${base.summary.toLowerCase()} The plan is ${budgetCopy[input.budget]} and curated for ${dayCount} days.`,
    highlights: base.highlights,
    days: dayTemplates.slice(0, dayCount).map((title, index) => ({
      title,
      description: `${input.destination} day ${index + 1} is tuned for ${input.vibe} energy and elegant pacing.`,
    })),
  }
}
