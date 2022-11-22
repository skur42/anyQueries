type Variant = "primary" | "secondary";

type ButtonProps = {
  title: string;
  onClick: () => void;
  variant?: Variant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  title,
  onClick,
  variant = "primary",
  ...props
}: ButtonProps) => {
  if (variant === "primary") {
    return (
      <button
        className="rounded px-4 py-2 font-semibold text-sm bg-black border-2 border-black hover:opacity-75 text-white disabled:bg-gray-600"
        onClick={onClick}
        {...props}
      >
        {title}
      </button>
    );
  }
  return (
    <button
      className="rounded px-4 py-2 font-semibold text-sm bg-white border-2 border-black text-black hover:opacity-75 disabled:opacity-50"
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  );
};
