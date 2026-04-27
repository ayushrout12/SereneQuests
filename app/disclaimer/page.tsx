import { Metadata } from "next"
import Link from "next/link"
import { Shield, AlertTriangle, FileText, Lock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Medical Disclaimer - SereneQuests",
  description: "Important legal and medical disclaimer for SereneQuests. Understand the limitations of our wellness information and when to seek professional medical care.",
}

export default function DisclaimerPage() {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-6 inline-flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
              <Shield className="h-8 w-8 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Medical Disclaimer
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        {/* Important Notice */}
        <Card className="mb-10 border-amber-200/60 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/20">
          <CardContent className="flex gap-4 pt-6">
            <AlertTriangle className="h-6 w-6 shrink-0 text-amber-600 dark:text-amber-400" />
            <div>
              <h2 className="font-semibold text-amber-900 dark:text-amber-100">
                Important Notice
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-amber-800 dark:text-amber-200">
                <strong>SereneQuests provides general wellness information and is not a substitute 
                for professional medical advice, diagnosis, or treatment.</strong> For severe, 
                worsening, or urgent symptoms, contact a medical professional or emergency services 
                immediately.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <FileText className="h-5 w-5 text-muted-foreground" />
              General Information Only
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The content provided on SereneQuests, including but not limited to text, graphics, 
              images, and other material, is for informational and educational purposes only. 
              It is not intended to be a substitute for professional medical advice, diagnosis, 
              or treatment.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Always seek the advice of your physician or other qualified health provider with 
              any questions you may have regarding a medical condition. Never disregard 
              professional medical advice or delay in seeking it because of something you have 
              read on this website or received from our AI assistant.
            </p>
          </section>

          <Separator className="my-10" />

          <section className="mb-10">
            <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <AlertTriangle className="h-5 w-5 text-muted-foreground" />
              No Medical Advice
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              SereneQuests does not provide medical advice. The information on this website, 
              including the AI wellness assistant, is not intended to diagnose, treat, cure, 
              or prevent any disease. The remedies and suggestions provided are general in 
              nature and may not be appropriate for your specific situation.
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>We do not have access to your medical history or current health conditions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>We cannot perform physical examinations or diagnostic tests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>Our AI assistant uses pre-programmed responses based on general wellness information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>Individual health needs vary significantly and require personalized assessment</span>
              </li>
            </ul>
          </section>

          <Separator className="my-10" />

          <section className="mb-10">
            <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <Shield className="h-5 w-5 text-muted-foreground" />
              When to Seek Emergency Care
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If you experience any of the following, please seek immediate medical attention:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                <span>Difficulty breathing or shortness of breath</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                <span>Chest pain or pressure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                <span>Sudden confusion, trouble speaking, or understanding</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                <span>Sudden severe headache with no known cause</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                <span>Sudden numbness or weakness, especially on one side of the body</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                <span>Severe allergic reactions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                <span>Thoughts of self-harm or suicide</span>
              </li>
            </ul>
            <p className="mt-4 font-medium text-foreground">
              In case of emergency, call your local emergency number immediately.
            </p>
          </section>

          <Separator className="my-10" />

          <section className="mb-10" id="privacy">
            <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <Lock className="h-5 w-5 text-muted-foreground" />
              Privacy & Data
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We respect your privacy. Conversations with our AI assistant are not stored 
              permanently and are not used to identify you personally. However, please be 
              aware that:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>Do not share sensitive personal health information through our platform</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>Our platform is not HIPAA compliant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>For confidential health matters, please consult with your healthcare provider directly</span>
              </li>
            </ul>
          </section>

          <Separator className="my-10" />

          <section className="mb-10" id="terms">
            <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <FileText className="h-5 w-5 text-muted-foreground" />
              Terms of Use
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              By using SereneQuests, you acknowledge and agree that:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>You will use this information as a general educational resource only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>You will not rely solely on this information for health decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>You understand that SereneQuests and its creators are not liable for any actions taken based on the information provided</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                <span>You will seek professional medical advice for any health concerns</span>
              </li>
            </ul>
          </section>

          <Separator className="my-10" />

          <section>
            <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground">
              Contact
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If you have questions about this disclaimer or our services, please reach out 
              through our website. For medical questions, please consult with a qualified 
              healthcare professional.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-border/60 bg-card/50 p-6 text-center">
          <p className="text-muted-foreground">
            Ready to explore our wellness resources?
          </p>
          <Link
            href="/remedies"
            className="mt-3 inline-flex items-center text-sm font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            Browse our Remedy Library
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
