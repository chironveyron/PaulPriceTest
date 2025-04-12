import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Accomplished Alarming Rail</title>
        <meta property="og:title" content="Accomplished Alarming Rail" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Learn more about the Pauls Game and how it works.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Sign Up</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">#invest</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">#home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">About</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Invest</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">#about</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Welcome to the Pauls Game, where you can invest in Pauls and
              compete to earn the most!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Buy and sell Pauls in the stock market to grow your wealth.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">#leaderboard</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Leaderboard</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Check out who&apos;s leading the game and see if you can climb to
              the top.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Log In</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Sign Up Now</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Welcome to the Market of Pauls!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              All rules of the Peninsula and Alien Geneva Convention must be
              followed.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Compete with your friends to see who can make the most Pauls by
              trading wisely.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Compete with Friends</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Keep track of the number of Pauls you have invested and the amount
              you have pocketed.
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Invest in Pauls</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Buy and sell Pauls in the PaulPrice stock market to try and make a
              profit.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Track Your Investments</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Join the Pauls Stock Market Game Today!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Start investing in Pauls and compete with your friends to see who
              can make the most profit!
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Sign Up Now</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Compete against friends to see who can make the most Pauls and
              emerge as the winner.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Invest in Pauls by buying and selling them in the PaulPrice stock
              market.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Track Investments</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Buy and Sell Pauls</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Keep track of the number of Pauls you have invested and the amount
              you have pocketed.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Compete to Win</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$49/mo</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Get started</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Get started</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get started</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Feature text goes here</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Feature text goes here</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Feature text goes here</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$29/mo</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">or $200 yearly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$20/mo</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Create a username and password to register for the game and start
              trading Pauls in the stock market.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Monitor the number of Pauls you own, the current PaulPrice, and
              the amount of profit you have made from your trades.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Buy and sell Pauls</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Use your virtual currency to purchase Pauls when the price is low
              and sell them when the price is high to make a profit.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Sign up for an account</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Track your investments</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Compete against your friends to see who can accumulate the most
              Pauls and emerge as the top investor in the game.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Compete to win</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Gamer</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">Game Developer</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">Sarah Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Emily Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              I love the design of the game interface. It&apos;s user-friendly
              and visually appealing. Count me in for the next round of Pauls
              trading!
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">John Doe</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Financial Analyst</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Michael Brown</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              I had a blast playing with Pauls in this game! The fluctuating
              prices kept me on my toes, and I ended up making a huge profit.
              Can&apos;t wait to play again!
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Graphic Designer</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              Such a fun concept! Investing in Pauls was addictive, and the
              competition with my friends made it even more exciting.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              As a financial analyst, I appreciate the realism in the stock
              market equation for Pauls. It&apos;s a great way to learn and have
              fun at the same time.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              The occasional crashes and spikes in Pauls&apos; prices added an
              element of unpredictability that made the game even more engaging.
              Highly recommended!
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Locations</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Cluj - Napoca</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">Winners Circle</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">FAQs</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">About Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms and Conditions</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Investment Tips</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
