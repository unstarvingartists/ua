import * as React from "react";

const faqs = [
  {
    question:
      "How is Unstarving Artists different from working with a gallery or an art agent?",
    answer:
      "Galleries and art agents take a large commission, often 20% - 50%, to sell your work for you. We teach you how to sell your artwork and don't take any commission. Instead there is a simple one-time investment to join our program and get our help. Rather than give you fish, and make you dependent on us, we teach you how to fish, so that you can be more independent and fish for life.",
  },
  {
    question:
      "Are there any other ways working with Unstarving Artists differs from working with a gallery or an art agent?",
    answer:
      "Yes. Galleries and art agents usually represent multiple artists. As a result, they have no special incentive to ensure your work sells instead of another of their artists' works. With Unstarving Artists, we have a special incentive to ensure each of our artists sells their work. The more our artists see success, the more other artists want to work with us and the easier it is to grow our business.",
  },
  {
    question: "This is helpful. What else? Any more differences come to mind?",
    answer:
      "Come to think of it, yes. Galleries and art agents typically do not disclose the identities of buyers which makes it hard to know which collectors resonate with your work and why. With Unstarving Artists, you will connect directly with collectors and will own the relationship. This makes it wildly easier to increase your sales and take your art practice in all the right directions.",
  },
  {
    question:
      "Tell me more? Any final differences that are important to mention?",
    answer:
      "Sure. Galleries and art agents often come from the traditional art world. They typically do not have cutting-edge sales or marketing training. At Unstarving Artists, none of us have worked at Sotheby's, Christie's, or the New York Met. Our background is in online marketing and sales. While we don't have fancy credentials, we do have a track record of artist results. Lots of results.",
  },
  {
    question:
      "I'm a gallery owner or agent representing artists. Can I bring on my artists and get commissions?",
    answer:
      "We are EXTREMELY picky with who we let share our brand and represent us. We do have a waitlist for a CERTIFIED partner program and plan to allow galleries and agents to get commissions for referring artists. Please email hello@unstarvingartists.com if you are interested in being added to the waitlist.",
  },
  {
    question:
      "When I join Unstarving Artists, do you take commissions on my art sales?",
    answer:
      "No, not at all. When you join Unstarving Artists, you won't pay us any commissions on your art sales. You will get everything you need to reach $10k, $20k, even $30k / month in art sales and, with every sale that you make, you will get to pocket 100% of the fruits of your labor. Enjoy!",
  },
  {
    question: "When I join Unstarving Artists, what exactly do I get?",
    answer:
      "When you join Unstarving Artists, you will get access to training videos, tools, live Q&A calls and a client community. You will be in the perfect environment and equipped with the right tools that will allow you to finally focus and take action to earn more from your artwork and change your life.",
  },
  {
    question:
      "When I join Unstarving Artists, what kind of support do I receive?",
    answer:
      "When you join Unstarving Artists, you will get 24/7/365 access to multi 6-figure art market experts who work closely with you to help you see results. This happens by answering your questions on live Q&A calls as well as in the client community Facebook group. You just have to ask, and we will be there to help.",
  },
  {
    question:
      "When I join Unstarving Artists, how fast can I start to see results?",
    answer:
      "When you join Unstarving Artists, come on a live Q&A call right away to share where you are at and what your specific goals are. We can then tailor things to your situation so that you can see results as quickly as possible. Every client is different but it's not unusual for artists to see sales in their first month.",
  },
  {
    question: "When I join Unstarving Artists, will I get the latest updates?",
    answer:
      "Absolutely. When you join Unstarving Artists, you will get access to the latest resources we have to make it easier to earn more from your artwork. We are constantly releasing improvements as we get feedback from clients and as the art market evolves. You will get access to these updates as we release them.",
  },
  {
    question: "When I join Unstarving Artists, what happens next?",
    answer:
      "When you join Unstarving Artists, you will immediately get access to the training portal, the client community, and the live Q&A calls. The first training video will welcome you and orient you. Then, make sure to join the next upcoming Q&A call so you can introduce yourself, say hello, and get tailored help right away.",
  },
  {
    question:
      "This sounds like exactly what I've been looking for. How do I get started?",
    answer:
      'Awesome, so glad to hear you are interested in joining us. First, click the "See How It Works" button below to watch a brief free training on our approach. Toward the end of the training video you will see a link appear that will invite you to apply for a strategy session. Complete an application and we will see if we are a good fit for your art practice. Looking forward to hearing from you!',
  },
  {
    question: "What's your refund policy?",
    answer:
      "Your investment is 100% risk-free provided that you take the action outlined in our action-based guarantee (see terms). Your effort must be a good faith honest attempt to apply the program over 90 days. If you take the action that we ask you to take and are not seeing value, we will happily work out a refund.",
  },
];

export default function Component() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            More frequently asked questions
          </h2>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-3 text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
