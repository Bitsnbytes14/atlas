import type { ReactNode } from 'react'

interface PackingSectionProps {
  children?: ReactNode
}

export default function PackingSection({ children = 'Packing section placeholder' }: PackingSectionProps) {
  return <section>{children}</section>
}
