"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function Modal({
  // We pass the children and className as a prop to keep modal reusable.
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  // This will change the URL to the previous state, for example if we have navigated to the login page from `/` route, when the function will trigger the URL will be changed from `/login` to `/`.
  function handleOpenChange() {
    router.back();
  }

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogContent className={className || ""}>
        <DialogTitle></DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
}
