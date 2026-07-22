import type { ReactNode } from 'react'

interface TripSummaryProps {
  children?: ReactNode
}

export default function TripSummary({ children = 'Trip summary placeholder' }: TripSummaryProps) {
  return <section>{children}</section>
}
