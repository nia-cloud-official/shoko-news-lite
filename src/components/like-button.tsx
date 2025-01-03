'use client'

import { Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useImperativeHandle, forwardRef } from "react"

export interface LikeButtonRef {
  triggerLike: () => void
}

interface LikeButtonProps {
  initialLikes?: number
  initialLiked?: boolean
  size?: 'sm' | 'default'
  onLike?: () => void
}

const floatingHearts = [
  { x: -20, y: -20, scale: 1.2, duration: 0.7 },
  { x: 0, y: -30, scale: 1.4, duration: 0.8 },
  { x: 20, y: -20, scale: 1.2, duration: 0.7 },
  { x: -10, y: -25, scale: 1.3, duration: 0.6 },
] as const

export const LikeButton = forwardRef<LikeButtonRef, LikeButtonProps>(({ 
  initialLikes = 0, 
  initialLiked = false,
  size = 'default',
  onLike 
}, ref) => {
  const [isLiked, setIsLiked] = useState(initialLiked)
  const [likeTimestamp, setLikeTimestamp] = useState(0)
  const [likes, setLikes] = useState(initialLikes)

  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true)
      setLikes(prev => prev + 1)
      setLikeTimestamp(Date.now())
      onLike?.()
    }
  }

  useImperativeHandle(ref, () => ({
    triggerLike: handleLike
  }))

  const iconSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm'

  return (
    <div className="relative">
      <button 
        onClick={handleLike}
        className={`flex items-center gap-1.5 text-muted-foreground hover:text-red-500 transition-colors ${textSize}`}
      >
        <Heart 
          className={`${iconSize} ${isLiked ? 'fill-red-500 text-red-500' : ''}`} 
        />
        <span className={`font-medium ${isLiked ? 'text-red-500' : ''}`}>
          {likes}
        </span>
      </button>
      
      <AnimatePresence>
        {isLiked && floatingHearts.map((heart, index) => (
          <motion.div 
            key={`${likeTimestamp}-${index}`}
            className="absolute left-0 top-0"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ 
              scale: heart.scale, 
              opacity: 0,
              x: heart.x,
              y: heart.y
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ 
              duration: heart.duration,
              ease: [0.12, 0, 0.39, 0]
            }}
          >
            <Heart className={`${iconSize} fill-red-500 text-red-500`} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
})

LikeButton.displayName = "LikeButton" 