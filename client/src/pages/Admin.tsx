import { FormEvent, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AdminSubmission = {
  id: string;
  timestamp: string;
  formType: string;
  page: string;
  name: string;
  email: string;
  data: Record<string, unknown>;
};

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(date);
}

function formatDetailLabel(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]+/g, " ")
    .trim()
    .replace(/^./, (m) => m.toUpperCase());
}

function formatDetailValue(value: unknown) {
  if (value === null || value === undefined || value === "") return "-";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value);
}

const EXPORT_COLUMNS: Array<{ header: string; keys: string[]; source?: "top" | "data" }> = [
  { header: "Date", keys: ["timestamp"], source: "top" },
  { header: "Form", keys: ["formType"], source: "top" },
  { header: "Name", keys: ["name", "fullName", "firstName", "contactName"] },
  { header: "Email", keys: ["email", "workEmail", "businessEmail"] },
  { header: "Phone", keys: ["phone", "phoneNumber", "mobile", "contactNumber"] },
  { header: "Company", keys: ["company", "companyName", "organization", "businessName"] },
  { header: "Service", keys: ["service", "serviceType", "interestedIn"] },
  { header: "Budget", keys: ["budget", "budgetRange"] },
  { header: "Timeline", keys: ["timeline", "timeframe"] },
  { header: "Message", keys: ["message", "notes", "comments", "details"] },
  { header: "Page", keys: ["page"], source: "top" },
];

function pickFromData(data: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const value = data[key];
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      if (typeof value === "boolean") return value ? "Yes" : "No";
      return String(value);
    }
  }
  return "";
}

