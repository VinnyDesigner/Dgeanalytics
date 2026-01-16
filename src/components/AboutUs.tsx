import imgHeroImage from "figma:asset/f422c911ec06450953a867d6206398135341a3ad.png";
import imgBuilding from "figma:asset/d0b1fae3c3bf0c48586aada8a5a99b1d28a509d7.png";
import imgLogo from "figma:asset/909a7f60284cdc6965b098f6e0ace0d70152fd00.png";
import svgPaths from "../imports/svg-u6kvv0o50p";
import DatabaseIcon from "../imports/Container-2033-1271";
import { ExternalLink, BarChart3, MapPin } from 'lucide-react';
import { Footer } from './Footer';

interface AboutUsProps {
  theme: 'dark' | 'light';
  onNavigate?: (view: 'home' | 'service' | 'consumer' | 'aboutUs') => void;
}

export function AboutUs({ theme, onNavigate }: AboutUsProps) {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Flipped Image */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[468px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full rotate-180 scale-y-[-1]">
            <img 
              src={imgHeroImage} 
              alt="Abu Dhabi Leadership" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07396b]/0 via-[#07396b]/80 to-[#07396b]/95" />
          </div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-white mb-3 sm:mb-4">
              <span className="block sm:text-4xl md:text-5xl font-bold leading-tight text-[64px]">About Us</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Department of Government Enablement Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 sm:mb-5">
              Department of Government Enablement
            </h2>
            <p className="text-[#364153] text-sm sm:text-base leading-relaxed max-w-4xl">
              The Department of Government Enablement (DGE) is a centralized government enabler delivering high-quality services to Abu Dhabi government entities, employees, citizens, residents, and customers. As the team behind the teams, DGE drives the emirate's transformation into a future-ready, digitally advanced government by building shared platforms and capabilities. DGE leads the Abu Dhabi Government Digital Strategy 2025–2027, enabling 100% digitalization and automation of government services and positioning Abu Dhabi as a global digital government leader.
            </p>
          </div>

          {/* Feature Cards - Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {/* Card 1 - Centralized Government Enabler */}
            <div className="bg-[#fbfdff] rounded-[10px] p-6 sm:p-7 relative overflow-hidden h-[289px] border-[6px] border-solid border-white shadow-sm">
              <div className="absolute left-[30px] top-[98px] w-1 h-11 bg-[#094a8c]" />
              <div className="absolute left-[133px] w-[88px] h-[88px] top-[224px]">
                <div className="absolute inset-[-152.27%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356 356">
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="356" id="filter0_f_blue" width="356" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="67" />
                      </filter>
                    </defs>
                    <g filter="url(#filter0_f_blue)">
                      <circle cx="178" cy="178" fill="#0B62B8" r="44" />
                    </g>
                  </svg>
                </div>
              </div>
              
              <div className="absolute left-[54px] top-[30px]">
                <div className="w-12 h-12">
                  <DatabaseIcon />
                </div>
              </div>
              
              <div className="absolute left-[54px] top-[94px]">
                <h3 className="text-[18px] font-semibold leading-[21.6px] text-black mb-3 w-[217px]">
                  Centralized Government Enabler
                </h3>
                <p className="text-[#38383d] text-[16px] leading-[23px] w-[246px]">
                  Delivers quality services to the Abu Dhabi government employees, entities, citizens, and residents.
                </p>
              </div>
            </div>

            {/* Card 2 - Smart Digital Government */}
            <div className="bg-[#fbfdff] rounded-[10px] p-6 sm:p-7 relative overflow-hidden h-[289px] border-[6px] border-solid border-white shadow-sm">
              <div className="absolute left-[30px] top-[98px] w-1 h-11 bg-[#d9d374]" />
              <div className="absolute left-[133px] w-[88px] h-[88px] top-[224px]">
                <div className="absolute inset-[-152.27%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356 356">
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="356" id="filter0_f_yellow" width="356" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="67" />
                      </filter>
                    </defs>
                    <g filter="url(#filter0_f_yellow)">
                      <circle cx="178" cy="178" fill="#B8AC0B" r="44" />
                    </g>
                  </svg>
                </div>
              </div>
              
              <div className="absolute left-[54px] top-[30px]">
                <div className="w-12 h-12 rounded-[10px] bg-[#eff6ff] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 20 22">
                    <path d={svgPaths.p3008ebc0} stroke="#2B5876" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute left-[54px] top-[94px]">
                <h3 className="text-[18px] font-semibold leading-[21.6px] text-black mb-3 w-[118px]">
                  Smart Digital Government
                </h3>
                <p className="text-[#38383d] text-[16px] leading-[22.4px] w-[236px]">
                  Tackles the implementation of Abu Dhabi Government Digital Strategy 2025-2027, driving digital transformation and automation.
                </p>
              </div>
            </div>

            {/* Card 3 - Team Behind The Teams */}
            <div className="bg-[#fbfdff] rounded-[10px] p-6 sm:p-7 relative overflow-hidden h-[289px] border-[6px] border-solid border-white shadow-sm">
              <div className="absolute left-[30px] top-[98px] w-1 h-11 bg-[#0bb811]" />
              <div className="absolute left-[133px] w-[88px] h-[88px] top-[224px]">
                <div className="absolute inset-[-152.27%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356 356">
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="356" id="filter0_f_green" width="356" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="67" />
                      </filter>
                    </defs>
                    <g filter="url(#filter0_f_green)">
                      <circle cx="178" cy="178" fill="#0BB811" r="44" />
                    </g>
                  </svg>
                </div>
              </div>
              
              <div className="absolute left-[54px] top-[30px]">
                <div className="w-12 h-12 rounded-[10px] bg-[#eff6ff] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 18 22">
                    <path d={svgPaths.p38022300} stroke="#2B5876" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute left-[52px] top-[94px]">
                <h3 className="text-[18px] font-semibold leading-[21.6px] text-black mb-3 w-[150px]">
                  Team Behind The Teams
                </h3>
                <p className="text-[#38383d] text-[16px] leading-[22.4px] w-[246px]">
                  The unified engine powering Abu Dhabi's transformation into a future-ready, digitally advanced government.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abu Dhabi SDI Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-8 sm:mb-10 md:mb-12">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 sm:mb-5">
                Abu Dhabi Spatial Data Infrastructure
              </h2>
              <p className="text-[#364153] text-sm sm:text-base leading-relaxed">
                Abu Dhabi Spatial Data Infrastructure (AD SDI) is a government-wide network administered by the Abu Dhabi Digital Authority that enables the secure sharing and exchange of geospatial data among government entities and stakeholders. Through AD SDI, the Abu Dhabi Spatial Data Information Centre (AD SDIC) has earned international recognition for its collaborative approach with 9 government stakeholder entities, providing open, timely, and accurate geographic information. The program supports spatially enabled e-government services by enabling seamless discovery, integration, and use of spatial data across the emirate.
              </p>
            </div>

            {/* Image */}
            <div className="w-full order-1 lg:order-2">
              <img 
                src={imgBuilding} 
                alt="Modern Infrastructure" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Feature Cards - Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {/* Card 4 - Geospatial Data Viewer */}
            <div className="bg-[#fbfdff] rounded-[10px] p-6 sm:p-7 relative overflow-hidden h-[289px] border-[6px] border-solid border-white shadow-sm">
              <div className="absolute left-[30px] top-[98px] w-1 h-11 bg-[#094a8c]" />
              <div className="absolute left-[133px] w-[88px] h-[88px] top-[224px]">
                <div className="absolute inset-[-152.27%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356 356">
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="356" id="filter0_f_blue2" width="356" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="67" />
                      </filter>
                    </defs>
                    <g filter="url(#filter0_f_blue2)">
                      <circle cx="178" cy="178" fill="#0B62B8" r="44" />
                    </g>
                  </svg>
                </div>
              </div>
              
              <div className="absolute left-[54px] top-[30px]">
                <div className="w-12 h-12 rounded-[10px] bg-[#eff6ff] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 20 19.5288">
                    <path d={svgPaths.pe6775e0} stroke="#2B5876" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute left-[57px] top-[98px]">
                <h3 className="text-[18px] font-semibold leading-[21.6px] text-black mb-3 w-[142px]">
                  Geospatial Data Viewer
                </h3>
                <p className="text-[#38383d] text-[16px] leading-[22.4px] w-[246px]">
                  Easy access to view maps and analyze spatial data across Abu Dhabi.
                </p>
              </div>
            </div>

            {/* Card 5 - Open Data Sharing */}
            <div className="bg-[#fbfdff] rounded-[10px] p-6 sm:p-7 relative overflow-hidden h-[289px] border-[6px] border-solid border-white shadow-sm">
              <div className="absolute left-[30px] top-[98px] w-1 h-11 bg-[#d9d374]" />
              <div className="absolute left-[133px] w-[88px] h-[88px] top-[224px]">
                <div className="absolute inset-[-152.27%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356 356">
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="356" id="filter0_f_yellow2" width="356" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="67" />
                      </filter>
                    </defs>
                    <g filter="url(#filter0_f_yellow2)">
                      <circle cx="178" cy="178" fill="#B8AC0B" r="44" />
                    </g>
                  </svg>
                </div>
              </div>
              
              <div className="absolute left-[54px] top-[30px]">
                <div className="w-12 h-12 rounded-[10px] bg-[#eff6ff] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 20 8">
                    <path d={svgPaths.p3dbdf300} stroke="#2B5876" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute left-[54px] top-[94px]">
                <h3 className="text-[18px] font-semibold leading-[21.6px] text-black mb-3 w-[118px]">
                  Open Data Sharing
                </h3>
                <p className="text-[#38383d] text-[16px] leading-[22.4px] w-[236px]">
                  Facilitating the sharing and exchange of geospatial data among government agencies and stakeholders.
                </p>
              </div>
            </div>

            {/* Card 6 - Spatially Enabled Services */}
            <div className="bg-[#fbfdff] rounded-[10px] p-6 sm:p-7 relative overflow-hidden h-[289px] border-[6px] border-solid border-white shadow-sm">
              <div className="absolute left-[30px] top-[98px] w-1 h-11 bg-[#0bb811]" />
              <div className="absolute left-[133px] w-[88px] h-[88px] top-[224px]">
                <div className="absolute inset-[-152.27%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 356 356">
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="356" id="filter0_f_green2" width="356" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="67" />
                      </filter>
                    </defs>
                    <g filter="url(#filter0_f_green2)">
                      <circle cx="178" cy="178" fill="#0BB811" r="44" />
                    </g>
                  </svg>
                </div>
              </div>
              
              <div className="absolute left-[54px] top-[30px]">
                <div className="w-12 h-12 rounded-[10px] bg-[#eff6ff] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 18 22">
                    <path d={svgPaths.p38022300} stroke="#2B5876" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute left-[52px] top-[94px]">
                <h3 className="text-[18px] font-semibold leading-[21.6px] text-black mb-3 w-[150px]">
                  Spatially Enabled Services
                </h3>
                <p className="text-[#38383d] text-[16px] leading-[22.4px] w-[246px]">
                  GIS features standardized and locked with open and timely access to highly accurate data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0b1f33] to-[#0f3d68] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-white/30 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white mb-2 sm:mb-3 leading-tight">
            Explore Abu Dhabi's Spatial Data Ecosystem
          </h2>
          <p className="text-[#e6f0fa] text-base sm:text-lg mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
            Discover how spatial data is transforming government services and enhancing decision-making across the emirate
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="bg-white text-[#0f3d68] px-6 sm:px-8 py-3 rounded-lg font-medium text-sm sm:text-base flex items-center gap-2 hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
              <ExternalLink className="w-5 h-5" />
              Visit SDI Portal
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}