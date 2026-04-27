import { Metadata } from "next"
import Link from "next/link"
import { 
  Leaf, 
  Heart, 
  Shield, 
  BookOpen, 
  MessageCircle, 
  Users,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About SereneQuests - Your Wellness Companion",
  description: "Learn about SereneQuests, our mission to provide accessible wellness information, and how we can help you on your health journey.",
}

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "We approach every health concern with empathy and understanding, knowing that wellness is deeply personal.",
  },
  {
    icon: Shield,
    title: "Safety & Accuracy",
    description: "We prioritize evidence-based information and always emphasize when professional medical care is needed.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Quality wellness information should be available to everyone, presented in clear, understandable language.",
  },
]

const features = [
  {
    icon: BookOpen,
    title: "Remedy Library",
    description: "Our curated collection of safe home-care remedies covers common health concerns from colds to stress management.",
    href: "/remedies",
  },
  {
    icon: MessageCircle,
    title: "AI Wellness Assistant",
    description: "Get personalized guidance and answers to your wellness questions anytime with our AI-powered assistant.",
    href: "/chat",
  },
]

export default function AboutPage() {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Hero */}
        <section className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">
              <Leaf className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
            About SereneQuests
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We believe everyone deserves access to thoughtful, reliable wellness information. 
            SereneQuests is your companion for understanding common health concerns and finding 
            gentle paths to feeling better.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <Card className="border-border/60 bg-card/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg leading-relaxed text-muted-foreground">
                To empower individuals with accessible, evidence-informed wellness guidance that 
                complements professional healthcare. We aim to help you make informed decisions 
                about everyday health concerns while always encouraging appropriate medical care 
                when needed.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground">
            Our Values
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="border-border/60 bg-card/50 text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground">
            What We Offer
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Link key={feature.title} href={feature.href}>
                  <Card className="group h-full border-border/60 bg-card/50 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <CardHeader>
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {feature.description}
                      </CardDescription>
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                        Explore
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Important Note */}
        <section className="mb-16">
          <Card className="border-amber-200/60 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/20">
            <CardContent className="flex gap-4 pt-6">
              <Shield className="h-6 w-6 shrink-0 text-amber-600 dark:text-amber-400" />
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-amber-100">
                  A Note on Our Guidance
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-amber-800 dark:text-amber-200">
                  SereneQuests provides general wellness information intended for educational 
                  purposes. We are not healthcare providers, and our content is not a substitute 
                  for professional medical advice, diagnosis, or treatment. Always consult with 
                  qualified healthcare professionals for your specific health needs.
                </p>
                <Link
                  href="/disclaimer"
                  className="mt-3 inline-flex items-center text-sm font-medium text-amber-700 underline underline-offset-2 hover:text-amber-900 dark:text-amber-300 dark:hover:text-amber-100"
                >
                  Read our full disclaimer
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-border/60 bg-card/50 p-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground">Start Your Wellness Journey</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Whether you are looking for relief from a minor ailment or seeking general wellness tips, 
            we are here to help.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/remedies">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Remedies
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <Link href="/chat">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat with AI
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
