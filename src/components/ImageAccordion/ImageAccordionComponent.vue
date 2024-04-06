<template>
<div class="accordion">
  <ul>
    <li tabindex="1">
      <div>
        <a href="#">
          <h2>Wegbereiter der Bewegung</h2>
          <p> Gemeinden auf neuen Pfaden.</p>
          
        </a>
      </div>
    </li>
    <li tabindex="2">
      <div>
        <a href="#">
          <h2>Quellen der Kraft</h2>
          <p>Für eine erfrischte Welt.</p>
        </a>
      </div>
    </li>
    <li tabindex="3">
      <div>
        <a href="#">
          <h2>Grüne Hüter</h2>
          <p>Für eine waldige Zukunft.</p>
        </a>
      </div>
    </li>
    <li tabindex="4">
      <div>
        <a href="#">
          <h2>Pfotenliebe</h2>
          <p>Streuner schenken Zuhause.</p>
        </a>
      </div>
    </li>
    <li tabindex="5">
      <div>
        <a href="#">
          <h2>Kinderwelten</h2>
          <p>Ein Lächeln, eine Welt.</p>
        </a>
      </div>
    </li>
    <li tabindex="6">
      <div>
        <a href="#">
          <h2>Heilende Hände</h2>
          <p>Für jeden ein Weg zur Gesundheit.</p>
        </a>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false
    };
  },
  methods: {
    flipCard(status) {
      this.isFlipped = status;
    }
  }
};
</script>

<style>





.accordion {

  width:100%;
  max-width:1080px;
  height:60vh;
  overflow:hidden;
  margin:50px auto;

  ul {

    width:100%;
    display:table;
    table-layout:fixed;
    margin:0;
    padding:0;

    li {

      display:table-cell;
      vertical-align:bottom;
      position: relative;
      width:16.666%; 
      height:60vh;

      background-repeat:no-repeat;
      background-position:center center;
      background-size: cover; 

      transition:all 500ms ease;

      div {
        
        display:block;
        overflow:hidden;
        width:100%;

        a {
          
          display:block;
          height:60vh;
          width:100%;

          position:relative;
          z-index:3;
          padding:15px 20px;
          box-sizing:border-box;
          color:#fff;
          text-decoration:none;
          
          transition:all 200ms ease;

          * {

            opacity:0;
            margin:0;
            width:100%;
            text-overflow:ellipsis;
            position:relative;
            z-index:5;
            
            white-space:nowrap;
            overflow:hidden;
            
            -webkit-transform:translateX(-20px);
            transform:translateX(-20px);

            -webkit-transition:all 400ms ease;
            transition:all 400ms ease;

          }

          h2 {

            font-family:Montserrat,sans-serif;
            text-overflow:clip;
            font-size:24px;
            text-transform:uppercase;
            margin-bottom:2px;
            
            top:20px;

          }
          
          p {
            
            top:20px;
            font-size:13.5px;
            
          }

        }

      }

    }
    
    li:nth-child(1) { background-image:url('https://www.lumi4innovation.it/app/uploads/2022/09/smart-mobility-smart-city-cos-%C3%A8-esempi-vantaggi-e-futuro-in-Italia-1024x576.jpg'); }
    li:nth-child(2) { background-image:url('https://www.werri.lbl.gov/wp-content/uploads/sites/18/2018/03/water-1500x630.jpg'); }
    li:nth-child(3) { background-image:url('https://wallpapers.com/images/featured/tree-background-xgzu0ujdd4khh95j.jpg'); }
    li:nth-child(4) { background-image:url('https://images.unsplash.com/photo-1523480717984-24cba35ae1ef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D'); }
    li:nth-child(5) { background-image:url('https://www.savethechildren.org/content/dam/usa/images/global-programs/protection/uganda-refugee-ch192751-rec.jpg/_jcr_content/renditions/original.img.jpg'); }
    li:nth-child(6) { background-image:url('https://www.cato.org/sites/cato.org/files/styles/optimized/public/2021-01/GettyImages-1139851278.jpg?itok=VtCs0qNw'); }

    &:hover li,
    &:focus-within li { width:8%; }
    
    li:focus {
      outline: none;
    }

    &:hover li:hover,
    li:focus,
    &:focus-within li:focus {

      width:60%;

      a {
        
        background:rgba(0,0,0,.4);
        
        * {
          
          opacity:1;
          -webkit-transform:translateX(0);
          transform:translateX(0);
        
        }
      
      }

    }
    
    &:hover li {
      width: 8% !important;
      
      a * { opacity: 0 !important; }
    }
    
    &:hover li:hover {
      width:60% !important;

      a {
        
        background:rgba(0,0,0,.4);
        
        * {
          
          opacity:1 !important;
          -webkit-transform:translateX(0);
          transform:translateX(0);
        
        }
      
      }
    }

  }

}


.about {
  
  text-align:center;
  font-size:12px;
  color:#666;
  
  a {
    
    color:blue;
    text-decoration:none;
    
    &:hover { text-decoration:underline; }
    
  }
  
}
</style>