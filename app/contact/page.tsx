import { ArrowLeft, Mail, MessageCircle, Star, Linkedin, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "邮件联系",
      description: "商务合作与职业机会",
      contact: "hello@example.com",
      action: "mailto:hello@example.com",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "微信交流",
      description: "产品思维与行业交流",
      contact: "WeChat ID: your_wechat",
      action: "#",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      description: "专业网络与职业发展",
      contact: "linkedin.com/in/yourprofile",
      action: "https://linkedin.com/in/yourprofile",
    },
  ]

  const interests = [
    "产品经理职位机会",
    "数据分析项目合作",
    "AIGC产品探讨",
    "用户体验设计",
    "行业趋势交流",
    "技术分享与学习",
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
            <span className="font-['Manrope'] font-semibold">联系我</span>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* 页面标题 */}
          <section className="text-center mb-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FFD700] to-[#A79FB4] flex items-center justify-center">
              <Mail className="w-10 h-10 text-[#1B122C]" />
            </div>
            <h1 className="text-4xl font-bold font-['Manrope'] mb-4">开启合作对话</h1>
            <p className="text-xl text-[#A79FB4] font-['Lora'] max-w-2xl mx-auto">
              期待与您探讨产品创新、数据洞察，以及AIGC时代的无限可能
            </p>
          </section>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 联系方式 */}
            <div>
              <h2 className="text-2xl font-bold font-['Manrope'] mb-6">联系方式</h2>
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="bg-[#A79FB4]/10 border-[#A79FB4]/30 hover:border-[#FFD700]/50 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-[#1B122C]">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold font-['Manrope']">{method.title}</h3>
                          <p className="text-[#A79FB4] text-sm font-['Lora'] mb-1">{method.description}</p>
                          <a href={method.action} className="text-[#FFD700] hover:underline text-sm">
                            {method.contact}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* 合作兴趣 */}
              <h3 className="text-xl font-bold font-['Manrope'] mb-4">合作兴趣领域</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="secondary" className="bg-[#FFD700]/20 text-white border-[#FFD700]/50">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 联系表单 */}
            <div>
              <Card className="bg-[#A79FB4]/10 border-[#A79FB4]/30">
                <CardHeader>
                  <CardTitle className="font-['Manrope']">发送消息</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">姓名</label>
                      <Input placeholder="您的姓名" className="bg-[#1B122C] border-[#A79FB4]/50 text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">邮箱</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-[#1B122C] border-[#A79FB4]/50 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">主题</label>
                    <Input placeholder="合作主题或咨询内容" className="bg-[#1B122C] border-[#A79FB4]/50 text-white" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">消息内容</label>
                    <Textarea
                      placeholder="请详细描述您的需求或想法..."
                      rows={6}
                      className="bg-[#1B122C] border-[#A79FB4]/50 text-white resize-none"
                    />
                  </div>

                  <Button className="w-full bg-[#FFD700] text-[#1B122C] hover:bg-[#FFD700]/90 font-['Manrope']">
                    发送消息
                  </Button>
                </CardContent>
              </Card>

              {/* 社交链接 */}
              <div className="mt-8 text-center">
                <h3 className="text-lg font-bold font-['Manrope'] mb-4">社交媒体</h3>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-[#A79FB4] text-[#A79FB4] hover:bg-[#A79FB4]/10 bg-transparent"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-[#A79FB4] text-[#A79FB4] hover:bg-[#A79FB4]/10 bg-transparent"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-[#A79FB4] text-[#A79FB4] hover:bg-[#A79FB4]/10 bg-transparent"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* 响应承诺 */}
          <div className="text-center mt-16">
            <Card className="bg-[#A79FB4]/10 border-[#A79FB4]/30 inline-block">
              <CardContent className="p-6">
                <MessageCircle className="w-8 h-8 mx-auto mb-3 text-[#FFD700]" />
                <h3 className="font-bold font-['Manrope'] mb-2">响应承诺</h3>
                <p className="text-[#A79FB4] font-['Lora'] text-sm">我会在24小时内回复您的消息</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
