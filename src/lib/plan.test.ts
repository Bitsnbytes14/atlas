import { describe, expect, it } from 'vitest'
import { buildTripBlueprint } from './plan'

describe('buildTripBlueprint', () => {
  it('creates a premium itinerary from planner inputs', () => {
    const result = buildTripBlueprint({
      destination: 'Santorini',
      vibe: 'romantic',
      duration: 5,
      budget: 'mid',
    })

    expect(result.title).toContain('Santorini')
    expect(result.summary).toContain('romantic')
    expect(result.highlights).toHaveLength(3)
    expect(result.days[0].title).toBe('Arrival & sunset harbor walk')
  })
})
