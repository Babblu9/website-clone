import React from 'react';

export const metadata = {
  title: 'Student Work | IIFD - Indian Institute of Fashion & Design',
  description: 'Student Work at IIFD - Best Fashion Designing College in India',
};

export default function StudentWorkPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center mt-[100px]">
      <h1 className="text-4xl font-display font-bold text-[#E1211A] uppercase mb-4 tracking-wider">
        Student Work
      </h1>
      <p className="font-body text-[#54595F] max-w-2xl mx-auto text-[18px]">
        This page is currently under construction. Please check back later for updates on the Student Work program and details.
      </p>
    </div>
  );
}
