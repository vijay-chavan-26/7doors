import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, X, ImagePlus, Check, Star, MapPin } from "lucide-react";
import { Seo } from "@/lib/seo";
import { allCities, allTypes } from "@/data/coworking";
import { amenityIcon } from "@/lib/iconMap";
import { cn } from "@/lib/utils";

const amenityOptions = [
  "High-speed Wi-Fi",
  "Meeting rooms",
  "Private cabins",
  "Cafeteria",
  "24/7 access",
  "Parking",
  "Phone booths",
  "Event space",
  "Wellness room",
  "Shower rooms",
  "Game zone",
  "Bike parking",
];

const schema = z.object({
  name: z.string().trim().min(3, "Enter a space name"),
  tagline: z.string().trim().min(5, "Add a short tagline"),
  city: z.string().min(1, "Select a city"),
  locality: z.string().trim().min(2, "Enter the locality"),
  type: z.string().min(1, "Select a type"),
  pricePerSeat: z
    .string()
    .min(1, "Enter a price")
    .refine((v) => Number(v) >= 1000, "Enter a realistic price"),
  capacity: z
    .string()
    .min(1, "Enter capacity")
    .refine((v) => Number(v) >= 1, "Enter capacity"),
  description: z.string().trim().min(20, "Add a longer description (20+ characters)"),
});

type FormValues = z.infer<typeof schema>;

