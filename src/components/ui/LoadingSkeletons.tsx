import ContentLoader from "react-content-loader"

export const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <ContentLoader
      speed={2}
      width={800}
      height={600}
      viewBox="0 0 800 600"
      backgroundColor="#f3f4f6"
      foregroundColor="#e5e7eb"
      className="w-full max-w-4xl"
    >
      {/* Avatar */}
      <circle cx="400" cy="120" r="60" />

      {/* Name */}
      <rect x="250" y="200" rx="8" ry="8" width="300" height="40" />

      {/* Title */}
      <rect x="300" y="260" rx="6" ry="6" width="200" height="24" />

      {/* Description */}
      <rect x="150" y="310" rx="4" ry="4" width="500" height="16" />
      <rect x="200" y="340" rx="4" ry="4" width="400" height="16" />

      {/* Buttons */}
      <rect x="280" y="390" rx="25" ry="25" width="120" height="50" />
      <rect x="420" y="390" rx="25" ry="25" width="120" height="50" />

      {/* Social Icons */}
      <circle cx="350" cy="500" r="20" />
      <circle cx="400" cy="500" r="20" />
      <circle cx="450" cy="500" r="20" />
    </ContentLoader>
  </div>
)

export const ProjectCardSkeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#f3f4f6"
    foregroundColor="#e5e7eb"
    className="w-full"
  >
    {/* Image */}
    <rect x="0" y="0" rx="12" ry="12" width="400" height="180" />

    {/* Title */}
    <rect x="20" y="200" rx="4" ry="4" width="250" height="20" />

    {/* Description */}
    <rect x="20" y="235" rx="3" ry="3" width="360" height="12" />
    <rect x="20" y="255" rx="3" ry="3" width="300" height="12" />

    {/* Tags */}
    <rect x="20" y="280" rx="12" ry="12" width="60" height="16" />
    <rect x="90" y="280" rx="12" ry="12" width="70" height="16" />
    <rect x="170" y="280" rx="12" ry="12" width="50" height="16" />
  </ContentLoader>
)

export const SkillCardSkeleton = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={120}
    viewBox="0 0 300 120"
    backgroundColor="#f3f4f6"
    foregroundColor="#e5e7eb"
    className="w-full"
  >
    {/* Icon */}
    <rect x="20" y="20" rx="8" ry="8" width="40" height="40" />

    {/* Skill name */}
    <rect x="80" y="25" rx="4" ry="4" width="120" height="16" />

    {/* Percentage */}
    <rect x="80" y="45" rx="3" ry="3" width="40" height="12" />

    {/* Progress bar */}
    <rect x="20" y="80" rx="6" ry="6" width="260" height="12" />
  </ContentLoader>
)

export const NavigationSkeleton = () => (
  <ContentLoader
    speed={2}
    width={1200}
    height={64}
    viewBox="0 0 1200 64"
    backgroundColor="#f3f4f6"
    foregroundColor="#e5e7eb"
    className="w-full"
  >
    {/* Logo */}
    <rect x="20" y="20" rx="4" ry="4" width="120" height="24" />

    {/* Nav items */}
    <rect x="400" y="22" rx="16" ry="16" width="60" height="20" />
    <rect x="480" y="22" rx="16" ry="16" width="70" height="20" />
    <rect x="570" y="22" rx="16" ry="16" width="50" height="20" />
    <rect x="640" y="22" rx="16" ry="16" width="80" height="20" />
    <rect x="740" y="22" rx="16" ry="16" width="90" height="20" />
    <rect x="850" y="22" rx="16" ry="16" width="70" height="20" />

    {/* Theme toggle */}
    <circle cx="1150" cy="32" r="16" />
  </ContentLoader>
)
