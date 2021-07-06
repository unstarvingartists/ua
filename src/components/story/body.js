import * as React from "react";
import { Link } from "gatsby";
import { StarIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "Our story", href: "/story" },
  { name: "Our philosophy", href: "/philosophy" },
  { name: "Our company", href: "/company" },
];

export default function Component({ children }) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
        {children}
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="sm:grid sm:grid-cols-6 sm:gap-4">
            <div>
              <ul className="mt-4 space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                      activeClassName="text-gray-700 underline font-semibold"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-start-2 sm:col-span-4">
              <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
                <blockquote>
                  <p>
                    Harry Whelchel is a multi 6-figure art market consultant
                    working closely with over 40 semi-professional and
                    professional artists spanning more than 12 countries.
                  </p>
                  <p>
                    His flagship Flywheel Lab training program has produced 3
                    millionaires, dozens of six-figure earners, and allowed
                    countless everyday people to become full-time artists.
                  </p>
                </blockquote>
              </div>
              <div className="text-lg max-w-prose mx-auto pt-4">
                <h1>
                  <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                    How It All Began
                  </span>
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Harry's Story
                  </span>
                </h1>
                <p className="mt-8 text-xl text-gray-500 leading-8">
                  Hi, I’m Harry Whelchel, and I’d like to share a bit of my
                  story with you.
                </p>
              </div>
              <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
                <p>
                  I grew up in Atlanta, GA in an everyday, white-collar,
                  middle-class family, and I didn't know anything else. I was
                  taught to work hard in school, live frugally, and pursue the
                  well-worn path of going to college and then getting a
                  white-collar corporate job.
                </p>

                <p>
                  In fact, when I landed a job at the Rimm-Kaufman Group (a
                  digital marketing agency to the Fortune 500) at 21 years old
                  just graduated from college, I became a family "success"
                  story.
                </p>

                <p>
                  And that's what my view of success had been as long as I could
                  remember. You "made it" if you were in a salaried role working
                  in an air-conditioned office.
                </p>

                <p>But all that would soon change...</p>
                <figure>
                  <img
                    className="w-full rounded-lg"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                    alt=""
                    width={1310}
                    height={873}
                  />
                  <figcaption>
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                  </figcaption>
                </figure>
                <h2>The First Epiphany</h2>
                <p>
                  There was one sense in which my college experience was quite
                  unique. You see, I was in a men's a cappella group. We sang
                  classic songs and wore bowties—the whole nine yards.
                </p>

                <p>
                  One year, our group's president was able to secure us an
                  invitation to spend spring break on a cruise ship in exchange
                  for a few performances on board. Envisioning us spending a few
                  days off the coast of Florida on a crowded ship filled with
                  young people, I said, "Sure, why not", and we were on our way.
                </p>

                <p>
                  You can imagine my surprise when we ended up on the #1 rated
                  all-inclusive luxury cruise ship sailing from Australia to
                  Singapore over 10 days. This was no 3-day Florida cruise.
                </p>

                <p>
                  In fact, in exchange for our performances, they put us up in
                  cabins that ran $25,000 per person—if we had been paying
                  guests.
                </p>

                <p>
                  I don't know if other people who didn't grow up rich have this
                  same type of experience, but being exposed to the type of
                  wealth that can spend that kind of money on a spring break
                  vacation completely opened my eyes to a world I had never even
                  imagined.
                </p>

                <p>
                  Up until this moment, I thought if you were making $50k per
                  year, you were doing quite alright for yourself, and if you
                  were making more than six figures, you were basically royalty.
                </p>

                <p>
                  Travel business class? Go out to dinner every weekend? Have a
                  nice car?
                </p>

                <p>That was having "made it" in my world.</p>

                <p>
                  And here I was rubbing shoulders with a bunch of
                  multi-millionaire cruise passengers.
                </p>
                <figure>
                  <img
                    className="w-full rounded-lg"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                    alt=""
                    width={1310}
                    height={873}
                  />
                  <figcaption>
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                  </figcaption>
                </figure>

                <p>
                  There was a penthouse suite on the ship, so I asked how much
                  it cost. I realized that it would take me 3 years working at
                  my job to pay for that room. This was wealth unlike anything I
                  had ever encountered.
                </p>

                <p>
                  Over the course of the cruise, I became friends with some of
                  the guests, in particular a young man traveling with his wife
                  on their honeymoon. As we spent time together, I noticed a few
                  things.
                </p>

                <p>
                  First, my new friend had no time for pessimism. If something
                  negative was in the morning newspaper or the topic of
                  conversation turned cynical, he would quietly remove himself
                  from the discussion. One day I asked him about it and he told
                  me, "Harry, I don't read, watch, or listen to anything that is
                  negative."
                </p>

                <p>
                  At first, his answer confused me. I felt it was a bit rude and
                  even selfish, but the more I reflected on his words, the more
                  I realized how much time I spent worrying about and focusing
                  on negative things in the wider world that were outside my
                  control. It was wasted time and energy, and this insight
                  played a huge role in shaping my worldview and still does to
                  this day.
                </p>

                <p>
                  The other thing that stood out to me was how differently a
                  wealthy person approaches day to day life versus someone like
                  me who was raised to be frugal. Fine dining every night? No
                  problem. Popping in for an afternoon lecture given by a world
                  leading intellectual? Why not?
                </p>

                <p>
                  And it wasn't so much of an excessive spending thing, as much
                  as it was an experiences thing. My friend could afford to pay
                  for day-to-day enriching life-improving experiences, no matter
                  what they were.
                </p>

                <p>
                  By the time I left the cruise ship, I was no longer satisfied
                  with the prospect of chaining myself to a desk in exchange for
                  a corporate salary. I now knew how much more was available and
                  I wanted it. I didn't want a life preoccupied with saving
                  money. I wanted the freedom to live however I wished.
                </p>

                <p>
                  I asked around about what my newly-wed friend did to make
                  money. They told me he owned his own business. He was
                  something called an entrepreneur.
                </p>

                <p>
                  I'm afraid I have to admit, that at the time, I didn't really
                  know what an entrepreneur was. So I did a bit of Googling and
                  that's where my journey began. Before then, I hadn't ever
                  really given much thought to there being other options out
                  there besides having a job.
                </p>

                <p>
                  As I did more research, it became more and more clear to me
                  that this creative entrepreneurially way of life was what I
                  needed to pursue.
                </p>

                <h2>When A Door Closes, Climb Through The Window</h2>

                <p>
                  If there is one character trait I've had for as long as I
                  remember, it's grit. When I identify what I want, when I
                  decide I'm going after it, when I commit, I go after it
                  completely.
                </p>

                <p>
                  Once I decided to become an entrepreneur, I quit my corporate
                  job, moved across the country, and got to work.
                </p>

                <p>
                  There were a few red lights, road bumps, and detours along the
                  way to say the least.
                </p>

                <p>
                  The first business I started was called The Interstellar
                  Registry, a site that would allow you to unofficially name a
                  star to celebrate a birthday or anniversary, typically as a
                  gift.
                </p>

                <p>It failed miserably. Haha it was embarrassing.</p>

                <p>3 months. $10,000 spent. Zero revenue.</p>

                <p>
                  I realized my heart and mind just weren't in the idea and I
                  scrapped it.
                </p>

                <p>But if at first you don’t succeed...</p>

                <p>
                  So I started a second business called ChirpyHire, a
                  text-message based recruiting app for healthcare companies.
                </p>

                <p>And this time... it was actually a bit of a flop again.</p>

                <p>18 months. $50,000 spent. $3,000 in monthly revenue.</p>

                <p>Not great.</p>

                <p>
                  One day, I realized I couldn't see myself working in the
                  industry for the next 5 to 7 years. The healthcare industry
                  just wasn't for me.
                </p>

                <p>
                  So I sold the software for a modest profit, licked my wounds,
                  and began thinking about my next step.
                </p>

                <p>
                  At this point, I was all out of money, in fact, I moved back
                  in with my folks. If I wanted to take another stab at
                  entrepreneurship, I needed to do something that worked, and
                  that worked right away.
                </p>

                <p>
                  One skill I had picked up while running my two failed
                  businesses was creating marketing campaigns, so to get my feet
                  back under me and begin building some savings for my next
                  venture, I started creating marketing campaigns for
                  businesses. This was my first introduction to the emerging
                  online service economy, and it started to transform my
                  understanding of what entrepreneurship meant.
                </p>

                <p>But I'm getting a bit ahead of myself.</p>

                <p>At that moment, I had a 3rd business to launch...</p>

                <h2>My First Successful Business</h2>
                <p>
                  My third business was ConvoPanda, a marketing agency for tech
                  companies.
                </p>

                <p>
                  Now at this point, you might think that I was just throwing
                  spaghetti at the wall and hoping something sticks, but in
                  reality, I was learning a tremendous amount with each failure.
                </p>

                <p>
                  By the time I was ready to launch ConvoPanda, I had made some
                  very important strategic changes in how I launched this 3rd
                  business.
                </p>

                <p>
                  With my first business, my target client was anyone in the US.
                  It was way too broad. With my second business, my target
                  audience was anyone working in healthcare... still too broad.
                </p>

                <p>
                  With ConvoPanda, I got specific. My app was for tech
                  companies...specifically Software as a Service (SaaS)
                  companies only.
                </p>

                <p>
                  I knew exactly who my product was for, and as a result, I was
                  much more effective at targeting them with my marketing.
                </p>

                <p>
                  But that wasn’t the only crucial change in how I approached
                  launching ConvoPanda.
                </p>

                <p>
                  With my first two businesses, I created things I thought the
                  market would want. When I finally went to sell them, the
                  market responded with “I don't need this”. These words burned
                  into my brain, and I thought over this for months on end until
                  I figured out a process to find out what the market wants in
                  advance of starting the business, essentially avoiding the
                  risk altogether.
                </p>

                <p>
                  With ConvoPanda, I made absolutely sure there was demand for
                  what I wanted to do by pre-selling it. Before the first line
                  of a marketing campaign was even written, I contacted SaaS
                  businesses and pre-sold $9,000 worth of projects.
                </p>

                <p>
                  By the time I was building marketing campaigns, I had a real
                  client base, and I was making real revenue.
                </p>
                <figure>
                  <img
                    className="w-full rounded-lg"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                    alt=""
                    width={1310}
                    height={873}
                  />
                  <figcaption>
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                  </figcaption>
                </figure>

                <h2>The Second Epiphany</h2>
                <p>
                  As anyone who has run a marketing agency will tell you, it's
                  time intensive. It takes a lot of time and effort to keep up,
                  especially if you're a solo operator. If you hire team
                  members, paying them can keep you from reaching profitability
                  for months if not years. Even though I was bringing on clients
                  with ConvoPanda and was on the path to success, I needed to
                  adapt.
                </p>

                <p>
                  Rather than attempting to hire a big expensive team or source
                  3rd party funding, I simply continued creating and selling
                  marketing campaigns and ultimately expanded that business into
                  a lead generation consultancy.
                </p>

                <p>
                  Lead generation, like marketing, was a skill I picked up from
                  building my previous businesses, and as I began offering it as
                  a service, I was astounded at how big the demand was.
                </p>
                <figure>
                  <img
                    className="w-full rounded-lg"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                    alt=""
                    width={1310}
                    height={873}
                  />
                  <figcaption>
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                  </figcaption>
                </figure>
                <p>
                  In a fraction of the time it had taken ChirpyHire to achieve
                  profitability, my lead generation consultancy was actually
                  making significantly more revenue and with so much less
                  overhead.
                </p>

                <p>
                  I began to see that client acquisition was a huge problem that
                  almost everybody had but hardly anybody knew how to fix. If
                  you could find the recipe to getting clients, you could
                  basically write your own checks.
                </p>

                <p>And then one day, it clicked.</p>

                <p>
                  I realized that the key to success for virtually every
                  business on the planet is to identify the niche you are
                  targeting, figure out their desires and pains, and help them
                  solve their problems and achieve their goals.
                </p>

                <p>
                  This was my second big epiphany, and I knew instinctively that
                  it was my ticket to that cruise ship.
                </p>

                <p>
                  And so, I sold ChirpyHire and used the money to aggressively
                  scale my lead generation consultancy while working tirelessly
                  to master the art of client acquisition.
                </p>
                <h2>Sales Coaching</h2>
                <p>
                  One side effect of mastering a skill that everyone needs is
                  that everyone wants to learn it or benefit from it in some
                  way.
                </p>

                <p>
                  Some businesses would of course hire me to run their lead
                  generation. But what I found particularly interesting was that
                  a lot of business owners simply wanted my advice. They would
                  pay me increasingly larger sums to help them accomplish
                  certain goals and get over certain hurdles.
                </p>
                <p>
                  As my consultancy reached multiple six figures, I also began
                  having people approach me to teach them how to build their own
                  profitable consultancies. At first I would coach 1-on-1, but
                  as demand increased, I expanded to coaching groups of 5 and
                  then 10 at a time.
                </p>

                <p>
                  Rather than teaching people how to offer digital marketing
                  services, I focused more on the real money-maker: client
                  acquisition. Armed with the knowledge of how to identify a
                  niche, target niche clients, and sell to them, my students
                  were experiencing success regardless of their business niche.
                </p>

                <p>
                  Basically I was teaching people how to become consultants and
                  build their own consulting businesses.
                </p>

                <p>
                  The thing is though there are a lot of business consultants
                  out there for other coaches and consultants. It's a brutally
                  competitive niche. And I knew that if I wanted to expand, I
                  would need to find a segment of the market that was
                  underserved and could massively benefit from my mastery of
                  client acquisition.
                </p>

                <p>
                  Accordingly, I started working on identifying this underserved
                  niche. A niche filled with everyday people that could benefit
                  from the lead generation and client acquisition knowledge I
                  knew I could teach them in a relatively short period of time.
                </p>
                <h2>My Third Epiphany</h2>
                <p>
                  I started reflecting back on the 70+ clients I had worked with
                  over the past year and one client immediately jumped out at
                  me. A young artist named Oliver Hojas.
                </p>
                <p>
                  Oliver and I had connected on social media after he had been
                  following me for awhile. He had seen the results I was getting
                  my business clients and so one day he reached out to me and
                  asked if I thought I could help him.
                </p>
                <p>
                  We got to chatting, and as I learned more about his art
                  practice, his income goals, and what he was looking to
                  accomplish I started to notice all these patterns.
                </p>
                <p>
                  I started to see how I could translate all the fundamental
                  sales and marketing principles I worked on with my other
                  clients to selling original and commissioned artwork. It was
                  an insightful and interesting conversation.
                </p>
                <p>
                  I had to see if I could prove my theory to be correct, so I
                  decided to take a chance on Oliver and bring him on as a
                  client.
                </p>
                <p>It was a great decision for the both of us.</p>
                <p>
                  In his first month he earned €5,800 from his artwork. By the
                  end of month two, he had earned €25,800. It took him just nine
                  months to reach €100,000 in sales.
                </p>
                <p>We were definitely on to something.</p>
                <p>
                  The word got out about the success Oliver was seeing in his
                  art practice, and more artists started knocking on my door.
                  All told, in this initial phase, I brought on five artists in
                  quick succession.
                </p>
                <p>
                  These other artists also started earning more (much more) from
                  their artwork, so I knew we were on to something. The more I
                  studied the art world, I realized what we were doing was quite
                  unconventional for artists. What we were doing was
                  revolutionary. But it was working and it kept working again
                  and again.
                </p>
                <p>
                  I knew I had see if more artists would resonate with my
                  message and what I had to offer. And with that, Unstarving
                  Artists and our flagship training program, Flywheel Lab, was
                  born.
                </p>
                <h2>The Flywheel Lab Training</h2>
                <p>
                  Similar to my previous businesses, I didn’t knock it out of
                  the park right away. I wasn’t failing by any measure, and the
                  first few training programs I created succeeded in bringing in
                  a solid profit, but I wasn’t quite reaching my goals either...
                  at least the goals that I envisioned.
                </p>

                <p>
                  There are thousands of people out there offering online
                  programs, and one thing that many of them have in common is
                  that they just give their clients a small piece of the puzzle.
                  Some of the richest sellers out there will break up the value
                  they offer into 10 different pieces and then just string
                  clients along, using psychology to get them hooked without
                  actually leaving them better off.
                </p>

                <p>
                  That’s not how I wanted to run my business. That's not how I
                  wanted to work with artists.
                </p>

                <p>
                  I wanted to give people everything they needed to legitimately
                  succeed in one package and if they follow through and put the
                  work in, they will inevitably succeed.
                </p>
                <figure>
                  <img
                    className="w-full rounded-lg"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                    alt=""
                    width={1310}
                    height={873}
                  />
                  <figcaption>
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                  </figcaption>
                </figure>
                <p>
                  I wanted to go above and beyond and be known for delivering
                  the most valuable practical training program for artists in
                  the world. More valuable by far than any conventional art
                  degree, credentials, or accolades the traditional art world
                  has to offer.
                </p>

                <p>
                  And in the pursuit of this ideal, the Flywheel Lab training
                  program was born.
                </p>

                <p>
                  I knew when I first launched the Flywheel Lab to a small group
                  of students that I had created something special, but even I
                  couldn’t have predicted just how popular and successful the
                  program would be.
                </p>

                <p>
                  Within 2 years, this single program created 3 millionaires,
                  dozens of six-figure earners, and allowed countless more
                  students to quit their jobs and become full-time artists.
                </p>

                <p>
                  It also brought in $500,000 in revenue for my business,
                  allowing me to move to a dream apartment, hire team members,
                  and launch the new Flywheel Lab 2.0.
                </p>

                <p>
                  If you’d like to get a better feel for what the Flywheel Lab
                  is all about, check out this video: "The 3 Step Process We
                  Used To Earn A 5 Figure A Month Income From Our Art".
                </p>
                <h2>Looking To The Future</h2>
                <p>
                  Nothing makes me happier than seeing other people change
                  themselves and change their lives for the better. People
                  aren't just “the way they are”. They're built one piece at a
                  time, and you can build yourself into whoever you want to be.
                </p>

                <p>
                  My students have become my best friends and I like to
                  celebrate their success at each stage of the journey. When
                  somebody reaches 6-figures, I send them an invite to have a
                  private lunch with me and a few of their friends. When
                  somebody reaches 7-figures, we do something even more special.
                </p>

                <p>
                  What began as a struggle, became an idea, which struck a nerve
                  and became a movement. The Unstarving Artist Revolution is
                  here, and I’d love for you join me!
                </p>
              </div>
              <div className="mt-10 text-center">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="https://go.unstarvingartists.org/opt-in"
                    className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {" "}
                    Join the revolution <span aria-hidden="true">
                      &rarr;
                    </span>{" "}
                  </Link>
                </div>
                <div className="mt-4 mb-1">
                  <div className="inline-flex items-center">
                    <div className="flex-shrink-0 flex mr-2">
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                    </div>
                    <Link
                      to="/stories"
                      className="text-base font-medium text-blue-600"
                    >
                      {" "}
                      4.9 stars 29 student stories
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}