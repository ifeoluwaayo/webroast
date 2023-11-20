const data: any = [
  {
    question: "What is a landing page roast?",
    answer:
      "A landing page roast is a comprehensive analysis of your landing page's performance and usability. It's designed to help you identify any areas that need improvement and provide you with actionable insights to help you boost conversions.",
  },
  {
    question: "Why should I get a roast?",
    answer: `It can help you identify hidden conversion killers that are preventing you from achieving your goals. It can provide you with data-driven insights that will help you make informed decisions about how to improve your landing page. It can help you personalize your optimization efforts to maximize your ROI.`,
  },
  {
    question: "What can I expect from a roast?",
    answer: `When you get a roast, you can expect to receive a comprehensive report that includes: An analysis of your landing page's design, copywriting, and user experience, A list of conversion barriers and hidden opportunities, Personalized recommendations for improving your landing page`,
  },
  {
    question: "How much does a roast cost?",
    answer:
      "The cost of a roast will vary depending on the complexity of your landing page and the level of detail you require. However, we offer a variety of pricing tiers to fit your needs and budget.",
  },
  {
    question: "How long does it take to get a roast?",
    answer:
      "The turnaround time for a roast will vary depending on the complexity of your landing page and the tier chosen. However, we typically deliver roasts within 3 minutes.",
  },
  {
    question: "Can I get a free roast?",
    answer:
      "Unfortunately, as of now we do not offer free roast. We plan to do so later next year. In the mean time, you can use our lowest tier pricing to check if our AI-roasting is best for your company",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="px-5 md:mt-0 gap-5 md:px-8 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      {data.map((data: any, index: number) => {
        return (
          <div key={index}>
            <Card faq={data} />
          </div>
        );
      })}
    </section>
  );
};

export default FAQ;

const Card = ({ faq }: any) => {
  return (
    <div className="flex flex-col gap-2 border border-black h-fit md:h-[300px] justify-center rounded-lg p-5 shadow">
      <h2 className="font-semibold text-lg tracking-tighter">{faq.question}</h2>
      <p className="whitespace-break-spaces tracking-tight">{faq.answer}</p>
    </div>
  );
};
