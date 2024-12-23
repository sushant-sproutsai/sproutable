import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { type Candidate } from "./types";
import Image from "next/image";

interface CandidateListProps {
  candidates: Candidate[];
  selectedCandidate: Candidate | null;
  onSelectCandidate: (candidate: Candidate) => void;
}

export function CandidateList({
  candidates,
  selectedCandidate,
  onSelectCandidate,
}: CandidateListProps) {
  return (
    <div className="p-4 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Try searching 'Python developer with 4 years experience'"
          className="pl-9"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Can work</span>
          <Button variant="link" className="p-0 h-auto text-primary">
            Full-time or Part-time
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="ml-auto gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Edit filters
        </Button>
      </div>
      <div className="space-y-4">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedCandidate?.id === candidate.id
                ? "border-primary bg-primary/5"
                : "hover:border-gray-300"
            }`}
            onClick={() => onSelectCandidate(candidate)}
          >
            <div className="flex items-start gap-4">
              <Image
                src={candidate.avatar}
                alt=""
                className="w-12 h-12 rounded-full"
                width={48}
                height={48}
              />
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{candidate.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {candidate.summary}
                    </p>
                  </div>
                  <Button size="sm">View profile</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {candidate.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">Full-time</Badge>
                    <Badge variant="outline">Part-time</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
