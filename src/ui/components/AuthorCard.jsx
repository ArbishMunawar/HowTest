import { ArrowRight } from "lucide-react";
const AuthorCard = ({ author }) => {
  return (
    <div className="w-full rounded-xl border border-gray-300 text-center shadow-sm ">
        <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE] p-6 rounded-tr-xl rounded-tl-xl">
      <img
        src={author.image}
        alt={author.name}
        className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-center gap-1">
        {author.name}
      </h3>
      <p className="text-gray-600 text-sm">{author.bio}</p>
      </div>

      <div className="flex justify-center gap-8 text-sm font-medium border-t border-t-gray-300 pt-4  ">
        <div>
          <p className="text-gray-900 font-bold text-xl">{author.articlesPublished}</p>
          <span className="text-gray-500 text-md">Articles Published</span>
        </div>
        <div>
          <p className="text-gray-900 font-bold text-xl">{author.totalReaders}</p>
          <span className="text-gray-500 text-md">Total Readers</span>
        </div>
      </div>
      <div className="flex justify-center ">
      <button className="mt-4  hover:underline font-normal text-lg pb-4 flex items-center justify-center gap-3">
        Visit Author 
        <ArrowRight className="w-5 h-5" />
      </button>
      </div>
    </div>
  );
};

export default AuthorCard;
