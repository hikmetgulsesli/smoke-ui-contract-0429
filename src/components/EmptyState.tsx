interface EmptyStateProps {
  message?: string;
  icon?: React.ReactNode;
}

export function EmptyState({ message = 'Henüz bir alışkanlık eklenmemiş.', icon }: EmptyStateProps) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-md py-2xl text-center"
      role="status"
      aria-live="polite"
    >
      {icon ? (
        <div className="text-outline-variant" aria-hidden="true">
          {icon}
        </div>
      ) : (
        <span
          className="material-symbols-outlined text-[48px] text-outline-variant"
          aria-hidden="true"
        >
          inbox
        </span>
      )}
      <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
        {message}
      </p>
    </div>
  );
}
