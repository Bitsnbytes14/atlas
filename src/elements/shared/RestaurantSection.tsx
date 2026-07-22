import type { ReactNode } from 'react'

interface RestaurantSectionProps {
  children?: ReactNode
}

export default function RestaurantSection({ children = 'Restaurant section placeholder' }: RestaurantSectionProps) {
  return <section>{children}</section>
}
