import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#ffffff] group-[.toaster]:text-[#ffffff] group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#64748b]",
          actionButton:
            "group-[.toast]:bg-[#3b82f6] group-[.toast]:text-[#ffffff]",
          cancelButton:
            "group-[.toast]:bg-[#f1f5f9] group-[.toast]:text-[#64748b]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
