import { Seo } from "@/lib/seo";

export default function AdminSettings() {
  return (
    <>
      <Seo title="Settings | 7 Doors Admin" description="Admin settings." path="/admin/settings" noindex />
      <div className="mb-6">
        <h1 className="font-display text-2xl text-ink">Settings</h1>
        <p className="mt-1 text-sm text-slate">Manage your organisation and team preferences.</p>
      </div>

      <div className="max-w-2xl space-y-6">
        <div className="rounded-lg border border-line bg-paper p-6">
          <h2 className="font-display text-lg text-ink">Organisation</h2>
          <div className="mt-4 space-y-4">
            <Row label="Organisation name" value="7 Doors Real Estate Consultancy" />
            <Row label="Primary city" value="Bengaluru" />
            <Row label="Team size" value="24 members" />
          </div>
        </div>

        <div className="rounded-lg border border-line bg-paper p-6">
          <h2 className="font-display text-lg text-ink">Notifications</h2>
          <div className="mt-4 space-y-3">
            <Toggle label="Email me when a new candidate applies" defaultOn />
            <Toggle label="Weekly hiring summary" defaultOn />
            <Toggle label="Alert when a space goes to waitlist" />
          </div>
        </div>
      </div>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-line pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-slate">{label}</span>
      <span className="text-sm font-medium text-ink">{value}</span>
    </div>
  );
}

function Toggle({ label, defaultOn = false }: { label: string; defaultOn?: boolean }) {
  return (
    <label className="flex cursor-pointer items-center justify-between">
      <span className="text-sm text-ink/85">{label}</span>
      <span className="relative inline-flex">
        <input type="checkbox" defaultChecked={defaultOn} className="peer sr-only" />
        <span className="h-6 w-11 rounded-full bg-line transition-colors peer-checked:bg-navy" />
        <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-paper transition-transform peer-checked:translate-x-5" />
      </span>
    </label>
  );
}
