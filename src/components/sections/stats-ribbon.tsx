import React from 'react';
import { Award, Globe, Users, History, CheckCircle } from 'lucide-react';

const StatsRibbon = () => {
  return (
    <section className="bg-[#111111] py-8 md:py-12 border-t border-brand-red/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-start">
          
          {/* 99%* Placements Record */}
          <div className="flex items-center space-x-4 group">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-transparent border border-white/20 group-hover:border-primary transition-colors">
                <CheckCircle className="text-white w-6 h-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display text-4xl font-extrabold leading-none">
                99%*
              </span>
              <span className="text-white/80 font-body text-sm mt-1 uppercase tracking-wider">
                Placements Record
              </span>
            </div>
          </div>

          {/* 100+ Global Partnerships */}
          <div className="flex items-center space-x-4 group">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-transparent border border-white/20 group-hover:border-primary transition-colors">
                <Globe className="text-white w-6 h-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display text-4xl font-extrabold leading-none">
                100+
              </span>
              <span className="text-white/80 font-body text-sm mt-1 uppercase tracking-wider">
                Global Partnerships
              </span>
            </div>
          </div>

          {/* Best Fashion Design College */}
          <div className="flex items-start space-x-4 group">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-transparent border border-white/20 group-hover:border-primary transition-colors">
                <Award className="text-white w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-white font-display text-lg font-bold leading-tight uppercase">
                Best Fashion Design College
              </h4>
              <p className="text-white/60 font-body text-xs mt-1">
                Awarded for two consecutive years.
              </p>
            </div>
          </div>

          {/* 20+ Years Of Excellence */}
          <div className="flex items-start space-x-4 group">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-transparent border border-white/20 group-hover:border-primary transition-colors">
                <History className="text-white w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-white font-display text-lg font-bold leading-tight uppercase">
                20+ Years Of Excellence
              </h4>
              <p className="text-white/60 font-body text-xs mt-1">
                Established 2004
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsRibbon;