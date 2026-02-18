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
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
      {description && <p className="mt-3 text-lg text-gray-600">{description}</p>}
      <div className="mt-6 grid grid-cols-1 gap-4 border-t border-gray-200 pt-6 sm:grid-cols-3">
        {role && (
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-gray-400">Role</dt>
            <dd className="mt-1 text-sm text-gray-900">{role}</dd>
          </div>
        )}
        {team && (
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-gray-400">Team</dt>
            <dd className="mt-1 text-sm text-gray-900">{team}</dd>
          </div>
        )}
        {timeline && (
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-gray-400">Timeline</dt>
            <dd className="mt-1 text-sm text-gray-900">{timeline}</dd>
          </div>
        )}
      </div>
    </div>
  );
}
