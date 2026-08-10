import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TrackForm({
  defaultValue = "",
  compact = false,
}: {
  defaultValue?: string;
  compact?: boolean;
}) {
  const [value, setValue] = useState(defaultValue);
  const navigate = useNavigate();

  return (
    <form
      className={compact ? "flex flex-col gap-3 sm:flex-row" : "space-y-3"}
      onSubmit={(e) => {
        e.preventDefault();
        const id = value.trim();
        if (!id) return;
        navigate({ to: "/track/$id", params: { id } });
      }}
    >
      <div className={compact ? "flex-1" : ""}>
        <label htmlFor={compact ? "track-id-compact" : "track-id"} className="sr-only">
          Tracking ID
        </label>
        <Input
          id={compact ? "track-id-compact" : "track-id"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your tracking ID (e.g. MDT-2381045)"
          className="h-12 rounded-xl border-border bg-tint text-navy placeholder:text-muted-foreground"
        />
      </div>
      <Button type="submit" variant="brand" size="lg" className={compact ? "h-12" : "h-12 w-full"}>
        <Search className="size-4" /> Track
      </Button>
    </form>
  );
}