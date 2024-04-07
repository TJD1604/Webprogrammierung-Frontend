<!-- This template defines the structure of the CookieConsent component with transition -->
<template>
  <transition :name="transition">
    <div v-if="show" class="cookie-consent" role="dialog">
      <!-- Slot for displaying the consent message -->
      <slot name="message">
        <span class="cookie-consent-message">
          {{ message }}
          <!-- Slot for displaying the link within the message -->
          <slot name="link">
            <a v-bind="{ href, target, rel }" class="cookie-consent-link" role="button">
              {{ linkLabel }}
            </a>
          </slot>
        </span>
      </slot>
      <!-- Section containing the button to dismiss the consent -->
      <section @click="dismiss">
        <slot name="button">
          <button class="cookie-consent-compliance" type="button">
            {{ buttonLabel }}
          </button>
        </slot>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CookieConsent',
  props: {
    // Props for controlling transitions, message, and button labels
    transition: {
      type: String,
      default: 'cookie-consent-transition'
    },
    message: {
      type: String,
      default: 'This website uses cookies to ensure you get the best experience on our website.'
    },
    linkLabel: {
      type: String,
      default: 'Learn more'
    },
    buttonLabel: {
      type: String,
      default: 'Got it!'
    },
    // Props related to the link
    href: {
      type: String,
      default: 'http://cookiesandyou.com'
    },
    target: {
      type: String,
      default: '_blank'
    },
    rel: {
      type: String,
      default: 'noopener'
    },
    // Props related to cookie handling
    cookieName: {
      type: String,
      default: 'cookieconsent_status'
    },
    cookiePath: {
      type: String,
      default: '/'
    },
    cookieDomain: {
      type: String,
      default: ''
    },
    cookieExpiryDays: {
      type: Number,
      default: 365
    }
  },
  data() {
    // Data property to control the visibility of the consent message
    return {
      show: undefined
    }
  },
  computed: {
    // Computed property to check if the consent cookie is present
    cookie() {
      return !this.getCookie(this.cookieName)
    }
  },
  beforeMount() {
    // Before mounting, set the visibility of the consent message based on the cookie
    this.show = this.cookie
  },
  methods: {
    // Method to dismiss the consent and set the cookie
    dismiss() {
      this.show = false
      this.setCookie(this.cookieName, 1, this.cookieExpiryDays, this.cookieDomain, this.cookiePath)
    },
    // Method to get the value of a cookie by name
    getCookie(name) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      return parts.length !== 2 ?
        undefined :
        parts.pop().split(';').shift()
    },
    // Method to set a cookie with name, value, expiry days, domain, and path
    setCookie(name, value, expiryDays, domain, path) {
      const exdate = new Date()
      exdate.setDate(exdate.getDate() + (expiryDays || 365))
      const cookie = [
        `${name}=${value}`,
        `expires=${exdate.toUTCString()}`,
        `path=${(path || '/')}`
      ]
      if (domain) {
        cookie.push(`domain=${domain}`)
      }
      document.cookie = cookie.join(';')
    }
  }
}
</script>
