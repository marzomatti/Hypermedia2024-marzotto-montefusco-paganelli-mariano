import { defineStore } from 'pinia'

export const useNavigationStore = defineStore({
  id: 'navigation',
  state: () => ({
    mobileMenuOpen: false,
    navigation: [
      { name: 'Home', href: '/', current: true },
      { name: 'Activities', href: '/activities/', current: false },
      { name: 'Our team', href: '/team/', current: false },
      { name: 'Chatbot', href: '/chat/', current: false },
      { name: 'Contact us', href: '/contact-us', current: false },
      { name: 'About us', href: '/about-us', current: false },
      { name: 'Donate', href: '/donate', current: false },
    ]
  }),
  actions: {
    setCurrentPage(pageName) {
      this.currentPage = pageName;
      this.navigation = this.navigation.map(item => ({
        ...item,
        current: item.name === pageName ? true : false
      }));
    }
  }
})