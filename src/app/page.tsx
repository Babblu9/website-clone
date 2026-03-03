import Hero from "@/components/sections/hero";
import Introduction from "@/components/sections/introduction";
import HowWeTeach from "@/components/sections/how-we-teach";
import AwardsSlider from "@/components/sections/awards-slider";
import FeatureCards from "@/components/sections/feature-cards";
import InterestCategories from "@/components/sections/interest-categories";
import IndustryMentors from "@/components/sections/industry-mentors";
import RecentEvents from "@/components/sections/recent-events";
import VideoTestimonials from "@/components/sections/video-testimonials";
import PartnershipsRecruiters from "@/components/sections/partnerships-recruiters";
import AdmissionForm from "@/components/sections/admission-form";
import FAQ from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <HowWeTeach />
      <AwardsSlider />
      <FeatureCards />
      <InterestCategories />
      <IndustryMentors />
      <RecentEvents />
      <VideoTestimonials />
      <PartnershipsRecruiters />
      <AdmissionForm />
      <FAQ />
    </>
  );
}
