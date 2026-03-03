import CreatorProfile from '@/components/ProfileCard/creator-profile'

export default function About() {
  return (
    <main className="min-h-screen bg-primary">
      {/* Optionally include a container or additional layout elements */}
      <section className="mx-auto my-12 max-w-[1200px] px-4">
        <CreatorProfile />
      </section>
    </main>
  )
}
