<template>
  <div class="contact">
    <h1>This is the contact page</h1>
    <!-- <form 
    name="contact" 
    method="POST" 
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="ask-question" />
      <label>Your Name: <input type="text" name="name" /></label>   
      <label>Your Email: <input type="email" name="email" /></label>
      <label>Message: <textarea name="message"></textarea></label>
      <div netlify-recaptcha></div>

    </form> -->
    <form netlify method="POST">
      <p>
        <label>Name <input type="text" name="name" placeholder="Name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" placeholder="Email"/></label>
      </p>
      <p>
        <router-link to="/">
          <input type="submit" value="Send Message" />
        </router-link>
      </p>
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
