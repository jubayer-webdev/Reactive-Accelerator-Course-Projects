const LatestBlog = () => {
    return (
        <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                    Latest blog
                </h4>
                <div className="flex flex-col gap-8">
                    <a
                        href="blog-details.html"
                        className="group flex items-center gap-[22px]"
                    >
                        <div className="overflow-hidden rounded">
                            <img
                                src="./assets/images/blog/blog-footer-01.jpg"
                                alt="blog"
                            />
                        </div>
                        <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                            I think really important to design with...
                        </span>
                    </a>
                    <a
                        href="blog-details.html"
                        className="group flex items-center gap-[22px]"
                    >
                        <div className="overflow-hidden rounded">
                            <img
                                src="./assets/images/blog/blog-footer-02.jpg"
                                alt="blog"
                            />
                        </div>
                        <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                            Recognizing the need is the primary...
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;
