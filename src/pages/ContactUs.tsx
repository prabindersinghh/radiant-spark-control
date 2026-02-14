import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@radiantcontrolsystems.com?subject=Contact from ${form.name}&body=${form.message}%0A%0APhone: ${form.phone}%0AEmail: ${form.email}`;
  };

  return (
    <PageLayout>
      <PageBanner title="Contact Us" />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-3 mb-8">
                We'd Love to Hear from You
              </h2>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Address", value: "6340 Sugarloaf Parkway, Suite # 200, Duluth, GA 30097" },
                  { icon: Phone, label: "Phone", value: "(470) 915-0965", href: "tel:+14709150965" },
                  { icon: Mail, label: "Email", value: "info@radiantcontrolsystems.com", href: "mailto:info@radiantcontrolsystems.com" },
                  { icon: Clock, label: "Hours", value: "Monday – Friday, 8:00 AM – 5:00 PM EST" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md gradient-navy flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <span className="text-xs font-heading font-bold text-gold uppercase tracking-wider">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="block text-foreground hover:text-gold transition-colors mt-1">{item.value}</a>
                      ) : (
                        <p className="text-foreground mt-1">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div>
                <label className="block text-sm font-heading font-bold text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-heading font-bold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-bold text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-heading font-bold text-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full gradient-gold text-secondary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactUs;
