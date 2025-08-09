import { SectionHeader } from "@/components/ui/section-header";
import { BlogCard } from "@/components/ui/blog-card";
import { blogPost } from "@/lib/constants";

export default function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30 geometric-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Blog"
            subtitle="Tips, insights, and automation guides for small businesses"
          />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <BlogCard
              {...blogPost}
              featured={true}
              onRead={(slug) => window.location.href = `/blog/${slug}`}
            />
            
            {/* Placeholder for future posts */}
            <div className="text-center py-12">
              <div className="glass-effect rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">More Posts Coming Soon</h3>
                <p className="text-muted-foreground">
                  We're working on more helpful content about business automation, 
                  productivity tips, and tool recommendations. Check back soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
