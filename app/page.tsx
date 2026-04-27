import Link from "next/link"
import { 
  Search, 
  MessageCircle, 
  BookOpen, 
  Shield, 
  Heart, 
  Sparkles,
  ArrowRight,
  ThermometerSun,
  Droplets,
  Wind,
  Brain,
  Pill,
  Stethoscope
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const popularConcerns = [
  { icon: ThermometerSun, label: "Common Cold", slug: "common-cold" },
  { icon: Droplets, label: "Clogged Nose", slug: "clogged-nose" },
  { icon: Wind, label: "Sore Throat", slug: "sore-throat" },
  { icon: Brain, label: "Headache", slug: "headache" },
  { icon: Pill, label: "Upset Stomach", slug: "upset-stomach" },
  { icon: Stethoscope, label: "Minor Cuts", slug: "minor-cuts" },
]

const features = [
  {
    icon: BookOpen,
    title: "Remedy Library",
    description: "Browse our curated collection of safe home-care remedies for common health concerns.",
  },
  {
    icon: MessageCircle,
    title: "AI Wellness Assistant",
    description: "Get personalized guidance from our AI assistant trained on wellness best practices.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Clear guidance on when to seek professional medical care for any concern.",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              Your wellness journey starts here
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Find calm in everyday
              <span className="text-primary"> wellness</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              SereneQuests provides thoughtful guidance for common health concerns, 
              safe home remedies, and AI-powered wellness support to help you feel your best.
            </p>
            
            {/* Search Bar */}
            <div className="mx-auto mt-10 max-w-xl">
              <form action="/remedies" className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  name="q"
                  placeholder="Search symptoms or health concerns..."
                  className="h-14 rounded-2xl border-border/60 bg-card pl-12 pr-4 text-base shadow-lg shadow-primary/5 transition-shadow focus:shadow-xl focus:shadow-primary/10"
                />
              </form>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-xl">
                <Link href="/remedies">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Remedies
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <Link href="/chat">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Talk to AI Assistant
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Concerns */}
      <section className="border-y border-border/40 bg-card/50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Common Health Concerns
            </h2>
            <p className="mt-2 text-muted-foreground">
              Quick access to remedies for everyday wellness needs
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {popularConcerns.map((concern) => {
              const Icon = concern.icon
              return (
                <Link
                  key={concern.slug}
                  href={`/remedies/${concern.slug}`}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-background p-6 text-center transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{concern.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              How SereneQuests Helps You
            </h2>
            <p className="mt-2 text-muted-foreground">
              Thoughtful tools designed for your wellness journey
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-border/60 bg-card/50 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Assistant Preview */}
      <section className="border-y border-border/40 bg-card/50 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <MessageCircle className="h-4 w-4" />
                AI-Powered
              </div>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Your Personal Wellness Assistant
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Our AI assistant is here to help you understand common health concerns, 
                suggest safe remedies, and guide you toward making informed wellness decisions. 
                Available 24/7 for your questions.
              </p>
              <Button asChild className="mt-6 rounded-xl" size="lg">
                <Link href="/chat">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Card className="border-border/60 shadow-xl shadow-primary/5">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                        <Heart className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="rounded-2xl rounded-tl-sm bg-muted px-4 py-3">
                        <p className="text-sm text-foreground">
                          {"I've been having trouble sleeping lately. Any suggestions?"}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                        <Sparkles className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="rounded-2xl rounded-tl-sm bg-primary/10 px-4 py-3">
                        <p className="text-sm text-foreground">
                          {"I'd be happy to help with sleep concerns. Some gentle approaches include maintaining a consistent sleep schedule, limiting screen time before bed, and trying relaxation techniques like deep breathing..."}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Disclaimer */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <Card className="border-amber-200/60 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/20">
            <CardContent className="flex gap-4 p-6">
              <Shield className="h-6 w-6 shrink-0 text-amber-600 dark:text-amber-400" />
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-amber-100">
                  Important Health Notice
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-amber-800 dark:text-amber-200">
                  SereneQuests provides general wellness information and is not a substitute 
                  for professional medical advice, diagnosis, or treatment. For severe, 
                  worsening, or urgent symptoms, contact a medical professional or emergency services.
                </p>
                <Link 
                  href="/disclaimer" 
                  className="mt-3 inline-flex items-center text-sm font-medium text-amber-700 underline underline-offset-2 hover:text-amber-900 dark:text-amber-300 dark:hover:text-amber-100"
                >
                  Read full disclaimer
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
