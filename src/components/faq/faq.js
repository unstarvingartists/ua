import * as React from "react";
import { Link } from "gatsby";

const faqs = [
  {
    question: "What types of artists does Unstarving Artists work with?",
    answer:
      "We work with both professional and rookie artists. Professionals are artists who earn their living from their work but aspire to make an even better living. Rookies are artists who have a stable income from other sources and have sold multiple pieces of their work. While their art may feel like a side hustle, they believe it could be more.",
  },
  {
    question: "Will Unstarving Artists work for my specific art medium?",
    answer:
      "Unstarving Artists can work for any art medium, including photography, quilt making, digital art, and more. If you're open to selling pieces for $1,000+ and have seen others in your medium achieve this, the program can work for artists like you. Following the recommended steps and being eager to sell at this price point are key to having a great experience.",
  },
  {
    question:
      "Do I need to be a full-time artist to have success with Unstarving Artists?",
    answer:
      "No, you don't. When you join Unstarving Artists, you'll find a mix of part-time and full-time artists growing their art practices. The program allows you to progress at your own pace so even if something comes up and you need to pause for a while, you can pick up right where you left off, and we'll be happy to support you.",
  },
  {
    question:
      "Do I need to have an art degree, MFA, etc., to have success with Unstarving Artists?",
    answer:
      "No, not at all. When you join Unstarving Artists, you will find plenty of artists with no formal training or higher education in art. Often these artists do well and do well quite quickly. They come in open-minded without getting confused by theories or bad habits from the old ways they were taught to do things.",
  },
  {
    question: "I have an art degree. Can Unstarving Artists still work for me?",
    answer:
      "Absolutely. When you join Unstarving Artists, you will find plenty of artists with formal training and higher education in art. Often these artists do well and do well quite quickly. They come in confidently, believing in themselves and the value of their work, which often leads to their conversations with collectors more quickly turning into sales.",
  },
  {
    question:
      "Do I need to have art world connections, gallery representation, etc., to have success with Unstarving Artists?",
    answer:
      "No, not at all. Many artists who join Unstarving Artists have not been featured in galleries, exhibits, or publications. Nevertheless, they successfully sell their artwork at high rates by connecting directly with collectors in their niche.",
  },
  {
    question:
      "I have gallery representation. Can Unstarving Artists still work for me?",
    answer:
      "Definitely. Many artists in Unstarving Artists have gallery relationships. These artists often maintain their gallery representation while choosing to work with fewer, higher-quality galleries. Moreover, they frequently secure more favorable commission splits with their galleries moving forward.",
  },
  {
    question: "Do I need a portfolio of work when starting out?",
    answer:
      "Absolutely not. Most people who ask this question have experience applying to art schools or galleries, where a large portfolio of work is expected. However, prospective collectors are less concerned about seeing 12 to 15 pieces that demonstrate your range of skills and expertise. Instead, they want to know, like, and trust you as a person and as an artist. They want to feel like you can meet their needs through an original or commission. So, don't worry if you have little or no portfolio when starting out. We offer a specific training called the No Portfolio Kickstarter to help you in this situation.",
  },
  {
    question: "How much time per week do I need to spend to see progress?",
    answer:
      "With any meaningful project, the more time and effort you invest, the faster and greater results you will typically achieve. However, even if you can only dedicate a couple of hours per week, like 30 minutes a day, 3 to 4 times a week, or 3 to 4 hours each weekend, you can still make solid, steady progress in the program.\n\nWhat matters most is taking one step at a time, maintaining steady, consistent progress, and striving to improve each week compared to the previous one. By doing so, you will be amazed at the significant progress you achieve in 3 months, 6 months, and beyond.",
  },
  {
    question:
      "How does The Academy program work and why use it over other ways to grow your art practice?",
    answer:
      "Academy is a 8 module online training program with live Q&A calls and a community of semi-professional and professional artists. It shows you how to start a profitable art practice from scratch and grow it to 6-figures. It is the simplest, clearest, most effective way for people to become successful artists.",
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
    question: "Why join Unstarving Artists instead of getting an art degree?",
    answer:
      "The traditional education system is flawed. Due to various factors, traditional degrees are becoming less effective at preparing people for careers in their chosen fields. Meanwhile, costs are skyrocketing, with the average net cost of attending art school at $42,000. If you prefer a real-world, results-focused, accessible, and affordable program, our approach will resonate with you.",
  },
  {
    question:
      "Why join Unstarving Artists instead of securing gallery representation?",
    answer:
      "You can actually do both. We appreciate the gallery ecosystem, and many of our artists work with galleries. Joining Unstarving Artists can boost your sales, giving you the confidence to wind down underperforming galleries and secure more favorable commission splits with the galleries you retain.",
  },
  {
    question:
      "Do I need to be a tech whiz to have success with Unstarving Artists?",
    answer:
      "No, you don't. Whether you're 18 years old or 82 years young joining The Academy, there are people with similar backgrounds experiencing success in the program. We've simplified the tech as much as possible and removed anything non-essential.\n\nFor example, as you progress through The Academy, you'll notice we never discuss setting up a website. That's because you don't need a website to succeed online today. Why? Your Instagram can serve as a website for you, and it's much easier to manage.",
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
