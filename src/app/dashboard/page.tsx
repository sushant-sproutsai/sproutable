"use client";

import { useState } from "react";
import { CandidateList } from "@/app/dashboard/candidate-list";
import { CandidateDetails } from "@/app/dashboard/candidate-details";
import { type Candidate } from "@/app/dashboard/types";
import { mockCandidates } from "@/app/dashboard/data";

export default function DashboardPage() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );

  return (
    <div className="flex-1 flex">
      <div className="flex-1 border-r bg-white overflow-y-auto">
        <CandidateList
          candidates={mockCandidates}
          selectedCandidate={selectedCandidate}
          onSelectCandidate={setSelectedCandidate}
        />
      </div>
      <div className="w-[600px] bg-white overflow-y-auto">
        {selectedCandidate ? (
          <CandidateDetails candidate={selectedCandidate} />
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            Select a candidate to view details
          </div>
        )}
      </div>
    </div>
  );
}
