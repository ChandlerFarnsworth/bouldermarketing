interface SectionBadgeProps {
    children: React.ReactNode;
  }
  
  export default function SectionBadge({ children }: SectionBadgeProps) {
    return (
      <span className="inline-block px-5 py-2 gradient-primary text-white rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
        {children}
      </span>
    );
  }