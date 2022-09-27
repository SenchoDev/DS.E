import React, { ReactNode } from 'react'
import { Spacing } from '@ds.e/foundation'

interface MarginProps {
  space?: keyof typeof Spacing;
  children: ReactNode
}

const Margin: React.FC<MarginProps> = ({ space = 'md', children }) => {
  const className = `dse-margin-${space}`

  return <div className={className} >{children}</div>
}

export default Margin;