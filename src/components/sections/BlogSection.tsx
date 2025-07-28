import blog1 from "@/assets/blog/natural-light.jpg";
import blog2 from "@/assets/blog/wedding-tips.jpg";
import blog3 from "@/assets/blog/family-guide.jpg";

const posts = [
  {
    image: blog1,
    title: "10 порад для ідеальної фотосесії",
    description:
      "Дізнайтеся, як підготуватися до фотосесії, щоб отримати найкращі результати.",
    link: "/blog/post-1.html",
  },
  {
    image: blog2,
    title: "Весільна зйомка: що варто знати?",
    description:
      "Практичні поради для молодят, які планують зйомку найважливішого дня.",
    link: "/blog/post-2.html",
  },
  {
    image: blog3,
    title: "Сімейні фото: як зробити їх незабутніми",
    description:
      "Кращі ідеї та поради для створення теплих і душевних сімейних фотографій.",
    link: "/blog/post-3.html",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Блог
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Читати далі →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
