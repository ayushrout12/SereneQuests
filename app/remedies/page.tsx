import { Metadata } from "next"
import Link from "next/link"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { remedies, categories } from "@/lib/remedies-data"

export const metadata: Metadata = {
  title: "Remedy Library - SereneQuests",
  description: "Browse our curated collection of safe home-care remedies for common health concerns. Find natural relief for colds, headaches, sore throats, and more.",
}

type Props = {
  searchParams: Promise<{ q?: string; category?: string }>
}

export default async function RemediesPage({ searchParams }: Props) {
  const params = await searchParams
  const query = params.q?.toLowerCase() || ""
  const selectedCategory = params.category || ""

  const filteredRemedies = remedies.filter((remedy) => {
    const matchesQuery =
      !query ||
      remedy.title.toLowerCase().includes(query) ||
      remedy.shortDescription.toLowerCase().includes(query) ||
      remedy.category.toLowerCase().includes(query)

    const matchesCategory =
      !selectedCategory || remedy.category === selectedCategory

    return matchesQuery && matchesCategory
  })

  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Remedy Library
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Browse safe home-care guidance for common health concerns
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-10 space-y-6">
          <form className="relative mx-auto max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search remedies..."
              className="h-12 rounded-xl border-border/60 bg-card pl-12 text-base shadow-lg shadow-primary/5"
            />
          </form>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Link
              href="/remedies"
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !selectedCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/remedies?category=${encodeURIComponent(category)}`}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="mb-6 text-sm text-muted-foreground">
          {filteredRemedies.length} {filteredRemedies.length === 1 ? "remedy" : "remedies"} found
          {query && ` for "${query}"`}
          {selectedCategory && ` in ${selectedCategory}`}
        </p>

        {/* Remedy Grid */}
        {filteredRemedies.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRemedies.map((remedy) => {
              const Icon = remedy.icon
              return (
                <Link key={remedy.slug} href={`/remedies/${remedy.slug}`}>
                  <Card className="group h-full border-border/60 bg-card/50 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <CardHeader>
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {remedy.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{remedy.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {remedy.shortDescription}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-border/60 bg-card/50 px-6 py-16 text-center">
            <p className="text-lg font-medium text-foreground">No remedies found</p>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
            <Link
              href="/remedies"
              className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-2 hover:text-primary/80"
            >
              View all remedies
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
