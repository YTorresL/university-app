"use client"

import { useState } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, MoreHorizontal, X, Bot } from "lucide-react"
import ReactMarkdown from "react-markdown"

const SUGGESTED_QUESTIONS = [
  "¿Qué servicios ofrecen?",
  "¿Cuáles son sus horarios de atención?",
  "¿Cómo puedo contactarlos?",
]

export function ChatbotModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat()
  const onSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      handleSubmit(e)
    }
  }

  const handleSuggestedQuestion = (question) => {
    handleInputChange({ target: { value: question } })
    setTimeout(() => {
      const form = document.querySelector("form")
      if (form) {
        form.requestSubmit()
      }
    }, 100)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div
          className={`mb-4 transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }`}
        >
          <div className="w-96 h-[450px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
            <div className="bg-blue-600 text-white p-3">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-blue-800">
                    <AvatarFallback className="bg-blue-800 text-white">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">AsistenteBot</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-blue-100">Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-blue-700 h-8 w-8 p-0"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-blue-700 h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <ScrollArea className="flex-1 bg-white">
              <div className="p-4 space-y-4">
                {messages.length === 0 && (
                  <div>
                    <div className="flex items-start gap-3 mb-6">
                      <Avatar className="h-8 w-8 bg-blue-600 flex-shrink-0">
                        <AvatarFallback className="bg-blue-600 text-white">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="bg-gray-50 rounded-2xl rounded-tl-md px-4 py-3">
                          <p className="text-gray-700 mb-4 text-sm">
                            ¿En qué puedo ayudarte hoy?
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {SUGGESTED_QUESTIONS.map((question, index) => (
                              <button
                                key={index}
                                onClick={() =>
                                  handleSuggestedQuestion(question)
                                }
                                className="px-3 py-2 border-2 border-blue-300 text-blue-600 rounded-full text-xs hover:bg-blue-50 transition-colors"
                              >
                                {question}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {messages.map((message) => (
                  <div key={message.id}>
                    {message.role === "assistant" && (
                      <div className="flex items-start gap-3 mb-4">
                        <span className="text-xs text-gray-400 text-center w-full">
                          AsistenteBot
                        </span>
                      </div>
                    )}

                    <div
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "items-start gap-3"
                      } mb-4`}
                    >
                      {message.role === "assistant" && (
                        <Avatar className="h-8 w-8 bg-blue-600 flex-shrink-0">
                          <AvatarFallback className="bg-blue-600 text-white">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}

                      <div
                        className={`max-w-[85%] ${
                          message.role === "user" ? "" : "flex-1"
                        }`}
                      >
                        <div
                          className={`px-4 py-3 rounded-2xl ${
                            message.role === "user"
                              ? "bg-blue-600 text-white rounded-br-md ml-auto inline-block"
                              : "bg-gray-50 text-gray-800 rounded-tl-md"
                          }`}
                        >
                          {message.role === "assistant" ? (
                            <ReactMarkdown
                              components={{
                                p: ({ node, ...props }) => (
                                  <p
                                    className="text-sm whitespace-pre-wrap text-gray-800"
                                    {...props}
                                  />
                                ),
                                strong: ({ node, ...props }) => (
                                  <strong
                                    className="font-semibold text-gray-900"
                                    {...props}
                                  />
                                ),
                                em: ({ node, ...props }) => (
                                  <em
                                    className="italic text-gray-700"
                                    {...props}
                                  />
                                ),
                                ul: ({ node, ...props }) => (
                                  <ul
                                    className="list-disc list-inside pl-4 space-y-1 text-sm text-gray-800"
                                    {...props}
                                  />
                                ),
                                li: ({ node, ...props }) => <li {...props} />,
                                code: ({ node, ...props }) => (
                                  <code
                                    className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono"
                                    {...props}
                                  />
                                ),
                              }}
                            >
                              {message.content}
                            </ReactMarkdown>
                          ) : (
                            <p className="text-sm whitespace-pre-wrap">
                              {message.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-xs text-gray-400 text-center w-full">
                        AsistenteBot
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8 bg-blue-600 flex-shrink-0">
                        <AvatarFallback className="bg-blue-600 text-white">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-gray-50 rounded-2xl rounded-tl-md px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-4 bg-white border-t">
              <form onSubmit={onSubmit} className="relative">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Reply to AsistenteBot..."
                  className="w-full pr-12 border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:border-blue-300"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="sm"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-1 top-1 h-8 w-8 p-0 rounded-full bg-blue-600 hover:bg-blue-700"
                >
                  <span className="text-xs">→</span>
                </Button>
              </form>
              <div className="flex items-center justify-center mt-2 text-xs text-gray-400">
                <span>We're ⚡ by</span>
                <span className="ml-1 text-blue-500 font-medium">
                  StudyRussia
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="lg"
            className="h-16 w-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-600 hover:bg-blue-700"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
    </>
  )
}
