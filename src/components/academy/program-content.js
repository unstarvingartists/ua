import * as React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "Week One - Foundations",
    answer:
      "In week one we cover the fundamental laws of nature, business, and the art world so that you understand the science behind everything. Once a clear understanding is established we get to work on the foundations of your art practice.</br></br>The foundations are things like: picking your niche, crafting your art offer, resonating your message and testing everything in the marketplace to get feedback and iterate/improve until offer-market fit is achieved.",
  },
  {
    question: "Week Two - New Paradigm & World View",
    answer:
      "In week two we teach you a new paradigm and world view. It's a mindset shift so profoundly different that it's like seeing clearly for the first time.</br></br>We discuss why most peoples' thinking and beliefs are flawed and destructive and how you can rewire your brain (no matter your age, background, or experience level) so that it helps you and doesn't sabotage you. This part of the program will change your life.",
  },
  {
    question: "Week Three - Crafting Your Offer",
    answer:
      "In week three we go deeper into crafting your art offer to ensure high profit margins. We look at how the way you package and position your artwork can make all the difference in selling a work for thousands of dollars instead of just hundreds.</br></br>This week alone often leads to artists dramatically increasing their sales.",
  },
  {
    question: "Week Four - Collector Conversion",
    answer:
      "In week four we discuss the art and science of converting a total stranger to a happy paying collector with one phone call.</br></br>We teach you the mistakes most artists make, how to sell like a master and we introduce you to our revolutionary collector conversion script. From structure to questions to objection handling responses, this week covers art sales from A to Z.",
  },
  {
    question: "Week Five - Flywheel Evolution",
    answer:
      "In week five we discuss the art and science of using social proof to increase our close rate, raise our pricing power, and more easily attract leads.</br></br>We walk you through how to collect social proof assets like testimonials, case studies, and collector interviews and exactly where to leverage them in your art practice for maximum effect.",
  },
  {
    question: "Week Six - Collector Attraction",
    answer:
      "In week six we discuss the art and science of attracting collectors to your art practice with free organic strategies.</br></br>From grass roots strategies you can implement immediately and for free through to world class lead generation campaigns. Week four shows you how to attract hot, ready to buy collectors to your art practice in droves.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Component() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The Academy Program Content
            </h2>
            <p className="text-center mt-3 text-lg text-gray-500">
              In just 8 modules, we'll help you grow your art practice and turn
              it into a machine. Here's how.
            </p>
          </div>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p
                        className="text-base text-gray-500"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      ></p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
