import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";

export function TrustBar() {
  return (
    <div className="border-y border-line bg-paper-deep/60 py-5">
      <Container>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="eyebrow shrink-0">Active in</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate sm:justify-end">
            {siteConfig.cities.map((city, i) => (
              <li key={city} className="flex items-center gap-6">
                <span>{city}</span>
                {i < siteConfig.cities.length - 1 && (
                  <span className="hidden h-1 w-1 rounded-full bg-line sm:inline-block" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
