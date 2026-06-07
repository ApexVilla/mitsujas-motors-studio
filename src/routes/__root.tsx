import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CanvasNeuralNet } from "@/components/ui/CanvasNeuralNet";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MITSUJAS GUAYANA — Repuestos Mitsubishi en Puerto Ordaz, Venezuela" },
      { name: "description", content: "Especialistas en repuestos originales y alternativos para Mitsubishi en Puerto Ordaz, Estado Bolívar. Lancer, Montero, Outlander, L200, ASX. Stock permanente y envíos a toda Venezuela. ¡Consulta por WhatsApp!" },
      { name: "keywords", content: "repuestos mitsubishi puerto ordaz, autopartes mitsubishi venezuela, repuestos originales mitsubishi, repuestos mitsubishi guayana, mitsubishi puerto ordaz, repuestos lancer, repuestos montero, repuestos outlander, repuestos L200, mitsujas guayana, autoparte venezuela, repuesto mitsubishi barquisimeto, repuesto mitsubishi caracas" },
      { name: "author", content: "MITSUJAS GUAYANA C.A" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "VE-F" },
      { name: "geo.placename", content: "Puerto Ordaz, Estado Bolívar, Venezuela" },
      { name: "geo.position", content: "8.3050;-62.7100" },
      { name: "ICBM", content: "8.3050, -62.7100" },
      { property: "og:title", content: "MITSUJAS GUAYANA — Repuestos Mitsubishi en Puerto Ordaz" },
      { property: "og:description", content: "Especialistas en repuestos originales y alternativos para Mitsubishi en Puerto Ordaz, Estado Bolívar, Venezuela. Lancer, Montero, Outlander, L200 y más." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_VE" },
      { property: "og:site_name", content: "MITSUJAS GUAYANA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@MitsujasGuayana" },
      { name: "twitter:title", content: "MITSUJAS GUAYANA — Repuestos Mitsubishi en Puerto Ordaz" },
      { name: "twitter:description", content: "Especialistas en repuestos originales y alternativos para Mitsubishi en Puerto Ordaz, Venezuela." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a88a0342-e156-4b49-8f3d-840c70030445/id-preview-61094ae3--cb35b40d-e3a7-497d-b4b2-06dbef17e213.lovable.app-1780407631577.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a88a0342-e156-4b49-8f3d-840c70030445/id-preview-61094ae3--cb35b40d-e3a7-497d-b4b2-06dbef17e213.lovable.app-1780407631577.png" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoPartsStore"],
    "name": "MITSUJAS GUAYANA C.A",
    "description": "Especialistas en repuestos originales y alternativos para vehículos Mitsubishi en Puerto Ordaz, Estado Bolívar, Venezuela.",
    "url": "https://mitsujasguayana.com",
    "telephone": ["+58-426-4054560", "+58-424-9344776"],
    "email": "mitsujasguayana@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "CC Tirado, Local 1 y 2, Unare 1",
      "addressLocality": "Puerto Ordaz",
      "addressRegion": "Estado Bolívar",
      "postalCode": "8050",
      "addressCountry": "VE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 8.305,
      "longitude": -62.71
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "14:00" }
    ],
    "sameAs": [
      "https://instagram.com/mitsujasguayana",
      "https://facebook.com/mitsujasguayana",
      "https://wa.me/584264054560"
    ],
    "priceRange": "$$",
    "servesCuisine": null,
    "currenciesAccepted": "VES, USD"
  };

  return (
    <html lang="es">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <CanvasNeuralNet />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
