import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2, Bookmark, UserPlus2, Play } from "lucide-react";
import { type Candidate } from "./types";
import Image from "next/image";

interface CandidateDetailsProps {
  candidate: Candidate;
}

export function CandidateDetails({ candidate }: CandidateDetailsProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={candidate.avatar}
              alt=""
              className="w-16 h-16 rounded-full"
              width={64}
              height={64}
            />
            <div>
              <h2 className="text-2xl font-semibold">{candidate.name}</h2>
              <p className="text-muted-foreground">{candidate.title}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button>
              <UserPlus2 className="h-4 w-4 mr-2" />
              Request intro
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-1">
            <div className="text-sm font-medium">Commitment</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border rounded-lg">
                <div className="font-semibold">
                  Full-time at ${candidate.rates.fullTime} / month
                </div>
                <div className="text-sm text-muted-foreground">
                  Starts {candidate.availability}
                </div>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="font-semibold">
                  Part-time at ${candidate.rates.partTime} / month
                </div>
                <div className="text-sm text-muted-foreground">
                  Starts {candidate.availability}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-1">
            <div className="text-sm font-medium">Location</div>
            <div className="text-muted-foreground">{candidate.location}</div>
          </div>

          <div className="grid gap-1">
            <div className="text-sm font-medium">Expert in</div>
            <div className="flex flex-wrap gap-2">
              {candidate.expertise.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="interview" className="flex-1">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="interview"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary"
          >
            Interview
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary"
          >
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="interview" className="flex-1">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">AI Interview</h3>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <Button variant="ghost" size="lg" className="gap-2">
                <Play className="h-6 w-6" />
                Play Interview Recording
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="experience" className="flex-1">
          <div className="p-6 space-y-6">
            {candidate.experience.map((exp, index) => (
              <div key={index} className="grid gap-1">
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.duration}</p>
                <p className="text-sm mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="education" className="flex-1">
          <div className="p-6 space-y-6">
            {candidate.education.map((edu, index) => (
              <div key={index} className="grid gap-1">
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.duration}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
