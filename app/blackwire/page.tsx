'use client';

import { useState } from 'react';

export default function Blackwire() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('business@pennypips.com');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-100px)] lg:min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Trade with me live for 30 days.
            <br />
            <span className="text-accent">Not a course, Not signals,</span>
            <br />
            just real execution.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            I'm opening 10 spots for traders who want daily, hands-on exposure to how I actually trade in real time.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Video Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-black border border-gray-800 rounded-3xl p-4 md:p-6 overflow-hidden">
          <div dangerouslySetInnerHTML={{
            __html: `
              <script src="https://fast.wistia.com/player.js" async></script>
              <script src="https://fast.wistia.com/embed/qyccolpm8b.js" async type="module"></script>
              <style>
                wistia-player[media-id='qyccolpm8b']:not(:defined) { 
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/qyccolpm8b/swatch'); 
                  display: block; 
                  filter: blur(5px); 
                  padding-top:56.25%; 
                }
              </style>
              <wistia-player media-id="qyccolpm8b" aspect="1.7777777777777777"></wistia-player>
            `
          }} />
        </div>
        
        {/* CTA Below Video */}
        <div className="text-center mt-8">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent rounded-full overflow-hidden transition-all duration-300 hover:scale-105 glow-accent"
          >
            <span className="relative z-10 flex items-center">
              Request Access
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-black border border-gray-800 rounded-3xl p-8 md:p-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg text-gray-300">Live access while I trade</p>
            </div>
            
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg text-gray-300">Real-time Q&A — ask why I'm in, out, or staying flat</p>
            </div>
            
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg text-gray-300">Private Discord with only me + the group</p>
            </div>
            
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-lg text-gray-300">Observe execution, risk, and decision-making under pressure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px bg-gray-800"></div>
      </div>

      {/* Disqualifiers Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-black border border-gray-800 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-red-500">This is NOT:</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-lg text-gray-300">A trading course</p>
            </div>
            
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-lg text-gray-300">A signal service</p>
            </div>
            
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-lg text-gray-300">A promise of profitability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Offer Card */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-black border border-accent rounded-3xl p-8 md:p-12 glow-accent">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Live Trading Desk — Private Access
          </h2>
          
          {/* Card Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                <span className="text-gray-400">Format:</span>
                <span className="font-semibold">Live screen-share + voice</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                <span className="text-gray-400">Access:</span>
                <span className="font-semibold">30 days</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                <span className="text-gray-400">Group size:</span>
                <span className="font-semibold">Max 10 people</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                <span className="text-gray-400">Price:</span>
                <span className="font-semibold text-accent text-xl">$1,995</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-800 my-8"></div>

          {/* Boundaries */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Boundaries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <p className="text-gray-400">• No trade alerts</p>
              <p className="text-gray-400">• No copy trading</p>
              <p className="text-gray-400">• No guarantees</p>
              <p className="text-gray-400">• Observation &gt; instruction</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-800 my-8"></div>

          {/* Status */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Status</h3>
            <p className="text-gray-300">Enrollment closes once 10 seats are filled</p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent rounded-full overflow-hidden transition-all duration-300 hover:scale-105 glow-accent"
            >
              <span className="relative z-10 flex items-center">
                Request Access
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Who This Is For/Not For Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Who This Is For */}
          <div className="bg-black border border-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-accent">Who this is for</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Traders who already trade</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">People who learn best by observing real execution</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Traders tired of theory and hindsight breakdowns</span>
              </li>
            </ul>
          </div>

          {/* Who This Is Not For */}
          <div className="bg-black border border-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-red-500">Who this is not for</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-300">Beginners</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-300">Anyone looking for signals</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-300">Anyone expecting guaranteed results</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-300">Anyone who needs step-by-step instruction</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>&copy; 2026 PennyPips. All rights reserved.</p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="relative bg-black border border-accent rounded-3xl p-8 md:p-12 max-w-2xl w-full glow-accent" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-3xl font-bold mb-6 text-accent">Request Access</h3>
            
            <p className="text-gray-300 mb-6">
              To request a seat in the Live Trading Desk, please send an email with the following information:
            </p>

            {/* Email Requirements */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Subject:</p>
                  <p className="text-white font-medium">Live Trading Desk — Access Request</p>
                </div>
                
                <div className="h-px bg-gray-800"></div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-2">Include in your email:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Name:</strong> Your full name</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Trading experience (years):</strong> How long you've been trading</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Why you want to join:</strong> What you hope to gain from this experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Are you looking for signals?</strong> (Yes/No)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Copy Email Button */}
            <div className="text-center">
              <button 
                onClick={copyEmail}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent rounded-full overflow-hidden transition-all duration-300 hover:scale-105 glow-accent w-full md:w-auto"
              >
                <span className="relative z-10 flex items-center">
                  {copySuccess ? (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Email Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Email: business@pennypips.com
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
