interface SectionBadgeProps {
  children: React.ReactNode;
}

export default function SectionBadge({ children }: SectionBadgeProps) {
  return <p className="eyebrow mb-3">{children}</p>;
}
