<template>
  <div class="contact">
    <h1>This is the contact page</h1>
    <form 
    name="contact" 
    method="POST" 
    netlify
    data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="ask-question" />
      <label>Your Name: <input type="text" name="name" /></label>   
      <label>Your Email: <input type="email" name="email" /></label>
      <label>Message: <textarea name="message"></textarea></label>
      <router-link to="/contact">
        <button type="submit">Send</button>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  
  name: 'Contact',
  components: {
    
  },
  
  setup() {
    
  },

  data() {
    return {

    }
  },
  methods: {
    
  }
}
</script>
