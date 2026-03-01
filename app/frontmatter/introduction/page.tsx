import Link from "next/link";
import {
  NavFooter,
  PageLeft,
  PageRight,
  Spread
} from "@/app/components/Spread";

export const metadata = {
  title: "Introduction — They Did Not Make This For You",
  description: "Introduction — They Did Not Make This For You"
};

export default function IntroductionPage() {
  return (
    <Spread className="spread--continuous introduction">
      <PageLeft>
        <div className="page-content">
          <div className="section-title">Introduction</div>

          <div className="body-text">
            <p>
              This book begins from a feeling: that many of the systems we live
              inside were not made for us.
            </p>
          </div>

          <div className="zine-card">
            <div className="label">A Day in the System</div>
            <div className="content">
              <p>
                You wake up and check your phone. An algorithm has already
                decided what you&apos;ll see first — which messages matter,
                which news stories appear, which faces you recognize. You leave
                your apartment and cameras track your movement. Your transit
                card records where you go. Your workplace monitors productivity
                metrics. Your health app suggests you walk more steps. Your
                streaming service recommends what to watch next. Your social feed
                shapes what you believe is happening in the world.
              </p>
            </div>
          </div>

          <div className="body-text">
            <p>
              These are not separate tools. They are a system — an
              interconnected environment that structures how you move, what you
              know, who you connect with, and what you believe is possible.
            </p>
            <p>
              Rather than proposing a single fix or a new platform, this catalog
              lingers with the technologies that already structure daily life —
              the apps, devices, models, and infrastructures that quietly decide
              what is visible, what is recorded, and what is possible.
            </p>
          </div>

          <div className="zine-card zine-card-tilt-left">
            <div className="label">Technology as Place</div>
            <div className="content">
              <p>
                It is written from the perspective of people who move through
                these systems, not from the vantage point of a neutral observer.
                Each entry treats a technology as a place you inhabit, not just a
                tool you use.
              </p>
              <p>
                When we talk about technology as a &quot;place,&quot; we mean it
                shapes your behavior, your relationships, your sense of self.
                A social media platform is not just a website — it&apos;s a
                space where identity is performed, where relationships are
                maintained or broken, where political movements form or dissolve.
                A smart home device is not just a speaker — it&apos;s a presence
                that listens, that learns your patterns, that becomes part of
                your domestic life in ways that feel intimate and sometimes
                unsettling.
              </p>
            </div>
          </div>

          <p className="pull-quote">
            A catalog slows things down. It invites you to look closely, to
            compare, to notice patterns.
          </p>

          <div className="body-text">
            <p>
              This catalog format is deliberate. We are surrounded by systems
              that feel too complex to understand, too fast to question, too
              inevitable to change. Like a field guide to birds or a museum
              catalog of artifacts, it gives you language to name what
              you&apos;re seeing and tools to understand how it works.
            </p>
          </div>
        </div>
      </PageLeft>

      <PageRight>
        <div className="page-content">
          <div className="zine-card">
            <div className="label">Four Questions</div>
            <div className="content">
              <p>
                <strong>Each entry asks:</strong>
              </p>
              <ul className="list">
                <li>• What is this system?</li>
                <li>• Who was it built for?</li>
                <li>• How does it affect people?</li>
                <li>• What would a better version look like?</li>
              </ul>
            </div>
          </div>

          <div className="body-text">
            <p>
              These questions are simple, but they reveal something important:
              every system has a history, a set of assumptions, and a set of
              consequences. When we ask &quot;who was it built for,&quot; we&apos;re
              not just asking about target demographics. We&apos;re asking about
              whose needs were prioritized, whose bodies were considered, whose
              values were encoded into the design.
            </p>
            <p>
              When we ask &quot;how does it affect people,&quot; we&apos;re
              looking beyond the intended use case. We&apos;re asking about the
              second-order effects, the unintended consequences, the ways
              systems reshape relationships and power structures even when they
              claim to be neutral.
            </p>
          </div>

          <div className="zine-card zine-card-tilt-right">
            <div className="label">Three Layers</div>
            <div className="content">
              <p>Across every chapter, the catalog looks at:</p>
              <ul className="list">
                <li>
                  <strong>Personal impact</strong> — how systems shape daily
                  life, identity, and relationships
                </li>
                <li>
                  <strong>Structural logic</strong> — how systems are designed,
                  funded, and maintained
                </li>
                <li>
                  <strong>Emerging futures</strong> — where these technologies
                  are going next
                </li>
              </ul>
            </div>
          </div>

          <div className="body-text">
            <p>
              It draws on feminist systems thinking, which asks who is centered,
              who is excluded, and whose labor is required for a system to
              function at all. This framework recognizes that systems are not
              abstract — they are built by people, funded by institutions,
              maintained by workers, and experienced differently depending on who
              you are.
            </p>
          </div>

          <p className="pull-quote">
            This is not only critique. It is a way of learning how systems work
            so we can imagine better ones.
          </p>

          <div className="zine-card zine-card-tilt-left">
            <div className="label">What Would a Better Version Look Like?</div>
            <div className="content">
              <p>
                Each entry includes a section on what a better version might look
                like — not as a blueprint, but as a provocation. What if a system
                prioritized care over efficiency? What if it centered the most
                marginalized users instead of the most profitable ones? What if
                it was designed to be questioned, to be modified, to be replaced?
              </p>
            </div>
          </div>

          <div className="body-text">
            <p>
              This first edition gathers nineteen entries — enough to live with
              over a semester, to annotate, argue with, and extend. Future
              versions may add new systems, new voices, and new forms of
              evidence. The work is indebted to feminist thinkers, organizers,
              and technologists who treat technology as a lived environment
              rather than a neutral tool, and to editors and archivists such as
              Stewart Brand and Mindy Seu whose catalogs and libraries made
              space for critical, speculative, and collaborative futures.
            </p>
          </div>
        </div>

        <NavFooter
          left={
            <Link href="/frontmatter/table-of-contents">
              ← Previous Table of Contents
            </Link>
          }
          center={
            <>
              <Link href="/">Home</Link> ·{" "}
              <Link href="/frontmatter/table-of-contents" className="contents-link">
                Contents
              </Link>
            </>
          }
          right={
            <Link href="/frontmatter/how-to-read">
              Next → How to Read This Catalog
            </Link>
          }
        />
      </PageRight>
    </Spread>
  );
}
