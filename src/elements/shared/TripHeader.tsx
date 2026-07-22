import type { ReactNode } from 'react'

interface TripHeaderProps {
  title?: ReactNode
  subtitle?: ReactNode
}

export default function TripHeader({ title = 'Trip Header', subtitle = 'Trip subtitle' }: TripHeaderProps) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  )
}
