import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, Plus, BookOpen, Eye, Edit, Trash2, Clock, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const articles = [
  {
    id: 1,
    title: "Understanding React Hooks: A Comprehensive Guide",
    excerpt: "Learn about useState, useEffect, and custom hooks with practical examples.",
    status: "published",
    views: 1234,
    students: 89,
    createdAt: "Nov 15, 2025",
    category: "React",
    author: "Dr. Sarah Miller",
    authorType: "teacher",
  },
  {
    id: 2,
    title: "TypeScript Best Practices for 2025",
    excerpt: "Explore advanced TypeScript patterns and type-safe coding techniques.",
    status: "published",
    views: 987,
    students: 67,
    createdAt: "Nov 20, 2025",
    category: "TypeScript",
    author: "Dr. Sarah Miller",
    authorType: "teacher",
  },
  {
    id: 3,
    title: "Building RESTful APIs with Node.js",
    excerpt: "A step-by-step guide to creating scalable backend services.",
    status: "draft",
    views: 0,
    students: 0,
    createdAt: "Dec 1, 2025",
    category: "Node.js",
    author: "Dr. Sarah Miller",
    authorType: "teacher",
  },
  {
    id: 4,
    title: "Database Design Fundamentals",
    excerpt: "Master the art of designing efficient and normalized databases.",
    status: "published",
    views: 756,
    students: 45,
    createdAt: "Oct 28, 2025",
    category: "Database",
    author: "Dr. Sarah Miller",
    authorType: "teacher",
  },
  {
    id: 5,
    title: "My Journey Learning React",
    excerpt: "A student's perspective on mastering React fundamentals.",
    status: "published",
    views: 342,
    students: 28,
    createdAt: "Nov 25, 2025",
    category: "React",
    author: "Emily Davis",
    authorType: "student",
  },
  {
    id: 6,
    title: "Tips for Debugging JavaScript",
    excerpt: "Common debugging techniques and tools every developer should know.",
    status: "published",
    views: 521,
    students: 35,
    createdAt: "Nov 28, 2025",
    category: "JavaScript",
    author: "James Wilson",
    authorType: "student",
  },
  {
    id: 7,
    title: "CSS Grid vs Flexbox: When to Use What",
    excerpt: "Understanding the differences and best use cases for each layout method.",
    status: "draft",
    views: 0,
    students: 0,
    createdAt: "Dec 2, 2025",
    category: "CSS",
    author: "Dr. Sarah Miller",
    authorType: "teacher",
  },
  {
    id: 8,
    title: "Getting Started with Git",
    excerpt: "A beginner-friendly guide to version control with Git.",
    status: "published",
    views: 678,
    students: 52,
    createdAt: "Nov 10, 2025",
    category: "DevOps",
    author: "Sophie Brown",
    authorType: "student",
  },
];

const Articles = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newArticle, setNewArticle] = useState({ title: "", content: "", category: "" });
  const [activeFilter, setActiveFilter] = useState<"all" | "published" | "draft">("all");

  const filteredArticles = articles.filter((article) => {
    if (activeFilter === "published") return article.status === "published";
    if (activeFilter === "draft") return article.status === "draft";
    return true;
  });

  const handleCreateArticle = () => {
    if (newArticle.title && newArticle.content) {
      toast({
        title: "Article Created!",
        description: `"${newArticle.title}" has been saved as a draft.`,
      });
      setNewArticle({ title: "", content: "", category: "" });
      setIsDialogOpen(false);
    }
  };

  return (
    <DashboardLayout userType="teacher" userName="Dr. Sarah Miller">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">Articles</h1>
            <p className="text-muted-foreground">Create and manage educational articles for your students</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" />
                New Article
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Create New Article</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="articleTitle">Title</Label>
                  <Input
                    id="articleTitle"
                    placeholder="Enter article title..."
                    value={newArticle.title}
                    onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="articleCategory">Category</Label>
                  <Input
                    id="articleCategory"
                    placeholder="e.g., React, TypeScript, Node.js"
                    value={newArticle.category}
                    onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="articleContent">Content</Label>
                  <Textarea
                    id="articleContent"
                    placeholder="Write your article content..."
                    rows={6}
                    value={newArticle.content}
                    onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreateArticle} className="gradient-primary text-primary-foreground">
                    Create Article
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("all")}
            >
              All
            </Button>
            <Button
              variant={activeFilter === "published" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("published")}
            >
              Published
            </Button>
            <Button
              variant={activeFilter === "draft" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("draft")}
            >
              Drafts
            </Button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredArticles.length === 0 ? (
            <div className="col-span-2 bg-card rounded-xl p-8 shadow-card text-center">
              <p className="text-muted-foreground">No articles found.</p>
            </div>
          ) : filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-soft transition-shadow group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Badge
                    variant={article.status === "published" ? "default" : "outline"}
                    className={article.status === "published" ? "gradient-primary text-primary-foreground" : ""}
                  >
                    {article.status}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {article.authorType === "student" ? "Student" : "Teacher"}
                  </Badge>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg gradient-primary shrink-0">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                  <p className="text-xs text-muted-foreground mt-1">by {article.author}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {article.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {article.students}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {article.createdAt}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card rounded-xl p-4 shadow-card text-center">
            <p className="text-2xl font-bold text-primary">{articles.length}</p>
            <p className="text-sm text-muted-foreground">Total Articles</p>
          </div>
          <div className="bg-card rounded-xl p-4 shadow-card text-center">
            <p className="text-2xl font-bold text-primary">
              {articles.reduce((sum, a) => sum + a.views, 0).toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">Total Views</p>
          </div>
          <div className="bg-card rounded-xl p-4 shadow-card text-center">
            <p className="text-2xl font-bold text-primary">
              {articles.reduce((sum, a) => sum + a.students, 0)}
            </p>
            <p className="text-sm text-muted-foreground">Students Reached</p>
          </div>
          <div className="bg-card rounded-xl p-4 shadow-card text-center">
            <p className="text-2xl font-bold text-primary">
              {articles.filter(a => a.status === "published").length}
            </p>
            <p className="text-sm text-muted-foreground">Published</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Articles;
