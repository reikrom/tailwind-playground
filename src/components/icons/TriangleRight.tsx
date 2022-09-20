import React from 'react'

interface TriangleRightProps {
  className?: string
}

const TriangleRight = ({className}: TriangleRightProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 448"
    >
      <path d="m96 88 144 144L96 376z" fill-rule="evenodd" />
    </svg>
  )
}

export {TriangleRight}
