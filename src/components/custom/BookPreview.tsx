import React from "react";

function BookPreview() {
  const items = [
    { id: 1, title: "The Robotic Nervous System (ROS 2)" },
    { id: 2, title: "The Digital Twin (Gazebo & Unity)" },
    { id: 3, title: "The AI-Robot Brain (NVIDIA Isaac™)" },
    { id: 4, title: "Vision-Language-Action (VLA)" },
  ];

  return (
    <div className="container my-16">
      <br />
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Inside the AI-Native Book
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="
              relative
              rounded-xl
              p-6
              bg-gray-900
              border border-gray-700
              text-center
              transition-all duration-300 transform
              hover:-translate-y-2
              hover:shadow-[0_0_20px_#3b82f6,0_0_40px_#3b82f6]
            "
          >
            {/* Number Circle */}
            <div className="w-12 h-12 mx-auto rounded-lg bg-blue-600 text-white flex items-center justify-center text-lg font-bold mb-4">
              {item.id}
            </div>

            {/* Minimal Title */}
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
}

export default BookPreview;
