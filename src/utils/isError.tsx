interface IsErrorProps {
  className?: string;
}

export default function IsError({ className }: IsErrorProps) {
  return (
    <div className={`p-6 lg:px-0 lg:py-8 ${className}`}>
      <p>Something went wrong</p>
      <p>Please refresh or retry later</p>
    </div>
  );
}
