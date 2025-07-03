
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Youtube, Twitter, Trophy, Target, Clock, MessageSquare } from 'lucide-react';

const KachingLanding = () => {
  const [kPoints, setKPoints] = useState(1250);

  const handleKDrop = () => {
    window.open('https://example.com/k-drop', '_blank');
  };

  const handleTwitter = () => {
    window.open('https://twitter.com', '_blank');
  };

  const handleTelegram = () => {
    window.open('https://t.me', '_blank');
  };

  const handleValidateTask = (taskName: string) => {
    console.log(`Validating task: ${taskName}`);
    // Add validation logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block animate-float">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-kaching-red via-kaching-red-dark to-kaching-red bg-clip-text text-transparent mb-4">
              Kaching!
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-2">
            The Future of Crypto Lottery
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get ready for the most exciting crypto lottery experience. Pre-register now and be among the first to win big!
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Video */}
          <Card className="bg-white/80 backdrop-blur-sm border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <Youtube className="w-16 h-16 text-kaching-red mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">YouTube Video Preview</p>
                  <p className="text-sm text-gray-500">Coming Soon</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Watch Kaching! in Action</h3>
              <p className="text-gray-600">Discover how our revolutionary crypto lottery platform will change the game forever.</p>
            </CardContent>
          </Card>

          {/* Right Column - K-Points & Actions */}
          <div className="space-y-6">
            {/* K-Points Balance */}
            <Card className="bg-gradient-to-r from-kaching-red to-kaching-red-dark text-white shadow-xl animate-glow-pulse">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium opacity-90 mb-1">K-Points Balance</h3>
                    <div className="text-4xl font-black">
                      {kPoints.toLocaleString()}
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black">K</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* K-Drop Button - Commented out */}
            {/* <Card className="bg-white/80 backdrop-blur-sm border-red-200 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Play?</h3>
                <Button 
                  onClick={handleKDrop}
                  className="w-full bg-gradient-to-r from-kaching-red to-kaching-red-dark hover:from-kaching-red-dark hover:to-kaching-red text-white font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  🎲 K-Drop - Play Now
                </Button>
              </CardContent>
            </Card> */}

            {/* K-Tasks Section */}
            <Card className="bg-white/80 backdrop-blur-sm border-red-200 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Trophy className="w-6 h-6 text-kaching-red mr-2" />
                  K-Tasks
                </h3>
                <ScrollArea className="h-64 pr-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="flex items-center flex-1">
                        <Twitter className="w-5 h-5 text-kaching-red mr-3" />
                        <span className="font-medium text-gray-700">Like us on Twitter</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-kaching-red font-bold">+500 K</span>
                        <Button 
                          size="sm"
                          onClick={() => handleValidateTask('Twitter Like')}
                          className="bg-kaching-red hover:bg-kaching-red-dark text-white px-3 py-1 text-xs"
                        >
                          Validate
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="flex items-center flex-1">
                        <MessageSquare className="w-5 h-5 text-kaching-red mr-3" />
                        <span className="font-medium text-gray-700">Join our TG community</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-kaching-red font-bold">+1000 K</span>
                        <Button 
                          size="sm"
                          onClick={() => handleValidateTask('Telegram Join')}
                          className="bg-kaching-red hover:bg-kaching-red-dark text-white px-3 py-1 text-xs"
                        >
                          Validate
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="flex items-center flex-1">
                        <Target className="w-5 h-5 text-kaching-red mr-3" />
                        <span className="font-medium text-gray-700">Post a Kaching meme</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-kaching-red font-bold">+1500 K</span>
                        <Button 
                          size="sm"
                          onClick={() => handleValidateTask('Kaching Meme')}
                          className="bg-kaching-red hover:bg-kaching-red-dark text-white px-3 py-1 text-xs"
                        >
                          Validate
                        </Button>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
                <p className="text-sm text-gray-500 mt-3">Complete tasks to earn more K-Points!</p>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white/80 backdrop-blur-sm border-red-200 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Button
                    onClick={handleTwitter}
                    variant="outline"
                    className="flex-1 border-red-200 hover:bg-red-50 hover:border-kaching-red group transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5 mr-2 text-kaching-red group-hover:text-kaching-red-dark" />
                    Twitter
                  </Button>
                  <Button
                    onClick={handleTelegram}
                    variant="outline"
                    className="flex-1 border-red-200 hover:bg-red-50 hover:border-kaching-red group transition-all duration-300"
                  >
                    <span className="w-5 h-5 mr-2 text-kaching-red group-hover:text-kaching-red-dark font-bold">TG</span>
                    Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* KGEN K-Drop Game Embed */}
        <Card className="bg-white/80 backdrop-blur-sm border-red-200 shadow-xl mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              🎮 K-Drop Game - Live Preview
            </h2>
            <div className="relative bg-gray-100 rounded-lg overflow-hidden border-2 border-red-200">
              <div className="h-[600px] overflow-hidden relative">
                <iframe
                  src="https://play.kgen.io/k-drop/campaigns/2af8d286-9649-4092-a1fa-84060c368797"
                  className="w-full border-0 transform transition-transform duration-300"
                  style={{
                    height: 'calc(100% + 120px)', // Extra height to accommodate header/footer
                    marginTop: '-60px', // Negative margin to hide header
                    marginBottom: '-60px' // Negative margin to hide footer
                  }}
                  title="KGEN K-Drop Game"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-2 right-2 bg-white/90 rounded-lg p-2 shadow-lg">
                <div className="flex flex-col gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Header Offset:</span>
                    <input
                      type="range"
                      min="-100"
                      max="0"
                      defaultValue="-60"
                      className="w-16 h-1"
                      onChange={(e) => {
                        const iframe = document.querySelector('iframe[title="KGEN K-Drop Game"]') as HTMLIFrameElement;
                        if (iframe) {
                          iframe.style.marginTop = `${e.target.value}px`;
                        }
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Footer Offset:</span>
                    <input
                      type="range"
                      min="-100"
                      max="0"
                      defaultValue="-60"
                      className="w-16 h-1"
                      onChange={(e) => {
                        const iframe = document.querySelector('iframe[title="KGEN K-Drop Game"]') as HTMLIFrameElement;
                        if (iframe) {
                          iframe.style.marginBottom = `${e.target.value}px`;
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Use the controls in the top-right corner to adjust the visible area and hide header/footer sections.
            </p>
          </CardContent>
        </Card>

        {/* Pre-Registration CTA */}
        <Card className="bg-gradient-to-r from-white to-red-50 border-red-200 shadow-2xl">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Be Among the First to Win Big! 🚀
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Join thousands of early adopters who are already positioning themselves for the crypto lottery revolution. 
              Pre-register now and get exclusive bonuses when we launch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-gradient-to-r from-kaching-red to-kaching-red-dark hover:from-kaching-red-dark hover:to-kaching-red text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🎯 Pre-Register Now
              </Button>
              <Button 
                variant="outline"
                className="border-red-200 hover:bg-red-50 hover:border-kaching-red px-8 py-4 text-lg"
              >
                📧 Get Notified
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500">
          <p>&copy; 2024 Kaching! - The Future of Crypto Lottery</p>
        </footer>
      </div>
    </div>
  );
};

export default KachingLanding;
