import { ArrowLeft, BookOpen, Lightbulb, Star, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function InsightsPage() {
  const insights = [
    {
      id: "aigc-product-design",
      title: "AIGC时代的产品设计新范式",
      excerpt: "探索人工智能如何重新定义产品设计流程，从用户研究到原型验证的全链路变革。",
      category: "AIGC实践",
      readTime: "8分钟",
      date: "2024年1月",
      tags: ["产品设计", "AI工具", "用户体验"],
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: "data-storytelling",
      title: "数据叙事：让数字会说话的艺术",
      excerpt: "如何将冰冷的数据转化为有温度的故事，在商业决策中发挥最大价值。",
      category: "数据分析",
      readTime: "6分钟",
      date: "2023年12月",
      tags: ["数据可视化", "商业洞察", "决策支持"],
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: "user-research-ai",
      title: "用户研究的AI增强：效率与深度的平衡",
      excerpt: "结合传统用户研究方法与AI工具，在保持研究深度的同时大幅提升效率。",
      category: "用户研究",
      readTime: "10分钟",
      date: "2023年11月",
      tags: ["用户研究", "AI辅助", "研究方法"],
      icon: <BookOpen className="w-5 h-5" />,
    },
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
          <Link href="/">
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
                  className="bg-[#A79FB4]/10 border-[#A79FB4]/30 hover:border-[#FFD700]/50 transition-colors cursor-pointer"
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
                  <CardContent>
                    <p className="text-[#A79FB4] font-['Lora'] mb-4 leading-relaxed">{insight.excerpt}</p>

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
                      <span>{insight.readTime}阅读</span>
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
    </div>
  )
}
