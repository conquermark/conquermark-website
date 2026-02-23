import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Breadcrumbs() {
  const [location] = useLocation();
  
  // Skip breadcrumbs on home page
  if (location === "/") return null;

  const pathSegments = location.split("/").filter((segment) => segment);
  
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    
    // Format segment for display (replace hyphens with spaces, capitalize)
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
      
    return {
      label,
      path,
      isLast: index === pathSegments.length - 1
    };
  });

  // Generate Schema.org BreadcrumbList
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://conquermark.com"
      },
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://conquermark.com${item.path}`
      }))
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="py-4 container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link href="/">
              <a className="hover:text-primary transition-colors flex items-center">
                <Home className="h-4 w-4" />
                <span className="sr-only">Home</span>
              </a>
            </Link>
          </li>
          
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
              {item.isLast ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.path}>
                  <a className="hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
