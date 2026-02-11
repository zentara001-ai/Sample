import * as React from "react"
import {
  Search,
  CreditCard,
  User,
  Home,
  Briefcase,
  Mail,
  Laptop,
  Moon,
  Sun,
  Calculator,
} from "lucide-react"
import { Command } from "cmdk"
import { useNavigate, useLocation } from "react-router-dom"
import { useNavigation } from "../lib/NavigationContext"
import { useTheme } from "./theme-provider"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { handleNavigation } = useNavigation()
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  const navLinks = [
    { name: 'Home', id: 'home', path: '/', icon: Home },
    { name: 'Projects', id: 'projects', path: '/projects', icon: Briefcase },
    { name: 'Work', id: 'work', path: '/work', icon: Laptop },
    { name: 'About', id: 'about', path: '/about', icon: User },
    { name: 'Contact', id: 'contact', path: '/contact', icon: Mail },
    { name: 'Cost Estimator', id: 'estimator', path: '/estimator', icon: Calculator },
    { name: 'Client Portal', id: 'portal', path: '/portal', icon: CreditCard },
  ]

  const handleNav = (link: typeof navLinks[0]) => {
    if (location.pathname !== '/' && link.path.startsWith('/#')) {
        navigate(link.path)
    } else if (location.pathname === '/') {
        handleNavigation(link.id, link.path)
    } else {
        navigate(link.path)
    }
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in"
      onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false)
      }}
    >
      <div className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-0 shadow-lg duration-200 sm:rounded-lg md:w-full">
        <Command className="flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground">
          <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input
              placeholder="Type a command or search..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>
            <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
              {navLinks.map((link) => (
                <Command.Item
                  key={link.path}
                  onSelect={() => runCommand(() => handleNav(link))}
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  <span>{link.name}</span>
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Separator className="-mx-1 h-px bg-border" />
            <Command.Group heading="Settings" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
              <Command.Item
                onSelect={() => runCommand(() => setTheme("light"))}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground"
              >
                <Sun className="mr-2 h-4 w-4" />
                <span>Light Mode</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => setTheme("dark"))}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground"
              >
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark Mode</span>
              </Command.Item>
               <Command.Item
                onSelect={() => runCommand(() => setTheme("system"))}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground"
              >
                <Laptop className="mr-2 h-4 w-4" />
                <span>System Theme</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </Command.Dialog>
  )
}