function csvEscape(value: string) {
  const needsQuote = /[",\n\r]/.test(value);
  const escaped = value.replace(/"/g, '""');
  return needsQuote ? `"${escaped}"` : escaped;
}

function buildCsv(rows: AdminSubmission[]) {
  const header = EXPORT_COLUMNS.map((c) => c.header).join(",");
  const body = rows
    .map((row) =>
      EXPORT_COLUMNS.map((col) => {
        let value = "";
        if (col.source === "top") {
          if (col.keys[0] === "timestamp") value = formatDate(row.timestamp);
          else value = String((row as unknown as Record<string, unknown>)[col.keys[0]] || "");
        } else {
          value = pickFromData(row.data || {}, col.keys);
        }
        return csvEscape(value);
      }).join(","),
    )
    .join("\n");
  return `${header}\n${body}`;
}

function downloadCsv(filename: string, csv: string) {
  const blob = new Blob([`﻿${csv}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function Admin() {
  const [authChecked, setAuthChecked] = useState(false);
  const [configured, setConfigured] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submissions, setSubmissions] = useState<AdminSubmission[]>([]);
  const [selectedForm, setSelectedForm] = useState("all");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [detailsItem, setDetailsItem] = useState<AdminSubmission | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    document.title = "Conquermark Admin";

    const setRobotsMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setRobotsMeta("robots", "noindex, nofollow, noarchive, nosnippet");
    setRobotsMeta("googlebot", "noindex, nofollow, noarchive, nosnippet");
  }, []);

  const loadSubmissions = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/submissions?limit=1000");
      if (response.status === 401) {
        setAuthenticated(false);
        return;
      }
      const payload = await response.json();
      if (!response.ok || !payload.success) {
        throw new Error(payload.message || "Failed to load submissions");
      }
      setSubmissions(Array.isArray(payload.submissions) ? payload.submissions : []);
      setSelectedIds(new Set());
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to load submissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/admin/me");
        const payload = await response.json();
        setConfigured(Boolean(payload.configured));
        setAuthenticated(Boolean(payload.authenticated));
        if (payload.authenticated) {
          await loadSubmissions();
        }
      } catch {
        setConfigured(false);
        setAuthenticated(false);
      } finally {
        setAuthChecked(true);
      }
    })();
  }, []);

  const stats = useMemo(() => {
    const perForm = new Map<string, number>();
    for (const item of submissions) {
      perForm.set(item.formType, (perForm.get(item.formType) || 0) + 1);
    }
    return Array.from(perForm.entries()).sort((a, b) => b[1] - a[1]);
  }, [submissions]);

  const formOptions = useMemo(() => stats.map(([formType]) => formType), [stats]);

  const filteredSubmissions = useMemo(() => {
    if (selectedForm === "all") return submissions;
    return submissions.filter((item) => item.formType === selectedForm);
  }, [submissions, selectedForm]);

  const deleteSubmissions = async (ids: string[]) => {
    if (ids.length === 0) return;

    const message =
      ids.length === 1
        ? "Delete this submission? This cannot be undone."
        : `Delete ${ids.length} submissions? This cannot be undone.`;
    if (!window.confirm(message)) return;

    setDeleting(true);
    try {
      const response = await fetch("/api/admin/submissions/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.success) {
        throw new Error(payload.message || "Failed to delete submissions");
      }

      const idSet = new Set(ids);
      setSubmissions((prev) => prev.filter((item) => !idSet.has(item.id)));
      setSelectedIds((prev) => {
        const next = new Set(prev);
        for (const id of ids) next.delete(id);
        return next;
      });
      toast.success(`Deleted ${payload.deleted ?? ids.length} submission${(payload.deleted ?? ids.length) === 1 ? "" : "s"}.`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to delete submissions");
    } finally {
      setDeleting(false);
    }
  };

  const toggleRowSelected = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allFilteredSelected =
    filteredSubmissions.length > 0 && filteredSubmissions.every((item) => selectedIds.has(item.id));

  const toggleSelectAllFiltered = () => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allFilteredSelected) {
        for (const item of filteredSubmissions) next.delete(item.id);
      } else {
        for (const item of filteredSubmissions) next.add(item.id);
      }
      return next;
    });
  };

  const selectedCount = useMemo(
    () => filteredSubmissions.filter((item) => selectedIds.has(item.id)).length,
    [filteredSubmissions, selectedIds],
  );

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username.trim() || !password) {
      toast.error("Please enter admin username and password.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.success) {
        throw new Error(payload.message || "Login failed");
      }
      setAuthenticated(true);
      setPassword("");
      await loadSubmissions();
      toast.success("Logged in.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      setAuthenticated(false);
      setSubmissions([]);
      setSelectedForm("all");
      toast.success("Logged out.");
    } finally {
      setLoading(false);
    }
  };

  if (!authChecked) {
    return <div className="mx-auto max-w-[1400px] px-4 py-16 text-center text-foreground/70">Loading admin...</div>;
  }

  if (!configured) {
    return (
      <div className="mx-auto max-w-[1400px] px-4 py-16">
        <Card className="mx-auto max-w-2xl rounded-lg border bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Admin Not Configured</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-foreground/70">
            Set <code>ADMIN_USERNAME</code> and <code>ADMIN_PASSWORD</code> in your server environment, then reload.
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="mx-auto max-w-[1400px] px-4 py-16">
        <Card className="mx-auto max-w-md rounded-lg border bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form noValidate className="space-y-4" onSubmit={handleLogin}>
              <div className="space-y-2">
                <Label htmlFor="admin-username">Username</Label>
                <Input id="admin-username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>
                <Input id="admin-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-[1700px] px-4 py-8 md:px-6 md:py-10 space-y-5">
      <div className="flex flex-col gap-3 border-b pb-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Form Submissions Admin</h1>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              if (filteredSubmissions.length === 0) {
                toast.error("No submissions to export.");
                return;
              }
              const today = new Date().toISOString().slice(0, 10);
              const scope = selectedForm === "all" ? "all" : selectedForm.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              downloadCsv(`conquermark-leads-${scope}-${today}.csv`, buildCsv(filteredSubmissions));
              toast.success(`Exported ${filteredSubmissions.length} leads.`);
            }}
            disabled={loading || filteredSubmissions.length === 0}
            className="bg-green-600 text-white hover:bg-green-600 hover:text-white"
          >
            Export CSV
          </Button>
          <Button
            variant="destructive"
            onClick={() =>
              deleteSubmissions(
                filteredSubmissions.filter((item) => selectedIds.has(item.id)).map((item) => item.id),
              )
            }
            disabled={loading || deleting || selectedCount === 0}
            className="hover:bg-destructive hover:text-white"
          >
            {deleting ? "Deleting..." : `Delete Selected${selectedCount > 0 ? ` (${selectedCount})` : ""}`}
          </Button>
          <Button
            variant="outline"
            onClick={loadSubmissions}
            disabled={loading}
            className="hover:bg-transparent hover:text-current"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </Button>
          <Button
            variant="destructive"
            onClick={handleLogout}
            disabled={loading}
            className="hover:bg-destructive hover:text-white"
          >
            Logout
          </Button>
        </div>
      </div>

      <Card className="rounded-lg border bg-white shadow-sm">
        <CardHeader>
          <CardTitle>
            Total Submissions: {filteredSubmissions.length}
            {selectedForm !== "all" ? ` (Filtered from ${submissions.length})` : ""}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-foreground/80">
          {stats.length === 0 ? (
            "No submissions yet."
          ) : (
            <div className="flex flex-wrap gap-2">
              {stats.map(([formType, count]) => (
                <span key={formType} className="rounded-md border bg-slate-50 px-2.5 py-1 text-xs md:text-sm">
                  {formType}: {count}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="rounded-lg border bg-white shadow-sm">
        <CardHeader>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <CardTitle>Recent Leads</CardTitle>
            <div className="w-full md:w-[320px]">
              <Label htmlFor="admin-form-filter" className="mb-2 block">
                Filter by form
              </Label>
              <select
                id="admin-form-filter"
                value={selectedForm}
                onChange={(e) => setSelectedForm(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="all">All Forms</option>
                {formOptions.map((formType) => (
                  <option key={formType} value={formType}>
                    {formType}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto rounded-md border">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-slate-100">
                <tr className="border-b">
                  <th className="py-3 px-3 w-[40px] text-left">
                    <input
                      type="checkbox"
                      aria-label="Select all"
                      checked={allFilteredSelected}
                      onChange={toggleSelectAllFiltered}
                      disabled={filteredSubmissions.length === 0}
                      className="h-4 w-4 cursor-pointer"
                    />
                  </th>
                  <th className="text-left py-3 px-3 font-semibold">Time</th>
                  <th className="text-left py-3 px-3 font-semibold">Form</th>
                  <th className="text-left py-3 px-3 font-semibold">Name</th>
                  <th className="text-left py-3 px-3 font-semibold">Email</th>
                  <th className="text-left py-3 px-3 font-semibold">Details</th>
                  <th className="text-left py-3 px-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubmissions.map((item, index) => (
                  <tr key={`${item.id}-${index}`} className="border-b align-top odd:bg-white even:bg-slate-50/50">
                    <td className="py-3 px-3 align-middle">
                      <input
                        type="checkbox"
                        aria-label="Select submission"
                        checked={selectedIds.has(item.id)}
                        onChange={() => toggleRowSelected(item.id)}
                        className="h-4 w-4 cursor-pointer"
                      />
                    </td>
                    <td className="whitespace-nowrap py-3 px-3">{formatDate(item.timestamp)}</td>
                    <td className="py-3 px-3">{item.formType || "-"}</td>
                    <td className="py-3 px-3">{item.name || "-"}</td>
                    <td className="py-3 px-3">{item.email || "-"}</td>
                    <td className="py-3 px-3">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setDetailsItem(item)}
                        disabled={Object.entries(item.data || {}).length === 0}
                        className="hover:bg-transparent hover:text-current"
                      >
                        View Details
                      </Button>
                    </td>
                    <td className="py-3 px-3">
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteSubmissions([item.id])}
                        disabled={deleting}
                        className="hover:bg-destructive hover:text-white"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
                {filteredSubmissions.length === 0 && (
                  <tr>
                    <td className="py-6 px-3 text-foreground/60" colSpan={7}>
                      No submissions for selected form.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={detailsItem !== null} onOpenChange={(open) => !open && setDetailsItem(null)}>
        <DialogContent className="max-w-2xl [&>button]:focus:ring-0 [&>button]:focus:ring-offset-0 [&>button]:focus-visible:outline-none [&>button]:focus-visible:ring-0">

          <DialogHeader>
            <DialogTitle>
              {detailsItem?.formType || "Submission"} Details
            </DialogTitle>
          </DialogHeader>
          {detailsItem && (
            <div className="space-y-3 text-sm">
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-foreground/60">
                <span><span className="font-medium text-foreground/70">Time:</span> {formatDate(detailsItem.timestamp)}</span>
                {detailsItem.page && <span><span className="font-medium text-foreground/70">Page:</span> {detailsItem.page}</span>}
              </div>
              <div className="max-h-[60vh] overflow-auto rounded border bg-white">
                {Object.entries(detailsItem.data || {}).length === 0 ? (
                  <p className="p-3 text-foreground/60">No additional details.</p>
                ) : (
                  <table className="w-full text-sm">
                    <thead className="bg-slate-100">
                      <tr className="border-b">
                        <th className="text-left py-2 px-3 font-semibold w-[180px]">Field</th>
                        <th className="text-left py-2 px-3 font-semibold">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(detailsItem.data || {}).map(([key, value]) => (
                        <tr key={key} className="border-b last:border-b-0 odd:bg-white even:bg-slate-50/50">
                          <td className="py-2 px-3 font-medium text-foreground/70 align-top">{formatDetailLabel(key)}</td>
                          <td className="py-2 px-3 break-words align-top">{formatDetailValue(value)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
    </div>
  );
}
