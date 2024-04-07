<template>
  
  <!-- https://github.com/EvodiaAut/vue-cookieconsent-component/blob/master/src/components/CookieConsent.vue -->
  <!-- Cookie consent component with transition -->
  <transition :name="transition">
    <div v-if="show" class="cookie-consent" role="dialog">
      <!-- Slot for message -->
      <slot name="message">
        <span class="cookie-consent-message">
          {{ message }}
          <!-- Slot for link -->
          <slot name="link">
            <a v-bind="{ href, target, rel }" class="cookie-consent-link" role="button">
              {{ linkLabel }}
            </a>
          </slot>
        </span>
      </slot>
      <section @click="dismiss">
        <!-- Slot for button -->
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
// Define CookieConsent component
export default {
  name: 'CookieConsent',
  props: {
    // default
    transition: {
      type: String,
      default: 'cookie-consent-transition'
    },
    message: {
      type: String,
      default: 'Diese Website verwendet Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website erhalten.'
    },
    // button
    linkLabel: {
      type: String,
      default: 'Mehr erfahren'
    },
    buttonLabel: {
      type: String,
      default: 'Verstanden!'
    },
    href: {
      type: String,
      default: 'http://cookiesunddu.com'
    },
    target: {
      type: String,
      default: '_blank'
    },
    rel: {
      type: String,
      default: 'noopener'
    },
    // cookie
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
    return {
      show: undefined
    }
  },
  computed: {
    cookie() {
      return !this.getCookie(this.cookieName)
    }
  },
  beforeMount() {
    this.show = this.cookie
  },
  methods: {
    dismiss() {
      // Dismiss the cookie consent and set cookie
      this.show = false
      this.setCookie(this.cookieName, 1, this.cookieExpiryDays, this.cookieDomain, this.cookiePath)
    },
    getCookie(name) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)

      return parts.length !== 2 ?
        undefined :
        parts.pop().split(';').shift()
    },
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
