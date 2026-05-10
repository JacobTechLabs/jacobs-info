export const metadata = {
  title: "Privacy Policy - Jacob Tech Info",
};

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
      <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>Your privacy is important to us. It is Jacob Tech Info's policy to respect your privacy regarding any information we may collect from you across our website.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information we collect</h2>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How we use information</h2>
        <p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features.</p>
      </div>
    </div>
  );
};

export default PrivacyPage;
