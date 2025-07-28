import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: '10 порад для ідеального весільного фото',
    description: 'Як підготуватись до весільної зйомки та отримати незабутні фото.',
    image: '/blog/wedding-tips.jpg',
    slug: 'post-1',
  },
  {
    title: 'Сімейна фотосесія: як зробити її легкою та приємною',
    description: 'Поради для комфортної зйомки з дітьми та батьками.',
    image: '/blog/family-guide.jpg',
    slug: 'post-2',
  },
  {
    title: 'Працюємо з природним світлом',
    description: 'Чому природне освітлення — ваш найкращий друг у портретній зйомці.',
    image: '/blog/natural-light.jpg',
    slug: 'post-3',
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-white dark:bg-gray-950" id="blog">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Блог</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link to={`/blog/${post.slug}`} key={index} className="group block rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
