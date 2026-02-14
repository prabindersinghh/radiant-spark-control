import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock } from "lucide-react";

const Careers = () => {
  return (
    <PageLayout>
      <PageBanner title="Careers" />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">Join Our Team</span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-3 mb-4">
              Build Your Career with Radiant
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our goals are to Invent, Develop, Plan, Inspire, Share, and Innovate. We're always looking for talented professionals to join our growing team.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {[
              { title: "PLC Programmer", location: "Duluth, GA", type: "Full-time" },
              { title: "Field Service Technician", location: "Duluth, GA", type: "Full-time" },
              { title: "Control Panel Designer", location: "Duluth, GA", type: "Full-time" },
            ].map((job) => (
              <div key={job.title} className="bg-card border border-border rounded-lg p-6 hover:border-gold/50 transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact-us"
                    className="gradient-gold text-secondary-foreground px-6 py-2.5 rounded-md font-heading font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Don't see a position that fits? Send us your resume!</p>
            <Link
              to="/contact-us"
              className="inline-block border-2 border-foreground/20 text-foreground px-8 py-3 rounded-md font-heading font-bold text-sm uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
