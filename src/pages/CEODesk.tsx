import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";

const CEODesk = () => {
  return (
    <PageLayout>
      <PageBanner title="CEO Desk" breadcrumb="CEO Desk" />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <span className="text-sm font-heading font-bold tracking-widest uppercase text-gold">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-3 mb-6">
              A Message from Our CEO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Radiant Control Systems, we believe in the transformative power of industrial automation. Since our founding in 2005, we have been dedicated to providing cutting-edge technical solutions that automate, monitor, and secure industrial systems for our valued customers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our commitment extends beyond delivering projects – we build lasting partnerships. Every team member at Radiant is personally invested in each customer's success, because your growth is our growth.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We continue to innovate and expand our capabilities, anticipating future challenges our clients may face while staying at the forefront of industrial automation technologies. Thank you for trusting Radiant Control Systems as your automation partner.
            </p>
            <div className="mt-10 border-l-4 border-gold pl-6">
              <p className="text-foreground font-heading font-bold text-lg">Innovation meets Reliability</p>
              <p className="text-muted-foreground text-sm mt-1">— Radiant Control Systems Leadership</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CEODesk;
