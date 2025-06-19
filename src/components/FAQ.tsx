import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FAQ = () => {
  const faqData = [
  {
    question: "What is Labubu?",
    answer: "Labubu is an original IP character created by Hong Kong artist Kasing Lung, now under Pop Mart. Labubu is known for its iconic fangs, mischievous expression, and ever-changing designs. It's a charismatic little elf character that has quickly become a favorite among global toy collectors since its launch in 2019."
  },
  {
    question: "What different series does Labubu have?",
    answer: "Labubu offers a rich variety of series, including: Classic Design Series (showcasing Labubu's original charm), Life Series (Labubu in everyday life scenarios), Sports Series (various sports-themed designs), and Special Limited Series (holiday editions, collaboration pieces, and other special versions). Each series has its unique design concept and collectible value."
  },
  {
    question: "How to identify authentic Labubu products?",
    answer: "Authentic Labubu products have the following characteristics: 1) Official Pop Mart authorization marks; 2) Exquisite craftsmanship and materials; 3) Clear printing and painting; 4) Complete packaging and instruction manuals; 5) Verifiable through official Pop Mart channels. We recommend purchasing through Pop Mart official stores, authorized retailers, or the official app to avoid products of unknown origin."
  },
  {
    question: "What is the collectible value of Labubu?",
    answer: "As a popular IP, Labubu has certain collectible value. Factors affecting collectible value include: 1) Release quantity (limited editions are usually more valuable); 2) Design uniqueness; 3) Market popularity; 4) Condition; 5) Whether it's a first release or special edition. We recommend collectors follow official announcements, collect rationally, and enjoy the pleasure that the collecting process brings."
  },
  {
    question: "Where can I buy authentic Labubu products?",
    answer: "Authentic Labubu can be purchased through the following channels: 1) Pop Mart official offline stores; 2) Pop Mart official website and app; 3) Authorized e-commerce platforms (official flagship stores on Tmall, JD, etc.); 4) Authorized retailers and toy stores; 5) Pop Mart vending machines. Please verify the official authorization credentials of the sales channel before purchasing."
  },
  {
    question: "How to maintain Labubu products?",
    answer: "To keep your Labubu products in optimal condition: 1) Avoid direct sunlight to prevent fading; 2) Clean regularly with a soft cloth; 3) Avoid contact with chemicals; 4) Keep in a dry environment to prevent moisture and mold; 5) Handle with care to avoid collision damage; 6) Keep original packaging boxes for value preservation and protection. Proper maintenance can keep your Labubu collection charming for a long time."
  }];


  return (
    <section id="faq" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white" data-id="i9muvfrba" data-path="src/components/FAQ.tsx">
      <div className="container mx-auto max-w-4xl" data-id="5qszg6xgr" data-path="src/components/FAQ.tsx">
        <Card className="shadow-lg border-0" data-id="yhhqlhts3" data-path="src/components/FAQ.tsx">
          <CardHeader className="text-center pb-8" data-id="7116ulonc" data-path="src/components/FAQ.tsx">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4" data-id="fb86oc6ag" data-path="src/components/FAQ.tsx">
              Frequently Asked Questions
            </CardTitle>
            <p className="text-gray-600 text-lg" data-id="25692k6a6" data-path="src/components/FAQ.tsx">
              Everything you want to know about Labubu
            </p>
          </CardHeader>
          
          <CardContent data-id="0iek6eb02" data-path="src/components/FAQ.tsx">
            <Accordion type="single" collapsible className="w-full space-y-4" data-id="ocuvurb5m" data-path="src/components/FAQ.tsx">
              {faqData.map((faq, index) =>
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-4 hover:shadow-md transition-all duration-300" data-id="oc9zvs019" data-path="src/components/FAQ.tsx">

                  <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-pink-600 py-4" data-id="t270m3ybe" data-path="src/components/FAQ.tsx">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 leading-relaxed" data-id="frjvmerg3" data-path="src/components/FAQ.tsx">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>);

};

export default FAQ;