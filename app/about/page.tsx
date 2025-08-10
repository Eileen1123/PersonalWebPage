"use client"

import { ArrowLeft, Star, TrendingUp, Users, Zap, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"



export default function AboutPage() {
  const skills = [
    { category: "数据分析", items: ["Python", "SQL", "Tableau", "Excel高级应用"] },
    { category: "产品管理", items: ["用户研究", "需求分析", "原型设计", "A/B测试"] },
    { category: "AIGC实践", items: ["ChatGPT应用", "提示工程", "AI工作流优化", "智能内容生成"] },
    { category: "项目管理", items: ["敏捷开发", "Scrum", "跨部门协作", "风险管控"] },
  ]

  const journey = [
    {
      phase: "经济学知识奠基",
      period: "2018.08 - 2021.12",
      description: "在康涅狄格大学获得经济学理学学士学位。通过系统学习掌握宏观与微观分析框架，为数据分析领域培养坚实的逻辑与数理基础。",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      phase: "数据分析实践启蒙",
      period: "2021.03 - 2022.05",
      description: "在安永（EY）收集分析债券数据，接触金融监管领域；在中国建设银行金融科技部门分析用户行为数据，支持业务决策和产品优化。",
      icon: <Users className="w-5 h-5" />,
    },
    {
      phase: "应用数据科学深造",
      period: "2022.09 - 2024.05",
      description: "在波士顿大学攻读应用数据分析理学硕士学位，将编程、统计学与业务应用紧密结合，提升数据技能和分析视野。",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      phase: "产品支持与问题解决",
      period: "2024.10 - 至今",
      description: "作为产品支持分析师，专注于项目监控、技术支持和团队沟通，将分析能力应用于线上问题处理和运维流程。",
      icon: <User className="w-5 h-5" />,
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
            <span className="font-['Manrope'] font-semibold">关于我</span>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* 个人介绍 */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FFD700] to-[#A79FB4] p-1">
                <div className="w-full h-full rounded-full bg-[#1B122C] flex items-center justify-center">
                  <img 
                    src="/portrait.jpg" 
                    alt="个人头像" 
                    className="w-full h-full rounded-full object-cover"
                  />

                </div>
              </div>
              <h1 className="text-4xl font-bold font-['Manrope'] mb-4">数据驱动的体验构建者</h1>
              <p className="text-xl text-[#A79FB4] font-['Lora'] max-w-2xl mx-auto">
                我致力于通过深入的用户洞察与数据分析，将用户的真实需求转化为富有生命力的产品功能与体验，
                最终打造出不仅能解决问题，更能传递价值的产品。
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-[#A79FB4]/10 rounded-lg p-8 font-['Lora'] text-lg leading-relaxed">
                <p className="mb-6">
                  在数字化浪潮中，我发现了数据背后隐藏的用户故事。从分析金融债券数据，到深入研究"建行生活"App的用户行为，我逐渐认识到，每一个数字、每一条曲线，都在诉说着用户的真实需求和痛点。我的使命是成为数据与用户之间的桥梁，用洞察力点亮产品的每一个细节。
                </p>
                <p className="mb-6">
                  从最初在实习中进行数据分析，到如今处理产品支持问题，我经历了从"看数据"到"用数据创造价值"的蜕变。在康涅狄格大学的经济学学习为我奠定了分析基础，而在波士顿大学应用数据分析硕士期间的深造，则让我掌握了扎实的数据科学技能。更重要的是，在将用户偏好数据转化为激励方案的实践中，我培养了敏锐的商业嗅觉和用户同理心。
                </p>
                <p>
                  如今，在AIGC时代的浪潮中，我正在探索人工智能如何重新定义产品体验。
                  我相信，最好的产品不是技术的炫耀，而是对用户需求的深刻理解和精准回应。
                </p>
              </div>
            </div>
          </section>

          {/* 成长历程 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-['Manrope'] mb-8 text-center">成长星轨</h2>
            <div className="space-y-8">
              {journey.map((phase, index) => (
                <Card key={index} className="bg-[#A79FB4]/10 border-[#A79FB4]/30">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-[#1B122C]">
                        {phase.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold font-['Manrope']">{phase.phase}</h3>
                          <Badge variant="outline" className="border-[#FFD700] text-[#FFD700]">
                            {phase.period}
                          </Badge>
                        </div>
                        <p className="text-[#A79FB4] font-['Lora']">{phase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 技能星座 */}
          <section>
            <h2 className="text-3xl font-bold font-['Manrope'] mb-8 text-center">技能星座</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="bg-[#A79FB4]/10 border-[#A79FB4]/30">
                  <CardHeader>
                    <CardTitle className="font-['Manrope'] text-[#FFD700]">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-[#FFD700]/20 text-white border-[#FFD700]/50"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
