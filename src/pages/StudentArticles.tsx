import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, Plus, BookOpen, Heart, MessageCircle, Send, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const articles = [
  {
    id: 1,
    title: "My Journey Learning React Hooks",
    content: "After weeks of struggling with class components, I finally understood the power of hooks...",
    author: "Alex Johnson",
    authorInitials: "AJ",
    date: "Dec 1, 2025",
    likes: 24,
    comments: [
      { id: 1, author: "Sarah M.", text: "Great insights! Keep learning!", date: "Dec 2, 2025" },
      { id: 2, author: "John D.", text: "This helped me understand hooks better too.", date: "Dec 2, 2025" },
    ],
    category: "React",
    isOwn: true,
  },
  {
    id: 2,
    title: "Best Practices for TypeScript Beginners",
    content: "TypeScript can be overwhelming at first. Here are some tips that helped me get started...",
    author: "Emily Chen",
    authorInitials: "EC",
    date: "Nov 28, 2025",
    likes: 45,
    comments: [
      { id: 1, author: "Mike B.", text: "Very helpful tips!", date: "Nov 29, 2025" },
    ],
    category: "TypeScript",
    isOwn: false,
  },
  {
    id: 3,
    title: "Understanding CSS Grid vs Flexbox",
    content: "When should you use Grid and when should you use Flexbox? Here's my take on it...",
    author: "Michael Brown",
    authorInitials: "MB",
    date: "Nov 25, 2025",
    likes: 67,
    comments: [],
    category: "CSS",
    isOwn: false,
  },
];

const StudentArticles = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newArticle, setNewArticle] = useState({ title: "", content: "", category: "" });
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
  const [newComment, setNewComment] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "my" | "popular">("all");

  const filteredArticles = articles.filter((article) => {
    if (activeFilter === "my") return article.isOwn;
    if (activeFilter === "popular") return article.likes >= 40;
    return true;
  });

  const handlePost = () => {
    if (newArticle.title && newArticle.content) {
      toast({
        title: "Article posted!",
        description: "Your article has been published successfully.",
      });
      setNewArticle({ title: "", content: "", category: "" });
      setIsDialogOpen(false);
    }
  };

  const handleComment = () => {
    if (newComment.trim()) {
      toast({
        title: "Comment added",
        description: "Your comment has been posted.",
      });
      setNewComment("");
    }
  };

  const handleLike = () => {
    toast({
      title: "Liked!",
      description: "You liked this article.",
    });
  };

  return (
    <DashboardLayout userType="student" userName="Alex Johnson">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">Articles</h1>
            <p className="text-muted-foreground">Share your knowledge and learn from others</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" />
                Write Article
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Write a New Article</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Input
                    placeholder="Article title..."
                    value={newArticle.title}
                    onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Category (e.g., React, TypeScript)"
                    value={newArticle.category}
                    onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
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
                  <Button onClick={handlePost} className="gradient-primary text-primary-foreground">
                    Publish
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
              variant={activeFilter === "my" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("my")}
            >
              My Articles
            </Button>
            <Button
              variant={activeFilter === "popular" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("popular")}
            >
              Popular
            </Button>
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {filteredArticles.length === 0 ? (
            <div className="bg-card rounded-xl p-8 shadow-card text-center">
              <p className="text-muted-foreground">No articles found.</p>
            </div>
          ) : filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-soft transition-all"
            >
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" />
                  <AvatarFallback className="gradient-primary text-primary-foreground text-sm">
                    {article.authorInitials}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{article.author}</span>
                    {article.isOwn && (
                      <Badge variant="outline" className="text-xs">You</Badge>
                    )}
                    <span className="text-muted-foreground text-sm">•</span>
                    <span className="text-muted-foreground text-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>

                  <Badge variant="secondary" className="mb-2">{article.category}</Badge>

                  <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{article.content}</p>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleLike}
                      className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{article.likes}</span>
                    </button>
                    <button
                      onClick={() => setSelectedArticle(selectedArticle?.id === article.id ? null : article)}
                      className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{article.comments.length}</span>
                    </button>
                  </div>

                  {/* Comments Section */}
                  {selectedArticle?.id === article.id && (
                    <div className="mt-4 pt-4 border-t border-border space-y-4">
                      {article.comments.map((comment) => (
                        <div key={comment.id} className="flex gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs bg-muted">
                              {comment.author.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium">{comment.author}</span>
                              <span className="text-xs text-muted-foreground">{comment.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{comment.text}</p>
                          </div>
                        </div>
                      ))}

                      {/* Add Comment */}
                      <div className="flex gap-2 mt-3">
                        <Input
                          placeholder="Write a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="flex-1"
                        />
                        <Button size="icon" onClick={handleComment} className="gradient-primary">
                          <Send className="w-4 h-4 text-primary-foreground" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentArticles;
