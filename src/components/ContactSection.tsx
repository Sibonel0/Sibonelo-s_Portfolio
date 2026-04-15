'use client'

import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Github, Linkedin, Mail, Instagram, MapPin, Phone } from 'lucide-react'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function ContactSection() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null)
  const [isSending, setIsSending] = useState(false)

  const recipientEmail = 'sibonelodlamini25@gmail.com'

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!firstName || !email || !subject || !message) {
      setStatusType('error')
      setStatusMessage('Please fill in all required fields before sending.')
      return
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatusType('error')
      setStatusMessage(
        'Email sending is not configured. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your environment.'
      )
      return
    }

    setIsSending(true)
    setStatusMessage(null)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${firstName} ${lastName}`.trim(),
          from_email: email,
          subject,
          message,
          to_email: recipientEmail
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatusType('success')
      setStatusMessage('Your message was sent successfully. I will reply as soon as possible.')
      setFirstName('')
      setLastName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatusType('error')
      setStatusMessage('Something went wrong while sending your message. Please try again later.')
    } finally {
      setIsSending(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sibonelodlamini25@gmail.com',
      href: 'mailto:sibonelodlamini25@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 61-668-7387',
      href: 'tel:+27616687387'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Midrand, Gauteng',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sibonel0', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sibonelo-dlamini-0b5597226', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/sibonelo_kby', label: 'Instagram' },
    { icon: Mail, href: 'mailto:sibonelodlamini25@gmail.com', label: 'Email' }
  ]

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects. 
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/5 backdrop-blur-xl border-white/20 shadow-2xl shadow-black/30">
              <h3 className="text-2xl text-white mb-6">Send me a message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {statusMessage ? (
                  <div
                    className={`rounded-lg border px-4 py-3 text-sm ${
                      statusType === 'success'
                        ? 'border-emerald-400 bg-emerald-500/10 text-emerald-200'
                        : 'border-red-400 bg-red-500/10 text-red-200'
                    }`}
                  >
                    {statusMessage}
                  </div>
                ) : null}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">First Name</label>
                    <Input
                      placeholder="Your first name"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      className="bg-white/5 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:bg-white/10"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">Last Name</label>
                    <Input
                      placeholder="Your last name"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      className="bg-white/5 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:bg-white/10"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="bg-white/5 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:bg-white/10"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Subject</label>
                  <Input
                    placeholder="Project discussion"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    className="bg-white/5 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:bg-white/10"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="bg-white/5 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:bg-white/10 resize-none"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 disabled:cursor-not-allowed disabled:bg-emerald-400/70"
                >
                  {isSending ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Let's connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm currently available for opportunities. 
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-lg shadow-lg shadow-black/20 hover:bg-white/10 hover:border-emerald-500/50 hover:shadow-emerald-500/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-lg flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-all duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white text-lg mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-emerald-500 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-16 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2026 Sibonelo Dlamini. Designed &amp; Built with ❤️ using React and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}