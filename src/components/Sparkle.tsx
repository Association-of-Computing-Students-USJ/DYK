import { motion } from 'framer-motion';
interface SparkleProps {
  className?: string;
  delay?: number;
  size?: number;
}
export function Sparkle({
  className = '',
  delay = 0,
  size = 24
}: SparkleProps) {
  return (
    <motion.div
      className={`inline-block text-secondary ${className}`}
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [0.8, 1.2, 0.8]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay
      }}
      style={{
        width: size,
        height: size
      }}>
      
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </motion.div>);

}