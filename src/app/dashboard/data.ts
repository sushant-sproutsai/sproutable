import { type Candidate } from "@/app/dashboard/types";

export const mockCandidates: Candidate[] = [
  {
    id: "1",
    name: "G. E.",
    title: "Senior Cybersecurity Analyst",
    avatar: "/placeholder.svg?height=400&width=400",
    summary:
      "Led Cyber Threat Intelligence at prestigious cybersecurity firm CrowdStrike.",
    expertise: [
      "Salesforce",
      "Tableau",
      "Threat Intelligence",
      "Security Operations",
    ],
    location: "United States",
    availability: "immediately",
    rates: {
      fullTime: 12500,
      partTime: 7200,
    },
    education: [
      {
        degree: "Master of Science in Cybersecurity",
        school: "Stanford University",
        duration: "2005 - 2007",
      },
    ],
    experience: [
      {
        role: "Senior Threat Intelligence Analyst",
        company: "CrowdStrike",
        duration: "2018 - 2023",
        description:
          "Led a team of analysts in identifying and responding to advanced cyber threats.",
      },
    ],
  },
  {
    id: "2",
    name: "L. D.",
    title: "Senior Product Manager",
    avatar: "/placeholder.svg?height=400&width=400",
    summary:
      "Led global teams at DDB, Lowe Worldwide, and managed Alfa Romeo at Red Cell.",
    expertise: [
      "Team Management",
      "Financial Reporting",
      "Presentation Skills",
    ],
    location: "United Kingdom",
    availability: "immediately",
    rates: {
      fullTime: 11800,
      partTime: 6900,
    },
    education: [
      {
        degree: "MBA",
        school: "London Business School",
        duration: "2008 - 2010",
      },
    ],
    experience: [
      {
        role: "Senior Product Manager",
        company: "DDB",
        duration: "2015 - 2023",
        description:
          "Managed global product teams and led successful product launches.",
      },
    ],
  },
  {
    id: "3",
    name: "D. S.",
    title: "Research Scientist",
    avatar: "/placeholder.svg?height=400&width=400",
    summary:
      "Led neuroprotection research at Max Delbrück Centre and AstraZeneca R&D.",
    expertise: [
      "Microscopy",
      "Analytical Chemistry",
      "Laboratory Safety Protocols",
    ],
    location: "Germany",
    availability: "immediately",
    rates: {
      fullTime: 12893,
      partTime: 7165,
    },
    education: [
      {
        degree: "Ph.D. in Neuroscience",
        school: "Max Planck Institute",
        duration: "2010 - 2014",
      },
    ],
    experience: [
      {
        role: "Senior Research Scientist",
        company: "AstraZeneca R&D",
        duration: "2014 - 2023",
        description:
          "Led research initiatives in neuroprotection and drug development.",
      },
    ],
  },
];
