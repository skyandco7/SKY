import { useState, useEffect } from 'react'

const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    const increment = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [hasStarted, target, duration])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.querySelector('.hero-stats')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return count
}

export default useCountUp
