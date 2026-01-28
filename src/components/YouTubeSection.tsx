
// import { Youtube, Play, Bell, ExternalLink } from "lucide-react";
// import { useState } from "react";
// import logo from "@/assets/logo.png";

// const YouTubeSection = () => {
//   // State to control video playback
//   const [playVideo, setPlayVideo] = useState(false);

//   return (
//     <section id="youtube" className="py-24 relative">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-16 slide-up">
//           <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
//             <Youtube className="w-4 h-4 text-red-500" />
//             <span className="text-sm text-muted-foreground">Learn Visually</span>
//           </div>

//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//             Python Classes on{" "}
//             <span className="gradient-text neon-text">YouTube</span>
//           </h2>

//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Free Python tutorials, concept explanations, and coding practice sessions 
//             on the BinaryShastra YouTube channel
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Video Embed */}
//           <div className="fade-in">
//             <div className="glass-panel neon-border rounded-2xl overflow-hidden">
//               <div className="aspect-video relative">
//                 {/* Iframe with autoplay when playVideo=true */}
//                 <iframe
//                   src={`https://www.youtube.com/embed/a_hDDqXZsvU?autoplay=${playVideo ? 1 : 0}`}
//                   title="BinaryShastra Python Tutorial"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   allowFullScreen
//                   className="w-full h-full"
//                 />

//                 {/* Blur Overlay */}
//                 {!playVideo && (
//                   <div
//                     onClick={() => setPlayVideo(true)}
//                     className="absolute inset-0 flex items-center justify-center bg-muted/80 backdrop-blur-md transition-all cursor-pointer group"
//                   >
//                     <div className="flex flex-col items-center gap-4">
//                       <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform pulse-glow">
//                         <Play className="w-10 h-10 text-white ml-1" />
//                       </div>
//                       <span className="text-foreground font-semibold">
//                         Play Video
//                       </span>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Channel Info */}
//           <div className="slide-up" style={{ animationDelay: '0.2s' }}>
//             <div className="glass-panel neon-border p-8 rounded-2xl">
//               {/* Channel Header */}
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-muted">
//                   <img
//                     src={logo}
//                     alt="BinaryShastra Logo"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold">BinaryShastra</h3>
//                   <p className="text-muted-foreground">Python Programming Tutorials</p>
//                 </div>
//               </div>

//               {/* Features */}
//               <ul className="space-y-4 mb-8">
//                 {[
//                   "Step-by-step Python tutorials for beginners",
//                   "CBSE, ICSE & WB Board exam preparation",
//                   "Coding practice and problem solving",
//                   "Real-world project examples",
//                   "Tips and tricks for better coding",
//                 ].map((feature, index) => (
//                   <li key={index} className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-primary rounded-full" />
//                     <span className="text-muted-foreground">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4">

//                 <div
//                   className="g-ytsubscribe flex-1"
//                   data-channelid="UCk8Xo53HGNhq17wA_mBRPRg"
//                   data-layout="default"
//                   data-count="default"
//                 />

//                 <a
//                   href="https://youtube.com/@binaryshastra?sub_confirmation=1"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
//                 >
//                   <Bell className="w-5 h-5" />
//                   Subscribe Now
//                 </a>
//                 <a
//                   href="https://youtube.com/@binaryshastra"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 glass-panel neon-border px-6 py-3 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:bg-primary/10 transition-all"
//                 >
//                   <ExternalLink className="w-5 h-5 text-primary" />
//                   Visit Channel
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default YouTubeSection;


import { Youtube, Play, Bell, ExternalLink } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const YouTubeSection = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const handleSubscribe = () => {
    // Opens the subscription confirmation popup
    window.open(
      "https://www.youtube.com/channel/UCk8Xo53HGNhq17wA_mBRPRg?sub_confirmation=1",
      "_blank",
      "width=500,height=600"
    );
  };

  return (
    <section id="youtube" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
            <Youtube className="w-4 h-4 text-red-500" />
            <span className="text-sm text-muted-foreground">Learn Visually</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Python Classes on <span className="gradient-text neon-text">YouTube</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free Python tutorials, concept explanations, and coding practice sessions 
            on the BinaryShastra YouTube channel
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Embed */}
          <div className="fade-in">
            <div className="glass-panel neon-border rounded-2xl overflow-hidden">
              <div className="aspect-video relative">
                <iframe
                  src={`https://www.youtube.com/embed/a_hDDqXZsvU?autoplay=${playVideo ? 1 : 0}`}
                  title="BinaryShastra Python Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />

                {!playVideo && (
                  <div
                    onClick={() => setPlayVideo(true)}
                    className="absolute inset-0 flex items-center justify-center bg-muted/80 backdrop-blur-md transition-all cursor-pointer group"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform pulse-glow">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                      <span className="text-foreground font-semibold">Play Video</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Channel Info */}
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-panel neon-border p-8 rounded-2xl">
              {/* Channel Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-muted">
                  <img
                    src={logo}
                    alt="BinaryShastra Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">BinaryShastra</h3>
                  <p className="text-muted-foreground">Python Programming Tutorials</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {[
                  "Step-by-step Python tutorials for beginners",
                  "CBSE, ICSE & WB Board exam preparation",
                  "Coding practice and problem solving",
                  "Real-world project examples",
                  "Tips and tricks for better coding",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Custom Neon Subscribe Button */}
                <button
                  onClick={handleSubscribe}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                >
                  <Bell className="w-5 h-5" />
                  Subscribe Now
                </button>

                <a
                  href="https://youtube.com/@binaryshastra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass-panel neon-border px-6 py-3 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:bg-primary/10 transition-all"
                >
                  <ExternalLink className="w-5 h-5 text-primary" />
                  Visit Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;