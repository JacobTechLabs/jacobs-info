import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Contact Us - Jacob Tech Info",
  description: "Get in touch with the Jacob Tech Info team.",
};

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="text-center space-y-6 mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">Let's talk.</h1>
        <p className="text-xl text-muted-foreground">
          Have a project in mind, or just want to say hi? We'd love to hear from you.
        </p>
      </div>

      <form className="space-y-6 bg-card p-8 rounded-2xl border shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium leading-none">First Name</label>
            <Input id="firstName" placeholder="Jacob" />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium leading-none">Last Name</label>
            <Input id="lastName" placeholder="Smith" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
          <Input id="email" type="email" placeholder="hello@example.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
          <textarea 
            id="message" 
            rows="5"
            className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="How can we help?"
          />
        </div>
        <Button size="lg" className="w-full">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactPage;
