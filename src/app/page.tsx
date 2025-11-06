import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <Card className="max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Edu App</h1>
        <p className="text-gray-600 mb-6">
          This is your frontend setup using Next.js + Tailwind + Shadcn (manual setup).
        </p>
        <Button>Get Started</Button>
      </Card>
    </main>
  )
}
