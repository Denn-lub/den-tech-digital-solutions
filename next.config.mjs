/** @type {import('next').NextConfig} */

// Security headers applied to every response. Kept out of middleware.ts on
// purpose: middleware-based CSP/nonce setups have been the target of
// disclosed Next.js App Router vulnerabilities, and this site has no inline
// <script> tags that need a nonce, so a static, config-level policy is both
// simpler and avoids that entire class of bug.
const contentSecurityPolicy = [
  "default-src 'self'",
  // Next.js production output ships JS as external /_next/static chunks, so
  // 'self' is sufficient here — no 'unsafe-inline' / 'unsafe-eval' needed.
  "script-src 'self'",
  // Tailwind + framer-motion + the style-jsx blocks in this project rely on
  // inline style attributes, which CSP treats as a separate concern from
  // script execution and carries materially lower risk.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // don't advertise the framework/version to attackers
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
