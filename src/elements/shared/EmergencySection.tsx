import type { ReactNode } from 'react'

interface EmergencySectionProps {
  children?: ReactNode
}

export default function EmergencySection({ children = 'Emergency section placeholder' }: EmergencySectionProps) {
  return <section>{children}</section>
}
