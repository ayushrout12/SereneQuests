import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { 
  ChevronLeft, 
  Check, 
  X, 
  AlertTriangle, 
  Shield,
  ArrowRight,
  MessageCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getRemedyBySlug, getRelatedRemedies, remedies } from "@/lib/remedies-data"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return remedies.map((remedy) => ({
    slug: remedy.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const remedy = getRemedyBySlug(slug)

  if (!remedy) {
    return {
      title: "Remedy Not Found - SereneQuests",
    }
  }

  return {
    title: `${remedy.title} - Home Remedies | SereneQuests`,
    description: `${remedy.shortDescription} Learn safe home remedies, what to avoid, and when to seek medical care.`,
  }
}

export default async function RemedyPage({ params }: Props) {
  const { slug } = await params
  const remedy = getRemedyBySlug(slug)

  if (!remedy) {
    notFound()
  }

  const Icon = remedy.icon
  const relatedRemedies = getRelatedRemedies(remedy.relatedRemedies)

  return (
    <div className="px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/remedies"
          className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Remedies
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
                  {remedy.title}
                </h1>
                <Badge variant="secondary" className="mt-2">
                  {remedy.category}
                </Badge>
              </div>
            </div>
          </div>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {remedy.shortDescription}
          </p>
        </div>

        {/* Overview */}
        <section className="mb-10">
          <Card className="border-border/60 bg-card/50">
            <CardHeader>
              <CardTitle className="text-lg">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-muted-foreground">{remedy.overview}</p>
            </CardContent>
          </Card>
        </section>

        {/* Home Remedies */}
        <section className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Check className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Safe Home Remedies</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {remedy.homeRemedies.map((item, index) => (
              <Card key={index} className="border-border/60 bg-card/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What to Avoid */}
        <section className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <X className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">What to Avoid</h2>
          </div>
          <Card className="border-border/60 bg-card/50">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {remedy.whatToAvoid.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                      <X className="h-3 w-3 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* When to Seek Care */}
        <section className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">When to Seek Medical Care</h2>
          </div>
          <Card className="border-amber-200/60 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/20">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {remedy.whenToSeekCare.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                      <AlertTriangle className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                    </div>
                    <span className="text-amber-900 dark:text-amber-100">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Medical Disclaimer */}
        <section className="mb-10">
          <Card className="border-border/60 bg-muted/30">
            <CardContent className="flex items-start gap-4 pt-6">
              <Shield className="h-6 w-6 shrink-0 text-muted-foreground" />
              <div>
                <h3 className="font-semibold text-foreground">Important Reminder</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  This information is for educational purposes only and is not a substitute for 
                  professional medical advice, diagnosis, or treatment. Always consult with a 
                  qualified healthcare provider for personalized guidance.
                </p>
                <Link
                  href="/disclaimer"
                  className="mt-2 inline-flex items-center text-sm font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Read full disclaimer
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="mb-10" />

        {/* Related Remedies */}
        {relatedRemedies.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-6 text-xl font-semibold text-foreground">Related Remedies</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedRemedies.map((related) => {
                const RelatedIcon = related.icon
                return (
                  <Link key={related.slug} href={`/remedies/${related.slug}`}>
                    <Card className="group h-full border-border/60 bg-card/50 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                      <CardContent className="flex items-center gap-4 pt-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <RelatedIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{related.title}</h3>
                          <p className="text-xs text-muted-foreground">{related.category}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="rounded-2xl border border-border/60 bg-card/50 p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground">Have more questions?</h2>
          <p className="mt-2 text-muted-foreground">
            Our AI assistant can provide additional guidance and answer your wellness questions.
          </p>
          <Button asChild className="mt-6 rounded-xl" size="lg">
            <Link href="/chat">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with AI Assistant
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
