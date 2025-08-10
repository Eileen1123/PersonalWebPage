"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, User, Briefcase, Lightbulb, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StardustBackground } from "@/components/stardust-background" // 导入星尘背景组件

interface Constellation {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  x: number
  y: number
  activated: boolean
}

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true)
  const [selectedConstellation, setSelectedConstellation] = useState<string | null>(null)
  const [constellations, setConstellations] = useState<Constellation[]>([
    {
      id: "about",
      name: "关于我",
      icon: <User className="w-6 h-6" />,
      description: "数据驱动的体验构建者",
      x: 0.25,
      y: 0.3,
      activated: false,
    },
    // 暂时隐藏项目集
    // {
    //   id: "projects",
    //   name: "项目集",
    //   icon: <Briefcase className="w-6 h-6" />,
    //   description: "深度案例研究展示",
    //   x: 0.7,
    //   y: 0.25,
    //   activated: false,
    // },
    {
      id: "insights",
      name: "思考与实践",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "AIGC探索与见解分享",
      x: 0.75,
      y: 0.4,
      activated: false,
    },
    {
      id: "contact",
      name: "联系我",
      icon: <Mail className="w-6 h-6" />,
      description: "开启合作对话",
      x: 0.5,
      y: 0.75,
      activated: false,
    },
  ])

  // 检查URL参数，如果explore=true则直接显示星座导航
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('explore') === 'true') {
        setShowIntro(false)
        // 恢复之前激活过的星座状态
        const savedConstellations = localStorage.getItem('activatedConstellations')
        if (savedConstellations) {
          try {
            const activatedIds = JSON.parse(savedConstellations)
            setConstellations(prev => 
              prev.map(constellation => ({
                ...constellation,
                activated: activatedIds.includes(constellation.id)
              }))
            )
          } catch (error) {
            console.error('Failed to parse saved constellations:', error)
          }
        }
      }
    }
  }, [])

  const activateConstellation = (id: string) => {
    setConstellations((prev) => {
      const updated = prev.map((constellation) => 
        constellation.id === id 
          ? { ...constellation, activated: !constellation.activated } 
          : constellation
      )
      
      // 保存激活状态到本地存储
      const activatedIds = updated.filter(c => c.activated).map(c => c.id)
      localStorage.setItem('activatedConstellations', JSON.stringify(activatedIds))
      
      return updated
    })
    
    // 如果点击的是当前选中的星座，则取消选中
    if (selectedConstellation === id) {
      setSelectedConstellation(null)
    } else {
      setSelectedConstellation(id)
    }
  }

  const navigateToSection = (id: string) => {
    window.location.href = `/${id}`
  }

  const handleStartExplore = () => {
    setShowIntro(false)
    // 更新URL参数
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      url.searchParams.set('explore', 'true')
      window.history.pushState({}, '', url)
    }
  }

  return (
    <div className="min-h-screen bg-[#1B122C] relative overflow-hidden" style={{ cursor: "none" }}>
      {/* 星尘背景组件 */}
      <StardustBackground density="medium" />

      {/* 引导文案 */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="text-center text-[#A79FB4]">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="mb-4"
              >
                <Sparkles className="w-12 h-12 mx-auto text-[#FFD700]" />
              </motion.div>
              <h1 className="text-4xl font-bold text-white mb-4 font-['Manrope']">数据驱动的体验构建者</h1>
              <p className="text-xl font-['Lora'] mb-8">滑动鼠标，从数据中发现我的故事</p>
              <Button
                onClick={handleStartExplore}
                className="bg-[#FFD700] text-[#1B122C] hover:bg-[#FFD700]/90 font-['Manrope']"
              >
                开始探索
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 星座导航 */}
      {!showIntro && (
        <div className="absolute inset-0 z-10">
          {constellations.map((constellation) => (
            <motion.div
              key={constellation.id}
              className="absolute"
              style={{
                left: `${constellation.x * 100}%`,
                top: `${constellation.y * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className={`relative cursor-pointer ${constellation.activated ? "text-[#FFD700]" : "text-[#A79FB4]"}`}
                whileHover={{ scale: 1.1 }}
                onClick={() => activateConstellation(constellation.id)}
              >
                {/* 星座核心 */}
                <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center bg-[#1B122C]/80 backdrop-blur-sm">
                  {constellation.icon}
                </div>

                {/* 星座标签 */}
                <motion.div
                  className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: constellation.activated ? 1 : 0.7 }}
                >
                  <div className="font-['Manrope'] font-semibold text-sm text-white whitespace-nowrap">
                    {constellation.name} - {constellation.description}
                  </div>
                </motion.div>

                {/* 连接线效果 */}
                {constellation.activated && (
                  <motion.div
                    className="absolute inset-0 w-16 h-16 rounded-full border-2 border-[#FFD700]"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}

      {/* 星座详情卡片 */}
      <AnimatePresence>
        {selectedConstellation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-30"
            onClick={() => setSelectedConstellation(null)}
            style={{ cursor: "none" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
                              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              style={{ cursor: "none" }}
            >
              <Card className="w-96 bg-[#1B122C] border-[#A79FB4] text-white">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[#FFD700] flex items-center justify-center text-[#FFD700]">
                      {constellations.find((c) => c.id === selectedConstellation)?.icon}
                    </div>
                    <h2 className="text-2xl font-bold font-['Manrope'] mb-2">
                      {constellations.find((c) => c.id === selectedConstellation)?.name}
                    </h2>
                    <p className="text-[#A79FB4] font-['Lora']">
                      {constellations.find((c) => c.id === selectedConstellation)?.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button
                      onClick={() => navigateToSection(selectedConstellation)}
                      className="w-full bg-[#FFD700] text-[#1B122C] hover:bg-[#FFD700]/90 font-['Manrope']"
                    >
                      探索完整内容
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedConstellation(null)}
                      className="w-full border-[#A79FB4] text-[#A79FB4] hover:bg-[#A79FB4]/10"
                    >
                      继续探索
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
