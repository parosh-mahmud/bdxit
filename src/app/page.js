import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="bg-yellow-300 text-center py-6">
        <h1 className="text-xl font-bold">
          ১ লক্ষ ৫০ হাজারের বেশি প্রিমিয়াম রীল বান্ডেল
        </h1>
        <Link
          href="/cart"
          className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          🛒 অর্ডার করতে চাই
        </Link>
      </section>

      {/* Special Offer Bar */}
      <section className="bg-black text-white text-center py-4">
        <p className="text-lg">
          আজকের জন্য বিশেষ অফার ২০০০ টাকার বান্ডেল মাত্র ১৯৯ টাকা! সাথে থাকছে
          %২৫ ডিস্কাউন্ট!!
        </p>
      </section>

      {/* Video Embed */}
      <section className="text-center py-8">
        <div className="max-w-3xl mx-auto">
          <iframe
            className="w-full aspect-video rounded"
            src="https://www.youtube.com/embed/RAD_VIDEO_ID"
            title="Radiant Reel Bundle"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-4">
        <h2 className="text-2xl font-bold">
          আপনার স্বপ্নের পেইজ এবার মনিটাইজ করবেন!
        </h2>
        <Link
          href="/cart"
          className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          🛒 অর্ডার করতে চাই
        </Link>
      </section>

      {/* Features Bundle */}
      <section className="bg-green-100 text-center py-8">
        <h3 className="text-xl font-semibold">এই বান্ডেলে যা যা পাবেন!</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="border border-dashed p-4 rounded">
            <p>১ লক্ষ ৫০ হাজারের প্রিমিয়াম রীল ভিডিও</p>
          </div>
          <div className="border border-dashed p-4 rounded">
            <p>৩৮+ ক্যাটাগরির ভিডিও</p>
          </div>
          <div className="border border-dashed p-4 rounded">
            <p>১০০০০+ সব ক্যাটাগরির ভিডিও লাইসেন্সসহ</p>
          </div>
        </div>
      </section>

      {/* Demo Carousel */}
      <section className="py-8">
        <h3 className="text-center text-lg font-semibold border border-blue-300 py-2 mb-6">
          ৩৮+ ক্যাটাগরির মধ্যে কিছু ভিডিও ডেমো দেখুন!
        </h3>
        <div className="flex overflow-x-auto space-x-4 px-4">
          {["Islamic Reel", "Space", "Nature", "AI", "Art & Craft"].map(
            (cat, idx) => (
              <div key={idx} className="min-w-[200px]">
                <video
                  src={`/videos/${cat.toLowerCase().replace(/ & /g, "-")}.mp4`}
                  controls
                  className="rounded-lg w-full h-auto"
                ></video>
                <p className="text-center mt-2">{cat}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Repeat CTA */}
      <section className="text-center py-8">
        <Link
          href="/cart"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          🛒 অর্ডার করতে চাই
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-8">
        <div className="max-w-xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">
            অবশ্যই জেনে নিন সাধারণ প্রশ্নের উত্তর (FAQ)
          </h3>
          <div className="space-y-2">
            {[
              "কিভাবে পেমেন্ট করতে হবে?",
              "ভিডিওগুলি কি ডাউনলোড করা যাবে?",
              "লাইসেন্স কি কি সুবিধা দিবে?",
              "আপনার কোন প্রশ্ন থাকলে?",
              "ডাউনলোড ফাইল কিভাবে খোলা যাবে?",
            ].map((faq, idx) => (
              <details key={idx} className="border rounded-lg p-4">
                <summary className="cursor-pointer">{faq}</summary>
                <p className="mt-2 text-gray-600">
                  এই প্রশ্নের উত্তর এখানে লিখুন।
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Review */}
      <section className="text-center py-8">
        <blockquote className="max-w-md mx-auto italic">
          &quot;মহাবিলস ইনসাইটস!&quot;
        </blockquote>
        <p className="mt-2">&quot;আপনার ব্যবসা দ্রুত বৃদ্ধি করবে।&quot;</p>
      </section>

      {/* Warning Banner */}
      <section className="bg-yellow-200 text-center py-6">
        <p className="font-semibold px-4">
          কেন আমাদের রীল ভিডিওগুলো কপি করা হবে না?
        </p>
      </section>

      {/* Final CTA and Billing Upload */}
      <section className="text-center py-8">
        <h3 className="text-lg font-semibold">
          বিল আপলোড করে আপনি হতে পারবেন সফল কন্টেন্ট ক্রিয়েটর!
        </h3>
        <p className="mt-2">মূল্য: ২০০০ টাকার বান্ডেল ১৯৯ টাকা!</p>
        <Link
          href="/checkout"
          className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          বিল আপলোড করতে চাই
        </Link>
      </section>

      {/* Billing Form */}
      <section className="bg-white py-8">
        <div className="max-w-md mx-auto bg-white p-6 shadow rounded">
          <h4 className="font-semibold mb-4">
            পরবর্তীতে পেয়ে ডাউনলোড লিংক পাবেন, লিংক ক্লিক করে ডাউনলোড করুন!
          </h4>
          <form className="space-y-4">
            <div>
              <label className="block text-sm">আপনার নাম *</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm">আপনার ফোন নম্বর *</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm">ইমেইল (ইচ্ছা অনুযায়ী)</label>
              <input type="email" className="w-full border rounded p-2" />
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span>Premium Reel Bundle × 1</span>
                <span>৳199.00</span>
              </div>
              <div className="flex justify-between mt-2 font-bold">
                <span>Total</span>
                <span>৳199.00</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              PLACE ORDER ৳199.00
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
