'use client'

import { cn } from "@/lib/utils"

interface LogoIconProps {
  className?: string
}

export function LogoIcon({ className }: LogoIconProps) {
  return (
    <svg 
      viewBox="0 0 136 135" 
      className={cn(className)}
      fill="none"
    >
      <path 
        fill="currentColor" 
        d="M26.74 134.476v-26.07H.38V27.01h26.36V.65h81.686v26.36h26.649v28.677h-29.546v-26.07H29.636V52.79h52.72v29.256h-52.72v23.463h75.893V78.86h29.546v29.256h-26.649v26.36H26.74Z"
      />
    </svg>
  )
} 