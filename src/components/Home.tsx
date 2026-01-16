import { ArrowRight, Activity, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Footer } from './Footer';

interface HomeProps {
  theme: 'dark' | 'light';
  onNavigate: (view: 'home' | 'service' | 'consumer' | 'aboutUs') => void;
}

export function Home({ theme, onNavigate }: HomeProps) {
  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Hero Section - Full Width */}
      <div className={`w-full min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)] relative overflow-hidden`}>
        {/* Multi-layered Gradient Background */}
        <div className="absolute inset-0">
          {/* Base Gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: theme === 'dark' 
                ? 'radial-gradient(circle at 20% 50%, #063360 0%, #0a1628 50%, #000000 100%)'
                : 'radial-gradient(circle at 20% 50%, #e0f2fe 0%, #f0f9ff 50%, #ffffff 100%)'
            }}
          />
          
          {/* Animated Gradient Overlay 1 */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: theme === 'dark'
                ? [
                    'radial-gradient(circle at 80% 20%, rgba(6, 51, 96, 0.4) 0%, transparent 50%)',
                    'radial-gradient(circle at 60% 40%, rgba(5, 41, 84, 0.5) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 20%, rgba(6, 51, 96, 0.4) 0%, transparent 50%)',
                  ]
                : [
                    'radial-gradient(circle at 80% 20%, rgba(186, 230, 253, 0.6) 0%, transparent 50%)',
                    'radial-gradient(circle at 60% 40%, rgba(224, 242, 254, 0.7) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 20%, rgba(186, 230, 253, 0.6) 0%, transparent 50%)',
                  ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Animated Gradient Overlay 2 */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: theme === 'dark'
                ? [
                    'radial-gradient(circle at 10% 80%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
                    'radial-gradient(circle at 30% 70%, rgba(14, 165, 233, 0.2) 0%, transparent 50%)',
                    'radial-gradient(circle at 10% 80%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
                  ]
                : [
                    'radial-gradient(circle at 10% 80%, rgba(56, 189, 248, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 30% 70%, rgba(56, 189, 248, 0.4) 0%, transparent 50%)',
                    'radial-gradient(circle at 10% 80%, rgba(56, 189, 248, 0.3) 0%, transparent 50%)',
                  ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Mesh Gradient Effect */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: theme === 'dark'
                ? `radial-gradient(at 40% 20%, rgba(6, 51, 96, 0.5) 0px, transparent 50%),
                   radial-gradient(at 80% 0%, rgba(5, 41, 84, 0.4) 0px, transparent 50%),
                   radial-gradient(at 0% 50%, rgba(14, 165, 233, 0.3) 0px, transparent 50%),
                   radial-gradient(at 80% 50%, rgba(6, 51, 96, 0.4) 0px, transparent 50%),
                   radial-gradient(at 0% 100%, rgba(5, 41, 84, 0.3) 0px, transparent 50%),
                   radial-gradient(at 80% 100%, rgba(14, 165, 233, 0.2) 0px, transparent 50%),
                   radial-gradient(at 0% 0%, rgba(6, 51, 96, 0.4) 0px, transparent 50%)`
                : `radial-gradient(at 40% 20%, rgba(186, 230, 253, 0.6) 0px, transparent 50%),
                   radial-gradient(at 80% 0%, rgba(224, 242, 254, 0.5) 0px, transparent 50%),
                   radial-gradient(at 0% 50%, rgba(56, 189, 248, 0.4) 0px, transparent 50%),
                   radial-gradient(at 80% 50%, rgba(186, 230, 253, 0.5) 0px, transparent 50%),
                   radial-gradient(at 0% 100%, rgba(224, 242, 254, 0.4) 0px, transparent 50%),
                   radial-gradient(at 80% 100%, rgba(56, 189, 248, 0.3) 0px, transparent 50%),
                   radial-gradient(at 0% 0%, rgba(186, 230, 253, 0.5) 0px, transparent 50%)`
            }}
          />
        </div>

        {/* Analytics-themed Animated Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Grid Lines */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: theme === 'dark'
                  ? 'linear-gradient(rgba(6, 51, 96, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 51, 96, 0.5) 1px, transparent 1px)'
                  : 'linear-gradient(rgba(186, 230, 253, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(186, 230, 253, 0.5) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          {/* Analytical Dashboard Animations */}
          {/* Animated Bar Chart */}
          <motion.div
            className="absolute right-[12%] top-[20%] hidden lg:block"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className={`w-24 lg:w-32 h-20 lg:h-24 rounded-lg backdrop-blur-md p-2 lg:p-3 ${
              theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-blue-200/50'
            }`}
            style={{
              boxShadow: theme === 'dark' 
                ? '0 8px 32px rgba(6, 51, 96, 0.4)' 
                : '0 8px 32px rgba(14, 165, 233, 0.3)'
            }}>
              <div className="flex items-end justify-between h-full gap-1">
                {[60, 80, 45, 90, 70].map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      background: theme === 'dark' 
                        ? 'linear-gradient(to top, #0EA5E9, #063360)'
                        : 'linear-gradient(to top, #0EA5E9, #BAE6FD)',
                      height: `${height}%`
                    }}
                    animate={{
                      height: [`${height}%`, `${Math.min(height + 20, 100)}%`, `${height}%`]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Animated Pie Chart */}
          <motion.div
            className="absolute left-[10%] top-[25%] hidden lg:block"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className={`w-20 lg:w-28 h-20 lg:h-28 rounded-lg backdrop-blur-md p-2 lg:p-3 ${
              theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-blue-200/50'
            }`}
            style={{
              boxShadow: theme === 'dark' 
                ? '0 8px 32px rgba(6, 51, 96, 0.4)' 
                : '0 8px 32px rgba(14, 165, 233, 0.3)'
            }}>
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  className="w-12 lg:w-16 h-12 lg:h-16 rounded-full relative"
                  style={{
                    background: `conic-gradient(
                      ${theme === 'dark' ? '#0EA5E9' : '#38BDF8'} 0deg 120deg,
                      ${theme === 'dark' ? '#063360' : '#BAE6FD'} 120deg 240deg,
                      ${theme === 'dark' ? '#052954' : '#E0F2FE'} 240deg 360deg
                    )`
                  }}
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className={`absolute inset-2 rounded-full ${
                    theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
                  }`} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Animated Line Graph */}
          <motion.div
            className="absolute right-[8%] bottom-[15%] hidden lg:block"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className={`w-28 lg:w-36 h-16 lg:h-20 rounded-lg backdrop-blur-md p-2 lg:p-3 ${
              theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-blue-200/50'
            }`}
            style={{
              boxShadow: theme === 'dark' 
                ? '0 8px 32px rgba(6, 51, 96, 0.4)' 
                : '0 8px 32px rgba(14, 165, 233, 0.3)'
            }}>
              <svg className="w-full h-full" viewBox="0 0 120 60">
                <motion.path
                  d="M 0 50 Q 20 30, 40 35 T 80 20 T 120 25"
                  fill="none"
                  stroke={theme === 'dark' ? '#0EA5E9' : '#38BDF8'}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.path
                  d="M 0 40 Q 20 45, 40 25 T 80 30 T 120 15"
                  fill="none"
                  stroke={theme === 'dark' ? '#063360' : '#BAE6FD'}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Data Points Animation */}
          <motion.div
            className="absolute left-[15%] bottom-[20%] hidden lg:block"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className={`w-20 lg:w-24 h-20 lg:h-24 rounded-lg backdrop-blur-md p-2 ${
              theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-blue-200/50'
            }`}
            style={{
              boxShadow: theme === 'dark' 
                ? '0 8px 32px rgba(6, 51, 96, 0.4)' 
                : '0 8px 32px rgba(14, 165, 233, 0.3)'
            }}>
              <div className="relative w-full h-full">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: '8px',
                      height: '8px',
                      background: theme === 'dark' ? '#0EA5E9' : '#38BDF8',
                      left: `${20 + (i % 3) * 30}%`,
                      top: `${20 + Math.floor(i / 3) * 40}%`
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Animated floating elements that pulse and float at varying speeds */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-64 md:w-96 h-64 md:h-96 rounded-full ${
                theme === 'dark' 
                  ? 'bg-[#063360]/10' 
                  : 'bg-sky-400/5'
              }`}
              style={{
                left: `${25 + i * 30}%`,
                top: `${30 + i * 20}%`,
                filter: 'blur(40px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: theme === 'dark' 
                  ? `rgba(14, 165, 233, ${Math.random() * 0.5 + 0.3})`
                  : `rgba(56, 189, 248, ${Math.random() * 0.4 + 0.2})`,
                filter: 'blur(1px)',
              }}
              animate={{
                y: [0, -100 - Math.random() * 200, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            {[...Array(8)].map((_, i) => {
              const startX = Math.random() * 100;
              const startY = Math.random() * 100;
              const endX = Math.random() * 100;
              const endY = Math.random() * 100;
              
              return (
                <motion.line
                  key={`line-${i}`}
                  x1={`${startX}%`}
                  y1={`${startY}%`}
                  x2={`${endX}%`}
                  y2={`${endY}%`}
                  stroke={theme === 'dark' ? '#0EA5E9' : '#38BDF8'}
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 6 + Math.random() * 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </svg>

          {/* Geometric Shapes */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`geo-${i}`}
              className={`absolute border-2 ${
                theme === 'dark' ? 'border-[#0EA5E9]/20' : 'border-[#38BDF8]/30'
              }`}
              style={{
                width: 50 + i * 20 + 'px',
                height: 50 + i * 20 + 'px',
                left: `${10 + i * 18}%`,
                top: `${15 + i * 15}%`,
                borderRadius: i % 2 === 0 ? '50%' : '10px',
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* Data Stream Effect */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute"
              style={{
                left: `${5 + i * 15}%`,
                width: '2px',
                height: '100%',
                background: theme === 'dark'
                  ? 'linear-gradient(to bottom, transparent, rgba(14, 165, 233, 0.4), transparent)'
                  : 'linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.3), transparent)',
              }}
              animate={{
                y: ['-100%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear",
              }}
            />
          ))}

          {/* Pulsing Rings */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className={`absolute rounded-full border ${
                theme === 'dark' ? 'border-[#063360]/40' : 'border-[#BAE6FD]/50'
              }`}
              style={{
                width: 200 + i * 100 + 'px',
                height: 200 + i * 100 + 'px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Glowing Orbs */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full"
              style={{
                width: 40 + Math.random() * 60 + 'px',
                height: 40 + Math.random() * 60 + 'px',
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                background: theme === 'dark'
                  ? `radial-gradient(circle, rgba(14, 165, 233, 0.4), transparent)`
                  : `radial-gradient(circle, rgba(56, 189, 248, 0.3), transparent)`,
                filter: 'blur(20px)',
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Digital Rain Effect */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`rain-${i}`}
              className="absolute"
              style={{
                left: `${i * 8}%`,
                top: 0,
                width: '1px',
                height: '40px',
                background: theme === 'dark'
                  ? 'linear-gradient(to bottom, transparent, #0EA5E9, transparent)'
                  : 'linear-gradient(to bottom, transparent, #38BDF8, transparent)',
                opacity: 0.4,
              }}
              animate={{
                y: ['-40px', '100vh'],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "linear",
              }}
            />
          ))}

          {/* Hexagon Pattern */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`hex-${i}`}
              className={`absolute ${
                theme === 'dark' ? 'text-[#063360]/20' : 'text-[#BAE6FD]/30'
              }`}
              style={{
                left: `${20 + i * 12}%`,
                top: `${10 + (i % 3) * 25}%`,
                fontSize: '60px',
              }}
              animate={{
                rotate: [0, 120, 240, 360],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              ⬡
            </motion.div>
          ))}

          {/* Wave Animation */}
          <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20">
            <motion.path
              d="M0,50 Q250,0 500,50 T1000,50 T1500,50 T2000,50"
              fill="none"
              stroke={theme === 'dark' ? '#0EA5E9' : '#38BDF8'}
              strokeWidth="2"
              animate={{
                d: [
                  "M0,50 Q250,0 500,50 T1000,50 T1500,50 T2000,50",
                  "M0,50 Q250,100 500,50 T1000,50 T1500,50 T2000,50",
                  "M0,50 Q250,0 500,50 T1000,50 T1500,50 T2000,50",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full m-0 p-4 md:p-0 flex items-center justify-center min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)]">
          {/* Main Title & Subtitle */}
          <div className="text-center w-full m-0 p-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 px-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                SDI Analytics
                <span className="block mt-2 bg-gradient-to-r from-[#063360] to-[#0EA5E9] bg-clip-text text-transparent">
                  Dashboard
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 md:mb-12 px-4 ${
                theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
              }`}
            >
              Comprehensive insights into service consumption patterns and entity-level engagement across Abu Dhabi's Spatial Data Infrastructure
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            >
              <button
                onClick={() => onNavigate('service')}
                className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
                style={{
                  background: 'linear-gradient(135deg, #063360 0%, #052954 100%)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #0EA5E9 0%, #063360 100%)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(14, 165, 233, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #063360 0%, #052954 100%)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Activity className="w-4 md:w-5 h-4 md:h-5" />
                  <span className="text-sm md:text-base">Service Usage Dashboard</span>
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  variants={pulseVariants}
                  animate="animate"
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"
                />
              </button>

              <button
                onClick={() => onNavigate('consumer')}
                className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  border: '2px solid #063360',
                  color: theme === 'dark' ? '#fff' : '#063360',
                  background: theme === 'dark' ? 'rgba(6, 51, 96, 0.1)' : 'white',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme === 'dark' ? 'rgba(6, 51, 96, 0.3)' : '#063360';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#0EA5E9';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(6, 51, 96, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = theme === 'dark' ? 'rgba(6, 51, 96, 0.1)' : 'white';
                  e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#063360';
                  e.currentTarget.style.borderColor = '#063360';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Users className="w-4 md:w-5 h-4 md:h-5" />
                  <span className="text-sm md:text-base">Consumer Usage Dashboard</span>
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </>
  );
}