<template>
  <!-- Timeline container -->
  <div class="container">
      <!-- Main timeline -->
      <div class="main-timeline">
          <!-- Timeline item 1 -->
          <div class="timeline">
              <!-- Timeline icon -->
              <div class="icon"></div>
              <!-- Date content -->
              <div class="date-content">
                  <div class="date-outer">
                      <!-- Date -->
                      <span class="date">
                          <span class="month">4 Years</span>
                          <span class="year">2020</span>
                      </span>
                  </div>
              </div>
              <!-- Timeline content -->
              <div class="timeline-content">
                  <h3>Preparation and Planning</h3>
                  <p class="description">
                      The idea for Solidarity Studio was born, and the concept was developed. Initial discussions with potential partners and artists took place.
                  </p>
              </div>
          </div>
          <!-- Timeline item 2 -->
          <div class="timeline">
              <!-- Timeline icon -->
              <div class="icon"></div>
              <!-- Date content -->
              <div class="date-content">
                  <div class="date-outer">
                      <!-- Date -->
                      <span class="date">
                          <span class="month">2 Years</span>
                          <span class="year">2022</span>
                      </span>
                  </div>
              </div>
              <!-- Timeline content -->
              <div class="timeline-content">
                  <h3>Foundation of Solidarity Studio</h3>
                  <p class="description">
                      Solidarity Studio was officially founded to promote art and design for charitable purposes. The first projects were launched to support communities.
                  </p>
              </div>
          </div>
          <!-- Timeline item 3 -->
          <div class="timeline">
              <!-- Timeline icon -->
              <div class="icon"></div>
              <!-- Date content -->
              <div class="date-content">
                  <div class="date-outer">
                      <!-- Date -->
                      <span class="date">
                          <span class="month">1 Year</span>
                          <span class="year">2023</span>
                      </span>
                  </div>
              </div>
              <!-- Timeline content -->
              <div class="timeline-content">
                  <h3>Growth and Expansion</h3>
                  <p class="description">
                      Solidarity Studio expanded its reach and began to gain international recognition. New partnerships were formed to reach and support more people.
                  </p>
              </div>
          </div>
          <!-- Timeline item 4 -->
          <div class="timeline">
              <!-- Timeline icon -->
              <div class="icon"></div>
              <!-- Date content -->
              <div class="date-content">
                  <div class="date-outer">
                      <!-- Date -->
                      <span class="date">
                          <span class="month">1/2 Year</span>
                          <span class="year">2024</span>
                      </span>
                  </div>
              </div>
              <!-- Timeline content -->
              <div class="timeline-content">
                  <h3>Duetto Cittadino Antico</h3>
                  <p class="description">
                      The latest collection from Solidarity Studio, "Duetto Cittadino Antico," celebrates the rich history and culture of past times. Each artwork tells a unique story while supporting important charity projects.
                  </p>
              </div>
          </div>
      </div>
  </div>
</template>

  
<style>
body {
  background-color: #f7f7f7;
  margin-top: 20px;
}

.main-timeline {
  position: relative;
}

.main-timeline:before {
  content: '';
  display: block;
  width: 2px;
  height: 100%;
  background: #d2b89d;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.main-timeline .timeline {
  margin-bottom: 40px;
  position: relative;
}

.main-timeline .timeline:after {
  content: '';
  display: block;
  clear: both;
}

.main-timeline .icon {
  width: 18px;
  height: 18px;
  line-height: 18px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.main-timeline .icon:before,
.main-timeline .icon:after {
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.33s ease-out 0s;
}

.main-timeline .icon:before {
  background: #fff;
  border: 2px solid #232323;
  left: -3px;
}

.main-timeline .icon:after {
  border: 2px solid #d2b89d;
  left: 3px;
}

.main-timeline .timeline:hover .icon:before {
  left: 3px;
}

.main-timeline .timeline:hover .icon:after {
  left: -3px;
}

.main-timeline .date-content {
  width: 50%;
  float: left;
  margin-top: 22px;
  position: relative;
}

.main-timeline .date-content:before {
  content: '';
  width: 36.5%;
  height: 2px;
  background: #d2b89d;
  margin: auto 0;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
}

.main-timeline .date-outer {
  width: 125px;
  height: 125px;
  font-size: 16px;
  text-align: center;
  margin: auto;
  z-index: 1;
}

.main-timeline .date-outer:before,
.main-timeline .date-outer:after {
  content: '';
  width: 125px;
  height: 125px;
  margin: 0 auto;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.33s ease-out 0s;
}

.main-timeline .date-outer:before {
  background: #fff;
  border: 2px solid #232323;
  left: -6px;
}

.main-timeline .date-outer:after {
  border: 2px solid #d2b89d;
  left: 6px;
}

.main-timeline .timeline:hover .date-outer:before {
  left: 6px;
}

.main-timeline .timeline:hover .date-outer:after {
  left: -6px;
}

.main-timeline .date {
  width: 100%;
  margin: auto;
  position: absolute;
  top: 27%;
  left: 0;
}

.main-timeline .month {
  font-size: 18px;
  font-weight: 700;
}

.main-timeline .year {
  display: block;
  font-size: 30px;
  font-weight: 700;
  color: #232323;
  line-height: 36px;
}

.main-timeline .timeline-content {
  width: 50%;
  padding: 20px 0 20px 50px;
  float: right;
}



.main-timeline .description {
  margin-bottom: 0;
}

.main-timeline .timeline:nth-child(2n) .date-content {
  float: right;
}

.main-timeline .timeline:nth-child(2n) .date-content:before {
  left: 10px;
}

.main-timeline .timeline:nth-child(2n) .timeline-content {
  padding: 20px 50px 20px 0;
  text-align: right;
}

</style>
