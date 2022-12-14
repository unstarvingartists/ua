import * as React from "react";
import { Link } from "gatsby";

const faqs = [
  {
    question:
      "How does the Academy program work and why use it over other ways to grow your art practice?",
    answer:
      "Academy is a 7 module online training program with live Q&A calls and a community of semi-professional and professional artists. It shows you how to start a profitable art practice from scratch and grow it to 6-figures. It is the simplest, clearest, most effective way for people to become successful artists.",
  },
  {
    question:
      "How can Unstarving Artists help me price my work and why use this approach over other methods?",
    answer:
      "Earning more from your work is all about increasing the perceived value of what you do. If you'd prefer to be able to sell fewer pieces at higher prices to better collectors, rather than trying to sell a TON of pieces for $150 or less, then you will love our approach.",
  },
  {
    question:
      "How can Unstarving Artists help me find leads and why use this approach over other methods?",
    answer:
      "Finding leads is all about having a predictable way to get in touch with your target market and knowing how to get them open and interested in learning more about your work. If you'd prefer to connect directly and predictably with deep-pocketed collectors, rather than hoping the often unpredictable galleries, agents, or social media platforms will bless you with leads, then you will love our approach.",
  },
  {
    question:
      "How can Unstarving Artists help me make more sales and why use this approach over other methods?",
    answer:
      "Making more sales is all about having an intentional systematic approach to your conversations with collectors. If you'd prefer to speak with warm friendly collectors who are highly educated in you and your work, rather than standoffish uninterested strangers looking for a fast exit from the conversation, then you will love our approach.",
  },
  {
    question: "What sorts of artists does Unstarving Artists' work with?",
    answer:
      "We work with professional and rookie artists. Professionals are artists that make a living day to day from their work. They may make an OK living but they want to make a fantastic living. Rookies are artists with a stable income from elsewhere yet they've sold multiple pieces of their work. Their art feels like a side hustle but they know it could be more.",
  },
  {
    question:
      "I'm a sculptor, ceramist, architect, drafter, photographer, etc. Can I have success with Unstarving Artists?",
    answer:
      "Absolutely. Unstarving Artists can be a great fit for all visual artists regardless of their medium. What's most important is that you want to earn more income from your work, that you are open to learning and growing in new ways in order to do so, and that you are able to stay committed to the process.",
  },
  {
    question:
      "Do I need to be a full-time artist to have success with Unstarving Artists?",
    answer:
      "No you do not. When you join Unstarving Artists you will find a great mix of part-time and full-time artists growing their art practices. The program allows you to go at your own pace and it comes with lifetime access. So even if something comes up, and you have to pause for a short time, you can pick things right back up where you left off and we are happy to support you.",
  },
  {
    question:
      "Do I need to have an art degree, MFA, etc. to have success with Unstarving Artists?",
    answer:
      "No, not at all. When you join Unstarving Artists, you will find plenty of artists with no formal training or higher education in art. Often these artists do well and do well quite quickly. They come in open-minded without getting confused by theories or bad habits from the old ways they were taught to do things.",
  },
  {
    question: "Why join Unstarving Artists instead of getting an art degree?",
    answer:
      "The traditional education system is broken. Due to a number of factors, every year traditional degrees are preparing people less and less well for a career in the field of their choice. At the same time, costs are skyrocketing—the average net cost of attending art school is $42,000. If you'd prefer a real world, results focused, accessible and affordable program, then you will love our approach.",
  },
  {
    question: "I have an art degree. Can Unstarving Artists still work for me?",
    answer:
      "Absolutely. When you join Unstarving Artists, you will find plenty of artists with formal training and higher education in art. Often these artists do well and do well quite quickly. They come in confidently, believing in themselves and the value of their work, which often leads to their conversations with collectors more quickly turning into sales.",
  },
  {
    question:
      "Do I need to have art world connections, gallery representation, etc. to have success with Unstarving Artists?",
    answer:
      "No, not at all. When you join Unstarving Artists, you will find plenty of artists who have not been featured in galleries, exhibits, or publications. That said, they still sell their artwork at high rates by connecting directly with collectors in their niche.",
  },
  {
    question:
      "Why join Unstarving Artists instead of securing gallery representation?",
    answer:
      "You can actually do both. We love the gallery ecosystem and a number of our artists work with galleries. When you join Unstarving Artists, your increased sales will give you the confidence, if you'd like, to wind down underperforming galleries and secure more favorable commission splits with the galleries you keep.",
  },
  {
    question:
      "I have gallery representation. Can Unstarving Artists still work for me?",
    answer:
      "Absolutely. When you join Unstarving Artists, you will find plenty of artists with gallery relationships. Often these artists maintain gallery representation but choose to work with fewer higher quality galleries. What's more, they often secure more favorable commission splits with their galleries going forward.",
  },
  {
    question:
      "Do I need to be a tech whiz to have success with Unstarving Artists?",
    answer:
      "No, not at all. When you join Unstarving Artists, you will find plenty of artists that generate leads in their local area. It's not about specific tech. It's about fundamental communication skills that equally apply online or in person. Plus, if you do wish to generate leads online, our methods are simple and user friendly.",
  },
  {
    question:
      "Do I need to budget for hard costs (software, tools, ad spend, etc.) to have success with Unstarving Artists?",
    answer:
      "No, not at all. When you join Unstarving Artists, you will be able to start making sales without having to invest in any software, tools, or ad spend. Once you start having success, there are optional tools you can invest in. That said, any optional fees are nominal and we often are able to secure deep discounts for our students.",
  },
  {
    question:
      "Do I need to have a big social media following to have success with Unstarving Artists?",
    answer:
      "No, not at all. When you join Unstarving Artists, you will find plenty of artists whose are just starting out on social media. Our approach doesn't require you to painstakingly build a large following first before you can make sales. You will be able to make sales right away while growing your following at the same time.",
  },
];

export default function Component() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-gray-500 prose prose-blue">
            Have specific questions or want to sign up? Apply for a strategy
            session <Link to="/apply-now">here</Link>.
          </p>
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
