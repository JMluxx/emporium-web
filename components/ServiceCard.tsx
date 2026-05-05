'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  index?: number
}

export function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-ei-card rounded-xl p-6 border border-[rgba(0,194,203,0.12)] hover:border-[rgba(0,194,203,0.35)] hover:bg-ei-card-hover transition-all duration-300 hover:shadow-card-hover cursor-default"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[rgba(0,194,203,0.1)] flex items-center justify-center mb-5 group-hover:bg-[rgba(0,194,203,0.18)] transition-colors">
        <div className="text-ei-accent">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-bold text-ei-text text-lg mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-ei-muted text-sm leading-relaxed">
        {description}
      </p>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-ei-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}