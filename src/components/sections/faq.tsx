import React from "react";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      id: "item-1",
      question: "Do Fashion Designers go to Fashion Designing college in India?",
      answer:
        "Yes, of course, Fashion Designers need to go to college to understand the basics of the fashion designing world and enhance their skills with practical hands-on experience and knowledge. With the help of professional course in fashion designing, the student can have the advantage over the others, A fashion designing course from a repute institute or a college helps in making a student successful.",
    },
    {
      id: "item-2",
      question: "Can I do Fashion Designing Courses after the 12th?",
      answer:
        "After completing your 12th, you can enroll in various undergraduate fashion designing Courses. These Courses typically include a Bachelor of Design (B.Des) or B.Sc. We offer a complete curriculum covering various aspects of fashion, including design principles, garment construction, textiles, fashion history, and fashion business management. \n\nIn conclusion, Yes, You can pursue fashion designing after the 12th standard or equivalent by applying for a Bachelor’s Degree in fashion designing at the Indian Institute of Fashion and Design. The right time to join fashion designing course is after 10+2th completion, this will help students to learn the skills of fashion designing in continuation with their study cycle.",
    },
    {
      id: "item-3",
      question: "Which College is best for Fashion Design Course in India?",
      answer:
        "Choosing the best college for a Fashion Design Course in India depends on various factors such as your location preference, budget, entrance exam scores, and personal preferences. \n\nThere are many good institutes and colleges for fashion designing but undoubtedly, Indian Institute of Fashion and Design – IIFT is the best fashion design college in Chandigarh, India to provide practical and career-oriented fashion designing courses to aspiring budding designers. Here are some points to consider when evaluating the suitability of IIFT for your fashion design education:\n\n- Faculty Expertise\n- Infrastructure and Facilities\n- Course Curriculum\n- Industry Exposure\n- Placement Records\n- Reviews and Feedback\n- Entrance Exams",
    },
    {
      id: "item-4",
      question: "What qualification required to become a Fashion Designer?",
      answer:
        "Minimum of 10th class for Diploma in Fashion Design and a Minimum of 12th Class or equivalent is required to pursue a Bachelor’s in fashion design and Graduation is required in any stream to do Master’s in Fashion design. \n\nTo become a fashion designer, you typically need a combination of education, skills, and experience. Here are the qualifications and steps typically required:\n\nEducational Qualifications: High School Diploma: Start by completing your high school education, which is usually required for admission to fashion design programs.\n\nBachelor’s Degree: Pursuing a Bachelor of Design (B.Des) or B.sc in Fashion design is a common path. These undergraduate programs provide a solid foundation in fashion design principles, textiles, garment construction, and other related subjects. Admission to these programs often requires a good academic record and, in some cases, a portfolio of your work.",
    },
    {
      id: "item-5",
      question: "How much does it cost to learn fashion designing?",
      answer:
        "Fashion Design Course fee depends on the course you choose to do. On average fashion design courses cost 1 lakh onward at Fashion Design Colleges. There is a variable cost of material involved in learning Fashion Designing Course in India.",
    },
    {
      id: "item-6",
      question: "Why Fashion Designing Colleges in Chandigarh is the Best?",
      answer:
        "There are many reasons why fashion designing colleges in Chandigarh are considered to be the best. Here are some of the factors that contribute to their reputation:\n\nIn addition to these factors, Chandigarh is also a major fashion hub in India. This means that students have the opportunity to intern with leading designers and brands, and they can also network with other professionals in the industry.\n\nIf you are interested in pursuing a career in fashion design, Chandigarh is a great place to start your education. The city has a number of excellent colleges that offer high-quality education and excellent placement opportunities.",
    },
  ];

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#111111] font-display mb-2">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full border-t border-[#dddddd]">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id} 
              className="border-b border-[#dddddd] py-2"
            >
              <AccordionTrigger className="flex flex-1 items-center justify-between py-5 text-left transition-all hover:no-underline [&[data-state=open]>span]:text-[#ed1c24] group">
                <span className="text-[17px] md:text-[18px] font-semibold text-[#111111] font-body transition-colors group-hover:text-[#ed1c24]">
                  {faq.question}
                </span>
                <div className="relative h-6 w-6 flex items-center justify-center">
                  <Plus className="h-6 w-6 shrink-0 text-[#111111] transition-transform duration-200 group-data-[state=open]:hidden" />
                  <Minus className="h-6 w-6 shrink-0 text-[#ed1c24] hidden group-data-[state=open]:block" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8 pt-2">
                <div className="text-[16px] leading-[1.7] text-[#111111] font-body whitespace-pre-line max-w-4xl">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;