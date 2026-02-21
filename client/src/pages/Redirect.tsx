import { useEffect } from "react";
import { useLocation } from "wouter";

interface RedirectProps {
  to: string;
}

export default function Redirect({ to }: RedirectProps) {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Immediate redirect
    setLocation(to);
  }, [to, setLocation]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Redirecting...</h2>
        <p className="text-foreground/70">You'll be redirected shortly.</p>
      </div>
    </div>
  );
}
