<template>
  <div class="contact">
    <h1>This is the contact page</h1>
    <form name="contact" method="POST" data-netlify="true">
      <label>Your Name: <input type="text" name="name" /></label>   
      <label>Your Email: <input type="email" name="email" /></label>
      <label>Message: <textarea name="message"></textarea></label>
      <div data-netlify-recaptcha="true"></div>
      <input type="submit" value="Send Message">
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
}
</script>
