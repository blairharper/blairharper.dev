import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="max-w-6xl">
      <article className="prose dark:prose-invert">
        <h1>Hi, I'm Blair Harper, I'm a full time software engineer.</h1>
        <h2>
          I'm currently COO at{' '}
          <Link href="https://passio.co.uk">
            <a>Passio</a>
          </Link>
          , we make accessible web and mobile apps.
        </h2>
        <p>
          I started programming before I was even a teenager. I used to have a
          lot of fun writing scripts in visual basic to post cool (to my
          10-year-old brain) macro-effects in AOL chat rooms. In my late teens I
          started learning PHP and JavaScript. I developed and launched an
          AdWords copycat pay-per-click advertising platform when I was 18. It
          didn't work out.
        </p>
        <p>
          After a 10-year detour as a Policy Adviser in the UK Civil Service, I
          joined Passio as a software engineer in 2019. At Passio I learned new
          JavaScript frameworks like React, React Native, and Next. I also got
          very familiar with the popular PHP framework, Laravel.
        </p>
        <p>
          My experience in Civil Service made me pretty good at handling a lot
          of aspects of a startup (legal stuff, policy stuff, process stuff, HR
          stuff etc.) and so they made me COO in 2020. Since then I've also
          picked up experience in digital marketing and business development.
          I'm currently studying an MBA at Edinburgh Business School.
        </p>
        <p>
          In my spare time I like to study mandarin, and I've recently picked up
          photography as a hobby. I love travelling (who doesn't), especially to
          East & South East Asia and North America.
        </p>
        <p>
          I like keeping things varied and interesting (but you worked that out
          already) and take great pride in being a jack-of-all-trades. I used to
          think that was a weakness because of Shiny Object Syndrome, but have
          learned over the years that being a good generalist is actually a
          superpower.
        </p>
        <p>
          I would say I have a passion for 'meaningful' work, but its really
          more of a need. I struggle to get out of bed for work I can't see
          improving lives or making the planet a better place for its
          inhabitants.
        </p>
      </article>
    </div>
  );
}
