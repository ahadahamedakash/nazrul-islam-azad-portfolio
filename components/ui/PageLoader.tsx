'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function PageLoader({
  children
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: '#0b0f14',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
            }}
          >
            <motion.p
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '2.8rem',
                fontWeight: 800,
                background: 'linear-gradient(90deg, #f5a623, #00c9a7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1rem',
              }}
            >
              Azad
            </motion.p>
            <div style={{
              width: '120px',
              height: '2px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, #f5a623, #00c9a7)',
              marginBottom: '0.8rem',
            }} />
            <p style={{
              color: '#7a8a9e',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              Loading Experience
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Children always in DOM, just hidden during load */}
      <div style={{
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.4s ease',
        backgroundColor: '#0b0f14',
        minHeight: '100vh',
      }}>
        {children}
      </div>
    </>
  )
}
