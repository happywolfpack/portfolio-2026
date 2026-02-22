interface ProjectHeaderProps {
  title: string;
  description?: string;
  role?: string;
  team?: string;
  timeline?: string;
}

export default function ProjectHeader({ title, description, role, team, timeline }: ProjectHeaderProps) {
  return (
    <div className="mb-12">
      <h1 className="text-3xl tracking-tight [color:var(--fg)] sm:text-4xl">{title}</h1>
      {description && <p className="mt-3 text-lg [color:var(--muted)]">{description}</p>}
      <div className="mt-6 grid grid-cols-1 gap-4 border-t [border-color:var(--bd)] pt-6 sm:grid-cols-3">
        {role && (
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider [color:var(--muted-strong)]">Role</dt>
            <dd className="mt-1 text-sm [color:var(--fg)]">{role}</dd>
          </div>
        )}
        {team && (
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider [color:var(--muted-strong)]">Team</dt>
            <dd className="mt-1 text-sm [color:var(--fg)]">{team}</dd>
          </div>
        )}
        {timeline && (
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider [color:var(--muted-strong)]">Timeline</dt>
            <dd className="mt-1 text-sm [color:var(--fg)]">{timeline}</dd>
          </div>
        )}
      </div>
    </div>
  );
}
