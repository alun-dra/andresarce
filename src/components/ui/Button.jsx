export default function Button({ as: Tag = "button", className = "", ...props }) {
  return (
    <Tag
      className={
        "inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium " +
        "bg-brand-primary text-white hover:opacity-90 active:opacity-80 transition " +
        className
      }
      {...props}
    />
  );
}
