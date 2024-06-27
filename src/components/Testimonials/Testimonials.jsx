const Testimonials = () => {
  return (
    <div className="bg-red-50">
      <h1 className="text-5xl font-bold text-center py-6">Customers Review</h1>
      <div className="flex flex-col md:flex-col lg:flex-row gap-6">
        <div>
          <p className="text-justify p-4">
            Absolutely loved my experience with Rana Tourism Economics! The
            website provided insightful analyses and data-driven perspectives on
            various tourism trends and their economic implications. It`s rare to
            find such a comprehensive resource that combines both tourism and
            economics seamlessly. Highly recommend for anyone interested in
            understanding the intricate dynamics of the tourism industry.
          </p>
          <p className="pr-16 text-right mb-6">
            <small>Sarah Ali from London</small>
          </p>
        </div>
        <div>
          <p className="text-justify p-4">
            Rana Tourism Economics exceeded my expectations! As someone studying
            tourism management, I found the website incredibly valuable for my
            research and studies. The articles were well-written, thoroughly
            researched, and provided a fresh perspective on how economics
            intertwines with the tourism sector. Kudos to the team for creating
            such a fantastic platform
          </p>
          <p className="pr-16 text-right mb-6">
            <small>Juan from Madrid</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
