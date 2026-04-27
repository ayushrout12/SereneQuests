import Link from "next/link"
import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">SereneQuests</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Your trusted companion for wellness information and safe home-care guidance. 
              Empowering you with knowledge to support your health journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/remedies" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Remedy Library
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/disclaimer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/disclaimer#privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer#terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SereneQuests. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground">
            Not a substitute for professional medical advice.{" "}
            <Link href="/disclaimer" className="underline underline-offset-2 hover:text-foreground">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
