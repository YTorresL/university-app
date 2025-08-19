import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/sections/hero"
import { WhyChooseUs } from "@/sections/whyChooseUs"
import { StudyOptions } from "@/sections/studyOptions"
import { UniversityInfo } from "@/sections/universityInfo"
import { Pricing } from "@/sections/pricing"
import { Process } from "@/sections/process"
import { Testimonials } from "@/sections/testimonials"
import { Contact } from "@/sections/contact"
import { ChatbotModal } from "@/components/layout/chatbot"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <StudyOptions />
        <UniversityInfo />
        <Pricing />
        <Process />
        <Testimonials />
        <Contact />
        <ChatbotModal />
        <Footer />
      </main>
    </>
  )
}
