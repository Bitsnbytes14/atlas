import { Document } from '@unlayer/react-elements'
import TripHeader from '../../elements/shared/TripHeader'
import TripSummary from '../../elements/shared/TripSummary'
import DayTimeline from '../../elements/shared/DayTimeline'
import BudgetSection from '../../elements/shared/BudgetSection'
import PackingSection from '../../elements/shared/PackingSection'
import RestaurantSection from '../../elements/shared/RestaurantSection'
import EmergencySection from '../../elements/shared/EmergencySection'

export default function TripDocument() {
  return (
    <Document>
      <TripHeader title="Trip Document" subtitle="Shared placeholder header" />
      <TripSummary>Shared placeholder summary</TripSummary>
      <DayTimeline>Shared placeholder timeline</DayTimeline>
      <BudgetSection>Shared placeholder budget</BudgetSection>
      <PackingSection>Shared placeholder packing</PackingSection>
      <RestaurantSection>Shared placeholder restaurant</RestaurantSection>
      <EmergencySection>Shared placeholder emergency</EmergencySection>
    </Document>
  )
}
