export interface Candidate {
  id: string;
  name: string;
  title: string;
  avatar: string;
  summary: string;
  expertise: string[];
  location: string;
  availability: string;
  rates: {
    fullTime: number;
    partTime: number;
  };
  education: {
    degree: string;
    school: string;
    duration: string;
  }[];
  experience: {
    role: string;
    company: string;
    duration: string;
    description: string;
  }[];
}
