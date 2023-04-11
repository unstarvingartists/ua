import * as React from "react";

const faqs = [
  {
    question:
      "Do I need to budget for hard costs (software, tools, ad spend, etc.) to have success with Unstarving Artists?",
    answer:
      "Not at all. When you join Unstarving Artists, you can start making sales without investing in any software, tools, or ad spend. Once you start experiencing success, there are optional tools you can invest in. However, any optional fees are nominal, and we often secure deep discounts for our students.",
  },
  {
    question:
      "Do I need to have a big social media following to have success with Unstarving Artists?",
    answer:
      "No, you don't. When you join Unstarving Artists, you will find many artists just starting on social media. Our approach doesn't require building a large following before making sales. You can make sales right away while growing your following simultaneously.",
  },
  {
    question: "What is a studio tour, and will I be able to do them?",
    answer:
      "A studio tour is simply a conversation with a prospective collector. It's just a conversation structured to increase the likelihood of making a sale. Don't worry—you don't need an art studio or a dedicated workspace for your art. People have success conducting tours from their living rooms, bedrooms, kitchens, and more. Regardless of your situation or comfort level with conversations, you will be able to have successful studio tours when you reach that point in the process.",
  },
  {
    question:
      "What is an art topic, and do I have to use the art topic you all pick for me?",
    answer:
      "Your art topic is what your art will be about. It doesn't necessarily have to be the subject matter of your work—it can be symbolic or figurative in some cases. Every artist is different, and we work with you to clarify an art topic that you're happy with and has good commercial potential. We can recommend an art topic for you, but you don't have to use it. Your art topic is ultimately your decision.",
  },
  {
    question: "What kind of support can I receive?",
    answer:
      "In The Academy, you will receive 1-on-1 coaching calls, weekly small group Q&A calls, and unlimited support in the community from the Unstarving Artists team and your peers who are often a few steps ahead of you. We encourage you to use all the support resources we provide as much as possible when you need help, want to share updates, or celebrate wins.",
  },
  {
    question: "What is an Online Art Booth on Instagram?",
    answer:
      "If you've been searching the internet for official Instagram blog posts or support articles on setting up an Online Art Booth, you won't find them because it's our special method of customizing your Instagram profile for success. The Academy explains exactly how to do this and provides examples from artists in the community and from those outside the community as well.",
  },
  {
    question: "Should I create a new Instagram account?",
    answer:
      "If you don't have an Instagram account yet, then yes, you should create a new one.\n\nIf you've purchased followers in the past, a few hundred or thousand followers that are mostly bots or people who don't engage with your content, you should also create a new Instagram account. You can consider that account tainted. It doesn't mean you have to delete the account; it just means we want to start with a clean slate in that scenario.\n\nHowever, in most other cases, if you have an existing account for personal use or for your art, you don't need to create a new one. We'll simply edit and use that one going forward.",
  },
  {
    question:
      "How is Unstarving Artists different from working with a gallery or an art agent?",
    answer:
      "Galleries and art agents take a large commission, often 20% - 50%, to sell your work for you. In our case, we teach you how to sell your artwork and you make an investment upfront in our program to get our help. Rather than give you fish, and make you dependent on us, we teach you how to fish, so that you can be more independent and fish for life.",
  },
  {
    question:
      "Are there any other ways working with Unstarving Artists differs from working with a gallery or an art agent?",
    answer:
      "Yes. Galleries and art agents usually represent multiple artists. As a result, they have less incentive to ensure your work sells instead of another of their artists' works. With Unstarving Artists, we have a special incentive to ensure each of our artists sells their work. The more our artists see success, the more other artists want to work with us and the easier it is to grow our business.",
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
      "After 12 months of being in The Academy, you will pay us a small one time 5% commission on your art sales made with your Online Art Booth. After that, you still retain access to the program but you won’t pay us any commissions on your art sales so you can pocket 100% of the fruits of your labor. Enjoy!",
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
      "When you join Unstarving Artists, you will get access to multi 6-figure art market experts who work closely with you to help you see results. This happens by answering your questions on live Q&A calls as well as in the client community. You just have to ask, and we will be there to help.",
  },
  {
    question:
      "When I join Unstarving Artists, how fast can I start to see results?",
    answer:
      "When you join Unstarving Artists, come on a live Q&A call right away to share where you are at and what your specific goals are. We can then tailor things to your situation so that you can see results as quickly as possible. Every client is different but some artists do see sales in their first month.",
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
      'Awesome, so glad to hear you are interested in joining us. First, click the "See How It Works" button below to watch an in-depth free training on our approach.',
  },
  {
    question: "What's your refund policy?",
    answer:
      "Your investment is 100% risk-free provided that you take the action outlined in our action-based guarantee (see terms). Your effort must be a good faith honest attempt to apply the program over 180 days. If you take the action that we ask you to take and have not made progress in growing your art practice, we will happily refund your full payment.",
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
