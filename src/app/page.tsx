"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, CheckCircle } from "lucide-react";

const assetMap = [
  {"id":"heroImage","url":"https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Abstract green matrix code background with binary style."},
  {"id":"featureImage","url":"https://images.pexels.com/photos/7679829/pexels-photo-7679829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Man reviewing sneakers in-store captured on smartphone, showcasing footwear."},
  {"id":"teamMember1","url":"https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Young professional leading a diverse team in a contemporary office setting."},
  {"id":"teamMember2","url":"https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Young professional leading a diverse team in a contemporary office setting."}
];

function resolveAsset(id) {
  const asset = assetMap.find(a => a.id === id);
  return asset ? { url: asset.url, alt: asset.alt ?? "Decorative image" } : { url: "/public/images/placeholder.webp", alt: "Decorative image" };
}

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "feature" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Webild"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Platform"
            description="Experience the future of green technology."
            imageSrc={resolveAsset("heroImage").url}
            imageAlt={resolveAsset("heroImage").alt}
            buttons={[
              { text: "Get Started", href: "#" },
              { text: "Learn More", href: "about"}
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We are committed to sustainable innovation"
            buttons={[
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Advanced Analytics", description: "Get detailed insights into performance", icon: Sparkles },
              { title: "User-Friendly Interface", description: "Designed with simplicity in mind", icon: CheckCircle }
            ]}
            title="Our Features"
            description="Discover what makes us different"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Connected"
            description="Subscribe to get the latest updates."
            imageSrc={resolveAsset("featureImage").url}
            imageAlt={resolveAsset("featureImage").alt}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About", href: "about" }, { label: "Careers", href: "#" }] },
              { title: "Resources", items: [{ label: "Blog", href: "#" }, { label: "FAQ", href: "#" }] }
            ]}
            copyrightText="© 2025 Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
