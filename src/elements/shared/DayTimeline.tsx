import type { ReactNode } from 'react'

interface DayTimelineProps {
  children?: ReactNode
}

export default function DayTimeline({ children = 'Day timeline placeholder' }: DayTimelineProps) {
  return <section>{children}</section>
}
