export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Chaoxin Sun'
export const headline = 'a Math student at Beijing Normal University at Zhuhai.'
export const introduction =
  "Coucou Les Amis! My name is Chaoxin Sun. I'm from Heibei and an alumnus of BUPT, UChicago, and Tsinghua. I’ve been teaching Computer Science at SCLS since 2020."
export const email = 'sunchaoxin142857@gmail.com(已经找回)'
export const githubUsername = 'derekhut'

// about page
export const aboutMeHeadline = ""               
export const aboutParagraphs = [
    "",
    "如果有任何需要花费超过他90秒的时间，他就一定会写一个脚本来实现那件事情，让那件事情自动化。",
    "",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
