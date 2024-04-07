<!-- This template defines the footer of the Solidarity Studio website. -->
<template>
  <!-- Footer section -->
  <img
    src="/footer.png"
    class="footer-image"
  />
  <footer style="background-color: #0F0F0F;">
    <div class="container p-4">
      <div class="row">
        <!-- Information about Solidarity Studio -->
        <div class="col-lg-6 col-md-12 mb-4">
          <h5 class="text-uppercase fw-bold mb-4" style="color: #E3CAAB;">Solidarity Studio</h5>
          <p style="color: white;">
            Solidarity Studio stands at the heart of our community, as a shining example of the power of art to effect change. Since our inception, we have made it our mission to build a bridge of compassion and support through the beauty of art. Each artwork in our gallery tells a story of hope, resilience, and solidarity. Join us on this journey of art and compassion.
          </p>
        </div>
        <!-- Links section -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="text-uppercase fw-bold mb-4" style="color: #E3CAAB;">Links</h5>
          <ul class="list-unstyled mb-0">
            <li class="mb-1">
              <a href="/aboutUs" style="color: white;">About Us</a>
            </li>
            <li class="mb-1">
              <a href="/anreise" style="color: white;">Arrival</a>
            </li>
            <li class="mb-1">
              <a href="/kontakt" style="color: white;">Contact</a>
            </li>
            <li>
              <a href="/impressum" style="color:white;">Imprint</a>
            </li>
          </ul>
        </div>
        <!-- Opening hours section -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="text-uppercase fw-bold mb-4" style="color: #E3CAAB;">Opening Hours</h5>
          <table class="table" style="border-color: #666;">
            <tbody>
              <tr>
                <td>Mon - Thu:</td>
                <td>10 AM - 4 PM</td>
              </tr>
              <tr>
                <td>Fri - Sun: </td>
                <td>5 PM - 10 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Copyright section -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2); color: #E3CAAB;">
      © 2024 Copyright:
      <a class="text-reset fw-bold" href="/">Solidarity Studio</a>
    </div>
  </footer>
</template>

<style>
/* Styles for the footer image */
.footer-image{
  width: 100%;
  height: auto;
  object-fit: cover; 
  margin-bottom: 0px;
}
</style>
