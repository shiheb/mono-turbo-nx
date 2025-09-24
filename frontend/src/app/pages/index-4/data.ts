import type { FaqType, NavbarLinkProps } from '@/types/data'
import type {
  FeatureType,
  PricingType,
  TestimonialType,
  ToolType,
  TopicType,
} from './types'

import avatar1 from '@/assets/images/avatars/img-1.png'
import avatar2 from '@/assets/images/avatars/img-2.png'
import avatar3 from '@/assets/images/avatars/img-3.png'
import avatar4 from '@/assets/images/avatars/img-4.png'
import avatar5 from '@/assets/images/avatars/img-5.png'
import avatar6 from '@/assets/images/avatars/img-6.png'
import avatar7 from '@/assets/images/avatars/img-7.png'
import avatar8 from '@/assets/images/avatars/img-8.png'

export const aiTools: ToolType[] = [
  {
    icon: 'lucide:dribbble',
    title: 'Latest AI technology',
    description:
      'Click on Chat Archive and search to Watch Ask Anything Chats from your favocite artists. Ask Them A Question.',
  },
  {
    icon: 'lucide:messages-square',
    title: 'Muiti-language',
    description:
      'Click on Chat Archive and search to Watch Ask Anything Chats from your favocite artists. Ask Them A Question.',
  },
  {
    icon: 'lucide:image',
    title: 'Edit text easily',
    description:
      'Click on Chat Archive and search to Watch Ask Anything Chats from your favocite artists. Ask Them A Question.',
  },
]

export const features: FeatureType[] = [
  {
    icon: 'lucide:send',
    name: 'Blog Post',
    description:
      'Generate blog posts on a variety of topics, from industry news and trends to product reviews and how-to guides.',
  },
  {
    icon: 'lucide:youtube',
    name: 'Social Media',
    description:
      'Generate blog posts on a variety of topics, from industry news and trends to product reviews and how-to guides.',
  },
  {
    icon: 'lucide:facebook',
    name: 'Blog Post',
    description:
      'Generate blog posts on a variety of topics, from industry news and trends to product reviews and how-to guides.',
  },
  {
    icon: 'lucide:mail',
    name: 'Email',
    description:
      'Generate blog posts on a variety of topics, from industry news and trends to product reviews and how-to guides.',
  },
  {
    icon: 'lucide:user',
    name: 'FAQ',
    description:
      'Generate blog posts on a variety of topics, from industry news and trends to product reviews and how-to guides.',
  },
  {
    icon: 'lucide:star',
    name: 'Testimonials',
    description:
      'Generate blog posts on a variety of topics, from industry news and trends to product reviews and how-to guides.',
  },
]

export const trendingTopics: TopicType[] = [
  {
    id: 1,
    title: 'Wax layer',
    description: 'Pressure clean, sponge art, string art, army',
    avatars: [avatar2, avatar1, avatar3],
  },
  {
    id: 2,
    title: 'Crowd Defence',
    description: 'attack other gang, big, army, Crowd evolution',
    avatars: [avatar4, avatar5],
  },
  {
    id: 3,
    title: 'Spinner blade',
    description: 'beyblade games, fidget spinner, spinner battle',
    avatars: [avatar6, avatar7, avatar8, avatar5],
  },
  {
    id: 4,
    title: 'Restaurant game',
    description: 'Cooking madness, cooking, cafe, new hotel',
    avatars: [avatar8, avatar4, avatar6],
  },
  {
    id: 5,
    title: 'entire marvel universe',
    description: 'Marvel, mutant ninja turtles, super heroes',
    avatars: [avatar1],
  },
  {
    id: 6,
    title: 'Draw bridge',
    description: 'road draw, draw rider, build bridge , build',
    avatars: [avatar2, avatar6, avatar3],
  },
]

export const userTestimonialData: TestimonialType[] = [
  {
    name: 'Ryan Delk',
    avatar: avatar1,
    description:
      "I've tried other AI writing tools before, but this one is by far the best. The language is sophisticated and engaging, and it's helped me take my content to the next level.",
  },
  {
    name: 'Marsel Fischer',
    avatar: avatar2,
    description:
      "As a content marketer, I'm always looking for ways to streamline my workflow and create high-quality content. I don't know how I ever managed without it.",
  },
  {
    name: 'John Tayes',
    avatar: avatar3,
    description:
      'The solutions offered by your AI chatbots are truly impressive! We are able to communicate with our customers faster and more interactively.',
  },
  {
    name: 'Ryan Jonas',
    avatar: avatar4,
    description:
      "I've tried other AI writing tools before, but this one is by far the best. The language is sophisticated and engaging, and it's helped me take my content to the next level.",
  },
  {
    name: 'Randy Hilarski',
    avatar: avatar5,
    description:
      'I was surprised by the ease and speed of the video editing service based on AI technology from this site. The results are amazing and very satisfying.',
  },
  {
    name: 'Jonathan Simcoe',
    avatar: avatar6,
    description:
      'The solutions offered by your AI chatbots are truly impressive! We are able to communicate with our customers faster and more interactively.',
  },
]

export const pricingPlans: PricingType[] = [
  {
    name: 'Free',
    price: 0,
    features: ['1 user', 'Plan features', 'Product support'],
  },
  {
    name: 'Startup',
    price: 39,
    features: ['2 users', 'Plan features', 'Product support'],
  },
  {
    name: 'Team',
    price: 89,
    features: ['5 users', 'Plan features', 'Product support'],
  },
  {
    name: 'Enterprise',
    price: 149,
    features: ['10 users', 'Plan features', 'Product support'],
  },
]

export const faqs: FaqType[] = [
  {
    id: 1,
    question: 'How does AI-BOX generate content?',
    answer:
      'AI-BOX utilizes advanced algorithms and machine learning techniques to generate content based on user inputs and desired parameters, resulting in unique and customized AI-generated creations.',
  },
  {
    id: 2,
    question: 'What types of content can AI-BOX create?',
    answer:
      'AI-BOX utilizes advanced algorithms and machine learning techniques to generate content based on user inputs and desired parameters, resulting in unique and customized AI-generated creations.',
  },
  {
    id: 3,
    question: 'Can I customize the content generated by AI-BOX?',
    answer:
      'AI-BOX utilizes advanced algorithms and machine learning techniques to generate content based on user inputs and desired parameters, resulting in unique and customized AI-generated creations.',
  },
]

export const navLinks: NavbarLinkProps[] = [
  {
    label: 'Home',
    link: '#home',
  },
  {
    label: 'Tools',
    link: '#tools',
  },
  {
    label: 'Features',
    link: '#features',
  },
  {
    label: 'Testimonials',
    link: '#testimonials',
  },
  {
    label: 'Price',
    link: '#price',
  },
  {
    label: 'Faq',
    link: '#faq',
  },
]
