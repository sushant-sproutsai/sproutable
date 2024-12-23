"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUp, CheckCircle } from "lucide-react";
import { ProgressSteps } from "@/components/progress-steps";

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    setUploading(true);
    // Simulate upload delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStep(2);
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Sproutable
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Questions?</Button>
            <Button variant="outline">Applied already? Log in</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight">
                Get hired for{" "}
                <span className="text-primary">engineering roles</span> with
                Sproutable
              </h1>
              <p className="text-xl text-gray-600">
                Join 300,000+ professionals in landing your dream job through
                our autonomous interview platform.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Get started</CardTitle>
                <p className="text-gray-500">
                  Get considered for hundreds of opportunities with one
                  application
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {step === 1 ? (
                  <div className="space-y-4">
                    <label htmlFor="resume-upload">
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                        <FileUp className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-500">
                          Upload your resume (PDF, DOC, DOCX)
                        </p>
                      </div>
                      <input
                        type="file"
                        id="resume-upload"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                      />
                    </label>
                    <Button className="w-full" size="lg" disabled={uploading}>
                      {uploading ? "Uploading..." : "Upload resume"}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      <span>Resume uploaded successfully!</span>
                    </div>
                    <Button
                      className="w-full"
                      size="lg"
                      onClick={() => setStep(3)}
                    >
                      Start Interview
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-24">
            <ProgressSteps currentStep={step} />
          </div>
        </div>
      </main>
    </div>
  );
}
