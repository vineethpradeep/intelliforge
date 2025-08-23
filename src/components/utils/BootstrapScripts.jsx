import Script from "next/script";

export default function BootstrapScripts() {
  return (
    <>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/lib/wow/wow.min.js" strategy="afterInteractive" />
      <Script src="/lib/easing/easing.min.js" strategy="afterInteractive" />
      <Script
        src="/lib/waypoints/waypoints.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/lib/counterup/counterup.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/lib/owlcarousel/owl.carousel.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
