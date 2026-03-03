import { SiGithub, SiX } from '@icons-pack/react-simple-icons'
import { Award, Linkedin, Star, User } from 'lucide-react'
import Image from "next/image";

interface AvatarProps {
  src?: string
  alt: string
  fallbackText: string
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, fallbackText }) => (
  <div className="relative mb-4 flex h-28 w-28 items-center justify-center rounded-full border-4 border-neutral bg-secondary">
    {src ? (
      <Image
        src={src}
        alt={alt}
        width={160}
        height={160}
        className="h-full w-full rounded-full object-cover"
      />
    ) : (
      <span className="animate-pulse rounded-full bg-accent p-6 text-2xl text-secondary">
        {fallbackText}
      </span>
    )}
  </div>
)

const creatorData = {
  name: 'Yogesh Rana',
  title: 'Full Stack Developer',
  avatarAlt: 'Yogesh Rana',
  fallbackText: 'YR',
  bio: [
    'Yogesh Rana is a passionate Full Stack developer with years of experience crafting beautiful, functional interfaces. His dedication to clean, reusable code has helped thousands of developers create better web applications.',
    'With a deep understanding of modern frontend frameworks and design systems, Yogesh brings practical insights and best practices to ComponentCraft.',
  ],
  quote:
    'My goal with ComponentCraft is to empower developers to create their own beautiful UI component libraries that are both functional and visually stunning. I believe great design should be accessible to everyone.',
}

const socialLinks = [
  {
    href: 'https://github.com',
    label: 'GitHub',
    icon: <SiGithub className="h-5 w-5" />,
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: <SiX className="h-5 w-5" />,
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
  },
]

const highlights = [
  {
    icon: <User className="h-6 w-6" />,
    title: 'Creator of',
    subtitle: 'Codevertiser',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Creator of',
    subtitle: 'Flexy UI',
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: 'UI Collection',
    subtitle: 'From Scratch',
  },
]

const CreatorProfile = () => {
  return (
    <section className="bg-secondary py-20 rounded-3xl">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-neutral">
            Meet the <span className="text-accent">Creator</span>
          </h2>
          <p className="mx-auto max-w-2xl text-neutral">
            The mastermind behind ComponentCraft who has dedicated years to
            helping developers create beautiful UI components
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-neutral bg-secondary shadow-sm">
          <div className="grid gap-6 md:grid-cols-7">
            {/* Left Side */}
            <div className="flex flex-col items-center justify-center border-b border-neutral p-6 md:col-span-2 md:border-b-0 md:border-r">
              <Avatar
                alt={creatorData.avatarAlt}
                fallbackText={creatorData.fallbackText}
              />

              <h3 className="mb-1 text-center text-2xl font-bold text-neutral">
                {creatorData.name}
              </h3>

              <p className="mb-4 text-center text-accent">
                {creatorData.title}
              </p>

              <div className="flex space-x-4 text-neutral">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-accent"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="p-6 md:col-span-5 md:p-8">
              {/* About */}
              <div className="mb-6">
                <h4 className="mb-3 text-xl font-semibold text-accent">
                  About {creatorData.name.split(' ')[0]}
                </h4>

                {creatorData.bio.map((para, idx) => (
                  <p key={idx} className="mb-4 text-neutral">
                    {para}
                  </p>
                ))}
              </div>

              {/* Highlights */}
              <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 rounded-xl bg-secondary border border-neutral p-4"
                  >
                    <span className="text-accent">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-neutral">
                        {item.title}
                      </p>
                      <p className="text-sm text-accent">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="border-t border-neutral pt-4">
                <p className="text-sm italic text-neutral">
                  {creatorData.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreatorProfile