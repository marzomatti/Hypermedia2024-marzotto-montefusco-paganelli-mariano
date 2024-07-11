import { defineStore } from 'pinia'

export const useNavigationStore = defineStore({
  id: 'navigation',
  state: () => ({
    mobileMenuOpen: false,
    navigation: [
      { name: 'Home', href: '/', current: true },
      { name: 'Activities', href: '/activities/', current: false },
      { name: 'Our Team', href: '/team/', current: false },
      { name: 'Virtual Assistant', href: '/virtual-assistant/', current: false },
      { name: 'About Us', href: '/about-us', current: false },
      { name: 'Contact Us', href: '/contact-us', current: false },
    ]
  }),
})