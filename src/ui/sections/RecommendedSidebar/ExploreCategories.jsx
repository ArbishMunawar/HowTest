const ExploreCategories = () => (
  <div className="bg-white  rounded-lg p-4 mb-6 ">
    <h3 className="font-[500] text-[16px] text-[#4F4F4F] mb-3">Explore Categories</h3>
    <div className="flex flex-wrap gap-2">
      {[
        "Blogs",
        "Courses",
        "CSS Essays",
        "PMS Essays",
        "PMS Ministerial Essays",
        "Civil Judge Essays",
        "CSS Solved Papers",
      ].map((cat) => (
        <span
          key={cat}
          className="bg-gray-100 text-[12px] px-3 py-1 rounded-full text-[#4F4F4F]"
        >
          {cat}
        </span>
      ))}
    </div>
  </div>
);

export default ExploreCategories