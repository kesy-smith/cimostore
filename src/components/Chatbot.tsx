"use client";

import { useState } from "react";
import { Bot, User, Loader, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { handleInquiry } from "@/app/actions";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const botResponse = await handleInquiry(input);

    const botMessage: Message = { role: "bot", content: botResponse };
    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  };
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg" size="icon">
          <Bot className="h-8 w-8" />
          <span className="sr-only">Open Chatbot</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-headline text-xl">AI Assistant</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-grow my-4 pr-4">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarFallback><Bot /></AvatarFallback>
              </Avatar>
              <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">Hello! How can I help you with our phones today?</p>
              </div>
            </div>
            {messages.map((message, index) => (
              <div key={index} className={cn(
                "flex items-start gap-3",
                message.role === "user" && "justify-end"
              )}>
                {message.role === 'bot' && (
                  <Avatar>
                    <AvatarFallback><Bot /></AvatarFallback>
                  </Avatar>
                )}
                <div className={cn(
                  "p-3 rounded-lg max-w-[80%]",
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                )}>
                  <p className="text-sm">{message.content}</p>
                </div>
                 {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback><User /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                 <Avatar>
                    <AvatarFallback><Bot /></AvatarFallback>
                  </Avatar>
                <div className="bg-muted p-3 rounded-lg">
                  <Loader className="h-5 w-5 animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <SheetFooter>
          <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="Ask about phones, prices..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
