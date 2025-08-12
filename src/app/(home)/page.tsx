import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Image and Title */}
        <div className="flex items-start gap-8 mb-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-lg">
              <Image
                src="/profile.jpg"
                alt="Vlad Tsigler"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Title and Subtitle */}
          <div className="flex-1 pt-2">
            <h1 className="text-4xl font-bold mb-2">Vlad Tsigler</h1>
            <p className="text-xl text-muted-foreground">
              Marketing Analytics Professional & AI Enthusiast
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Born in Tashkent, Uzbekistan, I immigrated to the United States with my family in the 1990s. 
            This cross-cultural journey has shaped my global perspective and appreciation for diverse experiences.
          </p>
          
          <p>
            I earned my Bachelor of Science degree in International Business and Finance from Bradley University, 
            followed by an MBA from DePaul University. This educational foundation has equipped me with a strong 
            understanding of both business fundamentals and international markets.
          </p>
          
          <p>
            When I&apos;m not working, I&apos;m passionate about exploring the world through travel, discovering new cultures 
            and landscapes. I love spending time outdoors, particularly on the slopes skiing, where I find both 
            adventure and tranquility. I also enjoy cooking, experimenting with different cuisines and flavors. 
            As a technology enthusiast, I&apos;m constantly intrigued by innovation and emerging trends, with artificial 
            intelligence being a particular area of fascination for me.
          </p>
          
          <p>
            My unique background spanning continents, cultures, and disciplines drives my curiosity and commitment 
            to continuous learning in our rapidly evolving world.
          </p>
          
          <p>
            I built this website as my own tech playground where I can mess around with new tools, try out different 
            ideas, and see what happens when business meets cutting-edge technology. Think of it as my digital 
            workshop where I learn by doing.
          </p>
        </div>
      </div>
    </div>
  );
}
