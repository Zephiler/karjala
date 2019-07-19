window.addEventListener('DOMContentLoaded', () => {
//  setTimeout(function() {
    let mBox_div1 = document.querySelector("#myBoxOne");
    mBox_div1.addEventListener("click", () => {
      mBox_div1.innerHTML = "Jotain";

      

    })

    let mBox_div2 = document.querySelector("#myBoxTwo");
    mBox_div2.addEventListener("click", () => {
      console.log("button 2 pressed!");
    })

    let mBox_div3 = document.querySelector("#myBoxThree");
    mBox_div3.addEventListener("click", () => {
      console.log("button 3 pressed!");
    })

    let d_t_s = document.querySelector("#div_to_span");
    let input_block = document.querySelector("#blocknumbers");
    let clear_btn = document.querySelector("#clear_button");
    let ok_btn = document.querySelector("#ok_btn");

      // CLEAR BUTTON LOGIC
      clear_btn.addEventListener("click", () => {
        document.getElementById("div_to_span").innerHTML = "";
        input_block.value = "";
        let e = document.querySelector("#main");
        let c = e.lastChild;
          while(c) {
            e.removeChild(c);
            c = e.lastChild;
          }
      })

      // OK BUTTON LOGIC

       ok_btn.addEventListener("click", () => {
       for(let i = 0; i < input_block.value; i++) {
       var para = document.createElement("P");
       para.innerHTML = "This is a paragraph.";
       para.classList.add("myBox");
       document.getElementById("main").appendChild(para)[i];
      }
      })

      // I shold check this block..
      input_block.addEventListener("keyup", () => {
        console.log(input_block.value);

        if(input_block.value == NaN) { console.log("NaN"); }
        else {
          for(let i = 0; i < input_block.value; i++) {
        let x = document.createElement("span");
        let t = document.createTextNode(input_block.value);
        x.appendChild(t);
        d_t_s.appendChild(x);
        }
        }
      })
  // }
  // )
  }

)
