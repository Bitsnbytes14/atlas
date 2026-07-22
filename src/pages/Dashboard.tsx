import { useState } from 'react'
import type { Trip } from '../types/trip'

const sampleTrip = {
  id: 'trip-japan-family',
  title: 'Japan Luxury Family Escape',
  slug: 'japan-luxury-family-escape',
  travelerId: 'traveler-1',
  createdAt: '2026-07-22',
  updatedAt: '2026-07-22',
  status: 'generated',
  destination: {
    id: 'dest-japan',
    name: 'Japan',
    country: 'Japan',
    region: 'Honshu',
    latitude: 35.6764,
    longitude: 139.6503,
    timezone: 'Asia/Tokyo',
    climateSummary: 'Gentle spring mornings with warm evenings.',
    bestSeason: ['Spring', 'Autumn'],
    description: 'A layered journey of temples, quiet luxury, and coastal light.',
  },
  traveler: {
    id: 'traveler-1',
    name: 'Mina',
    email: 'mina@example.com',
    preferences: {
      travelStyle: ['luxury', 'family', 'slow'],
      pace: 'relaxed',
      budgetRange: 'luxury',
      interests: ['culture', 'food', 'nature'],
    },
  },
  overview: {
    summary: 'An elegant seven-day escape paced for family time and thoughtful discovery.',
    vibe: 'Soft luxury, calm pacing, warm hospitality',
    durationDays: 7,
    startDate: '2026-09-12',
    endDate: '2026-09-19',
  },
  itinerary: [
    {
      id: 'day-1',
      dayNumber: 1,
      date: '2026-09-12',
      title: 'Arrival',
      summary: 'A gentle landing in Kyoto with garden views and a long welcome dinner.',
      activities: [
        { id: 'a-1', title: 'Private transfer', description: 'Arrive through a quiet garden gate and settle into a pavilion-style suite.', category: 'wellness', location: 'Kyoto', priority: 'must' },
        { id: 'a-2', title: 'Tea ceremony', description: 'An intimate ceremony held in a heritage home before dusk.', category: 'culture', location: 'Gion', priority: 'must' },
      ],
    },
    {
      id: 'day-2',
      dayNumber: 2,
      date: '2026-09-13',
      title: 'Kyoto',
      summary: 'Temple mornings, quiet lanes, and a riverside supper under lantern light.',
      activities: [
        { id: 'a-3', title: 'Morning temple visit', description: 'An early start to experience the gardens before the crowds arrive.', category: 'culture', location: 'Kiyomizu-dera', priority: 'must' },
        { id: 'a-4', title: 'Hidden cafés', description: 'A slow coffee stop tucked behind old wooden storefronts.', category: 'food', location: 'Higashiyama', priority: 'nice-to-have' },
      ],
    },
    {
      id: 'day-3',
      dayNumber: 3,
      date: '2026-09-14',
      title: 'Hidden Cafés',
      summary: 'An unhurried day shaped around neighborhood walks and exceptional meals.',
      activities: [
        { id: 'a-5', title: 'Market breakfast', description: 'Fresh pastries and seasonal fruit served in a sunlit courtyard.', category: 'food', location: 'Nishiki', priority: 'must' },
        { id: 'a-6', title: 'Design shop browsing', description: 'A gentle afternoon discovering small ateliers and crafted objects.', category: 'shopping', location: 'Nakagyo', priority: 'nice-to-have' },
      ],
    },
    {
      id: 'day-4',
      dayNumber: 4,
      date: '2026-09-15',
      title: 'Mount Fuji',
      summary: 'A cinematic day framed by mountain views and a private lakeside dinner.',
      activities: [
        { id: 'a-7', title: 'Lake cruise', description: 'A calm boat crossing with views of the mountain reflected in the water.', category: 'nature', location: 'Lake Kawaguchi', priority: 'must' },
      ],
    },
    {
      id: 'day-5',
      dayNumber: 5,
      date: '2026-09-16',
      title: 'Tokyo Nights',
      summary: 'The city opens after dusk with rooftop light, jazz, and late-night bites.',
      activities: [
        { id: 'a-8', title: 'Rooftop dinner', description: 'A candlelit dinner above the city skyline with a private terrace.', category: 'nightlife', location: 'Shibuya', priority: 'must' },
      ],
    },
  ],
  hotel: {
    id: 'hotel-1',
    name: 'Garden Residence',
    propertyType: 'boutique',
    neighborhood: 'Kyoto',
    checkIn: '15:00',
    checkOut: '12:00',
    rating: 4.9,
    pricePerNight: 420000,
    amenities: ['private garden', 'concierge', 'spa'],
  },
  restaurants: [
    { id: 'rest-1', name: 'Hana No Mai', cuisine: 'Omakase', neighborhood: 'Gion', rating: 4.9, priceLevel: 'luxury', reservationRequired: true, notes: 'Best for a quiet celebratory dinner.' },
    { id: 'rest-2', name: 'Kumo', cuisine: 'Modern Japanese', neighborhood: 'Shibuya', rating: 4.7, priceLevel: 'luxury', reservationRequired: true, notes: 'Warm lighting and a refined tasting menu.' },
  ],
  budget: {
    id: 'budget-1',
    currency: 'JPY',
    totalBudget: 2400000,
    estimatedSpend: 2200000,
    categories: { lodging: 900000, food: 350000, activities: 400000, transportation: 250000, misc: 150000 },
  },
  weather: [
    { id: 'weather-1', destinationId: 'dest-japan', date: '2026-09-12', summary: 'Clear and mild', temperatureHigh: 24, temperatureLow: 16, precipitationChance: 15, condition: 'mild' },
  ],
  packingList: [
    { id: 'pack-1', name: 'Light wool layers', category: 'clothing', packed: true, required: true },
    { id: 'pack-2', name: 'Passport', category: 'documents', packed: true, required: true },
  ],
  emergencyInfo: {
    id: 'emergency-1',
    contactName: 'Kyoto Concierge',
    contactPhone: '+81 3 0000 0000',
    localEmergencyNumber: '119',
  },
  transportation: [{ id: 'transport-1', mode: 'transfer', from: 'Kyoto Airport', to: 'Hotel', departureTime: '15:00', arrivalTime: '16:00', notes: 'Private car' }],
  localTips: [{ id: 'tip-1', title: 'Reserve early', summary: 'The most beloved dining rooms fill quickly in spring.', category: 'food', priority: 'high' }],
  metadata: {
    generatedFromPrompt: 'Luxury family escape with slow pacing and cultural highlights',
    source: 'ai',
    tags: ['luxury', 'family', 'japan'],
  },
} satisfies Trip

