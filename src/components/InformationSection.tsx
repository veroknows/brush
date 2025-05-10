import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I place an order?',
    answer: 'Browse artworks, add items to cart, and send me an email with your order details. I will confirm your order and provide payment instructions.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'I accept PayPal and major credit cards.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping typically takes 3-5 business days within the United States.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, I only ship within the United States.',
  },
];

const InformationSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-b from-candy-purple/5 to-transparent rounded-2xl p-6">
      <h2 className="text-2xl font-semibold mb-4">Order Instructions</h2>
      <div className="flex items-start space-x-2 text-sm text-gray-600 mb-6">
        <span className="text-indigo-600">📧</span>
        <p>
          For sticker orders, please email your artwork to{' '}
          <a href="mailto:brush@veroknows.com" className="text-indigo-600 hover:text-indigo-800">
            brush@veroknows.com
          </a>
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 last:border-0">
            <button
              className="w-full text-left py-3 flex justify-between items-center hover:text-indigo-600"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <span className="font-medium">{faq.question}</span>
              <span className="transform transition-transform">
                {openFaq === index ? '−' : '+'}
              </span>
            </button>
            {openFaq === index && (
              <p className="pb-3 text-gray-600 text-sm">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4">
        <h2 className="text-2xl font-semibold mb-4">Privacy Notice</h2>
        <p className="text-sm text-gray-600">
          Your information is handled securely and only used for order processing.
        </p>
      </div>
    </section>
  );
};

export default InformationSection; 