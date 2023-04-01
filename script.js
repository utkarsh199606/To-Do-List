var list_item = document.querySelectorAll("li");
var add = document.getElementById("add-btn");

function CreateList() {
  add.addEventListener("click", function (e) {
    var _Name = document.getElementById("add-input").value;
    if (_Name === "") {
      alert("You must write something!");
    } else {
      var newlist = document.createElement("li");

      var newp1 = document.createElement("p");
      newlist.appendChild(newp1);
      newp1.setAttribute("class", "para");

      var newp2 = document.createElement("p");
      newlist.appendChild(newp2);

      var i1 = document.createElement("i");
      newp2.appendChild(i1);
      i1.setAttribute("class", "fa-regular fa-pen-to-square");

      var i2 = document.createElement("i");
      newp2.appendChild(i2);
      i2.setAttribute("class", "fa-sharp fa-solid fa-xmark");

      var input = document.createElement("input");
      newlist.appendChild(input);
      input.setAttribute("class", "edit-note");
      input.setAttribute("type", "text");

      var text = document.createTextNode(_Name);
      newp1.appendChild(text);

      var list = document.getElementById("list");
      list.appendChild(newlist);
    }
    textbox();
    cancel();
    e.preventDefault();
  });
}

CreateList();

// creating cancel button

function cancel() {
  var cancel = document.getElementsByClassName("fa-sharp");
  for (let x = 0; x < cancel.length; x++) {
    cancel[x].onclick = function () {
      document.querySelectorAll("li")[x].style.display = "none";
    };
  }
}
cancel();

/* create textbox */

function textbox() {
  var add = document.getElementsByClassName("fa-regular");
  var textbox = document.getElementsByClassName("edit-note");
  for (let x = 0; x < add.length; x++) {
    // let add1 = add[x];
    add[x].addEventListener("click", function () {
      document.getElementsByClassName("edit-note")[x].style.display = "block";
      document.getElementsByClassName("fa-sharp")[x].style.display = "none";
      document.getElementsByClassName("fa-regular")[x].style.display = "none";
      let textbox1 = textbox[x];
      textbox1.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          var textboxVal =
            document.getElementsByClassName("edit-note")[x].value;
          var para = document.querySelectorAll(".para");
          para[x].textContent = textboxVal;
          console.log(document.querySelectorAll(".para")[x].innerHtml);
          document.getElementsByClassName("edit-note")[x].style.display =
            "none";
          document.getElementsByClassName("fa-sharp")[x].style.display =
            "inline";
          document.getElementsByClassName("fa-regular")[x].style.display =
            "inline";
        }
      });
    });
  }
}
textbox();

// Hide All Lists

function show_hide() {
  // document.querySelector(".note-list").classList.toggle('hide');

  var hide_unhide = document.querySelector(".note-list");
  if (hide_unhide.style.display === "none") {
    hide_unhide.style.display = "block";
    var unhide = document.querySelector("label");
    unhide.textContent = "Hide notes";
  } else {
    hide_unhide.style.display = "none";
    var unhide = document.querySelector("label");
    unhide.textContent = "Unhide notes";
  }
}

// search item

function Search() {
  var form = document.querySelector("#search-note input");
  var value = form.value.toUpperCase();
  var para = document.querySelectorAll(".para").textContent;
  var list = document.getElementById("list").children;
  // alert("You pressed a key inside the input field");
  for (let x = 0; x < list.length; x++) {
    var para = document.querySelectorAll(".para")[x].textContent;
    var newpara = para.toUpperCase();

    if (newpara.indexOf(value) > -1) {
      list[x].style.display = "";
    } else {
      list[x].style.display = "none";
    }
  }
}
