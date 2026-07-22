import type { ReactNode } from 'react'

interface BudgetSectionProps {
  children?: ReactNode
}

export default function BudgetSection({ children = 'Budget section placeholder' }: BudgetSectionProps) {
  return <section>{children}</section>
}
