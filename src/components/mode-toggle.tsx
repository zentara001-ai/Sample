import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { motion, AnimatePresence } from "framer-motion"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-sm font-medium hover:text-primary transition-colors relative group bg-transparent border-none cursor-pointer flex items-center justify-center w-9 h-9"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {theme === "light" ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}