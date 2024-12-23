interface ProgressStepsProps {
  currentStep: number;
}

export function ProgressSteps({ currentStep }: ProgressStepsProps) {
  const steps = [
    {
      title: "Upload Resume",
      duration: "2 mins",
      description: "Share your experience",
    },
    {
      title: "Take Interview",
      duration: "20 mins",
      description: "Complete the autonomous interview",
    },
    {
      title: "Complete Profile",
      duration: "5 mins",
      description: "Review and submit",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (
          <div
            key={step.title}
            className={`relative p-6 rounded-lg border ${
              isActive ? "border-primary bg-primary/5" : "border-gray-200"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  isActive
                    ? "bg-primary text-white"
                    : isCompleted
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {stepNumber}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{step.title}</h3>
                  <span className="text-sm text-gray-500">{step.duration}</span>
                </div>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