export default function AdminSpaceNew() {
  const navigate = useNavigate();
  const [previews, setPreviews] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<string[]>(["High-speed Wi-Fi", "Meeting rooms"]);
  const [dragging, setDragging] = useState(false);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { pricePerSeat: "10000", capacity: "50" },
  });

  const live = watch();

  const addFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    const urls = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .map((f) => URL.createObjectURL(f));
    setPreviews((prev) => [...prev, ...urls].slice(0, 8));
  }, []);

  const toggleAmenity = (a: string) =>
    setAmenities((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));

  const onSubmit = (data: FormValues) => {
    // Frontend-only demo: in production this would POST to your API and
    // upload the images to object storage.
    console.log("New space", { ...data, amenities, imageCount: previews.length });
    setDone(true);
    setTimeout(() => navigate("/admin/spaces"), 1400);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center rounded-lg border border-line bg-paper px-6 py-20 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
          <Check className="h-6 w-6" />
        </span>
        <h2 className="mt-5 font-display text-xl text-ink">Space saved</h2>
        <p className="mt-2 text-sm text-slate">Redirecting to your spaces…</p>
      </div>
    );
  }

  return (
    <>
      <Seo title="Add Space | 7 Doors Admin" description="List a new coworking space." path="/admin/spaces/new" noindex />

      <div className="mb-6">
        <h1 className="font-display text-2xl text-ink">List a new space</h1>
        <p className="mt-1 text-sm text-slate">Add photos and details — see the live preview as you go.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_22rem]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {/* image upload */}
          <div className="rounded-lg border border-line bg-paper p-6">
            <h2 className="font-display text-lg text-ink">Photos</h2>
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                addFiles(e.dataTransfer.files);
              }}
              onClick={() => inputRef.current?.click()}
              className={cn(
                "mt-4 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed py-10 text-center transition-colors",
                dragging ? "border-brass bg-brass/5" : "border-line hover:border-brass/60",
              )}
            >
              <Upload className="h-7 w-7 text-slate-light" />
              <p className="mt-3 text-sm font-medium text-ink">Drag photos here, or click to browse</p>
              <p className="mt-1 text-xs text-slate">JPG or PNG, up to 8 images</p>
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => addFiles(e.target.files)}
              />
            </div>

            {previews.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {previews.map((src, i) => (
                  <div key={i} className="group relative aspect-square overflow-hidden rounded-md border border-line">
                    <img src={src} alt={`Upload ${i + 1}`} className="h-full w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setPreviews((prev) => prev.filter((_, idx) => idx !== i))}
                      className="absolute right-1 top-1 rounded-full bg-navy-deep/80 p-1 text-paper opacity-0 transition-opacity group-hover:opacity-100"
                      aria-label="Remove"
                    >
                      <X className="h-3 w-3" />
                    </button>
                    {i === 0 && (
                      <span className="absolute bottom-1 left-1 rounded bg-brass px-1.5 py-0.5 text-[9px] font-medium text-navy-deep">
                        Cover
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* details */}
          <div className="rounded-lg border border-line bg-paper p-6">
            <h2 className="font-display text-lg text-ink">Details</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Space name" error={errors.name?.message}>
                <input className={inputClasses} placeholder="e.g. Helix Workspaces — HSR" {...register("name")} />
              </Field>
              <Field label="Tagline" error={errors.tagline?.message}>
                <input className={inputClasses} placeholder="Short one-liner" {...register("tagline")} />
              </Field>
              <Field label="City" error={errors.city?.message}>
                <select className={inputClasses} defaultValue="" {...register("city")}>
                  <option value="" disabled>Select city</option>
                  {allCities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <Field label="Locality" error={errors.locality?.message}>
                <input className={inputClasses} placeholder="e.g. HSR Layout" {...register("locality")} />
              </Field>
              <Field label="Type" error={errors.type?.message}>
                <select className={inputClasses} defaultValue="" {...register("type")}>
                  <option value="" disabled>Select type</option>
                  {allTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Price / seat (₹)" error={errors.pricePerSeat?.message}>
                  <input type="number" className={inputClasses} {...register("pricePerSeat")} />
                </Field>
                <Field label="Capacity" error={errors.capacity?.message}>
                  <input type="number" className={inputClasses} {...register("capacity")} />
                </Field>
              </div>
            </div>
            <Field label="Description" error={errors.description?.message} className="mt-4">
              <textarea rows={4} className={cn(inputClasses, "resize-none")} placeholder="Describe the space, location, and who it suits..." {...register("description")} />
            </Field>
          </div>

          {/* amenities */}
          <div className="rounded-lg border border-line bg-paper p-6">
            <h2 className="font-display text-lg text-ink">Amenities</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {amenityOptions.map((a) => {
                const Icon = amenityIcon(a);
                const active = amenities.includes(a);
                return (
                  <button
                    key={a}
                    type="button"
                    onClick={() => toggleAmenity(a)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                      active
                        ? "border-navy bg-navy text-paper"
                        : "border-line bg-paper text-slate hover:border-brass",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {a}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3">
            <button type="submit" className="rounded-md bg-navy px-6 py-3 text-sm font-medium text-paper hover:bg-navy-deep">
              Publish space
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/spaces")}
              className="rounded-md border border-line px-6 py-3 text-sm font-medium text-ink hover:border-brass"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* live preview */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate">Live preview</p>
          <div className="overflow-hidden rounded-lg border border-line bg-paper">
            <div className="relative aspect-[16/11] bg-paper-deep">
              {previews[0] ? (
                <img src={previews[0]} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center text-slate-light">
                  <ImagePlus className="h-8 w-8" />
                  <p className="mt-2 text-xs">Cover photo</p>
                </div>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg text-ink">{live.name || "Space name"}</h3>
                <span className="flex items-center gap-1 rounded-md bg-paper-deep px-2 py-1 text-xs text-ink">
                  <Star className="h-3 w-3 fill-brass text-brass" />
                  New
                </span>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-slate">
                <MapPin className="h-3 w-3" />
                {live.locality || "Locality"}, {live.city || "City"}
              </p>
              <p className="mt-3 text-sm text-slate line-clamp-2">{live.tagline || "Your tagline appears here."}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {amenities.slice(0, 4).map((a) => {
                  const Icon = amenityIcon(a);
                  return (
                    <span key={a} className="flex h-7 w-7 items-center justify-center rounded-md border border-line text-slate">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                  );
                })}
              </div>
              <div className="mt-4 border-t border-line pt-3">
                <p className="font-mono text-lg font-medium text-ink">
                  ₹{Number(live.pricePerSeat || 0).toLocaleString("en-IN")}
                </p>
                <p className="text-[11px] text-slate">per seat / month</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

const inputClasses =
  "w-full rounded-md border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-light focus:border-brass focus:outline-none transition-colors";

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-medium text-ink/80">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