export default function DashboardPage() {
  const [selectedChapterId, setSelectedChapterId] = useState(sampleTrip.itinerary[0].id)

  const selectedChapter = sampleTrip.itinerary.find((chapter) => chapter.id === selectedChapterId) ?? sampleTrip.itinerary[0]
  const chapterIndex = sampleTrip.itinerary.findIndex((chapter) => chapter.id === selectedChapter.id) + 1

  return (
    <div className="dashboard-page">
      <section className="dashboard-cover-section">
        <div className="dashboard-cover-card">
          <div className="dashboard-cover-visual" aria-hidden="true" />
          <div className="dashboard-cover-copy">
            <p className="dashboard-kicker">atlas • travel book</p>
            <h1>{sampleTrip.destination.name}</h1>
            <h2>{sampleTrip.overview.durationDays}-Day {sampleTrip.overview.vibe}</h2>
            <p className="dashboard-summary">{sampleTrip.overview.summary}</p>
            <div className="dashboard-meta-row">
              <span>Generated 8 seconds ago</span>
              <span>{sampleTrip.hotel.name}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-reader-section">
        <aside className="dashboard-chapter-nav">
          <p className="dashboard-label">Contents</p>
          <div className="chapter-list">
            {sampleTrip.itinerary.map((chapter, index) => (
              <button
                key={chapter.id}
                type="button"
                className={`chapter-item ${selectedChapter.id === chapter.id ? 'is-active' : ''}`}
                onClick={() => setSelectedChapterId(chapter.id)}
              >
                <span className="chapter-number">0{index + 1}</span>
                <span className="chapter-title">{chapter.title}</span>
              </button>
            ))}
          </div>
        </aside>

        <article className="dashboard-chapter-panel">
          <div className="chapter-intro">
            <p className="dashboard-label">Chapter {chapterIndex}</p>
            <h3>{selectedChapter.title}</h3>
            <p>{selectedChapter.summary}</p>
          </div>

          <div className="chapter-grid">
            <div className="chapter-card">
              <h4>Timeline</h4>
              <ul>
                {selectedChapter.activities.map((activity) => (
                  <li key={activity.id}>{activity.title}</li>
                ))}
              </ul>
            </div>
            <div className="chapter-card">
              <h4>Activities</h4>
              <p>{selectedChapter.activities[0]?.description ?? 'A calm day shaped around thoughtful moments.'}</p>
            </div>
            <div className="chapter-card">
              <h4>Restaurants</h4>
              <p>{sampleTrip.restaurants[0]?.name} · {sampleTrip.restaurants[0]?.cuisine}</p>
              <p>{sampleTrip.restaurants[1]?.name} · {sampleTrip.restaurants[1]?.cuisine}</p>
            </div>
            <div className="chapter-card">
              <h4>Budget</h4>
              <p>{sampleTrip.budget.currency} {sampleTrip.budget.estimatedSpend.toLocaleString()} estimated</p>
            </div>
            <div className="chapter-card">
              <h4>Weather</h4>
              <p>{sampleTrip.weather[0]?.summary}</p>
              <p>{sampleTrip.weather[0]?.temperatureHigh}°C / {sampleTrip.weather[0]?.temperatureLow}°C</p>
            </div>
            <div className="chapter-card">
              <h4>Packing</h4>
              <ul>
                {sampleTrip.packingList.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
            <div className="chapter-card chapter-card-wide">
              <h4>Notes</h4>
              <p>{selectedChapter.summary} The pacing remains soft, the experience intimate, and every stop feels considered.</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}
