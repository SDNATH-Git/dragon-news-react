import React from "react";
import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        image_url,
        details,
        rating,
        total_view,
        tags,
        published_date,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md   rounded-xl">
            {/* Card Header */}
            <div className="flex justify-between items-center p-4  bg-base-300 border border-dashed border-gray-400">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p className="text-sm text-gray-500">
                            {format(new Date(author.published_date), "PPP")}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <FaRegBookmark />
                    <FaShareAlt className="text-gray-500 cursor-pointer" />

                </div>
            </div>

            {/* News Content */}
            <div className="p-4 space-y-3">
                <h2 className="text-lg font-bold">{title}</h2>
                <img
                    src={image_url}
                    alt="News Thumbnail"
                    className="rounded-lg w-full h-56 object-cover"
                />
                <p className="text-gray-600 text-sm">
                    {details.length > 200 ? `${details.slice(0, 200)}...` : details}
                    <span className="text-primary font-semibold cursor-pointer ml-1">
                        Read More
                    </span>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span key={i} className="badge badge-outline badge-sm text-xs">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center px-4 py-3 border-t border-dashed border-gray-400 text-sm text-gray-700">
                <div className="flex items-center gap-2 text-orange-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-black font-medium">{rating.number}</span>
                    <span className="badge badge-warning badge-sm ml-1">{rating.badge}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
