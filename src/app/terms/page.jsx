export const metadata = {
  title: "Terms of Service - Jacob Tech Info",
};

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Terms</h2>
        <p>By accessing the website at Jacob Tech Info, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Jacob Tech Info's website for personal, non-commercial transitory viewing only.</p>
      </div>
    </div>
  );
};

export default TermsPage;
