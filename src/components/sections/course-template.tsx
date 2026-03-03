import React from 'react';
import { Clock, MapPin, Users, GraduationCap, ChevronRight } from 'lucide-react';

interface CourseTemplateProps {
    title: string;
    category: string;
    duration?: string;
    eligibility?: string;
    seats?: string;
    location?: string;
    intro: React.ReactNode;
    structure: React.ReactNode;
    careerOptions?: React.ReactNode;
}

export default function CourseTemplate({
    title,
    category,
    duration,
    eligibility,
    seats,
    location,
    intro,
    structure,
    careerOptions
}: CourseTemplateProps) {
    return (
        <div className="bg-white min-h-screen pt-[120px] pb-[80px]">

            {/* Hero Header */}
            <div className="bg-[#111111] text-white py-16 px-5 lg:px-10 border-b-4 border-[#ED1C24]">
                <div className="container mx-auto max-w-[1200px]">
                    <span className="text-[#ED1C24] font-body text-[14px] font-bold uppercase tracking-wider mb-2 block">
                        {category}
                    </span>
                    <h1 className="font-display font-extrabold text-[36px] md:text-[52px] leading-[1.1] uppercase tracking-tight mb-8">
                        {title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-[14px] font-body text-[#cccccc]">
                        {duration && (
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-[#ED1C24]" />
                                <span><strong className="text-white">Duration:</strong> {duration}</span>
                            </div>
                        )}
                        {eligibility && (
                            <div className="flex items-center gap-2">
                                <GraduationCap size={18} className="text-[#ED1C24]" />
                                <span><strong className="text-white">Eligibility:</strong> {eligibility}</span>
                            </div>
                        )}
                        {seats && (
                            <div className="flex items-center gap-2">
                                <Users size={18} className="text-[#ED1C24]" />
                                <span><strong className="text-white">Seats:</strong> {seats}</span>
                            </div>
                        )}
                        {location && (
                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-[#ED1C24]" />
                                <span><strong className="text-white">Location:</strong> {location}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-[1200px] px-5 lg:px-10 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-[#111111] font-display font-bold text-[28px] uppercase mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-[#ED1C24]"></span> Introduction
                            </h2>
                            <div className="prose prose-lg text-[#54595F] font-body">
                                {intro}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[#111111] font-display font-bold text-[28px] uppercase mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-[#ED1C24]"></span> Course Structure
                            </h2>
                            <div className="prose prose-lg text-[#54595F] font-body bg-[#f5f5f5] p-8">
                                {structure}
                            </div>
                        </section>

                        {careerOptions && (
                            <section>
                                <h2 className="text-[#111111] font-display font-bold text-[28px] uppercase mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-[#ED1C24]"></span> Career Opportunities
                                </h2>
                                <div className="prose prose-lg text-[#54595F] font-body bg-[#111111] text-white p-8">
                                    {careerOptions}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-[100px] bg-[#f5f5f5] p-8 border-t-4 border-[#ED1C24]">
                            <h3 className="font-display font-bold text-[20px] mb-4 uppercase text-[#111111]">
                                Interested in this course?
                            </h3>
                            <p className="text-[#54595F] font-body text-[14px] mb-6">
                                Take the next step in your creative career. Apply now to secure your seat.
                            </p>
                            <a
                                href="/online-application"
                                className="w-full bg-[#ED1C24] text-white font-display font-bold uppercase text-[15px] py-4 px-6 flex items-center justify-between hover:bg-[#111111] transition-colors"
                            >
                                Apply Online
                                <ChevronRight size={20} />
                            </a>
                            <div className="mt-6 pt-6 border-t border-gray-300">
                                <p className="font-bold text-[#111111] mb-2 uppercase text-[14px] tracking-wider">Need Help?</p>
                                <a href="tel:01724007918" className="text-[#ED1C24] font-bold text-[20px] block mb-1">
                                    0172 4007918
                                </a>
                                <a href="mailto:info@iift.in" className="text-[#54595F] text-[14px] hover:text-[#ED1C24] transition-colors">
                                    info@iift.in
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
