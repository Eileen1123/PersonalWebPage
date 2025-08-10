import { ArrowLeft, ExternalLink, Github, Star, TrendingUp, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      id: "ecommerce-optimization",
      title: "电商平台用户体验优化",
      subtitle: "数据驱动的转化率提升项目",
      description: "通过深度用户行为分析，识别关键转化漏斗问题，设计并实施优化方案，最终实现转化率提升35%。",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["用户研究", "数据分析", "A/B测试", "转化优化"],
      metrics: [
        { label: "转化率提升", value: "35%" },
        { label: "用户留存提升", value: "28%" },
        { label: "收入增长", value: "¥2.3M" },
      ],
      role: "产品分析师 & UX研究员",
      duration: "3个月",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      id: "fintech-dashboard",
      title: "金融科技数据看板设计",
      subtitle: "为投资决策赋能的智能仪表盘",
      description: "设计并开发面向金融分析师的实时数据看板，整合多源数据，提供直观的投资洞察和风险预警。",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["数据可视化", "金融科技", "实时分析", "风险管控"],
      metrics: [
        { label: "决策效率提升", value: "60%" },
        { label: "风险识别准确率", value: "92%" },
        { label: "用户满意度", value: "4.8/5" },
      ],
      role: "产品经理 & 数据架构师",
      duration: "4个月",
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: "aigc-content-platform",
      title: "AIGC内容生成平台",
      subtitle: "智能化内容创作工具的产品化探索",
      description: "基于GPT技术构建的智能内容生成平台，为营销团队提供高质量、个性化的内容创作解决方案。",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["AIGC", "产品设计", "机器学习", "内容策略"],
      metrics: [
        { label: "内容生成效率", value: "10x" },
        { label: "内容质量评分", value: "8.5/10" },
        { label: "用户采用率", value: "78%" },
      ],
      role: "产品负责人 & AI产品专家",
      duration: "6个月",
      icon: <Zap className="w-6 h-6" />,
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
            <span className="font-['Manrope'] font-semibold">项目集</span>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* 页面标题 */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold font-['Manrope'] mb-4">项目星座</h1>
            <p className="text-xl text-[#A79FB4] font-['Lora'] max-w-2xl mx-auto">
              每个项目都是一次深度探索，从数据洞察到产品价值的完整旅程
            </p>
          </section>

          {/* 项目列表 */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={project.id} className="bg-[#A79FB4]/10 border-[#A79FB4]/30 overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* 项目图片 */}
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B122C]/60 to-transparent" />
                  </div>

                  {/* 项目信息 */}
                  <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-[#1B122C]">
                        {project.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold font-['Manrope']">{project.title}</h2>
                        <p className="text-[#FFD700] font-['Lora']">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-[#A79FB4] font-['Lora'] mb-6 leading-relaxed">{project.description}</p>

                    {/* 项目标签 */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-[#FFD700]/20 text-white border-[#FFD700]/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* 项目指标 */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-2xl font-bold text-[#FFD700] font-['Manrope']">{metric.value}</div>
                          <div className="text-sm text-[#A79FB4] font-['Lora']">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* 项目详情 */}
                    <div className="flex justify-between items-center text-sm text-[#A79FB4] mb-6">
                      <span>角色：{project.role}</span>
                      <span>周期：{project.duration}</span>
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex space-x-4">
                      <Button className="bg-[#FFD700] text-[#1B122C] hover:bg-[#FFD700]/90 font-['Manrope']">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        查看详细案例
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[#A79FB4] text-[#A79FB4] hover:bg-[#A79FB4]/10 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        技术实现
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* 更多项目提示 */}
          <div className="text-center mt-16">
            <Card className="bg-[#A79FB4]/10 border-[#A79FB4]/30 inline-block">
              <CardContent className="p-8">
                <Star className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
                <h3 className="text-xl font-bold font-['Manrope'] mb-2">更多项目正在整理中</h3>
                <p className="text-[#A79FB4] font-['Lora'] mb-4">每个项目都承载着独特的思考与实践</p>
                <Button
                  variant="outline"
                  className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 bg-transparent"
                >
                  敬请期待
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
