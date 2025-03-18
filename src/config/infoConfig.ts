export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Chaoxin Sun'
export const headline = 'Math student at Beijing Normal University at Zhuhai.'
export const introduction =
  "Coucou Les Amis! My name is Chaoxin Sun. I'm from Heibei and an alumnus of BUPT, UChicago, and Tsinghua. I’ve been teaching Computer Science at SCLS since 2020."
export const email = '2225116613@qq.com'
export const githubUsername = 'derekhut'

// about page
export const aboutMeHeadline = '孙朝昕'
export const aboutParagraphs = 
    "在社会利益冲突中，哪一方执行解决方案的总成本最小，社会规则倾向于让他成为责任方。
    "图书馆占座导致座位资源的浪费，也导致后来者被迫寻找解决方案（到其他地方自习）；但如果图书馆规定不允许占座并严格执行，将导致先到的同学不敢随意离座（上厕所、打电话、找书等），由于自习时间的连贯性和稳定性得不到保障，他们的解决方案就是干脆不到图书馆自习，形成图书馆的座位更大的浪费。两相比较（还要考虑监督成本），允许占座产生的浪费更小。于是社会规则默认后到的同学承担重新找座位的责任。
    "但是对于长时间占座不归的同学，他们移开占座书本的成本显然更低（又不是来自习，纯属占着不让），社会规则倾向于把他们归为责任方。",
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
