import React from 'react'

function Blogs() {

  const blogsHeadings = [
    {
      title: "A2 Ghee: Liquid Gold for Your Health",
      publishedDate: "April 5, 2024",
      imageUrl:
        "https://www.rosierfoods.com/cdn/shop/articles/WhatsApp_Image_2023-07-09_at_12.18.57_PM.jpg?v=1712256951",
    },
    {
      title: "Keeping Your Heart Healthy: Tips for a Stronger, Healthier Heart",
      publishedDate: "April 5, 2024",
      imageUrl:
        "https://www.rosierfoods.com/cdn/shop/articles/Untitled_design_38.png?v=1712256458",
    },
    {
      title: "Raw Honey for Immunity: Health Benefits",
      publishedDate: "April 5, 2024",
      imageUrl:
        "https://www.rosierfoods.com/cdn/shop/articles/close-up-honeycomb-with-beeswax.jpg?v=1712255863&width=1500",
    },
    {
      title: "Mindful Munching: The Art of Eating with Awareness and Intention",
      publishedDate: "April 4, 2024",
      imageUrl:
        "https://www.rosierfoods.com/cdn/shop/articles/Untitled_design-26.png?v=1749659476",
    },
    {
      title:
        "Summer Approaches: Strategies to Adapt to the Weather Shift and Maintain Summer Wellness",
      publishedDate: "April 4, 2024",
      imageUrl:
        "https://www.rosierfoods.com/cdn/shop/articles/pexels-A_nil-1391249.jpg?v=1712255095&width=1500",
    },
    {
      title: "All You Need to Know About Going Organic",
      publishedDate: "April 4, 2024",
      imageUrl:
        "https://www.rosierfoods.com/cdn/shop/articles/woman-spreading-soft-cheese-toasted-bread.jpg?v=1712253591&width=1500",
    },
  ];


  return (
    <div >
      <div className="flex items-center justify-center w-full h-100 text-7xl font-bold bg-black text-white">
        <h1>Our Blogs</h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:px-15 lg:px-30 gap-8 bg-black">
        {blogsHeadings.map((blog, index) => (
          <div
            key={index}
            className="w-full h-110 bg-blue-200 rounded-2xl overflow-hidden"
          >
            <div className="w-full h-80 overflow-hidden">
              <img
                className=" w-full h-full object-cover"
                src={`${blog.imageUrl}`}
                alt=""
              />
            </div>
            <div className="p-5">
              <h1 className=" mb-2">
                {blog.title}
              </h1>
              <p className="text-sm text-gray-500">{blog.publishedDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
