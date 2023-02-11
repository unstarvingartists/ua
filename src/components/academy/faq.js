import * as React from "react";
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Level 1",
    description: "Beginner friendly",
    icon: ChartBarIcon,
  },
  {
    name: "The Goal",
    description: "Successful art practice",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Program Length",
    description: "8 modules",
    icon: ClockIcon,
  },
  {
    name: "Program Format",
    description: "Online",
    icon: PresentationChartLineIcon,
  },
];

const faqs = [
  {
    id: 1,
    question: "What is it?",
    answer:
      "Academy is a 8 module online training program with live Q&A calls and a community of semi-professional and professional artists. It shows you how to start a profitable art practice from scratch.",
  },
  {
    id: 2,
    question: "Who is it for?",
    answer:
      "Academy is for anybody who wants to start their own profitable and successful art practice. It works for anybody, regardless of your previous knowledge or experience.",
  },
  {
    id: 3,
    question: "Where does it happen?",
    answer:
      "Academy is online and consists of training videos, tools, live Q&A calls and a client community. You complete it online, on your own time.",
  },
  {
    id: 4,
    question: "How does it work?",
    answer:
      "You watch the videos, complete the action items, use the provided tools and templates. Ask questions in the client community or on the live Q&A calls, follow the process, get results.",
  },
  {
    id: 5,
    question: "When does it start?",
    answer:
      "Academy is an online program and starts the moment you enroll. You can complete it in your own time and work through it as fast or slow as you wish. You get lifetime access.",
  },
  {
    id: 6,
    question: "Why does it exist?",
    answer:
      "We created the Academy program because there was nothing that showed a complete beginner how to start their own art practice from scratch. We filled that gap and in extreme detail.",
  },
];

export default function Component() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="max-w-7xl mx-auto pt-10 pb-16 px-4 sm:pt-16 sm:pb-24 sm:px-6 lg:px-8">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
