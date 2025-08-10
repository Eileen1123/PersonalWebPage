"use client"

import { ArrowLeft, BookOpen, Lightbulb, Star, TrendingUp, Zap, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"

export default function InsightsPage() {
  const [selectedInsight, setSelectedInsight] = useState<any>(null)

  const insights = [
    {
      id: "ai-tech-concepts",
      title: "AI技术概念与知识点",
      excerpt: "系统梳理人工智能领域的核心概念、技术原理和关键知识点，为AI产品设计和应用提供理论基础。涵盖机器学习、深度学习、自然语言处理等前沿技术，帮助构建完整的AI知识体系。",
      fullContent: "系统梳理人工智能领域的核心概念、技术原理和关键知识点，为AI产品设计和应用提供理论基础。涵盖机器学习、深度学习、自然语言处理等前沿技术，帮助构建完整的AI知识体系。",
      category: "AI技术基础",
      readTime: "12分钟",
      date: "2025年7月",
      tags: ["AI技术", "机器学习", "深度学习", "技术概念", "知识体系"],
      icon: <Lightbulb className="w-5 h-5" />,
      hasImage: true,
      imagePath: "/AI技术概念与知识点.png"
    },
    {
      id: "mita-ai-analysis",
      title: "AI产品体验分析报告：秘塔-今天学点啥",
      excerpt: "通过深度体验和系统分析，探索秘塔AI产品在用户体验设计上的创新实践。从功能架构到交互细节，从用户引导到价值传递，全面剖析AI产品如何平衡技术能力与用户需求，为AI产品设计提供实践参考。",
      fullContent: "通过深度体验和系统分析，探索秘塔AI产品在用户体验设计上的创新实践。从功能架构到交互细节，从用户引导到价值传递，全面剖析AI产品如何平衡技术能力与用户需求，为AI产品设计提供实践参考。\n\n秘塔AI作为国内领先的AI学习平台，其产品设计体现了对用户学习需求的深度理解。本报告将从以下几个维度进行分析：\n\n1. 产品定位与价值主张\n2. 功能架构与信息组织\n3. 交互设计与用户体验\n4. 内容策略与个性化推荐\n5. 技术实现与性能表现\n\n通过深入的产品分析，我们希望能够为AI产品设计者提供有价值的参考和启发。",
      category: "AI产品分析",
      readTime: "15分钟",
      date: "2025年7月",
      tags: ["AI产品", "用户体验", "产品分析", "秘塔AI", "深度洞察"],
      icon: <FileText className="w-5 h-5" />,
      hasPDF: true,
      pdfPath: "/AI产品体验分析报告：秘塔-今天学点啥.pdf"
    },
    {
      id: "douyin-product-principles",
      title: "我的产品原则学习笔记-抖音",
      excerpt: "深入分析抖音产品设计背后的核心原则和设计理念，从用户心理到产品架构，从内容分发到商业变现，系统梳理短视频平台的产品设计智慧。通过实际案例和深度思考，提炼出可复用的产品设计方法论。",
      fullContent: "深入分析抖音产品设计背后的核心原则和设计理念，从用户心理到产品架构，从内容分发到商业变现，系统梳理短视频平台的产品设计智慧。\n\n本学习笔记基于对抖音产品的深度体验和思考，从以下几个维度进行分析：\n\n1. 产品定位与用户价值\n   - 短视频娱乐的重新定义\n   - 用户时间碎片化的解决方案\n   - 个性化推荐的精准匹配\n\n2. 内容生态与分发机制\n   - 算法驱动的智能推荐\n   - 创作者激励机制设计\n   - 内容质量与用户粘性的平衡\n\n3. 用户体验与交互设计\n   - 沉浸式浏览体验\n   - 简单直观的操作逻辑\n   - 情感化设计元素的应用\n\n4. 商业变现与生态平衡\n   - 广告与用户体验的平衡\n   - 电商生态的构建\n   - 创作者经济模式\n\n5. 产品原则的提炼与应用\n   - 用户第一的设计理念\n   - 数据驱动的决策机制\n   - 快速迭代的产品文化\n\n通过深入分析抖音的成功要素，我们能够学习到如何构建一个既满足用户需求又能实现商业价值的产品。这些原则不仅适用于短视频平台，也可以为其他类型的产品设计提供启发。",
      category: "产品设计原则",
      readTime: "20分钟",
      date: "2025年7月",
      tags: ["产品设计", "用户体验", "短视频", "抖音", "产品原则", "设计方法论"],
      icon: <BookOpen className="w-5 h-5" />,
      hasPDF: true,
      pdfPath: "/我的产品原则学习笔记-抖音.pdf"
    }
  ]

  const practices = [
    {
      title: "ChatGPT在产品需求分析中的应用",
      description: "构建专业的提示词模板，让AI成为需求分析的得力助手",
      tools: ["ChatGPT", "Claude", "自定义提示词"],
      outcome: "需求分析效率提升70%",
    },
    {
      title: "基于AI的用户画像自动生成",
      description: "利用机器学习算法，从用户行为数据中自动提取画像特征",
      tools: ["Python", "Scikit-learn", "Tableau"],
      outcome: "画像准确率达到85%",
    },
    {
      title: "智能化A/B测试设计与分析",
      description: "运用AI优化实验设计，自动化分析结果并生成洞察报告",
      tools: ["Google Optimize", "Python", "GPT-4"],
      outcome: "实验周期缩短50%",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1B122C] text-white" style={{ cursor: "none" }}>
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B122C]/80 backdrop-blur-sm border-b border-[#A79FB4]/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/?explore=true">
            <Button variant="ghost" className="text-[#A79FB4] hover:text-[#FFD700]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回星尘宇宙
            </Button>
          </Link>
          <div className="flex items-center space-x-1">
            <Star className="w-5 h-5 text-[#FFD700]" />
            <span className="font-['Manrope'] font-semibold">思考与实践</span>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* 页面标题 */}
          <section className="text-center mb-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FFD700] to-[#A79FB4] flex items-center justify-center">
              <Lightbulb className="w-10 h-10 text-[#1B122C]" />
            </div>
            <h1 className="text-4xl font-bold font-['Manrope'] mb-4">思考与实践</h1>
            <p className="text-xl text-[#A79FB4] font-['Lora'] max-w-2xl mx-auto">
              在AIGC时代，探索数据与智能的无限可能，分享实践中的洞察与思考
            </p>
          </section>

          {/* 深度洞察 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-['Manrope'] mb-8">深度洞察</h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {insights.map((insight) => (
                <Card
                  key={insight.id}
                  className="bg-[#A79FB4]/10 border-[#A79FB4]/30 hover:border-[#FFD700]/50 transition-colors cursor-pointer flex flex-col h-full"
                  onClick={() => setSelectedInsight(insight)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-[#FFD700] text-[#FFD700]">
                        {insight.category}
                      </Badge>
                      <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-[#1B122C]">
                        {insight.icon}
                      </div>
                    </div>
                    <CardTitle className="font-['Manrope'] text-lg leading-tight">{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <p className="text-[#A79FB4] font-['Lora'] mb-6 leading-relaxed">
                      {insight.excerpt.length > 80 
                        ? `${insight.excerpt.substring(0, 80)}...` 
                        : insight.excerpt
                      }
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {insight.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-[#FFD700]/20 text-white border-[#FFD700]/50 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-sm text-[#A79FB4]">
                        <span>{insight.date}</span>
                        <span className="text-[#FFD700]">点击查看详情 →</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* AIGC实践案例 */}
          <section>
            <h2 className="text-3xl font-bold font-['Manrope'] mb-8">AIGC实践案例</h2>
            <div className="space-y-6">
              {practices.map((practice, index) => (
                <Card key={index} className="bg-[#A79FB4]/10 border-[#A79FB4]/30">
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-3 gap-6 items-center">
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold font-['Manrope'] mb-2">{practice.title}</h3>
                        <p className="text-[#A79FB4] font-['Lora'] mb-4">{practice.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {practice.tools.map((tool, toolIndex) => (
                            <Badge
                              key={toolIndex}
                              variant="secondary"
                              className="bg-[#FFD700]/20 text-white border-[#FFD700]/50"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-center lg:text-right">
                        <div className="inline-block bg-[#FFD700]/20 rounded-lg p-4">
                          <div className="text-2xl font-bold text-[#FFD700] font-['Manrope'] mb-1">成果</div>
                          <div className="text-sm text-[#A79FB4] font-['Lora']">{practice.outcome}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 持续学习 */}
          <div className="text-center mt-16">
            <Card className="bg-[#A79FB4]/10 border-[#A79FB4]/30 inline-block">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
                <h3 className="text-xl font-bold font-['Manrope'] mb-2">持续探索中</h3>
                <p className="text-[#A79FB4] font-['Lora'] mb-4">在AI快速发展的时代，保持学习与实践的热情</p>
                <Button className="bg-[#FFD700] text-[#1B122C] hover:bg-[#FFD700]/90 font-['Manrope']">订阅更新</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* 详情弹窗 */}
      {selectedInsight && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedInsight(null)}
        >
          <div 
            className="bg-[#1B122C] border border-[#A79FB4]/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#1B122C] border-b border-[#A79FB4]/30 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center text-[#1B122C]">
                    {selectedInsight.icon}
                  </div>
                  <div>
                    <Badge variant="outline" className="border-[#FFD700] text-[#FFD700] mb-2">
                      {selectedInsight.category}
                    </Badge>
                    <h2 className="text-2xl font-bold font-['Manrope']">{selectedInsight.title}</h2>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedInsight(null)}
                  className="text-[#A79FB4] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-[#A79FB4]">
                <span>{selectedInsight.date}</span>
                <span>•</span>
                <span>{selectedInsight.readTime}</span>
              </div>
            </div>

                        <div className="p-6 overflow-y-auto flex-1">
              {/* 图片预览 */}
              {selectedInsight.hasImage && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold font-['Manrope'] mb-4 text-[#FFD700]">图片预览</h3>
                  <div className="relative w-full max-w-2xl mx-auto">
                    <img
                      src={selectedInsight.imagePath}
                      alt={selectedInsight.title}
                      className="w-full h-auto rounded-lg border border-[#A79FB4]/30"
                    />
                  </div>
                </div>
              )}
              
              <div className="prose prose-invert max-w-none mb-8">
                <div className="whitespace-pre-line text-[#A79FB4] font-['Lora'] leading-relaxed">
                  {selectedInsight.fullContent}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedInsight.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-[#FFD700]/20 text-white border-[#FFD700]/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* 查看图片和PDF按钮 */}
              <div className="flex space-x-4">
                {selectedInsight.hasImage && (
                  <Button
                    variant="outline"
                    className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10"
                    onClick={() => window.open(selectedInsight.imagePath, '_blank')}
                  >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    查看图片
                  </Button>
                )}
                {selectedInsight.hasPDF && (
                  <Button
                    variant="outline"
                    className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10"
                    onClick={() => window.open(selectedInsight.pdfPath, '_blank')}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    查看PDF
                  </Button>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
