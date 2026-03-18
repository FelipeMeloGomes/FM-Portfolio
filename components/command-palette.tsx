"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  FolderKanban,
  Home,
  Mail,
  Search,
  User,
  Wrench,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface CommandItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
}

const commands: CommandItem[] = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "about", label: "Sobre", icon: User, href: "#about" },
  { id: "carreira", label: "Carreira", icon: Briefcase, href: "#carreira" },
  { id: "skills", label: "Skills", icon: Wrench, href: "#skills" },
  {
    id: "certifications",
    label: "Certificações",
    icon: Award,
    href: "#certifications",
  },
  { id: "projects", label: "Projetos", icon: FolderKanban, href: "#projects" },
  { id: "books", label: "Livros", icon: BookOpen, href: "#books" },
  { id: "contact", label: "Contato", icon: Mail, href: "#contact" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  const handleSelect = useCallback(
    (href: string) => {
      handleClose();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    },
    [handleClose, router]
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [handleClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-lg text-sm text-muted-foreground hover:bg-muted/80 transition-colors"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Buscar...</span>
        <kbd className="hidden sm:inline ml-2 px-1.5 py-0.5 text-xs bg-background rounded border border-border">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={handleClose}
            />

            <motion.div
              initial={
                shouldReduceMotion ? {} : { opacity: 0, scale: 0.95, y: -20 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                shouldReduceMotion ? {} : { opacity: 0, scale: 0.95, y: -20 }
              }
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-md mx-4 bg-background border border-border rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar..."
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                />
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-1 hover:bg-muted rounded"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              <div className="max-h-[300px] overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <p className="px-4 py-6 text-center text-sm text-muted-foreground">
                    Nenhum resultado encontrado
                  </p>
                ) : (
                  <div className="space-y-1">
                    {filteredCommands.map((cmd, index) => (
                      <motion.button
                        key={cmd.id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15, delay: index * 0.03 }}
                        onClick={() => handleSelect(cmd.href)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-muted transition-colors text-left"
                      >
                        <cmd.icon className="w-4 h-4 text-muted-foreground" />
                        {cmd.label}
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-4 py-2 border-t border-border text-xs text-muted-foreground">
                Pressione{" "}
                <kbd className="px-1.5 py-0.5 bg-muted rounded">ESC</kbd> para
                fechar
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
