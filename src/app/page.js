import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-16 overflow-hidden">
      {/* Hero Banner */}
      <section className="bg-yellow-400 text-center py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          ১ লক্ষ ৫০ হাজারের বেশি প্রিমিয়াম রীল বান্ডেল কিনুন!
        </h1>
        <p className="mt-3 text-lg text-gray-700">
          আপনার সোশ্যাল মিডিয়া পেজকে করুন আরও আকর্ষণীয়।
        </p>
        <Link
          href="/cart"
          className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          🛒 অর্ডার করতে চাই
        </Link>
      </section>

      {/* Special Offer Bar */}
      <section className="bg-black text-white text-center py-5 px-4">
        <p className="text-xl md:text-2xl font-semibold animate-pulse">
          🔥 আজকের জন্য বিশেষ অফার! ২০০০ টাকার বান্ডেল মাত্র ১৯৯ টাকা! 🔥
        </p>
        <p className="mt-2 text-md md:text-lg">
          সাথে থাকছে অতিরিক্ত ২৫% ডিসকাউন্ট ইনস্ট্যান্ট!
        </p>
      </section>

      {/* Video Embed */}
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          আমাদের রীল বান্ডেলের একটি ঝলক দেখুন
        </h2>
        <div className="max-w-4xl mx-auto shadow-xl rounded-lg overflow-hidden">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/RAD_VIDEO_ID" // Replace with actual YouTube embed URL
            title="Radiant Reel Bundle Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-8 px-4 bg-blue-600 text-white">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          আপনার স্বপ্নের পেজকে এবার সহজেই মনিটাইজ করুন!
        </h2>
        <p className="mt-3 text-lg opacity-90">
          আমাদের প্রিমিয়াম রীল বান্ডেল আপনার অনলাইন উপস্থিতিকে নতুন মাত্রা
          দিবে।
        </p>
        <Link
          href="/cart"
          className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          🛒 এখনই অর্ডার করুন
        </Link>
      </section>

      {/* Features Bundle */}
      <section className="bg-green-50 text-center py-12 px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
          এই বান্ডেলে আপনার জন্য যা যা থাকছে!
        </h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border border-green-300 bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <p className="text-xl font-semibold text-green-700">
              ১ লক্ষ ৫০ হাজারের প্রিমিয়াম রীল ভিডিও
            </p>
            <p className="mt-2 text-gray-600">
              আপনার প্রয়োজন অনুযায়ী যেকোনো ভিডিও খুঁজে নিন লক্ষাধিক ভিডিওর
              সংগ্রহ থেকে।
            </p>
          </div>
          <div className="border border-green-300 bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <p className="text-xl font-semibold text-green-700">
              ৩৮+ ক্যাটাগরির ভিডিও
            </p>
            <p className="mt-2 text-gray-600">
              বিভিন্ন ধরনের ক্যাটাগরির ভিডিও আপনার বিষয়বস্তুকে সমৃদ্ধ করবে।
            </p>
          </div>
          <div className="border border-green-300 bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <p className="text-xl font-semibold text-green-700">
              ১০০০০+ ভিডিও লাইসেন্সসহ
            </p>
            <p className="mt-2 text-gray-600">
              কপিরাইট সংক্রান্ত চিন্তা ছাড়াই নিশ্চিন্তে ব্যবহার করুন লাইসেন্স
              করা ভিডিওগুলো।
            </p>
          </div>
        </div>
      </section>

      {/* Demo Carousel */}
      <section className="py-12 px-4">
        <h3 className="text-center text-2xl md:text-3xl font-bold border-b-4 border-blue-500 pb-4 mb-8 text-gray-800">
          ৩৮+ ক্যাটাগরির কিছু ভিডিও ডেমো দেখুন!
        </h3>
        <div className="flex overflow-x-auto space-x-6 px-4 pb-4">
          {[
            { name: "Islamic Reel", src: "/videos/islamic-reel.mp4" },
            { name: "Space", src: "/videos/space.mp4" },
            { name: "Nature", src: "/videos/nature.mp4" },
            { name: "AI", src: "/videos/ai.mp4" },
            { name: "Art & Craft", src: "/videos/art-craft.mp4" },
            { name: "Travel", src: "/videos/travel.mp4" }, // Added more for demo variety
            { name: "Food", src: "/videos/food.mp4" },
          ].map((video, idx) => (
            <div
              key={idx}
              className="min-w-[220px] md:min-w-[250px] rounded-lg shadow-lg overflow-hidden bg-white"
            >
              <video
                src={video.src}
                controls
                className="w-full h-auto object-cover"
              ></video>
              <p className="text-center mt-3 mb-2 text-lg font-medium text-gray-700">
                {video.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Repeat CTA */}
      <section className="text-center py-8 px-4">
        <Link
          href="/cart"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          🛒 অর্ডার নিশ্চিত করুন
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            সাধারণ জিজ্ঞাসা (FAQ)
          </h3>
          <div className="space-y-4">
            {[
              {
                q: "কিভাবে পেমেন্ট করতে হবে?",
                a: "আপনি বিকাশ, নগদ, রকেট অথবা ব্যাংক ট্রান্সফারের মাধ্যমে পেমেন্ট করতে পারবেন। বিস্তারিত তথ্য পেমেন্ট পেজে দেওয়া আছে।",
              },
              {
                q: "ভিডিওগুলি কি ডাউনলোড করা যাবে?",
                a: "হ্যাঁ, পেমেন্ট সম্পন্ন করার পর আপনি সম্পূর্ণ বান্ডেলের ভিডিও ডাউনলোড করার জন্য একটি ডাউনলোড লিংক পাবেন।",
              },
              {
                q: "লাইসেন্স কি কি সুবিধা দিবে?",
                a: "লাইসেন্স থাকার কারণে আপনি ভিডিওগুলো যেকোনো সোশ্যাল মিডিয়া প্ল্যাটফর্মে ব্যবহার করতে পারবেন এবং মনিটাইজেশন সংক্রান্ত কোনো সমস্যায় পড়বেন না।",
              },
              {
                q: "আপনার কোন প্রশ্ন থাকলে?",
                a: "আমাদের সাপোর্টে যোগাযোগ করুন। আমরা আপনার সকল প্রশ্নের উত্তর দিতে প্রস্তুত। যোগাযোগের বিস্তারিত তথ্য ওয়েবসাইটে দেওয়া আছে।",
              },
              {
                q: "ডাউনলোড ফাইল কিভাবে খোলা যাবে?",
                a: "ডাউনলোড করা ফাইলগুলো সাধারণত জিপ (ZIP) ফরম্যাটে থাকবে। কম্পিউটার বা মোবাইলে ফাইলটি আনজিপ (Unzip) করার জন্য আপনার একটি আনজিপ সফটওয়্যার বা অ্যাপের প্রয়োজন হবে।",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm cursor-pointer"
              >
                <summary className="text-lg font-semibold text-gray-700">
                  {faq.q}
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Review */}
      <section className="text-center py-12 px-4 bg-blue-50">
        <blockquote className="max-w-xl mx-auto italic text-xl md:text-2xl text-gray-700 leading-relaxed">
          "এই রীল বান্ডেলটি আমার ফেসবুক পেজের রিচ অবিশ্বাস্যভাবে বাড়িয়ে
          দিয়েছে! অসাধারণ কালেকশন এবং ব্যবহারের সুবিধা সত্যিই মুগ্ধ করার মতো।"
        </blockquote>
        <p className="mt-6 text-lg font-semibold text-gray-800">
          - একজন সন্তুষ্ট কন্টেন্ট ক্রিয়েটর
        </p>
      </section>

      {/* Warning Banner */}
      <section className="bg-yellow-300 text-center py-6 px-4">
        <p className="font-semibold text-lg md:text-xl text-gray-800">
          ✅ আমাদের প্রিমিয়াম রীল ভিডিওগুলো ইউনিক এবং লাইসেন্স করা, তাই কপিরাইট
          সমস্যার ঝুঁকি নেই।
        </p>
      </section>

      {/* Final CTA and Billing Upload - Removed this section as it leads to the same billing form below. */}

      {/* Billing Form */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-lg mx-auto bg-white p-8 shadow-2xl rounded-xl border border-gray-200">
          <h4 className="font-bold text-2xl mb-6 text-center text-gray-800">
            অর্ডার সম্পন্ন করুন এবং ডাউনলোড লিংক পান!
          </h4>
          <p className="mb-6 text-center text-gray-600">
            ফর্মটি পূরণ করে আপনার অর্ডারটি নিশ্চিত করুন। পেমেন্টের পর ডাউনলোডের
            বিস্তারিত জানানো হবে।
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                আপনার পুরো নাম *
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                আপনার সক্রিয় ফোন নম্বর *
              </label>
              <input
                type="text"
                id="phone"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ইমেইল (ঐচ্ছিক)
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="border-t pt-6 mt-6">
              <div className="flex justify-between text-lg font-medium text-gray-800">
                <span>Premium Reel Bundle × 1</span>
                <span>৳199.00</span>
              </div>
              <div className="flex justify-between mt-3 text-xl font-bold text-gray-900">
                <span>মোট মূল্য</span>
                <span>৳199.00</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-lg"
            >
              অর্ডার নিশ্চিত করুন ৳199.00
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
