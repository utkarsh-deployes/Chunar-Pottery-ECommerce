import React from 'react';
import './faqs.css';



const FAQs = () => {
  return (
    <section className="faqs-section">
      <div className="faqs-header">
        <span className="line"></span>
        <h2 className="faqs-title">frequently asked questions</h2>
        <span className="line"></span>
      </div>
      <div className="faqs-content">
        <div className="faq">
          <p className="faq-question">
            <strong>1. What is the delivery time for my order?</strong>
          </p>
          <p className="faq-answer">
            We aim to deliver your order within 7–10 business days for domestic shipments and 10–15 business days for international deliveries. Delivery times may vary depending on your location and the shipping method chosen.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">
            <strong>2. Do you offer international shipping?</strong>
          </p>
          <p className="faq-answer">
            Yes, we ship internationally. Shipping charges and delivery times will depend on the destination. During checkout, you can see the estimated costs and timelines for your order.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">
            <strong>3. Are all your products handmade?</strong>
          </p>
          <p className="faq-answer">
            Yes, all our products are handcrafted by skilled artisans from Chunar, ensuring authenticity and a unique touch in every piece.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">
            <strong>4. How can I track my order?</strong>
          </p>
          <p className="faq-answer">
            Once your order is shipped, we will provide you with a tracking number via email. You can use this number to track your shipment on our logistics partner's website.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">
            <strong>5. Do you accept returns or exchanges?</strong>
          </p>
          <p className="faq-answer">
            Yes, we accept returns and exchanges within 7 days of delivery. The product must be unused, undamaged, and in its original packaging. Please visit our Return Policy page for more details.
          </p>
        </div>
        <div className="faq">
          <p className="faq-question">
            <strong>6. What should I do if my product arrives damaged?</strong>
          </p>
          <p className="faq-answer">
            We take utmost care in packaging, but if your product arrives damaged, please contact us within 48 hours of receiving the order. Share photos of the damaged product, and we will assist you with a replacement or refund.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;